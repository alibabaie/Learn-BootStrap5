$ (function(){
setTimeout(LoadingEnd,1000);
})

function LoadingEnd () {
    var loaded = $("#preloader");
    loaded.addClass("d-none");
}