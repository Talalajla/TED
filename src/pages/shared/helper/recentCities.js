export const figureRecentCitiesArray = (newCity) => {
    let recentCitiesArray = [];
		
    if (localStorage.getItem('TED_recentCities'))
        recentCitiesArray = JSON.parse(localStorage.getItem('TED_recentCities'));

    if (recentCitiesArray.some((el, index) => el.city === newCity.city ? recentCitiesArray.splice(index, 1) : null));

    recentCitiesArray.unshift(newCity);

    if (recentCitiesArray.length === 5)
        recentCitiesArray.pop();
        
    return recentCitiesArray;
}