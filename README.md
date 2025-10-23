Ce projet utilise React Native avec Expo. 

**Fonctionnalités :**
- Splash screen à l'ouverture de l'app puis redirection vers Home
- Menu principal avec les boutons de redirection vers les écrans Chat et Dog ainsi qu'un bouton Quit pour quitter l'app
- Un écran Chat qui montre un PNG de chat qui génère un miaulement quand on appuie dessus
- Un écran Dog avec une image de chien générée à partir d'une API, regénérable avec un bouton, et qui écrit un SMS "Je n'aime pas les chats" au 06.06.06.06.06 au clic,
- Un écran Clicker (menu de navigation) qui comptabilise les clics sur les images du chat et du chien, et permet de réinitialiser les compteurs
- Un écran Map (menu de navigation) qui affiche une carte dézoomée au niveau de la France avec la localisation de l'utilisateur

**Comment lancer le projet :**
Après avoir cloné, le projet, il faut installer les dépendances avec la commande `npm install`

**Lancer l'app avec Expo Go :**
Pour accéder à l'app avec Expo Go, lancer la commande `npx expo start`

**Build l'app sur Android/iOS :**
*Installer MapView pour Expo :*
`npx expo install react-native-maps`

*Clé d'API Google Maps :*
Dans le fichier app.json, à la configuration d'expo, rajouter votre clé d'api google maps :
"android": {
"config": {
"googleMaps": {
"apiKey": "VOTRE_GOOGLE_MAPS_API_KEY",
},
},
}

*Installez EAS CLI :* 
`npm install -g eas-cli`

*Connectez-vous à votre compte Expo :* 
`npx eas login`

*Configurez le projet pour EAS Build :* 
`npx eas build:configure`

*Créez le Development Build :*
Pour Android : `npx eas build --profile development --platform android`
Pour Android : `npx eas build --profile development --platform ios`
EAS va vous donner une URL pour télécharger et installer l'application sur votre téléphone ou simulateur/émulateur.

*Lancez votre application :*
Une fois l'application installée sur votre appareil, lancez le serveur de développement avec la commande : `npx expo start --dev-client`
Scannez le QR code depuis l'application que vous venez d'installer.