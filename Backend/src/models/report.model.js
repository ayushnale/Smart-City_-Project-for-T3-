Report {
  _id: ObjectId,
  title: String,
  type: String, // ['Daily', 'Weekly', 'Monthly', 'Custom']
  category: String, // ['AirQuality', 'Traffic', 'Energy', 'Waste']
  generatedBy: ObjectId, // User reference
  dataSummary: Object, // aggregated metrics
  createdAt: Date
}
