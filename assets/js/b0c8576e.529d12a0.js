"use strict";(self.webpackChunkodksinp_website=self.webpackChunkodksinp_website||[]).push([[8729],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>v});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var a=r.createContext({}),d=function(e){var t=r.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),v=n,m=p["".concat(a,".").concat(v)]||p[v]||u[v]||s;return i?r.createElement(m,o(o({ref:t},c),{},{components:i})):r.createElement(m,o({ref:t},c))}));function v(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<s;d++)o[d]=i[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},1442:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=i(7462),n=(i(7294),i(3905));const s={id:"SuiviGestionSite",title:"Suivi de la gestion des sites",tags:["gestion","plan de gestion"]},o="Suivi de la gestion des sites",l={unversionedId:"ODK-CEN/A d\xe9crire/SuiviGestionSite",id:"ODK-CEN/A d\xe9crire/SuiviGestionSite",title:"Suivi de la gestion des sites",description:"Description",source:"@site/docs/ODK-CEN/A d\xe9crire/gestion_de_site.md",sourceDirName:"ODK-CEN/A d\xe9crire",slug:"/ODK-CEN/A d\xe9crire/SuiviGestionSite",permalink:"/docs/ODK-CEN/A d\xe9crire/SuiviGestionSite",draft:!1,tags:[{label:"gestion",permalink:"/docs/tags/gestion"},{label:"plan de gestion",permalink:"/docs/tags/plan-de-gestion"}],version:"current",frontMatter:{id:"SuiviGestionSite",title:"Suivi de la gestion des sites",tags:["gestion","plan de gestion"]},sidebar:"tutorialSidebar",previous:{title:'Suivi des "dendromicrohabitats"',permalink:"/docs/ODK-CEN/A d\xe9crire/dendromicrohabitats"},next:{title:"Suivi de la gestion hydraulique des sites naturels",permalink:"/docs/ODK-CEN/A d\xe9crire/gestion_hydro_des_sites"}},a={},d=[{value:"Description",id:"description",level:2},{value:"Auteur(s)",id:"auteurs",level:3},{value:"Objectif",id:"objectif",level:3},{value:"Protocole mis en \u0153uvre",id:"protocole-mis-en-\u0153uvre",level:4},{value:"Pr\xe9sentation d\xe9taill\xe9e",id:"pr\xe9sentation-d\xe9taill\xe9e",level:2},{value:"Logique de collecte",id:"logique-de-collecte",level:3},{value:"Captures d&#39;\xe9crans et/ou vid\xe9o de d\xe9monstration",id:"captures-d\xe9crans-etou-vid\xe9o-de-d\xe9monstration",level:3},{value:"Utiliser ce formulaire",id:"utiliser-ce-formulaire",level:2},{value:"Licence",id:"licence",level:3},{value:"XLSform",id:"xlsform",level:3},{value:"Donn\xe9es externes et m\xe9dias associ\xe9s",id:"donn\xe9es-externes-et-m\xe9dias-associ\xe9s",level:3},{value:"Fonctionnalit\xe9s de XLSForm mises en oeuvre",id:"fonctionnalit\xe9s-de-xlsform-mises-en-oeuvre",level:2},{value:"Discussion en ligne sur le forum d&#39;ODK",id:"discussion-en-ligne-sur-le-forum-dodk",level:3},{value:"Traitement des donn\xe9es",id:"traitement-des-donn\xe9es",level:2},{value:"Scripts SQL",id:"scripts-sql",level:3},{value:"Scripts R",id:"scripts-r",level:3},{value:"Autres",id:"autres",level:3}],c={toc:d};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"suivi-de-la-gestion-des-sites"},"Suivi de la gestion des sites"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"!!! non encore d\xe9crit !!!"),(0,n.kt)("h3",{id:"auteurs"},"Auteur(s)"),(0,n.kt)("p",null,"D\xe9velopp\xe9 par Mathieu Bossaert, CEN Occitanie"),(0,n.kt)("h3",{id:"objectif"},"Objectif"),(0,n.kt)("h4",{id:"protocole-mis-en-\u0153uvre"},"Protocole mis en \u0153uvre"),(0,n.kt)("h2",{id:"pr\xe9sentation-d\xe9taill\xe9e"},"Pr\xe9sentation d\xe9taill\xe9e"),(0,n.kt)("h3",{id:"logique-de-collecte"},"Logique de collecte"),(0,n.kt)("h3",{id:"captures-d\xe9crans-etou-vid\xe9o-de-d\xe9monstration"},"Captures d'\xe9crans et/ou vid\xe9o de d\xe9monstration"),(0,n.kt)("h2",{id:"utiliser-ce-formulaire"},"Utiliser ce formulaire"),(0,n.kt)("h3",{id:"licence"},"Licence"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"(https://creativecommons.org/licenses/by/2.0/fr/)"},(0,n.kt)("img",{alt:"CC-BY",src:i(6587).Z,width:"130",height:"70"}))),(0,n.kt)("h3",{id:"xlsform"},"XLSform"),(0,n.kt)("p",null,"-> lien vers le fichier"),(0,n.kt)("h3",{id:"donn\xe9es-externes-et-m\xe9dias-associ\xe9s"},"Donn\xe9es externes et m\xe9dias associ\xe9s"),(0,n.kt)("p",null,"-> liens vers les ressources"),(0,n.kt)("h2",{id:"fonctionnalit\xe9s-de-xlsform-mises-en-oeuvre"},"Fonctionnalit\xe9s de XLSForm mises en oeuvre"),(0,n.kt)("h3",{id:"discussion-en-ligne-sur-le-forum-dodk"},"Discussion en ligne sur le forum d'ODK"),(0,n.kt)("h2",{id:"traitement-des-donn\xe9es"},"Traitement des donn\xe9es"),(0,n.kt)("h3",{id:"scripts-sql"},"Scripts SQL"),(0,n.kt)("h3",{id:"scripts-r"},"Scripts R"),(0,n.kt)("h3",{id:"autres"},"Autres"))}u.isMDXComponent=!0},6587:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/by-3f4bfe3dbe7a86e399757a26247d7167.png"}}]);