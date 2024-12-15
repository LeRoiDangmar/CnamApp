import{a as P,b as m,c as F,d as te,e as re,f as ne,g as oe,h as ie,i as ae,j as de,k as se,l as ce,m as me,n as le}from"./chunk-KYZQ5IBF.js";import{Ba as f,Da as O,E as X,Ea as L,F as A,Fa as J,H as q,Ma as H,Na as Q,O as V,Oa as U,P as D,Pa as Y,Ra as Z,Sa as N,X as B,Z as d,_,ba as C,ca as R,cb as ee,ea as y,ga as c,i as j,ka as s,l as S,ma as i,na as n,oa as l,pa as G,qa as h,ra as p,sa as a,ta as M,va as $,wa as K,xa as W,ya as z}from"./chunk-JCWXOCNG.js";var b=class t{constructor(r){this.platformId=r;let e=[];if(N(this.platformId)){let o=localStorage.getItem(this.storageKey);e=o?JSON.parse(o):[]}this.cardsSubject=new j(e)}storageKey="cards";cardsSubject;getCards(){return this.cardsSubject.asObservable()}addCard(r){let o=[...this.cardsSubject.value,r];return this.cardsSubject.next(o),this.updateLocalStorage(o),S(r)}updateCard(r,e){let o=this.cardsSubject.value;return o[r]=e,this.cardsSubject.next([...o]),this.updateLocalStorage(o),S(e)}deleteCard(r){let e=this.cardsSubject.value;return e.splice(r,1),this.cardsSubject.next([...e]),this.updateLocalStorage(e),S(!0)}updateLocalStorage(r){N(this.platformId)&&localStorage.setItem(this.storageKey,JSON.stringify(r))}static \u0275fac=function(e){return new(e||t)(q(B))};static \u0275prov=X({token:t,factory:t.\u0275fac,providedIn:"root"})};var x=t=>({"is-invalid":t});function ge(t,r){t&1&&(i(0,"div"),a(1,"Le nom de la carte est requis."),n())}function ve(t,r){t&1&&(i(0,"div"),a(1," Le nom de la carte doit contenir au moins 3 caract\xE8res. "),n())}function _e(t,r){if(t&1&&(i(0,"div",18),c(1,ge,2,0,"div",19)(2,ve,2,0,"div",19),n()),t&2){let e=p();d(),s("ngIf",e.nomCarte.hasError("required")),d(),s("ngIf",e.nomCarte.hasError("minlength"))}}function he(t,r){t&1&&(i(0,"div"),a(1,"Le code de la carte est requis."),n())}function xe(t,r){t&1&&(i(0,"div"),a(1,"Le code de la carte doit contenir 16 chiffres."),n())}function Se(t,r){if(t&1&&(i(0,"div",18),c(1,he,2,0,"div",19)(2,xe,2,0,"div",19),n()),t&2){let e=p();d(),s("ngIf",e.codeCarte.hasError("required")),d(),s("ngIf",e.codeCarte.hasError("pattern"))}}function ye(t,r){t&1&&(i(0,"div"),a(1,"Le CCV est requis."),n())}function Me(t,r){t&1&&(i(0,"div"),a(1,"Le CCV doit contenir 3 ou 4 chiffres."),n())}function Oe(t,r){if(t&1&&(i(0,"div",18),c(1,ye,2,0,"div",19)(2,Me,2,0,"div",19),n()),t&2){let e=p();d(),s("ngIf",e.ccv.hasError("required")),d(),s("ngIf",e.ccv.hasError("pattern"))}}function Pe(t,r){t&1&&(i(0,"div"),a(1,"Le mois est requis."),n())}function Fe(t,r){t&1&&(i(0,"div"),a(1," Le mois doit \xEAtre entre 1 et 12. "),n())}function Ee(t,r){if(t&1&&(i(0,"div",18),c(1,Pe,2,0,"div",19)(2,Fe,2,0,"div",19),n()),t&2){let e=p();d(),s("ngIf",e.mois.hasError("required")),d(),s("ngIf",e.mois.hasError("min")||e.mois.hasError("max"))}}function Ie(t,r){t&1&&(i(0,"div"),a(1,"L'ann\xE9e est requise."),n())}function we(t,r){t&1&&(i(0,"div"),a(1,"L'ann\xE9e doit contenir 4 chiffres."),n())}function Te(t,r){if(t&1&&(i(0,"div",18),c(1,Ie,2,0,"div",19)(2,we,2,0,"div",19),n()),t&2){let e=p();d(),s("ngIf",e.annee.hasError("required")),d(),s("ngIf",e.annee.hasError("pattern"))}}var E=class t{constructor(r,e){this.fb=r;this.cardsService=e;this.carteForm=this.fb.group({nomCarte:["",[m.required,m.minLength(3)]],codeCarte:["",[m.required,m.pattern("^[0-9]{16}$")]],ccv:["",[m.required,m.pattern("^[0-9]{3,4}$")]],mois:["",[m.required,m.min(1),m.max(12)]],annee:["",[m.required,m.pattern("^[0-9]{4}$")]]})}carteForm;submitted=!1;ngOnInit(){}get nomCarte(){return this.carteForm.get("nomCarte")}get codeCarte(){return this.carteForm.get("codeCarte")}get ccv(){return this.carteForm.get("ccv")}get mois(){return this.carteForm.get("mois")}get annee(){return this.carteForm.get("annee")}onSubmit(){this.submitted=!0,!this.carteForm.invalid&&this.cardsService.addCard(this.carteForm.value).subscribe(r=>{console.log("Carte ajout\xE9e avec succ\xE8s",r),this.onReset()},r=>{console.error("Erreur lors de l'ajout de la carte",r)})}onReset(){this.submitted=!1,this.carteForm.reset()}static \u0275fac=function(e){return new(e||t)(_(ce),_(b))};static \u0275cmp=C({type:t,selectors:[["app-cards-form"]],standalone:!1,decls:32,vars:21,consts:[[1,"container","mt-5"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","nomCarte"],["type","text","id","nomCarte","formControlName","nomCarte","placeholder","Entrez le nom de la carte",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","codeCarte"],["type","text","id","codeCarte","formControlName","codeCarte","mask","0000 0000 0000 0000","placeholder","XXXX XXXX XXXX XXXX",1,"form-control",3,"ngClass"],["for","ccv"],["type","password","id","ccv","formControlName","ccv","mask","0000","placeholder","XXX ou XXXX",1,"form-control",3,"ngClass"],[1,"form-row"],[1,"form-group","col-md-6"],["for","mois"],["type","number","id","mois","formControlName","mois","placeholder","MM","min","1","max","12",1,"form-control",3,"ngClass"],["for","annee"],["type","number","id","annee","formControlName","annee","placeholder","AAAA",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-secondary","ml-2",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"form",1),h("ngSubmit",function(){return o.onSubmit()}),i(2,"div",2)(3,"label",3),a(4,"Nom de la Carte"),n(),l(5,"input",4),c(6,_e,3,2,"div",5),n(),i(7,"div",2)(8,"label",6),a(9,"Code de la Carte"),n(),l(10,"input",7),c(11,Se,3,2,"div",5),n(),i(12,"div",2)(13,"label",8),a(14,"CCV"),n(),l(15,"input",9),c(16,Oe,3,2,"div",5),n(),i(17,"div",10)(18,"div",11)(19,"label",12),a(20,"Mois"),n(),l(21,"input",13),c(22,Ee,3,2,"div",5),n(),i(23,"div",11)(24,"label",14),a(25,"Ann\xE9e"),n(),l(26,"input",15),c(27,Te,3,2,"div",5),n()(),i(28,"button",16),a(29,"Soumettre"),n(),i(30,"button",17),h("click",function(){return o.onReset()}),a(31,"R\xE9initialiser"),n()()()),e&2&&(d(),s("formGroup",o.carteForm),d(4),s("ngClass",f(11,x,o.submitted&&o.nomCarte.invalid)),d(),s("ngIf",o.submitted&&o.nomCarte.errors),d(4),s("ngClass",f(13,x,o.submitted&&o.codeCarte.invalid)),d(),s("ngIf",o.submitted&&o.codeCarte.errors),d(4),s("ngClass",f(15,x,o.submitted&&o.ccv.invalid)),d(),s("ngIf",o.submitted&&o.ccv.errors),d(5),s("ngClass",f(17,x,o.submitted&&o.mois.invalid)),d(),s("ngIf",o.submitted&&o.mois.errors),d(4),s("ngClass",f(19,x,o.submitted&&o.annee.invalid)),d(),s("ngIf",o.submitted&&o.annee.errors))},dependencies:[H,U,ne,P,oe,F,te,se,de,ie,ae],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:20px;background-color:#f8f9fa;border-radius:8px;box-shadow:0 4px 6px #0000001a}label[_ngcontent-%COMP%]{font-weight:600;color:#343a40}input.form-control[_ngcontent-%COMP%]{border-radius:4px;transition:border-color .3s}input.form-control[_ngcontent-%COMP%]:focus{border-color:#007bff;box-shadow:none}.invalid-feedback[_ngcontent-%COMP%]{display:block;color:#dc3545;margin-top:5px;font-size:.875em}button.btn[_ngcontent-%COMP%]{min-width:100px;transition:background-color .3s,border-color .3s}button.btn-primary[_ngcontent-%COMP%]{background-color:#007bff;border-color:#007bff}button.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0056b3;border-color:#004085}button.btn-secondary[_ngcontent-%COMP%]{background-color:#6c757d;border-color:#6c757d}button.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#5a6268;border-color:#545b62}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:10px}@media (max-width: 576px){form[_ngcontent-%COMP%]{padding:15px}}"]})};var I=class t{transform(r,e){if(!r||!e)return r||[];let o=e.toLowerCase();return r.filter(u=>u.nomCarte.toLowerCase().includes(o)||u.codeCarte.includes(e))}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=y({name:"filterCards",type:t,pure:!0,standalone:!1})};var w=class t{transform(r){return r?r.replace(/(\d{4})(?=\d)/g,"$1 "):""}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=y({name:"formatCardCode",type:t,pure:!0,standalone:!1})};function je(t,r){if(t&1){let e=G();i(0,"tr")(1,"td"),a(2),n(),i(3,"td"),a(4),O(5,"formatCardCode"),n(),i(6,"td"),a(7),n(),i(8,"td"),a(9),n(),i(10,"td")(11,"button",5),h("click",function(){let u=V(e).index,v=p();return D(v.deleteCard(u))}),a(12,"Supprimer"),n()()()}if(t&2){let e=r.$implicit;d(2),M(e.nomCarte),d(2),M(L(5,5,e.codeCarte)),d(3),M(e.ccv),d(2),$("",e.mois,"/",e.annee,"")}}var T=class t{constructor(r){this.cardsService=r;this.cards$=this.cardsService.getCards()}cards$;searchTerm="";ngOnInit(){}deleteCard(r){this.cardsService.deleteCard(r).subscribe(e=>{e?console.log("Carte supprim\xE9e avec succ\xE8s"):console.error("Erreur lors de la suppression de la carte")})}static \u0275fac=function(e){return new(e||t)(_(b))};static \u0275cmp=C({type:t,selectors:[["app-cards-list"]],standalone:!1,decls:22,vars:7,consts:[[1,"container","mt-5"],[1,"form-group"],["type","text","placeholder","Rechercher par nom ou code de la carte",1,"form-control",3,"ngModelChange","ngModel"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"h2"),a(2,"Liste des Cartes"),n(),i(3,"div",1)(4,"input",2),z("ngModelChange",function(v){return W(o.searchTerm,v)||(o.searchTerm=v),v}),n()(),i(5,"table",3)(6,"thead")(7,"tr")(8,"th"),a(9,"Nom de la Carte"),n(),i(10,"th"),a(11,"Code de la Carte"),n(),i(12,"th"),a(13,"CCV"),n(),i(14,"th"),a(15,"Expiration"),n(),i(16,"th"),a(17,"Actions"),n()()(),i(18,"tbody"),c(19,je,13,7,"tr",4),O(20,"async"),O(21,"filterCards"),n()()()),e&2&&(d(4),K("ngModel",o.searchTerm),d(15),s("ngForOf",J(21,4,L(20,2,o.cards$),o.searchTerm)))},dependencies:[Q,P,F,re,Y,I,w],styles:[".container[_ngcontent-%COMP%]{padding:20px;background-color:#fff;border-radius:8px;box-shadow:0 4px 6px #0000001a}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;color:#343a40}.form-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{border-radius:4px;transition:border-color .3s}.form-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:focus{border-color:#28a745;box-shadow:none}table.table[_ngcontent-%COMP%]{width:100%;margin-top:20px;border-collapse:separate;border-spacing:0 10px}table.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;text-align:center;padding:10px;border-bottom:none;border-radius:8px 8px 0 0}table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f9fa;border-radius:8px;box-shadow:0 2px 4px #0000000d;transition:background-color .3s}table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#e2e6ea}table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding:12px;vertical-align:middle}button.btn-danger[_ngcontent-%COMP%]{background-color:#dc3545;border-color:#dc3545;transition:background-color .3s,border-color .3s}button.btn-danger[_ngcontent-%COMP%]:hover{background-color:#c82333;border-color:#bd2130}@media (max-width: 768px){table.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{display:none}table.table[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:block;width:100%}table.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{margin-bottom:15px}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:right;padding-left:50%;position:relative}table.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);position:absolute;left:15px;width:45%;padding-right:10px;white-space:nowrap;text-align:left;font-weight:700}}"]})};var k=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["app-cards"]],standalone:!1,decls:4,vars:0,consts:[[1,"container"]],template:function(e,o){e&1&&(i(0,"div",0),l(1,"app-cards-form")(2,"hr")(3,"app-cards-list"),n())},dependencies:[E,T],encapsulation:2})};var Ae=[{path:"",component:k}],Ce=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=R({type:t});static \u0275inj=A({imports:[Z,ee.forChild(Ae),le,me]})};export{Ce as CardsModule};
