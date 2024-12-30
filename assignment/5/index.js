
function estimateDeliveryTime(packageType) {
  let deliveryTime;
  switch (packageType) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "Next day";
      break;
    default:
      deliveryTime = "Invalid package type";
  }
  return deliveryTime;
}

console.log(estimateDeliveryTime("standard"));  // Output: 3-5 days
console.log(estimateDeliveryTime("express"));    // Output: 1-2 days
console.log(estimateDeliveryTime("overnight"));  // Output: Next day
console.log(estimateDeliveryTime("same-day"));   // Output: Invalid package type
