const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', function() {
    // Create a lightbox element to display project details
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
      <h3><span class="math-inline">\{this\.querySelector\('h3'\)\.textContent\}</h3\>
<img src\="</span>{this.querySelector('img').src}" alt="<span class="math-inline">\{this\.querySelector\('img'\)\.alt\}"\>
<p\></span>{this.querySelector('p').textContent}</p>
      <button>Close</button>`;

    // Add close functionality to the lightbox button
    const closeButton = lightbox.querySelector('button');
    closeButton.addEventListener('click', () => 
      lightbox.parentNode.