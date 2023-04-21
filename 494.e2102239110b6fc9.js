"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[494],{9532:(Ct,Z,i)=>{i.r(Z),i.d(Z,{CrmModule:()=>vt});var d=i(5357),Q=i(4576),t=i(5e3);let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ath-crm"]],decls:1,vars:0,template:function(n,s){1&n&&t._UZ(0,"router-outlet")},dependencies:[d.lC],encapsulation:2}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["crm-customers"]],decls:1,vars:0,template:function(n,s){1&n&&t._UZ(0,"router-outlet")},dependencies:[d.lC],encapsulation:2}),e})();var y=i(8505),J=i(5698),v=i(3900),M=i(7489),b=i(2098),R=i(5714),x=i(9784),m=i(3921);const N=m.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateClientStatus(updateEntityStatusInput: $updateEntityStatusInput){
            ok
            message
        }
    }
`,P=(m.Ps`
    mutation RemoveClient($removeClientId: String!) {
        removeClient(id: $removeClientId) {
            ok
            message
        }
    }
`,m.Ps`
    query FindAllClients($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllClients(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            clients {
                id
                active
                avatar
                name
                lastname1
                lastname2
                fullname
                username
                email
                phone
                gender
                idNumber
                birthday
                age
                address
                state
                city
                town
                country
                zip
            }
        }
    }
`);m.Ps`
    query FindAllClientsByMerchant($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllClientsByMerchant(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            clients {
                id
                active
                avatar
                name
                lastname1
                lastname2
                fullname
                username
                email
                phone
                gender
                idNumber
                birthday
                age
                address
                state
                city
                town
                country
                zip
            }
        }
    }
`,m.Ps`
    query FindClientById($findClientByIdId: String!) {
        findClientById(id: $findClientByIdId) {
            ok
            message

            client {
                id
                active
                avatar
                name
                lastname1
                lastname2
                fullname
                username
                email
                phone
                gender
                idNumber
                birthday
                age
                address
                state
                city
                town
                country
                zip

            }
        }
    }
