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
});
