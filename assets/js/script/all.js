//import contactLink from './contactLink.js';
import hideJotformModalAfterLoad from './hideJotformModal.js';
import makeTabsLinkable from './tabLink.js';

//contactLink();
document.addEventListener('DOMContentLoaded', function() {
  hideJotformModalAfterLoad();
  makeTabsLinkable();
});