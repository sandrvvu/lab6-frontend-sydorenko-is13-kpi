const getDataButton = document.getElementById('getDataButton');
const contentElement = document.getElementById('content');
const errorElement = document.getElementById('error');

getDataButton.addEventListener('click', () => {
    const pictureElement = document.getElementById('picture');
    const cellElement = document.getElementById('cell');
    const cityElement = document.getElementById('city');
    const emailElement = document.getElementById('email');
    const coordinatesElement = document.getElementById('coordinates');
    
    // URL для запиту до randomuser.me API
    const apiUrl = 'https://randomuser.me/api';
    
    // Виконуємо запит до API за допомогою fetch
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Отримана інформація з API
            const user = data.results[0];
    
            // Виводимо інформацію на сторінку
            pictureElement.src = user.picture.large;
            cellElement.textContent = `${user.cell}`;
            cityElement.textContent = `${user.location.city}`;
            emailElement.textContent = `${user.email}`;
            coordinatesElement.textContent = `Lat ${user.location.coordinates.latitude}, Lon ${user.location.coordinates.longitude}`;
            contentElement.style.display = 'flex';
        })
        .catch(error => {
            console.error('Помилка запиту:', error);
            errorElement.textContent = 'Помилка під час отримання даних.';
        });
})
