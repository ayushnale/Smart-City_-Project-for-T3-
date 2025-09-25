Alert {
  _id: ObjectId,
  type: String, // ['AirQuality', 'Traffic', 'Energy', 'Waste']
  message: String,
  severity: String, // ['Low', 'Medium', 'High', 'Critical']
  triggeredBy: ObjectId, // SensorData reference
  status: String, // ['Pending', 'Acknowledged', 'Resolved']
  assignedTo: ObjectId, // User reference
  createdAt: Date,
  updatedAt: Date
}
