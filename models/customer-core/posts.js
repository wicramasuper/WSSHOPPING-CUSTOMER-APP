const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({


ScheduleItemsName : {
type : String,
required: true

},
    
Address : {
type : String,
required: true

},

City : {
type : String,
required: true

},
Date : {
type : String,
required: true
},

Time : {
type : String,
required: true

},

ScheduleWeeklyMonthly : {
type : String,
required: true

},
    
DescribeScheduleItemsHear: {
type : String,
required: true

}
    


});



module.exports = mongoose.model('Posts',postSchema);