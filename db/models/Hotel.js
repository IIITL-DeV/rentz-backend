const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    media:[{type:Buffer}],
    facilites:[{type:String}],
    discription:String,
    location:"New Delhi",
    contact:[{ type: Schema.Types.ObjectId, ref: 'Users' }],
    typeOfFamily:String,
    amount:Number,
    NearbyFacilities:[{type:String}]
},
{
    timestamps:true
})

let Hotel = mongoose.model("flats",hotelSchema);

module.exports = Hotel;