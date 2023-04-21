"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[511],{7231:(F,f,a)=>{a.d(f,{C:()=>_});var d=a(520),x=a(2340),i=a(5e3);const h=x.N.API_URL;let _=(()=>{class l{constructor(c){this._httpClient=c}uploadImage(c,p){const v=new FormData;return v.append("image",p,p.name),this._httpClient.post(`${h}/cloudinary/upload/${c}`,v)}removeImage(c){const p=(new d.LE).set("public_id",c);return this._httpClient.delete(`${h}/cloudinary/remove`,{params:p})}}return l.\u0275fac=function(c){return new(c||l)(i.LFG(d.eN))},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},7511:(F,f,a)=>{a.r(f),a.d(f,{WizardModule:()=>ie});var d=a(5357),x=a(4576),i=a(3075),h=a(9646),_=a(7579),l=a(2722),C=a(7489),c=a(4787),p=a(8288),v=a(4062),Z=a(9784),e=a(5e3),I=a(413),y=a(1683),A=a(7231),U=a(1158),N=a(7261),J=a(5094),z=a(9808),M=a(2494),T=a(508),Q=a(7423),u=a(5615),w=a(5245),g=a(7322),W=a(8833),q=a(773),E=a(4107);const Y=["wizardMerchantNgForm"],D=["logoFileInput"];function S(t,n){if(1&t&&(e.TgZ(0,"fuse-alert",42),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.Q6J("type",r.alert.type)("showIcon",!1),e.xp6(1),e.hij(" ",r.alert.message," ")}}function B(t,n){1&t&&e._uU(0,"Informaci\xf3n general")}function k(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre del negocio es obligatorio. "),e.qZA())}function L(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre del negocio debe contener entre 3 y 40 caracteres. "),e.qZA())}function R(t,n){if(1&t&&(e.TgZ(0,"mat-option",43),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.Q6J("value",r.name),e.xp6(1),e.hij(" ",r.name," ")}}function j(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Debe escoger un sector. "),e.qZA())}function O(t,n){1&t&&e._uU(0,"Domicilio")}function P(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," La direcci\xf3n es obligatoria. "),e.qZA())}function G(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," La direcci\xf3n debe contener entre 3 y 100 caracteres. "),e.qZA())}function $(t,n){if(1&t&&(e.TgZ(0,"mat-option",43),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.Q6J("value",r),e.xp6(1),e.hij(" ",r," ")}}function H(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar una provincia. "),e.qZA())}function K(t,n){if(1&t&&(e.TgZ(0,"mat-option",43),e._uU(1),e.qZA()),2&t){const r=n.$implicit;e.Q6J("value",r.city),e.xp6(1),e.hij(" ",r.city," ")}}function V(t,n){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Debe seleccionar un municipio. "),e.qZA())}function X(t,n){1&t&&e._uU(0,"Imagen")}function ee(t,n){if(1&t&&e._UZ(0,"img",44),2&t){const r=e.oxw();e.Q6J("src",r.wizardMerchantForm.get("step3.logoUrl").value,e.LSH)}}function te(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"div")(1,"input",45,46),e.NdJ("change",function(){e.CHM(r);const s=e.MAs(2),m=e.oxw();return e.KtG(m.uploadLogo(s.files))}),e.qZA(),e.TgZ(3,"label",47),e._UZ(4,"mat-icon",48),e.qZA()()}2&t&&(e.xp6(1),e.Q6J("multiple",!1)("accept","image/jpeg, image/jpg, image/webp, image/png"),e.xp6(3),e.Q6J("svgIcon","mat_solid:photo_camera"))}function oe(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"button",49),e.NdJ("click",function(){e.CHM(r);const s=e.oxw();return e.KtG(s.removeLogo())}),e._UZ(1,"mat-icon",48),e.qZA()}2&t&&(e.xp6(1),e.Q6J("svgIcon","mat_solid:delete"))}function re(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Crear Negocio "),e.qZA())}function ae(t,n){1&t&&e._UZ(0,"mat-progress-spinner",50),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const ne=[{path:"",component:(()=>{class t{constructor(r,o,s,m,b,se,me,le,ce){this._merchantService=r,this._changeDetectorRef=o,this._formBuilder=s,this._fuseConfirmationService=m,this._imagesService=b,this._locationService=se,this._snackBar=me,this._router=le,this.store=ce,this.merchant=null,this.cities=[],this.domainCode="",this.domains=[],this.isLoading=!1,this.stateCode="",this.states=[],this.statesCodes=[],this.stateSelected="",this.user=null,this.user$=(0,h.of)(null),this._unsubscribeAll=new _.x}ngOnInit(){var r;this.user$=this.store.select(c.rk),this.user$.subscribe(o=>this.user=o),this._locationService.states$.pipe((0,l.R)(this._unsubscribeAll)).subscribe(o=>{this.states=o,this._changeDetectorRef.markForCheck()}),this._locationService.statesCodes$.pipe((0,l.R)(this._unsubscribeAll)).subscribe(o=>{this.statesCodes=o,this._changeDetectorRef.markForCheck()}),this.wizardMerchantForm=this._formBuilder.group({step1:this._formBuilder.group({name:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(255)]],domain:["",[i.kI.required]],description:["",[i.kI.maxLength(1e3)]]}),step2:this._formBuilder.group({address:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(255)]],state:["",[i.kI.required]],city:["",[i.kI.required]],country:[{value:"Cuba",disabled:!0},[i.kI.required]]}),step3:this._formBuilder.group({logoUrl:[""]})}),null===(r=this.wizardMerchantForm.get("step2.state"))||void 0===r||r.valueChanges.pipe((0,l.R)(this._unsubscribeAll)).subscribe(o=>{this._getCitiesByState(o),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}uploadLogo(r){if(!r.length)return;const s=r[0];!["image/jpeg","image/jpg","image/webp","image/png"].includes(s.type)||this._imagesService.uploadImage("Merchant",s).subscribe(m=>{this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:m.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this.wizardMerchantForm.get("step3.logoUrl").setValue(m.imageUrl),this._changeDetectorRef.markForCheck()})}removeLogo(){const r=this.wizardMerchantForm.get("step3.logoUrl");r.value&&this._imagesService.removeImage(this.wizardMerchantForm.get("step3.logoUrl").value).subscribe(o=>{r.setValue(null),this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:o.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._changeDetectorRef.markForCheck()})}createMerchant(){this.isLoading=!0;const r=this.wizardMerchantForm.getRawValue();let o=Object.assign(Object.assign(Object.assign({},r.step1),r.step2),r.step3);o=(0,C.omit)(o,"_id"),o.slug=new v.i(o.name).slug,this._fuseConfirmationService.open({title:"Crear negocio",message:"\xbfEsta seguro que todos los datos son correctos?",icon:{show:!0,name:"mat_solid:help",color:"info"},actions:{confirm:{label:"Aceptar",color:"primary"}}}).afterClosed().subscribe(m=>{"confirmed"===m&&this._merchantService.createMerchant(o).subscribe(({data:b})=>{this._snackBar.openFromComponent(Z.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{message:b.createMerchant.message,title:"Confirmaci\xf3n",type:"success",svgIcon:"mat_solid:done"}}),this._router.navigateByUrl("/desktop"),this._changeDetectorRef.markForCheck()}),this._changeDetectorRef.markForCheck()})}clearForm(){this.wizardMerchantNgForm.resetForm()}trackByFn(r,o){return o.id||r}_getCitiesByState(r){r!==this.stateSelected&&this._locationService.getCitiesByState(r).subscribe(o=>{this.cities=o,this._changeDetectorRef.markForCheck()})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(I.c),e.Y36(e.sBO),e.Y36(i.qu),e.Y36(y.R),e.Y36(A.C),e.Y36(U.a),e.Y36(N.ux),e.Y36(d.F0),e.Y36(J.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ath-wizard"]],viewQuery:function(r,o){if(1&r&&(e.Gf(Y,5),e.Gf(D,5)),2&r){let s;e.iGM(s=e.CRH())&&(o.wizardMerchantNgForm=s.first),e.iGM(s=e.CRH())&&(o._logoFileInput=s.first)}},decls:96,vars:57,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","flex-auto","items-center","p-6","sm:p-10"],[1,"flex","flex-col","w-full","max-w-4xl"],[1,"mt-2","text-4xl","sm:text-5xl","text-primary","font-extrabold","tracking-tight","leading-tight"],[1,"mt-8","sm:mt-12","p-6","pb-7","sm:p-10","sm:pb-7","shadow","rounded-2xl","bg-card"],["class","mb-8",3,"type","showIcon",4,"ngIf"],["wizardBusinessNgForm","ngForm",1,"p-4","overflow-hidden",3,"formGroup"],["wizardBusinessNgForm",""],[3,"linear"],["wizard",""],[3,"formGroupName","stepControl"],["wizardStep1",""],["matStepLabel",""],[1,"my-6","font-medium"],[1,"flex","mb-6"],[1,"w-full"],["matInput","","required","",3,"type","formControlName","minlength","maxlength","placeholder"],[4,"ngIf"],[1,"flex","flex-col","gt-xs:flex-row","mb-6","gap-6"],[3,"formControlName"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"],[1,"w-full","fuse-mat-no-subscript"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","","matTextareaAutosize","",3,"formControlName","rows","maxlength","spellcheck"],[1,"flex","justify-end"],["mat-flat-button","","type","button","matStepperNext","",1,"px-8",3,"color","disabled"],["wizardStep2",""],[1,"flex","flex-col","gt-xs:flex-row","gap-6","mb-6"],["matInput","","required","",3,"type","formControlName","minlength","maxlength"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["required","",3,"formControlName"],["value","Cuba"],[1,"flex","justify-between"],["mat-flat-button","","type","button","matStepperPrevious","",1,"px-8","mr-2",3,"color"],[1,"flex","flex-col","gt-sm:flex-row","items-center","justify-center"],[1,"relative","flex","items-center","justify-center","w-32","h-32","border","border-dashed","rounded-full","overflow-hidden"],["class","object-cover rounded bg-hover","alt","IMAGEN",3,"src",4,"ngIf"],[1,"absolute","inset-0","flex","items-center","justify-center","z-20"],["class","rounded-full","mat-icon-button","",3,"click",4,"ngIf"],[1,"flex","justify-between","mt-8"],["mat-flat-button","","type","button","matStepperNext","",1,"px-8",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mb-8",3,"type","showIcon"],[3,"value"],["alt","IMAGEN",1,"object-cover","rounded","bg-hover",3,"src"],["id","logo-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["logoFileInput",""],["for","logo-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],[1,"text-primary",3,"svgIcon"],["mat-icon-button","",1,"rounded-full",3,"click"],[3,"diameter","mode"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," Est\xe1 solo a tres pasos de crear su primer negocio. "),e.qZA(),e.TgZ(5,"div",4),e.YNc(6,S,2,3,"fuse-alert",5),e.TgZ(7,"form",6,7)(9,"mat-horizontal-stepper",8,9)(11,"mat-step",10,11),e.YNc(13,B,1,0,"ng-template",12),e.TgZ(14,"p",13),e._uU(15," Ingrese la informaci\xf3n m\xednima necesaria para que sus clientes conozcan el negocio. "),e.qZA(),e.TgZ(16,"div",14)(17,"mat-form-field",15)(18,"mat-label"),e._uU(19,"Nombre"),e.qZA(),e._UZ(20,"input",16),e.YNc(21,k,2,0,"mat-error",17),e.YNc(22,L,2,0,"mat-error",17),e.qZA()(),e.TgZ(23,"div",18)(24,"mat-form-field",15)(25,"mat-label"),e._uU(26,"Sector"),e.qZA(),e.TgZ(27,"mat-select",19),e.YNc(28,R,2,2,"mat-option",20),e.qZA(),e.TgZ(29,"mat-hint"),e._uU(30,"Nomenclador de la Organizaci\xf3n Internacional del Trabajo OIT"),e.qZA(),e.YNc(31,j,2,0,"mat-error",17),e.qZA(),e.TgZ(32,"mat-form-field",21)(33,"mat-label"),e._uU(34,"Descripci\xf3n del Negocio"),e.qZA(),e._UZ(35,"mat-icon",22)(36,"textarea",23),e.qZA()(),e.TgZ(37,"div",24)(38,"button",25),e._uU(39," Avanzar "),e.qZA()()(),e.TgZ(40,"mat-step",10,26),e.YNc(42,O,1,0,"ng-template",12),e.TgZ(43,"p",13),e._uU(44," La direcci\xf3n donde radica el negocio aporta confianza a los clientes a la hora de tomar una decisi\xf3n de compra. "),e.qZA(),e.TgZ(45,"div",27)(46,"mat-form-field",15)(47,"mat-label"),e._uU(48,"Direcci\xf3n"),e.qZA(),e._UZ(49,"mat-icon",22)(50,"input",28),e.YNc(51,P,2,0,"mat-error",17),e.YNc(52,G,2,0,"mat-error",17),e.qZA(),e.TgZ(53,"mat-form-field",15)(54,"mat-label"),e._uU(55,"Provincia"),e.qZA(),e._UZ(56,"mat-icon",29),e.TgZ(57,"mat-select",30),e.YNc(58,$,2,2,"mat-option",20),e.qZA(),e.YNc(59,H,2,0,"mat-error",17),e.qZA(),e.TgZ(60,"mat-form-field",15)(61,"mat-label"),e._uU(62,"Municipio"),e.qZA(),e._UZ(63,"mat-icon",29),e.TgZ(64,"mat-select",30),e.YNc(65,K,2,2,"mat-option",20),e.qZA(),e.YNc(66,V,2,0,"mat-error",17),e.qZA(),e.TgZ(67,"mat-form-field",21)(68,"mat-label"),e._uU(69,"Pa\xeds"),e.qZA(),e.TgZ(70,"mat-select",30)(71,"mat-option",31),e._uU(72,"Cuba"),e.qZA()(),e._UZ(73,"mat-icon",29),e.qZA()(),e.TgZ(74,"div",32)(75,"button",33),e._uU(76," Regresar "),e.qZA(),e.TgZ(77,"button",25),e._uU(78," Avanzar "),e.qZA()()(),e.TgZ(79,"mat-step",10),e.YNc(80,X,1,0,"ng-template",12),e.TgZ(81,"p",13),e._uU(82," Su logo es la imagen que van a recordar los clientes toda la vida. "),e.qZA(),e.TgZ(83,"div",34)(84,"div",35),e.YNc(85,ee,1,1,"img",36),e.TgZ(86,"div",37),e.YNc(87,te,5,3,"div",17),e.TgZ(88,"div"),e.YNc(89,oe,2,1,"button",38),e.qZA()()()(),e.TgZ(90,"div",39)(91,"button",33),e._uU(92," Regresar "),e.qZA(),e.TgZ(93,"button",40),e.NdJ("click",function(){return o.createMerchant()}),e.YNc(94,re,2,0,"span",17),e.YNc(95,ae,1,2,"mat-progress-spinner",41),e.qZA()()()()()()()()()),2&r){const s=e.MAs(12),m=e.MAs(41);e.xp6(6),e.Q6J("ngIf",o.alert),e.xp6(1),e.Q6J("formGroup",o.wizardMerchantForm),e.xp6(2),e.Q6J("linear",!0),e.xp6(2),e.Q6J("formGroupName","step1")("stepControl",o.wizardMerchantForm.get("step1")),e.xp6(9),e.Q6J("type","text")("formControlName","name")("minlength",3)("maxlength",255)("placeholder","Nombre del negocio"),e.xp6(1),e.Q6J("ngIf",o.wizardMerchantForm.get("step1.name").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.wizardMerchantForm.get("step1.name").hasError("maxlength")||o.wizardMerchantForm.get("step1.name").hasError("minlength")),e.xp6(5),e.Q6J("formControlName","domain"),e.xp6(1),e.Q6J("ngForOf",o.domains)("ngForTrackBy",o.trackByFn),e.xp6(3),e.Q6J("ngIf",o.wizardMerchantForm.get("step1.domain").hasError("required")),e.xp6(4),e.Q6J("svgIcon","mat_solid:menu"),e.xp6(1),e.Q6J("formControlName","description")("rows",5)("maxlength",1e3)("spellcheck",!1),e.xp6(2),e.Q6J("color","primary")("disabled",s.stepControl.pristine||s.stepControl.invalid),e.xp6(2),e.Q6J("formGroupName","step2")("stepControl",o.wizardMerchantForm.get("step2")),e.xp6(9),e.Q6J("svgIcon","mat_solid:home"),e.xp6(1),e.Q6J("type","text")("formControlName","address")("minlength",3)("maxlength",255),e.xp6(1),e.Q6J("ngIf",o.wizardMerchantForm.get("step2.address").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.wizardMerchantForm.get("step2.address").hasError("maxlength")||o.wizardMerchantForm.get("step2.address").hasError("minlength")),e.xp6(4),e.Q6J("svgIcon","mat_solid:map"),e.xp6(1),e.Q6J("formControlName","state"),e.xp6(1),e.Q6J("ngForOf",o.states)("ngForTrackBy",o.trackByFn),e.xp6(1),e.Q6J("ngIf",o.wizardMerchantForm.get("step2.state").hasError("required")),e.xp6(4),e.Q6J("svgIcon","mat_solid:place"),e.xp6(1),e.Q6J("formControlName","city"),e.xp6(1),e.Q6J("ngForOf",o.cities)("ngForTrackBy",o.trackByFn),e.xp6(1),e.Q6J("ngIf",o.wizardMerchantForm.get("step2.city").hasError("required")),e.xp6(4),e.Q6J("formControlName","country"),e.xp6(3),e.Q6J("svgIcon","mat_solid:public"),e.xp6(2),e.Q6J("color","accent"),e.xp6(2),e.Q6J("color","primary")("disabled",m.stepControl.pristine||m.stepControl.invalid),e.xp6(2),e.Q6J("formGroupName","step3")("stepControl",o.wizardMerchantForm.get("step3")),e.xp6(6),e.Q6J("ngIf",o.wizardMerchantForm.get("step3.logoUrl").value),e.xp6(2),e.Q6J("ngIf",!o.wizardMerchantForm.get("step3.logoUrl").value),e.xp6(2),e.Q6J("ngIf",o.wizardMerchantForm.get("step3.logoUrl").value),e.xp6(2),e.Q6J("color","accent"),e.xp6(2),e.Q6J("color","primary")("disabled",o.isLoading),e.xp6(1),e.Q6J("ngIf",!o.isLoading),e.xp6(1),e.Q6J("ngIf",o.isLoading)}},dependencies:[z.sg,z.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.wO,i.nD,i.sg,i.u,i.x0,M.W,T.ey,Q.lW,u.C0,u.VY,u.Vq,u.Ic,u.fd,w.Hw,g.TO,g.KE,g.bx,g.hX,g.qo,W.Nt,q.Ou,T.wG,E.gD],encapsulation:2,data:{animation:p.L}}),t})(),resolve:{}}];let ie=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(ne),x.m]}),t})()}}]);