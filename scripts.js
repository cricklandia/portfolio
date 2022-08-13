
        // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
        /*link.onclick = function () {
            navBarCollapse()
        };

        function navBarCollapse() {
            if (document.nav.height > 80) {
                document.getElementById("navbar").style.padding = "30px 10px";
                document.getElementById("nav").style.fontSize = "25px";
            } else {
                return;
            }
        }*/
        /*
        function openNav() {
            document.getElementById("collapsibleNavbar").style.width = "100%";
          }
          
          function closeNav() {
            //document.getElementById("collapsibleNavbar").collapse();
            console.log("You made it to closeNav()");
            document.getElementById("collapsibleNavbar").style.height = "50px";
          }
          */
        //   /* Open */
        //   function openNav() {
        //     console.log("openNav()");
        //     document.getElementById("myNav").style.height = "100%";
        //   }
          
        //   /* Close */
        //   function closeNav() {
        //     console.log("closeNav()");
        //     document.getElementById("myNav").style.height = "0%";
        //   }

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  } 

  /* Carousel 
  https://www.w3schools.com/w3css/w3css_slideshow.asp
  */
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }