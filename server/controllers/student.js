// Try catch block because retreiving collection of students from database. Asynchronous callback function because request to database may take a long time to fetch target data
export const getStudents = async (request, response) => {
    try {
        const allStudents = await student.find();
        response.status(200).json(allStudents); // Send an HTTP response header with a status of 200 containing a json object of data fetched from the database
    } catch (error) {
        response.status(404).json({message: error.message}); // Send an HTTP response header with a status of 400 containing a json object with an error message 
    }
}

export const createStudent = async (request, response) => {
    const student = request.body; // When a request is sent from the client side, construct a student object from the data in that request
    const newStudent = new student(student);

    try {
        await newStudent.save();
        response.status(201).json(newStudent);
    } catch (error) {
        response.status(400).json({message: error.message});
    }
}