import{r as t,c as e,h as o,g as s}from"./p-83ba3037.js";import{T as i,i as r}from"./p-d9d3000e.js";import{f as c,h as a,b as p}from"./p-de9d826d.js";import{T as n}from"./p-0df30512.js";import{C as h}from"./p-c49427b9.js";import{T as l}from"./p-36c7336f.js";var d=function(t,e,o,s){var i,r=arguments.length,c=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};const y=class{constructor(o){t(this,o),this.getHistoryType=e(this,"getHistoryType",7),this.id="",this.chapterToken=""}componentWillLoad(){this.getHistoryType.emit((t,e)=>{if(t)console.log(t);else switch(e){case"browser":case"hash":this.chapterToken="?chapter=";break;case"query":this.chapterToken="&chapter="}})}_copyToClipboardHandler(t){try{let e=window.location.href;-1!==window.location.href.indexOf(this.chapterToken)&&(e=window.location.href.split(this.chapterToken)[0]),navigator.clipboard.writeText(`${e}${this.chapterToken}${t}`);const o=this.element.querySelector(".copy-tooltip");o.innerHTML=i,o.setAttribute("class","copy-tooltip copied"),c(t,a(this.element,"psk-page"))}catch(t){console.error(t)}}_resetTooltip(){const t=this.element.querySelector(".copy-tooltip");t.innerHTML=r,t.setAttribute("class","copy-tooltip")}_isCopySupported(){let t=!!document.queryCommandSupported;return["copy","cut"].forEach(e=>{t=t&&!!document.queryCommandSupported(e)}),t}render(){const t=p(this.id.trim());if(0!==t.length&&this._isCopySupported())return o("div",{class:"tooltip_container",onClick:e=>{e.stopImmediatePropagation(),this._copyToClipboardHandler(t)},onMouseOut:()=>{this._resetTooltip()}},o("a",{class:"mark",href:"#"+t,onClick:t=>{t.preventDefault()}},o("slot",null)),o("span",{class:"copy-tooltip"},r))}get element(){return s(this)}};d([h(),l({eventName:"getHistoryType",controllerInteraction:{required:!0},description:"This event gets the history type in order to see what identificator to use for the selected chapter Token.\n                  The three types of token that can be returned are : browser, hash or query."})],y.prototype,"getHistoryType",void 0),d([n({description:"This property is the id of the textzone that will be copied to the clipboard.\n                  It is necessary (but not mandatory) so the URL can be copied in a simplified fashion.\n                  Special characters(Example : ':','/') will be replaced with dash('-').",isMandatory:!1,propertyType:"string"})],y.prototype,"id",void 0);export{y as psk_copy_clipboard}