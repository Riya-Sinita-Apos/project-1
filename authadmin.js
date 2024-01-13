const getLoggingData=localStorage.getItem("isLoggedIn");
console.log(getLoggingData);
if(getLoggingData !=="true"){
    window.location="./addminpage.html";
}
