const codingLanguages = ["HTML", "CSS", "JavaScript"];
const footerMessage = document.getElementById("footer-message");

if (codingLanguages.length === 1) {
  footerMessage.textContent = `This page was built using: ${codingLanguages[0]}.`;
} else {
  const lastLanguage = codingLanguages.pop();
  footerMessage.textContent = `This page was built using: ${codingLanguages.join(", ")} and ${lastLanguage}.`;
}