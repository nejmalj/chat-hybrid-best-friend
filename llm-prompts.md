Lien du chat : https://chatgpt.com/share/68fa2ca3-789c-8003-bed1-7ee8566d0f54

J'ai commencé par exposer le sujet de l'exercice et la liste des fonctionnalités attendues pour donner le contexte, 
et je lui ai demandé de me donner le squelette de l'application afin de créer les fichiers nécessaires.

Le squelette qu'il m'a donné ne correspondait pas à la structure que je lui avais demandé (respecter la structure avec _layout du template Expo par défaut)
*Ma demande :* 
Commence par me donner le squelette de l'application. Je l'ai créée avec la commande npx create-expo-app, j'ai le squelette avec app et (tabs) pour les écrans.
*Squelette initialement donné par ChatGPT :*
/App.js
/screens/
    SplashScreen.js
    MenuScreen.js
    ChatScreen.js
    DogScreen.js
    MapScreen.js
    ClickerScreen.js
/components/
    CounterDisplay.js


J'ai du faire plusieurs aller-retours pour qu'il me donne la bonne structure et le contenu attendu :
*Mon dernier message :* 
actuellement sur Expo Go, quand je lance l'application, j'ai l'écran "Unmatched Route, Page could not be found"
*Architecture adaptée au template Expo :*
app/
├─ _layout.js
├─ Splash.js
├─ Menu.js
├─ Chat.js
├─ Dog.js
├─ Carte.js
├─ Clicker.js

Je lui ai ensuite fait faire les fonctionnalités une à une, y compris un menu de navigation en bas de l'écran pour l'accueil, la carte et le clicker.

J'ai dû le reprendre sur la fonctionnalité de Clicker parce qu'il avait mal compris ce qui était attendu (il a mis des boutons de compteur chat et chien dans l'écran)
*Mon prompt :* 
Commence par me donner le squelette de l'application. Je l'ai créée avec la commande npx create-expo-app, j'ai le squelette avec app et (tabs) pour les écrans.

En revanche, il n'a pas utilisé le composant CounterDisplay qu'il m'avait recommandé de créer en début de conversation.
