$(function(){
  $("form").on("submit", function (e) {
  e.preventDefault();

  const productID = $("input[name='productID']").val().trim(); // will be "" if not set
  const productData = {
    image: $("input[name='image']").val(),
    description: $("textarea[name='description']").val(),
    price: $("input[name='price']").val(),
  };

  if (productID) {
    // Edit mode
    $.ajax({
      url: `/admin/men-products/${productID}`,
      method: "PUT",
      contentType: "application/json",
      data: JSON.stringify(productData),
      success: function () {
        alert("Product updated successfully!");
        resetForm();
        location.reload(); // refresh product list
      },
      error: function () {
        alert("Failed to update product.");
      },
    });
  } else {
    // Add mode
    $.ajax({
      url: `/admin/men-products`,
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(productData),
      success: function () {
        alert("Product added successfully!");
        resetForm();
        location.reload();
      },
      error: function () {
        alert("Failed to add product.");
      },
    });
  }
});

function resetForm() {
  $("form")[0].reset();
  $("input[name='productID']").val("");
  $("#form-heading").text("Add New Product");
}

$(".edit-btn").on("click", function () {
  const productDiv = $(this).closest(".product-cont");
  const productID = productDiv.data("id");

  const image = productDiv.find("img").attr("src");
  const description = productDiv.find(".product-desc").text().trim();
  const price = productDiv.find(".product-price").text().replace("$", "").trim();

  $("input[name='image']").val(image);
  $("textarea[name='description']").val(description);
  $("input[name='price']").val(price);
  $("input[name='productID']").val(productID);

  $("#form-heading").text("Edit Product");

  $("html, body").animate(
    {
      scrollTop: $("#add-page").offset().top,
    },
    500
  );
});

$(".del-btn").on("click", function () {
  const productDiv = $(this).closest(".product-cont");
  const productID = productDiv.data("id");

  $.ajax({
    url: `/admin/men-products/${productID}`,
    method: "DELETE",
    success: function (response) {
      if (response.success) {
        productDiv.remove();
      } else {
        alert("Failed to delete the product.");
      }
    },
    error: function () {
      alert("Something went wrong on the server");
    },
  });
});

});