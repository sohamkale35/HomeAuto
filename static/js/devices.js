// static/js/script.js

// Function to fetch temperature data from the server
function fetchTemperature() {
    fetch('devices/get_temperature/')
        .then(response => {
            // Check if the response is ok (status 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            // Update the temperature display with the fetched data
            document.getElementById('temperature-display').innerText = 
                'Temperature: ' + data.temperature + ' °C';
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error fetching temperature data:', error);
            document.getElementById('temperature-display').innerText = 
                'Error fetching data. Please try again.';
        });
}

// Function to start continuous fetching of temperature data
function startContinuousFetching() {
    // Fetch temperature immediately on load
    fetchTemperature();
    
    // Set an interval to fetch temperature every 5 seconds (5000 ms)
    setInterval(fetchTemperature, 2000); // Adjust the interval as needed
}

// Event listener to trigger continuous fetching when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    startContinuousFetching(); // Start fetching temperature data continuously
});



