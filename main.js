var stars = [];
var ratings = [];

function init() {
	for (var i = 0; i < 10; i++){
        stars.push(new Array());
        ratings.push(0);
        for (var j = 0; j<5; j++){
        stars[i].push(document.getElementById("s" + i + j));
        }
    }
};

function setStar(item, rating) {
    for (var i = 0; i<5;i++){
        if (i<=rating){
            stars[item][i].innerHTML = "star";            
        } else {
            stars[item][i].innerHTML = "star_border";
        }
    }
    document.getElementById("m"+item).className="dropdown-set"
}


function validateForm(){
    var x = document.getElementById("name").value;
    var y = document.getElementById("h").value;
    var z = document.getElementById("w").value;
    if (x == ""|| y == "" || z == "") {
        alert("Please fill out all the required fields first");
        return false;
    }
    return true
}


function saveChanges(){
    // alert("Yay!!😄🙌 The changes were successfully saved! Can't wait to see you in those cute clothes!✨")
    if (validateForm()){
        alert("Yay!!😄🙌 The changes were successfully saved! Can't wait to see you in those cute clothes!✨")
    }
}

function unitSwitch(){
    var h = document.getElementById("h_label");
    var w = document.getElementById("w_label");
    var c = document.getElementById("c_label");
    var wa = document.getElementById("wa_label");
    var b = document.getElementById("b_label");
    var s = document.getElementById("s_label");
    if (h.innerHTML === "Height* (cm)"){
        h.innerHTML = "Height* (inch)";
        w.innerHTML = "Weight* (lbs)"
        c.innerHTML = "Chest (inch)"
        wa.innerHTML = "Waist (inch)"
        b.innerHTML = "Hip (inch)"
        s.innerHTML = "Sleeve length (inch)"
    }else{
        h.innerHTML = "Height* (cm)"
        w.innerHTML = "Weight* (kg)"
        c.innerHTML = "Chest (cm)"
        wa.innerHTML = "Waist (cm)"
        b.innerHTML = "Hip (cm)"
        s.innerHTML = "Sleeve length (cm)"
    }
    
}

init();