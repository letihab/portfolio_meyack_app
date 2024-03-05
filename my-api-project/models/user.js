const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Définir le schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  isOnline: {type: Boolean, default: false},
  profileImage: {type: Buffer, select: false},
});

// Méthode pour hasher le mot de passe avant de sauvegarder l'utilisateur
userSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

// Créer et exporter le modèle User
const User = mongoose.model('User', userSchema);
module.exports = User;
