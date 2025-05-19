
document.addEventListener('DOMContentLoaded', function() {
    // Get all select elements
    const modelSelect = document.querySelector('.model select:nth-of-type(1)');
    const priceSelect = document.querySelector('.model select:nth-of-type(2)');
    const fuelSelect = document.querySelector('.model select:nth-of-type(3)');
    const carCards = document.querySelectorAll('.car-card');
    
    // Sample data for each car (in a real app, this would come from a database)
    const carData = [
        { model: 'polo', price: 300000, fuel: 'petrol', element: carCards[0] },
        { model: 'golf', price: 350000, fuel: 'petrol', element: carCards[1] },
        { model: 'tiguan', price: 400000, fuel: 'petrol', element: carCards[2] },
        { model: 'passat', price: 450000, fuel: 'diesel', element: carCards[3] },
        { model: 'arteon', price: 500000, fuel: 'petrol', element: carCards[4] },
        { model: 't-roc', price: 550000, fuel: 'petrol', element: carCards[5] },
        { model: 'touareg', price: 600000, fuel: 'diesel', element: carCards[6] },
        { model: 'amarok', price: 650000, fuel: 'diesel', element: carCards[7] }
    ];

    // Filter function
    function filterCars() {
        const selectedModel = modelSelect.value;
        const selectedPrice = priceSelect.value;
        const selectedFuel = fuelSelect.value;

        carData.forEach(car => {
            let showCar = true;

            // Model filter
            if (selectedModel && selectedModel !== 'all' && car.model !== selectedModel) {
                showCar = false;
            }

            // Price filter
            if (selectedPrice && selectedPrice !== 'all') {
                if (selectedPrice === 'under300' && car.price >= 300000) showCar = false;
                if (selectedPrice === '300-400' && (car.price < 300000 || car.price > 400000)) showCar = false;
                if (selectedPrice === '400-500' && (car.price < 400000 || car.price > 500000)) showCar = false;
                if (selectedPrice === 'over500' && car.price <= 500000) showCar = false;
            }

            // Fuel filter
            if (selectedFuel && selectedFuel !== 'all' && car.fuel !== selectedFuel) {
                showCar = false;
            }

            // Show/hide car
            car.element.style.display = showCar ? 'block' : 'none';
        });
    }

    // Add event listeners
    modelSelect.addEventListener('change', filterCars);
    priceSelect.addEventListener('change', filterCars);
    fuelSelect.addEventListener('change', filterCars);

    // Initialize with all cars visible
    filterCars();
});