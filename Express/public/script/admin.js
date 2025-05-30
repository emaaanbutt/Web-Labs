$("form").on("submit", function (e) {
  e.preventDefault();

  let productID = $("input[name='productID']").val();
  let productData = {
    image: $("input[name='image']").val(),
    description: $("textarea[name='description']").val(),
    price: $("input[name='price']").val(),
  };

  if (productID) {
    $.ajax({
      url: `/admin/men-products/${productID}`,
      method: "PUT",
      contentType: "application/json",
      data: JSON.stringify(productData),
      success: function (response) {
        alert("Product updated successfully!");
        location.reload(); 
      },
      error: function () {
        alert("Failed to update product.");
      },
    });
  } else {
    $.ajax({
      url: `/admin/men-products`,
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(productData),
      success: function (response) {
        alert("Product added successfully!");
        location.reload();
      },
      error: function () {
        alert("Failed to add product.");
      },
    });
  }
});

$(function () {
  $(".del-btn").on("click", function () {
    let productDiv = $(this).closest(".product-cont");
    let productID = productDiv.data("id");

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


  $(".edit-btn").on("click", function () {
  let productDiv = $(this).closest(".product-cont");
  let productID = productDiv.data("id");

  // Get existing data from the product div
  let image = productDiv.find("img").attr("src");
  let description = productDiv.find(".product-desc").text();
  let price = productDiv.find(".product-price").text().replace("$", "");

  // Populate form fields
  $("input[name='image']").val(image);
  $("textarea[name='description']").val(description.trim());
  $("input[name='price']").val(price);

  // Add a hidden input to track we're editing, not adding new
  if (!$("input[name='productID']").length) {
    $("<input>")
      .attr({
        type: "hidden",
        name: "productID",
        value: productID,
      })
      .appendTo("form");
  } else {
    $("input[name='productID']").val(productID);
  }

  // Scroll to form
  $("html, body").animate(
    {
      scrollTop: $("#add-page").offset().top,
    },
    500
  );
});

});

