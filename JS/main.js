
let btn1 = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let start = document.getElementById('start');
let clear = document.getElementById('clear');

let vis1 = document.getElementById('vis1');
let vis2 = document.getElementById('vis2');
let vis3 = document.getElementById('vis3');

let array = [];

let contador = 0;
let contador2 = 0;
let contador3 = 0;


btn1.addEventListener('click', function () {
    console.log("oprimiste +5 recupero")
    contador = contador + 5;
    vis1.innerHTML = contador;
})
btn2.addEventListener('click', function () {
    console.log("oprimiste +5 actividad")
    contador2 = contador2 + 5;
    vis2.innerHTML = contador2;
})
btn3.addEventListener('click', function () {
    console.log("oprimiste +2 de rondas")
    contador3 = contador3 + 1;
    vis3.innerHTML = contador3;
})

clear.addEventListener('click', function () {
    contador = 0;
    contador2 = 0;
    contador3 = 0;

    setTimeout((regACT) => {}, 0);

    vis1.innerHTML=0
    vis2.innerHTML=0
    vis3.innerHTML=0  
})


let miTimeOut;
termino = false;

function cuentaRegREC (){
    if(!termino){        
        regREC = () => {
            contador--;
            vis1.innerHTML = contador;};
        let intervaloREC = setInterval(regREC, 1000)



        setTimeout(function () {     
                clearInterval(intervaloREC);  //funcion a realizar por x cantidad de tiempo
                // console.log("estoy ejecutando el regREC") // lo que quiero que haga una vez que finalice 
                contador = array[0];
                vis1.innerHTML = contador;
                contador3--;
                vis3.innerHTML = contador3; //aca descuento la ronda
                if(contador3!=0){
                    cuentaRedACT();
                }else{
                    console.log(`aca tendria que terminar mi codigo`)
                }
        }, contador * 1000);// aca defino el tiempo de ejecucion
    }

}


function cuentaRedACT () {
        regACT = () => {
            contador2--;
            vis2.innerHTML = contador2;
            console.log("estoy ejecutando el regACT")};
        let intervaloACT = setInterval(regACT, 1000); //esto es lo que se repite cada segundo
        
        
        setTimeout(function () {    
            clearInterval(intervaloACT);  //funcion a realizar por x cantidad de tiempo
            contador2 = array[1]; //asigno el intervalo inicial guardado en el array
            vis2.innerHTML = contador2;  // lo vuelvo a representar en el html 

            //ejecuto la segunda parte 
            cuentaRegREC();
        }, contador2*1000);// aca defino el tiempo de ejecucio
}



start.addEventListener('click', function () {
    array.push(contador, contador2, contador3)
    cuentaRedACT();
});










    
    // let cont = 1;

    // while(cont <= contador3){
        
    //     cont++;
    //     cuentaRedACT();
    // }
    // contador3 = 5;
    // while(contador3 >0 ){
    //     contador3--;
    //     cuentaRedACT();
    //     // cuentaRegREC();
    //     vis3.innerHTML = contador3;

    //     //COMIENZA CUENT REGRESIVA DE regACT con su respectivo set interval
    // }





