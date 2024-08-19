// IIFE para cargar el JSON de animales
export const loadAnimals = (function() {
    const getData = async () => {
        const response = await fetch('./animales.json');
        const data = await response.json();
        return data.animales;
    };

    return { getData };
})();
