const jwt = require('jsonwebtoken');
const config = require('../config/config'); // Assurez-vous que le chemin d'accès est correct

const authenticateUser = (req, res, next) => {
    // Récupérer le token d'authentification depuis l'en-tête Authorization
    const token = req.headers.authorization?.split(' ')[1];

    // Vérifier si le token existe
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Vérifier et décoder le token en utilisant la clé secrète du fichier config.js
        const decoded = jwt.verify(token, config.JWT_SECRET);
        
        // Ajouter les informations de l'utilisateur décodées à l'objet de requête (req)
        req.user = decoded.user;

        // Appeler la fonction middleware suivante dans la chaîne de middleware
        next();
    } catch (error) {
        // En cas d'erreur lors de la vérification du token, renvoyer une réponse d'erreur
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = { authenticateUser }; 
