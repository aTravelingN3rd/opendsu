import{r as t,h as e,H as i,g as o}from"./p-7cf930c5.js";import{M as s}from"./p-d9d3000e.js";import"./p-64251922.js";import{T as n}from"./p-01e50cc5.js";import{C as r}from"./p-c68ecd54.js";class a{static _prepareRoutesTree(t,e){let i=function(t){let o={};return t.forEach(t=>{let s=t.name.replace(/(\s+|-)/g,"").toLowerCase();if(!o[s]){let i=t.path;switch(e){case"browser":case"query":i=t.path;break;case"hash":i="/#"+t.path}o[s]={path:i}}if("object"==typeof t.children&&Array.isArray(t.children.items))o[s].children={type:"known",items:i(t.children.items)};else if("string"==typeof t.children&&0===t.children.indexOf("@event:")){let e=t.children.substring("@event:".length);o[s].children={type:"event",event:e}}}),o};return i(t)}static _prepareConfiguration(t,e){let i={};i.baseUrl=e;let o=e+"pages/",s=new URL(e).pathname;if(t.modals&&(i.modals={},Object.keys(t.modals).length))for(let e in t.modals)i.modals[e]=o+t.modals[e];if(!t.menu||!t.menu.defaultMenuConfig)throw new Error("Default menu configuration is missing");let n=t.menu.defaultMenuConfig;t.profile&&(i.profile=t.profile);let r=function(t){for(let e=0;e<t.length;e++)t[e].children&&t[e].children.items?r(t[e].children.items):void 0!==t[e].indexed&&"false"===t[e].indexed.toString()&&(t.splice(e,1),e--);return t},l=function(t,e){return e=e?e.replace(/^\/|\/$/g,""):"",t.forEach(t=>{if(!t.path){let e=t.name.toLowerCase().toLowerCase().replace(/\s+/g,"-");e=e.replace(/[:\/]/g,""),t.path=e}let i="/";0===e.length&&(i=""),t.path.startsWith("/")||(t.path=i+t.path);let s=e+t.path;if(s=s.replace(/^\//g,""),t.path=s,t.children)t.type="abstract",t.icon||(t.icon=n.icon);else{for(let e in n)t.hasOwnProperty(e)||(t[e]=n[e]);if("psk-page-loader"===t.component)if(t.componentProps||(t.componentProps={}),Object.assign(t.componentProps,t.options),t.pageSrc)t.componentProps.pageUrl=t.pageSrc.startsWith("http")?t.pageSrc:o+t.pageSrc;else{let s=t.name.replace(/[:.!?]/g,"").replace(/\s/g,"-").toLowerCase();t.componentProps.pageUrl=o+e+i+s+".html"}}if("object"==typeof t.children&&Array.isArray(t.children))t.children={type:"known",items:JSON.parse(JSON.stringify(t.children))},l(t.children.items,s);else if("string"==typeof t.children&&0==t.children.indexOf("@event:")){let e=t.children.substring("@event:".length);t.children={type:"event",event:e}}}),t};i.routes=l(t.menu.pages),i.historyType="browser";let c=t.menu.defaultMenuConfig.historyType;"hash"!==c&&"query"!==c||(i.historyType=c);let p=s;if("query"===c){let e="?";t.menu.defaultMenuConfig.pagePrefix&&(e=t.menu.defaultMenuConfig.pagePrefix),p=s+e}(t=>{let e=function(i){i.forEach(i=>{let o=i.path;0===o.indexOf("/")&&(o=o.substr(1)),i.path=`${t}${o}`,i.children&&i.children.items&&e(i.children.items)})};e(i.routes)})(p);let f=JSON.parse(JSON.stringify(i.routes));return i.menu=r(f),i.tags=function(t){let e=[];return function t(i){i.forEach(i=>{Object.prototype.hasOwnProperty.call(i,"tags")&&i.tags.split(",").map(t=>t.trim()).forEach(t=>{e[t]=i.path}),"object"==typeof i.children&&Array.isArray(i.children.items)&&t(i.children.items)})}(t),e}(f),i.pagesHierarchy=a._prepareRoutesTree(i.routes,c),i}}const l={theme:"default",appVersion:"1.0.0",profile:{username:"Cardinal App",email:"privatesky@axiologic.net",avatar:"https://privatesky.xyz/assets/images/privatesky.png"},menu:{defaultMenuConfig:{icon:"fa-bars",type:"route",component:"psk-page-loader",exact:!1,indexed:!0,historyType:"browser"},pages:[{name:"Home",path:"/home",pageSrc:"index.html"}]}};let c="config.json",p="menu.json";window.globalConfig={};class f{constructor(t){let e;this.configIsLoaded=!1,this.pendingRequests=[],window&&window.location&&window.location.origin&&(e=window.location.origin);let i=document.querySelector("base");if(i){let t=i.getAttribute("href");t&&(e+=t)}e.endsWith("/")||(e+="/"),c=e+c,p=e+p,window.basePath=e,this._getAppConfiguration(c,(t,i)=>{if(t)return console.log(t);this._fetchConfigurationFile(p,(t,o)=>{for(t?console.log(t):i.menu=o,this.configuration=a._prepareConfiguration(i,e),this.configuration.theme=i.theme,this.configuration.appVersion=i.appVersion,this.configIsLoaded=!0;this.pendingRequests.length;){let t=this.pendingRequests.pop();this.respondWithConfiguration(t.configName,t.callback)}})}),t.addEventListener("getThemeConfig",this._provideConfig("theme")),t.addEventListener("getAppVersion",this._provideConfig("appVersion")),t.addEventListener("needRoutes",this._provideConfig("routes")),t.addEventListener("needMenuItems",this._provideConfig("menu")),t.addEventListener("getUserInfo",this._provideConfig("profile")),t.addEventListener("getHistoryType",this._provideConfig("historyType")),t.addEventListener("getModals",this._provideConfig("modals")),t.addEventListener("getTags",this._provideConfig("tags")),t.addEventListener("getConfiguration",this._provideConfig()),t.addEventListener("validateUrl",t=>{t.stopImmediatePropagation();let{sourceUrl:e,callback:i}=t.detail;i&&"function"==typeof i?this._parseSourceUrl(e,i):console.error("Callback was not properly provided!")}),t.addEventListener("getCustomLandingPage",t=>{let e=t.detail;if(window.frameElement&&window.frameElement.hasAttribute("landing-page"))return e(void 0,window.frameElement.getAttribute("landing-page"));e()})}_provideConfig(t){return e=>{e.stopImmediatePropagation();let i=e.detail;if(i&&"function"==typeof i){if(this.configIsLoaded)return this.respondWithConfiguration(t,i);this.pendingRequests.push({configName:t,callback:i})}}}respondWithConfiguration(t,e){if(void 0!==t&&!this.configuration[t])throw new Error(`Config ${t} does not exists`);if(void 0===t)return e(void 0,this.configuration);e(void 0,this.configuration[t])}_parseSourceUrl(t,e){let i=(t=t.replace(/(\s+|-)/g,"").toLowerCase()).split("/"),o=this.configuration.pagesHierarchy;for(let s=0;s<i.length;s++){let n=i[s];const r=Object.keys(o).find((function(t){return-1!==o[t].path.toLowerCase().indexOf(n)}));let a,l,c=void 0!==o[r];if(!o[n]&&!c){e(t+" is not a valid path in the application!");break}if(a=c?o[r].children:o[n].children,"object"!=typeof a||"object"!=typeof a.items||s===i.length)return l=c?o[r].path:o[n].path,e(void 0,l);o=a.items}}_getAppConfiguration(t,e){this._fetchConfigurationFile(t,(t,i)=>{if(t)return console.log(t),e(void 0,l);for(let t in l)i.hasOwnProperty(t)||(i[t]=l[t]);e(void 0,i)})}_fetchConfigurationFile(t,e){fetch(t).then((function(t){return t.json()})).then((function(t){e(void 0,t)})).catch((function(t){e(t)}))}}const h=s,d=class{constructor(e){t(this,e),this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1}__createLoader(){let t="";for(let e=1;e<=12;e++)t+=`<div class="sk-circle${e} sk-circle"></div>`;let e=document.createElement("div");return e.className="app-loader",e.innerHTML=`<div class='sk-fading-circle'>${t}</div>`,e}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<h}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}componentWillLoad(){this.checkLayout(),this.host.parentElement&&(this.htmlLoader=this.__createLoader(),this.host.parentElement.appendChild(this.htmlLoader));let t=this.host.innerHTML;if(t=t.replace(/\s/g,""),t.length&&(this.hasSlot=!0),"string"==typeof this.controller)return new Promise((t,e)=>{r.getController(this.controller).then(e=>{if(this.disconnected)return t();new e(this.host),t()}).catch(e)});new f(this.host)}componentDidLoad(){this.htmlLoader&&this.htmlLoader.parentNode&&this.htmlLoader.parentNode.removeChild(this.htmlLoader)}render(){return e(i,{class:this.mobileLayout?"is-mobile":""},this.hasSlot?e("slot",null):e("psk-default-renderer",{mobileLayout:this.mobileLayout}))}get host(){return o(this)}};!function(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);n>3&&r&&Object.defineProperty(e,i,r)}([n({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no controller is provided, a default controller will be passed to the component","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],d.prototype,"controller",void 0);export{d as psk_app_root}