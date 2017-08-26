$(document).ready(function() {
    
      var commentInput = $(".comment").val();
      var f_keyInput = $(".f_key").val();

      console.log(f_keyInput);

      $(document).on("submit", ".comment-form", handleCommentFormSubmit);
    
      function handleCommentFormSubmit(event) {
        event.preventDefault();
    
        upsertComment({
          // comment: commentInput,
          // f_key: f_keyInput,
          comment: 'free coffee would be nice',
          f_key: 'berkeley',
          createdAt: '2017-08-24 00:00:00',
          updatedAt: '2017-08-24 00:00:00'
        });
      }
    
      // A function for creating an user. 
      function upsertComment(commentData) {
        $.post("/api/comments", commentData).then(window.location.href = "/bootcamp");
      }
    
      function reRoute() {
        window.location.href = "/bootcamp";
      }
      
    });