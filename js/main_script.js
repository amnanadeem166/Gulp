function getPassengerName() {
    const firstName = document.getElementById('first-name').value;
    const middleName = document.getElementById('middle-name').value;
    const lastName = document.getElementById('last-name').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const year = document.getElementById('year').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);

    if (firstName === '' || lastName === '' || month === '' || day === '' || year === '') {
        alert('Please fill out all the fields.');
        return;
    }
    window.location.href = '../pages/reservation.html';
}

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

const monthSelect = document.getElementById('month');
months.forEach((month, index) => {
    const option = document.createElement('option');
    option.value = index + 1; 
    option.text = month;
    monthSelect.appendChild(option);
});

const daySelect = document.getElementById('day');
for (let day = 1; day <= 30; day++) {
    const option = document.createElement('option');
    option.value = day;
    option.text = day;
    daySelect.appendChild(option);
}

const yearSelect = document.getElementById('year');
for (let year = 1920; year <= 2024; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
}


