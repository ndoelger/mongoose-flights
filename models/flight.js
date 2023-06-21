const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN", "LGA"],
    default: "LGA",
  },
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: {
    type: Date,
    default: () => {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    },
  },
});

module.exports = mongoose.model("Flights", flightSchema);
