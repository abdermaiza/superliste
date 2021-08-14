// Back-to-top animation
const backtop = document.querySelector('.backTop');
window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        backtop.classList.add('active');
    }
    if(window.scrollY < 100) {
        backtop.classList.remove('active');
    }
});

// Accessible accordions
function expandCollapse() {
    let theHeaders = document.querySelectorAll('.expandCollapse h2'), i;
    for (i = 0; i < theHeaders.length; i++) {
        let thisEl = theHeaders[i],
        theId = 'panel-' + i;
        let thisTarget = thisEl.parentNode.querySelector('.panel');
        if (!thisTarget) {
            continue;
        }
        thisEl.innerHTML = '<button aria-expanded="false" aria-controls="' + theId + '">' + thisEl.textContent + '</button>';
        thisTarget.setAttribute('id', theId);
        thisTarget.setAttribute('hidden', 'true');
    }
    let theButtons = document.querySelectorAll('.expandCollapse button[aria-expanded][aria-controls]');
    for (i = 0; i < theButtons.length; i++) {
        theButtons[i].addEventListener('click', function(e) {
            let thisButton = e.target;
            let state = thisButton.getAttribute('aria-expanded') === 'false' ? true : false;
            thisButton.setAttribute('aria-expanded', state);
            document.getElementById(thisButton.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
        });
    }
}
expandCollapse();

// Filter companies