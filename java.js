
let osszosszeg = 0
let foosszeg = 0
let szobaosszeg = 0
let napok = 0  
let honap = 0
let evek = 0
let szobatipus = ""
let ellatastipus = ""
let szolgaltatasok = ""



let szoba1 = document.getElementById("szoba1")
let szoba2 = document.getElementById("szoba2")
let szoba3 = document.getElementById("szoba3")
let szoba4 = document.getElementById("szoba4")

let erkezesidopont = document.getElementById("Erkezes")
let tavozasidopont = document.getElementById("Tavozas")

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
    
    
    Idopont();
    Emberek();    
    alert(`Kedves Vendégünk \n \n \n
    Érkezés: ${erkezesidopont.value}\n
    Távozás: ${tavozasidopont.value}\n
    Szoba típusa: ${szobatipus}\n
    Vendégek száma: ${fovalasztas.value}Fő\n
    Ellátás: ${ellatastipus}\n
    Igényelt szolgáltasások: ${szolgaltatasok}\n
    A teljes összeg: ${osszosszeg}`

     )
    osszosszeg = 0
    foosszeg = 0
    szobaosszeg = 0
    napok = 0  
    honap = 0
    evek = 0

    szobatipus =""
    szolgaltatasok =""
    ellatastipus = ""
    textbox.value = ""

    erkezesidopont.value = "";
    tavozasidopont.value = ""

    szoba1.checked = false;
    szoba2.checked = false;
    szoba3.checked = false;
    szoba4.checked = false;

    ellatas1.checked = false;
    ellatas2.checked = false;
    ellatas3.checked = false;

    furdo1.checked = false;
    furdo2.checked = false;
    furdo3.checked = false;
    furdo4.checked = false;

    
    
}



function Idopont(){
    szobak();
    evek = erkezesidopont.value[0] -tavozasidopont.value[0]
    honap = erkezesidopont.value[1] -tavozasidopont.value[1]
    napok = (erkezesidopont.value[1] -tavozasidopont.value[1])+(honap*30)+(evek*360)
    szobaosszeg *= napok
    osszosszeg += szobaosszeg
}

function szobak(){
    if(szoba1.checked){
        szobaosszeg+=9000
        szobatipus ="Egyágyas"
    }
    else if(szoba2.checked){
        szobaosszeg+=15000
        szobatipus ="Kétágyas"
    }
    else if(szoba3.checked){
        szobaosszeg+=18000
        szobatipus ="Kétágyas 1 pótággyal"
    }
    else if(szoba4.checked){
        szobaosszeg+=18000
        szobatipus ="Kétágyas 2 pótággyal"
    }
    
    
}
function Emberek(){
    Ellatasok();
    Furdok();

    if(fovalasztas.value ==1){
        osszosszeg+= foosszeg
    }
    else if(fovalasztas.value ==2){
        osszosszeg+= foosszeg*2
    }
    else if(fovalasztas.value ==3){
        osszosszeg+= foosszeg*3
    }
    else if(fovalasztas.value ==4){
        osszosszeg+= foosszeg*4
    }

}
function Ellatasok(){
    if(ellatas1.checked){
        foosszeg+=900
        ellatastipus ="Reggeli"
    }
    else if(ellatas2.checked){
        foosszeg+=2900
        ellatastipus ="Félpanzió"
    }
    else if(ellatas3.checked){
        foosszeg+=4900
        ellatastipus ="Teljes panzió"
    }
    
    
}
function Furdok(){
    if(furdo1.checked){
        foosszeg+=800
        szolgaltatasok += "Beltéri medencék, "
    }
    if(furdo2.checked){
        foosszeg+=800
        szolgaltatasok += "Kültéri medencék, "
    }
    if(furdo3.checked){
        foosszeg+=800
        szolgaltatasok += "Szauna Belépő, "
    }
    if(furdo4.checked){
        foosszeg+=2500
        szolgaltatasok += "Teljes belépő "
    }
}

