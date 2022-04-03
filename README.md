# tp-react

Réutilisation de mon projet local avec react. Je réutilise le code donné par le prof
Réact est une bibliothèque de JavaScript qui utilise le modèle MVC

## Installation

Pour utiliser React. Il est déjà nécessaire de l'installer. 
Pour ce faire, il faut installer un fichier package.json puis 
aller dans le répertoire source avec le cmd et taper la commande :
```npm install```

Cette commande installera un dossier node_modules qui permettra 
de créer des applications js.

## Utilisation

Une fois le package installer, nous devons créer un projet avec
une commande CMD: ````npx creat-react NomDuProjet````

Cette commande permettre l'installation de tous les packages et
de l'application.

Une fois créer, nous pouvons lancer l'application avec
``npm run start``

Cette commande lancera l'application sur le port 3000, il peut
donc y avoir des conflits si nous utilisons d'autres logiciels
comme Postman

## Découverte
Les Hooks : ce sont des fonctions qui sont rattaché à 
une autre fonction

Redécouverte de la fonction .map() utiliser lors d'un 
apprentissage en e-learning pour un thème Wordpress.

Découverte des components. Ils peuvent être utilisés pour afficher
du contenu sur l'application. Pour les utiliser nous devons créer
un fichier js et l'appeler dans notre App.js. Pour l'afficher
nous l'appelons sous le format d'une balise ``<Exemplecomponent />``.
 Ils peuvent être complétés par des props. Cela permet un échange de données
entre l'App et le component. Cette donnée peut être traiter et utiliser
dans le component. Le système d'héritage est d'ailleurs
possible. Nous pouvons créer des components parents et child 

Découverte d'un appel HTTP et de la fonction fetch.

Découverte des routes: les routes permettent de rendre l'interface d'une
application synchrone avec l'URL du navigateur. Nous pouvons
donc ainsi rendre dynamique l'application. /!\ Une application
n'a qu'une seule et unique page. Nous changeons juste le corps
de cette page /!\. Il existe des routes qui permettent de 
protéger certains contenus, ce sont les routes guard.