function tohumhesapla(event) {
    event.preventDefault(); /* formun varsayılan davranışını engeller.
                            Yani Bu kod, formun sayfayı yenilemesini veya başka bir sayfaya yönlendirmesini engeller ve form verileri işlenir.*/
  
    const boy = document.getElementById('boy').value; // tarlanın genişliği
    const eni = document.getElementById('eni').value; // tarlanın uzunluğu
    const yön = document.getElementById('yön').value; // dikim yönü
    const sıraara = document.getElementById('sıraara').value; // sıra arası mesafe
    const sıraüst = document.getElementById('sıraüst').value; // sıra üstü mesafe
  
    // Tarla alanını hesaplar (metrekare cinsinden)
    const alan = boy * eni;
  
    // Sıra sayısını hesapla
    let sırasayısı;
  if (yön === 'en') {
      sırasayısı = Math.ceil(eni * 100 / sıraara); // boyutları santimetre cinsine çevirerek hesapla
      const tohummiktarı = Math.ceil((boy*100 / sıraüst) * sırasayısı); // atılacak tohum sayısını hesapla
      sonuç.innerHTML = `Tarla alanı: ${alan} m²<br>
                           Sıra sayısı: ${sırasayısı}<br>
                           Atılacak tohum sayısı: ${tohummiktarı}`;
  } else {
      sırasayısı = Math.ceil(boy * 100 / sıraara); // boyutları santimetre cinsine çevirerek hesapla
      const tohummiktarı = Math.ceil((eni*100 / sıraüst) * sırasayısı); // atılacak tohum sayısını hesapla
      sonuç.innerHTML = `Tarla alanı: ${alan} m²<br>
                           Sıra sayısı: ${sırasayısı}<br>
                           Atılacak tohum sayısı: ${tohummiktarı}`;
  }
  }