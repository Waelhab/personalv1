document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing-animation");
    const words = JSON.parse(typingElement.getAttribute("data-words"));
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingSpeed = 50;
    const deletingSpeed = 60;
    const delay = 400;
  
    function type() {
      currentWord = words[wordIndex];
      if (isDeleting) {
        letterIndex--;
        typingElement.textContent = currentWord.substring(0, letterIndex);
        if (letterIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, delay);
        } else {
          setTimeout(type, deletingSpeed);
        }
      } else {
        letterIndex++;
        typingElement.textContent = currentWord.substring(0, letterIndex);
        if (letterIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, delay);
        } else {
          setTimeout(type, typingSpeed);
        }
      }
    }
  
    type();
  });
  const contactLink = document.getElementById('contactLink');
  const modalBg = document.getElementById('modalBg');
  const closeModal = document.getElementById('closeModal');

  contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      modalBg.classList.remove('hidden');
  });

  closeModal.addEventListener('click', function() {
      modalBg.classList.add('hidden');
  });

  window.addEventListener('click', function(event) {
      if (event.target === modalBg) {
          modalBg.classList.add('hidden');
      }
  });