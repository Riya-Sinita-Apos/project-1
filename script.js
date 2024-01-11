 function addminLogin(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");


if(username!=="Riya"){
    errorMessage.innerText = "Invalid username. Please try again.";

}else if (password !== "admin@123") {
    errorMessage.innerText = "Invalid password. Please try again.";
}else{

    localStorage.setItem('isLoggedIn','true')
      window.location = './dashbord.html'
    }
  }