`;var u=i(5094);const T=e=>e.customers,A=((0,u.P1)(T,e=>e.customer),(0,u.P1)(T,e=>e.customers));var I=i(7261);let S=(()=>{class e{constructor(n,s,r){this.apolloProvider=n,this._snackBar=s,this.store=r,this._apollo=this.apolloProvider.use("AES")}getCustomers(n=1,s=10,r="name",a="asc",c=""){return this._apollo.query({query:P,errorPolicy:"all",variables:{offset:s*(n-1),limit:s,sort:r,order:a,search:c}}).pipe((0,y.b)(({errors:l,data:h})=>{if(l){let _="";l.forEach(xt=>_+=`\n ${xt.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:_,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,b.Pb)({customers:h.findAllClients.clients})),this.store.dispatch((0,R.Jr)({pagination:h.findAllClients.pagination}))}))}updateCustomerStatus(n){return this.store.select(A).pipe((0,J.q)(1),(0,v.w)(s=>this._apollo.mutate({mutation:N,variables:{updateEntityStatusInput:n},errorPolicy:"all"}).pipe((0,y.b)(({errors:r})=>{if(r){let l="";r.forEach(h=>l+=`\n ${h.message}.`),this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const a=(0,M.cloneDeep)(s);a[s.findIndex(l=>l.id===n.id)].active=n.active,this.store.dispatch((0,b.Pb)({customers:a}))}))))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(m._M),t.LFG(I.ux),t.LFG(u.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),z=(()=>{class e{constructor(n){this._customersService=n}resolve(n,s){return this._customersService.getCustomers()}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(S))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=i(3075),U=i(6087),C=i(4847),O=i(9646),w=i(7579),Y=i(6451),p=i(2722),j=i(8372),L=i(4004),q=i(6428),G=i(8288),D=i(1927),f=i(9808),H=i(7423),F=i(5245),E=i(7322),V=i(8833),W=i(773),X=i(2368),$=i(7238);const K=["htmlOrderList"];function tt(e,o){if(1&e&&t._UZ(0,"img",43),2&e){const n=t.oxw().$implicit;t.Q6J("alt","customer image")("src",n.avatar,t.LSH)}}function et(e,o){1&e&&(t.TgZ(0,"div",44),t._uU(1," SIN IMAGEN "),t.qZA())}function nt(e,o){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",45),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","mat_outline:male"))}function st(e,o){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",46),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","mat_outline:female"))}function it(e,o){1&e&&(t.ynx(0),t._UZ(1,"mat-icon",47),t.BQk()),2&e&&(t.xp6(1),t.Q6J("svgIcon","mat_outline:transgender"))}function ot(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-slide-toggle",48),t.NdJ("change",function(r){t.CHM(n);const a=t.oxw().$implicit,c=t.oxw(4);return t.KtG(c.updateCustomerStatus(r,a,c.i))}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("checked",n.active)("color","primary")}}function rt(e,o){1&e&&(t.ynx(0),t._UZ(1,"mat-spinner",49),t.BQk()),2&e&&(t.xp6(1),t.Q6J("diameter",20)("color","primary"))}function at(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",31)(2,"div",32)(3,"div",33),t.YNc(4,tt,1,2,"img",34),t.YNc(5,et,2,0,"div",35),t.qZA()(),t.TgZ(6,"div",36),t._uU(7),t.qZA(),t.TgZ(8,"div",37),t._uU(9),t.qZA(),t.TgZ(10,"div",38),t._uU(11),t.qZA(),t.TgZ(12,"div",25),t.YNc(13,nt,2,1,"ng-container",17),t.YNc(14,st,2,1,"ng-container",17),t.YNc(15,it,2,1,"ng-container",17),t.qZA(),t.TgZ(16,"div",26),t._uU(17),t.qZA(),t.TgZ(18,"div",39),t.YNc(19,ot,2,2,"ng-container",17),t.YNc(20,rt,2,2,"ng-container",17),t.qZA(),t.TgZ(21,"div",40)(22,"button",41),t._UZ(23,"mat-icon",42),t.qZA()()(),t.BQk()),2&e){const n=o.$implicit,s=t.oxw(4);t.xp6(4),t.Q6J("ngIf",n.avatar),t.xp6(1),t.Q6J("ngIf",!n.avatar),t.xp6(2),t.hij(" ",n.fullname," "),t.xp6(2),t.hij(" ",n.email," "),t.xp6(2),t.hij(" ",n.phone," "),t.xp6(2),t.Q6J("ngIf","masculino"===n.gender),t.xp6(1),t.Q6J("ngIf","femenino"===n.gender),t.xp6(1),t.Q6J("ngIf","no binario"===n.gender),t.xp6(2),t.hij(" ",n.idNumber," "),t.xp6(2),t.Q6J("ngIf",!(s.isSlideLoading&&s.selectedSlide===s.i)),t.xp6(1),t.Q6J("ngIf",s.isSlideLoading&&s.selectedSlide===s.i),t.xp6(3),t.Q6J("svgIcon","mat_solid:visibility")}}function ct(e,o){if(1&e&&(t.ynx(0),t.YNc(1,at,24,12,"ng-container",30),t.BQk()),2&e){const n=o.ngIf,s=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",n)("ngForTrackBy",s.trackByFn)}}const lt=function(e){return{"pointer-events-none":e}},mt=function(){return[5,10,25,100]};function dt(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",20)(2,"div",21),t._UZ(3,"div"),t.TgZ(4,"div",22),t._uU(5," Nombre "),t.qZA(),t.TgZ(6,"div",23),t._uU(7," Correo electr\xf3nico "),t.qZA(),t.TgZ(8,"div",24),t._uU(9," Celular "),t.qZA(),t.TgZ(10,"div",25),t._uU(11," G\xe9nero "),t.qZA(),t.TgZ(12,"div",26),t._uU(13," Identificaci\xf3n "),t.qZA(),t.TgZ(14,"div",27),t._uU(15," Estado "),t.qZA(),t.TgZ(16,"div",28),t._uU(17," Acciones "),t.qZA()(),t.YNc(18,ct,2,2,"ng-container",17),t.ALo(19,"async"),t.qZA(),t._UZ(20,"mat-paginator",29),t.BQk()),2&e){const n=t.oxw(2);t.xp6(4),t.Q6J("mat-sort-header","name"),t.xp6(14),t.Q6J("ngIf",t.lcZ(19,8,n.customers$)),t.xp6(2),t.Q6J("ngClass",t.VKq(10,lt,n.isLoading))("length",n.pagination.length)("page",n.pagination.page)("pageSize",n.pagination.size)("pageSizeOptions",t.DdM(12,mt))("showFirstLastButtons",!0)}}function ut(e,o){if(1&e&&(t.ynx(0),t.YNc(1,dt,21,13,"ng-container",19),t.BQk()),2&e){const n=o.ngIf;t.oxw();const s=t.MAs(27);t.xp6(1),t.Q6J("ngIf",n.length>0)("ngIfElse",s)}}function gt(e,o){1&e&&(t.TgZ(0,"div",50),t._uU(1,"\xa1No se ha registrado ning\xfan cliente!"),t.qZA())}let pt=(()=>{class e{constructor(n,s,r,a,c){this._changeDetectorRef=n,this._customersService=s,this._fileSaverService=r,this._snackBar=a,this.store=c,this.isLoading=!1,this.customers=[],this.customers$=(0,O.of)([]),this.searchInputControl=new g.p4,this.isSlideLoading=!1,this.selectedSlide=null,this._unsubscribeAll=new w.x}ngOnInit(){this.store.select(q.B).pipe((0,p.R)(this._unsubscribeAll)).subscribe(n=>{this.pagination=n,this._changeDetectorRef.markForCheck()}),this.customers$=this.store.select(A),this.customers$.subscribe(n=>this.customers=n),this.searchInputControl.valueChanges.pipe((0,p.R)(this._unsubscribeAll),(0,j.b)(300),(0,v.w)(n=>(this.isLoading=!0,this._customersService.getCustomers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,n))),(0,L.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"name",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,p.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0}),(0,Y.T)(this._sort.sortChange,this._paginator.page).pipe((0,v.w)(()=>(this.isLoading=!0,this._customersService.getCustomers(this._paginator.pageIndex+1,this._paginator.pageSize,this._sort.active,this._sort.direction,this.searchInputControl.value))),(0,L.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}updateCustomerStatus(n,s,r){this.isSlideLoading=!0,this.selectedSlide=r,this._customersService.updateCustomerStatus({id:s.id,active:n.checked}).subscribe(({data:a})=>{this._snackBar.openFromComponent(x.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:a.updateClientStatus.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.isSlideLoading=!1,this.selectedSlide=null,this._changeDetectorRef.markForCheck()})}exportAsExcelFile(){this._fileSaverService.exportAsExcelFile(this.customers,"customers")}exportAsCsvFile(){this._fileSaverService.exportAsCsvFile(this.customers,"customers")}trackByFn(n,s){return s.id||n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO),t.Y36(S),t.Y36(D.m),t.Y36(I.ux),t.Y36(u.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["crm-customers-list"]],viewQuery:function(n,s){if(1&n&&(t.Gf(K,5),t.Gf(U.NW,5),t.Gf(C.YE,5)),2&n){let r;t.iGM(r=t.CRH())&&(s.htmlOrderList=r.first),t.iGM(r=t.CRH())&&(s._paginator=r.first),t.iGM(r=t.CRH())&&(s._sort=r.first)}},decls:28,vars:9,consts:[[1,"flex","flex-col","flex-auto","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","px-6","py-8","border-b","sm:flex-row","flex-0","sm:items-center","sm:justify-between","md:px-8"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],["routerLink","/desktop",1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],["routerLink","/crm/panels",1,"ml-1","text-primary-500"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","font-extrabold","leading-7","tracking-tight","truncate","md:text-4xl","sm:leading-10"],[1,"flex","items-center","mt-6","shrink-0","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[4,"ngIf"],["noCustomers",""],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"sticky","top-0","z-10","grid","gap-4","px-6","py-4","font-semibold","shadow","customers-grid","md:px-8","text-md","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[1,"",3,"mat-sort-header"],[1,"hidden","sm:block"],[1,"hidden","md:block"],[1,"hidden","text-center","lg:block"],[1,"hidden","lg:block"],[1,"hidden","text-center","md:block"],[1,"text-center"],[1,"z-10","border-b","sm:absolute","sm:inset-x-0","sm:bottom-0","sm:border-t","sm:border-b-0","bg-gray-50","dark:bg-transparent",3,"ngClass","length","page","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid","items-center","gap-4","px-6","py-3","border-b","customers-grid","md:px-8"],[1,"flex","items-center"],[1,"relative","flex","items-center","justify-center","w-12","h-12","mr-6","overflow-hidden","border","rounded","flex-0"],["class","w-8",3,"alt","src",4,"ngIf"],["class","flex items-center justify-center w-full h-full text-xs font-semibold leading-none text-center uppercase",4,"ngIf"],[1,"truncate"],[1,"hidden","truncate","sm:block"],[1,"hidden","truncate","md:block"],[1,"flex","justify-center"],[1,"flex","flex-col","items-center","justify-center","gap-1","md:flex-row"],["mat-stroked-button","","matTooltip","Ver detalles",1,"px-2","leading-6","min-w-10","min-h-7","h-7"],[1,"icon-size-5",3,"svgIcon"],[1,"w-8",3,"alt","src"],[1,"flex","items-center","justify-center","w-full","h-full","text-xs","font-semibold","leading-none","text-center","uppercase"],["matTooltip","Masculino",1,"text-blue-400","icon-size-6",3,"svgIcon"],["matTooltip","Femenino",1,"text-pink-400","icon-size-6",3,"svgIcon"],["matTooltip","No Binario",1,"text-gray-400","icon-size-6",3,"svgIcon"],[3,"checked","color","change"],[3,"diameter","color"],[1,"p-8","text-4xl","font-semibold","tracking-tight","text-center","border-t","sm:p-16"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t._uU(6,"Inicio"),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"mat-icon",6),t.TgZ(9,"a",7),t._uU(10,"CRM"),t.qZA()(),t.TgZ(11,"div",5),t._UZ(12,"mat-icon",6),t.TgZ(13,"a",8),t._uU(14,"Clientes"),t.qZA()()(),t.TgZ(15,"div",9)(16,"h2",10),t._uU(17," Clientes "),t.qZA()()(),t.TgZ(18,"div",11)(19,"mat-form-field",12),t._UZ(20,"mat-icon",13)(21,"input",14),t.qZA()()(),t.TgZ(22,"div",15)(23,"div",16),t.YNc(24,ut,2,2,"ng-container",17),t.ALo(25,"async"),t.YNc(26,gt,2,0,"ng-template",null,18,t.W1O),t.qZA()()()),2&n&&(t.xp6(8),t.Q6J("svgIcon","mat_solid:chevron_right"),t.xp6(4),t.Q6J("svgIcon","mat_solid:chevron_right"),t.xp6(8),t.Q6J("svgIcon","mat_solid:search"),t.xp6(1),t.Q6J("formControl",s.searchInputControl)("autocomplete","off")("placeholder","Escriba para buscar..."),t.xp6(3),t.Q6J("ngIf",t.lcZ(25,7,s.customers$)))},dependencies:[d.yS,f.mk,f.sg,f.O5,g.Fj,g.JJ,g.oH,H.lW,F.Hw,E.KE,E.qo,V.Nt,U.NW,W.Ou,X.Rr,C.YE,C.nU,$.gM,f.Ov],styles:[".customers-grid{grid-template-columns:48px auto 40px}@media (min-width: 600px){.customers-grid{grid-template-columns:48px auto 112px 72px 72px}}@media (min-width: 960px){.customers-grid{grid-template-columns:48px auto auto 112px 72px 72px}}@media (min-width: 1280px){.customers-grid{grid-template-columns:70px auto auto 112px 96px 96px 72px 72px}}\n"],encapsulation:2,data:{animation:G.L},changeDetection:0}),e})();var ft=i(2451);const ht=[{path:"",pathMatch:"full",redirectTo:"panels"},{path:"panels",component:k,children:[{path:"",component:(()=>{class e{constructor(n){this.store=n,this.stats$=null,this.stats=null,this._unsubscribeAll=new w.x}ngOnInit(){this.stats$=this.store.select(ft.qo),this.stats$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(n=>{this.stats=n})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["crm-panel"]],decls:65,vars:4,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-wrap","w-full","max-w-screen-xl","p-6","mx-auto","md:p-8"],[1,"flex","items-center","justify-between","w-full"],[1,"text-3xl","font-semibold","leading-8","tracking-tight"],[1,"font-medium","tracking-tight","text-secondary"],[1,"grid","w-full","grid-cols-1","gap-8","mt-6","sm:grid-cols-2","lg:grid-cols-4","md:mt-8"],["routerLink","/modules/crm/panels/customers",1,"flex","flex-col","flex-auto","p-6","overflow-hidden","transition-shadow","duration-100","ease-linear","shadow","cursor-pointer","bg-card","rounded-2xl","hover:shadow-lg"],[1,"flex","items-start","justify-between"],[1,"text-lg","font-medium","leading-6","tracking-tight","truncate"],[1,"ml-2"],[1,"h-6","px-2","rounded-lg","min-h-6","bg-yellow-100"],[1,"font-mono","text-lg","font-medium","text-yellow-900"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","transition-shadow","duration-100","ease-linear","shadow","cursor-pointer","bg-card","rounded-2xl","hover:shadow-lg"],[1,"w-full","mt-12"],[1,"text-2xl","font-semibold","leading-6","tracking-tight"],[1,"flex","flex-col","flex-auto","p-6","overflow-hidden","shadow","bg-card","rounded-2xl"],[1,"flex","items-start","justify-start"],[1,"mr-3",3,"svgIcon"],[1,"flex","flex-col","mt-5"],["routerLink","/modules/crm/panels/customers",1,"flex","items-center","justify-start","p-1.5","cursor-pointer","rounded-lg","hover:bg-hover"],[1,"flex","items-center","justify-center","w-6","h-6","mr-3","rounded-lg","bg-primary-100"],[1,"w-1","h-1","rounded-full","bg-primary-900"],[1,"text-lg","leading-6","tracking-tight"],["matTooltip","En desarrollo",1,"flex","items-center","justify-start","p-1.5","cursor-not-allowed","rounded-lg","hover:bg-hover"],[1,"flex","items-center","justify-center","w-6","h-6","mr-3","rounded-lg","bg-slate-100"],[1,"w-1","h-1","rounded-full","bg-slate-900"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3),t._uU(5,"CRM"),t.qZA(),t.TgZ(6,"div",4),t._uU(7," Este m\xf3dulo est\xe1 dedicado a todos los componentes de la gesti\xf3n e interacci\xf3n con los clientes. "),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8),t._uU(12,"Clientes"),t.qZA(),t.TgZ(13,"div",9)(14,"div",10)(15,"span",11),t._uU(16),t.qZA()()()()(),t.TgZ(17,"div",6)(18,"div",7)(19,"div",8),t._uU(20,"Subscriptores"),t.qZA(),t.TgZ(21,"div",9)(22,"div",10)(23,"span",11),t._uU(24),t.qZA()()()()(),t.TgZ(25,"div",12)(26,"div",7)(27,"div",8),t._uU(28,"Estad\xedsticas"),t.qZA()()()(),t.TgZ(29,"div",13)(30,"div",14),t._uU(31,"Reportes y Listados"),t.qZA()(),t.TgZ(32,"div",5)(33,"div",15)(34,"div",16),t._UZ(35,"mat-icon",17),t.TgZ(36,"div",8),t._uU(37,"Ventas"),t.qZA()(),t.TgZ(38,"div",18)(39,"div",19)(40,"div",20),t._UZ(41,"div",21),t.qZA(),t.TgZ(42,"div",22),t._uU(43,"Clientes"),t.qZA()(),t.TgZ(44,"div",23)(45,"div",24),t._UZ(46,"div",25),t.qZA(),t.TgZ(47,"div",22),t._uU(48,"Reclamaciones"),t.qZA()()()(),t.TgZ(49,"div",15)(50,"div",16),t._UZ(51,"mat-icon",17),t.TgZ(52,"div",8),t._uU(53,"Comunicaciones"),t.qZA()(),t.TgZ(54,"div",18)(55,"div",23)(56,"div",24),t._UZ(57,"div",25),t.qZA(),t.TgZ(58,"div",22),t._uU(59,"Env\xedo de correo"),t.qZA()(),t.TgZ(60,"div",23)(61,"div",24),t._UZ(62,"div",25),t.qZA(),t.TgZ(63,"div",22),t._uU(64,"Telegram"),t.qZA()()()()()()()),2&n&&(t.xp6(16),t.Oqu(s.stats.entitiesLength.clientsQty),t.xp6(8),t.Oqu(s.stats.entitiesLength.subscribersQty),t.xp6(11),t.Q6J("svgIcon","mat_solid:description"),t.xp6(16),t.Q6J("svgIcon","mat_solid:description"))},dependencies:[d.rH,F.Hw,$.gM],encapsulation:2}),e})()},{path:"customers",component:B,children:[{path:"",component:pt,resolve:{customers:z}}]}]}];let vt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(ht),Q.m]}),e})()}}]);