"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[592],{123:(D,_,e)=>{e.d(_,{u:()=>c});var a=e(8966),p=e(1588),u=e(9784),t=e(5e3),r=e(7261),n=e(7423),s=e(3877);let c=(()=>{class g{constructor(h,y,T){this.data=h,this._dialogRef=y,this._snackBar=T,this.imageChangedEvent="",this.croppedImage="",this.imageChangedEvent=h.image}ngOnInit(){}imageCropped(h){this.croppedImage=h.base64}imageLoaded(h){}cropperReady(){}loadImageFailed(){this._snackBar.openFromComponent(u.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:5e3,data:{title:"Alerta",message:"No se pudo cargar la imagen, int\xe9ntelo nuevamente.",type:"warning",svgIcon:"mat_solid:warning"}}),this._dialogRef.close()}saveImage(){const h=this._croppedImageToFile(this.croppedImage,(0,p.Z)());this._dialogRef.close(h)}_croppedImageToFile(h,y){const T=h.split(","),b=T[0].match(/:(.*?);/)[1],F=atob(T[1]);let M=F.length;const L=new Uint8Array(M);for(;M--;)L[M]=F.charCodeAt(M);return new File([L],y+"."+b.split("/")[1],{type:b})}}return g.\u0275fac=function(h){return new(h||g)(t.Y36(a.WI),t.Y36(a.so),t.Y36(r.ux))},g.\u0275cmp=t.Xpm({type:g,selectors:[["cropper-image-dialog"]],decls:16,vars:5,consts:[[1,"relative","flex","flex-col","w-full","max-h-screen"],[1,"flex","flex-col","items-center","px-8","pt-4","space-y-1","text-center","sm:items-start","sm:mt-0","sm:pr-8","sm:text-left","border-b"],["mat-dialog-title",""],[1,"flex","flex-row","items-center","flex-auto","w-full","px-8","pb-6"],[1,"w-1/2"],[3,"imageChangedEvent","maintainAspectRatio","imageCropped","imageLoaded","cropperReady","loadImageFailed"],[1,"flex-","flex-col","w-1/2"],[1,"text-xl","font-semibold","w-full","text-center","mb-2"],[3,"src"],[1,"flex","items-center","justify-between","w-full","px-8","py-4","bg-gray-50"],["mat-button","","mat-dialog-close","",1,"-ml-4","rounded-full",3,"color"],["mat-flat-button","",1,"rounded-full",3,"color","click"]],template:function(h,y){1&h&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Ajustar Imagen"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"image-cropper",5),t.NdJ("imageCropped",function(b){return y.imageCropped(b)})("imageLoaded",function(b){return y.imageLoaded(b)})("cropperReady",function(){return y.cropperReady()})("loadImageFailed",function(){return y.loadImageFailed()}),t.qZA()(),t.TgZ(7,"div",6)(8,"div",7),t._uU(9," Resultado "),t.qZA(),t._UZ(10,"img",8),t.qZA()(),t.TgZ(11,"div",9)(12,"button",10),t._uU(13,"Cancelar"),t.qZA(),t.TgZ(14,"button",11),t.NdJ("click",function(){return y.saveImage()}),t._uU(15,"Guardar"),t.qZA()()()),2&h&&(t.xp6(6),t.Q6J("imageChangedEvent",y.imageChangedEvent)("maintainAspectRatio",!0),t.xp6(4),t.Q6J("src",y.croppedImage,t.LSH),t.xp6(2),t.Q6J("color","warn"),t.xp6(2),t.Q6J("color","primary"))},dependencies:[n.lW,a.ZT,a.uh,s.ap],encapsulation:2}),g})()},4062:(D,_,e)=>{e.d(_,{i:()=>a});class a{constructor(u){this.slug=this._slugGenerator(u)}_slugGenerator(u){return u.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace("  "," ").split(" ").join("-")}}},2451:(D,_,e)=>{e.d(_,{qo:()=>u});var a=e(5094);const p=r=>r.stats,u=(0,a.P1)(p,r=>r.stats);(0,a.P1)(p,r=>r.stats.merchantsQty)},2491:(D,_,e)=>{e.d(_,{L:()=>p});var a=e(3075);class p{static isEmptyInputValue(t){return null==t||0===t.length}static mustMatch(t,r){return n=>{const s=n.get(t),c=n.get(r);if(!s||!c||(c.hasError("mustMatch")&&(delete c.errors.mustMatch,c.updateValueAndValidity()),this.isEmptyInputValue(c.value)||s.value===c.value))return null;const g={mustMatch:"Las contrase\xf1a no coinciden."};return c.setErrors(g),g}}static strongPassWord(t,r,n,s,c){return g=>{const I=g.value;if(!I)return null;const h=!t||/[A-Z]+/.test(I),y=!r||/[a-z]+/.test(I),T=!n||/[0-9]+/.test(I),b=!s||!/^[a-zA-Z0-9]+$/.test(I);return h&&y&&T&&b&&I.length>=c?null:{password:"La contrase\xf1a no cumple con los est\xe1ndares de seguridad requeridos"}}}static onlyNumber(t){return r=>{const n=r.get(t);if(!n||(n.hasError("onlyNumber")&&(delete n.errors.mustMatch,n.updateValueAndValidity()),/^[a-zA-Z0-9]+$/.test(n.value.toString())))return null;const c={onlyNumber:"Solo se admiten n\xfameros."};return n.setErrors(c),c}}static strongPasWordPattern(){return a.kI.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)}static emailPattern(){return a.kI.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")}static onlyNumbersPattern(){return a.kI.pattern("^[0-9]*$")}static onlyAlphabetsWithAccentPattern(){return a.kI.pattern("^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xf1\xfc]*$")}static onlyAlphabetsPattern(){return a.kI.pattern("^[a-zA-Z ]*$")}static validateIdNumber(t){return r=>{if(!r)return null;let n=r.value;if(!n)return null;void 0!==r.value.idNumber&&(n=r.value.idNumber);const s=parseInt(n.substring(0,2),10),c=parseInt(n.substring(2,4),10)-1,g=parseInt(n.substring(4,6),10),I=new Date(s,c,g);if(I.getFullYear().toString().substring(2,4)===s.toString()&&I.getMonth()===c&&I.getDate()===g)return null;const y={validateIdNumber:"El n\xfamero de identidad introducido es incorrecto"};return r.setErrors(y),y}}static validFullName(t){return r=>{const n=r.get(t);if(!n||!t||(n.hasError("validFullName")&&(delete n.errors.validFullName,n.updateValueAndValidity()),this._isEmptyInputValue(n.value))||n.value.trim().split(" ").length>1)return null;const s={validFullName:"El nombre completo deber\xe1 tener al menos un nombre y un apellido"};return n.setErrors(s),s}}static _isEmptyInputValue(t){return null==t||0===t.length}}},5681:(D,_,e)=>{e.d(_,{Y:()=>B});var a=e(5e3),p=e(5698),u=e(3900),t=e(8505),r=e(5840),n=e(230),s=e(9987),c=e(9784),g=e(3921);const I=g.Ps`
    mutation CreateCurrency($createCurrencyInput: CreateCurrencyInput!) {
        createCurrency(createCurrencyInput: $createCurrencyInput) {

            ok
            message

            currency {
                id
                active
                name
                iso
                symbol
            }

        }
    }
`,h=g.Ps`
mutation UpdateCurrency($updateCurrencyInput: UpdateCurrencyInput!) {
    updateCurrency(updateCurrencyInput: $updateCurrencyInput) {
        ok
        message

        currency {
            id
            active
            name
            iso
            symbol
        }
    }
}
`,y=g.Ps`
mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
    updateCurrencyStatus(updateEntityStatusInput: $updateEntityStatusInput)
}
`,T=g.Ps`
mutation RemoveCurrency($removeCurrencyId: String!) {
    removeCurrency(id: $removeCurrencyId)
}
`,b=g.Ps`
    query FindAllCurrencies {
        findAllCurrencies {
            ok
            message

            currencies {
                id
                active
                name
                iso
                symbol
            }
        }
    }
