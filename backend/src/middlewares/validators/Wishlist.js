const { celebrate, Joi, Segments } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      book_id: Joi.number().integer().required(),
    }),
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      wish_id: Joi.string().required(),
    }),
  }),
  getByUserId: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      user_id: Joi.string().required(),
    }),
  }),
  getByBookId: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      book_id: Joi.string().required(),
    }),
  }),
  deleteById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      wish_id: Joi.string().required(),
    }),
  }),
};
