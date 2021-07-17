const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.projects_item');
const original = document.querySelector('.full_img');

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add('open');
    original.classList.add('open');
    const originalSrc = preview.getAttribute('target');
    original.src = `./assets/img/${originalSrc}`;
  });
});

modal.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    original.classList.remove('open');
  }
});
