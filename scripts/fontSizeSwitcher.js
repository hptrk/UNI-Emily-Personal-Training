document.addEventListener('DOMContentLoaded', function () {
  const fontSizeSwitcher = document.querySelector('.font-size-switcher');

  fontSizeSwitcher.addEventListener('click', () => {
    toggleLargeClass(fontSizeSwitcher);
  });
});
function toggleLargeClass(e) {
  e.textContent = e.textContent === 'Small font' ? 'Big font' : 'Small font';
  document.body.classList.toggle('large');
  document.querySelector('header').classList.toggle('large');
  document.querySelector('footer').classList.toggle('large');
}
