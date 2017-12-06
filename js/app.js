window.addEventListener("load", function() {  //Se declara evento con la carga de la página y llama la funcion que se declara en el mismo evento. 
	var noteOne = document.getElementById("firstAdd"); //Se declara variable para llamar al elemento con id "firstAdd"
	var noteTwo = document.getElementById("note"); 
	var btn = document.getElementById("btn");
	var addInfo = document.getElementById("addInfo");
	

	noteOne.addEventListener("click", function(){ //Evento con función
		mostrarInput();

		noteOne.style.display = "none";

    });

	btn.addEventListener("click", function(e) {
		e.preventDefault();
		addTittle(noteTwo, this);
		addInfo.style.display = "none";
		addDiv();
	});

	function mostrarInput(){
		addInfo.style.display ="block";
	}

	function addTittle(noteTwo, noteOne){
		var div = document.createElement("div");
		var btn = document.createElement("button");

		div.classList.add("nameList");
		btn.classList.add("addCardInfo");


		div.innerHTML = noteTwo.value;
		btn.textContent = "Añadir una tarjeta...";

		var insertar = noteOne.parentElement.parentElement;
		insertar.insertBefore(btn, insertar.childNodes[0]);
		insertar.insertBefore(div, insertar.childNodes[0]);
		noteTwo.value="";
	}

	function addDiv(){   //Función para publicar el nuevo pin, su nombre y el nuevo campo.
		var newNote = document.createElement("div");
		board.appendChild(newNote);
		newNote.classList.add("newNote");

		newNote.insertBefore(noteOne, newNote.childNodes[0]);
		newNote.insertBefore(addInfo, newNote.childNodes[1]);

		noteOne.classList.add("addPin"); //Asigna la clase "addPin" al elemento. 
		noteOne.style.display = "block";
	}
});
