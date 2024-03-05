const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: {
      type: String,
      required: [true, 'L\'URL de l\'image est obligatoire'],
      validate: {
        validator: function(value) {
          return /https?:\/\/.+\.(jpg|jpeg|png|gif)/i.test(value);
        },
        message: 'L\'URL de l\'image n\'est pas valide.'
      }
    },
    // ...
  });

  module.exports = mongoose.model('Image', imageSchema);

  