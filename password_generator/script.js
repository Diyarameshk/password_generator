const lengthSlider = document.querySelector(".passlen input");
options = document.querySelectorAll(".option input");
copyIcon = document.querySelector(".inputbox span")
passwordinput = document.querySelector(".inputbox input");
passIndicator = document.querySelector(".passindicator");
generateBtn = document.querySelector(".generate");
const characters = { // object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}
const generatePassword = () =>{
    let staticPassword = "";
    passlength = lengthSlider.value;
    randompassword ="";
    excludeduplicate=false;
    options.forEach(option => {
        if(option.checked){
            //console.log(option);
            if(option.id === "spaces"){staticPassword +=`   ${staticPassword} `;}
            if(option.id === "ex-duplicate"){excludeduplicate = true;}
            staticPassword += characters[option.id];
        }
    });
    //console.log(staticPassword);
    for(let i=0; i<passlength;i++){
       // randompassword += staticPassword[Math.floor(Math.random()*staticPassword.length)];
       let randomchar = staticPassword[Math.floor(Math.random()*staticPassword.length)];
       if(excludeduplicate){
        !randompassword.includes(randomchar) || randomchar == " " ? randompassword += randomchar : i-- ;
       }
       else{
          randompassword += randomchar;
       }
    }
    console.log(randompassword);
    passwordinput.value = randompassword;
}
const updatepassindicator = () =>{
    passIndicator.id = lengthSlider.value <= 8 ? "weak": lengthSlider.value < 16 ? "medium" :"strong" ;
}
const updateSlider = ()=>{
    //console.log(lengthSlider.value);
    document.querySelector(".passlen  span").innerText = lengthSlider.value;
    //generatePassword();
    updatepassindicator();
}
const copypassword = () =>{
    navigator.clipboard.writeText(passwordinput.value);
    copyIcon.innerText = "check_circle"
}
updateSlider();
copyIcon.addEventListener("click" , copypassword);
lengthSlider.addEventListener("input",updateSlider);
generateBtn.addEventListener("click",generatePassword);