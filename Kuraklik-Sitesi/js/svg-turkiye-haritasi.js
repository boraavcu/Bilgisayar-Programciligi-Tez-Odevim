function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

  element.addEventListener(
    'mouseover',
    function (event) {
      //  && event.target.parentNode.id !== 'guney-kibris'
      if (event.target.tagName === 'path') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>'
        ].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );


  element.addEventListener(
    'click',
    function (event) {    

      if (event.target.parentNode.id == 'kuzey-kibris') {
        return; //hiçbir şey yapma
      }

      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        window.location.href = (
          'bolge/'
          + parent.getAttribute('data-bolge')
          + '.html'      
        );
      }
    }
  );
}
