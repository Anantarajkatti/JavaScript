//possible ways to create objects in JavaScript
let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  }
  let carProps = {
    type: {
      value: 'Volkswagen',
      enumerable:true
    },
    model: {
      value: 'Golf',
      enumerable:true
    }
  }
  
  var car = Object.create(vehicle, carProps);
  console.log(car);

