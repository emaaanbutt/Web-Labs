$(function(){
    $("#previous-tasks").on("click", function(){
        $("#tasks-list").toggle();
    });

    $("document").on("click", function(e){
        if (!$(e.target).closest("#tasks-list".length)){
            $("#tasks-list").hide();
        }
    });
});