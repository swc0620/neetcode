/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = [];
    for (let i=0; i<position.length; i++){
        cars.push([position[i], speed[i]]);
    }

    // car들을 오름차순 정렬
    cars.sort((a,b) => a[0]-b[0]);
    console.log(cars); 

    const expectedTime = cars.map((car) => (target - car[0]) / car[1]);
    const carsFleet = [];
    while (expectedTime.length > 0){
        const currentCarsExpectedTime = expectedTime.pop();
        if (carsFleet.length === 0 || carsFleet[carsFleet.length -1] < currentCarsExpectedTime){
            carsFleet.push(currentCarsExpectedTime);
        }   
    }
    return carsFleet.length;
};