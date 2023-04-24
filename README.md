# node-red-contrib-road-traffic

A Node-RED node that estimates the maximum traffic capacity of a road for various types of vehicles, considering their average speeds and sizes. This node is essential for urban planners, traffic engineers, and smart city developers as it provides critical information for designing efficient transportation systems and mitigating traffic congestion.

## Importance

Understanding the maximum traffic capacity of a road is crucial for several reasons:

1. **Infrastructure planning**: Urban planners and traffic engineers need accurate estimations of road capacity to design, develop, and maintain an efficient transportation system. This node provides essential insights for making informed decisions about road expansions, new infrastructure projects, and public transportation development.

2. **Traffic congestion mitigation**: Traffic congestion leads to increased travel time, air pollution, and fuel consumption. By estimating the maximum capacity of a road, this node can help in identifying areas prone to congestion and implementing strategies to reduce it, such as optimizing traffic light timings, introducing carpool lanes, or promoting alternative transportation modes.

3. **Smart city development**: As cities continue to grow and evolve, integrating intelligent transportation systems becomes vital for ensuring efficient and sustainable urban mobility. This node can be an essential component in developing smart city solutions, such as adaptive traffic management systems, real-time traffic monitoring, and dynamic routing algorithms.

4. **Emergency management**: In emergency situations, it is crucial to have a clear understanding of a road's capacity to ensure the efficient movement of emergency vehicles and the evacuation of affected populations. This node can help emergency planners to identify bottlenecks and prioritize routes for evacuation or emergency response.


## Installation

To install the node, run the following command in your Node-RED user directory (usually `~/.node-red`):

```
npm install node-red-contrib-road-traffic
```

## Usage

This node takes an input message and calculates the maximum traffic capacity for different types of vehicles on a road. The output message's payload contains the maximum traffic capacity for bikes, trucks, cars, cycles, and pedestrians, based on the road's configuration.

The node's configuration properties include:

- Length: The length of the road in kilometers.
- Width: The width of the road in meters.
- One way: A boolean value indicating whether the road is one-way (true) or two-way (false).
- Bikes: The number of bikes on the road.
- Trucks: The number of trucks on the road.
- Cars: The number of cars on the road.
- Cycles: The number of cycles on the road.
- Pedestrians: The number of pedestrians on the road.

After configuring the node properties in the Node-RED editor, connect an input node (e.g., an inject node) to the `road-traffic` node. When an input message is received, the node calculates the maximum traffic capacity for each type of vehicle and sends an output message with a payload containing the results.

Example output message payload:

```json
{
  "maxTrafficCapacity": {
    "bikes": 150,
    "trucks": 45,
    "cars": 200,
    "cycles": 120,
    "pedestrians": 300
  }
}
```

## Contributing

If you would like to contribute to this project, feel free to submit pull requests or open issues on the repository.


## License

This project is licensed under the GNU General Public License v3.0 or later (GPL-3.0-or-later) - see the [LICENSE](LICENSE) file for details.

## Author

Harshad Joshi - [harshad@bufferstack.io](mailto:harshad@bufferstack.io) - [https://bufferstack.io](https://bufferstack.io)

## Note 

This software code is in beta version and does not contain official parameters that are used by Indian Road Congress or similar authorities, so send a pull request with 
suitable changes so that it can be incorporated for further release

This module is part of Bufferstack.IO IIoT Gateway [https://sourceforge.net/projects/iiot-gateway/](https://sourceforge.net/projects/iiot-gateway/)
