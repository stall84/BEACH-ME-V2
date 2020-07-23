# BEACH-ME !
### A react/redux web-application that provides the user, having an urgent need to get the heck out of town, with a listing of the 5 nearest beaches, their travel-times, and a 5 day weather forecast for those beach/towns.

#### Utilizes Google's Distance Matrix, and OpenWeatherMap.org's API(s)

#### Permission for the browser to 'know' the user's location is required for normal functionality, 'Anonymously' entering an address or zipcode for user's current/origin location is expected in later versions.

#### User can easily click-through the hyper-linked list of nearest beaches to be taken to Google Map's directions/trip-overview

#### Current Version is open to the entire United States. A mongoDB database exists with around 100 beaches across the US




---------------------------------------------------------------------------
# Versions

### Version 2.0 - Most recent version was a near complete re-format. The React front-end still exists and is little changed except for the addition of an 'anonymous' beach-search option for users that do not wish to give their browser's location information.   The client now communicates with a MongoDB database containing hundreds of beaches across the United States via an ExpressJS  API , so the whole country is served in this newest version.  Mobile revisions are currently underway. 

### Version 1.0 - Initial build with trimmed-down functionality. User can only use their current location (permission must be allowed to browser on initial page-load) to find nearest beaches and their weather forecasts. Version 1 is limited to 25 preset beaches in the southeastern United States. 
