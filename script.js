// Continuous Smooth Snow

function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");

    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.opacity = Math.random();
    snow.style.width = Math.random() * 6 + 3 + "px";
    snow.style.height = snow.style.width;

    let duration = Math.random() * 8 + 8;
    snow.style.animationDuration = duration + "s";

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, duration * 1000);
}

setInterval(createSnow, 150);

<script>
const texts = [
"Digital Marketing Expert",
"Social Media Marketing Expert",
"Shopify Store Designer",
"Video Editor",
"E-Commerce Expert"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === texts.length){
count = 0;
}

currentText = texts[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
setTimeout(() => {
index = 0;
count++;
type();
}, 1500);
}else{
setTimeout(type, 100);
}

})();
</script>