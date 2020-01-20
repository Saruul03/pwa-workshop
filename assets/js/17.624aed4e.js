(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{252:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"etape-1-ajout-d-un-web-app-manifest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etape-1-ajout-d-un-web-app-manifest"}},[t._v("#")]),t._v(" Etape 1 : Ajout d'un Web App Manifest")]),t._v(" "),s("p",[t._v("Commençons par créer le fichier manifest. Ce fichier est défini ainsi par "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("blockquote",[s("p",[t._v("The web app manifest provides information about an application (such as name, author, icon, and description) in a JSON text file.")])]),t._v(" "),s("p",[t._v("En français: le manifeste d'application web fournit des informations sur l'application (comme son nom, son icône et sa description) dans un fichier texte JSON.")]),t._v(" "),s("p",[t._v("La présence d'un manifeste procure également d'autres avantages. En voici quelques uns:")]),t._v(" "),s("ul",[s("li",[t._v("Il permet à certains navigateurs d'ajouter au bureau ou à l'écran d'accueil un raccourci vers la PWA")]),t._v(" "),s("li",[t._v("Il permet à la PWA d'être référencée sur certains apps stores tels que le "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Store"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("Il permet d'afficher la PWA en plein écran, sans UI navigateur, avec un écran de lancement initial (splashscreen) lors de l'ouverture de la PWA")])]),t._v(" "),s("h2",{attrs:{id:"proprietes-du-manifeste"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proprietes-du-manifeste"}},[t._v("#")]),t._v(" Propriétés du manifeste")]),t._v(" "),s("p",[t._v("Le manifeste est un fichier JSON contient plusieurs champs. Il est recommandé de renseigner un maximum de champs afin de permettre à la PWA d'être reconnue comme telle par les navigateurs et les stores. "),s("a",{attrs:{href:"https://developer.mozilla.org/fr/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("La liste des attributs du manifeste est disponible dans la documentation de Mozilla"),s("OutboundLink")],1),t._v(". Vous trouverez ci-dessous une partie des attributs:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("name")]),t._v(":  affiché sur le splash-screen")]),t._v(" "),s("li",[s("code",[t._v("short_name")]),t._v(":  affiché en dessous du raccourci sur le bureau ou l'écran d'accueil")]),t._v(" "),s("li",[s("code",[t._v("description")]),t._v(":  une description générale de l'application")]),t._v(" "),s("li",[s("code",[t._v("start_url")]),t._v(": l'URL qui est chargée en premier quand on ouvre l'application depuis son raccourci sur le bureau ou l'écran d'accueil")]),t._v(" "),s("li",[s("code",[t._v("background_color")]),t._v(":   La couleur d'arrière-plan du splash-screen")]),t._v(" "),s("li",[s("code",[t._v("theme_color")]),t._v(":  la couleur de thème général de l'application, utilisée notamment dans les barres de statut si elles sont affichées")]),t._v(" "),s("li",[s("code",[t._v("display")]),t._v(":   spécifie le mode d'affichage. Voici les différents modes disponibles triés par ordre de fallback :\n"),s("ul",[s("li",[s("code",[t._v("fullscreen")]),t._v(": toute la zone d'affichage disponible est utilisée et aucun agent utilisateur n'est montré.")]),t._v(" "),s("li",[s("code",[t._v("standalone")]),t._v(": comportement similaire a une application native. Cela peut signifier que l'application a sa propre fenêtre, sa propre icône dans le lanceur d'applications, etc. Dans ce mode, l'agent utilisateur va exclure les éléments d'interface qui permettent de contrôler la navigation mais peut inclure d'autres éléments comme une barre de statut par exemple.")]),t._v(" "),s("li",[s("code",[t._v("minimal-ui")]),t._v(": l'application va ressembler et se comporter comme une application autonome, mais elle aura quelques élements d'interface permettant de contrôler la navigation. Les éléments varient en fonction du navigateur et du système.")]),t._v(" "),s("li",[s("code",[t._v("browser")]),t._v(" (par défaut): l'application s'ouvre dans un nouvel onglet ou une nouvelle fenêtre du navigateur, en fonction du navigateur et de la plateforme")])])]),t._v(" "),s("li",[s("code",[t._v("icons")]),t._v(":  liste d'icônes de l'application de différentes résolutions, utilisées notamment pour le raccourci et le splashscreen. Les tailles à fournir recommandées sont a minima 192x192px et 512x512px. L'appareil choisira la meilleure icône automatiquement selon les cas. Il est également intéressant de fournir en fallback une version vectorielle SVG de l'icône qui s'adaptera à un maximum de tailles.")])]),t._v(" "),s("h2",{attrs:{id:"utilisation-d-un-generateur-de-manifeste"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utilisation-d-un-generateur-de-manifeste"}},[t._v("#")]),t._v(" Utilisation d'un générateur de manifeste")]),t._v(" "),s("p",[t._v("Comme le manifeste d'application est un fichier texte, on peut opter pour l'écrire à la main ou alors utiliser un outil qui simplifie sa création. Plusieurs outils sont disponibles sur internet:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://app-manifest.firebaseapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://app-manifest.firebaseapp.com/"),s("OutboundLink")],1),t._v(": Recommandé car il permet de générer les icones à partir d'un PNG de 512x512 ("),s("em",[t._v("attention à bien passer un png")]),t._v(")")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tomitm.github.io/appmanifest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web App Manifest Generator"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("En utilisant un de ces outils, générez un fichier manifeste exhaustif. Votre manifeste devra au moins contenir les propriétés suivantes: "),s("code",[t._v("name")]),t._v(", "),s("code",[t._v("short_name")]),t._v(", "),s("code",[t._v("lang")]),t._v(", "),s("code",[t._v("start_url")]),t._v(", "),s("code",[t._v('display: "standalone"')]),t._v(", "),s("code",[t._v("theme_color")]),t._v(" et "),s("code",[t._v("icons")]),t._v(" avec au moins deux icônes PNG de tailles 192x192 et 512x512 et une au format vectoriel SVG.")]),t._v(" "),s("p",[t._v("Voici quelques outils en ligne qui permettent de créer une icône:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://editor.method.ac/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Method Draw"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vectorpaint.yaks.co.nz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG Editor: Vector Paint"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.google.com/drawings/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Googel drawings"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Pour vous faire gagner du temps, des icônes au format demandé sont déjà disponibles dans le dossier "),s("code",[t._v("icons")])])]),t._v(" "),s("p",[t._v("On peut ensuite enregistrer le manifeste dans un fichier texte appelé "),s("code",[t._v("manifest.webmanifest")]),t._v(" (ou "),s("code",[t._v("manifest.json")]),t._v(") à la racine du site.")]),t._v(" "),s("Solution",[s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Progressive Web Apps Workshop"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"short_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PWA Workshop"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lang"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"display"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standalone"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"theme_color"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pink"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icons"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icons/logo-192.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192x192"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icons/logo-512.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"512x512"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icons/logo.svg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"513x513"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("Si vous souhaitez générer le manifeste d'une site déjà déployé, vous pouvez utiliser "),s("a",{attrs:{href:"https://www.pwabuilder.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pwabuilder"),s("OutboundLink")],1),t._v(" en lui fournissant l'URL de vote site.")]),t._v(" "),s("h2",{attrs:{id:"ajout-du-manifeste-dans-l-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajout-du-manifeste-dans-l-application"}},[t._v("#")]),t._v(" Ajout du manifeste dans l'application")]),t._v(" "),s("p",[t._v("La dernière étape consiste à référencer le manifeste dans la page HTML de notre application, grâce à cette balise "),s("code",[t._v("link")]),t._v(" à mettre dans le "),s("code",[t._v("head")]),t._v(" : "),s("code",[t._v('<link rel="manifest" href="manifest.json">')]),t._v(".")]),t._v(" "),s("p",[t._v("Notez que d'autres métadonnées sont également exploitées par certains navigateurs et peuvent s'avérer utiles. Il est probable qu'à l'avenir, ces métadonnées tendent à disparaître au profit de nouvelles propriétés dans le manifeste d'application. En voici un exemple :")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manifest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manifest.webmanifest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mobile-web-app-capable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-mobile-web-app-capable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("application-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("PWA Workshop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-mobile-web-app-title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("PWA Workshop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msapplication-starturl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/index.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1, shrink-to-fit=no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"test-de-bon-fonctionnement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-de-bon-fonctionnement"}},[t._v("#")]),t._v(" Test de bon fonctionnement")]),t._v(" "),s("p",[t._v("Vous pouvez vérifier la prise en compte du manifeste en regardant dans l'onglet "),s("em",[t._v("Applications")]),t._v(" des Developer Tools de Chrome. La liste des propriétés du manifeste devrait être affichée.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(76),alt:"Manifest dev tools"}})]),t._v(" "),s("h2",{attrs:{id:"bibliotheque-de-compatibilite-pwa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bibliotheque-de-compatibilite-pwa"}},[t._v("#")]),t._v(" Bibliothèque de compatibilité PWA")]),t._v(" "),s("p",[t._v("Certains navigateurs anciens ne supportent pas encore certaines fonctionnalités du manifeste d'application. Par exemple, Safari 12 mobile ne prend pas en charge l'écran d’accueil (ou splash-screen). La bibliothèque "),s("a",{attrs:{href:"https://github.com/GoogleChromeLabs/pwacompat",target:"_blank",rel:"noopener noreferrer"}},[t._v("pwacompat"),s("OutboundLink")],1),t._v(" de Google Chrome Labs permet de résoudre en partie ce problème. Nous vous recommandons vivement d’ajouter ce script à vos PWA pour une meilleure compatibilité.")])],1)}),[],!1,null,null,null);e.default=n.exports},76:function(t,e,a){t.exports=a.p+"assets/img/manifest_dev_tools.a1a93822.png"}}]);