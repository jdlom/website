"use strict";(self.webpackChunkodksinp_website=self.webpackChunkodksinp_website||[]).push([[5015],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={},l="Installation et configuration d\u2019ODK Collect",s={unversionedId:"divers/install_config_odk_collect",id:"divers/install_config_odk_collect",title:"Installation et configuration d\u2019ODK Collect",description:"Installation",source:"@site/docs/divers/install_config_odk_collect.md",sourceDirName:"divers",slug:"/divers/install_config_odk_collect",permalink:"/website/docs/divers/install_config_odk_collect",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"G\xe9n\xe9rer des fonds de carte pour utilisation hors-ligne dans ODK",permalink:"/website/docs/divers/fonds_de_carte_hors_ligne"},next:{title:"Mod\xe8le de fiche",permalink:"/website/docs/modele_fiche"}},o={},u=[{value:"Installation",id:"installation",level:2},{value:"Configuration de l\u2019application",id:"configuration-de-lapplication",level:2},{value:"Cliquer sur \xab\xa0supprimer formulaire enregistr\xe9\xa0\xbb",id:"cliquer-sur-supprimer-formulaire-enregistr\xe9",level:3},{value:"Dans l\u2019onglet \xab\xa0Formulaires vierges\xa0\xbb , S\xe9lectionnez tout et supprimez",id:"dans-longlet-formulaires-vierges--s\xe9lectionnez-tout-et-supprimez",level:3},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Configurer par QRCode",id:"configurer-par-qrcode",level:3},{value:"Identit\xe9 de l\u2019utilisateur",id:"identit\xe9-de-lutilisateur",level:3},{value:"Cartes \u2192 Choisir Mapbox",id:"cartes--choisir-mapbox",level:3},{value:"Autres param\xe8tres utiles",id:"autres-param\xe8tres-utiles",level:3}],d={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation-et-configuration-dodk-collect"},"Installation et configuration d\u2019ODK Collect"),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Depuis le \xab playstore \xbb d\u2019Android ou depuis le fichier .apk mis \xe0 disposition sur le site du projet : ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/getodk/collect/releases/latest"},"Release ODK Collect v2022.2.1 \xb7 getodk/collect \xb7 GitHub 8")),(0,n.kt)("p",null,"Un fois t\xe9l\xe9charg\xe9 sur le t\xe9l\xe9phone (n\u2019importe o\xf9), vous cliquez sur le fichier apk pour lancer l\u2019installation. Android mettra tout au bon endroit. Vous pourrez ensuite supprimer le fichier .apk."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Capture d\u2019\xe9cran du 2021-03-18 16-50-05",src:r(6117).Z,width:"1146",height:"495"})," 8](",(0,n.kt)("a",{parentName:"p",href:"https://github.com/getodk/collect/releases/latest"},"https://github.com/getodk/collect/releases/latest"),")"),(0,n.kt)("h2",{id:"configuration-de-lapplication"},"Configuration de l\u2019application"),(0,n.kt)("p",null,"*","*","Important : ","*","*",(0,n.kt)("br",{parentName:"p"}),"\n","pour \xe9viter des conflits avec les formulaires vierges d\xe9j\xe0 enregistr\xe9s sur le t\xe9l\xe9phone et des soucis d\u2019envoi de donn\xe9es.",(0,n.kt)("br",{parentName:"p"}),"\n","Commencez par supprimer les formulaires vierges existants d\u2019ODK avant de le configurer"),(0,n.kt)("h3",{id:"cliquer-sur-supprimer-formulaire-enregistr\xe9"},"Cliquer sur \xab\xa0supprimer formulaire enregistr\xe9\xa0\xbb"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Screenshot_2021-03-31-19-46-55",src:r(5728).Z,width:"281",height:"500"})),(0,n.kt)("h3",{id:"dans-longlet-formulaires-vierges--s\xe9lectionnez-tout-et-supprimez"},"Dans l\u2019onglet \xab\xa0Formulaires vierges\xa0\xbb , S\xe9lectionnez tout et supprimez"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Screenshot_2021-03-31-19-47-02",src:r(5897).Z,width:"281",height:"500"})),(0,n.kt)("p",null,"Tout d\u2019abord, la connexion au serveur de formulaires (nomm\xe9 Central) se fait par le scan d\u2019un QRcode.",(0,n.kt)("br",{parentName:"p"}),"\n","Vous avez deux possibilit\xe9s (et deux QRCode au choix):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"soit ODK Collect g\xe8re automatiquement",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"le t\xe9l\xe9chargement des nouvelles formulaires disponibles (tous)"),(0,n.kt)("li",{parentName:"ul"},"de leurs nouvelles versions"),(0,n.kt)("li",{parentName:"ul"},"l\u2019envoi des donn\xe9es des formulaires finalis\xe9s au serveur"))),(0,n.kt)("li",{parentName:"ul"},"soit vous faites cela \xe0 la demande",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"t\xe9l\xe9charger les formulaires qui vous int\xe9ressent"),(0,n.kt)("li",{parentName:"ul"},"t\xe9l\xe9charger les nouvelles versions"),(0,n.kt)("li",{parentName:"ul"},"envoi des donn\xe9es au serveur")))),(0,n.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Screenshot_2021-03-11-15-28-03-576x1024",src:r(6532).Z,width:"281",height:"500"})),(0,n.kt)("h3",{id:"configurer-par-qrcode"},"Configurer par QRCode"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Screenshot_2021-03-11-12-16-39-576x1024",src:r(8584).Z,width:"281",height:"500"})),(0,n.kt)("p",null,"Une fois le code scann\xe9, votre application est configur\xe9e et interroge le serveur pour savoir quels formulaires sont disponibles, et les t\xe9l\xe9charge."),(0,n.kt)("h3",{id:"identit\xe9-de-lutilisateur"},"Identit\xe9 de l\u2019utilisateur"),(0,n.kt)("p",null,"Il nous faut maintenant renseigner les donn\xe9es d\u2019identification qui permettront de vous faire conna\xeetre une fois pour toutes dans les diff\xe9rents formulaires et de vous attribuer correctement vos donn\xe9es."),(0,n.kt)("p",null,"\u2192 Veillez \xe0 renseigner l\u2019adresse mail (",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"!!! votre adresse professionnelle en minuscules !!!")),")."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"identite_utilisateur-576x1024",src:r(6826).Z,width:"281",height:"500"}),"\n",(0,n.kt)("img",{alt:"metadonnees_de_formualire-576x1024",src:r(68).Z,width:"281",height:"500"}),"\n",(0,n.kt)("img",{alt:"Screenshot_2021-03-11-12-17-54-576x1024",src:r(4437).Z,width:"281",height:"500"})),(0,n.kt)("h3",{id:"cartes--choisir-mapbox"},"Cartes \u2192 Choisir Mapbox"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Screenshot_2021-03-18-15-42-00",src:r(1562).Z,width:"281",height:"500"})),(0,n.kt)("h3",{id:"autres-param\xe8tres-utiles"},"Autres param\xe8tres utiles"),(0,n.kt)("p",null,"De retour sur l\u2019\xe9cran des param\xe8tres, vous pourrez modifier :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"la taille de la police qui sera utilis\xe9e dans les formulaires"),(0,n.kt)("li",{parentName:"ul"},"la mani\xe8re de naviguer d\u2019un \xe9cran \xe0 l\u2019autre",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"en faisant glisser le doigt sur l\u2019\xe9cran de gauche \xe0 droite pour avancer et de droite \xe0 gauche pour reculer"),(0,n.kt)("li",{parentName:"ul"},"en affichant des boutons en bas de l\u2019\xe9cran"),(0,n.kt)("li",{parentName:"ul"},"en utilisant les deux m\xe9thodes")))),(0,n.kt)("p",null,"Vous \xeates maintenant pr\xeats \xe0 saisir votre premier formulaire.",(0,n.kt)("br",{parentName:"p"}),"\n","ODKCollect est configur\xe9 pour proposer syst\xe9matiquement les derni\xe8res versions des formulaires disponibles sur le serveur."))}c.isMDXComponent=!0},1562:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2567e0a9272a95474efdb3de22e7d28c56d17e94_2_281x500-64a508d0f6f571d040826d12809a30e7.png"},6532:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/25a1726c56451e86add3da7457de93a574756ed4_2_281x500-de20c42d06dd32ed076ed0eddb39ca92.png"},6826:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2c6b6484f465edafa797c37ab51dbf229d89b6ae_2_281x500-78a2f77204283542b5efe64719b0516e.png"},4437:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2d267abdce7d8312dbc6430a5fc2d361d9aca632_2_281x500-750a437e1fde7165b379530122610077.png"},5728:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/44016f45a86768d16ab186245f100e5c1bc4a926_2_281x500-e7b5aa3a8002e0faffbd2d155d0b5353.png"},8584:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/6570e49d139731d8718f67f9aaace6b5d6759fbe_2_281x500-56e4c05ee04e87b57c5907e9f80fd89e.png"},6117:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/83740995f47b0f1b5f5a167a9ab1891588257388-ae03b64b5145d5e93692251e458a61e4.png"},5897:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/8646096ad129d96a0f9aa7eb30c9020c20935775_2_281x500-21a325bb146ce0b7a943594cd26c527a.png"},68:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/d48fad63dbd77895fb21af0fccdb519f096a4892_2_281x500-70a81a7a0fc4cb8b06ad078a2311fdc3.png"}}]);