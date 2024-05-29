
let osszeg = 0
let foosszeg = 0

let szoba1 = document.getElementById("szoba1")
let szoba2 = document.getElementById("szoba2")
let szoba3 = document.getElementById("szoba3")
let szoba4 = document.getElementById("szoba4")

let ellatas1 = document.getElementById("ellatas1")
let ellatas2 = document.getElementById("ellatas2")
let ellatas3 = document.getElementById("ellatas3")

let ev1 = document.getElementById("ev1")
let ev2 = document.getElementById("ev2")
let ev3 = document.getElementById("ev3")
let ev4 = document.getElementById("ev4")

let fovalasztas = document.getElementById("valasztas")

let furdo1 = document.getElementById("Furdo1")
let furdo2 = document.getElementById("Furdo2")
let furdo3 = document.getElementById("Furdo3")
let furdo4 = document.getElementById("Furdo4")

let textbox = document.getElementById("ebbeirsz")

function szamitas(){
    Keres();
    szobak();
    Emberek();   
    
    alert(osszeg)
    osszeg = 0
    foosszeg = 0
}


function szobak(){
    if(szoba1.checked){
        osszeg+=9000
    }
    else if(szoba2.checked){
        osszeg+=15000
    }
    else if(szoba3.checked){
        osszeg+=18000
    }
    else if(szoba4.checked){
        osszeg+=18000
    }
    
    
}
function Emberek(){
    Ellatasok();
    Furdok();

    
    if(fovalasztas.value ==2){
        osszeg+= foosszeg*2
    }
    else if(fovalasztas.value ==3){
        osszeg+= foosszeg*3
    }
    else if(fovalasztas.value ==4){
        osszeg+= foosszeg*4
    }

}
function Ellatasok(){
    if(ellatas1.checked){
        foosszeg+=900
    }
    else if(ellatas2.checked){
        foosszeg+=2900
    }
    else if(ellatas3.checked){
        foosszeg+=4900
    }
    
    
}
function Furdok(){
    if(furdo1.checked){
        foosszeg+=800
    }
    if(furdo2.checked){
        foosszeg+=800
    }
    if(furdo3.checked){
        foosszeg+=800
    }
    if(furdo4.checked){
        foosszeg+=2500
    }
}
function Keres(){
    if(textbox.value == ""){

    }
    else{
        alert("https://www.youtube.com/watch?v=dQw4w9WgXcQhttps://www.youtube.com/watch?v=X6NjLP5WaVc")
    }
}