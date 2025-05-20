window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
});

async function includeHTML(selector, url) {
    const el = document.querySelector(selector);
    if (el) {
      const res = await fetch(url);
      if (res.ok) {
        el.innerHTML = await res.text();
      } else {
        el.innerHTML = "<!-- include failed -->";
      }
    }
  }
  
includeHTML('#header', 'partials/header.html');
includeHTML('#footer', 'partials/footer.html');