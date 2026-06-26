// Cascading data: state -> cities -> campuses.
// Used by the Enquiry Form (state/city/school dropdowns) and the Locations page.

const locations = {
  Maharashtra: {
    Nagpur: ['Air Force School, VayuSena Nagar'],
  },
}

export const states = Object.keys(locations)

export const citiesForState = (state) => (state && locations[state] ? Object.keys(locations[state]) : [])

export const schoolsForCity = (state, city) =>
  state && city && locations[state] && locations[state][city] ? locations[state][city] : []

export default locations
