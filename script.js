const typingText = document.getElementById('typing-text');
const phrases = ["Web Development", "Python", "JAVA", "DBMS", "Machine Learning", "Cloud Computing"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];

  // If not deleting, show one more character
  if (!isDeleting) {
    typingText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentPhrase.length) {
      isDeleting = true;  // Once full word is typed, start deleting after a short delay
      setTimeout(type, 2000);  // Pause at the end of the word
      return;
    }
  } else {
    // If deleting, remove one character
    typingText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isDeleting = false;  // Once everything is deleted, move to the next word
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  }

  // Adjust typing speed based on whether it's deleting or typing
  const typingSpeed = isDeleting ? 50 : 150;
  setTimeout(type, typingSpeed);
}

// Start the typing effect
type();



document.querySelectorAll('.card-back').forEach(cardBack => {
  const codeElement = cardBack.querySelector('code');
  const text = cardBack.getAttribute('data-typing-text');

  // Function to type out text
  const typeOutText = (element, text, speed = 50) => {
    let index = 0;
    element.textContent = ''; // Clear any existing text
    const interval = setInterval(() => {
      element.textContent += text[index++];
      if (index >= text.length) clearInterval(interval);
    }, speed); // Adjust typing speed here
  };

  // Start typing animation
  typeOutText(codeElement, text);
});


const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// Sticky header

