const dark = document.querySelector(".dark");
const body = document.querySelector("body");
const submitt = document.querySelector(".submit");



dark.addEventListener("click", () => {
    if(body.classList.toggle('dark-mode')){
        dark.textContent = "🌞";
    }else{
        dark.textContent = "🌙";
    }
});


submitt.addEventListener("click", () => {
    alert("you are sucessful registred");
});