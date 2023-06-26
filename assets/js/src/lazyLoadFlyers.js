function lazyLoadFlyers() {
  const FLYER_LIST = document.querySelectorAll('div[data-flyer-src]');

  [...FLYER_LIST].forEach(div => {
    const src = div.dataset.flyerSrc;
    const img = document.createElement('img');
    const a = div.querySelector('a');

    img.classList.add('img-fluid', 'img--border-light');
    div.classList.add('mx-5', 'mb-3');
    img.src = src;
    img.onload = e => {
      a.innerHTML = '';
      a.append(img);
    }
  });
}

export default lazyLoadFlyers;
