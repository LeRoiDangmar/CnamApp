import{a as g}from"./chunk-EEF7PYJP.js";import{a as $,g as Q}from"./chunk-GGIDRID7.js";import{h as b,k as Y,n as F}from"./chunk-MR7PT2RQ.js";import{$a as d,Gb as c,Hb as P,Ib as m,Na as C,Qa as a,Qb as T,Ra as s,Rb as q,Tb as B,_ as N,ab as j,fb as u,g as f,mb as l,nb as k,pc as h,qb as o,qc as L,rb as n,sb as p,tc as U,uc as A,vb as z,wb as R}from"./chunk-YGXXMOKD.js";var H=(r,t)=>[r,t],v=class r{constructor(t){this.store=t}article;link="/article";addArticle(){this.store.dispatch(new Q(this.article))}static \u0275fac=function(e){return new(e||r)(s($))};static \u0275cmp=d({type:r,selectors:[["app-article-preview"]],inputs:{article:"article"},standalone:!1,decls:14,vars:12,consts:[[1,"article-card",3,"routerLink"],[1,"article-image"],[3,"src","alt"],[1,"article-content"],[1,"article-title"],[1,"article-price"],[1,"article-rating"],[1,"article-actions"],[1,"btn","btn-outline-secondary",3,"click"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1),p(2,"img",2),n(),o(3,"div",3)(4,"h3",4),c(5),n(),o(6,"p",5),c(7),q(8,"currency"),n(),o(9,"p",6),c(10),n()(),o(11,"div",7)(12,"button",8),z("click",function(G){return G.stopPropagation(),i.addArticle()}),c(13," Ajouter au panier "),n()()()),e&2&&(l("routerLink",T(9,H,i.link,i.article.id)),a(2),l("src",i.article.images[0],C)("alt",i.article.nom),a(3),P(i.article.nom),a(2),m("Prix: ",B(8,6,i.article.prix,"EUR"),""),a(3),m("Note: ",i.article.note," / 5"))},dependencies:[Y,U],styles:[".article-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;overflow:hidden;width:280px;height:320px;display:flex;flex-direction:column;box-shadow:0 2px 8px #0000001a;transition:transform .2s ease-in-out}.article-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px)}.article-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.article-content[_ngcontent-%COMP%]{padding:1rem;flex:1 1 auto}.article-title[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem;font-size:1.2rem;font-weight:600}.article-price[_ngcontent-%COMP%], .article-category[_ngcontent-%COMP%], .article-rating[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem;font-size:.9rem;color:#555}.article-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:.75rem 1rem 1rem;border-top:1px solid #eee}.article-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:.85rem}"]})};function J(r,t){if(r&1&&p(0,"app-article-preview",3),r&2){let e=t.$implicit;l("article",e)}}var y=class r{constructor(t){this.fetcherService=t}subscription=new f;featuredArticles=[];ngOnInit(){this.FeaturedArticles()}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}FeaturedArticles(){let t=this.fetcherService.fetchFeaturedArticles().subscribe({next:e=>{this.featuredArticles=e},error:e=>{console.error("Error fetching categories:",e)}});this.subscription.add(t)}static \u0275fac=function(e){return new(e||r)(s(g))};static \u0275cmp=d({type:r,selectors:[["app-featured"]],standalone:!1,decls:5,vars:1,consts:[[1,"featured-articles-container"],[1,"featured-articles"],[3,"article",4,"ngFor","ngForOf"],[3,"article"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"h2"),c(2,"Voici les articles \xE0 la une"),n(),o(3,"div",1),u(4,J,1,1,"app-article-preview",2),n()()),e&2&&(a(4),l("ngForOf",i.featuredArticles))},dependencies:[h,v],styles:[".featured-articles-container[_ngcontent-%COMP%]{padding:1rem;background:#f9f9f9}.featured-articles-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}.featured-articles[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-items:stretch}.article-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;overflow:hidden;width:280px;display:flex;flex-direction:column;box-shadow:0 2px 8px #0000001a;transition:transform .2s ease-in-out}.article-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px)}.article-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.article-content[_ngcontent-%COMP%]{padding:1rem;flex:1 1 auto}.article-title[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem;font-size:1.2rem;font-weight:600}.article-price[_ngcontent-%COMP%], .article-category[_ngcontent-%COMP%], .article-rating[_ngcontent-%COMP%]{margin:0;margin-bottom:.5rem;font-size:.9rem;color:#555}.article-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:.75rem 1rem 1rem;border-top:1px solid #eee}.article-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:.85rem}"]})};function K(r,t){if(r&1&&p(0,"app-article-preview",3),r&2){let e=t.$implicit;l("article",e)}}var M=class r{constructor(t,e){this.fetcherService=t;this.route=e}categorie=null;subscription=new f;articles=[];ngOnInit(){let t=this.route.paramMap.subscribe(e=>{let i=e.get("id");i!==this.categorie&&(this.categorie=i,this.FetchArticles())});this.subscription.add(t)}ngOnDestroy(){this.subscription.unsubscribe()}FetchArticles(){let t=this.fetcherService.fetchArticleByCategorie(this.categorie||"erreur").subscribe({next:e=>{this.articles=e},error:e=>{console.error("Error fetching articles:",e)}});this.subscription.add(t)}static \u0275fac=function(e){return new(e||r)(s(g),s(b))};static \u0275cmp=d({type:r,selectors:[["app-categorie"]],standalone:!1,decls:3,vars:1,consts:[[1,"articles-container"],[1,"articles"],[3,"article",4,"ngFor","ngForOf"],[3,"article"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1),u(2,K,1,1,"app-article-preview",2),n()()),e&2&&(a(2),l("ngForOf",i.articles))},dependencies:[h,v],styles:[".articles-container[_ngcontent-%COMP%]{padding:1rem;background:#f9f9f9}.articles[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-items:stretch}"]})};function W(r,t){if(r&1&&p(0,"app-article-preview",3),r&2){let e=t.$implicit;l("article",e)}}var S=class r{constructor(t,e){this.fetcherService=t;this.route=e}subscription=new f;articles=[];query="";ngOnInit(){let t=this.route.paramMap.subscribe(e=>{let i=e.get("query");i!==this.query&&i!=null&&(this.query=i,this.FetchArticles())});this.subscription.add(t)}ngOnDestroy(){this.subscription.unsubscribe()}FetchArticles(){let t=this.fetcherService.fetchArticleByQuery(this.query||"").subscribe({next:e=>{this.articles=e},error:e=>{console.error("Error fetching articles:",e)}});this.subscription.add(t)}static \u0275fac=function(e){return new(e||r)(s(g),s(b))};static \u0275cmp=d({type:r,selectors:[["app-search"]],standalone:!1,decls:3,vars:1,consts:[[1,"articles-container"],[1,"articles"],[3,"article",4,"ngFor","ngForOf"],[3,"article"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1),u(2,W,1,1,"app-article-preview",2),n()()),e&2&&(a(2),l("ngForOf",i.articles))},dependencies:[h,v],styles:[".articles-container[_ngcontent-%COMP%]{padding:1rem;background:#f9f9f9}.articles[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;align-items:stretch}"]})};function X(r,t){if(r&1&&(o(0,"div",5),p(1,"img",6),n()),r&2){let e=R();a(),l("src",e.articlefull.images[0],C)("alt",e.articlefull.nom)}}var O=class r{constructor(t,e){this.fetcherService=t;this.route=e}subscription=new f;articlefull={id:"",nom:"",prix:0,note:0,id_categorie:"",en_avant:!1,images:[],poids:0,description:"",dimensions:""};article=null;ngOnInit(){let t=this.route.paramMap.subscribe(e=>{let i=e.get("id");i!==this.article&&(this.article=i,this.FetchArticle())})}FetchArticle(){let t=this.fetcherService.fetchArticleFull(this.article||"").subscribe({next:e=>{this.articlefull=e},error:e=>{console.error("Error fetching articles:",e)}});this.subscription.add(t)}static \u0275fac=function(e){return new(e||r)(s(g),s(b))};static \u0275cmp=d({type:r,selectors:[["app-article"]],standalone:!1,decls:35,vars:11,consts:[[1,"articlefull-container"],["class","articlefull-image",4,"ngIf"],[1,"articlefull-details"],[1,"articlefull-title"],[1,"status-badge"],[1,"articlefull-image"],[3,"src","alt"]],template:function(e,i){e&1&&(o(0,"div",0),u(1,X,2,2,"div",1),o(2,"div",2)(3,"h2",3),c(4),n(),o(5,"p")(6,"strong"),c(7,"Description:"),n(),c(8),n(),o(9,"p")(10,"strong"),c(11,"Prix:"),n(),c(12),n(),o(13,"p")(14,"strong"),c(15,"Dimension:"),n(),c(16),n(),o(17,"p")(18,"strong"),c(19,"Poids:"),n(),c(20),n(),o(21,"p")(22,"strong"),c(23,"Note:"),n(),c(24),n(),o(25,"p")(26,"strong"),c(27,"Cat\xE9gorie ID:"),n(),c(28),n(),o(29,"p")(30,"strong"),c(31,"En Avant:"),n(),o(32,"span",4),c(33),n()(),p(34,"hr"),n()()),e&2&&(a(),l("ngIf",i.articlefull.images&&i.articlefull.images.length),a(3),P(i.articlefull.nom),a(4),m(" ",i.articlefull.description,""),a(4),m(" ",i.articlefull.prix," \u20AC"),a(4),m(" ",i.articlefull.dimensions,""),a(4),m(" ",i.articlefull.poids," kg"),a(4),m(" ",i.articlefull.note," / 5"),a(4),m(" ",i.articlefull.id_categorie,""),a(4),k("active",i.articlefull.en_avant),a(),m(" ",i.articlefull.en_avant?"Oui":"Non"," "))},dependencies:[L],styles:[".articlefull-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;border:1px solid #ccc;padding:16px;margin:16px auto;font-family:Arial,sans-serif;max-width:800px;box-sizing:border-box}.articlefull-image[_ngcontent-%COMP%]{flex:1 1 40%;max-width:40%;padding:16px;box-sizing:border-box}.articlefull-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block;border-radius:4px;margin-bottom:16px}.articlefull-details[_ngcontent-%COMP%]{flex:1 1 60%;max-width:60%;padding:16px;box-sizing:border-box;font-size:14px;line-height:1.4}.articlefull-title[_ngcontent-%COMP%]{margin-top:0;margin-bottom:8px;font-size:24px}.status-badge[_ngcontent-%COMP%]{display:inline-block;padding:2px 6px;border:1px solid #666;border-radius:4px;color:#666;font-size:12px}.status-badge.active[_ngcontent-%COMP%]{border-color:green;color:green}@media (max-width: 600px){.articlefull-image[_ngcontent-%COMP%], .articlefull-details[_ngcontent-%COMP%]{max-width:100%;flex:1 1 100%;padding:8px}.articlefull-title[_ngcontent-%COMP%]{font-size:20px}}"]})};var Z=[{path:"",component:y},{path:"categorie/:id",component:M},{path:"search/:query",component:S},{path:"article/:id",component:O}],V=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=j({type:r});static \u0275inj=N({imports:[A,F.forChild(Z),F,A]})};export{V as FrontPageModule};
