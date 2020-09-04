// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let modal = document.querySelector('#modal')
modal.style.visibility = 'hidden'

let eachSpan = document.querySelectorAll('span.like-glyph')

for (const oneSpan of eachSpan)  {
  oneSpan.addEventListener('click', (e) => {
    let heart = e.target
    heart.innerText === EMPTY_HEART ? heart.innerText = FULL_HEART : heart.innerText = EMPTY_HEART
    if (heart.innerText === FULL_HEART) {
      heart.style.color = 'red'
      heart.className = 'activated-heart'
    } else {
      heart.style.color = ''
      heart.className = ''
    }
    sendRequest()
  })
}

const sendRequest = () => {
  mimicServerCall()
    .then(response => {})
    .catch(error => {
      modal.style.visibility = 'visible'
      modal.innerText = error
      setTimeout(() => {
        modal.style.visibility = 'hidden'
      }, 5000);
    })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
