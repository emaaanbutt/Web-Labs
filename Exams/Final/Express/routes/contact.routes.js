import express from 'express';
import Complaint from '../models/complaint.model.js';

const router = express.Router();

// Show contact form
router.get('/contact', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  res.render('contact');
});

// Handle form submission
router.post('/contact', async (req, res) => {
  if (!req.session.user) return res.status(401).send('Unauthorized');

  const { orderId, message } = req.body;

  try {
    await Complaint.create({
      userId: req.session.user._id,
      orderId,
      message
    });

    res.redirect('/?success=1');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error submitting complaint.");
  }
});

router.get('/my-complaints', async (req, res) => {
  if (!req.session.user) return res.redirect('/login');

  try {
    const complaints = await Complaint.find({ userId: req.session.user._id }).sort({ createdAt: -1 });
    res.render('my-complaints', { complaints });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading complaints.');
  }
});

router.get('/all-complaints', async (req, res) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.status(403).send('Access denied.');
  }

  try {
    const complaints = await Complaint.find({}).populate('userId', 'name email');
    res.render('all-complaints', { complaints });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading complaints.');
  }
});

export default router;
