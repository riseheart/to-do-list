import{_ as l,o as r,c,a as t,p as _,d as g,h as p}from"./index-1d51e3f6.js";const f={name:"Header",methods:{goHome:function(){this.$router.push({path:"/"})},goLogin:function(){this.$router.push({path:"./login"})}}},s=a=>(_("data-v-88d79d42"),a=a(),g(),a),h={class:"navbar navbar-expand-lg navbar-light bg-white"},m={class:"container-fluid"},u=s(()=>t("button",{class:"navbar-toggler",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarExample01","aria-controls":"navbarExample01","aria-expanded":"false","aria-label":"Toggle navigation"},[t("i",{class:"fas fa-bars"})],-1)),k={class:"collapse navbar-collapse",id:"navbarExample01"},v={class:"navbar-nav me-auto mb-2 mb-lg-0"},x=s(()=>t("p",{class:"nav-link"},"Home",-1)),$=[x],H=s(()=>t("p",{class:"nav-link"},"Login",-1)),y=[H],C=s(()=>t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"https://amzlucas.github.io/Dotu-CV/",target:"_blank"},"About")],-1)),L=s(()=>t("div",{class:"p-2 text-center bg-light"},[t("h1",{class:"mb-3"},"To-do list")],-1));function w(a,o,i,d,b,e){return r(),c("header",null,[t("nav",h,[t("div",m,[u,t("div",k,[t("ul",v,[t("li",{class:"nav-item active",onClick:o[0]||(o[0]=(...n)=>e.goHome&&e.goHome(...n))},$),t("li",{class:"nav-item",onClick:o[1]||(o[1]=(...n)=>e.goLogin&&e.goLogin(...n))},y),C])])])]),L])}const F=l(f,[["render",w],["__scopeId","data-v-88d79d42"]]),E={name:"Footer"},I={class:"text-center text-white",style:{"background-color":"#f1f1f1"}},T=t("div",{class:"container pt-4"},[t("section",{class:"mb-4"},[t("a",{class:"btn btn-link btn-floating btn-lg text-dark m-1",href:"https://facebook.com/hiimdotu",role:"button","data-mdb-ripple-color":"dark",target:"_blank"},[t("i",{class:"fab fa-facebook-f"})]),t("a",{class:"btn btn-link btn-floating btn-lg text-dark m-1",href:"#!",role:"button","data-mdb-ripple-color":"dark"},[t("i",{class:"fab fa-twitter"})]),t("a",{class:"btn btn-link btn-floating btn-lg text-dark m-1",href:"#!",role:"button","data-mdb-ripple-color":"dark"},[t("i",{class:"fab fa-google"})]),t("a",{class:"btn btn-link btn-floating btn-lg text-dark m-1",href:"#!",role:"button","data-mdb-ripple-color":"dark"},[t("i",{class:"fab fa-instagram"})]),t("a",{class:"btn btn-link btn-floating btn-lg text-dark m-1",href:"#!",role:"button","data-mdb-ripple-color":"dark"},[t("i",{class:"fab fa-linkedin"})]),t("a",{class:"btn btn-link btn-floating btn-lg text-dark m-1",href:"https://github.com/amzLucas",role:"button","data-mdb-ripple-color":"dark",target:"_blank"},[t("i",{class:"fab fa-github"})])])],-1),V=t("div",{class:"text-center text-dark p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"}},[p(" © 2022 Copyright: "),t("a",{class:"text-dark",href:"https://amzlucas.github.io/Dotu-CV/",target:"_blank"},"TuDo")],-1),z=[T,V];function B(a,o,i,d,b,e){return r(),c("footer",I,z)}const S=l(E,[["render",B]]);export{S as F,F as H};