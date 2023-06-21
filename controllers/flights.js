const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
};

//index
async function index(req, res) {
  const allFlights = await Flight.find({});
  res.render("flights/index", { flight: allFlights, title: "All Flights" });
}

//new
function newFlight(req, res) {
  res.render("flights/new", { title: "New Flight" });
}

//create
async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    await Flight.create(req.body);
    res.redirect("flights");
  } catch (err) {
    res.render("flights/new", { errorMsg: err.message });
  }
}
