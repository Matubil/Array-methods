const paisesLatam = [ 
    { name:"Argentina", population: 45808747},  //0
    { name:"Bolivia", population: 12079472},   //1      
    { name:"Brasil", population: 214326223},   //2
    { name:"Chile", population: 19493184},    //3
    { name:"Colombia", population: 51516562}, //4
    { name:"Guyana", population: 804567},   //5
    { name:"Guyana Francesa", population: 560230},  //6
    { name:"Paraguay", population: 6703799}, //7
    { name:"Ecuador", population: 17797737},  //8
    { name:"Perú", population: 33715471}, //9
    { name:"Suriname", population: 612985}, //10
    { name:"Uruguay", population: 3426260},  //11
    { name:"Venezuela", population: 28199867}    //12
]

let tableBody = document.getElementById('table-body')

//llamada de funciones
pintarTable(paisesLatam)
calcularTotalPoblacion(paisesLatam)

function pintarTable(arrayAPintar){
    tableBody.innerHTML = '';
    arrayAPintar.forEach((pais,indice) =>{
        console.log(pais)
        tableBody.innerHTML += `<tr>
        <td><strong>${indice+1}</strong></td>
            <td>${pais.name}</td>
            <td>${pais.population}</td>
        </tr>`;
    } )  
}



function calcularTotalPoblacion(paisesAContar){
    //Contar poblacion
    //Pintarla en el div correspondiente

    //lo que hace reduce es devolver el ultimo valor de lo que se itero dentro
    const sumaTotal = paisesAContar.reduce((acumulador, pais)=>{
        acumulador += pais.population
        // se puede poner dentro tambien acumulador += pais.population

        return acumulador

        //sino usando una sola linea seria return acumulador += pais.population

        // se puede escribir toda la funcion asi const sumaTotal = paisesAContar.reduce(acumulador, pais)=> acumulador += pais.population
    }, 0) 
    //al final de la funcion necesita ponerse una "," y un valor, que va a ir el valor con el que quiero que inicie el acumulador)

    console.log(`sumatoriaTotal:`, sumaTotal)
    
    //imprime el valor en donde tenga ese id entre comillasa en el html
    document.getElementById('population-number').innerHTML = sumaTotal
}

function metodoMap(){
    // tableBody.innerHTML = ''
    const arrayNuevoMap = paisesLatam.map(function(pais){
        
        const  newObj = {   //se declara este objeto para no modificar la lista que ya teniamos, asi solo modificamos el objeto que le asignamos el valor de los objetos de la lista 
            name: pais.name.toUpperCase(),
            population: Math.round(pais.population *10 / 1000000)/10 + ('M')//se lo multiplica y dividide por 10 para que una vez que redondee y ahi va a quedar por ejemplo 561 y si quiero dejarme los decimales le ponemos /10 entonces va a quedar 56.1
        }
        // pais.name = pais.name.toUpperCase();
        // pais.population = Math.round(pais.population *10 / 1000000)/10 + ('M') //se lo multiplica y dividide por 10 para que una vez que redondee y ahi va a quedar por ejemplo 561 y si quiero dejarme los decimales le ponemos /10 entonces va a quedar 56.1
        // const paisMay = pais.name.toUpperCase();
        return newObj
    })

    pintarTable(arrayNuevoMap)
}



function metodoFilter(evt){
    if(evt.keyCode !== 13){ 
        console.log(`No apreto enter`)
        return pintarTable(paisesFiltrados)
    }
    
    const text =  evt.target.value.toLowerCase();
    //const number = 1000000 tambien se podria hacer de traer un elemento con un input

    const paisesFiltrados = paisesLatam.filter((pais) =>{
        const filtra = pais.name.toLowerCase().includes(text)
        //const filtrados = pais.population > number
        //return filtrados y ahi funciona, es otra forma de filtrar
        return filtra;
    })

    pintarTable(paisesFiltrados)
    calcularTotalPoblacion(paisesFiltrados)

}


