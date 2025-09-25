SensorData {
  _id: ObjectId,
  type: String, // ['Traffic', 'AirQuality', 'Waste', 'Energy']
  location: {
    latitude: Number,
    longitude: Number,
    area: String
  },
  value: Number, // e.g. PM2.5 index, traffic density, kWh usage
  unit: String, // e.g. 'µg/m³', 'vehicles/hour', 'kWh'
  timestamp: Date
}
