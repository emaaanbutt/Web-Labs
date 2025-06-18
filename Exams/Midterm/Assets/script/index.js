$(function() {
    $("#previous-tasks").on("click", function() {
      $("#tasks-list").toggleClass("show");
    });
  
    $(document).on("click", function(e) {
      if (!$(e.target).closest("#tasks-list, #previous-tasks").length) {
        $("#tasks-list").removeClass("show");
      }
    });
  });