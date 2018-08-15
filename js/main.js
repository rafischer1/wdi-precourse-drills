//g103 Precourse Site .js Sheet with simple JQuery functions
// Artie Fischer

$(document).ready(function(){
    $(".gifBtn").click(function(){
        $(".gif").hide(1000);
    });
});

// $(document).ready(function(){
//     $(".mapBtn").click(function(){
//         $(".map").show(1000);
//     });
// });

$(document).ready(function(){
    $(".mapBtn").click(function(){
        $("div.map").toggle(1000);
    });
  });


  $("#animate").click(function() {
    $("#cat").animate({
      opacity: 0.95,
      left: "+=50",
      height: "toggle"
    }, 2000, function() {
    });
  });
