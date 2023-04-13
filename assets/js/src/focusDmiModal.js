const BUTTON_SELECTOR = '[data-target="#dmiModal"]';
const BUTTON_LIST = document.querySelectorAll(BUTTON_SELECTOR);

function focusDmiModal() {
  [...BUTTON_LIST].forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (!e.target.matches(BUTTON_SELECTOR))
        return;
      
      const modal = document.querySelector(e.target.dataset.target);

      modal.focus();
    });
  });
}

export default focusDmiModal;
