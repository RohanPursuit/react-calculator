(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),c=n(9),a=n.n(c),i=(n(14),n(1)),l=n(3),u=n(4),o=n(6),p=n(5),b=(n(8),n(15),n(0));function j(){return"7894561230.".split("").map((function(e){return Object(b.jsx)("button",{className:"num"+e,value:e,children:e},e)}))}function O(){return"\u2192C()+-/*^".split("").map((function(e,t){return Object(b.jsx)("button",{className:"oper-"+t,value:e,name:(/\//.test(e)?"\xf7":/\*/.test(e)&&"\xd7")||e,children:(/\//.test(e)?"\xf7":/\*/.test(e)&&"\xd7")||e},t)}))}var h=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"numbers-operators",children:[Object(b.jsx)("section",{className:"numbers",onClick:this.props.click,children:Object(b.jsx)(j,{})}),Object(b.jsx)("section",{className:"operators",onClick:this.props.click,children:Object(b.jsx)(O,{})}),Object(b.jsxs)("section",{className:"ac",onClick:this.props.click,children:[Object(b.jsx)("button",{value:"AC",className:"clear",children:"AC"}),Object(b.jsx)("button",{className:"negative",value:"\xb1",children:"\xb1"}),Object(b.jsx)("button",{value:"=",className:"equal",children:"="})]})]})}}]),n}(r.Component),v=function(e,t){var n=1,r=0,s=1;")"===e[(t+=1)-1]&&(t-=2,r=1,n=0,s=-1);for(var c=t,a=t;a<e.length;a+=s){if("("===e[a]?n=++n:")"===e[a]&&(r=++r),n-r===0){c=a;break}}return c};var m=function(e){for(;e.join("").match(/[\xd7\xf7]/);){var t=-1===e.indexOf("\xd7")?e.indexOf("\xf7"):e.indexOf("\xd7"),n=e[t];if("\xf7"===n){var r=Number(e[t-1])/Number(e[t+1]);e.splice(t-1,3,r)}else if("\xd7"===n){var s=Number(e[t-1])*Number(e[t+1]);e.splice(t-1,3,s)}}for(;e.join("").match(/\+|-/);){if(1===e.length&&Number(e[0]))return e[0];console.log("subtracting "+e);var c=-1===e.indexOf("+")?e.indexOf("-"):e.indexOf("+"),a=e[c];if("-"===a){var i=Number(e[c-1])-Number(e[c+1]);e.splice(c-1,3,i)}else if("+"===a){var l=Number(e[c-1])+Number(e[c+1]);e.splice(c-1,3,l)}}return e[0]};var f=function(e){for(;e.includes("(");){var t=e.lastIndexOf("("),n=e.indexOf(")",t),r=n-t;e.splice(t,r+1,m(e.slice(t+1,n)))}return e};var x=function(e,t){for(;t.includes("(");)t=f(t);for(;e.includes("(");)e=f(e);return t.join("").match(/[+-\xd7\xf7]/)&&(t=m(t)),e.join("").match(/[+-\xd7\xf7]/)&&(e=m(e)),Math.pow(Number(e),Number(t))},d=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"calculate",value:function(e,t){if(0!==t)return 0;for(;e.includes("^");){var n=e.indexOf("^"),r=n-1,s=r,c=n;")"===e[r]&&(s=(r=v(e,r))+1,c=n-1);var a=n+1,i=n+1,l=n+2;"("===e[i]&&(a=n+2,l=i=v(e,i)),e.splice(r,i+1,x(e.slice(s,c),e.slice(a,l)))}return f(e),m(e),Number(e[0]).toLocaleString()}},{key:"render",value:function(){var e=this.props,t=e.expression,n=e.isOpenParen;return this.calculate(t,n)}}]),n}(r.Component),N=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onButtonClick=function(t){var n=t.target,r=n.name,s=n.value,c=e.state,a=c.userInput,l=c.expressionArr,u=e.state.isOpenParen;if(!!Number(s)||"."===s||"0"===s){var o=l.slice(0,l.length-1);isNaN(Number(l[l.length-1]))&&(o=l.slice(0,l.length)),e.setState({userInput:a+s,preview:[].concat(Object(i.a)(o),[a+s]),expressionArr:[].concat(Object(i.a)(o),[a+s]),result:Object(b.jsx)(d,{expression:[].concat(Object(i.a)(o),[a+s]),isOpenParen:u})})}else switch(s){case"AC":e.setState({userInput:"",expressionArr:[],display:0,preview:null,result:0,isOpenParen:0});break;case"C":e.setState({userInput:"",preview:l});break;case"\xb1":e.setState({userInput:-1*Number(a),preview:l.slice(0,l.length-1).join("")+-1*Number(a),expressionArr:[].concat(Object(i.a)(l.slice(0,l.length-1)),[""+-1*Number(a)])});break;case"=":var p=Object(b.jsx)(d,{expression:l,isOpenParen:u});e.setState({result:p,userInput:""});break;case"(":var j=Number(l[l.length-1])?["\xd7","("]:["("];e.setState({isOpenParen:++u,expressionArr:[].concat(Object(i.a)(l),j),preview:[].concat(Object(i.a)(l),j),userInput:""});break;case")":e.setState({isOpenParen:--u,expressionArr:[].concat(Object(i.a)(l),[s]),preview:[].concat(Object(i.a)(l),[s]),result:Object(b.jsx)(d,{expression:[].concat(Object(i.a)(l),[s]),isOpenParen:u})});break;case"\u2192":var O=l.slice(0,l.length-1);")"===l[l.length-1]?e.setState({isOpenParen:++u}):"("===l[l.length-1]&&e.setState({isOpenParen:--u}),""===l[l.length-1]&&(l.slice(0,l.length-2),")"===l[l.length-2]?e.setState({isOpenParen:++u}):"("===l[l.length-2]&&e.setState({isOpenParen:--u}));var h=O.slice(0,O.length);isNaN(Number(O[O.length-1]))&&(h=O.slice(0,O.length-1)),l.length&&e.setState({expressionArr:O,preview:O,userInput:"",display:0,result:Object(b.jsx)(d,{expression:h,isOpenParen:u})});break;case"^":var v=l.slice(0,l.length);isNaN(Number(l[l.length-1]))&&")"!==v[v.length-1]&&(v=l.slice(0,l.length-1)),e.setState({expressionArr:[].concat(Object(i.a)(v),[r,"("]),userInput:"",preview:[].concat(Object(i.a)(v),[r,"("]),isOpenParen:++u});break;default:var m=l.slice(0,l.length);isNaN(Number(l[l.length-1]))&&")"!==m[m.length-1]&&(m=l.slice(0,l.length-1)),l.length&&!l[l.length-1].match(/[(]/)&&e.setState({expressionArr:[].concat(Object(i.a)(m),[r]),userInput:"",preview:[].concat(Object(i.a)(m),[r])})}},e.state={userInput:"",expressionArr:[],preview:null,result:0,isOpenParen:0},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.preview,n=e.result,r=e.userInput;var s=function(){var e=0;return r.length?e=r:(e=0,console.log(e)),e}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("main",{className:"calculator",children:[Object(b.jsxs)("section",{className:"display",children:[Object(b.jsx)("div",{className:"integer",children:s}),Object(b.jsx)("span",{className:"expression",children:t}),"=",Object(b.jsx)("span",{className:"result",children:n})]}),Object(b.jsx)("section",{className:"numpad",children:Object(b.jsx)(h,{click:this.onButtonClick})})]})})}}]),n}(r.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),g()},8:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.37c050f1.chunk.js.map