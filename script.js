// tapped menu
function openMenu(evt, menuName) {
  var i, x, tablelinks;
  x = document.getElementsByClassName ("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

  }
  tablelinks = document.getElementsByClassName("tablelink");
  for (i = 0; i < x.length; i++) {
    tablelinks[i].className.replace("w3-red", "")


  } 


}
