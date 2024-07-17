const router = require("express").Router();
const {
    getTasks,
    addTask,
    deleteTask,
    deleteAllTasks
} = require("../controllers");

// router.get("/favicon.ico", (req, res) => {
//   return res.json("test");
// });

router.get('/', (req, res) => {
    return res.json({message: 'Welcome'});
})

router.get('/getAllTasks', getTasks);
router.post('/addTask', addTask);
router.delete('/deleteTask', deleteTask);
router.delete('/deleteAllTasks', deleteAllTasks);

module.exports = router;
