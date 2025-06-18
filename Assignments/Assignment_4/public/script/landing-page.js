$("#register").on("click", function () {
  window.location.href = "/register";
});

document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const product = {
      productId: btn.dataset.id,
      description: btn.dataset.description,
      price: parseFloat(btn.dataset.price),
    };

    const res = await fetch("/add-to-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product }),
    });

    if (res.status === 401) {
      alert("Please login first!");
      window.location.href = "/login";
    } else if (res.ok) {
      alert("Item added to cart");
    }
  });
});

$("#asos-logo").on("click", function () {
  window.location.href = "/";
});
