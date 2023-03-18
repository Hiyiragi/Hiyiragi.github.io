const button = document.getElementById("Switch");
const lightBulbOff = document.getElementById("lightBulb-off");
let isLightBulbOn = false;


button.addEventListener("click", function() {
    if (isLightBulbOn){
        isLightBulbOn = false;
        lightBulbOff.src = "off.jpg"
    } else {
        isLightBulbOn = true;
        lightBulbOff.src = "on.jpg"
    }
})