`,F=g.Ps`
    query FindCurrencyById($findCurrencyByIdId: String!) {
        findCurrencyById(id: $findCurrencyByIdId) {
            ok
            message

            currency {
                id
                active
                name
                iso
                symbol
            }
        }
    }
`;var M=e(7261),L=e(5094);let z=(()=>{class Z{constructor(d,E,C){this.apolloProvider=d,this._snackBar=E,this.store=C,this._apollo=this.apolloProvider.use("AES")}createCurrency(d){return this.store.select(s.zd).pipe((0,p.q)(1),(0,u.w)(E=>this._apollo.mutate({mutation:I,variables:{createCurrencyInput:d},errorPolicy:"all"}).pipe((0,t.b)(({errors:C,data:v})=>{if(C){let l="";C.forEach(f=>l+=`\n ${f.message}.`),this._snackBar.openFromComponent(c.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const o=(0,r.Z)(E);o.push(v.createCurrency.currency),this.store.dispatch((0,n.HC)({currencies:o}))}))))}getCurrencies(){return this._apollo.query({query:b,errorPolicy:"all"}).pipe((0,t.b)(({errors:d,data:E})=>{if(d){let C="";d.forEach(v=>C+=`\n ${v.message}.`),this._snackBar.openFromComponent(c.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:C,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,n.HC)({currencies:E.findAllCurrencies.currencies}))}))}getCurrencyById(d){return this._apollo.query({query:F,variables:{findCurrencyByIdId:d},errorPolicy:"all"}).pipe((0,t.b)(({errors:E,data:C})=>{if(E){let v="";E.forEach(o=>v+=`\n ${o.message}.`),this._snackBar.openFromComponent(c.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:v,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,n.NW)({currency:C.findCurrencyById.currency}))}))}updateCurrency(d){return this.store.select(s.zd).pipe((0,p.q)(1),(0,u.w)(E=>this._apollo.mutate({mutation:h,variables:{updateCurrencyInput:d},errorPolicy:"all"}).pipe((0,t.b)(({errors:C,data:v})=>{if(C){let f="";C.forEach(R=>f+=`\n ${R.message}.`),this._snackBar.openFromComponent(c.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:f,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const o=(0,r.Z)(E);o[E.findIndex(f=>f.id===d.id)]=v.updateCurrency.currency,this.store.dispatch((0,n.HC)({currencies:o}))}))))}updateCurrencyStatus(d){return this.store.select(s.zd).pipe((0,p.q)(1),(0,u.w)(E=>this._apollo.mutate({mutation:y,variables:{updateEntityStatusInput:d},errorPolicy:"all"}).pipe((0,t.b)(({errors:C})=>{if(C){let l="";C.forEach(f=>l+=`\n ${f.message}.`),this._snackBar.openFromComponent(c.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const v=(0,r.Z)(E);v[E.findIndex(l=>l.id===d.id)].active=d.active,this.store.dispatch((0,n.HC)({currencies:v}))}))))}removeCurrency(d){return this.store.select(s.zd).pipe((0,p.q)(1),(0,u.w)(E=>this._apollo.mutate({mutation:T,variables:{removeCurrencyId:d},errorPolicy:"all"}).pipe((0,t.b)(({errors:C})=>{if(C){let l="";C.forEach(f=>l+=`\n ${f.message}.`),this._snackBar.openFromComponent(c.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:l,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const v=(0,r.Z)(E),o=E.findIndex(l=>l.id===d);v.splice(o,1),this.store.dispatch((0,n.HC)({currencies:v}))}))))}}return Z.\u0275fac=function(d){return new(d||Z)(a.LFG(g._M),a.LFG(M.ux),a.LFG(L.yh))},Z.\u0275prov=a.Yz7({token:Z,factory:Z.\u0275fac,providedIn:"root"}),Z})(),B=(()=>{class Z{constructor(d){this._currenciesService=d}resolve(d,E){return this._currenciesService.getCurrencies()}}return Z.\u0275fac=function(d){return new(d||Z)(a.LFG(z))},Z.\u0275prov=a.Yz7({token:Z,factory:Z.\u0275fac,providedIn:"root"}),Z})()},9987:(D,_,e)=>{e.d(_,{zd:()=>t});var a=e(5094);const p=r=>r.currencies,t=((0,a.P1)(p,r=>r.currency),(0,a.P1)(p,r=>r.currencies))},7988:(D,_,e)=>{e.d(_,{Z:()=>p});const p=function a(u,t){for(var r=-1,n=null==u?0:u.length,s=Array(n);++r<n;)s[r]=t(u[r],r,u);return s}},7298:(D,_,e)=>{e.d(_,{Z:()=>t});var a=e(7370),p=e(2168);const t=function u(r,n){for(var s=0,c=(n=(0,a.Z)(n,r)).length;null!=r&&s<c;)r=r[(0,p.Z)(n[s++])];return s&&s==c?r:void 0}},7370:(D,_,e)=>{e.d(_,{Z:()=>v});var a=e(4177),p=e(8042),u=e(3639);function r(o,l){if("function"!=typeof o||null!=l&&"function"!=typeof l)throw new TypeError("Expected a function");var f=function(){var R=arguments,N=l?l.apply(this,R):R[0],S=f.cache;if(S.has(N))return S.get(N);var W=o.apply(this,R);return f.cache=S.set(N,W)||S,W};return f.cache=new(r.Cache||u.Z),f}r.Cache=u.Z;const n=r;var I=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,h=/\\(\\)?/g;const T=function c(o){var l=n(o,function(R){return 500===f.size&&f.clear(),R}),f=l.cache;return l}(function(o){var l=[];return 46===o.charCodeAt(0)&&l.push(""),o.replace(I,function(f,R,N,S){l.push(N?S.replace(h,"$1"):R||f)}),l});var b=e(8492),F=e(7988),M=e(6460),z=b.Z?b.Z.prototype:void 0,B=z?z.toString:void 0;const x=function Z(o){if("string"==typeof o)return o;if((0,a.Z)(o))return(0,F.Z)(o,Z)+"";if((0,M.Z)(o))return B?B.call(o):"";var l=o+"";return"0"==l&&1/o==-1/0?"-0":l},E=function d(o){return null==o?"":x(o)},v=function C(o,l){return(0,a.Z)(o)?o:(0,p.Z)(o,l)?[o]:T(E(o))}},8042:(D,_,e)=>{e.d(_,{Z:()=>n});var a=e(4177),p=e(6460),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,t=/^\w*$/;const n=function r(s,c){if((0,a.Z)(s))return!1;var g=typeof s;return!("number"!=g&&"symbol"!=g&&"boolean"!=g&&null!=s&&!(0,p.Z)(s))||t.test(s)||!u.test(s)||null!=c&&s in Object(c)}},2168:(D,_,e)=>{e.d(_,{Z:()=>t});var a=e(6460);const t=function u(r){if("string"==typeof r||(0,a.Z)(r))return r;var n=r+"";return"0"==n&&1/r==-1/0?"-0":n}},6460:(D,_,e)=>{e.d(_,{Z:()=>r});var a=e(7079),p=e(214);const r=function t(n){return"symbol"==typeof n||(0,p.Z)(n)&&"[object Symbol]"==(0,a.Z)(n)}},5119:(D,_,e)=>{e.d(_,{Z:()=>X});var a=e(7988),p=e(9057),u=e(7370);var n=e(7298);const I=function g(i,m){return m.length<2?i:(0,n.Z)(i,function s(i,m,P){var O=-1,A=i.length;m<0&&(m=-m>A?0:A+m),(P=P>A?A:P)<0&&(P+=A),A=m>P?0:P-m>>>0,m>>>=0;for(var U=Array(A);++O<A;)U[O]=i[O+m];return U}(m,0,-1))};var h=e(2168);const T=function y(i,m){return m=(0,u.Z)(m,i),null==(i=I(i,m))||delete i[(0,h.Z)(function t(i){var m=null==i?0:i.length;return m?i[m-1]:void 0}(m))]};var b=e(3276),F=e(2031);const L=function M(i){return(0,F.Z)(i)?void 0:i};var z=e(6623),B=e(8492),Z=e(4825),x=e(4177),d=B.Z?B.Z.isConcatSpreadable:void 0;const C=function E(i){return(0,x.Z)(i)||(0,Z.Z)(i)||!!(d&&i&&i[d])},o=function v(i,m,P,O,A){var U=-1,k=i.length;for(P||(P=C),A||(A=[]);++U<k;){var K=i[U];m>0&&P(K)?m>1?v(K,m-1,P,O,A):(0,z.Z)(A,K):O||(A[A.length]=K)}return A},f=function l(i){return null!=i&&i.length?o(i,1):[]};var R=e(5604),N=e(8661);var $=e(8065);const X=function S(i){return(0,N.Z)((0,R.Z)(i,void 0,f),i+"")}(function(i,m){var P={};if(null==i)return P;var O=!1;m=(0,a.Z)(m,function(U){return U=(0,u.Z)(U,i),O||(O=U.length>1),U}),(0,b.Z)(i,(0,$.Z)(i),P),O&&(P=(0,p.Z)(P,7,L));for(var A=m.length;A--;)T(P,m[A]);return P})}}]);