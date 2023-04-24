/**

 Copyright 2023 Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/



module.exports = function (RED) {
  function RoadTrafficNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    // Define the properties from the config
    const length = config.length;
    const width = config.width;
    const isOneWay = config.isOneWay;
    const bikes = config.bikes;
    const trucks = config.trucks;
    const cars = config.cars;
    const cycles = config.cycles;
    const pedestrians = config.pedestrians;

    // Define the sizes and average speeds for each type of vehicle
    const vehicleData = {
      bike: { length: 2, width: 0.6, speed: 20 },
      truck: { length: 12, width: 2.6, speed: 60 },
      car: { length: 4.5, width: 1.8, speed: 80 },
      cycle: { length: 1.8, width: 0.6, speed: 15 },
      pedestrian: { length: 0.6, width: 0.6, speed: 5 },
    };

    function calculateMaxTraffic() {
      const laneCount = isOneWay ? 1 : 2;

      // Calculate lane width based on the width of the road and number of lanes
      const laneWidth = width / laneCount;

      // Calculate the total space occupied by each type of vehicle
      const spaceOccupiedByBikes = bikes * (vehicleData.bike.length + vehicleData.bike.width);
      const spaceOccupiedByTrucks = trucks * (vehicleData.truck.length + vehicleData.truck.width);
      const spaceOccupiedByCars = cars * (vehicleData.car.length + vehicleData.car.width);
      const spaceOccupiedByCycles = cycles * (vehicleData.cycle.length + vehicleData.cycle.width);
      const spaceOccupiedByPedestrians = pedestrians * (vehicleData.pedestrian.length + vehicleData.pedestrian.width);

      // Calculate the total distance covered by vehicles in one hour, considering their average speeds
      const distanceCoveredByBikes = bikes * vehicleData.bike.speed * 1000;
      const distanceCoveredByTrucks = trucks * vehicleData.truck.speed * 1000;
      const distanceCoveredByCars = cars * vehicleData.car.speed * 1000;
      const distanceCoveredByCycles = cycles * vehicleData.cycle.speed * 1000;
      const distanceCoveredByPedestrians = pedestrians * vehicleData.pedestrian.speed * 1000;

      // Calculate the time taken for each type of vehicle to travel the length of the road
      const timeTakenByBikes = (length * 1000) / vehicleData.bike.speed;
      const timeTakenByTrucks = (length * 1000) / vehicleData.truck.speed;
      const timeTakenByCars = (length * 1000) / vehicleData.car.speed;
      const timeTakenByCycles = (length * 1000) / vehicleData.cycle.speed;
      const timeTakenByPedestrians = (length * 1000) / vehicleData.pedestrian.speed;

            // Calculate the maximum traffic capacity by finding the maximum vehicles that can pass through the road in one hour
      // Calculate the maximum traffic capacity by finding the maximum vehicles that can pass through the road in one hour
     const maxTrafficCapacity = {
    bikes: Math.floor(laneWidth * distanceCoveredByBikes / (spaceOccupiedByBikes * timeTakenByBikes)),
    trucks: Math.floor(laneWidth * distanceCoveredByTrucks / (spaceOccupiedByTrucks * timeTakenByTrucks)),
    cars: Math.floor(laneWidth * distanceCoveredByCars / (spaceOccupiedByCars * timeTakenByCars)),
    cycles: Math.floor(laneWidth * distanceCoveredByCycles / (spaceOccupiedByCycles * timeTakenByCycles)),
    pedestrians: Math.floor(laneWidth * distanceCoveredByPedestrians / (spaceOccupiedByPedestrians * timeTakenByPedestrians))
  };
      return maxTrafficCapacity;
    }

    node.on("input", function (msg) {
      msg.payload = {
        maxTrafficCapacity: calculateMaxTraffic(),
      };
      node.send(msg);
    });
  }

  RED.nodes.registerType("road-traffic", RoadTrafficNode);
};

