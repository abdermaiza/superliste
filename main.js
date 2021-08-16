
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
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let sectionTwo = document.getElementById('two');
let sectionThree = document.getElementById('three');
let sectionFour = document.getElementById('four');
let sectionFive = document.getElementById('five');

one.addEventListener('click', function() {
  console.log('one');
  let theButtons = document.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
two.addEventListener('click', function() {
  console.log('two');
  let theButtons = sectionTwo.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
three.addEventListener('click', function() {
  console.log('two');
  let theButtons = sectionThree.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
four.addEventListener('click', function() {
  console.log('two');
  let theButtons = sectionFour.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});
five.addEventListener('click', function() {
  console.log('two');
  let theButtons = sectionFive.querySelector('.expandCollapse button[aria-expanded][aria-controls]');
  let state = theButtons.getAttribute('aria-expanded') === 'false' ? true : false;
  theButtons.setAttribute('aria-expanded', state);
  document.getElementById(theButtons.getAttribute('aria-controls')).toggleAttribute('hidden', !state);
});



// Filter companies
let type = ['esn', 'pub', 'cabinet', 'digit'];
const filtreEntre = document.querySelectorAll(".filter-input");
const entreprise = document.querySelectorAll(".societe");
filtreEntre.forEach(item => {
  item.addEventListener('click', event => {
    if (item.value=='esn') {
      entreprise.forEach(societe => {
        societe.classList.toggle('esn');
        societe.classList.remove('pub');
        societe.classList.remove('digit');
        societe.classList.remove('cabinet');
      })
    }
    if (item.value=='pub') {
      entreprise.forEach(societe => {
        societe.classList.toggle('pub');
        societe.classList.remove('esn');
        societe.classList.remove('digit');
        societe.classList.remove('cabinet');
      })
    }
    if (item.value=='digit') {
      entreprise.forEach(societe => {
        societe.classList.toggle('digit');
        societe.classList.remove('pub');
        societe.classList.remove('esn');
        societe.classList.remove('cabinet');
      })
    }
    if (item.value=='cabinet') {
        entreprise.forEach(societe => {
          societe.classList.toggle('cabinet');
          societe.classList.remove('pub');
          societe.classList.remove('esn');
          societe.classList.remove('digit');

        })
      }
  })
})