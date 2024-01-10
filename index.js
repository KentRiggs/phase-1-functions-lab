function distanceFromHqInBlocks(start) {
    return Math.abs(start-42);

}
  function distanceFromHqInFeet(start) {
    return Math.abs(start-42)*264

  }
  function distanceTravelledInFeet(start, finish) {
    return Math.abs(start-finish)*264
  }
let finish = 47 
  function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination);
   
   if (distance <= 400) {
    return 0;
   } else if (distance > 400 && distance <=2000) {
    return (distance - 400) *.02;
   } else if (distance > 2000 && distance < 2500) {
    return 25;
   } else {
    return "cannot travel that far";
   }
   
}