// step 3... function below takes in the distance entered by user and calculates extra delivery fee....
const extraDeliveryFee = function (distance) {
  if (distance > 4.5 && distance <= 5.5) {
    return 1;
  } else if (distance > 5.5 && distance <= 6.5) {
    return 2;
  } else if (distance > 6.5 && distance <= 7.5) {
    return 3;
  } else if (distance > 7.5 && distance <= 8.5) {
    return 4;
  } else if (distance > 8.5 && distance <= 9.5) {
    return 5;
  }
};

let fixedDeliveryDistance = 4.5;
let deliveryFees = [];
let deliveryDistances = [];

// step 1....user inputs the distance for the current delivery...
let currentDeliveryDistance = prompt(
  "What is the delivery distance for the currrent order?: "
);

// step 2....function checks for the delivery distance and decides whether or not to add extra delivery fee..
let checkDeliveryDistance = function (deliveryDistance) {
  let fixedDeliveryFee = 5;
  if (deliveryDistance > fixedDeliveryDistance) {
    const additionalFee = extraDeliveryFee(deliveryDistance);
    fixedDeliveryFee += additionalFee;
    deliveryDistances.push(deliveryDistance);
    deliveryFees.push(fixedDeliveryFee);
  } else if (deliveryDistance < fixedDeliveryDistance) {
    let theDistance = deliveryDistance;
    fixedDeliveryFee += 0;
    deliveryDistances.push(theDistance);
    deliveryFees.push(fixedDeliveryFee);
  }

  console.log(deliveryFees);
  console.log(deliveryDistances);
};

checkDeliveryDistance(Number(currentDeliveryDistance));

//  step 4... user can continue adding as many delivery distances as they want.....
let moreDeliveryDistance = prompt(
  "Would you like to add some more delivery distances?:  yes/no"
);

while (moreDeliveryDistance === "yes") {
  let newDeliveryDistance = prompt(
    "You can add more delivery distances you covered today: "
  );
  checkDeliveryDistance(Number(newDeliveryDistance));
  moreDeliveryDistance = prompt(
    "Would you like to add some more delivery distances?:  yes/no"
  );

  // step 5... once user is done adding delivery distances... function calculates total deliveries made, total distance covered and total fees earned....
  if (moreDeliveryDistance !== "yes") {
    const calcTotal = function (arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    };
    console.log(`You made a total of ${deliveryDistances.length} deliveries,
        Your total distance for the day was ${calcTotal(
          deliveryDistances
        )}km and total amount
        earned is ${calcTotal(deliveryFees)}$`);
  }
}
