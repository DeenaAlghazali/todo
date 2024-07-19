const router = require("express").Router();
const {
    getAllTasks,
    addTask,
    deleteTask,
    deleteAllTasks,
    editTask
} = require("../controllers");

// router.get("/favicon.ico", (req, res) => {
//   return res.json("test");
// });

router.get('/', (req, res) => {
    return res.json({message: 'Welcome'});
})

router.get('/getAllTasks', getAllTasks);
router.post('/addTask', addTask);
router.delete('/deleteTask/:id', deleteTask);
router.delete('/deleteAllTasks', deleteAllTasks);
router.put('/editTask/:id', editTask);

module.exports = router;
