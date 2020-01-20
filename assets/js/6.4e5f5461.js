(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{256:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"etape-5-installation-de-la-pwa-sur-le-systeme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etape-5-installation-de-la-pwa-sur-le-systeme"}},[t._v("#")]),t._v(" Etape 5 : Installation de la PWA sur le système")]),t._v(" "),e("h2",{attrs:{id:"criteres-pour-etre-installable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#criteres-pour-etre-installable"}},[t._v("#")]),t._v(" Critères pour être installable")]),t._v(" "),e("p",[t._v("Un des avantages des PWA est qu’ils peuvent être installés s’ils respectent certains critères. Ce derniers dépendent du navigateur utilisé. Voici, à titre d'exemple, les critères de "),e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/app-install-banners/#criteria",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("L'application Web n'est pas déjà installée.\n"),e("ul",[e("li",[t._v("et "),e("code",[t._v("prefer_related_applications")]),t._v(" vaut "),e("code",[t._v("false")]),t._v(".")])])]),t._v(" "),e("li",[t._v("Rencontre une heuristique d'engagement de l'utilisateur (actuellement, l'utilisateur a interagi avec le domaine pendant au moins 30 secondes)")]),t._v(" "),e("li",[t._v("Comprend un manifeste d'applications Web comprenant:\n"),e("ul",[e("li",[e("code",[t._v("short_name")]),t._v(" ou "),e("code",[t._v("name")])]),t._v(" "),e("li",[t._v("les icônes doivent inclure des icônes de 192px et 512px")]),t._v(" "),e("li",[e("code",[t._v("start_url")])]),t._v(" "),e("li",[t._v("l'affichage doit être l'un des suivants: "),e("code",[t._v("fullscreen")]),t._v(", "),e("code",[t._v("standalone")]),t._v(" ou "),e("code",[t._v("minimal-ui")])])])]),t._v(" "),e("li",[t._v("Servi sur HTTPS (obligatoire pour les agents de service)")]),t._v(" "),e("li",[t._v("A inscrit un technicien de service avec un gestionnaire d'événements fetch")])]),t._v(" "),e("h2",{attrs:{id:"installation-de-la-pwa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-de-la-pwa"}},[t._v("#")]),t._v(" Installation de la PWA")]),t._v(" "),e("p",[t._v("Selon le navigateur et l'OS, les conditions techniques requises pour pouvoir installer la PWA sur le système varient. Mais en principe, si vous avez un manifeste et un Service Worker actif gérant les requêtes entrantes avec "),e("code",[t._v("fetch")]),t._v(", alors vous devriez pouvoir actuellement installer cette PWA sur toutes les plates-formes supportées, et elles mettront à profit le manifeste et le Service Worker.")]),t._v(" "),e("p",[t._v("La plate-forme ayant la meilleure intégration ce jour est "),e("strong",[t._v("Android")]),t._v(". Si vous disposez d'un smartphone Android pouvant requêter votre serveur suite à un partage de connexion, essayez de charger l'application via Chrome for Android. Une fois la page web ouverte, le menu de Chrome devrait comporter l'option: "),e("strong",[t._v("Add to home screen")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(84),alt:"Add to home screen"}})]),t._v(" "),e("p",[t._v("Poursuivre l'installation. Un nouveau raccourci devrait apparaitre dans l'écran d'accueil du smartphone. C'est le raccourci vers notre PWA !")]),t._v(" "),e("p",[e("img",{attrs:{src:s(85),alt:"PWA bookmark"}}),t._v(" "),e("img",{attrs:{src:s(86),alt:"Splash-screen"}})]),t._v(" "),e("p",[t._v("Une fois la PWA installée, quand on clique sur le raccourci, un splash screen est affiché brièvement. Celui-ci reprend les couleurs et l'icône spécifiée dans le manifeste.")]),t._v(" "),e("p",[t._v("Vous remarquerez que la barre d'adresse et le reste de l'interface du navigateur ne sont plus présentes, si vous avez configuré la propriété "),e("code",[t._v("display")]),t._v(" en "),e("code",[t._v("standalone")]),t._v(" dans le manifeste.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(87),alt:"PWA run from bookmark"}})]),t._v(" "),e("h2",{attrs:{id:"ajout-d-un-invite-d-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajout-d-un-invite-d-installation"}},[t._v("#")]),t._v(" Ajout d'un invité d'installation")]),t._v(" "),e("p",[t._v("À l'origine, le navigateur gérait toutes les étapes liées à l'installation, de la présentation de la bannière à l'ajout de l'icône de l'application à l'écran d'accueil. Cependant, il est maintenant possible de gérer en partie la présentation de l'interface utilisateur menant à l'invité d'installation de la PWA. Dans ce cas, l'application doit vérifier si elle peut demander à être installée en écoutant l'événement "),e("code",[t._v("beforeinstallprompt")]),t._v(", puis demander au navigateur d'afficher l'invité d'installation si l'utilisateur le demande.")]),t._v(" "),e("p",[t._v("Ajoutons notre propre "),e("strong",[t._v("bouton d'installation")]),t._v(" à notre PWA en procédant comme suit:")]),t._v(" "),e("ol",[e("li",[t._v("Définissez la propriété "),e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/app-install-banners/native#prefer_related_applications",target:"_blank",rel:"noopener noreferrer"}},[t._v("prefer_related_applications"),e("OutboundLink")],1),t._v(" sur "),e("code",[t._v("false")]),t._v(" dans le fichier manifeste.")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prefer_related_applications"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Ajouter un bouton masqué par défaut et qui servira à afficher l'invite.")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("install_button"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hidden")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Install"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Dans le JavaScript principal, intercepter l'évènement "),e("code",[t._v("beforeinstallprompt")]),t._v(" qui est déclenché lorsque la PWA satisfait les critères d'installation. Dans le gestionnaire de l'évènement, on gardera une référence vers son paramètre et on affichera le bouton d'installation.")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" deferredPrompt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allows to show the install prompt")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" installButton "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"install_button"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beforeinstallprompt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beforeinstallprompt fired"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent Chrome 76 and earlier from automatically showing a prompt")]),t._v("\n  e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stash the event so it can be triggered later.")]),t._v("\n  deferredPrompt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show the install button")]),t._v("\n  installButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  installButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" installApp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Ajouter la fonction "),e("code",[t._v("installApp()")]),t._v(" qui est lancée suite au clic sur le bouton, et qui affiche l'invite d'installation en utilisant la référence récupérée dans le "),e("code",[t._v("beforeinstallprompt")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("installApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show the prompt")]),t._v("\n  deferredPrompt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("prompt")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  installButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wait for the user to respond to the prompt")]),t._v("\n  deferredPrompt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userChoice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("choiceResult")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("choiceResult"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outcome "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accepted"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PWA setup accepted"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      installButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hidden "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PWA setup rejected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    installButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("disabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    deferredPrompt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Optionnellement, on peut être avertis de la fin de l'installation.")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appinstalled"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appinstalled fired"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" evt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Expérimental")]),t._v(" "),e("p",[t._v("Les événements "),e("code",[t._v("beforeinstallprompt")]),t._v(" et "),e("code",[t._v("appinstalled")]),t._v(" sont encore au stade expérimental et ne sont pas encore standardisés. Au jour du 17 janvier 2020, ils n'étaient encore supportés que sur les navigateurs Chrome, Chrome for Android et Samsung Internet.")])]),t._v(" "),e("p",[t._v("Il est maintenant temps de tester ! N'hésitez pas à forcer un nettoyage du cache.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(88),alt:"PWA install button"}}),t._v(" "),e("img",{attrs:{src:s(89),alt:"PWA install prompt"}})]),t._v(" "),e("p",[t._v("La PWA lancée en mode standalone sur macOS ressemble à cela:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(90),alt:"PWA installed"}})])])}),[],!1,null,null,null);a.default=n.exports},84:function(t,a,s){t.exports=s.p+"assets/img/pwa_install_menu.41073796.jpg"},85:function(t,a,s){t.exports=s.p+"assets/img/pwa_install.cc0b35b6.jpg"},86:function(t,a,s){t.exports=s.p+"assets/img/splash-screen.a247c4ec.jpg"},87:function(t,a,s){t.exports=s.p+"assets/img/pwa-fullscreen.20336af1.jpg"},88:function(t,a,s){t.exports=s.p+"assets/img/pwa_setup_button.1a13ee70.png"},89:function(t,a,s){t.exports=s.p+"assets/img/pwa_setup_prompt.4b3c7ae2.png"},90:function(t,a,s){t.exports=s.p+"assets/img/pwa_installed.7df4c154.png"}}]);