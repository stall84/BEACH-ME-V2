

// Return the 3 closest beaches to user by trip time
export const shortestTrips = (timesArr) => {

    return timesArr.sort().splice(0,4);    

}

// Sorter function for combined array in Distance Matrix



// Convert seconds to hours/mins

export const timeConverter = (n) => {
    
    var hours = (n / 3600);
    var rHours = Math.floor(hours);
    var minutes = (hours - rHours) * 60;
    var rMinutes = Math.round(minutes);
    return `${rHours}Hours and ${rMinutes}Minutes`
}

export const kelvinConverter = (T) => {
    return ((T * (9/5)) - 459.67).toFixed()
}