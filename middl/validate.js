const yup = require("yup");
const validate = async (req, res, next) => {
  try {
    const Schema = yup.object().shape({
      conditions: yup.string().required(),
      wind: yup.string().required(),
      precipitation: yup.number().required(),
      visibility: yup.string().required(),
      pressure: yup.string().required(),
     
    });
    await Schema.validate(req.body);
    next();
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};

module.exports = validate;

