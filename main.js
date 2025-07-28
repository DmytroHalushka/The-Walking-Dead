let show_characters = document.querySelector('.show-characters');
show_characters.addEventListener('mouseenter', () => {
anime({
    targets: '.show-characters',
    scale: 1.2,
    duration: 1000,
    easing: 'easeInOutQuad',
})
})
show_characters.addEventListener('mouseleave', () => {
anime({
    targets: '.show-characters',
    scale: 1,
    duration: 1000,
    easing: 'easeInOutQuad',
})
})
show_characters.addEventListener('click', function() {
    window.location.href = 'character.html';
})