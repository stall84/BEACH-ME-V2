

// Return the 3 closest beaches to user by trip time
export const shortestTrips = (timesArr) => {

    return timesArr.sort().splice(0,3);    

}