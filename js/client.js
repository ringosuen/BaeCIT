$(document).ready(function() {
    
    
    $('#middle_right_scroll').click(function (e) {
        var bae_li_list = $('#container')[0].children
        
        console.log(bae_li_list, 'hello')
        
        for (var i = 0; i < bae_li_list.length; i++) {
            var curr_bae = bae_li_list[i].firstChild
            var next_bae =  bae_li_list[i + 1].firstChild
            //var last_bae = bae_li_list.length-1
            var current_class_name = curr_bae.className
            
//    console.log(last_bae, 'hello')
    
            if (current_class_name === 'show') {
                curr_bae.className = "bae_list"
                next_bae.className = 'show'
                break
            }
//            if (last_bae === 'show') {
//                curr_bae.className = "bae_list"
//                next_bae.className = 'show'
//                break
//            }
//                
                //            if (bae_li_list.length-1) {
//                

//            }
            
//            console.log(bae_li_list[i].hasClass( "show" ))
//            console.log(bae_li_list[i].attr("class", 'hi'))
//            var li_class = bae_li_list[i].attr('class')
//            console.log('li', li_class)
        }
        
        
        
        
//        var bae_li = $('#container')
//        console.log(bae_li, 'bae_li')
//        console.log(bae_li[0], 'bae_li[0]')
//        console.log(bae_li[0].children, 'bae_li[0].children')
//        var lala = bae_li[0].children
//        for (var i = 0; i < lala.length; i++) {
//            console.log('li', lala[i])
//        }
    })
    
      $('#middle_left_scroll').click(function (e) {
        var bae_li_list = $('#container')[0].children
        
        console.log(bae_li_list, 'fick')
        
        for (var i = 1; i < bae_li_list.length; i++) {
            var curr_bae = bae_li_list[i].firstChild
            var previous_bae =  bae_li_list[i - 1].firstChild
            var last_bae = bae_li_list.length-1
            var current_class_name = curr_bae.className
            
    
            if (current_class_name === 'show') {
                curr_bae.className = "bae_list"
                previous_bae.className = 'show'
                break
            }
        }        
    })
    
    // CONTACT THE SERVER AND GET THE DATE FROM THE SERVER
    $('#baeButton').click(function (e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "get-person",
            dataType: "html",
            data: {format: "girl-list"},
            type: "GET",
            success: function(data) {
        
            console.log("SUCCESS HTML:", typeof data);
            $("#middle_picture_wrap").html(data);


            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
        
 
        
    });
    


//    // INTENTIONALLY GET A 404 FROM THE SERVER
//    $('#mainMenu #getBadURL').click(function(e) {
//
//        // don't allow the anchor to visit the link
//        e.preventDefault();
//
//        $.ajax({
//            url: "/ajax-GET-SOMETHING-THAT-DOESNT-EXIST",
//            dataType: "json",
//            type: "GET",
//            success: function(data) {
//                $("#p1").text(data['msg']);
//                console.log("SUCCESS:", data);
//
//            },
//            error: function(jqXHR, textStatus, errorThrown) {
//                $("#p1").text(jqXHR.statusText);
//                console.log("ERROR:", jqXHR, textStatus, errorThrown);
//            },
//            // handle a 404 (i.e., page not found)
//            statusCode: {
//                404: function() {
//                    $("#p1").text("Page doesn't exist.");
//                }
//            }
//        });
//    });
//
//    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
//    $('#mainMenu #getHTMLList').click(function(e) {
//
//        // don't allow the anchor to visit the link
//        e.preventDefault();
//
//        $.ajax({
//            url: "/ajax-GET-list",
//            dataType: "html",
//            type: "GET",
//            data: { format: "html-list"},
//            success: function(data) {
//                console.log("SUCCESS HTML:", data);
//                $("#content").html(data);
//
//            },
//            error: function(jqXHR, textStatus, errorThrown) {
//                $("#p1").text(jqXHR.statusText);
//                console.log("ERROR:", jqXHR, textStatus, errorThrown);
//            }
//
//        });
//    });
//
//
//    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
//    $('#mainMenu #getJSONList').click(function(e) {
//
//        // don't allow the anchor to visit the link
//        e.preventDefault();
//
//        $.ajax({
//            url: "/ajax-GET-list",
//            dataType: "json",
//            type: "GET",
//            data: { format: "json-list"},
//            success: function(data) {
//                console.log("SUCCESS JSON:", data);
//                var div = $("#content");
//                let htmlStr = "<ul>";
//                for(let i = 0; i < data.length; i++) {
//                    htmlStr += "<li>" + data[i] + "</li>";
//                }
//                htmlStr += "</ul>";
//                div.html(htmlStr);
//
//            },
//            error: function(jqXHR, textStatus, errorThrown) {
//                $("#p1").text(jqXHR.statusText);
//                console.log("ERROR:", jqXHR, textStatus, errorThrown);
//            }
//        });
//    });
//
//
//    // PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
//    $('#submit').click(function(e) {
//        let formData = { firstName: $("#firstName").val(),
//                         lastName: $("#lastName").val(),
//                         email: $("#email").val()
//                       };
//        console.log("Form data to send:", formData);
//        $.ajax({
//            url: "/post-form",
//            dataType: "json",
//            type: "POST",
//            data: formData,
//            success: function(data) {
//                console.log("SUCCESS JSON:", data);
//                // how do we know what we are getting?
//                $("#p2").html(data[0] + " " + data[1]['firstName']
//                              + " " + data[1]['lastName']
//                              + " " + data[1]['email']
//                             );
//
//            },
//            error: function(jqXHR, textStatus, errorThrown) {
//                $("#p2").text(jqXHR.statusText);
//                console.log("ERROR:", jqXHR, textStatus, errorThrown);
//            }
//        });
//    });

});
