
let szoba1 = document.getElementById("szoba1").checked
let szoba2 = document.getElementById("szoba2").checked
let szoba3 = document.getElementById("szoba3").checked
let szoba4 = document.getElementById("szoba4").checked 

let fovalasztas= document.getElementById("valasztas").value; 

let ev1 = document.getElementById("ev1").value; 
let ev2 = document.getElementById("ev2").value; 
let ev3 = document.getElementById("ev3").value; 
let ev4 = document.getElementById("ev4").value; 

let ellatas1 = document.getElementById("Ellatas1").value; 
let ellatas2 = document.getElementById("Ellatas2").value; 
let ellatas3 = document.getElementById("Ellatas3").value; 

let furdo1 = document.getElementById("Furdo1").value; 
let furdo2 = document.getElementById("Furdo2").value; 
let furdo3 = document.getElementById("Furdo3").value; 
let furdo4 = document.getElementById("Furdo4").value; 

let textbox = document.getElementById("ebbeirsz").value;

function szamitas(){
    
    szobak();
      
}








function szobak(){
    if(szoba1){
        alert("szoba1")
    }
    else if(szoba2){
        alert("szoba2")
    }
    else if(szoba3){
        alert("szoba3")
    }
    else if(szoba4){
        alert("szoba4")
    }
    else{
        alert("nincs szoba kiválasztva")
    }
    
    
}