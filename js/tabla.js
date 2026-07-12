async function VerifInput() {
    const idNombre = document.getElementById('idNombre').value;
    const errorDiv = document.getElementById('Errorinput');
    
    if (!idNombre.trim()) {
        errorDiv.textContent = 'Por favor, ingrese un nombre válido.';
        return;
    }
    errorDiv.textContent = '';

    try {
        // Api de genero
        const genderResponse = await fetch(`https://api.genderize.io/?name=${idNombre}`);
        const genderData = await genderResponse.json();

        document.getElementById('name').textContent = genderData.name || 'N/A';
        document.getElementById('gender').textContent = genderData.gender || 'N/A';

        // Api de nacionalidad con top 2
        const countryResponse = await fetch(`https://api.nationalize.io/?name=${idNombre}`);
        const countryData = await countryResponse.json();
        const countries = countryData.country.slice(0, 2);

        document.getElementById('country1').textContent = countries[0]?.country_id || 'N/A';
        document.getElementById('country2').textContent = countries[1]?.country_id || 'N/A';
        
    } catch (error) {
        errorDiv.textContent = `Error: ${error.message}`;
    }
}
