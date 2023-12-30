//Transition entre les pages
const aboutButton = document.getElementById("about-button");
const homeButton = document.getElementById("home-button");
const techButton = document.getElementById("tech-button");
const projectButton = document.getElementById("projects-button");

aboutButton.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("about-me");
});

homeButton.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("home");
});

techButton.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("tech-stack");
});

projectButton.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSection("projects");
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

//écriture dunamique
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);

  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();
