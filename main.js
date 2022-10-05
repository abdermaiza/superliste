
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



// Open accordion onclick nav items
let jobboards = document.querySelector('.jobboards_link');
let lectures = document.querySelector('.lectures_link');
let plateformes = document.querySelector('.plateformes_link');
let societes = document.querySelector('.societes_link');
let aides = document.querySelector('.aides_link');
let conseils = document.querySelector('.conseils_link');
let sectionJobboards = document.getElementById('jobboards');
let sectionLectures = document.getElementById('lectures');
let sectionPlateformes = document.getElementById('plateformes');
let sectionSocietes = document.getElementById('societes');
let sectionAides = document.getElementById('aides');
let sectionConseils = document.getElementById('conseils');

jobboards.addEventListener('click', function() {
  let theButtons = sectionJobboards.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
lectures.addEventListener('click', function() {
  let theButtons = sectionLectures.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
plateformes.addEventListener('click', function() {
  let theButtons = sectionPlateformes.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
societes.addEventListener('click', function() {
  let theButtons = sectionSocietes.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
aides.addEventListener('click', function() {
  let theButtons = sectionAides.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
conseils.addEventListener('click', function() {
  let theButtons = sectionConseils.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
