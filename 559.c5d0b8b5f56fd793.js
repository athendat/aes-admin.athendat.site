"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[559],{4559:(y,s,n)=>{n.r(s),n.d(s,{AuthConfirmationModule:()=>b});var r=n(5357),m=n(3881),u=n(7579),l=n(2722),d=n(8288),e=n(5e3),g=n(8951),f=n(9808),h=n(7423),p=n(773);function v(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1," Confirmar "),e.qZA())}function x(t,o){1&t&&e._UZ(0,"mat-progress-spinner",30),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const A=[{path:":code",component:(()=>{class t{constructor(i,a,c,Z){this._authService=i,this._activatedRoute=a,this._changeDetectorRef=c,this._router=Z,this.code=null,this.isLoading=!1,this._unsubscribeAll=new u.x}ngOnInit(){this._activatedRoute.params.pipe((0,l.R)(this._unsubscribeAll)).subscribe(({code:i})=>{this.code=i,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}confirmAccount(){this.isLoading=!0,this._authService.confirmAccount(this.code).pipe((0,l.R)(this._unsubscribeAll)).subscribe(()=>{this._router.navigateByUrl("/wizard"),this._changeDetectorRef.markForCheck()},i=>{this.isLoading=!1})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(g.e),e.Y36(r.gz),e.Y36(e.sBO),e.Y36(r.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-confirmation"]],decls:41,vars:3,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-4"],["mat-flat-button","",1,"w-full","mt-6","fuse-mat-button-large",3,"color","click"],[4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"font-bold","leading-none","text-gray-100","text-7xl"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/team/anabel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/frank.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/andiel.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],["src","assets/images/team/lazaro.webp",1,"object-cover","w-10","h-10","rounded-full","flex-0","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],["href","https://athendat.site","target","_blank",1,"text-blue-400","hover:underline"],[3,"diameter","mode"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Confirmaci\xf3n de Cuenta"),e.qZA(),e.TgZ(7,"div",6),e._uU(8," Est\xe1 a un solo paso de activar su cuenta, solo presione el siguiente bot\xf3n. "),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){return a.confirmAccount()}),e.YNc(10,v,2,0,"span",8),e.YNc(11,x,1,2,"mat-progress-spinner",9),e.qZA()()(),e.TgZ(12,"div",10),e.O4$(),e.TgZ(13,"svg",11)(14,"g",12),e._UZ(15,"circle",13)(16,"circle",14),e.qZA()(),e.TgZ(17,"svg",15)(18,"defs")(19,"pattern",16),e._UZ(20,"rect",17),e.qZA()(),e._UZ(21,"rect",18),e.qZA(),e.kcU(),e.TgZ(22,"div",19)(23,"div",20)(24,"div"),e._uU(25,"Bienvenido a"),e.qZA(),e.TgZ(26,"div"),e._uU(27,"nuestra plataforma"),e.qZA()(),e.TgZ(28,"div",21),e._uU(29," ATHENDAT es una plataforma en l\xednea de aplicaciones empresariales destinada a desarrollar y potenciar al m\xe1ximo los beneficios de los negocios cubanos ofreciendo herramientas modernas, flexibles y robustas que garanticen el cumplimiento normativo de nuestro pa\xeds. "),e.qZA(),e.TgZ(30,"div",22)(31,"div",23),e._UZ(32,"img",24)(33,"img",25)(34,"img",26)(35,"img",27),e.qZA(),e.TgZ(36,"div",28),e._uU(37,"Para m\xe1s detalles consulte nuestra "),e.TgZ(38,"a",29),e._uU(39,"web"),e.qZA(),e._uU(40,"."),e.qZA()()()()()),2&i&&(e.xp6(9),e.Q6J("color","primary"),e.xp6(1),e.Q6J("ngIf",!a.isLoading),e.xp6(1),e.Q6J("ngIf",a.isLoading))},dependencies:[f.O5,h.lW,p.Ou],encapsulation:2,data:{animation:d.L}}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild(A),m.m]}),t})()}}]);