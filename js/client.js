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
    
            curr_bae.className = "bae_list";
            next_bae.className = 'show';
        if (baeIndex == last_bae) {
            baeIndex = 0;
        } else {
            baeIndex++;
        }

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
        $('.middle_scroll_button').toggle();
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
        
        populateGallery();

    });
var gallery = $('#bottom_picture_wrap');    
var galleryPic = [];
function populateGallery() {
    $.ajax({
        url: "get-baeGallery",
        dataType: "json",
        data: {format: "gallery-list"},
        type: "GET",
        success: function(jsonGallery) {
            console.log("SUCCESS JSON: ", typeof jsonGallery);
            console.log(jsonGallery.length);
            console.log(jsonGallery[0]);
            
            for (let i = 0; i < jsonGallery.length - 1; i++) {
                galleryPic[i] = $('<img>').attr('src', jsonGallery[i].src).attr('alt', jsonGallery[i].alt).attr('class', jsonGallery[i].class);                
            }
            
            for (let i = 0; i < 3; i++) {
                gallery.append(galleryPic[i]);
            }
            var firstGalleryPic = galleryPic[0];
            var middleGalleryPic = galleryPic[1];
            var lastGalleryPic = galleryPic[2];    

        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#p1").text(jqXHR.statusText);
            console.log("ERROR: ", jqXHR, textStatus, errorThrown);
        }
        
    });
}
});
