// Verileri tanımla
var labels = ['2017', '2018', '2019', '2020', '2021', '2022'];
var prices = [6500, 8500, 9850, 19500, 21000, 44000];

// Canvas elementini al
var ctx = document.getElementById('price-chart3').getContext('2d');

// Grafiği oluştur
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Fiyat Ton/₺',
      data: prices,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderColor: 'rgba(0, 0, 0, 0.6)',
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