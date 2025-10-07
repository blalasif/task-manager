require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./Database/db');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const PORT = process.env.PORT || 4000;
connectDB();

// Mount route files
app.use('/', projectRoutes); // all project routes
app.use('/', taskRoutes); // all task routes
// Project routes
// router.post("/projects", projectController.createProject);
// router.get("/projects", projectController.getProjects);

// // Task routes (nested under project)
// router.post("/projects/:id/tasks", taskController.addTaskToProject);
// router.get("/projects/:id/tasks", taskController.getTasksByProject);
app.get('/', (req, res) => {
  res.send('Project Management Tool');
});

app.listen(PORT, (req, res) => {
  console.log(`App is listning on PORT ${PORT}`);
});
