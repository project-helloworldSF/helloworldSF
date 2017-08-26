$(document).ready(function() {

  $.get('/api/bootcamp', function(data) {
    for (var i = 0; i < data.length; i++) {
      var bootcamp_html =
        '<div class="row bootcamp">' +
        '<div class="col-md-4 bootcamp_image">' +
        '<a href="' + data[i].url + '" target="_blank">' +
        '<img class="logos" src="' + data[i].logo + '" alt="">' +
        '</a>' +
        '</div>' +
        '<div class="col-md-8">' +
        '<h3>Name: ' + data[i].name + '</h3>' +
        '<h4>Outcomes: ' + data[i].outcomes + '%</h4>' +
        '<h4>Location: ' + data[i].location + '</h4>' +
        '<h4>Rating: ' + data[i].rating + '/5</h4>' +
        '<h4>Technology: ' + data[i].technology + '</h4>' +
        '<h4>Duration: ' + data[i].duration + ' months</h4>' +
        '<h4>Costs: $' + data[i].costs + '</h4>' +
        '</div>' +
        '<form class="comment-form">' +
        '<div class="form-group">' +
        '<label for="comment">Comment:</label>' +
        '<textarea class="form-control" rows="5" id="comment"></textarea>' +
        '<button id="comment-btn" type="submit" class="btn btn-default landing-btn">Submit Comment</button>' +
        //hidden key for table join sending the right key for the comment associated to the school.
        '<div style="display:none;"><input id="f_key" >' + data[i].comments + '</div>' +
        '</div>' +
        '</form>' +
        '<h3 style="text-align:center;">Bootcamper Comments:</h3>' +
        //div for appending comments after get below
        '<div class="for-comments" id="' + data[i].comments + '"></div>' +
        '<hr style="max-width:95%;">' +
        '</div>';
      $("#bootcamp_list").append(bootcamp_html);
    }
  });

  $.get('/api/comments', function(data) {
    for (var i = 0; i < data.length; i++) {
      var comments_html =
        '<div class="row comments-row">' +
        '<h4>- ' + data[i].comment + '</h4>' +
        '<div style="display:none;"><input id="f_key" >' + data[i].f_key + '</div>' +
        '</div>';
      $('#'+data[i].f_key).append(comments_html);
    }
  });

});
