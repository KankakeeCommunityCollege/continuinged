function contactLink() {
  const host = window.location.host + '/';
  const url = window.location.href.replace(/(^\w+:|^)\/\//, '');
  const urlIsIndex = url === host;
  function hashHandler() {
    //console.log('The hash has changed!');
  }
  urlIsIndex ? window.addEventListener('hashchange', hashHandler, false) : null;
}
export default contactLink;
