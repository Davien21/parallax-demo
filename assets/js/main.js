document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.parallax');
    let options = {responsiveThreshold:0};
    let instances = M.Parallax.init(elems, options);
 	let instance = M.Parallax.getInstance(elems);

    // elems.parallax();

});