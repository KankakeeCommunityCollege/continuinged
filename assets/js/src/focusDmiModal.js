const btnSelector = '[data-bs-target="#dmiModal"]';
const btnList = document.querySelectorAll(btnSelector);

function focusDmiModal() {
  [...btnList].forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (!e.target.matches(btnSelector))
        return;
      
      const modal = document.querySelector(e.target.dataset.bsTarget);

      modal.focus();
    });
  });
}

export default focusDmiModal;
