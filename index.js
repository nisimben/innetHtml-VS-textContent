// Import stylesheets
import './style.css';

// innetHtml VS textContent
const appDiv = document.getElementById('app');
const appDiv2 = document.getElementById('app2');
appDiv.innerHTML += `<h1>JS Starter</h1>`;
appDiv2.textContent += `<h1>JS Starter</h1>`;

console.log(appDiv.innerHTML)

console.log(appDiv.textContent)