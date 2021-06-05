const Flat = require('../../db/models/Flat');


const fetchSerevicesData = async (services) => {
    console.log(services);
    const data = {};
    try{
        if(services.includes('flat')){
            const flat = await Flat.find().limit(20).where('amount').sort({amount:1}).populate('contact');
            data['flat'] = flat;
            // console.log(flat);
        }
        return data;
    }
    catch(e){
        console.log("error",e);
        return data;
    }
}

module.exports = fetchSerevicesData