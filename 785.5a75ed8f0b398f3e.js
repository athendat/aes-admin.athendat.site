"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[785],{6428:(I,l,t)=>{t.d(l,{B:()=>p});const p=(0,t(5094).P1)(e=>e.pagination,e=>e.pagination)},4024:(I,l,t)=>{t.d(l,{J:()=>p});var n=t(5e3),i=t(462);let p=(()=>{class e{constructor(c){this._brandsService=c}resolve(c,C){return this._brandsService.getBrands()}}return e.\u0275fac=function(c){return new(c||e)(n.LFG(i.G))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3425:(I,l,t)=>{t.d(l,{gg:()=>e});var n=t(5094);const i=r=>r.brands,e=((0,n.P1)(i,r=>r.brand),(0,n.P1)(i,r=>r.brands))},462:(I,l,t)=>{t.d(l,{G:()=>U});var n=t(520),i=t(8505),p=t(4813),e=t(5698),r=t(3900),c=t(4004),C=t(5714),P=t(2340),M=t(7505),B=t(3425),y=t(5e3),L=t(5094);const g=P.N.API_URL;let U=(()=>{class v{constructor(d,s){this._httpClient=d,this.store=s}getBrands(d=1,s=10,o="name",E="asc",a=""){const _=(new n.LE).append("offset",s*(d-1)).append("limit",s).append("sort",o).append("order",E).append("search",a);return this._httpClient.get(`${g}/brands/`,{params:_}).pipe((0,i.b)(({pagination:u,brands:h})=>{this.store.dispatch((0,C.Jr)({pagination:u})),this.store.dispatch((0,M.dk)({brands:h}))}))}getBrandById(d){return this._httpClient.get(`${g}/brands/${d}`).pipe((0,p.j)("brand"),(0,i.b)(s=>{this.store.dispatch((0,M.HB)({brand:s}))}))}createBrand(d){return this.store.select(B.gg).pipe((0,e.q)(1),(0,r.w)(s=>this._httpClient.post(`${g}/brands/`,d).pipe((0,i.b)(o=>{this.store.dispatch((0,M.dk)({brands:[o.brand,...s]}))}))))}updateBrand(d){return this.store.select(B.gg).pipe((0,e.q)(1),(0,r.w)(s=>this._httpClient.patch(`${g}/brands/${d.id}`,d).pipe((0,c.U)(o=>([...s][s.findIndex(_=>_.id===d.id)]=o.brand,this.store.dispatch((0,M.dk)({brands:s})),o)))))}deleteBrand(d){return this.store.select(B.gg).pipe((0,e.q)(1),(0,r.w)(s=>this._httpClient.delete(`${g}/brands/${d}`).pipe((0,c.U)(o=>{const E=s.findIndex(a=>a.id===d);return s.splice(E,1),this.store.dispatch((0,M.dk)({brands:s})),o}))))}}return v.\u0275fac=function(d){return new(d||v)(y.LFG(n.eN),y.LFG(L.yh))},v.\u0275prov=y.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},7235:(I,l,t)=>{t.d(l,{e:()=>p});var n=t(5e3),i=t(5480);let p=(()=>{class e{constructor(c){this._categoriesService=c}resolve(c,C){return this._categoriesService.getCategories()}}return e.\u0275fac=function(c){return new(c||e)(n.LFG(i.G))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4206:(I,l,t)=>{t.d(l,{us:()=>e});var n=t(5094);const i=r=>r.categories,e=((0,n.P1)(i,r=>r.category),(0,n.P1)(i,r=>r.categories))},5480:(I,l,t)=>{t.d(l,{G:()=>U});var n=t(520),i=t(8505),p=t(5698),e=t(3900),r=t(4004),c=t(3402),C=t(2340),P=t(4206),M=t(5840),B=t(5714),y=t(5e3),L=t(5094);const g=C.N.API_URL;let U=(()=>{class v{constructor(d,s){this._httpClient=d,this.store=s}getCategories(d=1,s=10,o="name",E="asc",a=""){const _=(new n.LE).append("offset",s*(d-1)).append("limit",s).append("sort",o).append("order",E).append("search",a);return this._httpClient.get(`${g}/categories`,{params:_}).pipe((0,i.b)(({categories:u,pagination:h})=>{this.store.dispatch((0,c.DG)({categories:u})),this.store.dispatch((0,B.Jr)({pagination:h}))}))}createCategory(d){return this.store.select(P.us).pipe((0,p.q)(1),(0,e.w)(s=>this._httpClient.post(`${g}/categories/`,d).pipe((0,i.b)(({category:o})=>{this.store.dispatch((0,c.DG)({categories:[o,...s]}))}))))}updateCategory(d){return this.store.select(P.us).pipe((0,p.q)(1),(0,e.w)(s=>this._httpClient.patch(`${g}/categories/${d.id}`,d).pipe((0,r.U)(o=>{const E=(0,M.Z)(s);return E[s.findIndex(_=>_.id===d.id)]=o.category,this.store.dispatch((0,c.DG)({categories:E})),o}))))}deleteCategory(d){return this.store.select(P.us).pipe((0,p.q)(1),(0,e.w)(s=>this._httpClient.delete(`${g}/categories/${d}`).pipe((0,i.b)(()=>{const o=(0,M.Z)(s),E=s.findIndex(a=>a.id===d);o.splice(E,1),this.store.dispatch((0,c.DG)({categories:o}))}))))}}return v.\u0275fac=function(d){return new(d||v)(y.LFG(n.eN),y.LFG(L.yh))},v.\u0275prov=y.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},810:(I,l,t)=>{t.d(l,{Y:()=>p});var n=t(5e3),i=t(3334);let p=(()=>{class e{constructor(c){this._currenciesService=c}resolve(c,C){return this._currenciesService.getCurrencies()}}return e.\u0275fac=function(c){return new(c||e)(n.LFG(i.t))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9987:(I,l,t)=>{t.d(l,{zd:()=>e});var n=t(5094);const i=r=>r.currencies,e=((0,n.P1)(i,r=>r.currency),(0,n.P1)(i,r=>r.currencies))},3334:(I,l,t)=>{t.d(l,{t:()=>s});var n=t(5698),i=t(3900),p=t(8505),e=t(5840),r=t(230),c=t(9987),C=t(9784),P=t(3921);const M=P.Ps`
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
`,B=P.Ps`
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
`,y=P.Ps`
mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
    updateCurrencyStatus(updateEntityStatusInput: $updateEntityStatusInput)
}
`,L=P.Ps`
mutation RemoveCurrency($removeCurrencyId: String!) {
    removeCurrency(id: $removeCurrencyId)
}
`,g=P.Ps`
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
`,U=P.Ps`
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
`;var v=t(5e3),O=t(7261),d=t(5094);let s=(()=>{class o{constructor(a,_,u){this.apolloProvider=a,this._snackBar=_,this.store=u,this._apollo=this.apolloProvider.use("AES")}createCurrency(a){return this.store.select(c.zd).pipe((0,n.q)(1),(0,i.w)(_=>this._apollo.mutate({mutation:M,variables:{createCurrencyInput:a},errorPolicy:"all"}).pipe((0,p.b)(({errors:u,data:h})=>{if(u){let m="";u.forEach(R=>m+=`\n ${R.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const D=(0,e.Z)(_);D.push(h.createCurrency.currency),this.store.dispatch((0,r.HC)({currencies:D}))}))))}getCurrencies(){return this._apollo.query({query:g,errorPolicy:"all"}).pipe((0,p.b)(({errors:a,data:_})=>{if(a){let u="";a.forEach(h=>u+=`\n ${h.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:u,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,r.HC)({currencies:_.findAllCurrencies.currencies}))}))}getCurrencyById(a){return this._apollo.query({query:U,variables:{findCurrencyByIdId:a},errorPolicy:"all"}).pipe((0,p.b)(({errors:_,data:u})=>{if(_){let h="";_.forEach(D=>h+=`\n ${D.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:h,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,r.NW)({currency:u.findCurrencyById.currency}))}))}updateCurrency(a){return this.store.select(c.zd).pipe((0,n.q)(1),(0,i.w)(_=>this._apollo.mutate({mutation:B,variables:{updateCurrencyInput:a},errorPolicy:"all"}).pipe((0,p.b)(({errors:u,data:h})=>{if(u){let R="";u.forEach(f=>R+=`\n ${f.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:R,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const D=(0,e.Z)(_);D[_.findIndex(R=>R.id===a.id)]=h.updateCurrency.currency,this.store.dispatch((0,r.HC)({currencies:D}))}))))}updateCurrencyStatus(a){return this.store.select(c.zd).pipe((0,n.q)(1),(0,i.w)(_=>this._apollo.mutate({mutation:y,variables:{updateEntityStatusInput:a},errorPolicy:"all"}).pipe((0,p.b)(({errors:u})=>{if(u){let m="";u.forEach(R=>m+=`\n ${R.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const h=(0,e.Z)(_);h[_.findIndex(m=>m.id===a.id)].active=a.active,this.store.dispatch((0,r.HC)({currencies:h}))}))))}removeCurrency(a){return this.store.select(c.zd).pipe((0,n.q)(1),(0,i.w)(_=>this._apollo.mutate({mutation:L,variables:{removeCurrencyId:a},errorPolicy:"all"}).pipe((0,p.b)(({errors:u})=>{if(u){let m="";u.forEach(R=>m+=`\n ${R.message}.`),this._snackBar.openFromComponent(C.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:m,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const h=(0,e.Z)(_),D=_.findIndex(m=>m.id===a);h.splice(D,1),this.store.dispatch((0,r.HC)({currencies:h}))}))))}}return o.\u0275fac=function(a){return new(a||o)(v.LFG(P._M),v.LFG(O.ux),v.LFG(d.yh))},o.\u0275prov=v.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},8118:(I,l,t)=>{t.d(l,{d:()=>p});var n=t(5e3),i=t(9813);let p=(()=>{class e{constructor(c){this._uomService=c}resolve(c,C){return this._uomService.getUoms()}}return e.\u0275fac=function(c){return new(c||e)(n.LFG(i.c))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},6911:(I,l,t)=>{t.d(l,{av:()=>e});var n=t(5094);const i=r=>r.uoms,e=((0,n.P1)(i,r=>r.uom),(0,n.P1)(i,r=>r.uoms))},9813:(I,l,t)=>{t.d(l,{c:()=>v});var n=t(520),i=t(8505),p=t(4813),e=t(5698),r=t(3900),c=t(4004),C=t(4560),P=t(6911),M=t(5714),B=t(2340),y=t(5840),L=t(5e3),g=t(5094);const U=B.N.API_URL;let v=(()=>{class O{constructor(s,o){this._httpClient=s,this.store=o}getUoms(s=1,o=10,E="name",a="asc",_=""){const u=(new n.LE).append("offset",o*(s-1)).append("limit",o).append("sort",E).append("order",a).append("search",_);return this._httpClient.get(`${U}/uoms/`,{params:u}).pipe((0,i.b)(({pagination:h,uoms:D})=>{this.store.dispatch((0,M.Jr)({pagination:h})),this.store.dispatch((0,C.u8)({uoms:D}))}))}getUomById(s){return this._httpClient.get(`${U}/uoms/${s}`).pipe((0,p.j)("uom"),(0,i.b)(o=>{this.store.dispatch((0,C.sh)({uom:o}))}))}createUom(s){return this.store.select(P.av).pipe((0,e.q)(1),(0,r.w)(o=>this._httpClient.post(`${U}/uoms/`,s).pipe((0,i.b)(E=>{this.store.dispatch((0,C.u8)({uoms:[E.uom,...o]}))}))))}updateUom(s){return this.store.select(P.av).pipe((0,e.q)(1),(0,r.w)(o=>this._httpClient.patch(`${U}/uoms/${s.id}`,s).pipe((0,c.U)(E=>{let a=(0,y.Z)(o);return a[o.indexOf(s)]=E.uom,this.store.dispatch((0,C.u8)({uoms:a})),E}))))}deleteUom(s){return this.store.select(P.av).pipe((0,e.q)(1),(0,r.w)(o=>this._httpClient.delete(`${U}/uoms/${s}`).pipe((0,c.U)(E=>{const a=o.findIndex(_=>_.id===s);return o.splice(a,1),this.store.dispatch((0,C.u8)({uoms:o})),E}))))}}return O.\u0275fac=function(s){return new(s||O)(L.LFG(n.eN),L.LFG(g.yh))},O.\u0275prov=L.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"}),O})()}}]);