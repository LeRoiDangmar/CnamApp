import{a as g}from"./chunk-ILK76Z6N.js";import{a as $,g as Q}from"./chunk-ZKI2SWWW.js";import"./chunk-PCFO4U6U.js";import{k as b,n as Y,q as E}from"./chunk-3CR76VZE.js";import{$a as k,Fb as a,Gb as _,Hb as m,Ma as C,Pa as c,Pb as q,Qa as s,Qb as B,Sb as L,Z as j,_a as d,eb as u,g as f,lb as l,mb as z,oc as h,pb as o,pc as P,qb as n,rb as p,sc as U,tc as F,ub as R,vb as T}from"./chunk-QKIN7CWK.js";var H=(r,t)=>[r,t],v=class r{constructor(t){this.store=t}article;link="/article";addArticle(){this.store.dispatch(new Q(this.article))}static \u0275fac=function(e){return new(e||r)(s($))};static \u0275cmp=d({type:r,selectors:[["app-article-preview"]],inputs:{article:"article"},standalone:!1,decls:14,vars:12,consts:[[1,"article-card",3,"routerLink"],[1,"article-image"],[3,"src","alt"],[1,"article-content"],[1,"article-title"],[1,"article-price"],[1,"article-rating"],[1,"article-actions"],[1,"btn","btn-outline-secondary",3,"click"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1),p(2,"img",2),n(),o(3,"div",3)(4,"h3",4),a(5),n(),o(6,"p",5),a(7),B(8,"currency"),n(),o(9,"p",6),a(10),n()(),o(11,"div",7)(12,"button",8),R("click",function(G){return G.stopPropagation(),i.addArticle()}),a(13," Ajouter au panier "),n()()()),e&2&&(l("routerLink",q(9,H,i.link,i.article.id)),c(2),l("src",i.article.images[0],C)("alt",i.article.nom),c(3),_(i.article.nom),c(2),m("Prix: ",L(8,6,i.article.prix,"EUR"),""),c(3),m("Note: ",i.article.note," / 5"))},dependencies:[Y,U],styles:[".article-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;overflow:hidden;width:280px;height:320px;display:flex;flex-direction:column;box-shadow:0 2px 8px #0000001a;transition:transform .2s ease-in-out}.article-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px)}.article-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.article-content[_ngcontent-%COMP%]{padding:1rem;flex:1 1 auto}.article-title[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem;font-size:1.2rem;font-weight:600}.article-price[_ngcontent-%COMP%], .article-category[_ngcontent-%COMP%], .article-rating[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem;font-size:.9rem;color:#555}.article-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:.75rem 1rem 1rem;border-top:1px solid #eee}.article-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:.85rem}"]})};function J(r,t){if(r&1&&p(0,"app-article-preview",3),r&2){let e=t.$implicit;l("article",e)}}var M=class r{constructor(t){this.fetcherService=t}subscription=new f;featuredArticles=[];ngOnInit(){this.FeaturedArticles()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}FeaturedArticles(){let t=this.fetcherService.fetchFeaturedArticles().subscribe({next:e=>{this.featuredArticles=e},error:e=>{console.error("Error fetching categories:",e)}});this.subscription.add(t)}static \u0275fac=function(e){return new(e||r)(s(g))};static \u0275cmp=d({type:r,selectors:[["app-featured"]],standalone:!1,decls:5,vars:1,consts:[[1,"featured-articles-container"],[1,"featured-articles"],[3,"article",4,"ngFor","ngForOf"],[3,"article"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"h2"),a(2,"Voici les articles \xE0 la une"),n(),o(3,"div",1),u(4,J,1,1,"app-article-preview",2),n()()),e&2&&(c(4),l("ngForOf",i.featuredArticles))},dependencies:[h,v],styles:[".featured-articles-container[_ngcontent-%COMP%]{padding:1rem;background:#f9f9f9}.featured-articles-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.featured-articles[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-items:stretch}.article-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;overflow:hidden;width:280px;display:flex;flex-direction:column;box-shadow:0 2px 8px #0000001a;transition:transform .2s ease-in-out}.article-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px)}.article-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.article-content[_ngcontent-%COMP%]{padding:1rem;flex:1 1 auto}.article-title[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem;font-size:1.2rem;font-weight:600}.article-price[_ngcontent-%COMP%], .article-category[_ngcontent-%COMP%], .article-rating[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem;font-size:.9rem;color:#555}.article-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:.75rem 1rem 1rem;border-top:1px solid #eee}.article-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:.85rem}"]})};function K(r,t){if(r&1&&p(0,"app-article-preview",3),r&2){let e=t.$implicit;l("article",e)}}var S=class r{constructor(t,e){this.fetcherService=t;this.route=e}categorie=null;subscription=new f;articles=[];ngOnInit(){let t=this.route.paramMap.subscribe(e=>{let i=e.get("id");i!==this.categorie&&(this.categorie=i,this.FetchArticles())});this.subscription.add(t)}ngOnDestroy(){this.subscription.unsubscribe()}FetchArticles(){let t=this.fetcherService.fetchArticleByCategorie(this.categorie||"erreur").subscribe({next:e=>{this.articles=e},error:e=>{console.error("Error fetching articles:",e)}});this.subscription.add(t)}static \u0275fac=function(e){return new(e||r)(s(g),s(b))};static \u0275cmp=d({type:r,selectors:[["app-categorie"]],standalone:!1,decls:3,vars:1,consts:[[1,"articles-container"],[1,"articles"],[3,"article",4,"ngFor","ngForOf"],[3,"article"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1),u(2,K,1,1,"app-article-preview",2),n()()),e&2&&(c(2),l("ngForOf",i.articles))},dependencies:[h,v],styles:[".articles-container[_ngcontent-%COMP%]{padding:1rem;background:#f9f9f9}.articles[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-items:stretch}"]})};function W(r,t){if(r&1&&p(0,"app-article-preview",4),r&2){let e=t.$implicit;l("article",e)}}function X(r,t){r&1&&(o(0,"div",5),a(1," Aucun article n'a pu \xEAtre trouv\xE9 "),n())}var O=class r{constructor(t,e){this.fetcherService=t;this.route=e}subscription=new f;articles=[];query="";error=!1;ngOnInit(){let t=this.route.paramMap.subscribe(e=>{let i=e.get("query");i!==this.query&&i!=null&&(this.query=i,this.FetchArticles())});this.subscription.add(t)}ngOnDestroy(){this.subscription.unsubscribe()}FetchArticles(){let t=this.fetcherService.fetchArticleByQuery(this.query||"").subscribe({next:e=>{this.articles=e,this.error=!1},error:e=>{console.error("Error fetching articles:",e),this.error=!0,this.articles=[]}});this.subscription.add(t)}static \u0275fac=function(e){return new(e||r)(s(g),s(b))};static \u0275cmp=d({type:r,selectors:[["app-search"]],standalone:!1,decls:4,vars:2,consts:[[1,"articles-container"],[1,"articles"],[3,"article",4,"ngFor","ngForOf"],["class","error",4,"ngIf"],[3,"article"],[1,"error"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1),u(2,W,1,1,"app-article-preview",2)(3,X,2,0,"div",3),n()()),e&2&&(c(2),l("ngForOf",i.articles),c(),l("ngIf",i.error))},dependencies:[h,P,v],styles:[".articles-container[_ngcontent-%COMP%]{padding:1rem;background:#f9f9f9}.articles[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-items:stretch}"]})};function Z(r,t){if(r&1&&(o(0,"div",5),p(1,"img",6),n()),r&2){let e=T();c(),l("src",e.articlefull.images[0],C)("alt",e.articlefull.nom)}}var A=class r{constructor(t,e){this.fetcherService=t;this.route=e}subscription=new f;articlefull={id:"",nom:"",prix:0,note:0,id_categorie:"",en_avant:!1,images:[],poids:0,description:"",dimensions:""};article=null;ngOnInit(){let t=this.route.paramMap.subscribe(e=>{let i=e.get("id");i!==this.article&&(this.article=i,this.FetchArticle())})}FetchArticle(){let t=this.fetcherService.fetchArticleFull(this.article||"").subscribe({next:e=>{this.articlefull=e},error:e=>{console.error("Error fetching articles:",e)}});this.subscription.add(t)}static \u0275fac=function(e){return new(e||r)(s(g),s(b))};static \u0275cmp=d({type:r,selectors:[["app-article"]],standalone:!1,decls:35,vars:11,consts:[[1,"articlefull-container"],["class","articlefull-image",4,"ngIf"],[1,"articlefull-details"],[1,"articlefull-title"],[1,"status-badge"],[1,"articlefull-image"],[3,"src","alt"]],template:function(e,i){e&1&&(o(0,"div",0),u(1,Z,2,2,"div",1),o(2,"div",2)(3,"h2",3),a(4),n(),o(5,"p")(6,"strong"),a(7,"Description:"),n(),a(8),n(),o(9,"p")(10,"strong"),a(11,"Prix:"),n(),a(12),n(),o(13,"p")(14,"strong"),a(15,"Dimension:"),n(),a(16),n(),o(17,"p")(18,"strong"),a(19,"Poids:"),n(),a(20),n(),o(21,"p")(22,"strong"),a(23,"Note:"),n(),a(24),n(),o(25,"p")(26,"strong"),a(27,"Cat\xE9gorie ID:"),n(),a(28),n(),o(29,"p")(30,"strong"),a(31,"En Avant:"),n(),o(32,"span",4),a(33),n()(),p(34,"hr"),n()()),e&2&&(c(),l("ngIf",i.articlefull.images&&i.articlefull.images.length),c(3),_(i.articlefull.nom),c(4),m(" ",i.articlefull.description,""),c(4),m(" ",i.articlefull.prix," \u20AC"),c(4),m(" ",i.articlefull.dimensions,""),c(4),m(" ",i.articlefull.poids," kg"),c(4),m(" ",i.articlefull.note," / 5"),c(4),m(" ",i.articlefull.id_categorie,""),c(4),z("active",i.articlefull.en_avant),c(),m(" ",i.articlefull.en_avant?"Oui":"Non"," "))},dependencies:[P],styles:[".articlefull-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;border:1px solid #ccc;padding:16px;margin:16px auto;font-family:Arial,sans-serif;max-width:800px;box-sizing:border-box}.articlefull-image[_ngcontent-%COMP%]{flex:1 1 40%;max-width:40%;padding:16px;box-sizing:border-box}.articlefull-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block;border-radius:4px;margin-bottom:16px}.articlefull-details[_ngcontent-%COMP%]{flex:1 1 60%;max-width:60%;padding:16px;box-sizing:border-box;font-size:14px;line-height:1.4}.articlefull-title[_ngcontent-%COMP%]{margin-top:0;margin-bottom:8px;font-size:24px}.status-badge[_ngcontent-%COMP%]{display:inline-block;padding:2px 6px;border:1px solid #666;border-radius:4px;color:#666;font-size:12px}.status-badge.active[_ngcontent-%COMP%]{border-color:green;color:green}@media (max-width: 600px){.articlefull-image[_ngcontent-%COMP%], .articlefull-details[_ngcontent-%COMP%]{max-width:100%;flex:1 1 100%;padding:8px}.articlefull-title[_ngcontent-%COMP%]{font-size:20px}}"]})};var ee=[{path:"",component:M},{path:"categorie/:id",component:S},{path:"search/:query",component:O},{path:"article/:id",component:A}],V=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=k({type:r});static \u0275inj=j({imports:[F,E.forChild(ee),E,F]})};export{V as FrontPageModule};
