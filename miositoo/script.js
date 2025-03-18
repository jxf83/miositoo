// Esempio di grafico dei prezzi
const ctx = document.getElementById('price-history-chart').getContext('2d');
const priceChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Settimana 1', 'Settimana 2', 'Settimana 3', 'Settimana 4'],
    datasets: [{
      label: 'Prezzo (€)',
      data: [299, 290, 285, 270],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }
});
