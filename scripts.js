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
//  declare all project slideshows
  let proj = ['mySlides', 'rolSlides'];
  var slideIndex = 1;
  //this var is the proj class sent by clicking arrows on projects.html
  var fromArrow;
  showDivs(slideIndex, proj);
  
  //called from projects.jtml arrows fromArrow can be mySlides, rolSlides, etc
  function plusDivs(n, fromArrow) {
   console.log('you selected from the class: ', fromArrow);
   console.log("you reached plusDivs");
    showDivs(slideIndex += n, fromArrow);
    
  }
  
  function showDivs(n, fromArrow) {
    var i, j;
    console.log('you reached showDivs with class: ', fromArrow);
    // for (j = 0; j < proj.length; j++){
      console.log('showDivs for loop now = ', proj[j])
       //x is array of images
    var x = document.getElementsByClassName(fromArrow);
    
    if (n > x.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";
  //}  
  }

  //load carousels on page load
  function onloadDivs(n) {
    var j;

    for (j = 0; j < proj.length; j++){
    var x = document.getElementsByClassName(proj[j]);
    
    if (n > x.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";

  }
  }
  

  