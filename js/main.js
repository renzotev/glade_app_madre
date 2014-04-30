document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  
  function backKeyDown() {
    navigator.app.exitApp();
  }  

  function playAudio(url) {
      var my_media = new Media("/android_asset/www/sound/"+url,
              // success callback
               function () { console.log("playAudio():Audio Success"); },
              // error callback
               function (err) { console.log("playAudio():Audio Error: " + err); }
      );
             // Play audio
      my_media.play();
  }

  FastClick.attach(document.body);

  document.addEventListener("backbutton", backKeyDown, true);

   var game_one = function () {

    $(".slides.presentation").on("click", function () {
      $(".slides.presentation").off("click");

      $(this).addClass("fade"); 
      $("#aerosol2").css("opacity", "1");


      $("#aerosol2").on("click", function () {
        $("#aerosol2").off("click");

        $(this).addClass("fade-item");
        $(".sala2").addClass("fade"); 
        

        $("#aerosol2").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
          function(e) {
            playAudio("bells-short.mp3");

            setTimeout(function(){
              $("#glade-toque").css("opacity", "1");
              $("#aerosol2").css("opacity", "0");
            }, 2000);
        });    
      });


    });


    $("#glade-toque").on("click", function () {
      $("#glade-toque").off("click");

      $(this).addClass("fade-item");
      $(".sala1").addClass("fade");
      


      $("#glade-toque").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
          function(e) {
            playAudio("bells-short.mp3");

            setTimeout(function(){
              $("#glade-toque").css("opacity", "0");

              setTimeout(function(){
                $(".one .final-msj").css({"opacity": "1", "z-index": "44"});
                playAudio("bells-large.mp3");

                $(".one .final-msj").on("click", function () {
                  $(".one").css("opacity", "0");
                  $(".two").css("display", "block");
                  $(".two").css("opacity", "1");
                  setTimeout(function(){ 
                    $(".one").css("display","none");
                  }, 3500);
                  
                  $("#aerosol").css("opacity", "1");

                  $("#aerosol").removeClass("fade-item");
                  $("#pastilla").removeClass("fade-item");
                  $(".banio2").removeClass("fade");
                  $(".banio1").removeClass("fade");
                  $(".two .final-msj").css("opacity", "0");
                });

              }, 300);

            }, 2000);
        });    
    });
  };


  var game_two = function () {
    $("#aerosol").on("click", function () {
        $("#aerosol").off("click");

        $(this).addClass("fade-item");
        $(".banio2").addClass("fade"); 
        

        $("#aerosol").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
          function(e) {
            playAudio("bells-short.mp3");

            setTimeout(function(){
              $("#aerosol").css("opacity", "0");
              $("#pastilla").css("opacity", "1");
            }, 2000);
        });              
    });

    $("#pastilla").on("click", function () {
      $("#pastilla").off("click");

      $(this).addClass("fade-item");
      $(".banio1").addClass("fade");
      

        $("#pastilla").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
          function(e) {
            playAudio("bells-short.mp3");

            setTimeout(function(){
              $("#pastilla").css("opacity", "0");

              setTimeout(function(){
                
                $(".two .final-msj").css({"opacity": "1", "z-index": "44"});
                playAudio("bells-large.mp3");

                $(".two .final-msj").on("click", function () {
                  $(".two").css("opacity", "0");
                  $(".one").css("display", "block");
                  $(".one").css("opacity", "1");
                  setTimeout(function(){ 
                    $(".two").css("display","none");
                  }, 3500);
                  

                  $(".slides.presentation").removeClass("fade"); 
                  $("#aerosol2").removeClass("fade-item");
                  $("#glade-toque").removeClass("fade-item");
                  $(".sala2").removeClass("fade");
                  $(".sala1").removeClass("fade");
                  $(".one .final-msj").css("opacity", "0");
                  init();
                });

              }, 300);

            }, 2000);
        });  
    });
  };

  var init = function () {
    $(".final-msj").css("z-index", "0");
    game_one();
    game_two();
  }

  init();

}