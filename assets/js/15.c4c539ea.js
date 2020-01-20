(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{244:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"step-1-adding-a-web-app-manifest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-adding-a-web-app-manifest"}},[t._v("#")]),t._v(" Step 1: Adding a Web App Manifest")]),t._v(" "),s("p",[t._v("Let's start by creating the manifest file. This file is defined by "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1),t._v(" as follows:")]),t._v(" "),s("blockquote",[s("p",[t._v("The web app manifest provides information about an application (such as name, author, icon, and description) in a JSON text file.")])]),t._v(" "),s("p",[t._v("The presence of a manifest also provides other benefits. Here are a few:")]),t._v(" "),s("ul",[s("li",[t._v("Supported browsers can install the PWA and add a shortcut on the home screen")]),t._v(" "),s("li",[t._v("The PWA can be referenced on some app stores such as the "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Store"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("The PWA can be displayed in full screen or in a standalone window, without the browser UI.")])]),t._v(" "),s("h2",{attrs:{id:"manifest-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manifest-fields"}},[t._v("#")]),t._v(" Manifest fields")]),t._v(" "),s("p",[t._v("The manifest is a JSON file that contains several properties. It is recommended to fill in most of them to optimize the discovery and the experience of the PWA. Here are "),s("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("all the fields currently specified"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("name")]),t._v(" - displayed on the splash-screen below the app icon")]),t._v(" "),s("li",[s("code",[t._v("short_name")]),t._v(" - displayed below the shortcut on the desktop or on the home screen")]),t._v(" "),s("li",[s("code",[t._v("description")]),t._v(" - a general description of the application")]),t._v(" "),s("li",[s("code",[t._v("start_url")]),t._v(" - the URL that is loaded first when you open the application from its shortcut")]),t._v(" "),s("li",[s("code",[t._v("scope")]),t._v(" - the pages of the site that are part of the PWA experience. The "),s("code",[t._v('"."')]),t._v(" value includes everything in the manifest directory and subdirectories. It is therefore more relevant to place the latter at the root of the site")]),t._v(" "),s("li",[s("code",[t._v("background_color")]),t._v(" - the background color of the splash-screen")]),t._v(" "),s("li",[s("code",[t._v("theme_color")]),t._v(" - the general theme color of the application, used in the status bars for example if they are displayed")]),t._v(" "),s("li",[s("code",[t._v("display")]),t._v(" - specifies the display mode. Here are the different modes available sorted by order of fallback:\n"),s("ul",[s("li",[s("code",[t._v("fullscreen")]),t._v(": all of the available display area is used and no browser UI is shown.")]),t._v(" "),s("li",[s("code",[t._v("standalone")]),t._v(": look and feel like a standalone application. This means that the application will have its own window, its own icon in the launcher, and so on. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.")]),t._v(" "),s("li",[s("code",[t._v("minimal-ui")]),t._v(": the application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. These elements will vary by browser and system.")]),t._v(" "),s("li",[s("code",[t._v("browser")]),t._v(" (default): the application opens in a conventional browser tab or new window, depending on the browser and platform.")])])]),t._v(" "),s("li",[s("code",[t._v("orientation")]),t._v(" - defines the default orientation for mobile devices: "),s("code",[t._v("any")]),t._v(", "),s("code",[t._v("natural")]),t._v(","),s("code",[t._v("landscape")]),t._v(", "),s("code",[t._v("portrait")]),t._v("...")]),t._v(" "),s("li",[s("code",[t._v("dir")]),t._v(" - specifies the primary text direction for the name and description fields: "),s("code",[t._v("ltr")]),t._v(", "),s("code",[t._v("rtl")]),t._v(" or"),s("code",[t._v("auto")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("lang")]),t._v(" - the main language of the application.")]),t._v(" "),s("li",[s("code",[t._v("related_applications")]),t._v(" - an array of native applications that are installable by the underlying platform and are intended to be alternatives to the PWA that provides similar/equivalent functionality. Ignore if there is no native application.")]),t._v(" "),s("li",[s("code",[t._v("icons")]),t._v(" - list of application icons of different resolutions, used for shortcut and splashscreen. The recommended sizes to be supplied are at least 192x192px and 512x512px. The device will automatically pick the best icon depending on the case. It is also interesting to provide a SVG vector version of the icon that will fit a maximum of sizes.")])]),t._v(" "),s("h2",{attrs:{id:"using-a-manifest-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-manifest-generator"}},[t._v("#")]),t._v(" Using a manifest generator")]),t._v(" "),s("p",[t._v("Since the application manifest is a text file, you can choose to write it by hand or use a tool that simplifies its creation. Several tools are available online:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://app-manifest.firebaseapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://app-manifest.firebaseapp.com/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tomitm.github.io/appmanifest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web App Manifest Generator"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("Using one of these tools, generate a manifest file for the app. Your manifest should at least contain the following properties: "),s("code",[t._v("name")]),t._v(","),s("code",[t._v("short_name")]),t._v(", "),s("code",[t._v("lang")]),t._v(","),s("code",[t._v("start_url")]),t._v(", "),s("code",[t._v("display: 'standalone'")]),t._v(", "),s("code",[t._v("theme_color")]),t._v(" and "),s("code",[t._v("icons")]),t._v(" with at least two PNG icons sized 192x192px and 512x512px and one SVG version.")]),t._v(" "),s("p",[t._v("Here are some examples of online tools to make these icons:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://editor.method.ac/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Method Draw"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vectorpaint.yaks.co.nz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG Editor: Vector Paint"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.google.com/drawings/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Googel drawings"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("To save time, you can find example icons with the required dimensions in the "),s("code",[t._v("app/icons")]),t._v(" folder.")])]),t._v(" "),s("p",[t._v("The manifest can then be saved in a text file called "),s("code",[t._v("manifest.json")]),t._v(" in the app root folder.")]),t._v(" "),s("Solution",[s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Progressive Web Apps Workshop"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"short_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PWA Workshop"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lang"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"display"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standalone"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"theme_color"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pink"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icons"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icons/logo-192.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192x192"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icons/logo-512.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"512x512"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icons/logo.svg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sizes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"513x513"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"adding-the-manifest-in-the-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-manifest-in-the-application"}},[t._v("#")]),t._v(" Adding the manifest in the application")]),t._v(" "),s("p",[t._v("The last step is to reference the manifest in the HTML page of our application, using a "),s("code",[t._v("link")]),t._v(" tag in the "),s("code",[t._v("<head>")]),t._v(" section : "),s("code",[t._v('<link rel="manifest" href="manifest.json">')]),t._v(".")]),t._v(" "),s("p",[t._v("Note that other metadata are also used by some browsers and may be useful. It is likely that in the future, these metadata will tend to disappear in favor of new fields in the web app manifest. Here is an example:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manifest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manifest.json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mobile-web-app-capable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-mobile-web-app-capable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("application-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("PWA Workshop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-mobile-web-app-title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("PWA Workshop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msapplication-starturl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/index.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1, shrink-to-fit=no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("p",[t._v("You can check that the manifest is retrieved correctly by looking in the "),s("em",[t._v("Applications")]),t._v(" tab of Chrome Developer Tools. The list of manifest properties should be displayed.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(76),alt:"Manifest dev tools"}})]),t._v(" "),s("h2",{attrs:{id:"pwa-compatibility-library"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwa-compatibility-library"}},[t._v("#")]),t._v(" PWA compatibility library")]),t._v(" "),s("p",[t._v("Some browsers do not support yet some PWA features. For example, there is not splash-screen support in mobile Safari 12. The library\n"),s("a",{attrs:{href:"https://github.com/GoogleChromeLabs/pwacompat",target:"_blank",rel:"noopener noreferrer"}},[t._v("pwacompat"),s("OutboundLink")],1),t._v(" by Google Chrome Labs fixes some of these issues. We strongly recommend to add this script for your PWAs for better compatibility.")])],1)}),[],!1,null,null,null);a.default=n.exports},76:function(t,a,e){t.exports=e.p+"assets/img/manifest_dev_tools.a1a93822.png"}}]);