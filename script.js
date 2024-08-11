document.getElementById('convert').addEventListener('click', function() {
    const meters = parseFloat(document.getElementById('meters').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(meters) || meters < 0) {
        result = 'Por favor, insira um valor válido em metros.';
    } else {
        switch (unit) {
            case 'yard':
                result = (meters * 1.094).toFixed(2) + ' jardas';
                break;
            case 'foot':
                result = (meters * 3.281).toFixed(2) + ' pés';
                break;
            case 'inch':
                result = (meters * 39.37).toFixed(2) + ' polegadas';
                break;
            case 'mile':
                result = (meters * 0.000621).toFixed(6) + ' milhas';
                break;
        }
    }

    document.getElementById('result').textContent = result;
});
