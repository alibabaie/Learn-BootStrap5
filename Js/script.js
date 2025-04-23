// Bootstrap tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// slider2 & gallery-modal

document.addEventListener('click',function(e){
    if(e.target.classList.contains("img-slider2")){
       const src = e.target.getAttribute("src");
       document.querySelector("#img-slider2-big").src = src ;
    }
    else 
    if(e.target.classList.contains("img-gallery")) {
        const src = e.target.getAttribute("src");
        document.querySelector("#img-gallery-modal").src = src ;
        const myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }
        
    
})