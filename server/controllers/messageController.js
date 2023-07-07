const User = require("../models/userModel");

const verifyUserCode = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.verifyUserCode(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { verifyUserCode };
