(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[107],{XgmH:function(e,t,r){"use strict";r.r(t),r.d(t,"CONSTANTS",(function(){return v}));var o=r("q1tI"),a=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c,p,_=(c=p={exports:{}},function(){var e={}.hasOwnProperty;function t(){for(var r=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var i=typeof a;if("string"===i||"number"===i)r.push(this&&this[a]||a);else if(Array.isArray(a))r.push(t.apply(this,a));else if("object"===i)for(var s in a)e.call(a,s)&&a[s]&&r.push(this&&this[s]||s)}}return r.join(" ")}c.exports?(t.default=t,c.exports=t):window.classNames=t}(),p.exports),u={"rw-disclaimer-group":"RwDisclaimerGroup_rwDisclaimerGroup__a0509c66","light-theme":"RwDisclaimerGroup_lightTheme__a0509c66","dark-theme":"RwDisclaimerGroup_darkTheme__a0509c66","rw-disclaimer-group__heading":"RwDisclaimerGroup_rwDisclaimerGroup__heading__a0509c66","rw-disclaimer-group__subhead":"RwDisclaimerGroup_rwDisclaimerGroup__subhead__a0509c66"},d=function(e,t){return function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(r.apply(this,a));else if("object"===i)for(var s in a)t.call(a,s)&&a[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}(t={exports:{}}),t.exports}(),m={responsivetext:"Responsivetext_responsivetext__02115ae8","responsive-padding":"Responsivetext_responsivePadding__02115ae8","grey-color":"Responsivetext_greyColor__02115ae8","black-color":"Responsivetext_blackColor__02115ae8","white-color":"Responsivetext_whiteColor__02115ae8","rw-dark-blue-color":"Responsivetext_rwDarkBlueColor__02115ae8","blue-02-color":"Responsivetext_blue02Color__02115ae8","green-01-alt-color":"Responsivetext_green01AltColor__02115ae8","green-03-color":"Responsivetext_green03Color__02115ae8","wr-green-04-color":"Responsivetext_wrGreen04Color__02115ae8","wr-blue-05-color":"Responsivetext_wrBlue05Color__02115ae8","grey-rw-tofu-color":"Responsivetext_greyRwTofuColor__02115ae8","wr-teal-05-color":"Responsivetext_wrTeal05Color__02115ae8","fixed-max-width":"Responsivetext_fixedMaxWidth__02115ae8","responsive-margin":"Responsivetext_responsiveMargin__02115ae8","no-bottom-margin":"Responsivetext_noBottomMargin__02115ae8","ql-font-large":"Responsivetext_qlFontLarge__02115ae8","ql-font-medium01":"Responsivetext_qlFontMedium01__02115ae8","ql-font-small":"Responsivetext_qlFontSmall__02115ae8","ql-font-heading04":"Responsivetext_qlFontHeading04__02115ae8","ql-font-heading05":"Responsivetext_qlFontHeading05__02115ae8","ql-font-heading06":"Responsivetext_qlFontHeading06__02115ae8"};const g=e=>{let t=e.hasPadding,r=e.noBottomMargin,o=e.text,i=e.className,s=e.textClassName,n=e.colorOptions,l=e.fixedMaxWidth,c=e.maxWidth,p=e.textAlignment;const _=d.bind(m);return a.a.createElement("div",{"data-testid":"Responsivetext",className:_("responsivetext",i,n,t?"responsive-padding":"",r?"no-bottom-margin":"",l?"fixed-max-width":"",p&&"null"!==p?"responsive-margin":""),style:{maxWidth:c}},o&&a.a.createElement("div",{className:_("text",s),dangerouslySetInnerHTML:{__html:o}}))},h={displayName:"ResponsiveText",text:"",colorOptions:"grey-color",className:"",textClassName:"",hasPadding:!1,textAlignment:"",noBottomMargin:!1};g.defaultProps=h,g.displayName=h.displayName;const f=e=>{let t=e.heading,r=e.subhead,i=e.superscripted,n=e.colorTheme,c=e.children;const p=_.bind(u);return a.a.createElement("div",{"data-testid":"RwDisclaimerGroup","data-tracking":"rw_disclaimer_group",className:p("rw-disclaimer-group","".concat(n,"-theme"))},a.a.createElement("div",{className:p("rw-disclaimer-group__header")},t&&a.a.createElement("div",{className:p("rw-disclaimer-group__heading")},i&&a.a.createElement("sup",null,i),t),r.text&&a.a.createElement(g,s({colorOptions:"light"===n?"black-color":"white-color"},r,{className:p("rw-disclaimer-group__subhead")}))),a.a.createElement("div",{className:p("rw-disclaimer-group__content")},o.Children.map(c,(e=>Object(o.cloneElement)(e,l(l({},e.props),{},{colorTheme:n}))))))},v={defaults:{heading:"Disclaimer group heading",subhead:{text:'Disclaimer group subhead: <a href="*">View more</a>'},customHeader:{},superscripted:"**",colorTheme:"light"}};f.defaultProps=v.defaults,f.displayName="RwDisclaimerGroup",t.default=f}}]);