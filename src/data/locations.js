// Cascading data: state -> cities -> campuses.
// Used by the Enquiry Form (state/city/school dropdowns) and the Locations page.

const locations = {
  Maharashtra: {
    Mumbai: ['Airforce School International School, Andheri', 'Airforce School International School, Parel'],
    Pune: ['Airforce School International School, Wakad', 'Airforce School International School, Hinjewadi'],
    Nagpur: ['Airforce School International School, Nagpur Central'],
  },
  Karnataka: {
    Bengaluru: ['Airforce School International School, Whitefield', 'Airforce School International School, JP Nagar'],
    Mysuru: ['Airforce School International School, Mysuru'],
  },
  Gujarat: {
    Ahmedabad: ['Airforce School International School, SG Highway'],
    Surat: ['Airforce School International School, Surat'],
  },
  'Madhya Pradesh': {
    Indore: ['Airforce School International School, Indore'],
    Ujjain: ['Airforce School International School, Ujjain'],
  },
  Telangana: {
    Hyderabad: ['Airforce School International School, Gachibowli', 'Airforce School International School, Kukatpally'],
  },
  'West Bengal': {
    Kolkata: ['Airforce School International School, Salt Lake'],
  },
  Punjab: {
    Ludhiana: ['Airforce School International School, Ludhiana'],
    Amritsar: ['Airforce School International School, Amritsar'],
  },
  Goa: {
    Panaji: ['Airforce School International School, Panaji'],
  },
}

export const states = Object.keys(locations)

export const citiesForState = (state) => (state && locations[state] ? Object.keys(locations[state]) : [])

export const schoolsForCity = (state, city) =>
  state && city && locations[state] && locations[state][city] ? locations[state][city] : []

export default locations
