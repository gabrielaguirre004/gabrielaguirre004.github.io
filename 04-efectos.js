$(document).ready(function() {
    // efectos de ocultar y mostrar botones con jQuery 
    var caja = $("#caja");
  $("Mostrar").hide();

  $("#Mostrar").click(function(){
    $(this).hide();
    $("#Ocultar").show();

    caja.slideDown("slow");
  });

  $("#Ocultar").click(function(){
    $(this).hide();
    $("#Mostrar").show();

    caja.slideUp("slow",function(){
        console.log("Cartel ocultado");
    });
    
  });  

$("#todoenuno").click(function(){
    caja.slideToggle("fast");
    // fast , slide 
});

$("#Animame").click(function(){
    caja.animate({
                    marginLeft: "1000px",
                    fontSize:"40px",
                    height: '110px'                   
                      },"slow")
    .animate({
              borderRadius:'900px',
              marginTop:'300px'
               },'slow')  
    .animate({
                borderRadius:'0px',
                marginLeft:'0px'
                 },'slow')                         
    .animate({
                 borderRadius:'100px',
                 marginTop:'0px'
                 },'slow')
     .animate({
                    marginLeft: "1000px",
                    fontSize:"40px",
                    height: '110px'                   
                      },"slow")                               
                                
                      
                      
                      
    ;
});

});