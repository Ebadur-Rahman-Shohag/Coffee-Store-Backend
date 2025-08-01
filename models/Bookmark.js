const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);