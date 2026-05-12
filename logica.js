
var map = L.map('map').setView([-3.8767, -38.6256], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);


L.marker([-3.8767, -38.6256]).addTo(map)
    .bindPopup('Maracanaú: Centro Administrativo')
    .openPopup();



const ctxAgua = document.getElementById('chartAgua').getContext('2d');
new Chart(ctxAgua, {
    type: 'doughnut',
    data: {
        labels: ['Com Acesso', 'Sem Acesso'],
        datasets: [{
            data: [99.42, 0.58],
            backgroundColor: ['#2e7d32', '#e0e0e0']
        }]
    }
});


const ctxEsgoto =document.getElementById('chartEsgoto').getContext('2d')
new Chart(ctxEsgoto, {
    type: 'doughnut',
    data: {
        labels: ['Com Esgoto', 'Sem Esgoto'],
        datasets: [{
            data: [50.87, 49.13],
            backgroundColor: ['#006400', '#c8e6c9']
        }]
    }
});
const formulário = document.getElementById('form-cidadao');
formulário.addEventListener('submit',function(event) {
    event.preventDefault();
    const bairro = formulário.querySelector('input').value;
    const problema = formulário.querySelector('select').value;
    alert('Relato enviado com sucesso!\n\nLocal:' + bairro + '\nProblema: ' + problema + '\n\nNossa equipe de saneamento irá analisar a situação.');
    formulário.requestFullscreen();
});