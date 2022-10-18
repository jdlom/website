"use strict";(self.webpackChunkodksinp_website=self.webpackChunkodksinp_website||[]).push([[8119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const l={},a="Kollect STELI (Suivi Temporel des Libellules)",o={unversionedId:"ODK-CEN/invertebres/steli",id:"ODK-CEN/invertebres/steli",title:"Kollect STELI (Suivi Temporel des Libellules)",description:"Auteurs",source:"@site/docs/ODK-CEN/invertebres/steli.md",sourceDirName:"ODK-CEN/invertebres",slug:"/ODK-CEN/invertebres/steli",permalink:"/website/docs/ODK-CEN/invertebres/steli",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Suivi du Damier de la succise et de la Proserpine dans la RNR des Gorges du Gardon",permalink:"/website/docs/ODK-CEN/invertebres/damier_succise_proserpine_RNR"},next:{title:"STERF (Suivi Temporel des Rhopaloc\xe8res de France)",permalink:"/website/docs/ODK-CEN/invertebres/sterf"}},u={},s=[{value:"Auteurs",id:"auteurs",level:3},{value:"Protocole mis en oeuvre",id:"protocole-mis-en-oeuvre",level:3},{value:"Logique du formulaire",id:"logique-du-formulaire",level:3},{value:"D\xe9roul\xe9 d\xe9taill\xe9",id:"d\xe9roul\xe9-d\xe9taill\xe9",level:3},{value:"Ressources",id:"ressources",level:2}],p={toc:s};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kollect-steli-suivi-temporel-des-libellules"},"Kollect STELI (Suivi Temporel des Libellules)"),(0,i.kt)("h3",{id:"auteurs"},"Auteurs"),(0,i.kt)("p",null,"Thomas GACHET (CEN Nouvelle-Aquitaine)"),(0,i.kt)("admonition",{title:"Objectif",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Ce formulaire permet la saisie sur le terrain de toutes les informations n\xe9cessaires \xe0 la bonne application du protocole STELI pour int\xe9gration dans Kollect.")),(0,i.kt)("admonition",{title:"Pr\xe9requis",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Le transect doit \xeatre cr\xe9\xe9 dans Kollect en amont pour que le rattachement soit automatique via la prise du point au d\xe9but et \xe0 la fin du formulaire.\nL'utilisateur doit \xeatre inscrit \xe0 Kollect et avoir re\xe7u son QR Code ODK personnel (pour r\xe9cup\xe9ration automatique de l'identit\xe9 de l'observateur principal).")),(0,i.kt)("h3",{id:"protocole-mis-en-oeuvre"},"Protocole mis en oeuvre"),(0,i.kt)("p",null,"Suivi Temporel des Libellules (",(0,i.kt)("a",{parentName:"p",href:"https://steli.mnhn.fr/"},"STELI"),")"),(0,i.kt)("h3",{id:"logique-du-formulaire"},"Logique du formulaire"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un formulaire est utilis\xe9 pour un seul relev\xe9 STELI sur un transect."),(0,i.kt)("li",{parentName:"ul"},"Il n'y a qu'une seule boucle qui permet d'ajouter plusieurs taxons pour le relev\xe9.")),(0,i.kt)("h3",{id:"d\xe9roul\xe9-d\xe9taill\xe9"},"D\xe9roul\xe9 d\xe9taill\xe9"),(0,i.kt)("p",null,"Ecran 1 : identit\xe9"),(0,i.kt)("p",null,"Identification de l'observateur principal et des \xe9ventuels autres observateur. S\xe9lection de l'organisme rattach\xe9 \xe0 l'observateur principal puis de    l'\xe9tude rattach\xe9e \xe0 l'organisme (listes de rattachement g\xe9r\xe9es depuis Kollect et int\xe9gr\xe9es dans ODK via de csv export\xe9s depuis la base de donn\xe9es)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1_identite",src:r(5314).Z,width:"281",height:"500"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Localisation du d\xe9but de transect pour rattachement automatique au transect dans Kollect (req\xfb\xeate spatiale d'intersection \xe0 l'int\xe9gration)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Photo du d\xe9but du transect"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Saisie des param\xe8tres externes (temp\xe9rature, hygrom\xe9trie, couverture nuageuse, vitesse et direction du vent, pluie)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Heure de d\xe9but du relev\xe9"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Saisie des taxons d'odonates : choix du/des stade(s) avec comportement, sexe et d\xe9nombrement pr\xe9cis. Recherche par nom latin ou fran\xe7ais et possibilit\xe9 de s\xe9lectionner des groupes et/ou complexes d'esp\xe8ces.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Heure de fin de relev\xe9")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Possibilit\xe9 de noter un temps de pause en minutes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Localisation de la fin du transect")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remarques \xe9ventuelles sur le relev\xe9")),(0,i.kt)("h2",{id:"ressources"},"Ressources"))}c.isMDXComponent=!0},5314:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/1_identite_281x500-6804a529410f7155a888404d390030c7.jpg"}}]);