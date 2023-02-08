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

        //TODO mirar el video 10 minutos despues a lo de abajo para ver como escribirlo asi en una linea
        // se puede escribir toda la funcion asi const sumaTotal = paisesAContar.reduce(acumulador, pais)=> acumulador += pais.population
    }, 0) 
    //TODO ver en 2 - 2:10 a que hace referencia el valor que va ahi atras
    //al final de la funcion necesita ponerse una, y un valor, que va a ir el valor con el que quiero que inicie el acumulador)

    console.log(`sumatoriaTotal:`, sumaTotal)
    
    //imprime el valor en donde tenga ese id entre comillasa en el html
    document.getElementById('population-number').innerHTML = sumaTotal
}

function metodoMap(){
    // tableBody.innerHTML = ''
    const arrayNuevoMap = paisesLatam.map(function(pais){
        
        
    // TODO mirar video a las 1:15 que declara el objeto que esta comentado debajo
    // const  newObj{
    //     name: pais.name.toUpperCase(),

    // }

        pais.name = pais.name.toUpperCase();
        pais.population = Math.round(pais.population *10 / 1000000)/10 + ('M') //se lo multiplica y dividide por 10 para que una vez que redondee y ahi va a quedar por ejemplo 561 y si quiero dejarme los decimales le ponemos /10 entonces va a quedar 56.1
        // const paisMay = pais.name.toUpperCase();
        return pais
    })

    pintarTable(arrayNuevoMap)
}



function metodoFilter(evt){
    if(evt.keyCode !== 13){ 
        console.log(`No apreto enter`)
        return pintarTable(paisesFiltrados)
    }
    
    const text =  evt.target.value.toLowerCase();

    const paisesFiltrados = paisesLatam.filter((pais) =>{
        const filtra = pais.name.toLowerCase().includes(text)
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

const ordenarPor = () => {
    paisesLatam.sort((a,b)=>{
        if(a>b){
            return -1
        }
        if(a<b){
            return 1
        }
        return 0
    })

    //TODO mirar los ultimos 15 minutos
}