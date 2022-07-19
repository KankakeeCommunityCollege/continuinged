const MODAL_BUTTON = document.querySelector('[data-target="#registerNowModal"]');

function loadJotform(wrapper) {
  return new Promise((res, rej) => {
    const iframe = document.createElement('iframe');
    const formUrl = wrapper.dataset.jotformSrc;
    
    iframe.src = formUrl;
    iframe.classList.add('iframe--full-width');
    wrapper.innerHTML = '';
    wrapper.append(iframe);

    iframe.onerror = e => rej(e);
    iframe.onload = e => {
      return res(iframe);
    };
  });
}

async function modalOpenHandler(e) {
  const MODAL = document.querySelector(e.target.dataset.target);
  const JOTFORM_WRAPPER = MODAL.querySelector('#registrationWrapper');

  const loadedForm = await loadJotform(JOTFORM_WRAPPER);

  console.info(`Jotform loaded from: ${loadedForm.src}`, loadedForm);
  MODAL_BUTTON.removeEventListener('click', modalOpenHandler);
}

function loadJotformOnModalOpen() {
  MODAL_BUTTON.addEventListener('click', (e) => {
    modalOpenHandler(e)
      .catch((err) => {
        console.error(`Error loading Jotform: ${err}`, err);
        modalOpenHandler({ target: MODAL_BUTTON }); // Attempt triggering manually by injecting an object w/ key "target" holding the modal-button
      })
  });
}

export default loadJotformOnModalOpen;