 function addminLogin(){
    let username1=document.getElementById("username").value;
    let password1=document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");


if(username1!=="Riya"){
    errorMessage.innerText = "Invalid username. Please try again.";

}else if (password1 !== "riya#2004") {
    errorMessage.innerText = "Invalid password. Please try again.";
}else{

    localStorage.setItem('isLoggedIn','true')
      window.location = './dashbord.html'
    }
  }
  function logOut() {
    localStorage.removeItem("isLoggedIn");
    window.location = "./addminpage.html";
  }