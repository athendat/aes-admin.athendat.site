"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[890],{8890:(H,d,a)=>{a.r(d),a.d(d,{AuthSignUpModule:()=>R});var g=a(5357),c=a(7423),f=a(7446),p=a(7322),h=a(5245),U=a(8833),A=a(773),_=a(5804),Z=a(7775),x=a(4576),n=a(3075),v=a(8288),u=a(2491),t=a(5e3),F=a(8951),T=a(9808);const b=["signUpNgForm"];function y(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos son obligatorios. "),t.qZA())}function C(e,o){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.hij(" ",i.signUpForm.get("fullname").getError("validFullName")," ")}}function I(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos no deben superar los 250 caracteres. "),t.qZA())}function N(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre y apellidos no deben poseer n\xfameros. "),t.qZA())}function S(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El correo electr\xf3nico es obligatorio "),t.qZA())}function w(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Por favor ingrese un correo electr\xf3nico v\xe1lido "),t.qZA())}function J(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El n\xfamero de identidad es obligatorio "),t.qZA())}function q(e,o){1&e&&t._UZ(0,"mat-icon",27),2&e&&t.Q6J("svgIcon","mat_solid:visibility")}function Q(e,o){1&e&&t._UZ(0,"mat-icon",27),2&e&&t.Q6J("svgIcon","mat_solid:visibility-off")}function E(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 20 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),t.qZA())}function Y(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function k(e,o){1&e&&t._UZ(0,"mat-icon",27),2&e&&t.Q6J("svgIcon","mat_solid:visibility")}function L(e,o){1&e&&t._UZ(0,"mat-icon",27),2&e&&t.Q6J("svgIcon","mat_solid:visibility-off")}function M(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La contrase\xf1a es obligatoria "),t.qZA())}function j(e,o){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const i=t.oxw();t.xp6(1),t.hij(" ",i.signUpForm.get("pwd2").getError("mustMatch")," ")}}function D(e,o){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Debe aceptar los t\xe9rminos y condiciones del servicio. "),t.qZA())}function G(e,o){1&e&&(t.TgZ(0,"span"),t._uU(1," Crear cuenta "),t.qZA())}function P(e,o){1&e&&t._UZ(0,"mat-progress-spinner",28),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const B=function(){return["/sign-in"]},O=[{path:"",component:(()=>{class e{constructor(i,r,m){this._authService=i,this._formBuilder=r,this._router=m,this.showAlert=!1,this.signUpFormSubmitted=!1,this.date=(new Date).valueOf()}ngOnInit(){this.signUpForm=this._formBuilder.group({fullname:["",[n.kI.required,n.kI.maxLength(255),u.L.onlyAlphabetsWithAccentPattern()]],email:["",[n.kI.required,n.kI.email]],idNumber:["",[n.kI.required,n.kI.pattern("^[0-9]+$"),n.kI.minLength(11),n.kI.maxLength(11)]],pwd:["",[n.kI.required,n.kI.minLength(8),n.kI.maxLength(20),u.L.strongPasWordPattern()]],pwd2:["",[n.kI.required]],agreements:[!0,n.kI.requiredTrue]},{validators:[u.L.mustMatch("pwd","pwd2"),u.L.validFullName("fullname")]})}signUp(){if(this.signUpFormSubmitted=!0,this.signUpForm.invalid)return;const i=this.signUpForm.getRawValue(),r=i.fullname.split(" "),m={name:r.length>3?r[0].trim()+" "+r[1].trim():r[0].trim(),lastname:r.length>3?r[2].trim()+" "+r[3].trim():2===r.length?r[1].trim():r[1].trim()+" "+r[2].trim(),idNumber:i.idNumber.trim(),email:i.email.trim(),pwd:i.pwd.trim()};this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(m).subscribe(l=>{this._router.navigateByUrl("/confirmation-required")},()=>{this.signUpForm.enable(),this.signUpForm.reset(),this.showAlert=!0})}acceptAgreements(){return!this.signUpForm.get("agreements").value&&this.signUpFormSubmitted}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(F.e),t.Y36(n.qu),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-up"]],viewQuery:function(i,r){if(1&i&&t.Gf(b,5),2&i){let m;t.iGM(m=t.CRH())&&(r.signUpNgForm=m.first)}},decls:67,vars:33,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:flex-row","md:items-start","sm:justify-center","md:justify-start"],[1,"relative","items-center","justify-center","flex-auto","hidden","w-2/3","h-full","p-16","overflow-hidden","bg-gray-800","bg-cover","md:flex","lg:px-28","dark:border-l",2,"background-image","url('https://res.cloudinary.com/athendat/image/upload/v1682979351/AES/images/bgs/board_athstore_i9ro1c.webp')"],[1,"w-full","px-4","py-8","md:flex","md:items-center","md:justify-end","sm:w-auto","md:h-full","md:w-1/3","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card","lg:py-4"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","fullname","matInput","","required","",3,"formControlName","maxlength"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","text","matInput","","pattern","^[0-9]+$","minlength","11","maxlength","11",3,"formControlName"],["id","pwd","matInput","","type","password","required","",3,"formControlName","minlength","maxlength"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","pwd2","matInput","","type","password","required","",3,"formControlName"],["passwordField2",""],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["href","https://athendat.site/#/terms","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["href","https://athendat.site/#/privacy","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(i,r){if(1&i){const m=t.EpF();t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6),t._uU(7,"Registro"),t.qZA(),t.TgZ(8,"div",7)(9,"div"),t._uU(10,"\xbfYa tiene un cuenta?"),t.qZA(),t.TgZ(11,"a",8),t._uU(12," Iniciar Sesi\xf3n "),t.qZA()(),t.TgZ(13,"form",9)(14,"mat-form-field",10)(15,"mat-label"),t._uU(16,"Nombre y Apellidos"),t.qZA(),t._UZ(17,"input",11),t.YNc(18,y,2,0,"mat-error",12),t.YNc(19,C,2,1,"mat-error",12),t.YNc(20,I,2,0,"mat-error",12),t.YNc(21,N,2,0,"mat-error",12),t.qZA(),t.TgZ(22,"mat-form-field",10)(23,"mat-label"),t._uU(24,"Correo electr\xf3nico"),t.qZA(),t._UZ(25,"input",13),t.YNc(26,S,2,0,"mat-error",12),t.YNc(27,w,2,0,"mat-error",12),t.qZA(),t.TgZ(28,"mat-form-field",10)(29,"mat-label"),t._uU(30,"N\xfamero de identidad"),t.qZA(),t._UZ(31,"input",14),t.YNc(32,J,2,0,"mat-error",12),t.qZA(),t.TgZ(33,"mat-form-field",10)(34,"mat-label"),t._uU(35,"Contrase\xf1a"),t.qZA(),t._UZ(36,"input",15,16),t.TgZ(38,"button",17),t.NdJ("click",function(){t.CHM(m);const s=t.MAs(37);return t.KtG(s.type="password"===s.type?"text":"password")}),t.YNc(39,q,1,1,"mat-icon",18),t.YNc(40,Q,1,1,"mat-icon",18),t.qZA(),t.YNc(41,E,2,0,"mat-error",12),t.YNc(42,Y,2,0,"mat-error",12),t.qZA(),t.TgZ(43,"mat-form-field",10)(44,"mat-label"),t._uU(45,"Repita la contrase\xf1a"),t.qZA(),t._UZ(46,"input",19,20),t.TgZ(48,"button",17),t.NdJ("click",function(){t.CHM(m);const s=t.MAs(47);return t.KtG(s.type="password"===s.type?"text":"password")}),t.YNc(49,k,1,1,"mat-icon",18),t.YNc(50,L,1,1,"mat-icon",18),t.qZA(),t.YNc(51,M,2,0,"mat-error",12),t.YNc(52,j,2,1,"mat-error",12),t.qZA(),t.TgZ(53,"div",21)(54,"mat-checkbox",22)(55,"span"),t._uU(56,"Estoy de acuerdo con los"),t.qZA(),t.TgZ(57,"a",23),t._uU(58,"T\xe9rminos de Uso "),t.qZA(),t.TgZ(59,"span"),t._uU(60,"y la"),t.qZA(),t.TgZ(61,"a",24),t._uU(62,"Pol\xedtica de Privacidad "),t.qZA(),t.YNc(63,D,2,0,"mat-error",12),t.qZA()(),t.TgZ(64,"button",25),t.NdJ("click",function(){return r.signUp()}),t.YNc(65,G,2,0,"span",12),t.YNc(66,P,1,2,"mat-progress-spinner",26),t.qZA()()()()()}if(2&i){const m=t.MAs(37),l=t.MAs(47);t.xp6(11),t.Q6J("routerLink",t.DdM(32,B)),t.xp6(2),t.Q6J("formGroup",r.signUpForm),t.xp6(4),t.Q6J("formControlName","fullname")("maxlength",255),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("fullname").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("fullname").hasError("validFullName")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("fullname").hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("fullname").hasError("pattern")),t.xp6(4),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","idNumber"),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("idNumber").hasError("required")),t.xp6(4),t.Q6J("formControlName","pwd")("minlength",8)("maxlength",20),t.xp6(3),t.Q6J("ngIf","password"===m.type),t.xp6(1),t.Q6J("ngIf","text"===m.type),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("pwd").hasError("pattern")||r.signUpForm.get("pwd").hasError("minlength")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("pwd").hasError("required")),t.xp6(4),t.Q6J("formControlName","pwd2"),t.xp6(3),t.Q6J("ngIf","password"===l.type),t.xp6(1),t.Q6J("ngIf","text"===l.type),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("pwd2").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signUpForm.get("pwd2").hasError("mustMatch")),t.xp6(2),t.Q6J("color","primary")("formControlName","agreements"),t.xp6(9),t.Q6J("ngIf",r.acceptAgreements()),t.xp6(1),t.Q6J("color","primary")("disabled",r.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",!r.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",r.signUpForm.disabled)}},dependencies:[g.yS,c.lW,f.oG,p.TO,p.KE,p.hX,p.R9,h.Hw,U.Nt,A.Ou,T.O5,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.wO,n.nD,n.c5,n.sg,n.u],encapsulation:2,data:{animation:v.L}}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(O),c.ot,f.p9,p.lN,h.Ps,U.c,A.Cq,_.J,Z.fC,x.m]}),e})()}}]);