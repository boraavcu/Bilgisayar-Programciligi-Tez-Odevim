// Verileri tanımla
var labels = ['2017', '2018', '2019', '2020', '2021'];
var prices = [710, 1030, 1850, 1210, 1360];

// Canvas elementini al
var ctx = document.getElementById('price-chart4').getContext('2d');

// Grafiği oluştur
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Fiyat Ton/₺',
      data: prices,
      backgroundColor: 'rgba(255, 146, 21, 0.9)',
      borderColor: 'rgba(255, 146, 21, 0.9)',
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