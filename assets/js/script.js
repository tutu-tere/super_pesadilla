$(document).ready(function(){ 
  //Validación   
  //Escuchamos el click del formulario
   $("form").on("submit", manejoFormulario)
})

const manejoFormulario = function(event) {
  event.preventDefault();
   //"id"hero
   let idHeroe = $("#numHeroe").val();
 
   validarFormulario(idHeroe);
 
}

function validarFormulario(datos) {
  const token = '5739f919c082050a6eb2e3acfbbcadc6'
  const regex = /^\d+$/; //Estamos pidiendo que parta y termine con digitos
  if (regex.test(datos) && datos > 0 && datos <= 732) {
    //En caso que los datos sean validos aplicamos el Plugin
    $(".heroe").superhero(token, datos) //ojo que aqui salia .heroe entre parentesis
  } else {
    alert ("No se puede buscar el Heroe, intenta con un numero del 1 al 732")
  }
//Enviar un alert en caso de no ser validos
}
