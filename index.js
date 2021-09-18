const images = ['monkei1', 'monkei2', 'monkei3', 'monkei4','monkei5', 'monkei6', 'monkei7', 'monkei8','monkei9', 'monkei10', 'monkei11', 'monkei12','monkei13', 'monkei14', 'monkei15', 'monkei16','monkei17', 'monkei18', 'monkei19', 'monkei20','monkei21', 'monkei22', 'monkei23', 'monkei24','monkei25', 'monkei26', 'monkei27', 'monkei28','monkei29'];
const imgElem = document.querySelector('img');

function randomValueFromArray(array) {
  const randomNo = Math.floor(Math.random() * array.length);
  return array[randomNo];
}

setInterval(() => {
  const randomChoice = randomValueFromArray(images);
  imgElem.src = `images/${randomChoice}.png`;
}, 2000);

// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our MONKEI button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the MONKEI prompt');
      } else {
        console.log('User dismissed the MONKEI prompt');
      }
      deferredPrompt = null;
    });
  });
});