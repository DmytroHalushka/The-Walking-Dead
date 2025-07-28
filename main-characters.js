
let modal = document.getElementById('modal')
let openBtns = document.querySelectorAll('.more-info-button')
let closeBtn = document.getElementById('close-modal')

openBtns.forEach((btn) => {
btn.addEventListener('click', function() {
    modal.style.display = 'flex'
})
})
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none'
    }
})