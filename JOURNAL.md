# Journal de réalisation et de reprise — Saturnain

## 2026-09-10 — Demande et état initial

Demande : « lis le fichier SITE1.md et rends un premier site web ». Lecture complète de `SITE1.md`. Répertoire initial : uniquement le brief et les répertoires de configuration/Git ; `SITE1.md` non suivi par Git. Aucune consigne AGENTS.md trouvée dans les emplacements consultés. Recherche mémoire sur `site_saturnain` et `SITE1` sans résultat. Aucun sous-agent utilisé, aucun commit, push ou déploiement effectué.

Le brief demande un portfolio orienté rendez-vous, statique, mobile d’abord, compatible largement, deux thèmes verts, présentation personnelle, bénéfices par public, soins/déroulement, coordonnées/tarifs/agenda, avis Google, bons cadeaux avec paiement PayPal. Il demande de consigner toutes les actions et décisions pour permettre une reprise par un autre LLM. Ce fichier constitue ce journal ; le poursuivre à chaque évolution.

## Choix autonomes de cette première version

1. Générateur statique minimal en Node.js standard, sans dépendance : HTML réel dans sept fichiers. Ce choix répond à « Hugo ou autre système du genre » sans installation de framework. Aucun routage JavaScript ; liens, historique et pages restent utilisables sans JavaScript. Sources dans `build.js`, sortie dans `public/` ignorée par Git. Node sert uniquement à générer/prévisualiser, pas nécessaire chez l’hébergeur.
2. Navigation : accès desktop à approche/soins/cadeau avec CTA rendez-vous ; cinq accès persistants en bas sur mobile. Page courante signalée visuellement et via `aria-current`. Les pages secondaires « besoins » et « informations » disposent d’un fil d’Ariane. Sections séparées, accueil synthétique avec cartes de besoins et accès cadeau. Les avis sont regroupés avec réservation pour éviter une page vide et renforcer cette étape quand de vrais avis seront disponibles.
3. Identité : mot-symbole typographique « saturnain », crème clair `#f7f5ee`, sapin `#254e3b`, sauge pâle `#dfe5d5`, vert secondaire `#586457`. Thème sombre gris vert `#202722`, texte clair `#f0f0e5`, accent vert doux `#b8d2ae`. Le vert pâle sert aux surfaces ; les textes utilisent les teintes foncées en clair. Police système sans serif Avenir Next/Avenir/Segoe UI/Arial, aucune police n’ayant été jointe au brief. Hiérarchie typographique compacte et espaces généreux. Aucune couleur rose ou violette.
4. Visuel SVG original de cabine (table, linge, niche, plante, lumière). C’est une illustration d’ambiance, pas une photographie du vrai lieu. Pas de banque d’images, de requête distante ni de génération bitmap nécessaire. Crédit explicite dans la page Informations. Remplacer par des photos authentiques lors de la personnalisation.
5. Accroche proposée : « Moins de tensions. Plus de place pour vous. » Texte centré sur écoute, confort et sensations, sans résultat médical promis. Cadre non médical et non érotique explicite dans les pages approche/informations. Contenu éditorial provisoire : aucune formation, adresse, note Google ou ancienneté inventée.
6. Trois formats de démonstration 30/60/90 minutes avec noms proposés. Durées et catalogue à confirmer, prix expressément non renseignés. Publics proposés : quotidien intense, travail/activité, temps pour soi. À affiner selon la clientèle réelle, sans inventer de spécialisation médicale.
7. Bon cadeau : noms expéditeur/destinataire et choix du soin, aperçu local actualisé avec `textContent` pour éviter toute injection HTML. Limite de 80 caractères ; aucune transmission ni conservation de ces noms. Pas de soumission ni de paiement fictif. Tarif à fournir ; durée de validité ensuite fixée à six mois par l’utilisateur (voir entrée ci-dessous).
8. Agenda : page dédiée prête à accueillir une intégration, mais aucun iframe/API/identifiant inventé. Planity prioritaire et Treatwell prévu comme alternative future. Aucun vrai agenda intégré dans cette livraison. Le scénario « choisir sur place puis rediriger » dépend des possibilités officielles du compte réel et reste à valider.
9. Accessibilité : langue française, titres structurés, labels, lien d’évitement, focus visible, navigation HTML, contrôles tactiles, boutons non disponibles désactivés, thème respectant initialement le système puis le choix sauvegardé. Le stockage peut échouer sans casser les autres interactions. Transitions limitées et désactivées si réduction du mouvement demandée.
10. Maquette non indexable avant validation. Informations légales clairement incomplètes, sans fausse identité. Aucun traceur ni ressource distante ; pas de bandeau cookies artificiel. Les futures intégrations nécessiteront de réexaminer les données transmises et les informations correspondantes.

