import '../../scss/main.scss';

const FORM_MODAL_ID = 'formModal';
const MODAL_BUTTON_ID = 'modalButton';

window.addEventListener('load', () => {
  if (document.getElementById(FORM_MODAL_ID) || document.getElementById(MODAL_BUTTON_ID)) {
    import('./hideJotformModal')
      .then(({ default: hideJotformModalAfterLoad }) => hideJotformModalAfterLoad());
  }
  if (document.querySelector('.nav-tabs') || document.querySelector('.accordion')) {
    import('./tabLink')
      .then(({ default: makeTabsLinkable }) => makeTabsLinkable());
  }
  if (document.querySelector('[data-target="#staticBackdrop"]')) {
    import('./focusDmiModal')
      .then(({ default: focusDmiModal }) => focusDmiModal());
  }
});
