(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(e,t,a){"use strict";a.r(t);a(41);var i=a(8),r=a.n(i),n=a(0),s=a.n(n),o=a(169),l=(a(178),a(180)),d=a(181),c=a.n(d),u=a(168),A=function(){var e=l.data,t=e.site.siteMetadata,a=t.author;t.social;return s.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:Object(u.a)(2.5)}},s.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,title:a,style:{marginRight:Object(u.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),s.a.createElement("p",null,"Written by ",s.a.createElement("strong",null,a)))},f=a(171),p=a(172);a.d(t,"pageQuery",function(){return h});var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,i=a.previous,r=a.next;return s.a.createElement(f.a,{location:this.props.location,title:t},s.a.createElement(p.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),s.a.createElement(A,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,i&&s.a.createElement(o.a,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),s.a.createElement("li",null,r&&s.a.createElement(o.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},t}(s.a.Component),h=(t.default=g,"3654438753")},167:function(e,t,a){var i;e.exports=(i=a(170))&&i.default||i},168:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var i=a(174),r=a.n(i),n=a(175),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new r.a(s.a);var l=o.rhythm,d=o.scale},169:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(5),s=a.n(n),o=a(40),l=a.n(o);a.d(t,"a",function(){return l.a});a(167),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},170:function(e,t,a){"use strict";a.r(t);a(41);var i=a(0),r=a.n(i),n=a(5),s=a.n(n),o=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},171:function(e,t,a){"use strict";a(41);var i=a(8),r=a.n(i),n=a(0),s=a.n(n),o=a(169),l=a(168),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,i=t.title,r=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,r),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=d},172:function(e,t,a){"use strict";var i=a(173),r=a(0),n=a.n(r),s=a(5),o=a.n(s),l=a(176),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,o=i.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},173:function(e){e.exports={data:{site:{siteMetadata:{title:"Effective English",description:"Effective English Blog",author:"Evgeny Leukhin"}}}}},178:function(e,t,a){"use strict";a(179)("fixed",function(e){return function(){return e(this,"tt","","")}})},179:function(e,t,a){var i=a(9),r=a(12),n=a(25),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},180:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAYTMpdopZ//EABkQAAIDAQAAAAAAAAAAAAAAAAECAAMRE//aAAgBAQABBQKlQ7WLjTqVPQk7P//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwGhf//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwGFf//EABsQAAEEAwAAAAAAAAAAAAAAAAABECExAhEi/9oACAEBAAY/AppCKbeJ03//xAAZEAEBAAMBAAAAAAAAAAAAAAABABEhUbH/2gAIAQEAAT8hUboQLg8ZmPSY7RhX/9oADAMBAAIAAwAAABDIP//EABYRAAMAAAAAAAAAAAAAAAAAABARIf/aAAgBAwEBPxCCH//EABYRAAMAAAAAAAAAAAAAAAAAABARIf/aAAgBAgEBPxCjH//EABsQAQEBAQADAQAAAAAAAAAAAAERADEhYXGR/9oACAEBAAE/EJnqUGNv37iQCBoKZNZmogoijo+txA8FOaLr+zf/2Q==",width:50,height:50,src:"/static/e93310ae2ea4e6418e459ac45fad4e44/9b664/eleu.jpg",srcSet:"/static/e93310ae2ea4e6418e459ac45fad4e44/9b664/eleu.jpg 1x,\n/static/e93310ae2ea4e6418e459ac45fad4e44/06a10/eleu.jpg 1.5x,\n/static/e93310ae2ea4e6418e459ac45fad4e44/f1b5a/eleu.jpg 2x"}}},site:{siteMetadata:{author:"Evgeny Leukhin",social:{twitter:"kylemathews"}}}}}},181:function(e,t,a){"use strict";var i=a(10);t.__esModule=!0,t.default=void 0;var r,n=i(a(8)),s=i(a(42)),o=i(a(96)),l=i(a(97)),d=i(a(0)),c=i(a(5)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,m=new WeakMap;var b=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+r+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},A,{onLoad:s,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&f(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&h&&!t.critical&&!a.seenBefore;var i=t.critical||g&&(p||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,w=e.itemProp,v=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,l.default)({opacity:S?1:0,transition:j?"opacity "+m+"ms":"none"},o),R="boolean"==typeof h?"lightgray":h,L={transitionDelay:m+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&L,o,A),O={title:t,alt:this.state.isVisible?"":a,style:x,className:f};if(p){var I=p;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&L)}),I.base64&&d.default.createElement(y,(0,l.default)({src:I.base64},O)),I.tracedSVG&&d.default.createElement(y,(0,l.default)({src:I.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:v},I))}}))}if(g){var C=g,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete N.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},j&&L)}),C.base64&&d.default.createElement(y,(0,l.default)({src:C.base64},O)),C.tracedSVG&&d.default.createElement(y,(0,l.default)({src:C.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(y,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:v})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:v},C))}}))}return null},t}(d.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var j=w;t.default=j}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-56bcc997b79685d323e6.js.map