## Recherche documentaire

Recherche web ciblée dans les documentations officielles Planity et PayPal pour ne pas supposer un mécanisme d’intégration :

- https://support.planity.com/hc/fr/sections/28615282779922-Site-web-et-autres — documentation site/réservation. Ne permet pas à elle seule d’affirmer l’existence d’un widget universel ni d’un événement de redirection après choix du créneau. Demander le code officiel/les paramètres fournis au compte concerné avant implémentation.
- https://developer.paypal.com/studio/checkout/standard — options du checkout.
- https://developer.paypal.com/studio/checkout/standard/integrate — intégration officielle. Un vrai flux Checkout nécessite notamment la création et la capture sécurisées des commandes ; aucun secret marchand ne doit être livré au navigateur. Un hébergement statique peut afficher l’interface mais il faut un service sécurisé ou une solution hébergée pour le paiement et la délivrance vérifiée des bons.
- https://securepayments.paypal.com/us/cshelp/article/how-do-i-accept-cards-with-checkout-using-the-guest-checkout-option--help307 — paiement invité par carte. Sa disponibilité doit être vérifiée avec le compte et le parcours réel ; ne pas garantir universellement le paiement sans compte.

## Actions de réalisation

- Inspection de l’arborescence, du statut Git, des instructions locales et du brief ; vérification Node et navigateurs disponibles.
- Création via patches de `package.json`, `.gitignore`, du générateur `build.js`, du serveur local `server.js`, des styles, du comportement navigateur, du favicon et de l’illustration SVG.
- Création des sept contenus : accueil, approche, bénéfices, soins, rendez-vous, cadeau, informations. Ajout du README et de ce journal.
- Aucun fichier préexistant modifié. Aucun compte externe contacté pour réserver/payer et aucune donnée envoyée à un prestataire.

## Reprise : ordre conseillé

1. Valider identité, textes et clientèle cible avec la praticienne ; remplacer l’illustration si photos disponibles.
2. Remplacer les trois formats proposés par les vrais soins, leurs prix et déroulements ; synchroniser le sélecteur de cadeau et l’agenda.
3. Obtenir adresse, téléphone, e-mail, horaires, accessibilité, URL et extraits des avis Google authentiques.
4. Obtenir l’intégration officielle du compte Planity, configurer et vérifier sélection puis redirection ; prévoir l’adaptateur Treatwell à partir de ses paramètres réels. Ne pas simuler des créneaux.
5. Choisir le flux marchand PayPal, tester en sandbox puis en conditions réelles autorisées : prix contrôlé côté service sécurisé, capture confirmée, génération/livraison des bons, erreurs et annulation, paiement invité quand disponible. Aucun paiement depuis cette maquette.
6. Compléter les informations de publication et conditions de vente, tester sur appareils réels, puis enlever noindex et publier sur l’hébergement choisi.

## Vérifications

### Renommage avant publication publique

- Autorisation utilisateur de rendre le dépôt public, avec remplacement préalable du nom par « saturnain » partout.
- Remplacement dans les contenus, le brief, la documentation, les métadonnées HTML, le nom de paquet, la clé du thème et le message du serveur. Initiale du favicon remplacée par « s ».
- Le dépôt distant est renommé `site_saturnain_1`. Le dossier local garde son emplacement pour préserver l’environnement de travail.
- Le seul commit contenant le site est amendé, puis poussé avec `--force-with-lease` pour remplacer l’ancienne version de la branche avant de rendre le dépôt public. Le commit initial reste conservé. Les descriptions historiques de ce journal utilisent elles aussi le nouveau nom.
- GitHub Pages doit ensuite être activé avec GitHub Actions, puis son déploiement et son URL vérifiés.

