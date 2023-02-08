const paisesLatam = [ 
    "Argentina",  //0
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Guyana",
    "Guyana Francesa",
    "Paraguay",
    "Ecuador",
    "Perú",
    "Suriname",
    "Uruguay",
    "Venezuela",
]

// let paisesDuplicado = paisesLatam

// paisesDuplicado[2] = true; //si nosotros le asignamos aca, va a cambiar para los 2 array, entonces para romper esa referencia usamos la siguiente forma, primero no usamos la igualdad siguiente let paisesDuplicado = paisesLatam

//**Opciones para copiar array y romper la referencia del original

let paisesDuplicado = Array.from(paisesLatam) //asi es como se crea un nuevo vector de otro vector


let paisesDuplicado2 = [...paisesLatam] //esto se lo considera spreed, osea los 3 puntitos quiere decir que por elemento va a ir colocandolo aca dentro


let paisesDuplicado3 = paisesLatam.slice();

let paisesDuplicado4 = paisesLatam.map((pais)=> {return pais}) //lo que hace es irlo guardando elemento por elemento

paisesDuplicado[2] = true;
paisesDuplicado.push(`**NUEVO`)


console.log(`paisesLatam`, paisesLatam)
console.log(`paisesDuplicado`, paisesDuplicado)

let tableBody = document.getElementById('table-body')

// for(let i = 0; 1 < paisesLatam.length; i++){
    
//     tableBody.innerHTML += `<tr>
//                                 <td><strong>${i+1}</strong></td>}
//                                 <td>${paisesLatam[i]}</td>
//                             </tr>`;
// }

// const paisesFiltrados = [];
// //**Array.forEach => Otra forma de iterar un array
paisesLatam.forEach(function(pais, index){

// if(pais.toLowerCase().includes('e')){ //lo que va a hacer es fijarse todos los paises que tienen una e y lo convierte en minuscula porque esta Ecuador con la primera letra en mayus
    tableBody.innerHTML += `<tr>
    <td><strong>${index+1}</strong></td>
        <td>${pais}</td>
    </tr>`;

//     paisesFiltrados.push(pais);
// }

    

    // index++
})

console.log(paisesFiltrados)

const nombreDePaisesUppercase = []

function metodoMap(){
    tableBody.innerHTML = ''
    const arrayNuevoMap = paisesLatam.map(function(pais, index){
        const paisMay = pais.toUpperCase();
        return paisMay
    })

    pintarTable(arrayNuevoMap)
}

function metodoFilter1(text){
    console.log(text)
    const paisesFiltrados = paisesLatam.filter((pais) =>{
        const filtra = pais.toLowerCase().includes(text)//aca va a filtrar los paises que tengan el texto que se ingrese
        return filtra;
    })

    // const paisesFiltrados = paisesLatam.filter((pais) => pais.toLowerCase().includes(text)) //esta es una forma de escribir lo escrito anteriormente, todo se puede escribir en una linea

    // pintarTable(paisesFiltrados)
}


function metodoFilter(evt){//METODO QUE SE USA EN LA CLASE, EL OTRO ES DE EJEMPLO
    //Frenando al busqueda si la tecla no es la que tiene el codigo 13 (ENTER)
    if(evt.keyCode !== 13){ //este es un codigo que se puede ver en la parte de consola cuando se ejecuta la pagina
        console.log(`No apreto enter`)
        return pintarTable(paisesFiltrados) //si no quiero que retorne nada, solo el consoleLog que no apreto enter, saco lo que devuelve el return para eso
    }
    
    const text =  evt.target.value.toLowerCase();

    const paisesFiltrados = paisesLatam.filter((pais) =>{
        const filtra = pais.toLowerCase().includes(text)//aca va a filtrar los paises que tengan el texto que se ingrese
        return filtra;
    })

    pintarTable(paisesFiltrados)
}

function metodoFind(evt){
    if(evt.keyCode !== 13) return;

    const text = evt.target.value.toLowerCase().trim(); //lo que hace el .trim() es que al texto que s ecoloca, si se le pone un espacio en cualquier parte, esta funcion lo elimina para buscar el texto, sin espacios al final ni al principio   
    const paisEncontrado = paisesLatam.find((pais) => {
        if(text === pais.toLowerCase()){
            return true;
        }
        return false       
    });

    if(paisEncontrado)alert(`Se encontró el país que busca`)
    else alert(`No se encontró el país que busca`)
    // console.log(paisEncontrado)
}

function metodoFindIndex(evt){
    if(evt.keyCode !== 13) return;
    const text = evt.target.value.toLowerCase().trim();  

    const indice = paisesLatam.findIndex((pais)=> {
        if(text === pais.toLowerCase()){
            return true;
        }
        return false     
    })

    console.log(indice)
    
    if(indice >= 0){ //pregunta si esta dentro del vector
        //Metodo splice para borrar uno o mas elementos de un array
        paisesLatam.splice(indice, 1)//si ponemos un 1 quiere decir que va a borrar a ese solo, si ponemos mas va a borrar a partir de ese que encuentra para adelantte, osea si ponemos el indice de colombia y ponemos 3, va a borrar a colombia y a las 2 guyanas

        evt.target.value='' //si quiero borrar, ahi borra pero reinicia con esta linea el input donde estaba escribiendo, como para escribir otro
    }
    pintarTable(paisesLatam)
}

//el metodo filk lo que hace es que a partir de ese elemento que encuentro, rellarlo con otra cosa que le pida, ese metodo solo lo explicó teoricamente

//el metodo copyWithin del elemento que busco copio lo primero y lo imprimo a partir de lo siguiente repitiendo, tambein explico teoria

//el metodo include, si usas para buscar en un array tens que poner la palabra tal cual, sino no va a funcionar, ahora si a un string le usas el metodo include, ahi si funciona, ya que si por ejemplo si buscas 'Argentina'.includes('entina')

//metodo split 'Argentina'.split('') 
//va a devolver 'A', 'r', 'g' .... etc, hasta completar argentina, ahora si ponemos 'Argentina'.split('').reverse().join('') lo que va a devolver es 'anitnegrA'

//paisesLatam.pop() saca el ultimo del array
//paisesLatam.shift() saca el primero elemento del array

//paisesLatam.unshift('Argentina') coloca en el primer elemento al principio

//paisesLatam.push('Venezuela') coloca el elemento a lo ultimo


// () => {} funcion flecha, es una funcion anonima que se le manda las variables en el signo y dentro se itera
function pintarTable(arrayAPintar){
    tableBody.innerHTML = '';
    arrayAPintar.forEach((pais,indice) =>{
        tableBody.innerHTML += `<tr>
        <td><strong>${indice+1}</strong></td>
            <td>${pais}</td>
        </tr>`;
    } )  
}