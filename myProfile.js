showMyProfile = () => {
  document.getElementById("emailProfile").innerHTML = sessionStorage.getItem('userLoggedIn');
  document.getElementById("firstNameProfile").innerHTML = sessionStorage.getItem('fnameLoggedIn');
  document.getElementById("lastNameProfile").innerHTML = sessionStorage.getItem('lnameLoggedIn');
  document.getElementById("addressProfile").innerHTML = sessionStorage.getItem('addressLoggedIn');
}