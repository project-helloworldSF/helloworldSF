/**
 * Created by DNA2 on 8/25/17.
 */

    //get route linked to the backend - that gives us the bootcamps json
    $.get('/api/users/', function(data) {
        //data is the authors json
        console.log(data);
        //looping through each object
        for (var i = 0; i < data.length; i++) {
            //Dynamically creating html by concatenating data from the json
            var user_html =
                '<div class="row">' +
                '<div class="col-md-5 margin-fix">' +
                '<div class="image-cropper">' +
                '<img class="rounded" src="' + data[i].profile_pic + '"/>' +
                '</div>' +
                '<h3>Username: ' + data[i].username + '</h3>' +
                '</div>' +
                '<div class="col-md-7 margin-fix">' +
                '<h4>Age: ' + data[i].age + '</h4>' +
                '<h4>Gender: ' + data[i].gender + '</h4>' +
                '<h4>Ethnicity: ' + data[i].ethnicity + '</h4>' +
                '<h4>Bootcamp: ' + data[i].bootcamp_name + '</h4>' +
                '<h4>Date Range: ' + data[i].date_range + '</h4>' +
                '<h4>Location: ' + data[i].location + '</h4>' +
                '<h4>Employed: ' + data[i].employed + '</h4>' +
                '<h4>Title: ' + data[i].title + '</h4>' +
                '<h4>Salary: $' + data[i].salary + '</h4>' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="form-group" id="center-text">' +
                '<label for="comment" style="text-align:center;">Send me a message:</label>' +
                '<textarea class="form-control" rows="5" id="comment"></textarea>' +
                '</div>' +
                '<button type="button" onClick="window.location.reload();" class="btn btn-default landing-btn">Send Message</button>' +
                '</div>' +
                '<hr>' +
                '</div>';
            $("#user_list").append(user_html);
        }
    });

