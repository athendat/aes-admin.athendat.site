"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[890],{8890:(O,g,i)=>{i.r(g),i.d(g,{AuthSignUpModule:()=>z});var p=i(5357),c=i(7423),d=i(7446),u=i(7322),f=i(5245),h=i(7531),U=i(773),Z=i(5804),x=i(7775),_=i(2266),s=i(3075),v=i(8288),e=i(5e3),y=i(8951),w=i(9808);const T=["signUpNgForm"];function b(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El nombre es obligatorio "),e.qZA())}function F(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," El correo electr\xf3nico es obligatorio "),e.qZA())}function C(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Por favor ingrese un correo electr\xf3nico v\xe1lido "),e.qZA())}function S(t,o){1&t&&e._UZ(0,"mat-icon",45),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function I(t,o){1&t&&e._UZ(0,"mat-icon",45),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function q(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),e.qZA())}function J(t,o){if(1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.hij(" ",r.signUpForm.get("pwd").getError("pwd")," ")}}function N(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function E(t,o){1&t&&e._UZ(0,"mat-icon",45),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function Q(t,o){1&t&&e._UZ(0,"mat-icon",45),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function Y(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,' La contrase\xf1a deber\xe1 tener entre 8 y 100 caracteres e incluir may\xfasculas, min\xfasculas n\xfameros y s\xedmbolos como: ! " ? $ % ^ &. '),e.qZA())}function k(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," La contrase\xf1a es obligatoria "),e.qZA())}function M(t,o){if(1&t&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.hij(" ",r.signUpForm.get("pwd2").getError("pwd")," ")}}function j(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Debe aceptar los t\xe9rminos y condiciones del servicio. "),e.qZA())}function D(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1," Crear cuenta "),e.qZA())}function B(t,o){1&t&&e._UZ(0,"mat-progress-spinner",46),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const L=function(){return["/sign-in"]},R=[{path:"",component:(()=>{class t{constructor(r,n,m){this._authService=r,this._formBuilder=n,this._router=m,this.showAlert=!1,this.signUpFormSubmitted=!1,this.date=(new Date).valueOf()}ngOnInit(){this.signUpForm=this._formBuilder.group({fullname:["",s.kI.required],email:["",[s.kI.required,s.kI.email]],pwd:["",[s.kI.required,s.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],pwd2:["",[s.kI.required,s.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],agreements:[!0,s.kI.requiredTrue]},{validators:this.mustMatch("pwd","pwd2")})}signUp(){if(this.signUpFormSubmitted=!0,this.signUpForm.invalid)return;const r=this.signUpForm.getRawValue(),n=r.fullname.split(" ",3),m=r.email.split("@",2),l={name:n[0].trim(),lastname1:n[1].trim(),lastname2:n[2].trim(),email:r.email.trim(),username:m[0]+this.date,pwd:r.pwd.trim(),agreements:r.agreements};this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(l).subscribe(a=>{console.log("Response: ",a),this._router.navigateByUrl("/confirmation-required")},()=>{this.signUpForm.enable(),this.signUpForm.reset(),this.showAlert=!0})}acceptAgreements(){return!this.signUpForm.get("agreements").value&&this.signUpFormSubmitted}mustMatch(r,n){return m=>{const l=m.get(r),a=m.get(n);if(!l||!a||(a.hasError("mustMatch")&&(delete a.errors.mustMatch,a.updateValueAndValidity()),this._isEmptyInputValue(a.value)||l.value===a.value))return null;const A={mustMatch:"Las contrase\xf1a no coinciden"};return a.setErrors(A),A}}_isEmptyInputValue(r){return null==r||0===r.length}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(y.e),e.Y36(s.qu),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-up"]],viewQuery:function(r,n){if(1&r&&e.Gf(T,5),2&r){let m;e.iGM(m=e.CRH())&&(n.signUpNgForm=m.first)}},decls:89,vars:27,consts:[[1,"flex","flex-col","items-center","flex-auto","min-w-0","sm:flex-row","md:items-start","sm:justify-center","md:justify-start"],[1,"relative","items-center","justify-center","flex-auto","hidden","w-2/3","h-full","p-16","overflow-hidden","bg-gray-800","md:flex","lg:px-28","dark:border-l","bg-cover",2,"background-image","url('assets/images/auth/signup.jpg')"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","text-gray-700","-top-16","-right-16"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl","bg-gray-800","bg-opacity-30","p-10"],[1,"font-bold","leading-none","text-gray-100","text-7xl"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/team/anabel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-100","ring-offset-gray-100"],["src","assets/images/team/frank.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-100","ring-offset-gray-100"],["src","assets/images/team/andiel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-100","ring-offset-gray-100"],["src","assets/images/team/lazaro.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-100","ring-offset-gray-100"],[1,"ml-4","font-medium","tracking-tight","text-gray-100"],["href","https://athendat.site",1,"text-primary-500","hover:underline"],[1,"w-full","px-4","py-8","md:flex","md:items-center","md:justify-end","sm:w-auto","md:h-full","md:w-1/3","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card","lg:py-4"],[1,"w-full","mx-auto","max-w-80","sm:w-80","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","fullname","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","pwd","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","pwd2","matInput","","type","password",3,"formControlName"],["passwordField2",""],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["href","https://athendat.site/#/terms","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["href","https://athendat.site/#/privacy","target","_blank",1,"ml-1","text-primary-500","hover:underline"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(r,n){if(1&r){const m=e.EpF();e.TgZ(0,"div",0)(1,"div",1),e.O4$(),e.TgZ(2,"svg",2)(3,"g",3),e._UZ(4,"circle",4)(5,"circle",5),e.qZA()(),e.TgZ(6,"svg",6)(7,"defs")(8,"pattern",7),e._UZ(9,"rect",8),e.qZA()(),e._UZ(10,"rect",9),e.qZA(),e.kcU(),e.TgZ(11,"div",10)(12,"div",11)(13,"div"),e._uU(14,"Bienvenido a"),e.qZA(),e.TgZ(15,"div"),e._uU(16,"nuestra plataforma"),e.qZA()(),e.TgZ(17,"div",12),e._uU(18," ATHENDAT es una plataforma en l\xednea de aplicaciones empresariales destinada a desarrollar y potenciar al m\xe1ximo los beneficios de los negocios cubanos ofreciendo herramientas modernas, flexibles y robustas que garanticen el cumplimiento normativo de nuestro pa\xeds. "),e.qZA(),e.TgZ(19,"div",13)(20,"div",14),e._UZ(21,"img",15)(22,"img",16)(23,"img",17)(24,"img",18),e.qZA(),e.TgZ(25,"div",19),e._uU(26," Para m\xe1s detalles consulte nuestra "),e.TgZ(27,"a",20),e._uU(28,"web"),e.qZA(),e._uU(29,". "),e.qZA()()()(),e.TgZ(30,"div",21)(31,"div",22)(32,"div",23),e._UZ(33,"img",24),e.qZA(),e.TgZ(34,"div",25),e._uU(35,"Registro"),e.qZA(),e.TgZ(36,"div",26)(37,"div"),e._uU(38,"\xbfYa tiene un cuenta?"),e.qZA(),e.TgZ(39,"a",27),e._uU(40," Iniciar Sesi\xf3n "),e.qZA()(),e.TgZ(41,"form",28)(42,"mat-form-field",29)(43,"mat-label"),e._uU(44,"Nombre completo"),e.qZA(),e._UZ(45,"input",30),e.YNc(46,b,2,0,"mat-error",31),e.qZA(),e.TgZ(47,"mat-form-field",29)(48,"mat-label"),e._uU(49,"Correo electr\xf3nico"),e.qZA(),e._UZ(50,"input",32),e.YNc(51,F,2,0,"mat-error",31),e.YNc(52,C,2,0,"mat-error",31),e.qZA(),e.TgZ(53,"mat-form-field",29)(54,"mat-label"),e._uU(55,"Contrase\xf1a"),e.qZA(),e._UZ(56,"input",33,34),e.TgZ(58,"button",35),e.NdJ("click",function(){e.CHM(m);const a=e.MAs(57);return e.KtG(a.type="password"===a.type?"text":"password")}),e.YNc(59,S,1,1,"mat-icon",36),e.YNc(60,I,1,1,"mat-icon",36),e.qZA(),e.YNc(61,q,2,0,"mat-error",31),e.YNc(62,J,2,1,"mat-error",31),e.YNc(63,N,2,0,"mat-error",31),e.qZA(),e.TgZ(64,"mat-form-field",29)(65,"mat-label"),e._uU(66,"Repita la contrase\xf1a"),e.qZA(),e._UZ(67,"input",37,38),e.TgZ(69,"button",35),e.NdJ("click",function(){e.CHM(m);const a=e.MAs(68);return e.KtG(a.type="password"===a.type?"text":"password")}),e.YNc(70,E,1,1,"mat-icon",36),e.YNc(71,Q,1,1,"mat-icon",36),e.qZA(),e.YNc(72,Y,2,0,"mat-error",31),e.YNc(73,k,2,0,"mat-error",31),e.YNc(74,M,2,1,"mat-error",31),e.qZA(),e.TgZ(75,"div",39)(76,"mat-checkbox",40)(77,"span"),e._uU(78,"Estoy de acuerdo con los"),e.qZA(),e.TgZ(79,"a",41),e._uU(80,"T\xe9rminos de Uso "),e.qZA(),e.TgZ(81,"span"),e._uU(82,"y la"),e.qZA(),e.TgZ(83,"a",42),e._uU(84,"Pol\xedtica de Privacidad "),e.qZA(),e.YNc(85,j,2,0,"mat-error",31),e.qZA()(),e.TgZ(86,"button",43),e.NdJ("click",function(){return n.signUp()}),e.YNc(87,D,2,0,"span",31),e.YNc(88,B,1,2,"mat-progress-spinner",44),e.qZA()()()()()}if(2&r){const m=e.MAs(57),l=e.MAs(68);e.xp6(39),e.Q6J("routerLink",e.DdM(26,L)),e.xp6(2),e.Q6J("formGroup",n.signUpForm),e.xp6(4),e.Q6J("formControlName","fullname"),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("fullname").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","pwd"),e.xp6(3),e.Q6J("ngIf","password"===m.type),e.xp6(1),e.Q6J("ngIf","text"===m.type),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("pwd").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("pwd").hasError("pwd")),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("pwd").hasError("required")),e.xp6(4),e.Q6J("formControlName","pwd2"),e.xp6(3),e.Q6J("ngIf","password"===l.type),e.xp6(1),e.Q6J("ngIf","text"===l.type),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("pwd").hasError("pattern")),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("pwd2").hasError("required")),e.xp6(1),e.Q6J("ngIf",n.signUpForm.get("pwd2").hasError("pwd")),e.xp6(2),e.Q6J("color","primary")("formControlName","agreements"),e.xp6(9),e.Q6J("ngIf",n.acceptAgreements()),e.xp6(1),e.Q6J("color","primary")("disabled",n.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!n.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",n.signUpForm.disabled)}},dependencies:[p.yS,c.lW,d.oG,u.TO,u.KE,u.hX,u.R9,f.Hw,h.Nt,U.Ou,w.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],encapsulation:2,data:{animation:v.L}}),t})()}];let z=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(R),c.ot,d.p9,u.lN,f.Ps,h.c,U.Cq,Z.J,x.fC,_.m]}),t})()}}]);