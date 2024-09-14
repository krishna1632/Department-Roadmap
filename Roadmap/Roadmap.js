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