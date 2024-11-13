import '../../scss/main.scss';

window.addEventListener('load', () => {
  if (document.querySelector('.list-group')) {
    import('../../scss/bootstrap-list-group.scss');
  }
});