function metodoFind(evt){//devolvia un valor siempre y cuando se cumpliese la funcion
    if(evt.keyCode !== 13) return;

    const text = evt.target.value.toLowerCase().trim();
    const paisEncontrado = paisesLatam.find((pais) => {
        if(text === pais.name.toLowerCase()){
            return true;
        }
        return false       
    });

    if(paisEncontrado){
        pintarTable([paisEncontrado])
        calcularTotalPoblacion([paisEncontrado])
    }else{
        alert('No se encuentra el pais que buscaba')
    }
}


function metodoFindIndex(evt){
    if(evt.keyCode !== 13) return;
    const text = evt.target.value.toLowerCase().trim();  

    const indice = paisesLatam.findIndex((pais)=> {
        if(text === pais.name.toLowerCase()){
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
    calcularTotalPoblacion(paisesLatam)

}


const ordenarPorAscendente = () => { 
    paisesLatam.sort((a,b)=>{
        if(a.name < b.name){
            return -1
        }
        if(a.name > b.name){
            return 1
        }
        return 0
    })

    pintarTable(paisesLatam)
}

const ordenarPorDescendente = () => { //lo malo de definir asi a la funcion, es que si lo queremos llamar antes no vamos a poder llamarlo porque recien se está declarando ahora 
    paisesLatam.sort((a,b)=>{ //de esta forma lo ordenaria manera ascendente
        if(a.name > b.name){
            return -1
        }
        if(a.name < b.name){
            return 1
        }
        return 0
    })

    pintarTable(paisesLatam) 
}

const ordenarPorAscendentePoblacion = () => { 
    paisesLatam.sort((a,b)=>{
        if(a.population < b.population){
            return -1
        }
        if(a.population > b.population){
            return 1
        }
        return 0
    })

    pintarTable(paisesLatam)
}

const ordenarPorDescendentePoblacion = () => { 
    paisesLatam.sort((a,b)=>{ 
        if(a.population > b.population){
            return -1
        }
        if(a.population < b.population){
            return 1
        }
        return 0
    })

    pintarTable(paisesLatam) 
}


//esta funcion va a funcionar por las 4 anteriores de ordenamiento , se le llama hacer un refactor
function ordenarPor(prop, order){//prop va a ser en base a que va a buscar
    // if( order === 'asc'){
    //     value = 1;
    // }
    // else{//si es desc
    //     value = -1
    // } 

    // value = order === 'asc' ? verdadero : false //operador ternario

    //  order === 'asc' ? value = 1 : value = -1 //otra forma de preguntar el if anterior

    value = order === 'asc' ? 1 : -1    //otra forma mejor de aplicar el if anterior

    //value = order === 'asc' ? 1 : order === 'desc' ? -1 : null
    //eso es como poner if{}else if{}else{}

    paisesLatam.sort((a,b)=>{ 
        if(a[prop] > b[prop]){//hay 2 formas de acceder a un valor del objeto una es a.prop y otra seria a['prop']
            //cuando necesito acceder dinámicamente mediante una variable a las propiedades de un objeto utilizo el acceso al valor de las propiedades mediante índice nombrado objeto['propiedad'], ya cuando quiero acceder a un campo del objeto seria a.campo del objeto
            return value
        }
        if(a[prop] < b[prop]){
            return -value
        }
        return 0
    })

    pintarTable(paisesLatam)  //recordar pintar la tabla
}

/*METODO CONCAT
si coloco array1.concat(array2) lo que hace es juntar todos los elementos de los array, osea pone primero los elementos del array1 y despues pone los elementos del array2 dentro del array1*/
/*

METODO FILL
    let arrayFill = [0,1,2,3,4,5,6,7]
    arrayFill.fil('valorFill', 3, 6), lo que hace es llenar desde el indice 3 hasta por ejemlpo si se quiere todos los demas, no se le pone nada y si se quiere un limite  que por ejemplo este seria hasta el 6, osea [0, 1, 2, 'valorFill', 'valorFill', 'valorFill', 6, 7]
*/

for(let pais of paisesLatam){   
    console.log(`For OF:`, pais)
}