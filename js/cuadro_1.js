$(document).mouseup(function(e) 
{
    var container = $('#ceremonia');

    // Si el elemento cliqueado no pertenece al contenedor padre
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
	
});
(function($) {


//almacenando el div y el boton en unas variables
var div = document.getElementById('ceremonia');
var but = document.getElementById('boton1');


//la funcion que oculta y muestra
function showHide(e){
e.preventDefault();
e.stopPropagation();
if(div.style.display == "none"){
div.style.display = "block";
} else if(div.style.display == "block"){
div.style.display = "none";
}
}
//al hacer click en el boton
but.addEventListener("click", showHide, false);

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e){

//obtiendo informacion del DOM para  
var clic = e.target;

if(div.style.display == "block" && clic != div){
 div.style.display = "none";
}
}, false);

}

)(jQuery);
