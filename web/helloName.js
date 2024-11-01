function helloWorld(name){
    alert(`Hello, ${name}!`);
}

helloWorld("GDG on Campus Sogang");


const helloBtn = document.getElementById("helloBtn");
const userName = document.getElementById('helloName');

helloBtn.addEventListener("click", ()=>{
    helloWorld(userName.value);
});