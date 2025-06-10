const signin = document.querySelector("#signin-form");
const signup = document.querySelector("#signup-form");
const showSignin = document.querySelector("#show-signin");
const showSignup = document.querySelector("#show-signup");
const inputNames = document.getElementsByClassName("input-text")

showSignin.addEventListener("click", (event)=>{
    event.preventDefault();
    signin.style.display = "flex";
    signup.style.display = "none";
})
showSignup.addEventListener("click", (event)=>{
    event.preventDefault();
    signup.style.display = "flex";
    signin.style.display = "none";
})
 // Cette fonction ajouter une bordure rouge à l'input si le champ est vide après avoir perdu le focus
for(let i = 0; i < inputNames.length; i++){
inputNames[i].addEventListener("blur",()=>{
    if(inputNames[i].value.trim() === ""){
      inputNames[i].classList.add("error");
   
    }else{
      inputNames[i].classList.remove("error");
      
    }
    
})
}
