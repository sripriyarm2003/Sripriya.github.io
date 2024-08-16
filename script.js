let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let skills=document.querySelector('skills');
let navLinks=document.querySelector('header nav a');

window.onscroll=()=>{
    skills.forEach(ski=>{
        let top=window.scrollY;
        let offset=ski.offsetTop-150;
        let height=ski.offsetHeight;
        let id=ski.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+id+']').classList.add('active');
            })
        }
    })
}
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("id").onclick=function(){
    this.innerHTML="sripriyarm29@gmail.com";
};