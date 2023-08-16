function Bitkiyiac(event, Bitki) {
    var i, tabcontent, tablinks;
    /* her tıklamada display özelliğini açar kapar bu işlem olmaz ise diğer sekme açıldığında alt alta gelir bir sekme kapatılıp diğer sekme
    açılmak isteniyorsa bu kod bloğu kullanılmalı.*/
    tabcontent = document.getElementsByClassName("tabcontent");  
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // seçilen tabdaki içeriği göstermek için gerekli kod bloğu. 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // seçilen tabın display özelliğini değiştirir block yapısına getirerek veriyi gösterir kısaca tıklanılan tabdaki veriyi göstermek içindir.
    document.getElementById(Bitki).style.display = "block";
    event.currentTarget.className += " active";
  }