document.getElementById('yukarıgit').addEventListener('click', function() {
    YukarıyaSmoothScroll(1500); // 1500ms (1.5 sn) süresinde animasyonlu şekilde sayfa başına gidilecek
  });

  function YukarıyaSmoothScroll(zaman) {
    // Başlangıç zamanı, sayfanın scrollTop değeri ve belirlenen süre
    const startingY = window.pageYOffset;
    const startTime = performance.now();
    const scrollZamanı = zaman;
    function eğri(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      //verilen süre değeri (t) 0.5'den küçükse, 2 * t * t formülü kullanılır. 
      /*Eğer verilen süre değeri (t) 0.5'den büyük veya eşitse, -1 + (4 - 2 * t) * t formülü kullanılır. Bu durumda, çıkış değeri, (4 - 2 * t) ile t'nin 
      çarpımının -1'e eklenmesiyle elde edilir.*/
    }
    function scroll() {
      const geçiş = performance.now() - startTime;
      // İstenen süre boyunca yavaşça yukarı kaydırma
      window.scrollTo(0, startingY * (1 - eğri(geçiş / scrollZamanı)));
      //Burada, startingY değişkeni sayfanın başlangıç yüksekliğini temsil eder. Kaydırma işlemi, eğri fonksiyonunu kullanarak yavaşça gerçekleştirilir. 
      if (geçiş < scrollZamanı) {
        requestAnimationFrame(scroll);
        /* elapsed değişkeninin scrollZamanı değerinden küçük olup olmadığı kontrol edilir. Eğer küçükse, requestAnimationFrame(scroll) çağrılır ve işlem bir sonraki
        animasyon çerçevesinde tekrarlanır. Bu, kaydırmanın sürekli olarak güncellenmesini ve yavaş bir şekilde devam etmesini sağlar.*/
      } else {
        window.scrollTo(0, 0);
        /*Eğer elapsed değişkeni scrollZamanı değerinden büyük veya eşitse, window.scrollTo(0, 0) kodu kullanılarak sayfanın en üstüne hızlıca kaydırılır, 
        böylece başa dönüş tamamlanır.*/
      }
    }
    scroll();
    /*Son olarak, scroll() fonksiyonu çağrılarak kaydırma işlemi başlatılır. Bu sayede, sayfa başa doğru yavaş ve yumuşak bir şekilde kaydırılacaktır.*/
  }