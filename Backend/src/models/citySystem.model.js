Integration {
  _id: ObjectId,
  systemName: String, // e.g. "Power Grid", "Metro API"
  apiEndpoint: String,
  authType: String, // ['OAuth', 'APIKey']
  lastSync: Date,
  status: String // ['Active', 'Inactive']
}
