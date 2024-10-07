function showData() {
    
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const departingFrom = document.getElementById('departingFrom').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const departureTime = document.getElementById('departureTime').value;
    const airline = document.getElementById('airline').value;
    const fare = document.getElementById('fare').value;
    
    if (!email || !phoneNumber || !departingFrom || !destination || !departureDate || !departureTime || !airline || !fare) {
        alert('Please fill in all fields.');
        return;
    }

    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');

    if (!firstName || !lastName) {
        alert('First name or last name is missing in local storage.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        alert('Please enter a valid phone number.');
        return;
    }

    let message = `Thank you for your reservation, ${firstName + ' ' + lastName}!\n` +
                  `Departing From: ${departingFrom}\n` +
                  `Destination: ${destination}\n` +
                  `Departure Date & Time: ${departureDate} ${departureTime}\n` +
                  `Airline: ${airline}\n` +
                  `Fare: ${fare}`;

    alert(message);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
    const re = /^[0-9]{11}$/;
    return re.test(String(phoneNumber));
}

function backpage() {
    window.history.back();
}
