const { celebrate, Joi, Segments } = require("celebrate");

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object()
      .keys({
        title: Joi.string().required(),
        image_path: Joi.string(),
        description: Joi.string(),
        author: Joi.string().default("unknown"),
        quantity: Joi.number().integer(),
      })
      .unknown(),
  }),
  getById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      book_id: Joi.string().required(),
    }),
  }),
  updateById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      book_id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object()
      .keys({
        title: Joi.string().min(3).required(),
        image_path: Joi.string(),
        description: Joi.string().required(),
        author: Joi.string().default("unknown"),
        quantity: Joi.number().integer(),
        sale: Joi.number().integer().default(0),
      })
      .unknown(),
  }),
  deleteById: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      book_id: Joi.string().required(),
    }),
  }),
};
