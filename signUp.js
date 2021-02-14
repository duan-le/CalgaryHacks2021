signUpUser = (user, fname, lname, address) => {
  if (user != "" && fname != "" && lname != "" && address != "") {
    sessionStorage.setItem('userLoggedIn', user);
    sessionStorage.setItem('fnameLoggedIn', fname);
    sessionStorage.setItem('lnameLoggedIn', lname);
    sessionStorage.setItem('addressLoggedIn', address);
    window.location.href = "./home.html";
  } else {
    alert("Invalid entries. Please try again.");
  }
};