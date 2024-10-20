let currentSetpoint = null;
let temperatureDisplayInterval = null;

document.addEventListener('DOMContentLoaded', function() {
    const tempButton = document.getElementById('temperatureButton');
    const setpointButton = document.getElementById('setpointButton');

    tempButton.addEventListener('click', function() {
        const ipAddress = prompt("Enter the IP address of the sensor (or leave blank for random data):", "192.168.1.100");
        const protocol = prompt("Enter the protocol (e.g., HTTP, MQTT):", "HTTP");

        if (ipAddress) {
            alert("Attempting to connect to sensor at IP: " + ipAddress + " using protocol: " + protocol);
            fetch('devices/get_temperature/')
                .then(response => response.json())
                .then(data => {
                    const temperatureDisplay = document.getElementById('temperatureDisplay');
                    temperatureDisplay.textContent = 'Temperature: ' + data.temperature + ' °C (simulated)';
                })
                .catch(error => console.error('Error fetching temperature:', error));
        } else {
            simulateRandomTemperature();
        }
    });

    setpointButton.addEventListener('click', function() {
        const setpoint = prompt("Enter the desired temperature setpoint:", "25");

        if (setpoint !== null && !isNaN(setpoint)) {
            currentSetpoint = parseFloat(setpoint);
            alert("Setpoint set to: " + currentSetpoint + " °C");
            fluctuateAroundSetpoint();
        }
    });

    function fluctuateAroundSetpoint() {
        clearInterval(temperatureDisplayInterval);

        // Define the range around the setpoint
        const range = 5; // Adjust this value to change the fluctuation range

        // Create an array of 5 readings based on the current setpoint
        const readings = [
            (Math.random() * (currentSetpoint - (currentSetpoint - range * 2)) + (currentSetpoint - range)).toFixed(2), // Farthest
            (Math.random() * (currentSetpoint - (currentSetpoint - range)) + currentSetpoint).toFixed(2),
            (Math.random() * (currentSetpoint + range - currentSetpoint) + currentSetpoint).toFixed(2),
            (Math.random() * (currentSetpoint + range - (currentSetpoint + range)) + (currentSetpoint + range)).toFixed(2),
            currentSetpoint.toFixed(2) // Setpoint
        ];

        let reachedSetpoint = false; // To track if setpoint has been reached

        temperatureDisplayInterval = setInterval(() => {
            const temperatureDisplay = document.getElementById('temperatureDisplay');

            // Check if the setpoint has been reached
            if (!reachedSetpoint) {
                const randomIndex = Math.floor(Math.random() * readings.length);
                const currentReading = readings[randomIndex];

                if (currentReading == currentSetpoint.toFixed(2)) {
                    reachedSetpoint = true; // Setpoint reached, stop fluctuating
                    temperatureDisplay.textContent = 'Temperature: ' + currentReading + ' °C (Setpoint reached)';
                } else {
                    temperatureDisplay.textContent = 'Temperature: ' + currentReading + ' °C (fluctuating)';
                }
            }
        }, 2000); // Update every 5 seconds
    }

    function simulateRandomTemperature() {
        const temperatureDisplay = document.getElementById('temperatureDisplay');
        clearInterval(temperatureDisplayInterval);

        temperatureDisplayInterval = setInterval(() => {
            const simulatedTemperature = (Math.random() * (30 - 20) + 20).toFixed(2);
            temperatureDisplay.textContent = 'Temperature: ' + simulatedTemperature + ' °C (random)';
        }, 2000);
    }

    // Start with random readings until a setpoint is given
    simulateRandomTemperature();
});




