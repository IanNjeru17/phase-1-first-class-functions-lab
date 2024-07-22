// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array of functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function to create a fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Fare multiplier functions
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers
  function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
  }
  