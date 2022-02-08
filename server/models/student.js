import mongoose from 'mongoose';

// Creates essentially a blueprint for a collection in a mongodb nosql database
const studentSchema = mongoose.Schema({
    registrationNumber: Number,
    name: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    },
    subjects: [String]
});

const student = mongoose.model('student', studentSchema);

export default student;