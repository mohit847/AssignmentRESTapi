const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    student_id: {
        type: Number,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("students", studentSchema);