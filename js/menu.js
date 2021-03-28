const topbar = document.querySelector('.topbar');
const hm = document.querySelector('.hm');
const Remove = document.querySelector('.remove');

hm.addEventListener('click', function(){
    topbar.classList.add("active");
})

Remove.addEventListener('click', function(){
    topbar.classList.remove("active");
})