const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyCAxx5SuTFpG2zUgI6vk0rHGjuw7ssY3_A";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Please generate a detailed and realistic travel tour for the following specifications (make sure the costs are estimated in the destination's currency): location Dabolim Goa International Airport (GOI), Airport Road, Vasco Da Gama, Goa 403801, India, duration 1 days and 0 nights, for Friends travelers, and a budget of Cheap. The itinerary should include the best travel routes based on the mode of transportation (flight, train, bus, or ship), with ticket prices. Additionally, include recommended hotels or lodging options with their names, prices, and booking URLs. Include places to visit nearby, provide the name of each place, a small description, an image URL, geo coordinates, ticket pricing, estimated travel time from the accommodation, and the best time to visit.  Ensure all the above information is presented in an error free, easy to understand, structured JSON format without using any illegal characters.\"",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "tour": {\n    "destination": "Goa, India",\n    "airport": "Dabolim Goa International Airport (GOI)",\n    "duration": "1 day",\n    "travelerType": "Friends",\n    "budget": "Cheap",\n    "itinerary": {\n      "day1": {\n        "morning": {\n          "activity": "Arrival at Dabolim Goa International Airport (GOI)",\n          "description": "Upon arrival, collect your luggage and proceed to the pre-paid taxi counter outside the airport.",\n          "transportation": "Taxi",\n          "estimatedCost": "INR 500-700",\n          "destination": "Panaji",\n          "travelTime": "1 hour"\n        },\n        "afternoon": {\n          "activity": "Explore Panaji",\n          "description": "Visit the Old Goa Churches, including the Basilica of Bom Jesus and Se Cathedral.",\n          "places": [\n            {\n              "name": "Basilica of Bom Jesus",\n              "description": "A UNESCO World Heritage Site, known for the tomb of St. Francis Xavier.",\n              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Basilica_of_Bom_Jesus%2C_Goa%2C_India.jpg/1280px-Basilica_of_Bom_Jesus%2C_Goa%2C_India.jpg",\n              "geoCoordinates": "15.4103° N, 73.8519° E",\n              "ticketPrice": "Free entry",\n              "travelTime": "15 minutes from Panaji",\n              "bestTime": "Morning or evening"\n            },\n            {\n              "name": "Se Cathedral",\n              "description": "A magnificent cathedral known for its impressive architecture.",\n              "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Se_Cathedral%2C_Old_Goa.jpg/1280px-Se_Cathedral%2C_Old_Goa.jpg",\n              "geoCoordinates": "15.4106° N, 73.8516° E",\n              "ticketPrice": "Free entry",\n              "travelTime": "10 minutes from Basilica of Bom Jesus",\n              "bestTime": "Morning or evening"\n            }\n          ]\n        },\n        "evening": {\n          "activity": "Enjoy sunset at Miramar Beach",\n          "description": "Relax and soak in the scenic sunset at Miramar Beach, a popular spot for evening walks.",\n          "image": "https://www.holidify.com/images/cmsuploads/2018/05/15/miramar-beach-goa-things-to-do.jpg",\n          "geoCoordinates": "15.4843° N, 73.8264° E",\n          "travelTime": "30 minutes from Old Goa",\n          "bestTime": "Evening"\n        }\n      },\n      "lodging": {\n        "name": "The LaLiT Golf & Spa Resort Goa",\n        "description": "A 5-star luxury resort with a spa, golf course, and multiple dining options.",\n        "image": "https://www.thelalit.com/hotels/goa/images/gallery/the-lalit-golf-spa-resort-goa-exterior-view.jpg",\n        "price": "INR 5000-7000 per night",\n        "bookingURL": "https://www.thelalit.com/hotels/goa/"\n      }\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This itinerary is a suggestion, and you can customize it based on your interests and preferences.\n* The estimated costs are approximate and may vary depending on the time of year and availability.\n* For the cheapest option, consider staying at a guesthouse or hostel, which can be found for as low as INR 500-1000 per night.\n* Public transportation options like buses are available and can be cheaper than taxis.\n* Consider packing light to avoid extra baggage fees.\n* Always check the latest travel advisories and health guidelines before your trip.\n* This itinerary includes a mix of historical and cultural attractions with a touch of relaxation at the beach.\n* You can add more activities or places to visit depending on your interests and time. \n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
