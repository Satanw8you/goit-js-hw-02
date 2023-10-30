function getShippingCost(country) {
  let coast;
  switch (country) {
    case "China":
      coast = 100;
      break;
    case "Chile":
      coast = 250;
      break;
    case "Australia":
      coast = 170;
      break;
    case "Jamaica":
      coast = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return `Shipping to ${country} will cost ${coast} credits`;
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
