var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    if (character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function() {
        character.classList.remove("animate");
},500);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockleft<20 && blockleft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+ Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
