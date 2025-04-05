function displayProducts(){
    $.ajax({
        url: "https://fakestoreapi.com/products",
        method: "GET",
        dataType : "json",
        success: handleResponse,
        error: function(error){
            console.error("Error fetching products: ", error);
        }
    });
}

function handleResponse(data){
    var productList = $("#products");
    productList.empty();

    $.each(data, function(index, product){
        appendProduct(product);
    });
}

function appendProduct(product)
{
    var productList = $("#products");

    productList.append(
        `<div class="product-div"><h3 class="title">${product.title} </h3><img class="image" src="${product.image}"><h4 class="price">${product.price}</h4><p class="description">${product.description}</p><h4 class="category">${product.category}</h4><button data-id="${product.id}" class="edit">Edit</button><button data-id="${product.id}" class="delete">Delete</button></div>`
    );
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
            $(`button[data-id="${id}"]`).parent().remove();
        },
        error: function(error){
            console.error("Error deleting product: ", error);
        }
    });
}

$(function(){
    $("#create").on("click",  function(){
        const productData = {
            title: $("#title").val(),
            price: $("#price").val(),
            description: $("#description").val(),
            category: $("#category").val(),
            image: $("#image").val()
        };

        createProduct(productData);
    });
});

function createProduct(productData)
{
    $.ajax({
        url: "https://fakestoreapi.com/products",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(productData),
        success: function(newProduct){
            appendProduct(newProduct);
            clearInputs();
        },
        error: function(error){
            console.error("Error creating product: ", error);
        }
    });
}

let currentEditID = null;

function updateProduct(productID, updatedData)
{
    $.ajax({
        url: `https://fakestoreapi.com/products/${productID}`,
        method: "PUT",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(updatedData),
        success: function(updatedProduct){

            let productDiv = $(`button[data-id="${productID}"]`).closest(".product-div");

            productDiv.find(".title").text(updatedProduct.title);
            productDiv.find(".price").text(updatedProduct.price);
            productDiv.find(".description").text(updatedProduct.description);
            productDiv.find(".category").text(updatedProduct.category);
            productDiv.find(".image").attr("src", updatedProduct.image);

            clearInputs();
            hideSaveButton();
            currentEditID = null;

        },
        error: function(error){
            console.error("Error updating product: ", error);
        }
    });
}

$(function(){
    $("#products").on("click", ".edit", function(){

        currentEditID = $(this).data("id");

        $("#title").val($(this).parent().find(".title").text());
        $("#price").val($(this).parent().find(".price").text());
        $("#description").val($(this).parent().find(".description").text());
        $("#category").val($(this).parent().find(".category").text());
        $("#image").val($(this).parent().find(".image").attr("src"));

        displaySaveButton();

    });

    $("#buttons").on("click", "#save", function(){

        if (!currentEditID)
        {
            return;
        }

        let updatedTitle = $("#title").val();
        let updatedPrice = $("#price").val();
        let updatedDescription = $("#description").val();
        let updatedCategory = $("#category").val();
        let updatedImage = $("#image").val();


        let updatedData = {
            title : updatedTitle,
            price : updatedPrice,
            description : updatedDescription,
            category : updatedCategory,
            image : updatedImage
        }

        updateProduct(currentEditID, updatedData);
    });
});


function displaySaveButton(data_id){
    $("#save").addClass("display");
    $("#save").removeClass("hidden");
}

function hideSaveButton(){
    $("#save").removeClass("display");
    $("#save").addClass("hidden");
}

function clearInputs()
{
    $("#title").val('');
    $("#price").val('');
    $("#description").val('');
    $("#category").val('');
    $("#image").val('');
}