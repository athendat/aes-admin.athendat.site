"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[219],{6219:(mt,f,s)=>{s.r(f),s.d(f,{CrmModule:()=>rt});var c=s(5357),A=s(3881),t=s(5e3);let U=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ath-crm"]],decls:1,vars:0,template:function(n,i){1&n&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),e})(),I=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["crm-customers"]],decls:1,vars:0,template:function(n,i){1&n&&t._UZ(0,"router-outlet")},dependencies:[c.lC],encapsulation:2}),e})();var v=s(520),w=s(8505),L=s(2098),Q=s(5714),F=s(2340),a=s(5094);const S=F.N.API_URL;let x=(()=>{class e{constructor(n,i){this._httpClient=n,this.store=i}getCustomers(n=0,i=10,r="name",g="asc",p=""){const ct=(new v.LE).append("page",n.toString()).append("size",i.toString()).append("sort",r).append("order",g).append("search",p);return this._httpClient.get(`${S}/clients/`,{params:ct}).pipe((0,w.b)(({pagination:at,customers:lt})=>{this.store.dispatch((0,Q.Jr)({pagination:at})),this.store.dispatch((0,L.Pb)({customers:lt}))}))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(v.eN),t.LFG(a.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),J=(()=>{class e{constructor(n){this._customersService=n}resolve(n,i){return this._customersService.getCustomers()}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(x))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=s(3075),h=s(6087),u=s(4847),k=s(9646),C=s(7579),N=s(6451),m=s(2722),Y=s(8372),_=s(3900);const Z=e=>e.customers,R=((0,a.P1)(Z,e=>e.customer),(0,a.P1)(Z,e=>e.customers));var q=s(6428),z=s(8288),B=s(1927),d=s(9808),j=s(7423),b=s(5245),y=s(7322),E=s(7531),T=s(7238);const O=["htmlOrderList"];function M(e,o){if(1&e&&t._UZ(0,"img",43),2&e){const n=t.oxw().$implicit;t.Q6J("alt","customer image")("src",n.imageUrl,t.LSH)}}function G(e,o){1&e&&(t.TgZ(0,"div",44),t._uU(1," SIN IMAGEN "),t.qZA())}function P(e,o){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",45),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","mat_outline:male"))}function $(e,o){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",46),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","mat_outline:female"))}function D(e,o){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",47),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check"))}function H(e,o){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",48),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))}function V(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",31)(2,"div",32)(3,"div",33),t.YNc(4,M,1,2,"img",34),t.YNc(5,G,2,0,"div",35),t.qZA()(),t.TgZ(6,"div",36),t._uU(7),t.qZA(),t.TgZ(8,"div",37),t._uU(9),t.qZA(),t.TgZ(10,"div",38),t._uU(11),t.qZA(),t.TgZ(12,"div",25),t.YNc(13,P,2,1,"ng-container",17),t.YNc(14,$,2,1,"ng-container",17),t.qZA(),t.TgZ(15,"div",26),t._uU(16),t.qZA(),t.TgZ(17,"div",39),t.YNc(18,D,2,1,"ng-container",17),t.YNc(19,H,2,1,"ng-container",17),t.qZA(),t.TgZ(20,"div",40)(21,"button",41),t._UZ(22,"mat-icon",42),t.qZA()()(),t.BQk()),2&e){const n=o.$implicit;t.xp6(4),t.Q6J("ngIf",n.imageUrl),t.xp6(1),t.Q6J("ngIf",!n.imageUrl),t.xp6(2),t.lnq(" ",n.name," ",n.lastname1," ",n.lastname2," "),t.xp6(2),t.hij(" ",n.email," "),t.xp6(2),t.hij(" ",n.cell," "),t.xp6(2),t.Q6J("ngIf","male"===n.gender),t.xp6(1),t.Q6J("ngIf","female"===n.gender),t.xp6(2),t.hij(" ",n.idNumber," "),t.xp6(2),t.Q6J("ngIf",n.active),t.xp6(1),t.Q6J("ngIf",!n.active),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:eye")}}function W(e,o){if(1&e&&(t.ynx(0),t.YNc(1,V,23,13,"ng-container",30),t.BQk()),2&e){const n=o.ngIf,i=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",n)("ngForTrackBy",i.trackByFn)}}const X=function(e){return{"pointer-events-none":e}},K=function(){return[5,10,25,100]};function tt(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",20)(2,"div",21),t._UZ(3,"div"),t.TgZ(4,"div",22),t._uU(5," Nombre "),t.qZA(),t.TgZ(6,"div",23),t._uU(7," Correo electr\xf3nico "),t.qZA(),t.TgZ(8,"div",24),t._uU(9," Celular "),t.qZA(),t.TgZ(10,"div",25),t._uU(11," G\xe9nero "),t.qZA(),t.TgZ(12,"div",26),t._uU(13," Identificaci\xf3n "),t.qZA(),t.TgZ(14,"div",27),t._uU(15," Estado "),t.qZA(),t.TgZ(16,"div",28),t._uU(17," Acciones "),t.qZA()(),t.YNc(18,W,2,2,"ng-container",17),t.ALo(19,"async"),t.qZA(),t._UZ(20,"mat-paginator",29),t.BQk()),2&e){const n=t.oxw(2);t.xp6(4),t.Q6J("mat-sort-header","name"),t.xp6(14),t.Q6J("ngIf",t.lcZ(19,8,n.customers$)),t.xp6(2),t.Q6J("ngClass",t.VKq(10,X,n.isLoading))("length",n.pagination.length)("pageIndex",n.pagination.page)("pageSize",n.pagination.size)("pageSizeOptions",t.DdM(12,K))("showFirstLastButtons",!0)}}function et(e,o){if(1&e&&(t.ynx(0),t.YNc(1,tt,21,13,"ng-container",19),t.BQk()),2&e){const n=o.ngIf;t.oxw();const i=t.MAs(27);t.xp6(1),t.Q6J("ngIf",n.length>0)("ngIfElse",i)}}function nt(e,o){1&e&&(t.TgZ(0,"div",49),t._uU(1,"\xa1No se ha registrado ning\xfan cliente!"),t.qZA())}let ot=(()=>{class e{constructor(n,i,r,g,p){this._changeDetectorRef=n,this._customersService=i,this._fileSaverService=r,this._router=g,this.store=p,this.isLoading=!1,this.customers=[],this.customers$=(0,k.of)([]),this.searchInputControl=new l.p4,this._unsubscribeAll=new C.x}ngOnInit(){this.store.select(q.B).pipe((0,m.R)(this._unsubscribeAll)).subscribe(n=>{this.pagination=n,this._changeDetectorRef.markForCheck()}),this.customers$=this.store.select(R),this.customers$.subscribe(n=>this.customers=n),this.searchInputControl.valueChanges.pipe((0,m.R)(this._unsubscribeAll),(0,Y.b)(900),(0,_.w)(n=>this._customersService.getCustomers(0,10,"orderNo","asc",n))).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,m.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,N.T)(this._sort.sortChange,this._paginator.page).pipe((0,_.w)(()=>this._customersService.getCustomers(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.customers,"customers")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.customers,"customers")}trackByFn(n,i){return i.id||n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO),t.Y36(x),t.Y36(B.m),t.Y36(c.F0),t.Y36(a.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["crm-customers-list"]],viewQuery:function(n,i){if(1&n&&(t.Gf(O,5),t.Gf(h.NW,5),t.Gf(u.YE,5)),2&n){let r;t.iGM(r=t.CRH())&&(i.htmlOrderList=r.first),t.iGM(r=t.CRH())&&(i._paginator=r.first),t.iGM(r=t.CRH())&&(i._sort=r.first)}},decls:28,vars:9,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],["routerLink","/crm/panels",1,"ml-1","text-primary-500"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noCustomers",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","customers-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"",3,"mat-sort-header"],[1,"hidden","sm:block"],[1,"hidden","md:block"],[1,"hidden","text-center","lg:block"],[1,"hidden","lg:block"],[1,"hidden","text-center","md:block"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","customers-grid","md:px-8"],[1,"flex","items-center"],[1,"relative","flex","items-center","justify-center","w-12","h-12","mr-6","overflow-hidden","border","rounded","flex-0"],["class","w-8",3,"alt","src",4,"ngIf"],["class","flex items-center justify-center w-full h-full text-xs font-semibold leading-none text-center uppercase",4,"ngIf"],[1,"truncate"],[1,"hidden","truncate","sm:block"],[1,"hidden","truncate","md:block"],[1,"items-center","hidden","text-center","md:block"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","","matTooltip","Ver detalles",1,"px-2","leading-6","min-w-10","min-h-7","h-7"],[1,"icon-size-5",3,"svgIcon"],[1,"w-8",3,"alt","src"],[1,"flex","items-center","justify-center","w-full","h-full","text-xs","font-semibold","leading-none","text-center","uppercase"],["matTooltip","Masculino",1,"text-blue-400","icon-size-6",3,"svgIcon"],["matTooltip","Femenino",1,"text-pink-400","icon-size-6",3,"svgIcon"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-gray-400","icon-size-5",3,"svgIcon"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t._uU(6,"Inicio"),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"mat-icon",6),t.TgZ(9,"a",7),t._uU(10,"CRM"),t.qZA()(),t.TgZ(11,"div",5),t._UZ(12,"mat-icon",6),t.TgZ(13,"a",8),t._uU(14,"Clientes"),t.qZA()()(),t.TgZ(15,"div",9)(16,"h2",10),t._uU(17," Clientes "),t.qZA()()(),t.TgZ(18,"div",11)(19,"mat-form-field",12),t._UZ(20,"mat-icon",13)(21,"input",14),t.qZA()()(),t.TgZ(22,"div",15)(23,"div",16),t.YNc(24,et,2,2,"ng-container",17),t.ALo(25,"async"),t.YNc(26,nt,2,0,"ng-template",null,18,t.W1O),t.qZA()()()),2&n&&(t.xp6(8),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:chevron-right"),t.xp6(8),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("formControl",i.searchInputControl)("autocomplete","off")("placeholder","Buscar clientes"),t.xp6(3),t.Q6J("ngIf",t.lcZ(25,7,i.customers$)))},dependencies:[c.yS,d.mk,d.sg,d.O5,l.Fj,l.JJ,l.oH,j.lW,b.Hw,y.KE,y.qo,E.Nt,h.NW,u.YE,u.nU,T.gM,d.Ov],styles:[".customers-grid{grid-template-columns:48px auto 40px}@media (min-width: 600px){.customers-grid{grid-template-columns:48px auto 112px 72px 72px}}@media (min-width: 960px){.customers-grid{grid-template-columns:48px auto auto 112px 72px 72px}}@media (min-width: 1280px){.customers-grid{grid-template-columns:70px auto auto 112px 96px 96px 72px 72px}}\n"],encapsulation:2,data:{animation:z.L},changeDetection:0}),e})();var st=s(2451);const it=[{path:"",pathMatch:"full",redirectTo:"panels"},{path:"panels",component:U,resolve:{customers:J},children:[{path:"",component:(()=>{class e{constructor(n){this.store=n,this.stats$=null,this.stats=null,this._unsubscribeAll=new C.x}ngOnInit(){this.stats$=this.store.select(st.qo),this.stats$.pipe((0,m.R)(this._unsubscribeAll)).subscribe(n=>{this.stats=n})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["crm-panel"]],decls:65,vars:4,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","p-6","mx-auto","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","leading-8","tracking-tight"],[1,"font-medium","tracking-tight","text-secondary"],[1,"grid","w-full","grid-cols-1","gap-8","mt-6","sm:grid-cols-2","lg:grid-cols-4","md:mt-8"],["routerLink","/modules/crm/panels/customers",1,"flex","flex-col","flex-auto","p-6","overflow-hidden","transition-shadow","duration-100","ease-linear","shadow","cursor-pointer","bg-card","rounded-2xl","hover:shadow-lg"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"ml-2"],[1,"h-6","px-2","rounded-lg","min-h-6","bg-yellow-100"],[1,"font-mono","text-lg","font-medium","text-yellow-900"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","transition-shadow","duration-100","ease-linear","shadow","cursor-pointer","bg-card","rounded-2xl","hover:shadow-lg"],[1,"w-full","mt-12"],[1,"text-2xl","font-semibold","leading-6","tracking-tight"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","items-start","justify-start"],[1,"mr-3",3,"svgIcon"],[1,"flex","flex-col","mt-5"],["routerLink","/modules/crm/panels/customers",1,"flex","items-center","justify-start","p-1.5","cursor-pointer","rounded-lg","hover:bg-hover"],[1,"flex","items-center","justify-center","w-6","h-6","mr-3","rounded-lg","bg-primary-100"],[1,"w-1","h-1","rounded-full","bg-primary-900"],[1,"text-lg","leading-6","tracking-tight"],["matTooltip","En desarrollo",1,"flex","items-center","justify-start","p-1.5","cursor-not-allowed","rounded-lg","hover:bg-hover"],[1,"flex","items-center","justify-center","w-6","h-6","mr-3","rounded-lg","bg-slate-100"],[1,"w-1","h-1","rounded-full","bg-slate-900"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5,"CRM"),t.qZA(),t.TgZ(6,"div",4),t._uU(7," Este m\xf3dulo est\xe1 dedicado a todos los componentes de la gesti\xf3n e interacci\xf3n con los clientes. "),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8),t._uU(12,"Clientes"),t.qZA(),t.TgZ(13,"div",9)(14,"div",10)(15,"span",11),t._uU(16),t.qZA()()()()(),t.TgZ(17,"div",6)(18,"div",7)(19,"div",8),t._uU(20,"Subscriptores"),t.qZA(),t.TgZ(21,"div",9)(22,"div",10)(23,"span",11),t._uU(24),t.qZA()()()()(),t.TgZ(25,"div",12)(26,"div",7)(27,"div",8),t._uU(28,"Estad\xedsticas"),t.qZA()()()(),t.TgZ(29,"div",13)(30,"div",14),t._uU(31,"Reportes y Listados"),t.qZA()(),t.TgZ(32,"div",5)(33,"div",15)(34,"div",16),t._UZ(35,"mat-icon",17),t.TgZ(36,"div",8),t._uU(37,"Ventas"),t.qZA()(),t.TgZ(38,"div",18)(39,"div",19)(40,"div",20),t._UZ(41,"div",21),t.qZA(),t.TgZ(42,"div",22),t._uU(43,"Clientes"),t.qZA()(),t.TgZ(44,"div",23)(45,"div",24),t._UZ(46,"div",25),t.qZA(),t.TgZ(47,"div",22),t._uU(48,"Reclamaciones"),t.qZA()()()(),t.TgZ(49,"div",15)(50,"div",16),t._UZ(51,"mat-icon",17),t.TgZ(52,"div",8),t._uU(53,"Comunicaciones"),t.qZA()(),t.TgZ(54,"div",18)(55,"div",23)(56,"div",24),t._UZ(57,"div",25),t.qZA(),t.TgZ(58,"div",22),t._uU(59,"Env\xedo de correo"),t.qZA()(),t.TgZ(60,"div",23)(61,"div",24),t._UZ(62,"div",25),t.qZA(),t.TgZ(63,"div",22),t._uU(64,"Telegram"),t.qZA()()()()()()()),2&n&&(t.xp6(16),t.Oqu(i.stats.entitiesLength.clientsQty),t.xp6(8),t.Oqu(i.stats.entitiesLength.subscribersQty),t.xp6(11),t.Q6J("svgIcon","heroicons_outline:document-text"),t.xp6(16),t.Q6J("svgIcon","heroicons_outline:document-text"))},dependencies:[c.rH,b.Hw,T.gM],encapsulation:2}),e})()},{path:"customers",component:I,children:[{path:"",component:ot}]}]}];let rt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(it),A.m]}),e})()}}]);