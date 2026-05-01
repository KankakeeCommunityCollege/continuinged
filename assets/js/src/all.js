import '../../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('LoadJotForm')) {
    import('./enableHCCTPform')
      .then(({ default: enableHCCTPform }) => enableHCCTPform());
  }
});

window.addEventListener('load', () => {
  if (document.querySelector('.list-group')) {
    import('../../scss/bootstrap-list-group.scss');
  }
});
