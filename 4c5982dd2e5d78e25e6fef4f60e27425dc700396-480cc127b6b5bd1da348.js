(self.webpackChunk=self.webpackChunk||[]).push([[7],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],o[s[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(u,o({attr:o({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,c=e.title,s=l(e,["attr","title"]);return n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:r,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",l),f}}},9226:function(e,t,r){"use strict";r.d(t,{tZ:function(){return n}});var n=r(5715).tZ},775:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(9226),a=r(1082),i=function(e){var t=e.children;return(0,n.tZ)("header",{className:"site-header",sx:{bg:"navbarColor"}},t)},o=r(7294),l=function(e){return o.createElement("div",{className:"site-logo"},o.createElement(a.Link,{to:"/"},e.title))},c=r(1721),s=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={active:!1,navBarActiveClass:""},r}(0,c.Z)(t,e);var r=t.prototype;return r.toggleHamburger=function(){var e=this;this.setState({active:!this.state.active},(function(){e.state.active?e.setState({navBarActiveClass:"is-active"}):e.setState({navBarActiveClass:""})}))},r.render=function(){var e=this;return(0,n.tZ)("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation"},(0,n.tZ)("div",{className:"container is-fullhd mrb-navbar-container"},(0,n.tZ)("div",{className:"navbar-brand"},(0,n.tZ)("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",role:"menuitem",tabIndex:0,onKeyPress:function(){return e.toggleHamburger()},onClick:function(){return e.toggleHamburger()}},(0,n.tZ)("span",null),(0,n.tZ)("span",null),(0,n.tZ)("span",null))),(0,n.tZ)("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},(0,n.tZ)("div",{className:"navbar-start has-text-centered"},(0,n.tZ)(a.Link,{className:"navbar-item is-size-6",to:"/about"},"O Nas"),(0,n.tZ)(a.Link,{className:"navbar-item is-size-6",to:"/services"},"Usługi"),(0,n.tZ)(a.Link,{className:"navbar-item is-size-6",to:"/blog"},"Aktualności"),(0,n.tZ)(a.Link,{className:"navbar-item is-size-6",to:"/contact"},"Kontakt")))))},t}(o.Component),u=r(7416),f=r(3201),p=JSON.parse('{"R":[{"icon":"facebook","url":"https://www.facebook.com/groups/aoperat/"},{"icon":"vimeo","url":"https://vimeo.com/user161246910"}]}'),m=function(){var e=(0,a.useStaticQuery)("1829665890").site.siteMetadata.siteTitle,t=p.R.map((function(e,t){return(0,n.tZ)("div",null,"facebook"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Facebook",rel:"noopener noreferrer"},(0,n.tZ)(u.e5d,{alt:"Facebook icon"})):"","twitter"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Twitter",rel:"noopener noreferrer"},(0,n.tZ)(u.x2F,{alt:"Twitter icon"})):"","linkedin"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Linkedin",rel:"noopener noreferrer"},(0,n.tZ)(u.tsq,{alt:"Linkedin icon"})):"","youtube"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Youtube",rel:"noopener noreferrer"},(0,n.tZ)(u.oK$,{alt:"Youtube icon"})):"","instagram"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Instagram",rel:"noopener noreferrer"},(0,n.tZ)(u.Nrw,{alt:"Instagram icon"})):"","rss"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to RSS",rel:"noopener noreferrer"},(0,n.tZ)(u.$kE,{alt:"RSS icon"})):"","github"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Github",rel:"noopener noreferrer"},(0,n.tZ)(u.q7V,{alt:"Github icon"})):"","telegram"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Telegram",rel:"noopener noreferrer"},(0,n.tZ)(u.jll,{alt:"Telegram icon"})):"","pinterest"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Pinterest",rel:"noopener noreferrer"},(0,n.tZ)(u.J4B,{alt:"Pinterest icon"})):"","snapchat"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Snapchat",rel:"noopener noreferrer"},(0,n.tZ)(u.G$$,{alt:"Snapchat icon"})):"","skype"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Skype",rel:"noopener noreferrer"},(0,n.tZ)(u.hqH,{alt:"Skype icon"})):"","wordpress"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Wordpress",rel:"noopener noreferrer"},(0,n.tZ)(f.k7O,{alt:"Wordpress icon"})):"","dribbble"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Dribbble",rel:"noopener noreferrer"},(0,n.tZ)(u.w6U,{alt:"Dribbble icon"})):"","medium"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Medium",rel:"noopener noreferrer"},(0,n.tZ)(u.sG0,{alt:"Medium icon"})):"","behance"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to Behance",rel:"noopener noreferrer"},(0,n.tZ)(u.fRc,{alt:"Behance icon"})):"","vk"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to vk",rel:"noopener noreferrer"},(0,n.tZ)(f.J_S,{alt:"vk icon"})):"","vimeo"===e.icon?(0,n.tZ)("a",{href:e.url,target:"_blank","aria-label":"link to vimeo",rel:"noopener noreferrer"},(0,n.tZ)(u.wWN,{alt:"vimeo icon"})):"")}));return(0,n.tZ)("footer",{className:"footer has-text-white-ter is-background-secondary-dark"},(0,n.tZ)("div",{className:"container is-fullhd has-text-white-ter mrb-footer-container"},(0,n.tZ)("div",{className:"columns is-variable is-8"},(0,n.tZ)("div",{className:"column is-4"},(0,n.tZ)(l,{title:e}),(0,n.tZ)("p",{className:"is-max-width-2 pt-3"})),(0,n.tZ)("div",{className:"column is-3"},(0,n.tZ)("h4",{className:"has-text-weight-semibold is-size-5"},"Podstrony"),(0,n.tZ)("section",{className:"menu mrb-menu"},(0,n.tZ)("ul",{className:"menu-list"},(0,n.tZ)("li",null,(0,n.tZ)(a.Link,{to:"/",className:"navbar-item"},"Strona główna")),(0,n.tZ)("li",null,(0,n.tZ)(a.Link,{className:"navbar-item",to:"/about"},"O Nas")),(0,n.tZ)("li",null,(0,n.tZ)(a.Link,{className:"navbar-item",to:"/services"},"Usługi")),(0,n.tZ)("li",null,(0,n.tZ)(a.Link,{className:"navbar-item",to:"/blog"},"Aktualności")),(0,n.tZ)("li",null,(0,n.tZ)(a.Link,{className:"navbar-item",to:"/contact"},"Kontakt"))))),(0,n.tZ)("div",{className:"column is-3"},(0,n.tZ)("h4",{className:"has-text-weight-semibold is-size-5"},"Informacje"),(0,n.tZ)("section",{className:"menu mrb-menu"},(0,n.tZ)("ul",{className:"menu-list"},(0,n.tZ)("li",null,(0,n.tZ)(a.Link,{className:"navbar-item",to:"/terms-and-conditions"},"Regulamin")),(0,n.tZ)("li",null,(0,n.tZ)(a.Link,{className:"navbar-item",to:"/privacy-policy"},"Polityka prywatności"))))),(0,n.tZ)("div",{className:"column is-2"},(0,n.tZ)("h4",{className:"has-text-weight-semibold is-size-5"},"Obserwuj nas"),(0,n.tZ)("div",{className:"mrb-socials"},t)))))},d=function(e){var t=e.children,r=(e.className,e.props,(0,a.useStaticQuery)("4267595483").site.siteMetadata.siteTitle);return(0,n.tZ)("div",null,(0,n.tZ)(i,null,(0,n.tZ)("div",null),(0,n.tZ)("div",{sx:b.nav},(0,n.tZ)(s,null)),(0,n.tZ)("div",{sx:b.appearance})),(0,n.tZ)("div",{className:"container small-margin-container"},(0,n.tZ)(l,{title:r})),(0,n.tZ)("main",null,t),(0,n.tZ)(m,null))},b={appearance:{display:["none","none","none","flex"],alignItems:"center",gap:4},nav:{display:"flex",alignItems:"center",gap:4}}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,a,i,o,l=r(7294),c=r(5697),s=r.n(c),u=r(4839),f=r.n(u),p=r(2993),m=r.n(p),d=r(6494),b=r.n(d),h="bodyAttributes",v="htmlAttributes",y="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",k="href",Z="http-equiv",O="innerHTML",C="itemprop",E="name",S="property",A="rel",N="src",j="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",I="encodeSpecialCharacters",_="onChangeClientState",M="titleTemplate",R=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,g.TITLE),r=Q(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,P);return t||n||void 0},$=function(e){return Q(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||r===A&&"canonical"===e[r].toLowerCase()||c===A&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==O&&l!==w&&l!==C||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=b()({},n[l],a[l]);n[l]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;ce(g.BODY,n),ce(g.HTML,a),le(f,p);var m={baseTag:se(g.BASE,r),linkTags:se(g.LINK,i),metaTags:se(g.META,o),noscriptTags:se(g.NOSCRIPT,l),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,u)},d={},b={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(b[e]=m[e].oldTags)})),t&&t(),c(e,d,b)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(g.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(H):r.getAttribute(H)!==o.join(",")&&r.setAttribute(H,o.join(","))}},se=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+H+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(H,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[x[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,a=fe(r,n),[l.createElement(g.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+" "+H+'="true" '+a+">"+K(i,n)+"</"+e+">":"<"+e+" "+H+'="true">'+K(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case v:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=x[e]||e;if(r===O||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===B.indexOf(e);return t+"<"+e+" "+H+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},me=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(g.BASE,t,n),bodyAttributes:pe(h,r,n),htmlAttributes:pe(v,a,n),link:pe(g.LINK,i,n),meta:pe(g.META,o,n),noscript:pe(g.NOSCRIPT,l,n),script:pe(g.SCRIPT,c,n),style:pe(g.STYLE,s,n),title:pe(g.TITLE,{title:f,titleAttributes:p},n)}},de=f()((function(e){return{baseTag:V([k,j],e),bodyAttributes:G(h,e),defer:Q(e,L),encode:Q(e,I),htmlAttributes:G(v,e),linkTags:J(g.LINK,[A,k],e),metaTags:J(g.META,[E,T,Z,S,C],e),noscriptTags:J(g.NOSCRIPT,[O],e),onChangeClientState:$(e),scriptTags:J(g.SCRIPT,[N,O],e),styleTags:J(g.STYLE,[w],e),title:W(e),titleAttributes:G(y,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),be=(a=de,o=i=function(e){function t(){return D(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case g.TITLE:return U({},a,((t={})[n.type]=o,t.titleAttributes=U({},i),t));case g.BODY:return U({},a,{bodyAttributes:U({},i)});case g.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((r={})[n.type]=U({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(F(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),l.createElement(a,n)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);be.renderStatic=be.rewind;var he=r(9499),ve=r(1082),ye=function(e){var t=e.title,r=e.description,n=e.image,a=e.article,i=(0,he.useLocation)().pathname,o=(0,ve.useStaticQuery)(Te).site.siteMetadata,c=o.defaultTitle,s=o.titleTemplate,u=o.defaultDescription,f=o.siteUrl,p=o.defaultImage,m={title:t||c,description:r||u,image:""+f+(n||p),url:""+f+i};return l.createElement(be,{title:m.title,titleTemplate:s},l.createElement("html",{lang:"en-US"}),l.createElement("link",{rel:"alternate",href:m.url,hreflang:"en-us"}),l.createElement("link",{rel:"alternate",href:m.url,hreflang:"en"}),l.createElement("link",{rel:"alternate",href:m.url,hreflang:"x-default"}),l.createElement("meta",{name:"description",content:m.description}),l.createElement("meta",{name:"image",content:m.image}),l.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}),m.url&&l.createElement("meta",{property:"og:url",content:m.url}),!a?null:l.createElement("meta",{property:"og:type",content:"article"}),m.title&&l.createElement("meta",{property:"og:title",content:m.title}),m.description&&l.createElement("meta",{property:"og:description",content:m.description}),m.image&&l.createElement("meta",{property:"og:image",content:m.image}),m.title&&l.createElement("meta",{name:"twitter:title",content:m.title}),m.description&&l.createElement("meta",{name:"twitter:description",content:m.description}))},ge=ye;ye.defaultProps={title:null,description:null,image:null,article:!1};var Te="1603267538"}}]);
//# sourceMappingURL=4c5982dd2e5d78e25e6fef4f60e27425dc700396-480cc127b6b5bd1da348.js.map