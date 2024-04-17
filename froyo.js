function countFlavors() {
    const flavorsInput = document.getElementById('flavorsInput').value;
    const flavors = flavorsInput.split(',');
    
    const flavorCounts = {};
    flavors.forEach(flavor => {
        flavor = flavor.trim();
        if (flavor in flavorCounts) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });
    
    console.log('Flavor Counts:');
    for (const flavor in flavorCounts) {
        console.log(`${flavor}: ${flavorCounts[flavor]}`);
    }
}