const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    id:{
        type: String,
    },
    title: {
        type: String,

    },
    description: {
        type: String,

    },
    completed: Boolean,
},{
    timestamps: true
});

module.exports = model ('Task', TaskSchema);
