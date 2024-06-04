(function(){"use strict";var e={9290:function(e,r,t){var n=t(5130),o=t(6768);const u={id:"app"};function i(e,r,t,n,i,a){const s=(0,o.g2)("router-view"),c=(0,o.g2)("ErrorBoundary");return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(s)])),_:1})])}var a=t(4232);const s={key:1,class:"container"},c=(0,o.Lk)("h1",null,"An error occurred",-1);function l(e,r,t,n,u,i){return(0,o.uX)(),(0,o.CE)("div",null,[u.error?((0,o.uX)(),(0,o.CE)("div",s,[c,(0,o.Lk)("p",null,(0,a.v_)(u.error.message),1)])):(0,o.RG)(e.$slots,"default",{key:0})])}var p={data(){return{error:null}},errorCaptured(e,r,t){return this.error=e,console.log(r,t),!1}},d=t(1241);const f=(0,d.A)(p,[["render",l]]);var h=f,v={components:{ErrorBoundary:h}};const g=(0,d.A)(v,[["render",i]]);var k=g,b=t(1387);const m={class:"container"},y=(0,o.Lk)("h1",null,"Repositories",-1),L={key:0},P={class:"pagination"},_=["disabled"],C=["disabled"],E={key:1},R=(0,o.Lk)("p",null,"No repositories found.",-1),O=[R];function w(e,r,t,n,u,i){const s=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",m,[y,i.filteredRepos.length?((0,o.uX)(),(0,o.CE)("div",L,[(0,o.bF)(s,{to:{name:"Repository",params:{id:i.filteredRepos[u.currentPage-1].name}}},{default:(0,o.k6)((()=>[(0,o.Lk)("h2",null,(0,a.v_)(i.filteredRepos[u.currentPage-1].name),1)])),_:1},8,["to"]),(0,o.Lk)("p",null,(0,a.v_)(i.filteredRepos[u.currentPage-1].description),1),(0,o.Lk)("div",P,[(0,o.Lk)("button",{onClick:r[0]||(r[0]=(...e)=>i.prevPage&&i.prevPage(...e)),disabled:1===u.currentPage},"Previous",8,_),(0,o.Lk)("button",{onClick:r[1]||(r[1]=(...e)=>i.nextPage&&i.nextPage(...e)),disabled:u.currentPage===i.filteredRepos.length},"Next",8,C)])])):((0,o.uX)(),(0,o.CE)("div",E,O))])}var F=t(4373),x={data(){return{repos:[],searchQuery:"",currentPage:1}},computed:{filteredRepos(){return this.repos.filter((e=>e.name.includes(this.searchQuery)))}},methods:{async fetchRepos(){try{const e=await F.A.get("https://api.github.com/users/thebukunmi/repos");this.repos=e.data}catch(e){console.error(e)}},searchRepos(){this.currentPage=1},nextPage(){this.currentPage<this.filteredRepos.length&&this.currentPage++},prevPage(){this.currentPage>1&&this.currentPage--}},created(){this.fetchRepos()}};const A=(0,d.A)(x,[["render",w]]);var X=A;const j={key:0,class:"container"},S=(0,o.Lk)("strong",null,"Stars:",-1),N=(0,o.Lk)("strong",null,"Forks:",-1),T=(0,o.Lk)("h2",null,"Files",-1),$=["href"],M={class:"back-to-respository"};function W(e,r,t,n,u,i){const s=(0,o.g2)("router-link");return u.repo&&u.files?((0,o.uX)(),(0,o.CE)("div",j,[(0,o.Lk)("h1",null,(0,a.v_)(u.repo.name),1),(0,o.Lk)("p",null,(0,a.v_)(u.repo.description),1),(0,o.Lk)("p",null,[S,(0,o.eW)(" "+(0,a.v_)(u.repo.stargazers_count),1)]),(0,o.Lk)("p",null,[N,(0,o.eW)(" "+(0,a.v_)(u.repo.forks_count),1)]),T,(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.files,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.sha},[(0,o.Lk)("a",{href:e.html_url,target:"_blank"},(0,a.v_)(e.name),9,$)])))),128))]),(0,o.Lk)("div",M,[(0,o.bF)(s,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Back to Repositories")])),_:1})])])):(0,o.Q3)("",!0)}var B={data(){return{repo:null,files:[]}},async created(){try{const e=await F.A.get(`https://api.github.com/repos/thebukunmi/${this.$route.params.id}`);this.repo=e.data;const r=await F.A.get(`https://api.github.com/repos/thebukunmi/${this.$route.params.id}/contents`);this.files=r.data}catch(e){console.error(e)}}};const Q=(0,d.A)(B,[["render",W]]);var G=Q;const H={class:"container"},z=(0,o.Lk)("h1",null,"404 - Not Found",-1),I=(0,o.Lk)("p",null,"The page you are looking for does not exist.",-1);function K(e,r,t,n,u,i){const a=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",H,[z,I,(0,o.bF)(a,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Go to Home")])),_:1})])}var q={name:"NotFound"};const D=(0,d.A)(q,[["render",K]]);var J=D;const U=[{path:"/",name:"Home",component:X},{path:"/repository/:id",name:"Repository",component:G},{path:"/:pathMatch(.*)*",name:"NotFound",component:J}],V=(0,b.aE)({history:(0,b.LA)("/"),routes:U});var Y=V;(0,n.Ef)(k).use(Y).mount("#app")}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var u=r[n]={exports:{}};return e[n].call(u.exports,u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(r,n,o,u){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],u=e[l][2];for(var a=!0,s=0;s<n.length;s++)(!1&u||i>=u)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(a=!1,u<i&&(i=u));if(a){e.splice(l--,1);var c=o();void 0!==c&&(r=c)}}return r}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[n,o,u]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,u,i=n[0],a=n[1],s=n[2],c=0;if(i.some((function(r){return 0!==e[r]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var l=s(t)}for(r&&r(n);c<i.length;c++)u=i[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},n=self["webpackChunkgithub_profile"]=self["webpackChunkgithub_profile"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(9290)}));n=t.O(n)})();
//# sourceMappingURL=app.6d54e948.js.map