import{d as x,I as C,a0 as w,b as n,c,F as N,Z as v,f as s,g as l,w as m,e as i,t as r,M as f,n as B,a1 as D,E as I,a2 as p,l as E}from"./entry.D1P3HEU6.js";import{f as L}from"./date.BcWussCh.js";const V=["data-content-id"],z={key:0,class:"image"},F={key:0},S={class:"content"},$={class:"description"},j=x({__name:"ArticlesListItem",props:{article:{type:Object,required:!0,validator:t=>!!(t!=null&&t._path&&t.title)},featured:{type:Boolean,default:!1}},setup(t){const h=t,_=C(()=>{var a,o;return(a=w())!=null&&a.isEnabled()?(o=h.article)==null?void 0:o._id:void 0});return(a,o)=>{var u;const y=D,d=I;return t.article._path&&t.article.title?(n(),c("article",{key:0,class:B({featured:t.featured}),"data-content-id":f(_)},[t.article.cover?(n(),c("div",z,[(u=t.article)!=null&&u.badges?(n(),c("div",F,[(n(!0),c(N,null,v(t.article.badges,(e,k)=>(n(),c("span",{key:k,style:p({backgroundColor:(e==null?void 0:e.bg)||"rgba(0, 0, 0, 0.3)",color:(e==null?void 0:e.color)||"white"})},r(typeof e=="string"?e:e.content),5))),128))])):s("",!0),l(d,{to:t.article._path},{default:m(()=>[l(y,{src:t.article.cover,alt:t.article.title,width:"16",height:"9"},null,8,["src","alt"])]),_:1},8,["to"])])):s("",!0),i("div",S,[l(d,{to:t.article._path,class:"headline"},{default:m(()=>[i("h1",null,r(t.article.title),1)]),_:1},8,["to"]),i("p",$,r(t.article.description),1),i("time",null,r(("formatDate"in a?a.formatDate:f(L))(t.article.date)),1)])],10,V)):s("",!0)}}}),M=E(j,[["__scopeId","data-v-0b86de6c"]]);export{M as default};
