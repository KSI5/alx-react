// static/script.js

// Function for logout
function logout() {
    // Add logic for logout, e.g., redirect to login page
    // For now, let's just reload the page
    location.href = '/logout';
}

// Function to create bar chart
function createBarChart(repoCount, followers, following) {
    var ctx = document.getElementById('statistics-chart').getContext('2d');
    var statisticsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Number of Repositories', 'Followers', 'Following'],
            datasets: [
                {
                    label: 'GitHub Statistics',
                    data: [repoCount, followers, following],
                    backgroundColor: ['blue', 'red', 'green'],
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Function to fetch GitHub statistics
async function fetchGitHubStatistics() {
    try {
        const accessToken = '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';
        const apiUrl = 'https://api.github.com/user';

        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (response.ok) {
            const data = await response.json();

            // Extract relevant statistics from the GitHub API response
            const repoCount = data.public_repos;
            const followers = data.followers;
            const following = data.following;

            // Call the function to create/update the bar chart
            createBarChart(repoCount, followers, following);
        } else {
            console.error('Failed to fetch GitHub statistics:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching GitHub statistics:', error.message);
    }
}

// Call the function to update the chart when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if the statistics chart canvas exists on the page
    var chartCanvas = document.getElementById('statistics-chart');
    if (chartCanvas) {
        // Call the function to create the initial bar chart with GitHub statistics
        fetchGitHubStatistics();

        // Example: Update the chart every 10 seconds (adjust as needed)
        setInterval(fetchGitHubStatistics, 10000);
    }
});
