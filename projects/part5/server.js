const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const upload = multer({ dest: __dirname + "/public/images" });

mongoose
  .connect(
    "mongodb+srv://isaacnetti:mqdFnFHOHCbpCk2J@cluster0.8amny83.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("could not connect ot mongodb...", err));

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String
  });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "public/index.html");
});

const Project = mongoose.model("Project",projectSchema);

app.get("/api/projects", (req, res) => {
    getProjects(res);
});

const getProjects = async (res) =>{
    const projects = await Project.find();
    res.sendFile(__dirname + "public/index.html");
    res.send(projects);
}

app.post("/api/projects",upload.single("img"), (req, res) => {
    const result = validateproject(req.body);

    if (result.error) {
        console.log("here");
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const project = new Project ({
        title: req.body.title,
        description: req.body.description,
    });

    if (req.file) {
        project.img = "images/" + req.file.filename;
      }

    createProject(project, res);
});

const createProject = async (project,res) =>{
    const result = await project.save();
    res.send(project);
}

app.delete("/api/projects/:id", upload.single("img"), (req, res) => {
    removeProject(res,req.params.id);
});
const removeProject = async (res, id) => {
    const project = await Project.findByIdAndDelete(id);
    res.send(project);
  };

const validateproject = (project) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        title: Joi.string().min(3).required(),
        description: Joi.string().min(3).required()
    });

    return schema.validate(project);
};

app.listen(3000, () => {
    console.log("I'm listening");
});