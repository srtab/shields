(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(e,t,n){"use strict";n.d(t,"j",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"b",function(){return h}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return v}),n.d(t,"a",function(){return y}),n.d(t,"h",function(){return C}),n.d(t,"g",function(){return k}),n.d(t,"c",function(){return E}),n.d(t,"i",function(){return w});n(26);var a=n(80),r=n.n(a),i=n(203),o=n.n(i),l=(n(204),n(0)),c=n.n(l),s=n(1),u=n.n(s),p=n(151);function m(){var e=o()(["\n  * {\n    box-sizing: border-box;\n  }\n"]);return m=function(){return e},e}var d=Object.freeze({autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"}),f=Object(p.a)(m()),h=p.c.div.withConfig({displayName:"common__BaseFont",componentId:"sc-16zh6vt-0"})(["font-family:Lekton,sans-serif;color:#534;"]),g=p.c.h2.withConfig({displayName:"common__H2",componentId:"sc-16zh6vt-1"})(["font-style:italic;margin-top:12mm;font-variant:small-caps;::before{content:'☙ ';}::after{content:' ❧';}"]),v=p.c.h3.withConfig({displayName:"common__H3",componentId:"sc-16zh6vt-2"})(["font-style:italic;"]),b=p.c.span.withConfig({displayName:"common__BadgeWrapper",componentId:"sc-16zh6vt-3"})(["padding:2px;height:",";vertical-align:middle;display:",";",";"],function(e){return e.height},function(e){return e.display},function(e){return e.clickable&&Object(p.b)(["cursor:pointer;"])}),y=function(e){var t=e.src,n=e.alt,a=void 0===n?"":n,i=e.display,o=void 0===i?"inline":i,l=e.height,s=void 0===l?"20px":l,u=e.clickable,p=void 0!==u&&u,m=r()(e,["src","alt","display","height","clickable"]);return c.a.createElement(b,{height:s,clickable:p,display:o},t?c.a.createElement("img",Object.assign({src:t,alt:a},m)):" ")};y.propTypes={src:u.a.string.isRequired,alt:u.a.string,display:u.a.oneOf(["inline","block","inline-block"]),height:u.a.string,clickable:u.a.bool};var C=p.c.input.withConfig({displayName:"common__StyledInput",componentId:"sc-16zh6vt-4"})(["height:15px;border:solid #b9a;border-width:0 0 1px 0;padding:0;text-align:center;color:#534;:focus{outline:0;}"]),k=Object(p.c)(C).withConfig({displayName:"common__InlineInput",componentId:"sc-16zh6vt-5"})(["width:70px;margin-left:5px;margin-right:5px;"]),E=Object(p.c)(C).withConfig({displayName:"common__BlockInput",componentId:"sc-16zh6vt-6"})(["width:40%;background-color:transparent;"]),w=p.c.hr.withConfig({displayName:"common__VerticalSpace",componentId:"sc-16zh6vt-7"})(["border:0;display:block;height:3mm;"])},153:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});var a=n(80),r=n.n(a),i=(n(26),n(160)),o=n(175);function l(e,t,n,a,r){var l=Object(o.staticBadgeUrl)({label:t,message:n,color:a});return Object(i.a)(l,e,r)}function c(e,t,n,a,o,l){var c=void 0===l?{}:l,s=c.prefix,u=c.suffix,p=c.color,m=c.queryParams,d=void 0===m?{}:m,f=r()(c,["prefix","suffix","color","queryParams"]);return Object.assign(d,{label:n,url:a,query:o}),p&&(d.color=p),s&&(d.prefix=s),u&&(d.suffix=u),function(e,t,n){var a=void 0===n?{}:n,r=a.longCache,o=a.style,l=a.queryParams,c=a.format,s=void 0===c?"svg":c,u=Object.assign({},l);return r&&(u.maxAge="2592000"),o&&(u.style=o),Object(i.a)(e+"."+s,t,u)}("/badge/dynamic/"+t,e,Object.assign({queryParams:d},f))}},160:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(78),n(26);var a=n(216);function r(e,t,n){var r=t?Object(a.resolve)(t,e):e,i=Object(a.parse)(r,!0);return i.query=Object.assign({},i.query,n),delete i.search,Object(a.format)(i)}},161:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return p});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(224),c=n.n(l),s=n(151),u=s.c.span.withConfig({displayName:"snippet__CodeContainer",componentId:"sc-1wzkqq5-0"})(["position:relative;vertical-align:middle;display:inline-block;",";"],function(e){return e.truncate&&Object(s.b)(["max-width:40%;overflow:hidden;text-overflow:ellipsis;"])}),p=s.c.code.withConfig({displayName:"snippet__StyledCode",componentId:"sc-1wzkqq5-1"})(["line-height:1.2em;padding:0.1em 0.3em;border-radius:4px;"," font-family:Lekton;font-size:",";white-space:nowrap;"],function(e){return!1!==e.withBackground&&Object(s.b)(["background:#eef;"])},function(e){return e.fontSize}),m=function(e){var t=e.snippet,n=e.truncate,a=void 0!==n&&n,i=e.fontSize;return r.a.createElement(u,{truncate:a},r.a.createElement(c.a,null,r.a.createElement(p,{fontSize:i},t)))};m.propTypes={snippet:o.a.string.isRequired,truncate:o.a.bool,fontSize:o.a.string}},167:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="https://img.shields.io"},168:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(195),o=n(202),l=n.n(o);t.a=function(){return r.a.createElement(i.Helmet,null,r.a.createElement("title",null,"Shields.io: Quality metadata badges for open source projects"),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),r.a.createElement("meta",{name:"description",content:"We serve fast and scalable informational images as badges\nfor GitHub, Travis CI, Jenkins, WordPress and many more services. Use them to\ntrack the state of your projects, or for promotional purposes."}),r.a.createElement("link",{rel:"icon",type:"image/png",href:l.a}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato|Lekton",rel:"stylesheet"}))}},171:function(e,t,n){"use strict";var a=n(36),r=n(0),i=n.n(r),o=n(151),l=n(152),c=function(e){return i.a.createElement("svg",e,i.a.createElement("rect",{rx:"8",x:"140",width:"55",height:"58"}),i.a.createElement("g",{stroke:"#000",strokeWidth:"8"},i.a.createElement("path",{d:"M135.5 54a8 8 0 0 0 8.5 -8.5"}),i.a.createElement("rect",{x:"4",y:"4",rx:"8",width:"190",height:"50",fill:"none"})),i.a.createElement("path",{d:"m23.906 33.641c.953-.083 1.906-.167 2.859-.25.108 2.099 1.511 4.139 3.578 4.722 2.438.895 5.357.799 7.559-.658 1.49-1.129 1.861-3.674.324-4.925-1.557-1.322-3.685-1.504-5.576-2.057-2.343-.565-4.912-1.133-6.611-2.979-1.805-2.088-1.627-5.485.292-7.443 2.041-2.113 5.222-2.55 8.02-2.274 2.46.244 5.058 1.343 6.252 3.635.426.908 1.095 2.241.656 3.108-.888.173-1.81.148-2.715.245-.077-2.084-1.727-4.073-3.863-4.234-1.902-.317-4.02-.252-5.691.802-1.398.989-1.849 3.363-.381 4.494 1.281 1.01 2.962 1.199 4.482 1.642 2.66.627 5.602 1.118 7.596 3.158 2 2.188 1.893 5.84-.088 8.01-2.01 2.32-5.304 2.972-8.237 2.713-2.585-.147-5.319-1.024-6.916-3.184-.987-1.288-1.517-2.905-1.542-4.523"}),i.a.createElement("path",{d:"m45.953 41c0-7.635 0-15.271 0-22.906.938 0 1.875 0 2.813 0 0 2.74 0 5.479 0 8.219 1.391-1.721 3.69-2.523 5.86-2.236 1.975.154 4.03 1.371 4.513 3.402.504 1.973.278 4.02.33 6.04 0 2.495 0 4.989 0 7.484-.938 0-1.875 0-2.813 0-.009-3.675.018-7.351-.014-11.03-.026-1.342-.627-2.835-2-3.282-2.187-.802-5.077.393-5.609 2.773-.417 1.764-.216 3.586-.264 5.381 0 2.051 0 4.102 0 6.153-.938 0-1.875 0-2.813 0"}),i.a.createElement("path",{d:"m63.781 21.328v-3.234h2.813v3.234zm0 19.672v-16.594h2.813v16.594z"}),i.a.createElement("path",{d:"m82.25 35.656c.969.12 1.938.24 2.906.359-.702 3.464-4.348 5.767-7.781 5.386-3.235-.066-6.43-2.328-7.06-5.598-.843-3.307-.404-7.285 2.101-9.784 3.082-3 8.699-2.618 11.235.892 1.374 1.85 1.676 4.267 1.578 6.51-4.125 0-8.25 0-12.375 0-.142 2.889 2.267 6 5.346 5.658 1.881-.162 3.613-1.566 4.045-3.423m-9.234-4.547c3.089 0 6.177 0 9.266 0 .129-2.774-2.616-5.422-5.419-4.713-2.174.427-3.912 2.474-3.846 4.713"}),i.a.createElement("path",{d:"m88.64 41v-22.906h2.813v22.906z"}),i.a.createElement("path",{d:"m106.59 41c0-.698 0-1.396 0-2.094-1.412 2.442-4.776 3.067-7.233 1.949-2.378-1.02-3.971-3.403-4.345-5.924-.507-2.761-.123-5.768 1.389-8.167 1.863-2.705 5.968-3.642 8.711-1.741.422.228 1.028 1.144 1.294 1.018-.006-2.649-.0001-5.298-.003-7.948.932 0 1.865 0 2.797 0 0 7.635 0 15.271 0 22.906-.87 0-1.74 0-2.61 0m-8.89-8.281c-.075 2.246.637 4.861 2.79 5.952 2 1.023 4.682-.047 5.488-2.134.897-1.996.746-4.278.388-6.382-.425-1.95-2.046-3.804-4.158-3.805-1.903-.065-3.633 1.363-4.099 3.181-.327 1.028-.394 2.116-.408 3.188"}),i.a.createElement("path",{d:"m112.52 36.05c.927-.146 1.854-.292 2.781-.438.126 1.69 1.513 3.244 3.239 3.365 1.398.212 3.01.12 4.12-.851.807-.749 1.1-2.243.159-3.01-.908-.723-2.115-.812-3.182-1.172-1.797-.485-3.713-.848-5.243-1.97-1.83-1.551-1.868-4.679-.099-6.293 1.577-1.507 3.918-1.784 6-1.594 1.685.176 3.54.749 4.535 2.217.464.715.708 1.549.844 2.384-.917.125-1.833.25-2.75.375-.121-1.569-1.653-2.762-3.19-2.695-1.246-.082-2.702.012-3.608.982-.624.724-.543 1.971.314 2.481.998.706 2.269.757 3.389 1.173 1.754.512 3.647.848 5.141 1.965 1.686 1.476 1.728 4.244.396 5.966-1.298 1.788-3.597 2.417-5.709 2.448-1.466-.007-2.984-.214-4.299-.893-1.599-.909-2.585-2.655-2.84-4.444"}),i.a.createElement("g",{fill:"#fff"},i.a.createElement("path",{d:"m151.11 41v-22.906h3.03v22.906z"}),i.a.createElement("path",{d:"m158.55 29.844c-.277-4.765 2.335-9.977 7.05-11.551 4.902-1.757 11.226.197 13.477 5.098 2.266 4.706 1.89 10.92-1.767 14.833-4.554 4.948-13.81 3.976-17.08-1.954-1.111-1.946-1.679-4.188-1.68-6.426m3.125.047c-.377 4.273 2.892 8.844 7.375 8.951 3.791.221 7.557-2.653 7.997-6.497.794-3.731.139-8.292-3.107-10.696-3.788-2.814-10.05-1.104-11.591 3.444-.54 1.539-.642 3.181-.675 4.798"})))};c.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"198",height:"58"};var s=o.c.p.withConfig({displayName:"header__Highlights",componentId:"sc-1l0ubx-0"})(["font-style:italic;"]);t.a=function(){return i.a.createElement("section",null,i.a.createElement(a.Link,{to:"/"},i.a.createElement(c,null)),i.a.createElement(l.i,null),i.a.createElement(s,null,"Pixel-perfect   Retina-ready   Fast   Consistent   Hackable   No tracking"))}},175:function(e,t,n){"use strict";n(38),n(26);var a=n(176),r=n(177);function i(e){var t=e.baseUrl,n=void 0===t?"":t,r=e.path,i=e.queryParams,o=e.style,l=e.format,c=void 0===l?"svg":l,s=e.longCache,u=void 0!==s&&s,p=c.length?"."+c:"",m=a.stringify(Object.assign({maxAge:u?"2592000":void 0,style:o},i));return""+n+r+p+(m?"?"+m:"")}function o(e){return encodeURIComponent(e.replace(/-/g,"--").replace(/_/g,"__"))}e.exports={badgeUrlFromPath:i,badgeUrlFromPattern:function(e){var t=e.baseUrl,n=void 0===t?"":t,a=e.pattern,o=e.namedParams,l=e.queryParams,c=e.style,s=e.format,u=void 0===s?"svg":s,p=e.longCache,m=void 0!==p&&p;return i({baseUrl:n,path:r.compile(a,{strict:!0,sensitive:!0})(o),queryParams:l,style:c,format:u,longCache:m})},encodeField:o,staticBadgeUrl:function(e){var t=e.baseUrl,n=void 0===t?"":t,r=e.label,i=e.message,l=e.color,c=void 0===l?"lightgray":l,s=e.style,u=e.namedLogo,p=e.format,m=void 0===p?"svg":p,d=[r,i,c].map(o).join("-"),f=a.stringify({style:s,logo:u});return n+"/badge/"+d+"."+m+(f?"?"+f:"")}}},182:function(e){e.exports={b:["bitcoin","dependabot","discord","gitlab","npm","paypal","serverfault","stackexchange","superuser","telegram","travis"],a:["plastic","flat","flat-square","for-the-badge","popout","popout-square","social"]}},186:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(151),c=n(160),s=n(152),u=l.c.a.withConfig({displayName:"footer__SpacedA",componentId:"sc-10wqpng-0"})(["margin-left:10px;margin-right:10px;"]),p=function(e){var t=e.baseUrl;return r.a.createElement("section",null,r.a.createElement(s.e,{id:"like-this"},"Like This?"),r.a.createElement("p",null,r.a.createElement("object",{data:Object(c.a)("/twitter/follow/shields_io.svg?style=social&label=Follow",t),alt:"Follow @shields_io"})," ",r.a.createElement("object",{data:Object(c.a)("/opencollective/backers/shields.svg?style=social&link=https://opencollective.com/shields",t),alt:"Donate to us!"})," ",r.a.createElement("object",{data:Object(c.a)("/opencollective/sponsors/shields.svg?style=social&link=https://opencollective.com/shields",t),alt:"Donate to us!"})," ",r.a.createElement("object",{data:Object(c.a)("/github/forks/badges/shields.svg?style=social&label=Fork",t),alt:"Fork on GitHub"})," ",r.a.createElement("object",{data:Object(c.a)("/discord/308323056592486420.svg?style=social&label=Chat&link=https://discord.gg/HjJCwm5",t),alt:"chat on Discord"})),r.a.createElement("p",null,"What is your favorite badge service to use?",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/badges/shields/blob/master/CONTRIBUTING.md"},"Tell us")," ","and we might bring it to you!"),r.a.createElement("p",null,r.a.createElement(u,{href:"https://status.shields.io/"},"Status"),r.a.createElement(u,{href:"https://github.com/badges/shields/"},"GitHub")))};t.a=p,p.propTypes={baseUrl:o.a.string.isRequired}},187:function(e,t,n){"use strict";var a=n(158),r=n.n(a),i=(n(157),n(155),n(159)),o=n.n(i),l=n(162),c=n.n(l),s=n(7),u=n.n(s),p=n(0),m=n.n(p),d=n(1),f=n.n(d),h=n(232),g=n.n(h),v=n(153);n(156),n(77),n(56),n(180),n(88),n(89),n(38);function b(e,t,n){return void 0===n&&(n=""),e}function y(e,t,n){var a="<img"+(n?' alt="'+n+'"':"")+' src="'+e+'">';return t?'<a href="'+t+'">'+a+"</a>":a}function C(e,t,n){var a="!["+(n||"")+"]("+e+")";return t?"["+a+"]("+t+")":a}function k(e,t,n){var a=".. image:: "+e;return n&&(a+="   :alt: "+n),t&&(a+="   :target: "+t),a}function E(e){return null==e?"None":'"'+e.replace(/"/g,'\\"')+'"'}function w(e,t,n){return"image:"+e+function(e,t){(e.some(function(e){return e&&e.includes(",")})||Object.keys(t).length>0)&&(e=e.map(function(e){return E(e)}),t=function(e,t){var n={};for(var a in e)n[a]=t(e[a]);return n}(t,function(e){return E(e)}));var n=e.concat(Object.entries(t).map(function(e){return e[0]+"="+e[1]}));return n.length?"["+n.join(",")+"]":"[]"}(n?[n]:[],t?{link:t}:{})}function x(e){var t=e.badgeUrl,n=e.link,a=e.title;return(0,{markdown:C,rst:k,asciidoc:w,link:b,html:y}[e.markupFormat])(t,n,a)}var P=n(152),O=(n(26),n(164),n(151)),_=n(177),j=n.n(_),q=n(181),S=n.n(q),I=n(234),A=O.c.div.withConfig({displayName:"builder-common__BuilderOuterContainer",componentId:"sc-1qmnput-0"})(["margin-top:10px;margin-bottom:10px;"]),N=O.c.div.withConfig({displayName:"builder-common__BuilderInnerContainer",componentId:"sc-1qmnput-1"})(["display:inline-block;padding:1px 14px 10px;border-radius:4px;background:#eef;"]),B=function(e){var t=e.children;return m.a.createElement(A,null,m.a.createElement(N,null,t))};B.propTypes={children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node])};var z="\n  font-family: system-ui;\n  font-size: 11px;\n",R=O.c.label.withConfig({displayName:"builder-common__BuilderLabel",componentId:"sc-1qmnput-2"})([""," text-transform:lowercase;"],z),M=O.c.span.withConfig({displayName:"builder-common__BuilderCaption",componentId:"sc-1qmnput-3"})([""," color:#999;"],z),L=O.c.span.withConfig({displayName:"path-builder__PathBuilderColumn",componentId:"sc-55c99y-0"})(["height:78px;float:left;display:flex;flex-direction:column;margin:0;",";"],function(e){return e.withHorizPadding&&Object(O.b)(["padding:0 8px;"])}),Q=O.c.div.withConfig({displayName:"path-builder__PathLiteral",componentId:"sc-55c99y-1"})(["margin-top:39px;",";"],function(e){return e.isFirstToken&&Object(O.b)(["margin-left:3px;"])}),T=O.c.span.withConfig({displayName:"path-builder__NamedParamLabelContainer",componentId:"sc-55c99y-2"})(["display:flex;flex-direction:column;height:37px;width:100%;justify-content:center;"]),U="\n  width: 100%;\n  text-align: center;\n",D=Object(O.c)(P.h).withConfig({displayName:"path-builder__NamedParamInput",componentId:"sc-55c99y-3"})([""," margin-top:2px;margin-bottom:10px;"],U),F=O.c.select.withConfig({displayName:"path-builder__NamedParamSelect",componentId:"sc-55c99y-4"})([""," margin-bottom:9px;font-size:10px;"],U),H=Object(O.c)(M).withConfig({displayName:"path-builder__NamedParamCaption",componentId:"sc-55c99y-5"})(["width:100%;text-align:center;"]),G=function(e){function t(t){var n;(n=e.call(this,t)||this).handleTokenChange=function(e){var t,a=e.target,r=a.name,i=a.value,o=n.state,l=o.tokens,c=o.namedParams,s=Object.assign({},c,((t={})[r]=i,t));n.setState({namedParams:s}),n.notePathChanged({tokens:l,namedParams:s})};var a=t.pattern,r=j.a.parse(a),i={};return r.filter(function(e){return"string"!=typeof e}).forEach(function(e){var t=e.name;i[t]=""}),n.state={tokens:r,namedParams:i},n}u()(t,e),t.constructPath=function(e){var t=e.tokens,n=e.namedParams,a=!0;return{path:t.map(function(e){if("string"==typeof e)return e;var t=e.delimiter,r=e.name,i=e.optional,o=n[r];return o?""+t+o:i?"":(a=!1,t+":"+r)}).join(""),isComplete:a}};var n=t.prototype;return n.notePathChanged=function(e){var t=e.tokens,n=e.namedParams,a=this.props.onChange;if(a){var r=this.constructor.constructPath({tokens:t,namedParams:n});a({path:r.path,isComplete:r.isComplete})}},n.componentDidMount=function(){var e=this.state,t=e.tokens,n=e.namedParams;this.notePathChanged({tokens:t,namedParams:n})},n.renderLiteral=function(e,t){return m.a.createElement(L,{key:t+"-"+e},m.a.createElement(Q,{isFirstToken:0===t},e))},n.renderNamedParamInput=function(e){var t=e.name,n=e.pattern,a=Object(I.patternToOptions)(n),r=this.state.namedParams[t];return a?m.a.createElement(F,{name:t,value:r,onChange:this.handleTokenChange},m.a.createElement("option",{key:"empty",value:""}," "),a.map(function(e){return m.a.createElement("option",{key:e,value:e},e)})):m.a.createElement(D,Object.assign({type:"text",name:t,value:r,onChange:this.handleTokenChange},P.j))},n.renderNamedParam=function(e,t,n){var a=e.delimiter,r=e.name,i=e.optional,o=this.props.exampleParams[r]||"(not set)";return m.a.createElement(m.a.Fragment,{key:e.name},this.renderLiteral(a,t),m.a.createElement(L,{withHorizPadding:!0},m.a.createElement(T,null,m.a.createElement(R,{htmlFor:r},S()(r)),i?m.a.createElement(R,null,"(optional)"):null),this.renderNamedParamInput(e),m.a.createElement(H,null,0===n?"e.g. "+o:o)))},n.render=function(){var e=this,t=this.state.tokens,n=0;return m.a.createElement(B,null,t.map(function(t,a){return"string"==typeof t?e.renderLiteral(t,a):e.renderNamedParam(t,a,n++)}))},t}(m.a.Component);G.propTypes={pattern:f.a.string.isRequired,exampleParams:f.a.object.isRequired,onChange:f.a.func};n(81);var J=n(176),W=n(182),V=Object(O.c)(R).withConfig({displayName:"query-string-builder__QueryParamLabel",componentId:"dh0rqv-0"})(["margin:5px;"]),K=Object(O.c)(P.h).withConfig({displayName:"query-string-builder__QueryParamInput",componentId:"dh0rqv-1"})(["margin:5px 10px;"]),Y=Object(O.c)(M).withConfig({displayName:"query-string-builder__QueryParamCaption",componentId:"dh0rqv-2"})(["margin:5px;"]),Z=[{name:"style",shieldsDefaultValue:"flat"},{name:"label",label:"override label"},{name:"color",label:"override color"},{name:"logo",label:"named logo"},{name:"logoColor",label:"override logo color"}];function X(e){return Z.find(function(t){return t.name===e})}var $=function(e){function t(t){var n;(n=e.call(this,t)||this).handleServiceQueryParamChange=function(e){var t,a=e.target,r=a.name,i="checkbox"===a.type?e.target.checked:e.target.value,o=n.state,l=o.queryParams,c=o.badgeOptions,s=Object.assign({},l,((t={})[r]=i,t));n.setState({queryParams:s}),n.noteQueryStringChanged({queryParams:s,badgeOptions:c})},n.handleBadgeOptionChange=function(e){var t,a=e.target,r=a.name,i=a.value,o=n.state,l=o.badgeOptions,c=o.queryParams,s=Object.assign({},l,((t={})[r]=i,t));n.setState({badgeOptions:s}),n.noteQueryStringChanged({queryParams:c,badgeOptions:s})};var a=t.exampleParams,r=t.initialStyle,i={};Object.entries(a).forEach(function(e){var t=e[0],n="string"==typeof e[1];i[t]=!n||""});var o={};return Z.forEach(function(e){var t=e.name;o[t]="style"===t?r:""}),n.state={queryParams:i,badgeOptions:o},n}u()(t,e),t.getQueryString=function(e){var t=e.queryParams,n=e.badgeOptions,a={},r=!0;return Object.entries(t).forEach(function(e){var t=e[0],n=e[1];"string"==typeof n?n?a[t]=n:r=!1:n&&(a[t]=null)}),Object.entries(n).forEach(function(e){var t=e[0],n=e[1],r=X(t).shieldsDefaultValue;n&&n!==r&&(a[t]=n)}),{queryString:Object(J.stringify)(a),isComplete:r}};var n=t.prototype;return n.noteQueryStringChanged=function(e){var t=e.queryParams,n=e.badgeOptions,a=this.props.onChange;if(a){var r=this.constructor.getQueryString({queryParams:t,badgeOptions:n});a({queryString:r.queryString,isComplete:r.isComplete})}},n.componentDidMount=function(){var e=this.state,t=e.queryParams,n=e.badgeOptions;this.noteQueryStringChanged({queryParams:t,badgeOptions:n})},n.renderServiceQueryParam=function(e){var t=e.name,n=e.value,a=e.isStringParam,r=e.stringParamCount,i=this.props.exampleParams[t];return m.a.createElement("tr",{key:t},m.a.createElement("td",null,m.a.createElement(V,{htmlFor:t},S()(t).toLowerCase())),m.a.createElement("td",null,a&&m.a.createElement(Y,null,0===r?"e.g. "+i:i)),m.a.createElement("td",null,a?m.a.createElement(K,Object.assign({type:"text",name:t,checked:n,onChange:this.handleServiceQueryParamChange},P.j)):m.a.createElement("input",{type:"checkbox",name:t,checked:n,onChange:this.handleServiceQueryParamChange})))},n.renderBadgeOptionInput=function(e,t){return"style"===e?m.a.createElement("select",{name:"style",value:t,onChange:this.handleBadgeOptionChange},W.a.map(function(e){return m.a.createElement("option",{key:e,value:e},e)})):m.a.createElement(K,Object.assign({type:"text",name:e,checked:t,onChange:this.handleBadgeOptionChange},P.j))},n.renderBadgeOption=function(e,t){var n=X(e),a=n.label,r=void 0===a?S()(e):a,i=n.shieldsDefaultValue;return m.a.createElement("tr",{key:e},m.a.createElement("td",null,m.a.createElement(V,{htmlFor:e},r)),m.a.createElement("td",null,!i&&m.a.createElement(Y,null,"optional")),m.a.createElement("td",null,this.renderBadgeOptionInput(e,t)))},n.render=function(){var e=this,t=this.state,n=t.queryParams,a=t.badgeOptions,r=Boolean(Object.keys(n).length),i=0;return m.a.createElement(m.a.Fragment,null,r&&m.a.createElement(B,null,m.a.createElement("table",null,m.a.createElement("tbody",null,Object.entries(n).map(function(t){var n=t[0],a=t[1],r="string"==typeof a;return e.renderServiceQueryParam({name:n,value:a,isStringParam:r,stringParamCount:r?i++:void 0})})))),m.a.createElement(B,null,m.a.createElement("table",null,m.a.createElement("tbody",null,Object.entries(a).map(function(t){var n=t[0],a=t[1];return e.renderBadgeOption(n,a)})))))},t}(m.a.Component);$.propTypes={exampleParams:f.a.object.isRequired,initialStyle:f.a.string,onChange:f.a.func},$.defaultProps={initialStyle:"flat"};var ee=n(41),te=n.n(ee),ne=n(249),ae=function(e){return m.a.createElement(ne.a.Control,Object.assign({},e,{innerProps:{onMouseDown:e.selectProps.onControlMouseDown}}))};ae.propTypes={selectProps:f.a.object.isRequired};var re=Object(O.c)(ne.b).withConfig({displayName:"request-markup-button__MarkupFormatSelect",componentId:"gjwzgu-0"})(["width:200px;margin-left:auto;margin-right:auto;font-family:'Lato',sans-serif;font-size:12px;.markup-format__control{background-image:linear-gradient(-180deg,#00aeff 0%,#0076ff 100%);border:1px solid rgba(238,239,241,0.8);border-width:0;box-shadow:unset;cursor:copy;}.markup-format__control--is-disabled{background:rgba(0,118,255,0.3);cursor:none;}.markup-format__placeholder{color:#eeeff1;}.markup-format__indicator{color:rgba(238,239,241,0.81);cursor:pointer;}.markup-format__indicator:hover{color:#eeeff1;}.markup-format__control--is-focused .markup-format__indicator,.markup-format__control--is-focused .markup-format__indicator:hover{color:#ffffff;}.markup-format__option{text-align:left;cursor:copy;}"]),ie=[{value:"markdown",label:"Copy Markdown"},{value:"rst",label:"Copy reStructuredText"},{value:"asciidoc",label:"Copy AsciiDoc"},{value:"html",label:"Copy HTML"}],oe=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).selectRef=m.a.createRef(),t.onControlMouseDown=function(){var e=o()(r.a.mark(function e(n){var a,i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=te()(te()(t)),i=a.selectRef,!(o=t.props.onMarkupRequested)){e.next=5;break}return e.next=5,o("link");case 5:i.current.blur();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.onOptionClick=function(){var e=o()(r.a.mark(function e(n){var a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.value,!(i=t.props.onMarkupRequested)){e.next=5;break}return e.next=5,i(a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t}return u()(t,e),t.prototype.render=function(){var e=this.props.isDisabled;return m.a.createElement(re,{ref:this.selectRef,options:ie,placeholder:"Copy Badge URL",value:"",isDisabled:e,closeMenuOnScroll:!0,blurInputOnSelect:!0,menuPlacement:"auto",isSearchable:!1,onControlMouseDown:this.onControlMouseDown,onChange:this.onOptionClick,classNamePrefix:"markup-format",components:{Control:ae}})},t}(m.a.PureComponent);oe.propTypes={onMarkupRequested:f.a.func.isRequired,isDisabled:f.a.bool};var le=oe,ce=n(247),se=O.c.span.withConfig({displayName:"copied-content-indicator__ContentAnchor",componentId:"sc-1dqcwul-0"})(["position:relative;display:inline-block;"]),ue=O.c.span.withConfig({displayName:"copied-content-indicator__ContentContainer",componentId:"sc-1dqcwul-1"})(["width:100vw;position:absolute;left:50%;transform:translateX(-50%);will-change:opacity,top;pointer-events:none;"]),pe=Object(ce.a)(ue)({hidden:{opacity:0,transition:{duration:100}},effectStart:{top:"-10px",opacity:1,transition:{duration:0}},effectEnd:{top:"-75px",opacity:.5}}),me=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={pose:"hidden"},t.handlePoseComplete=function(){"effectStart"===t.state.pose?t.setState({pose:"effectEnd"}):t.setState({pose:"hidden"})},t}u()(t,e);var n=t.prototype;return n.trigger=function(){this.setState({pose:"effectStart"})},n.render=function(){var e=this.state.pose;return m.a.createElement(se,null,m.a.createElement(pe,{pose:e,onPoseComplete:this.handlePoseComplete},this.props.copiedContent),this.props.children)},t}(m.a.Component);me.propTypes={copiedContent:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node]),children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node])},n.d(t,"a",function(){return de});var de=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).indicatorRef=m.a.createRef(),t.state={path:"",link:"",message:void 0},t.copyMarkup=function(){var e=o()(r.a.mark(function e(n){var a,i,o,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.title,i=t.state.link,o=t.generateBuiltBadgeUrl(),l=x({badgeUrl:o,link:i,title:a,markupFormat:n}),e.prev=4,e.next=7,g()(l);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(4),t.setState({message:"Copy failed",markup:l}),e.abrupt("return");case 13:t.setState({markup:l}),t.indicatorRef.current.trigger();case 15:case"end":return e.stop()}},e,this,[[4,9]])}));return function(t){return e.apply(this,arguments)}}(),t.handlePathChange=function(e){var n=e.path,a=e.isComplete;t.setState({path:n,pathIsComplete:a})},t.handleQueryStringChange=function(e){var n=e.queryString;e.isComplete;t.setState({queryString:n})},t}u()(t,e);var n=t.prototype;return n.generateBuiltBadgeUrl=function(){var e=this.baseUrl,t=this.state,n=t.path,a=t.queryString;return""+e+n+".svg"+(a?"?"+a:"")},n.renderLivePreview=function(){var e,t=this.props.baseUrl;return e=this.state.pathIsComplete?this.generateBuiltBadgeUrl():Object(v.b)(t,"preview","some parameters missing","lightgray"),m.a.createElement("p",null,m.a.createElement(P.a,{display:"block",src:e}))},n.renderMarkupAndLivePreview=function(){var e=this.indicatorRef,t=this.state,n=t.markup,a=t.message,r=t.pathIsComplete;return m.a.createElement("div",null,this.renderLivePreview(),m.a.createElement(me,{ref:e,copiedContent:"Copied"},m.a.createElement(le,{isDisabled:!r,onMarkupRequested:this.copyMarkup})),a&&m.a.createElement("div",null,m.a.createElement("p",null,a),m.a.createElement("p",null,"Markup: ",n)))},n.render=function(){var e=this.props,t=e.pattern,n=e.exampleNamedParams,a=e.exampleQueryParams,r=e.initialStyle;return m.a.createElement("form",{action:""},m.a.createElement(G,{pattern:t,exampleParams:n,onChange:this.handlePathChange}),m.a.createElement($,{exampleParams:a,initialStyle:r,onChange:this.handleQueryStringChange}),m.a.createElement("div",null,this.renderMarkupAndLivePreview()))},c()(t,[{key:"baseUrl",get:function(){var e=this.props.baseUrl;if(e)return e;var t=window.location;return t.protocol+"//"+t.hostname}}]),t}(m.a.Component);de.propTypes={baseUrl:f.a.string.isRequired,title:f.a.string.isRequired,pattern:f.a.string.isRequired,exampleNamedParams:f.a.object.isRequired,exampleQueryParams:f.a.object.isRequired,initialStyle:f.a.string}},202:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABE0lEQVR4AWJkAIKkpCQ7TU3NySIiIlosQMCABejbMWAFf//8YXj77vWn27duZWVGz1nKGBYWZiQkJHSIkZGRmwEPCMxiwAt+/fz3/86VL8EAbuiiAKEoiMLwGcHdCQMBiUAlurDErmJ75tmKP8A3oiJyuF6vAxglws+0C5pv81GJaJdzhlWMMJssaaXM3C0CpmSDLAQtgH3BiCIVB2NRMKWEIoXQMBiLgjHGP9nQ+6ZPLgqGgs9xriDovX8A6Jjgw8ZyIigzn5xz+yZ+6O/tsz7Hy8tb/PLlywPAHMOFT/G3LwRc95fxPyerQCojuKwLDLQAGjoJWIzpAw1mw6bB0guHSYyMDBysnO/5hUTTGvM3rQEAI8qCnLiY3O4AAAAASUVORK5CYII="},234:function(e,t,n){n(85),n(92);var a=/^[A-za-z0-9-]+$/;e.exports={patternToOptions:function(e){var t=e.split("|");return t.some(function(e){return!e.match(a)})?void 0:t}}}}]);
//# sourceMappingURL=1-81f7d56be317fafa09a0.js.map