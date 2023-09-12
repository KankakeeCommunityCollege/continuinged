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
  if (document.querySelector('#registrationWrapper')) {
    import('./loadJotformOnModalOpen')
      .then(({ default: loadJotformOnModalOpen }) => loadJotformOnModalOpen());
  }
  if (document.getElementById('attendingEmployers')) {
    /**
     * @see https://getbootstrap.com/docs/4.6/components/navs/#events - for detecting Bootstrap 4 tab events
     * @requires jQuery - Bootstrap 4 JS methods require jQuery's "$" to work
     * @example $('#my-tab').on('shown.bs.tab', (e) => {
     *             // Do something after the tab has been opened and animations are completed
     *          });
    */
    // NOTE: A vanilla JS .addEventListener('click', ...) on the tab won't work because
    //  tabs can be activated via hash-link URLs (e.g. `.../career-services/#hiring-events`)
    $('#hiring-events-tab').on('shown.bs.tab', (e) => {
      // DO NOT import and run this module until after the BS4 tab has been opened and animations completed.
      //  Otherwise the table of employers does not render correctly — it gets squished and looks bad.
      import('./createJobFairTable')
        .then(({ default: createJobFairTable }) => createJobFairTable());
    });
  }
  if (document.getElementById('JobBoard')) {
    import('./createJobBoard')
      .then(({ default: createJobBoard }) => createJobBoard());
  }
  if (document.querySelector('[data-target="#staticBackdrop"]')) {
    import('./focusDmiModal')
      .then(({ default: focusDmiModal }) => focusDmiModal());
  }
});