### Publication GitHub demandée

- Demande utilisateur : effectuer le push, publier sur GitHub Pages et donner le lien.
- Dépôt vérifié : `panlelapin/site_saturnain_1`, branche `main`, visibilité privée. L’authentification signalée invalide dans le sandbox fonctionne après accès réseau/keyring autorisé ; aucun changement de compte nécessaire.
- Tentative d’activation Pages par API : refus HTTP 422, « Your current plan does not support GitHub Pages for this repository. » Pas de changement automatique de visibilité : rendre le dépôt public exposerait aussi le brief, les sources et ce journal.
- Ajout du workflow `.github/workflows/pages.yml` : contrôle syntaxique, génération Node 22, upload de `public/`, déploiement Pages avec permissions limitées. Déclenchement sur push main et manuel. Les chemins relatifs des pages et ressources permettent l’hébergement sous `/site_saturnain_1/`.
- Le site reste une maquette `noindex,nofollow`, conformément aux contenus encore incomplets. La publication publique du site a été demandée, mais le changement de visibilité du dépôt reste à autoriser si l’offre GitHub n’est pas modifiée.

### Évolution — validité du bon cadeau

- Demande utilisateur : ajouter une date limite et la calculer en ajoutant six mois.
- Ajout de la mention « Bon cadeau valable 6 mois à compter de la date d’achat » et de la date limite incluse sur l’aperçu.
- L’aperçu utilise la date locale du navigateur à l’ouverture de la page. Ajout de six mois calendaires, avec plafonnement au dernier jour du mois cible (31 août → 28 ou 29 février). Affichage en français dans un élément `time` avec attribut `datetime` ISO.
- Lors de l’activation du paiement, la date devra être figée à partir de la date d’achat confirmée pour chaque bon émis ; l’aperçu actuel ne représente toujours pas un achat.
- Sans JavaScript, la durée de six mois reste lisible sans afficher une date potentiellement périmée.
- Vérification de cette évolution : syntaxe et génération réussies ; exécution du script avec dates contrôlées et DOM simulé, quatre cas réussis (10/09/2026 → 10/03/2027, 31/08/2026 → 28/02/2027, 31/08/2023 → 29/02/2024, 31/12/2026 → 30/06/2027).

### Vérifications de la première version

- `npm run check` : syntaxe des trois fichiers JavaScript validée.
- `npm run build` : sept pages générées avec succès.
- Vérification par script des 132 références de liens/ressources internes : tous les fichiers ciblés existent (ce contrôle ne valide pas les fragments).
- Calcul des contrastes de sept paires principales : de 4,83:1 à 13,31:1, au-dessus de 4,5:1 pour ces associations. Ce calcul ne constitue pas un audit complet d’accessibilité.
- Chrome headless : captures d’accueil en 1440 × 1300 et 390 × 844, inspectées visuellement. Après inspection mobile, suppression du CTA redondant en en-tête sous 420 px pour laisser respirer le logo ; les accès réservation dans le contenu et la barre du bas restent présents.
- Exécution isolée de `assets/site.js` avec DOM simulé : bascule clair/sombre, stockage de la préférence et mise à jour des noms/soin dans l’aperçu validés. Ce test n’est pas un test d’interaction sur appareil réel.
- Le sandbox initial interdisait les sockets du serveur et de Chrome (`EPERM`). Relance autorisée hors sandbox pour ces vérifications locales. Serveur de prévisualisation démarré sur http://localhost:4173 ; réponse HTTP 200 vérifiée.
- `git diff --check` exécuté ; fichiers nouveaux non suivis, aucune modification de `SITE1.md`.
- Non vérifiés : Safari/iOS, Firefox ESR, appareils physiques, transactions PayPal, agenda Planity/Treatwell. Aucun paiement ni réservation opérationnels à ce stade. Pas de promesse de compatibilité universelle fondée sur ces seuls contrôles.
