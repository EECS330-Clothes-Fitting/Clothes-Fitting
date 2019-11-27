
var chest = 65;
var waist = 70;
var hip = 60;
var sleeves = 45;
var overall = 60;
var mult;

function changeTo(size) 
{
	var w = document.getElementById("whiteTshirt");
	var cslid = document.getElementById("chest");
    var wslid = document.getElementById("waist");
    var hslid = document.getElementById("hip");
    var sslid = document.getElementById("sleeves");
    var oslid = document.getElementById("overall");
    var cscore = document.getElementById("cscore");
    var wscore = document.getElementById("wscore");
    var hscore = document.getElementById("hscore");
    var sscore = document.getElementById("sscore");
    var oscore = document.getElementById("oscore");
    if(size=="S"){
    w.style.width = "70%";
	w.style.left = "15%";
        mult=0.7;
        
        
    } else if (size=="M") {
	w.style.width = "80%";
	w.style.left = "10%";
        mult=0.8;
    } else if (size=="L") {
	w.style.width = "90%";
	w.style.left = "5%";
        mult=0.9
    }
    cslid.value = chest*mult;
        wslid.value = waist*mult;
        hslid.value = hip*mult;
        sslid.value = sleeves*mult;
        oslid.value = overall*mult;
    
    cscore.innerHTML= Math.round(chest*mult);
    wscore.innerHTML= Math.round(waist*mult);
    hscore.innerHTML= Math.round(hip*mult);
    sscore.innerHTML= Math.round(sleeves*mult);
    oscore.innerHTML= Math.round(overall*mult);
}	

