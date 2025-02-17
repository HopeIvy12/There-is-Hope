
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./QuestionPage.module.css"; 

// Example real hotels data in the UK (with location and website links)
const hotels = [
  {
    id: 1,
    name: "The Ritz London",
    location: "London, SW1X 7RL",
    website: "https://www.theritzlondon.com",
    stepFreeAccess: true,
    wheelchairBathroom: true,
    groundFloor: true,
    serviceAnimal: true,
    accessibleParking: true,
    HourReception: true,
  },
  {
    id: 2,
    name: "Premier Inn Manchester City Centre",
    location: "Manchester, M3 3WB",
    website: "https://www.premierinn.com/gb/en/home.html",
    stepFreeAccess: true,
    wheelchairBathroom: true,
    groundFloor: true,
    serviceAnimal: false,
    accessibleParking: true,
    HourReception: true,
  },
  {
    id: 3,
    name: "Holiday Inn Edinburgh",
    location: "Edinburgh, EH12 9DN",
    website: "https://www.ihg.com/holidayinn/hotels/gb/en/edinburgh/edimb",
    stepFreeAccess: true,
    wheelchairBathroom: true,
    groundFloor: false,
    serviceAnimal: true,
    accessibleParking: true,
    HourReception: true
  },
  {
    id: 4,
    name: "Radisson Blu Hotel, Bristol",
    location: "Bristol, BS1 4QF",
    website: "https://www.radissonblu.com/en/hotel-bristol",
    stepFreeAccess: true,
    wheelchairBathroom: false,
    groundFloor: true,
    serviceAnimal: true,
    accessibleParking: true,
    HourReception: true
  },
  {
    id: 5,
    name: "The Savoy",
    location: "London, WC2R 0EZ",
    website: "https://www.thesavoylondon.com",
    stepFreeAccess: true,
    wheelchairBathroom: true,
    groundFloor: true,
    serviceAnimal: true,
    accessibleParking: true,
    HourReception: true,
  },
  {
    id: 6,
    name: "Park Plaza Westminster Bridge London",
    location: "London, SE1 7UT",
    website: "https://www.parkplaza.com/london-hotel-gb-se1-7ut/gbwestmn",
    stepFreeAccess: true,
    wheelchairBathroom: true,
    groundFloor: false,
    serviceAnimal: true,
    accessibleParking: true,
    HourReception: true,
  },
  {
    id: 7,
    name: "Ibis Styles London Gloucester Road",
    location: "London, SW7 4QL",
    website: "https://all.accor.com/hotel/B0P1/index.en.shtml",
    stepFreeAccess: true,
    wheelchairBathroom: false,
    groundFloor: false,
    serviceAnimal: false,
    accessibleParking: true,
    HourReception: true,
  },
];

function ResultsPage() {
  const location = useLocation();
  const storeResponse = location.state?.responses || [];
  // Get responses from state 

  // Filter hotels based on user responses
  //filter method goes through every hotel and decides which one should be filtered in or out
  //hotels.filter*(hotel) hotel refer to each hotel
  const filteredHotels = hotels.filter((hotel) => {
    //response refers to each indivdual answer
    //.every checks if some or all are met
    return storeResponse.every((response) => {
      if (response.answer === "Yes") {
        // Check if the hotel matches the user's answer
        // we are checking against if they said yes
        //if the response id and the question Id === 1 and the hotel is not step free acceess return false 
        //it doesnt have step free accesss
        //otherwise return true yes it does

        if (response.questionId === 1 && !hotel.stepFreeAccess) return false;
        if (response.questionId === 2 && !hotel.wheelchairBathroom) return false;
        if (response.questionId === 3 && !hotel.groundFloor) return false;
        if (response.questionId === 4 && !hotel.serviceAnimal) return false;
        if (response.questionId === 5 && !hotel.accessibleParking) return false;
        if (response.questionId === 6 && !hotel.HourReception) return false;
      }
      //This only filters based on "Yes" answers.
// If a hotel lacks a "Yes" feature, it gets excluded.
// If the answer is "No", the feature is ignored (the hotel is not removed because of it).
      return true; 
    });
  });

  // Display results
  return (
    <div>
      <h1>Results</h1>
      <p>Here are the hotels that match your preferences:</p>
      {filteredHotels.length === 0 ? (
        <p>Unfortunately no hotels match your criteria. Please try adjusting your answers or try again soon we are adding hotels all the time here at There is Hope.</p>
      ) : (
        <ul>
          {filteredHotels.map((hotel) => (
            <li key={hotel.id}>
              <h2>{hotel.name}</h2>
              <p><strong>Location:</strong> {hotel.location}</p>
              <p><strong>Website:</strong> <a href={hotel.website} target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              <p>Step-Free Access: {hotel.stepFreeAccess ? "Yes" : "No"}</p>
              <p>Wheelchair Bathroom: {hotel.wheelchairBathroom ? "Yes" : "No"}</p>
              <p>Ground Floor: {hotel.groundFloor ? "Yes" : "No"}</p>
              <p>Service Animal: {hotel.serviceAnimal ? "Yes" : "No"}</p>
              <p>Accessible Parking: {hotel.accessibleParking ? "Yes" : "No"}</p>
              <p>24 Hour Reception: {hotel.HourReception ? "Yes" : "No"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultsPage;