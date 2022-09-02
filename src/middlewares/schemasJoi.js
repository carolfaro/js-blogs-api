const Joi = require('joi');

const UserSchema = Joi.object({
    displayName: Joi.string().min(8).required().messages({
        'number.min': '{{#label}} length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
        'string.email': '{{#label}} must be a valid email',
    }),
    password: Joi.string().alphanum().min(6).messages({
        'number.min': '{{#label}} length must be at least 6 characters long',
    }),
    image: Joi.string().required().messages({
        'any.required': 'Some required fields are missing',
        'string.empty': 'Some required fields are missing',
      }),
});

// const validateUserMiddleware = (req, res, next) => {
//     const { error } = UserSchema.validate(req.body, { abortEarly: false });
//     if (error) {
//     const [messages] = error.details.map((err) => {
//         if (err.type === 'number.min') {
//           return res.status(400).json({ message: err.message });
//         }
//         return res.status(400).json({ message: err.message });
//       });
//       return messages;
//     } 
//         next();
// };

module.exports = { UserSchema };