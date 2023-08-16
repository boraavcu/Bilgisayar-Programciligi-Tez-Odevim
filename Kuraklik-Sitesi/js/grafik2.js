// Verileri tanımla
var labels = ['2017', '2018', '2019', '2020', '2021', '2022'];
var prices = [1080, 1250, 1500, 1860, 2900, 6250];

// Canvas elementini al
var ctx = document.getElementById('price-chart2').getContext('2d');

// Grafiği oluştur
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Fiyat Ton/₺',
      data: prices,
      backgroundColor: 'rgba(187, 21, 21, 1)',
      borderColor: 'rgba(187, 21, 21, 1)',
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