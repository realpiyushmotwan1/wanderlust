const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(), // Title is required and must be a string
    description: Joi.string().required(), // Description is required and must be a string
    location: Joi.string().required(), // Location is required and must be a string
    country: Joi.string().required(), // Country is required and must be a string
    price: Joi.number().required().min(0), // Price is required, must be a number, and must be at least 0
    image: Joi.alternatives().try(        // Allow 'image' to be a string, an object, or empty/null
      Joi.string().allow("", null),
      Joi.object({
        url: Joi.string().uri().required(),   // Object with a URL (must be a valid URI)
        filename: Joi.string().optional()     // Optional filename
      }).allow(null)
    )
  }).required() // The entire listing object is required
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
 