"use strict";(self.webpackChunkaes_admin=self.webpackChunkaes_admin||[]).push([[900],{7231:(R,f,c)=>{c.d(f,{C:()=>b});var v=c(520),P=c(2340),m=c(5e3);const p=P.N.API_URL;let b=(()=>{class t{constructor(l){this._httpClient=l}uploadImage(l,o){const E=new FormData;return E.append("image",o,o.name),this._httpClient.post(`${p}/cloudinary/upload/${l}`,E)}removeImage(l){const o=(new v.LE).set("public_id",l);return this._httpClient.delete(`${p}/cloudinary/remove`,{params:o})}}return t.\u0275fac=function(l){return new(l||t)(m.LFG(v.eN))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4380:(R,f,c)=>{c.d(f,{M6:()=>t,Nj:()=>l,SE:()=>I});var v=c(262),P=c(2843),m=c(5e3),p=c(3312),b=c(5357);let t=(()=>{class o{constructor(h,s){this._productsService=h,this._router=s}resolve(h,s){const u=h.paramMap.get("productId");return this._productsService.getProductById(u).pipe((0,v.K)(_=>{console.error(_);const T=s.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(T),(0,P._)(_)}))}}return o.\u0275fac=function(h){return new(h||o)(m.LFG(p.s),m.LFG(b.F0))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),I=(()=>{class o{constructor(h){this._productsService=h}resolve(h,s){return this._productsService.getProductsByMerchant()}}return o.\u0275fac=function(h){return new(h||o)(m.LFG(p.s))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),l=(()=>{class o{constructor(h){this._productsService=h}resolve(h,s){return this._productsService.getTags()}}return o.\u0275fac=function(h){return new(h||o)(m.LFG(p.s))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},2075:(R,f,c)=>{c.d(f,{Fn:()=>m,a0:()=>b,nR:()=>p});var v=c(5094);const P=t=>t.products,m=(0,v.P1)(P,t=>t.product),p=(0,v.P1)(P,t=>t.products),b=(0,v.P1)(P,t=>t.tags)},3312:(R,f,c)=>{c.d(f,{s:()=>L});var v=c(5840),P=c(5698),m=c(3900),p=c(8505),b=c(5714),t=c(4967),I=c(2075),l=c(9784),o=c(3921);const E=o.Ps`
    mutation CreateProduct($createProductInput: CreateProductInput!) {
        createProduct(createProductInput: $createProductInput) {

            ok
            message

            product {
                id
                active
                name
                price
                stock
                thumbnail
            }
        }
    }
`,h=o.Ps`
    mutation UpdateProduct($updateProductInput: UpdateProductInput!) {
        updateProduct(updateProductInput: $updateProductInput) {

            ok
            message

            product {
                id
                active

                type
                categoryId

                brandId
                brand {
                    name
                }

                currencyId
                currency {
                    name
                }


                uomId
                uom {
                    name
                    abbr
                }

                tags

                name
                description
                specifications
                guaranty

                sku
                upc

                cost
                discount
                tax
                price

                stock
                stockMin

                isDigital
                isService
                isPerishable

                thumbnail
                thumbnailCode

                images
                imagesCode

                variants {
                    color
                    cost
                    description
                    name
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,s=o.Ps`
    mutation Mutation($updateEntityStatusInput: UpdateEntityStatusInput!) {
        updateProductStatus(updateEntityStatusInput: $updateEntityStatusInput){
            ok
            message
        }
    }
`,u=o.Ps`
    mutation RemoveProduct($removeProductId: String!) {
        removeProduct(id: $removeProductId) {
            ok
            message
        }
    }
`,_=o.Ps`
    query FindAllProducts($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllProducts(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                parentId
                type
                code
                upc
                cost
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQty
                thumbnail
                uomId

                variants {
                    id
                    name
                    description
                    color
                    cost
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,T=o.Ps`
    query FindAllProductsByMerchant($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllProductsByMerchant(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            products {
                id
                active
                parentId
                type
                code
                upc
                cost
                name
                brand {
                    name
                }
                uom {
                    name
                    abbr
                }
                price
                stock
                salesQty
                thumbnail
                uomId

                variants {
                    id
                    name
                    description
                    color
                    cost
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,$=o.Ps`
    query GetProductsActive {
        productsActive {
            code
            upc
            cost
            name
            brand {
                name
            }
            uom {
                abbr
            }
            price
            stock
        }
    }
`,A=o.Ps`
    query GetProductsInactive {
        productsInactive {
            code
            upc
            cost
            name
            brand {
                name
            }
            uom {
                abbr
            }
            price
            stock
        }
    }
`,D=o.Ps`
    query GetProductsExhausted {
        productsExhausted {
            name
            code
            cost
            price
            upc
            brand
            uom
            stock
        }
    }
`,S=o.Ps`
    query GetProductsAvailable {
        productsAvailable {
            name
            code
            cost
            price
            upc
            brand
            uom
            stock
        }
    }
`,B=o.Ps`
    query FindProductById($findProductByIdId: String!) {
        findProductById(id: $findProductByIdId) {
            ok
            message

            product {
                id
                active

                type
                categoryId

                brandId
                brand {
                    name
                }

                currencyId
                currency {
                    name
                }


                uomId
                uom {
                    name
                    abbr
                }

                tags

                name
                description
                specifications
                guaranty
                
                sku
                upc

                cost
                discount
                tax
                price

                stock
                stockMin

                isDigital
                isService
                isPerishable

                thumbnail
                thumbnailCode

                images
                imagesCode

                variants {
                    color
                    cost
                    description
                    name
                    price
                    size
                    sku
                    stock
                    stock
                    thumbnail
                    upc
                }
            }
        }
    }
`,F=o.Ps`
    mutation CreateTag($createTagInput: CreateTagInput!) {
        createTag(createTagInput: $createTagInput) {

            ok
            message

            tag {
                id
                name
                active
            }
        }
    }
`,M=o.Ps`
    mutation UpdateTag($updateTagInput: UpdateTagInput!) {
        updateTag(updateTagInput: $updateTagInput) {
            ok
            message

            tag {
                id
                name
                active
            }
        }
    }
`,O=o.Ps`
    mutation RemoveTag($removeTagId: String!) {
        removeTag(id: $removeTagId) {
            ok
            message
        }
    }
`,G=o.Ps`
    query FindAllTags($offset: Int, $limit: Int, $sort: String, $order: Order, $search: String) {
        findAllTags(offset: $offset, limit: $limit, sort: $sort, order: $order, search: $search) {
            ok
            message

            pagination {
                length
                size
                page
            }

            tags {
                id
                name
                active
            }
        }
    }
`;var k=c(5e3),x=c(7261),z=c(5094);let L=(()=>{class U{constructor(r,n,e){this.apolloProvider=r,this._snackBar=n,this.store=e,this._apollo=this.apolloProvider.use("AES")}createProduct(r){return this.store.select(I.nR).pipe((0,P.q)(1),(0,m.w)(n=>this._apollo.mutate({mutation:E,variables:{createProductInput:r},errorPolicy:"all"}).pipe((0,p.b)(({errors:e,data:i})=>{if(e){let a="";e.forEach(d=>{d.extensions.originalError.message.forEach(C=>a+=`\n ${C.message}.`)}),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const g=(0,v.Z)(n);g.push(i.createProduct.product),this.store.dispatch((0,t.RU)({products:g}))}))))}getProducts(r=1,n=10,e="name",i="asc",g=""){return this._apollo.query({query:_,errorPolicy:"all",variables:{offset:n*(r-1),limit:n,sort:e,order:i,search:g}}).pipe((0,p.b)(({errors:a,data:d})=>{if(a){let y="";a.forEach(C=>y+=`\n ${C.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:y,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,t.RU)({products:d.findAllProducts.products})),this.store.dispatch((0,b.Jr)({pagination:d.findAllProducts.pagination}))}))}getProductsByMerchant(r=1,n=10,e="name",i="asc",g=""){return this._apollo.query({query:T,errorPolicy:"all",variables:{offset:n*(r-1),limit:n,sort:e,order:i,search:g}}).pipe((0,p.b)(({errors:a,data:d})=>{if(a){let y="";a.forEach(C=>y+=`\n ${C.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:y,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,t.RU)({products:d.findAllProductsByMerchant.products})),this.store.dispatch((0,b.Jr)({pagination:d.findAllProductsByMerchant.pagination}))}))}getProductsActive(){return this._apollo.query({query:$,errorPolicy:"all"}).pipe((0,p.b)(({errors:r})=>{if(r){let e="";r.forEach(i=>e+=`\n ${i.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:e,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsInactive(){return this._apollo.query({query:A,errorPolicy:"all"}).pipe((0,p.b)(({errors:r})=>{if(r){let e="";r.forEach(i=>e+=`\n ${i.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:e,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsExhausted(){return this._apollo.query({query:D,errorPolicy:"all"}).pipe((0,p.b)(({errors:r})=>{if(r){let e="";r.forEach(i=>e+=`\n ${i.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:e,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductsAvailable(){return this._apollo.query({query:S,errorPolicy:"all"}).pipe((0,p.b)(({errors:r})=>{if(r){let e="";r.forEach(i=>e+=`\n ${i.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:e,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}}))}getProductById(r){return this._apollo.query({query:B,variables:{findProductByIdId:r},errorPolicy:"all"}).pipe((0,p.b)(({errors:n,data:e})=>{if(n){let i="";n.forEach(g=>i+=`\n ${g.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:i,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,t.Gr)({product:e.findProductById.product}))}))}updateProduct(r){return this.store.select(I.nR).pipe((0,P.q)(1),(0,m.w)(n=>this._apollo.mutate({mutation:h,variables:{updateProductInput:r},errorPolicy:"all"}).pipe((0,p.b)(({errors:e,data:i})=>{if(e){let d="";e.forEach(y=>d+=`\n ${y.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const g=(0,v.Z)(n);g[n.findIndex(d=>d.id===r.id)]=i.updateProduct.product,this.store.dispatch((0,t.RU)({products:g})),this.store.dispatch((0,t.Gr)({product:i.updateProduct.product}))}))))}updateProductStatus(r){return this.store.select(I.nR).pipe((0,P.q)(1),(0,m.w)(n=>this._apollo.mutate({mutation:s,variables:{updateEntityStatusInput:r},errorPolicy:"all"}).pipe((0,p.b)(({errors:e})=>{if(e){let a="";e.forEach(d=>a+=`\n ${d.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,v.Z)(n);i[n.findIndex(a=>a.id===r.id)].active=r.active,this.store.dispatch((0,t.RU)({products:i}))}))))}removeProduct(r){return this.store.select(I.nR).pipe((0,P.q)(1),(0,m.w)(n=>this._apollo.mutate({mutation:u,variables:{removeProductId:r},errorPolicy:"all"}).pipe((0,p.b)(({errors:e})=>{if(e){let a="";e.forEach(d=>a+=`\n ${d.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,v.Z)(n),g=n.findIndex(a=>a.id===r);i.splice(g,1),this.store.dispatch((0,t.RU)({products:i}))}))))}getTags(r=1,n=10,e="name",i="asc",g=""){return this._apollo.query({query:G,errorPolicy:"all",variables:{offset:n*(r-1),limit:n,sort:e,order:i,search:g}}).pipe((0,p.b)(({errors:a,data:d})=>{if(a){let y="";a.forEach(C=>y+=`\n ${C.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:y,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}this.store.dispatch((0,t.mG)({tags:d.findAllTags.tags}))}))}createTag(r){return this.store.select(I.a0).pipe((0,P.q)(1),(0,m.w)(n=>this._apollo.mutate({mutation:F,variables:{createTagInput:r},errorPolicy:"all"}).pipe((0,p.b)(({errors:e,data:i})=>{if(e){let a="";e.forEach(d=>{d.extensions.originalError.message.forEach(C=>a+=`\n ${C.message}.`)}),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const g=(0,v.Z)(n);g.push(i.createTag.tag),this.store.dispatch((0,t.mG)({tags:g}))}))))}updateTag(r){return this.store.select(I.a0).pipe((0,P.q)(1),(0,m.w)(n=>this._apollo.mutate({mutation:M,variables:{updateTagInput:r},errorPolicy:"all"}).pipe((0,p.b)(({errors:e,data:i})=>{if(e){let d="";e.forEach(y=>d+=`\n ${y.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:d,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const g=(0,v.Z)(n);g[n.findIndex(d=>d.id===r.id)]=i.updateTag.tag,this.store.dispatch((0,t.mG)({tags:g}))}))))}deleteTag(r){return this.store.select(I.a0).pipe((0,P.q)(1),(0,m.w)(n=>this._apollo.mutate({mutation:O,variables:{removeTagId:r},errorPolicy:"all"}).pipe((0,p.b)(({errors:e})=>{if(e){let a="";e.forEach(d=>a+=`\n ${d.message}.`),this._snackBar.openFromComponent(l.h,{panelClass:["p-0","bg-transparent"],horizontalPosition:"end",verticalPosition:"bottom",duration:1e4,data:{message:a,title:"Error",type:"error",svgIcon:"mat_solid:error"}})}const i=(0,v.Z)(n),g=n.findIndex(a=>a.id===r);i.splice(g,1),this.store.dispatch((0,t.mG)({tags:i}))}))))}}return U.\u0275fac=function(r){return new(r||U)(k.LFG(o._M),k.LFG(x.ux),k.LFG(z.yh))},U.\u0275prov=k.Yz7({token:U,factory:U.\u0275fac,providedIn:"root"}),U})()},1588:(R,f,c)=>{c.d(f,{Z:()=>h});const P={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const p=new Uint8Array(16);function b(){if(!m&&(m="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(p)}const t=[];for(let s=0;s<256;++s)t.push((s+256).toString(16).slice(1));const h=function E(s,u,_){if(P.randomUUID&&!u&&!s)return P.randomUUID();const T=(s=s||{}).random||(s.rng||b)();if(T[6]=15&T[6]|64,T[8]=63&T[8]|128,u){_=_||0;for(let $=0;$<16;++$)u[_+$]=T[$];return u}return function I(s,u=0){return(t[s[u+0]]+t[s[u+1]]+t[s[u+2]]+t[s[u+3]]+"-"+t[s[u+4]]+t[s[u+5]]+"-"+t[s[u+6]]+t[s[u+7]]+"-"+t[s[u+8]]+t[s[u+9]]+"-"+t[s[u+10]]+t[s[u+11]]+t[s[u+12]]+t[s[u+13]]+t[s[u+14]]+t[s[u+15]]).toLowerCase()}(T)}}}]);