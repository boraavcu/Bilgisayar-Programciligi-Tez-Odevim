 // Verileri tanımla
 var labels = ['2017', '2018', '2019', '2020', '2021', '2022'];
 var prices = [805, 1110, 1070, 1400, 2300, 5200];

 // Canvas elementini al
 var ctx = document.getElementById('price-chart').getContext('2d');

 // Grafiği oluştur
 var chart = new Chart(ctx, {
   type: 'line',
   data: {
     labels: labels,
     datasets: [{
       label: 'Fiyat Ton/₺',
       data: prices,
       backgroundColor: 'rgba(0, 123, 255, 1)',
       borderColor: 'rgba(0, 123, 255, 1)',
       borderWidth: 2
     }]
   },
   options: {
     scales: {
       y: {
         beginAtZero: true
       }
     }
   }
 });