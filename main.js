document.querySelector('.fa-align-justify').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.mobile__menu');
    mobilemenu.style.transform = "translateY(0)"
})
document.querySelector('.fa-close').addEventListener('click', function() {
    let mobilemenu = document.querySelector('.mobile__menu');
    mobilemenu.style.transform = "translateY(-100%)"
})