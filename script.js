function addminLogin(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");


if(username!=="Riya"){
    errorMessage.innerText = "Invalid username. Please try again.";

}else if (password !== "9483") {
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
  