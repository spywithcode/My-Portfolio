// Python Projects Data
const pythonProjects = [
    {
        id: 1,
        name: "Web Scraper",
        description: "A Python script using BeautifulSoup and requests to scrape data from websites. This project demonstrates web scraping techniques, handling HTTP requests, and parsing HTML content.",
        codeSnippet: `
import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    title = soup.find('title').text
    return title

print(scrape_website('https://example.com'))
        `,
        images: ["assets/portfolio/project.1.png", "assets/portfolio/small.1.png"]
    },
    {
        id: 2,
        name: "Data Analyzer",
        description: "A data analysis tool built with Pandas and Matplotlib. This project loads CSV data, performs statistical analysis, and generates visualizations to uncover insights from datasets.",
        codeSnippet: `
import pandas as pd
import matplotlib.pyplot as plt

# Load data
df = pd.read_csv('data.csv')

# Basic analysis
print(df.describe())

# Plot
df['column'].plot(kind='bar')
plt.show()
        `,
        images: ["assets/portfolio/project.2.png", "assets/portfolio/small.2.png"]
    },
    {
        id: 3,
        name: "Automation Script",
        description: "An automation script using Python's os and shutil modules to organize files. This project automates repetitive file management tasks, improving productivity.",
        codeSnippet: `
import os
import shutil

def organize_files(directory):
    for file in os.listdir(directory):
        if file.endswith('.txt'):
            shutil.move(file, 'text_files/')

organize_files('/path/to/directory')
        `,
        images: ["assets/portfolio/project.3.png", "assets/portfolio/small.3.png"]
    }
];

// Function to create project elements
function createPythonProjects() {
    const projectsContainer = document.getElementById('python-projects-container');

    pythonProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'python-project-item padd-15';

        const imagesHtml = project.images.map(img => `<img src="${img}" alt="${project.name}" class="project-img">`).join('');

        projectDiv.innerHTML = `
            <div class="project-item-inner shadow-dark">
                <h4>Project Screenshots:</h4>
                <div class="project-gallery">
                    ${imagesHtml}
                </div>
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <h4>Sample Code:</h4>
                <pre><code>${project.codeSnippet.trim()}</code></pre>
            </div>
        `;

        projectsContainer.appendChild(projectDiv);
    });
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', createPythonProjects);
