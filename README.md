# AJAX | Récupération de données (GET)

✅ https://sximenez.github.io/AJAX/

## Comment fonctionne un navigateur ?

Avant de comprendre ce qu'est AJAX, comprenons comment fonctionne un navigateur web.

Commençons par définir le terme __navigation__.

Naviguer, c'est toute action qu'on effectue sur un navigateur ou sur une page web : 

- solliciter un site en tapant l'url dans la barre d'en haut,
- cliquer sur un lien,
- envoyer un formulaire, 
- etc.

Lorsqu'on fait ces actions, on s'attend à une réponse de la part du navigateur. Pour nous répondre, le navigateur doit aller chercher cette réponse quelque part. 

Puisque la réponse, nous ne l'avons pas en local (sur notre pc), le navigateur doit solliciter un serveur (qui héberge la réponse à distance).

Prenons l'exemple du site dont on tape l'url.

On appuie sur 'entrer' et le navigateur commence par ce qu'on appelle une recherche ```DNS```.

### Recherche DNS (DNS lookup)

La première étape, c'est de savoir où se situe la réponse, son adresse.

Le navigateur effectue donc une requête à un serveur spécial qui lui répond "adresse" ou "pas d'adresse".

Dans le premier cas, le serveur fournit une ```adresse IP```.

Si c'est la première fois qu'on demande au navigateur d'aller sur ce site, c'est ce processus DNS qui a lieu.

Si c'est la enième fois, notre navigateur garde en mémoire l'adresse pour s'y référer ultérieurement (notion de ```cache```).

Et si on cherche sur Google ? Google nous propose une liste de réponses avec leurs adresses IP.

Ok, et maintenant ?

### TCP Handshake

Le navigateur connaît désormais l'adresse du serveur qui héberge la réponse.

Pour établir une connexion, le navigateur sollicite le serveur à l'aide d'un ```protocole```, une convention pour communiquer.

C'est le TCP ou __Transmission Control Protocol__.

Il garantit que les infos qu'ils s'échangent arrivent correctement.

En gros, le navigateur dit "SYN __(synchronize)__", le serveur répond "SYN-ACK", puis le navigateur finit par "ACK __(acknowledge)__".

Et là, c'est bon, connexion établie en HTTP.

### TLS Negotiation

Pour avoir une connexion sécurisée (HTTPS), il y a une étape supplémentaire.

Le navigateur demande au serveur d'envoyer un certificat confirmant son identité.

Le TLS est crucial car il encrypte la communication et réduit les chances de vol d'informations.

Une fois tout ça terminé, le navigateur peut enfin demander la réponse !

### Réponse

Ok, maintenant le navigateur effectue une ```requête HTTP``` auprès du serveur, une action souhaitée.

Le serveur répond le plus souvent avec une ressource HTML.

Il y a plusieurs types de requêtes HTTP :

- ```GET``` : récupérer des données de la ressource
- ```HEAD``` : pareil que GET mais uniquement l'en-tête de la ressource
- ```POST``` : envoyer des données qui altèrent l'état de la ressource côté serveur
- ```PUT``` : remplacer des éléments de la ressource
- ```DELETE``` : effacer un élément de la ressource
- ```CONNECT```
- ```OPTIONS```
- ```TRACE```
- ```PATCH```

Dans notre cas, le navigateur fait une requête HTTP ```GET```.

Le temps que prend au navigateur de passer par toutes ces étapes (DNS, TCP, TLS, HTTP GET) et de recevoir le premier octet d'information s'appelle le ```Time to first byte``` (TTFB).

Il se mesure en millisecondes !

```TTFB = responseStart - navigationStart```



## Sources
**Comment fonctionne un navigateur**
https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work

**Requêtes HTTP**
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods




## C'est quoi AJAX ?

Lorsqu'on sollicite une page web sur un navigateur, on n'a pas en local (sur notre pc) les fichiers qu'il faut pour afficher la page (le HTML, le CSS, le JS, les images/vidéos, etc.).

Le navigateur se met en communication avec un serveur situé ailleurs : c'est lui qui a les fichiers.

Via un ```protocole```, des règles pour communiquer, le navigateur demande au serveur l'accès aux fichiers, puis les interprète et nous affiche en retour la page sur notre écran.

Alors, au début du web, lorsqu'on sollicitait une page, le navigateur communiquait avec le serveur et nous affichait la page, très bien.

Cependant, à la moindre action de notre part (demande/envoi des données), le serveur envoyait une nouvelle page. Le navigateur rechargait du coup cette nouvelle page, 


c'est au niveau des interactions que ça coinçait. Pour afficher un contenu nouveau sur la page après un clic, le navigateur était limité : il ne pouvait que recharger une nouvelle page avec les nouveaux éléments inclus.

Cela rendait le web statique et l'expérience utilisateur pas top, notamment si la connexion n'était pas bonne (latence). On était donc face à un problème.

Les développeurs se sont donc servis de Javascript pour trouver une solution à ce problème, c'est donc là qu'emerge ```AJAX```.

Avec un script AJAX, le navigateur est en mesure de garder l'affichage de la page pendant que le serveur est sollicité.

Il permet de demander/envoyer des données, les modifier si besoin, puis les injecter directement sur la page en poussant les blocs déjà existants. Pas de rechargement de page donc.

Puisque le processus se passe en arrière-plan et que la page n'est pas rechargée, l'expérience utilisateur est plus fluide et conforme à ce qu'on connaît aujourd'hui.

AJAX est important à connaître car il a permis une optimisation considérable et que beaucoup d'applications web modernes s'en servent (Google, FB, Twitter, etc.). 

> On peut donc résumer :
> AJAX est principalement un outil d'optimisation d'affichage web
> Il permet en gros de solliciter un serveur en arrière-plan afin modifier une page de manière dynamique (sans rechargement)
> Ce sont les sigles de : Asynchronous Javascript and XML

## HTTP vs AJAX

Le ```protocole HTTP``` est un ensemble de règles pour que les ordis puissent communiquer entre eux sur internet.
>>>>>>> Stashed changes
