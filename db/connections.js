const mongoose = require("mongoose");
if (process.env.NODE_ENV ==="production") {
    mongoose.connectt(process.env.MLAB_URL)
} else {
    mongoose.connect('mongodb://localhost/tweeter')
}
mongoose.Promise = Promise;
module.exports = mongoose;
