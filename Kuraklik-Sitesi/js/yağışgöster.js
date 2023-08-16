function showDiv() {
    var selectedMonth = document.getElementById("months").value;
    var divId = "div" + selectedMonth;
    var div = document.getElementById(divId);
    
    // Tüm divleri gizle
    var allDivs = document.getElementsByClassName("divs");
    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = "none";
    }
    
    // Seçilen divi göster
    div.style.display = "block";
}