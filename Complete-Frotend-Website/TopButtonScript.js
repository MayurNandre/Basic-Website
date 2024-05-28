const mybutton = document.getElementById('myBtn');

//when the user scrolls down 20px from the top of the document show the button
window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


//when the user clicks on the button , scroll the top of the document
mybutton.addEventListener("click",()=>{
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0;//for chrome , firefox , edge
});


//For The welcome msg Error
let icon = document.getElementById('navbar-toggler-icon');

icon.addEventListener("click",()=>{
        let centerdiv =  document.getElementById('center-div-id');
        centerdiv.classList.toggle('top');
})