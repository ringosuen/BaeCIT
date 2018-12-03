$(document).ready(function() {
    
    var baeIndex = 0;
    $('#middle_right_scroll').click(function (e) {
        var bae_li_list = $('#container')[0].children;
        console.log(bae_li_list, 'hello');
        var last_bae = bae_li_list.length - 1;        
        // for (var i = 0; i < bae_li_list.length; i++) {
        
            
            var curr_bae = bae_li_list[baeIndex].firstChild;
            if (baeIndex == last_bae) {
                var next_bae = bae_li_list[0].firstChild;
            } else {
            var next_bae =  bae_li_list[baeIndex + 1].firstChild;
            }
//    console.log(last_bae, 'hello')
    
            curr_bae.className = "bae_list";
            next_bae.className = 'show';
        if (baeIndex == last_bae) {
            baeIndex = 0;
        } else {
            baeIndex++;
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
        // }
        
        
        
        
//        var bae_li = $('#container')
//        console.log(bae_li, 'bae_li')
//        console.log(bae_li[0], 'bae_li[0]')
//        console.log(bae_li[0].children, 'bae_li[0].children')
//        var lala = bae_li[0].children
//        for (var i = 0; i < lala.length; i++) {
//            console.log('li', lala[i])
//        }
    })
      var first_bae = 0;    
      $('#middle_left_scroll').click(function (e) {
        var bae_li_list = $('#container')[0].children;
        
        console.log(bae_li_list, 'fick');
           
            var curr_bae = bae_li_list[baeIndex].firstChild;
            if (baeIndex == first_bae) {
                baeIndex = bae_li_list.length;
                var previous_bae = bae_li_list[baeIndex - 1].firstChild;
            } else {
            var previous_bae =  bae_li_list[baeIndex - 1].firstChild;
            }
                curr_bae.className = "bae_list";
                previous_bae.className = 'show';
                baeIndex--;
        
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
                
        $.ajax({
            url: "get-baeGallery",
            dataType: "json",
            data: {format: "gallery-list"},
            type: "GET",
            success: function(data) {
                console.log("SUCESS JSON: ", typeof data);
                $("#bottom_picture_wrap").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.sttusText);
                console.log("ERROR: ", jqXHR, testStatus, errorThrown);
            }
            
        });  
    });
});
