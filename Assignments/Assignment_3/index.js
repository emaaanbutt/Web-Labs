function displayProducts(){
    $.ajax({
        url: "https://fakestoreapi.com/products",
        method: "GET",
        dataType : "json",
        success: handleResponse,
        error: function(error){
            console.error("Error fetching stories:", error);
        }
    });
}

function handleResponse(data){
    var productList = $("#products");
    productList.empty();

    $.each(data, function(index, product){
        productList.append(
            `<div><h3>${product.title} </h3><h4>${product.price}</h4><p>${product.description}</p><h4>${product.category}</h4><button data-id="${product.id}" class="edit">Edit</button><button data-id="${product.id}" class="delete">Delete</button></div>`
        );
    });
}

$(function(){
    displayProducts();
});

$(function() {
    $("#products").on("click",".delete", function(){
        var id = $(this).data("id");
        console.log("Deleting product ID:", id); 
        deleteProduct(id);
    });
});

function deleteProduct(id){
    $.ajax({
        url: "https://fakestoreapi.com/products/"+ id,
        method: "DELETE",
        success: function(){
            $(`button[data-id="${id}"]`).closest("div").remove();
        },
        error: function(error){
            console.error("Error fetching stories:", error);
        }
    });
}