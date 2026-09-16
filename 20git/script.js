const profile=document.querySelector("#profile");
const status=document.querySelector("#status");
const username=document.querySelector("#username");
const fetchBtn=document.querySelector("#fetchBtn");

fetchBtn.addEventListener('click' ,async () => {
    status.textContent="Loading..."
    const url="https://api.github.com/users/" + username.value;
    const response= await fetch(url);
    const data = await response.json();
    displayUser(data);
    status.textContent="";
});


function displayUser(user){
     profile.innerHTML=
     `<h1> ${user.name} </h1>
     <p>${user.bio}</p1>
     ` ;  
}



//getUser();
