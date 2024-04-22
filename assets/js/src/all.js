import '../../scss/main.scss';

window.addEventListener('load', () => {
  if (document.querySelector('[data-bs-target="#dmiModal"]')) {
    import('./focusDmiModal')
      .then(({ default: focusDmiModal }) => focusDmiModal());
  }
});
