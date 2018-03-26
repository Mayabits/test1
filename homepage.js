/*
1.- Crear un código html con un JS asociado
2.- Descargar los datos mediante uan petición AJAX desde una URL "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2" JSON y colocarlos en una variable llamada datos
3.- Presentar los datos en un formato listado (ul+li)
4.- Presentar los datos en un formato de tabla (tr+td)
5.- Presentar los datos en un formato grid (bootstrap+col-6)
6.- Guardar los datos en indexeddb para luego consultarlos antes de hacer la petición ajax

Ejemplo:
var tiendas;
function mostrar(tiendasfiltrado){
    $.each(tiendasfiltrado,function(i,persona){
        //each es un bucle que recorre el array. persona son todos los elementos del array
        $("#sugerencias").append("<li>"+persona.agentfirstname+"</li>")
        //append significa añadir(hacer un injerto)
    });
};
var criterio;
function almacenar(){
    criterio=$("#texto").val();
    $("#sugerencias").html("");
    var tiendas_filtrado=filtra(tiendas,criterio);
    mostrar(tiendas_filtrado);
}
//resultados
function filtra(tiendas, patron){
    var tiendas_filtrado=[];
    //corchetes vacíos significa Array vacío
    for(var item of tiendas){
        if(item.agentfirstname!= null && item.agentfirstname.includes(patron)){
        tiendas_filtrado.push(item)};
    }
     return tiendas_filtrado;
        //item es un elemento random. != significa NO
    
}
Cambio título por title 
y libro por movie


*/
var datos; 
function cosa (){
 $.getJSON("https://demo2697834.mockable.io/movies,function(json){ datos=json; 
 console.log(datos);
 $.each(json,function(i,entries){
     //haz un bucle en el array json y ejecuta una función que recorra el array y le pasamos el índice y libro que es cada uno de los elementos
    //puedo poner json o datos porque los he igualado anteriormente
        $("#listado").append("<li>Título:"+title.entries+" Autor:"+libro.autor+"</li>");
     //con el punto accedemos a las propiedades de los elementos del Array
        
    }) 
  $.each(json,function(i,libro){
      $("#tbody").append("<tr>"+"<td>"+libro.titulo+"</td>"+"<td>"+libro.autor+"</td>"+"</tr>")
  })  
   $.each(json,function(i,libro){
       
   })                                                                         
                                                                           });
};
