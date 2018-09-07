/*
//evento click   
//selector evento funcion anonima
$("button").click(function(){
    //una accion
    $("p").hide();
});

$("#eventClickMostrar").click(function(){
    $("p").show();
});

$("#eventClickMostrar").dblclick(function(){
    alert("usted realizo dos click");
});

//mause over colocamos el mause sobre un objeto
$("p").mouseover(function(){
        $("p").css("background-color", "Red");
    });

//mause out salimos de la zona de accion
$("p").mouseout(function(){
    $("p").css("background-color", "green");
});*/

$("#parrafo-ocultar").mouseover(function(){
    $("#parrafo-ocultar").css("background-color", "#2ECCFA");
    $("#parrafo-ocultar").css("color", "white");
   
});
$("#parrafo-ocultar").mouseout(function(){
    $("#parrafo-ocultar").css("background-color", "#BDBDBD");
   
});
