import Bug from "../model/bugs.model.js";

export const getAllBugs = async (req, res) => {
  try {
    let bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    console.log(err);
  }
};

export const addBug = async (req, res) => {
  try {
    let bugs = new Bug({
      text: req.body.text,
      severity: req.body.severity,
    });
    await bugs.save();
    return res.status(200).send({
      message: "Bug added successfully",
      data: bugs
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteBug = async (req, res) => {
    try {
      let bug = await Bug.findByIdAndDelete(req.params.id);
      return res.status(200).send({
        message: "Bug deleted successfully",
        data: bug
      });
    } catch (err) {
      console.log(err);
    }
  };
