const FORM_MODAL_ID = 'formModal';
const MODAL_BUTTON_ID = 'modalButton';

function removeAttributes(el, attArr) {
  for (let i = 0, len = attArr.length; i < len; i++ ) {
    const attribute = attArr[i];

    el.removeAttribute(attribute);
  }
  return el;
}

function hideJotformModalAfterLoad() {

  if (!document.getElementById(FORM_MODAL_ID) || !document.getElementById(MODAL_BUTTON_ID) ) // Check for required element
    return;

  const modal = document.getElementById(FORM_MODAL_ID);
  const button = document.getElementById(MODAL_BUTTON_ID);

  window.setTimeout(function() { // Because I was unable to detect the Jotform script load or observe any mutations
    modal.classList.remove('show');
    removeAttributes(modal, ['aria-modal', 'style']);
    removeAttributes(button, ['disabled']);
  }, 2500); // This gives us 2 seconds to load the script before hididng it completely
}

export default hideJotformModalAfterLoad;