const { celebrate, Joi, Segments } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      admin: Joi.string().default(0),
    }),
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().min(10).required(),
    }),
  }),
  getByEmail: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
    }),
  }),
  updateById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().min(10).required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      admin: Joi.string().default(0).required(),
    }),
  }),
  deleteById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().min(10).required(),
    }),
  }),
};
