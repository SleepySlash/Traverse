export const SelectTravelsList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "🚶",
    people: "people - 1",
  },
  {
    id: 2,
    title: "Couple",
    desc: "Trip with your partner",
    icon: "🥂",
    people: "people - 2",
  },
  {
    id: 3,
    title: "Family",
    desc: "Family on a Vacation",
    icon: "👨‍👩‍👧‍👦",
    people: "people - 3 to 5",
  },
  {
    id: 4,
    title: "Friends",
    desc: "Friends traveling together",
    icon: "🥳🎉",
    people: "people more than 2",
  },
];

export const SelectBudgetList = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay consious of costs",
    icon: "🪙",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep the expenses average ",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about the costs",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Please generate a detailed and realistic travel tour for the following specifications (make sure the costs are estimated in the destination's currency): location {location}, duration {totalDays} days and {totalNights} nights, for {travellers} travelers, and a budget of {budget}. The itinerary should include the best travel routes based on the mode of transportation (flight, train, bus, or ship), with ticket prices and booking URLs provided. Additionally, include a list of recommended hotels or lodging options with their names, prices, and booking URLs. For places to visit nearby, provide a comprehensive list that includes the name of each place, a detailed description, an image URL, geo coordinates, ticket pricing, estimated travel time from the accommodation, and the best time to visit. Ensure all this information is presented in a structured JSON format.";
