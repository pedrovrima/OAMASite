/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function OpenNav() {
  console.log("coll")
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function CloseNav(event) {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function handleClick(e) {
    e.preventDefault();
      console.log('The link was clicked.');
    }
