const callback = (entries) => {
    // The entries variable will contain the list of
    // elements that you are observing. When ever 
    // intersection occurs, you need to do forEach loop 
    // to find which one intersected. 
    // For this we check a flag on the element called "isIntersecting"
     entries.forEach(
         (entry) => {
             if (entry.isIntersecting) {
                 console.log("The element is intersecting >");
                 //If intersecting then attach keyframe animation.
                //assigning the data attribute 
                 entry.target.style.animation = 
                 entry.target.dataset.animate;
             } else {
                 entry.target.style.animation="none";
             }
let observer = new IntersectionObserver(callback);


//2]Select all elements that have ".animate" 
//class.In our case we have three 
//elements (.image,<p> and h<2>).

const animationItems = document.querySelectorAll('.animate');
