# Saturnain — première version

Site statique, sans dépendance, construit à partir de `SITE1.md`.

## Prévisualiser

Avec Node.js 18 ou supérieur :

```sh
npm run build
npm start
```

Ouvrir http://localhost:4173. `PORT=8080 npm start` permet de changer de port.
Pour une ouverture directe sans serveur, ouvrir `public/index.html` après génération.

## Modifier

- `build.js` : contenu des sept pages, navigation, modèle HTML partagé.
- `assets/site.css` : mise en page responsive et couleurs des deux thèmes.
- `assets/site.js` : thème mémorisé localement et aperçu du bon cadeau.
- `assets/atelier.svg` : illustration originale, à remplacer par une vraie photo du cabinet.
- `public/` : résultat généré, ne pas modifier directement ; peut être hébergé sur tout hébergement statique.
- `JOURNAL.md` : demande, décisions, étapes, limites et instructions de reprise.

`npm run check` vérifie la syntaxe JavaScript. Reconstruire après chaque modification. Aucun paquet à installer, aucun CDN, aucune police distante, aucun traceur.

## Avant publication

Le workflow `.github/workflows/pages.yml` génère et publie `public/` à chaque push sur `main`, ou sur déclenchement manuel. Le dépôt `panlelapin/site_saturnain_1` est public et GitHub Pages est activé avec la source « GitHub Actions ».

Adresse publique : https://panlelapin.github.io/site_saturnain_1/

La maquette est volontairement `noindex,nofollow` : supprimer cette balise du modèle seulement une fois les contenus validés. Elle ne constitue pas un contrôle d’accès ; utiliser un hébergement privé pour une prévisualisation confidentielle.

Renseigner identité, portrait, formations, catalogue réel, tarifs, adresse, horaires, accès, contact, avis authentiques, informations éditeur/hébergeur et conditions de vente. Activer puis tester Planity et PayPal avec les paramètres de la praticienne. L’agenda et le paiement sont actuellement indisponibles, sans faux créneaux ni commande simulée.
