// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    console.log(".change-devoured");
    console.log(newDevoured);

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  // $(function() {
  //   $(".delete-cat").on("click", function(event) {
  //     var id = $(this).data("id");

  //     // Send the PUT request.
  //     $.ajax("/api/cats/" + id, {
  //       type: "DELETE"
  //     }).then(
  //       function() {
  //         console.log("Deleted Cat ID", id);
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
  // });

  
  $("#add-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurgers = {
      burgersName: $("#ca").val().trim(),
      //devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgers
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
