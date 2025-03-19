function loadHTML(selector, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}


document.addEventListener('DOMContentLoaded', () => {
    loadHTML('#idx_hero', '../pages/hero/hero_banner.html');
   
});