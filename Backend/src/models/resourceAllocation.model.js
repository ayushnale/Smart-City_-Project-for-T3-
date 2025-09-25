Optimization {
  _id: ObjectId,
  category: String, // ['Traffic', 'Waste', 'Energy']
  recommendation: String, // e.g. "Change signal cycle to 90s"
  dataRef: ObjectId, // link to SensorData or Report
  generatedAt: Date,
  implemented: Boolean
}
