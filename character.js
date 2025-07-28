let main_characters = document.querySelector('.main-characters');
main_characters.addEventListener('mouseenter', function() {
anime({
    targets: '.main-characters',
    scale: 1.2,
    duration: 1000,
    easing: 'easeInOutQuad',
})
})
main_characters.addEventListener('mouseleave', function() {
anime({
    targets: '.main-characters',
    scale: 1,
    duration: 1000,
    easing: 'easeInOutQuad',
})
})
main_characters.addEventListener('click', function() {
    window.location.href = 'main-characters.html';
})
let villains = document.querySelector('.villains');
villains.addEventListener('mouseenter', function() {
    anime({
        targets: '.villains',
        scale: 1.2,
        duration: 1000,
        easing: 'easeInOutQuad',
    })
})
villains.addEventListener('mouseleave', function() {
    anime({
        targets: '.villains',
        scale: 1,
        duration: 1000,
        easing: 'easeInOutQuad',
    })
})
villains.addEventListener('click', function() {
    window.location.href = 'villains.html';
})
/*let main_button = document.querySelector('.main-button');
main_button.addEventListener('mouseenter', function() {
anime({
    targets: '.main-button',
    color: '#ffffff',
    -webkit-textStrokeColor: '#000000',
    duration: 1000,
    easing: 'easeInOutQuad',
})
})
main_button.addEventListener('mouseleave', function() {
anime({
    targets: '.main-button',
    scale: 1,
    duration: 1000,
    easing: 'easeInOutQuad',
})
})*/