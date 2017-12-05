//var firstList= document.getElementByid("firstTab");
var inputList= document.createElement ("input");
//inputList.setAtribute("type", "text");
var card=document.createElement("tableros");

var nameList=document.createElement("h2");//titulo de la lista
nameList.innerHTML=input.value;
var nameList2=document.createElement("ul");//creando nuevo elemento de lista
var listBotton=document.createElement("boton");// bonton para enviar
crearlistBoton.className="botonEnviar";
crearlistBoton.innerHTML="agregarTarea<br>";
var inputTarea=document.createElement("input");
var tag=document.createElement("etiqueta");
tag.innerHTML="Tarea Nueva<br>";
var edit=document.createElement("button");

listBotton.addEventListener("submit", crearLista);



crearListaBoton.onclick=function(){
  var li=document.createElement("li");
  var del=document.createElement("button");
  del.className="borrar"
  del.innerHTML="borrar tareas";
}

var inputList=document.createElement("input");
edit.onclick=function(){
  nameList.appendChild(inputList);
  edit.ondbclick=function(){
    nameList.innerHTML=inputList.value;
    nameList.appendChild(edit);
  }
}
