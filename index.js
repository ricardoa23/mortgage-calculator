'use strict';
// creates dropdown for states
document.addEventListener('DOMContentLoaded', function () {
    const states = {
        "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
        "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia",
        "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
        "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
        "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri",
        "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey",
        "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
        "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
        "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont",
        "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
    };
    const select = document.createElement('select');
    select.className = 'form-control';
    select.id = 'stateSelect';

    // Adding a hidden default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Choose State';
    defaultOption.value = '';
    defaultOption.hidden = true;
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    for (let key in states) {
        let option = document.createElement('option');
        option.value = key;
        option.text = states[key];
        select.appendChild(option);
    }

    const container = document.getElementById('stateDropdownContainer'); // Make sure to have a div with this id in your HTML
    container.appendChild(select);
});

// tax rates

const propertyTaxRates = {
    "Hawaii": 0.32,
    "Alabama": 0.40,
    "Colorado": 0.55,
    "Wyoming": 0.56,
    "Louisiana": 0.56,
    "South Carolina": 0.57,
    "West Virginia": 0.57,
    "Utah": 0.57,
    "Nevada": 0.59,
    "Delaware": 0.61,
    "District of Columbia": 0.62,
    "Arizona": 0.63,
    "Arkansas": 0.64,
    "Idaho": 0.67,
    "Tennessee": 0.67,
    "Mississippi": 0.67,
    "New Mexico": 0.67,
    "Montana": 0.74,
    "California": 0.75,
    "North Carolina": 0.82,
    "Kentucky": 0.83,
    "Indiana": 0.84,
    "Washington State": 0.87,
    "Virginia": 0.87,
    "Oklahoma": 0.89,
    "Florida": 0.91,
    "Georgia": 0.92,
    "Oregon": 0.93,
    "North Dakota": 0.98,
    "Missouri": 1.01,
    "Alaska": 1.04,
    "Maryland": 1.05,
    "Minnesota": 1.11,
    "Massachusetts": 1.14,
    "South Dakota": 1.17,
    "Maine": 1.24,
    "Kansas": 1.34,
    "Michigan": 1.38,
    "Rhode Island": 1.40,
    "New York": 1.40,
    "Pennsylvania": 1.49,
    "Iowa": 1.52,
    "Ohio": 1.59,
    "Wisconsin": 1.61,
    "Nebraska": 1.63,
    "Texas": 1.68,
    "Connecticut": 1.79,
    "Vermont": 1.83,
    "New Hampshire": 1.93,
    "Illinois": 2.08,
    "New Jersey": 2.23
};


const calculateMortgage = () => {

    const principal = document.getElementById('amount').value;
    const interestRate = document.getElementById('interest').value;
    const loanDuration = document.getElementById('duration').value * 12;

    let mortgage = 0;
    mortgage = principal * (interestRate * (1 + interestRate) ** loanDuration / (1 + interestRate) ** loanDuration - 1)
    console.log(mortgage)

}