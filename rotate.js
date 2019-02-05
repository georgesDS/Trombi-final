
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block"; 
   
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// Code Carroussel

(function($){
	$.fn.carousel3d = function(args){

  var el = ({
    carousel_frame: $(this)
  });

  var size = el.carousel_frame.children().size(); 
  var panelSize = el.carousel_frame.width();
  var translateZ = Math.round( ( panelSize / 2 ) / Math.tan( Math.PI / size ) );

  el.carousel_frame.css({
    "transform": "rotateY(0deg) translateZ(-"+translateZ+"px)"
  })

  var rotateY = 0;
  var rotate_int = 100;
  var ry =  360/size;
  var box = 0;

  function animate_slider(){
    rotateY = ry*rotate_int;
    $("#test").text(rotateY+", "+rotate_int+", ");
    
    for(i=0;i<size;i++){
      var z = (rotate_int*ry)+(i*ry);   
      el.carousel_frame.children("figure:eq("+i+")").css({
        "transform":"rotateY("+z+"deg ) translateZ("+translateZ+"px)"
      });
    }
    
    rotateY = 0;
    box = 0; // reset rotateY, ready for re-use
  }

  animate_slider();

  $(".next").on("click", function(){
    rotate_int -=1;
    animate_slider();
  });

  $(".prev").on("click", function(){
    rotate_int +=1;
    animate_slider();
  });

  el.carousel_frame.children().on("click", function(){
    new_int = -1*$(this).index();
    if(new_int < rotate_int+(-1*(size/2)) ){
      rotate_int = size + new_int;
    } else {
      rotate_int = new_int;
    }

    animate_slider();

  });
//============= animation du caroussel image par image ================================
function rotateGDS(){

	rotate_int++;
    animate_slider();
	setTimeout(rotateGDS, 3000);
  };
  
  setTimeout(rotateGDS, 0);


//=============  CUBE 3D  ==================================================================

  var count = 0; //Compteur pour que le cube excecute un code à chaque incrémentation et recommence 

    function animationCube(){

      if (count ==0) {
        $(".cube").removeClass("turncube"); //on enlève à chaque fois toutes les classes déjà appliquées pour repartir de la base
        $(".cube").removeClass("turncube4");
        $(".cube").removeClass("turncube3");
        $(".cube").removeClass("turncube2");
        $(".cube").removeClass("turncube6");

        $(".cube").addClass("turncube"); //on rajoute la classe .turncube à partir du css (pour appliquer la rotation)
      }
      if (count == 1) {
        $(".cube").removeClass("turncube");
        $(".cube").removeClass("turncube4");
        $(".cube").removeClass("turncube3");
        $(".cube").removeClass("turncube2");
        $(".cube").removeClass("turncube6");
          
        $(".cube").addClass("turncube2");
      }
       if (count == 2) {
        $(".cube").removeClass("turncube");
        $(".cube").removeClass("turncube4");
        $(".cube").removeClass("turncube3");
        $(".cube").removeClass("turncube2");
        $(".cube").removeClass("turncube6");

          
          $(".cube").addClass("turncube6");
      }

      if (count == 3) {
        $(".cube").removeClass("turncube");
        $(".cube").removeClass("turncube4");
        $(".cube").removeClass("turncube3");
        $(".cube").removeClass("turncube2");
        $(".cube").removeClass("turncube6");

          $(".cube").addClass("turncube4");
      }

      if (count == 4) {
        $(".cube").removeClass("turncube");
        $(".cube").removeClass("turncube4");
        $(".cube").removeClass("turncube3");
        $(".cube").removeClass("turncube2");
        $(".cube").removeClass("turncube6");

          $(".cube").addClass("turncube3");
          count = -1; //
      }
       if (count == 5) {
        $(".cube").removeClass("turncube");
        $(".cube").removeClass("turncube4");
        $(".cube").removeClass("turncube3");
        $(".cube").removeClass("turncube2");
        $(".cube").removeClass("turncube6");
        
          $(".cube").addClass("turncube5");
          //count = -1;
      }
    count++;
    setTimeout(animationCube, 3000); //pour interval 3s entre chaque action
      
}
	setTimeout(animationCube, 0);//pour lancer l'animation 


//==============================================================

}
})(jQuery);


