import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Hotel", HotelSchema);

//hotel name
//  type will be hotel apartment resort villa cabins
//  city anything
// address any address
//  distance any thing between 50 to 1000
//  photos any real working link
// title something related to hotel
// description description of hotel about 200 words
// rating 0-5
// rooms between (100 - 110)
//  cheapestPrice
