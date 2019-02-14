function dropDownMenu() {
  let x = document.getElementById("dropDownMenu");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else { 
    x.className = x.className.replace("show", "");
  }
}