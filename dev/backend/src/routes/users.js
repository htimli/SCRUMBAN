const usersRouter = require("express").Router();

const {
  getAllUsers,
  addUser,
  removeUser,
  updateUser,
  getUserLogin,
} = require("../controllers/userController");

usersRouter.route("/all").get(async (req, res) => {
  let response = await getAllUsers();
  if (response.success == true) {
    res.status(200).json(response);
  } else {
    res.status(404).json(response);
  }
});
usersRouter.route("/updateOne").get(async (req, res) => {
  let response = await updateUser();
  if (response.success == true) {
    res.status(200).json(response);
  } else {
    res.status(404).json(response);
  }
});
usersRouter.route("/addOne").post(async (req, res) => {
  let response = await addUser(req.body);
  if (response.success == true) {
    res.status(200).json(response);
  } else {
    res.status(404).json(response);
  }
});

usersRouter.route("/findOne").post(async (req, res) => {
  let response = await getUserLogin(req.body);
  if (response.success == true) {
    res.status(200).json(response);
  } else {
    res.status(404).json(response);
  }
});

usersRouter.route("/deleteOne").delete(async (req, res) => {
  let response = await removeUser();
  if (response.success == true) {
    res.status(200).json(response);
  } else {
    res.status(404).json(response);
  }
});

module.exports = usersRouter;
