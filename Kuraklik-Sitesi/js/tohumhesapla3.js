function tohumhesapla2(event) {
    event.preventDefault(); /* formun varsayılan davranışını engeller.
                            Yani Bu kod, formun sayfayı yenilemesini veya başka bir sayfaya yönlendirmesini engeller ve form verileri işlenir.*/
  
    const boy1 = document.getElementById('boy1').value; // tarlanın genişliği
    const eni1 = document.getElementById('eni1').value; // tarlanın uzunluğu
    const yön1 = document.getElementById('yön1').value; // dikim yönü
    const sıraara1 = document.getElementById('sıraara1').value; // sıra arası mesafe
    const sıraüst1 = document.getElementById('sıraüst1').value; // sıra üstü mesafe
  
    // Tarla alanını hesaplar (metrekare cinsinden)
    const alan1 = boy1 * eni1;
  
    // Sıra sayısını hesapla
    let sırasayısı1;
  if (yön1 === 'en1') {
      sırasayısı1 = Math.ceil(eni1 * 100 / sıraara1); // boyutları santimetre cinsine çevirerek hesapla
      const tohummiktarı1 = Math.ceil((boy1*100 / sıraüst1) * sırasayısı1); // atılacak tohum sayısını hesapla
      sonuç2.innerHTML = `Tarla alanı: ${alan1} m²<br>
                           Sıra sayısı: ${sırasayısı1}<br>
                           Atılacak tohum sayısı: ${tohummiktarı1}`;
  } else {
      sırasayısı1 = Math.ceil(boy1 * 100 / sıraara1); // boyutları santimetre cinsine çevirerek hesapla
      const tohummiktarı1 = Math.ceil((eni1*100 / sıraüst1) * sırasayısı1); // atılacak tohum sayısını hesapla
      sonuç2.innerHTML = `Tarla alanı: ${alan1} m²<br>
                           Sıra sayısı: ${sırasayısı1}<br>
                           Atılacak tohum sayısı: ${tohummiktarı1}`;
  }
  }