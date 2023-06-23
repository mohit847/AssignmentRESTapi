const express = require("express");
const router = express.Router();
const Students = require("../models/student.model");

//creation POST/host/students
router.post("/", (req, res) => {
    if (
        !req.body.name ||
        !req.body.age ||
        !req.body.grade ||
        !req.body.student_id
    ) {
        res.status(400).send({
            status: "bad request",
            message: "All fields are required",
        });
        return;
    }

    const student = new Students({
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade,
        student_id: req.body.student_id,
    });

    try {
        student
            .save()
            .then((student_) => {
                res.status(201).send({
                    status: "ok",
                    message: "successfully created student!",
                    student_: student_,
                });
            })
            .catch((err) => {
                res.status(400).send({
                    status: "error",
                    message: "Error creating student",
                    err: err,
                });
            });
    } catch (error) {
        res.status(400).send({
            status: "error",
            message: "Cannot create student",
            error: error,
        });
    }
});

//Get students
// GET/HOST/students
router.get("/", (req, res) => {
    try {
        Students.find()
            .then((students) => {
                res.status(200).send({
                    status: "ok",
                    message: "successfully retreived students",
                    students: students,
                });
            })
            .catch((err) => {
                res.status(400).send({
                    status: "error",
                    message: "Error retreiving students",
                    err: err,
                });
            });
    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "Internal server error",
            err: err,
        });
    }
});


//find student using id  GET /students/:id

router.get("/:id", (req, res) => {
    Students.findOne({ student_id: req.params.id })
        .then((student_) => {
            if (!student_) {
                return res.status(404).send({
                    status: "not found",
                    message: "Student not found",
                });
            }
            return res.status(200).send({
                status: "ok",
                message: "successfully retreived student",
                student_: student_,
            });
        })
        .catch((err) => {
            res.status(400).send({
                status: "error",
                message: "Error retreiving student",
                err: err,
            });
        });
});

//update student by id   PUT /students/:id

router.put("/:id", (req, res) => {
    Students.findOneAndUpdate({ student_id: req.params.id }, req.body)
        .then((student_) => {
            if (!student_) {
                return res.status(404).send({
                    status: "not found",
                    message: "student not found",
                });
            }
            return res.status(200).send({
                status: "ok",
                message: "successfully updated student",
            });
        })
        .catch((err) => {
            res.status(500).send({
                status: "error",
                message: "Internal server error",
            });
        });
});


//  * delete student by id //DELETE /students/:id

router.delete("/:id", (req, res) => {
    Students.deleteOne({ student_id: req.params.id }).then((data) => {
        if (data.deletedCount == 0) {
            return res.status(404).send({
                status: "error",
                message: "student not found",
            });
        }
        return res.status(200).send({
            status: "ok",
            message: "successfully deleted student",
            data: data,
        });
    });
});

module.exports = router;