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

function openTryOn(){
    alert("You are going to try on clothes! (not implemented)")
}

function saveChanges(){
    alert("You are saving your changes! (not implemented)")
}

init();