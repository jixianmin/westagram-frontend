const idInput = document.getElementById('idInput');
const passwordInput = document.getElementById('passwordInput');
const Button = document.getElementById('loginButton');
//const Link = document.querySelector("a");


passwordInput.addEventListener('keyup',() => {
    let firstResult = idInput.value;
    let secondResult = passwordInput.value;
    console.log(firstResult.length);
    console.log(secondResult);
    if(firstResult.length !== 0 && secondResult.length !== 0){
        Button.style.backgroundColor = "blue";
        Button.disabled = false;
    }else {
        Button.style.backgroundColor = "rgb(162, 224, 255)";
        Button.disabled = true;
    }
})

idInput.addEventListener('keyup',() => {
    let firstResult = idInput.value;
    let secondResult = passwordInput.value;
    console.log(firstResult.length);
    console.log(secondResult);
    if(firstResult.length !== 0 && secondResult.length !== 0){
        Button.style.backgroundColor = "blue";
        Button.disabled = false;
    }else {
        Button.style.backgroundColor = "rgb(162, 224, 255)";
        Button.disabled = true;
    }
})
/*
Button.onclick = function(){
    if(Button.style.backgroundColor !== "rgb(162, 224, 255)"){
        //Link.removeAttribute('href')
        Link.pointerEvents = "none";
        Link.cursor = "default";
    } else {
        Link.href('../WestagramMain/WestagramMain.html')
    }
}
*/