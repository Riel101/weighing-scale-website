// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Simulate dynamic weight update (replace with real ESP32 data)
setInterval(function() {
    const weight = (Math.random() * 5 + 65).toFixed(2); // Random weight between 65 and 70 kg
    document.getElementById('currentWeight').innerText = weight;
    logActivity(`Weight updated: ${weight} kg`);
}, 5000); // Update every 5 seconds

// Log activity in the log container
function logActivity(message) {
    const logContainer = document.getElementById('log');
    const p = document.createElement('p');
    p.innerText = message;
    logContainer.appendChild(p);
    notifyUser(message);
}

// Toast notification
const notify = new Notyf();
function notifyUser(message) {
    notify.success(message);
}

// Chart.js for Weight History
var ctx = document.getElementById('weightChart').getContext('2d');
var weightChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            label: 'Weight (kg)',
            data: [65, 63, 67, 64],
            borderColor: '#28a745',
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
