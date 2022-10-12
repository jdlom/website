"use strict";(self.webpackChunkodksinp_website=self.webpackChunkodksinp_website||[]).push([[508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=s.createContext({}),u=function(e){var t=s.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return s.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(a,".").concat(m)]||p[m]||c[m]||i;return r?s.createElement(f,l(l({ref:t},d),{},{components:r})):s.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=r(7462),n=(r(7294),r(3905));const i={},l="G\xe9n\xe9rer des fonds de carte hpour utilisation hors-ligne dans ODK",o={unversionedId:"divers/fonds_de_carte_hors_ligne",id:"divers/fonds_de_carte_hors_ligne",title:"G\xe9n\xe9rer des fonds de carte hpour utilisation hors-ligne dans ODK",description:"Voici la traduction d'un tutoriel de Florian Mayer sur le forum ODK, qui pr\xe9sente comment g\xe9n\xe9rer vos fond de cartes avec toute l'info que vous voudrez y superposer, pour aller sur le terrain avec ODK ou Oruxmaps (navigation seule)",source:"@site/docs/divers/fonds_de_carte_hors_ligne.md",sourceDirName:"divers",slug:"/divers/fonds_de_carte_hors_ligne",permalink:"/website/docs/divers/fonds_de_carte_hors_ligne",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/divers/fonds_de_carte_hors_ligne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ressources utiles",permalink:"/website/docs/category/ressources-utiles"},next:{title:"mod\xe8le de fiche",permalink:"/website/docs/modele_fiche"}},a={},u=[{value:"Logiciel",id:"logiciel",level:2},{value:"Charger les fonds de cartes et les donn\xe9es de r\xe9f\xe9rence",id:"charger-les-fonds-de-cartes-et-les-donn\xe9es-de-r\xe9f\xe9rence",level:2},{value:"Fond de carte : tuiles OpenStreetMap",id:"fond-de-carte--tuiles-openstreetmap",level:3},{value:"Couche interm\xe9diaire : photos a\xe9riennes",id:"couche-interm\xe9diaire--photos-a\xe9riennes",level:3},{value:"Couches sup\xe9rieures : donn\xe9es vecteurs de r\xe9f\xe9rence",id:"couches-sup\xe9rieures--donn\xe9es-vecteurs-de-r\xe9f\xe9rence",level:3},{value:"G\xe9n\xe9ration des MBTiles",id:"g\xe9n\xe9ration-des-mbtiles",level:2},{value:"Transfert et test",id:"transfert-et-test",level:3},{value:"Autres consid\xe9rations",id:"autres-consid\xe9rations",level:2},{value:"Optimiser l&#39;\xe9tendue de l&#39;imagerie",id:"optimiser-l\xe9tendue-de-limagerie",level:3},{value:"Limites de stockage",id:"limites-de-stockage",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"g\xe9n\xe9rer-des-fonds-de-carte-hpour-utilisation-hors-ligne-dans-odk"},"G\xe9n\xe9rer des fonds de carte hpour utilisation hors-ligne dans ODK"),(0,n.kt)("p",null,"Voici la traduction d'un tutoriel de Florian Mayer sur le forum ODK, qui pr\xe9sente comment g\xe9n\xe9rer vos fond de cartes avec toute l'info que vous voudrez y superposer, pour aller sur le terrain avec ODK ou Oruxmaps (navigation seule)"),(0,n.kt)("p",null,"Article Original :\n",(0,n.kt)("a",{parentName:"p",href:"https://forum.getodk.org/t/generate-offline-background-imagery-for-odk-collect-mbtiles/31200/6"},"https://forum.getodk.org/t/generate-offline-background-imagery-for-odk-collect-mbtiles/31200/6")),(0,n.kt)("p",null,"La documentation sur l'utilisation de fonds de carte hors lohgne dans ODK est ici : ",(0,n.kt)("a",{parentName:"p",href:"https://docs.getodk.org/collect-offline-maps/"},"https://docs.getodk.org/collect-offline-maps/")," ."),(0,n.kt)("p",null,"Cet article est une mise en partique rapide de l'\xe9tape n\xb01 du ","[quickstart]"," (",(0,n.kt)("a",{parentName:"p",href:"https://docs.getodk.org/collect-offline-maps/#offline-maps-quick-start"},"https://docs.getodk.org/collect-offline-maps/#offline-maps-quick-start"),")."),(0,n.kt)("p",null,"Les donn\xe9es de base sont des sources de donn\xe9es raster et vectorielles librement disponibles",(0,n.kt)("em",{parentName:"p"},", ainsi que des donn\xe9es de r\xe9f\xe9rence propres. ("),"Rappel : respectez les droits d'auteur et les conditions d'utilisation des sources de donn\xe9es utilis\xe9es)."),(0,n.kt)("p",null,"Le processus aboutira \xe0 la cr\xe9ation d'un ou plusieurs fichiers MapBox Tiles (.mbtiles) plac\xe9s dans le dossier d\xe9di\xe9 d'ODK Collect ",(0,n.kt)("inlineCode",{parentName:"p"},"/Android/data/org.odk.collect.android/files/layers"),"."),(0,n.kt)("h2",{id:"logiciel"},"Logiciel"),(0,n.kt)("p",null,"Quantum GIS v3.14 ou sup\xe9rieur (\xe0 t\xe9l\xe9charger ",(0,n.kt)("a",{parentName:"p",href:"https://qgis.org/en/site/forusers/download.html"},"ici"),")"),(0,n.kt)("h2",{id:"charger-les-fonds-de-cartes-et-les-donn\xe9es-de-r\xe9f\xe9rence"},"Charger les fonds de cartes et les donn\xe9es de r\xe9f\xe9rence"),(0,n.kt)("p",null,"Au cours de cette \xe9tape, nous allons cr\xe9er dans QGIS, tlle que nous aimerions l'utiliser sur le terrain dans ODK Collect. Nous allons donc :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Charger un fond de carte "de secours" comme OpenStreetMap qui s\'affichera si les couches sup\xe9rieures ne sont pas dispon,ibles au niveau de zoom demand\xe9.'),(0,n.kt)("li",{parentName:"ul"},"Charger des images a\xe9riennes d'une r\xe9solution suffisante (les ortho-images de l'IGN)")),(0,n.kt)("h3",{id:"fond-de-carte--tuiles-openstreetmap"},"Fond de carte : tuiles OpenStreetMap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Calque > Ajouter un calque > Ajouter un calque XYZ"),(0,n.kt)("li",{parentName:"ul"},"Si OpenStreetMap n'est pas disponible : Cr\xe9er une nouvelle source de don\xe9nes XYZ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"avec l'url ",(0,n.kt)("a",{parentName:"li",href:"https://tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"},"https://tile.openstreetmap.org/{z}/{x}/{y}.png 1")),(0,n.kt)("li",{parentName:"ul"},"Nommez l\xe0, par exemple OpenStreetMap")))),(0,n.kt)("h3",{id:"couche-interm\xe9diaire--photos-a\xe9riennes"},"Couche interm\xe9diaire : photos a\xe9riennes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Couche > Ajouter une couche > Ajouter une couche WMS/WMTS"),(0,n.kt)("li",{parentName:"ul"},"Nouveau"),(0,n.kt)("li",{parentName:"ul"},"URL : ",(0,n.kt)("a",{parentName:"li",href:"https://wxs.ign.fr/essentiels/geoportail/wmts?SERVICE=WMTS&REQUEST=GetCapabilities"},"https://wxs.ign.fr/essentiels/geoportail/wmts?SERVICE=WMTS&REQUEST=GetCapabilities")),(0,n.kt)("li",{parentName:"ul"},"Nommez-la comme vous le souhaitez, par exemple IGN ORTHOPHOTOS."),(0,n.kt)("li",{parentName:"ul"},"PLacez la couche au dessu d'OSM"),(0,n.kt)("li",{parentName:"ul"},"L'\xe9chelle visible la plus basse de l'Orthophoto est d'environ 1:850"),(0,n.kt)("li",{parentName:"ul"},"Propri\xe9t\xe9s de la couche > Rendu > Cocher \"Visibilit\xe9 d\xe9pendante de l'\xe9chelle\" > Maximum (inclusif) > 1:850 (\xe9chelle la plus basse visible dans votre zone d'int\xe9r\xeat)"),(0,n.kt)("li",{parentName:"ul"},"La d\xe9finition de l'\xe9chelle de rendu maximale garantit que cette couche sera masqu\xe9e lors d'un zoom plus important, r\xe9v\xe9lant la couche OpenStreetMap situ\xe9e en dessous, au lieu de la recouvrir de tuiles grises \"Aucune imagerie disponible \xe0 ce niveau de zoom\" (ne se pr\xe9sente pas avec l'IGN)")),(0,n.kt)("h3",{id:"couches-sup\xe9rieures--donn\xe9es-vecteurs-de-r\xe9f\xe9rence"},"Couches sup\xe9rieures : donn\xe9es vecteurs de r\xe9f\xe9rence"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez vos propres couches vectorielles avec un style appropri\xe9."),(0,n.kt)("li",{parentName:"ul"},"Pensez \xe0 la transparence des couches, aux \xe9tiquettes avec ombre port\xe9e, aux tampons et \xe0 la visibilit\xe9 en fonction de l'\xe9chelle."),(0,n.kt)("li",{parentName:"ul"},"L'exemple de projet ci-joint contient une couche GeoJSON contenant un exemple de localisation et de style.")),(0,n.kt)("h2",{id:"g\xe9n\xe9ration-des-mbtiles"},"G\xe9n\xe9ration des MBTiles"),(0,n.kt)("p",null,"Dans cette \xe9tape, nous allons g\xe9n\xe9rer le fichier MBTiles \xe0 partir des couches raster et vectorielles affich\xe9es dans QGIS pour les zones que nous souhaitons embarquer dans ODK pour un travail hors connexion."),(0,n.kt)("p",null,"QGIS peut g\xe9n\xe9rer nativement des MBTiles, voir la documentation QGIS sur ",(0,n.kt)("a",{parentName:"p",href:"https://docs.qgis.org/3.16/en/docs/user_manual/processing_algs/qgis/rastertools.html#generate-xyz-tiles-mbtiles"},"Generate XYZ Tiles 3"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Ouvrez la bo\xeete \xe0 outils de "Traitement" > Boite \xe0 Outils > Outils rasters > G\xe9n\xe9rer des tuiles XYZ (MBTiles).'),(0,n.kt)("li",{parentName:"ul"},"Zoomer le canevas sur chaque zone d'int\xe9r\xeat."),(0,n.kt)("li",{parentName:"ul"},"Extent : Vous pouvez soit choisir l'\xe9tendue actuelle de la carte, soit l'\xe9tendue d'une couche, soit dessiner la zone que vous voulez g\xe9n\xe9rer (Dessiner sur le canevas)"),(0,n.kt)("li",{parentName:"ul"},'Zoom min 5, max 20 ou selon votre go\xfbt (18 pour l\'IGN). Chaque niveau de zoom "\xe9lev\xe9" suppl\xe9mentaire augmente la taille du fichier .mbtiles produit de mani\xe8re exponentielle.'),(0,n.kt)("li",{parentName:"ul"},"Format des tuiles : PNG est de meilleure qualit\xe9, mais environ 20 fois plus lourd que le JPG \xe0 75% de qualit\xe9."),(0,n.kt)("li",{parentName:"ul"},"Enregistrez dans un fichier de sortie (.mbtiles)"),(0,n.kt)("li",{parentName:"ul"},"Testez les .mbtiles r\xe9sultants en les ouvrant dans QGIS (glisser-d\xe9poser sur le panneau des couches). Tous les niveaux de zoom fonctionnent-ils ? La r\xe9solution est-elle suffisante ? Faites des essais selon vos go\xfbts. Enregistrez les \"bons\" param\xe8tres sous forme de travail par lot 'petite disquette dans la berre d'outils.")),(0,n.kt)("p",null,'Les MBTiles les fonds de cartes et les donn\xe9es (qui sont fusionn\xe9s dans les tuiles) \xe0 n\'importe quel niveau de zoom, exactement comme elles apparaissent dans QGIS. L\'inclusion de couches de r\xe9f\xe9rence, telles que "mes sites d\'\xe9tude" ou "mes emplacements connus" est utile comme contexte pour la saisie de donn\xe9es.'),(0,n.kt)("h3",{id:"transfert-et-test"},"Transfert et test"),(0,n.kt)("p",null,"Transf\xe9rez les .mbtiles sur vos appareils comme indiqu\xe9 dans la documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"copiez-les dans ",(0,n.kt)("inlineCode",{parentName:"li"},"/Android/data/org.odk.collect.android/files/layers"),". Testez et examinez les niveaux de zoom, la r\xe9solution dedu fonds de carte et l'\xe9tendue.")),(0,n.kt)("h2",{id:"autres-consid\xe9rations"},"Autres consid\xe9rations"),(0,n.kt)("h3",{id:"optimiser-l\xe9tendue-de-limagerie"},"Optimiser l'\xe9tendue de l'imagerie"),(0,n.kt)("p",null,"Il existe des outils permettant de r\xe9duire davantage la taille des .mbtiles. Une approche int\xe9ressante consiste \xe0 exclure les tuiles inutiles ; par exemple, si la zone d'int\xe9r\xeat est longue, \xe9troite et diagonale (on pense aux plages de nidification des tortues), le carr\xe9 .mbtiles contiendra deux triangles remplis d'images dont vous n'aurez jamais besoin."),(0,n.kt)("h3",{id:"limites-de-stockage"},"Limites de stockage"),(0,n.kt)("p",null,"Certains syst\xe8mes d'exploitation limitent la taille des fichiers que vous pouvez facilement transf\xe9rer. Les t\xe9l\xe9phones ont un stockage limit\xe9."))}c.isMDXComponent=!0}}]);