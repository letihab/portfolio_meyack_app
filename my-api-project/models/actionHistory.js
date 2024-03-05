const mongoose = require('mongoose');

const actionHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  actionType: {
    type: String,
    required: true
  },
  // Autres champs nécessaires pour l'historique des actions
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ActionHistory', actionHistorySchema);
