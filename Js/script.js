$ (function(){
setTimeout(LoadingEnd,3000);
})

function LoadingEnd () {
    var loaded = $("#preloader");
    loaded.addClass("d-none");
}