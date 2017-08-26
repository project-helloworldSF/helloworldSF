$(document).ready(function() {
    
      var commentInput = $("#comment");
      var f_keyInput = $("#f_key");
      console.log(f_keyInput)
      $(document).on("submit", ".comment-form", handleCommentFormSubmit);
    
      function handleCommentFormSubmit(event) {
        event.preventDefault();
    
        upsertComment({
          comment: commentInput.val(),
          f_key: f_keyInput.val(),
          createdAt: '2017-08-24 00:00:00',
          updatedAt: '2017-08-24 00:00:00'
        });
      }
    
      // A function for creating an user. 
      function upsertComment(commentData) {
        $.post("/api/comments", commentData).then(reRoute());
      }
    
      function reRoute() {
        window.location.href = "/bootcamp";
      }
      
    });