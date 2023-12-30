document.addEventListener("DOMContentLoaded", () => {
  const introElement = document.getElementById("intro");

  introElement.addEventListener("animationend", () => {
    window.location.href = "site/index.html";
  });
});
