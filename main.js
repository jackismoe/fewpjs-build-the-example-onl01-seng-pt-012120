// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.value === 'like') {
      console.log(e);
      // clickHeart(e);
    };
  });
});

let clickHeart = (e) => {
  mimicServerCall()
    .then(function (response) {
      if (e.target.innerHTML.include('activated-heart')) {
        e.target.innerHTML = `Like! <span class="like-glyph">${EMPTY_HEART}</span>`;
      } else {
        e.target.innerHTML = `Like! <span class='like-glyph'>${FULL_HEART}</span`;
      }
    })
    .catch((error) => {
      document.getElementById('modal').className = ''
      setTimeout(() => {
        document.getElementById('modal').className = 'hidden';
      }, 5000);
    });
};
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
