"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[412],{686:(e,a,s)=>{s.r(a),s.d(a,{default:()=>g});var l=s(43),n=s(309),t=s(778),i=s(429),r=s(579);const c=e=>{let{elements:a,removeElement:s,activeIndex:l}=e;const n=a.map(((e,a)=>{let n=t;return 2===l&&e.image?n=e.image:2!==l&&e.images&&e.images.length>0&&(n=e.images[0]),(0,r.jsxs)("li",{className:"element ".concat(a%2===0?"even":"odd"),children:[(0,r.jsx)(i.A,{src:n,alt:"".concat(e.name,"-image"),className:"element-image"}),(0,r.jsx)("div",{className:"element-name",children:e.name}),(0,r.jsx)("div",{className:"element-delete",onClick:()=>s(e.id),children:"x"})]},a)}));return(0,r.jsx)("ul",{className:"admin-list",children:a.length>0?n:(0,r.jsx)("h2",{children:"Empty"})})};s(824);var d=s(594),o=s(677),m=s(581),u=s(145),h=s(870),p=s(663);const g=()=>{const[e,a]=(0,l.useState)(0),[s,t]=(0,l.useState)(!1),[i,g]=(0,l.useState)(!1),[x,j]=(0,l.useState)("store"),[v,N]=(0,l.useState)(!1),{isLoading:f,error:b,sendRequest:C,clearError:y}=(0,p.x)();(0,l.useEffect)((()=>{(async()=>{try{const e=await C("http://localhost:5000/api/".concat(x));t(e.data)}catch(e){console.log(e)}})()}),[v]);const A=async(a,s)=>{let l;a.preventDefault(),0===e?(console.log(s.inputs),l={name:s.inputs.name.value,price:parseFloat(s.inputs.price.value),category:s.inputs.category.value,quantity:parseFloat(s.inputs.quantity.value),description:s.inputs.description.value}):1===e?l={name:s.inputs.name.value,breed:s.inputs.breed.value}:2===e&&(l={name:s.inputs.name.value,surname:s.inputs.surname.value,email:s.inputs.email.value,password:s.inputs.password.value,image:s.inputs.image.value});try{new FormData;let a="http://localhost:5000/api/".concat(x);2===e&&(a="http://localhost:5000/api/".concat(x,"/signup")),await C(a,"POST",JSON.stringify(l),{"Content-Type":"application/json"}),N((e=>!e)),E()}catch(n){console.log(n)}},E=()=>{g(!1)},k=n.i.map(((e,s)=>(0,r.jsx)("li",{id:s,className:"admin-menu-list-element",onClick:()=>{a(s),N((e=>!e)),j(e.toLowerCase())},children:e},s)));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{show:i,onCancel:E,header:0===e?"New Item":1===e?"New Dog":"New User",children:0===e?(0,r.jsx)(h.A,{submitHandler:A}):1===e?(0,r.jsx)(u.A,{submitHandler:A}):(0,r.jsx)(m.A,{isAdmin:!0,submitHandler:A})}),(0,r.jsxs)("div",{className:"admin flex-container",children:[(0,r.jsx)("div",{className:"admin-left",children:(0,r.jsx)("ul",{className:"admin-menu-list",children:n.i&&k})}),(0,r.jsxs)("div",{className:"admin-right",children:[(0,r.jsx)("div",{className:"admin-right-button",children:(0,r.jsx)(d.A,{className:"button-success",onClick:()=>{g(!0)},children:"ADD NEW"})}),(0,r.jsx)("h1",{children:0===e?"STORE":1===e?"GALLERY":"USERS"}),s&&(0,r.jsx)(c,{elements:s,removeElement:async e=>{try{await C("http://localhost:5000/api/".concat(x,"/").concat(e),"DELETE",null,{"Content-Type":"application/json"}),N((e=>!e))}catch(a){console.log(a)}},activeIndex:e})]})]})]})}},581:(e,a,s)=>{s.d(a,{A:()=>c});s(43);var l=s(594),n=s(941),t=s(961),i=s(663),r=s(579);const c=e=>{let{switchAuthForm:a,isAdmin:s,submitHandler:c}=e;const{isLoading:d,error:o,sendRequest:m,clearError:u}=(0,i.x)(),[h,p]=(0,t.m)({name:{value:"",isValid:!1},surname:{value:"",isValid:!1},email:{value:"",isValid:!1},password:{value:"",isValid:!1},image:{value:"",isValid:!1}},!1),g=e=>{const a=e.target.id,s=e.target.value;let l=!0;(!e.target.value.replace(/\s/g,"")||e.target.value.length<=0)&&(l=!1),p(a,s,l)};return(0,r.jsxs)("form",{className:"modal-form",children:[(0,r.jsxs)("div",{className:"modal-form-name",children:[(0,r.jsx)("label",{htmlFor:"name",children:"Name"}),(0,r.jsx)("input",{id:"name",onChange:g})]}),(0,r.jsxs)("div",{className:"modal-form-surname",children:[(0,r.jsx)("label",{htmlFor:"surname",children:"Surname"}),(0,r.jsx)("input",{id:"surname",onChange:g})]}),(0,r.jsxs)("div",{className:"modal-form-email",children:[(0,r.jsx)("label",{htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{id:"email",type:"email",onChange:g})]}),(0,r.jsxs)("div",{className:"modal-form-password",children:[(0,r.jsx)("label",{htmlFor:"password",children:"Password"}),(0,r.jsx)("input",{id:"password",type:"password",onChange:g})]}),(0,r.jsxs)("div",{className:"modal-form-image",children:[(0,r.jsx)("label",{htmlFor:"image",children:"Avatar"}),(0,r.jsx)(n.A,{inputId:"image",onChange:p})]}),(0,r.jsx)("div",{className:"modal-form-button",children:(0,r.jsx)(l.A,{onClick:e=>c(e,h),disabled:!h.isValid,children:s?"ADD NEW":"REGISTER"})}),!s&&(0,r.jsxs)("p",{children:["Do you have account? Go to ",(0,r.jsx)("span",{onClick:a,children:"login"})]})]})}},145:(e,a,s)=>{s.d(a,{A:()=>r});s(43);var l=s(594),n=s(941),t=s(961),i=s(579);const r=e=>{let{submitHandler:a}=e;const[s,r]=(0,t.m)({name:{value:"",isValid:!1},breed:{value:"",isValid:!1},images:{value:"",isValid:!1}},!1),c=e=>{const a=e.target.id,s=e.target.value;let l=!0;(!e.target.value.replace(/\s/g,"")||e.target.value.length<=0)&&(l=!1),r(a,s,l)};return(0,i.jsxs)("form",{className:"modal-form",children:[(0,i.jsxs)("div",{className:"modal-form-name",children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name"}),(0,i.jsx)("input",{id:"name",onChange:c})]}),(0,i.jsxs)("div",{className:"modal-form-breed",children:[(0,i.jsx)("label",{htmlFor:"breed",children:"Breed"}),(0,i.jsx)("input",{id:"breed",onChange:c})]}),(0,i.jsxs)("div",{className:"modal-form-images",children:[(0,i.jsx)("label",{htmlFor:"images",children:"Images"}),(0,i.jsx)(n.A,{inputId:"images",onChange:r})]}),(0,i.jsx)("div",{className:"modal-form-button",children:(0,i.jsx)(l.A,{onClick:e=>a(e,s),disabled:!s.isValid,children:"ADD NEW"})})]})}},870:(e,a,s)=>{s.d(a,{A:()=>r});s(43);var l=s(594),n=s(941),t=s(961),i=s(579);const r=e=>{let{submitHandler:a}=e;const[s,r]=(0,t.m)({name:{value:"",isValid:!1},description:{value:"",isValid:!1},price:{value:"",isValid:!1},category:{value:"",isValid:!1},quantity:{value:"",isValid:!1},images:{value:"",isValid:!1}},!1),c=e=>{const a=e.target.id,s=e.target.value;let l=!0;(!e.target.value.replace(/\s/g,"")||e.target.value.length<=0)&&(l=!1),r(a,s,l)};return(0,i.jsxs)("form",{className:"modal-form",children:[(0,i.jsxs)("div",{className:"modal-form-name",children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name"}),(0,i.jsx)("input",{id:"name",onChange:c})]}),(0,i.jsxs)("div",{className:"modal-form-price",children:[(0,i.jsx)("label",{htmlFor:"price",children:"Price"}),(0,i.jsx)("input",{id:"price",type:"number",onChange:c})]}),(0,i.jsxs)("div",{className:"modal-form-category",children:[(0,i.jsx)("label",{htmlFor:"category",children:"Category"}),(0,i.jsx)("input",{id:"category",onChange:c})]}),(0,i.jsxs)("div",{className:"modal-form-quantity",children:[(0,i.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),(0,i.jsx)("input",{id:"quantity",type:"number",onChange:c})]}),(0,i.jsxs)("div",{className:"modal-form-description",children:[(0,i.jsx)("label",{htmlFor:"description",children:"Description"}),(0,i.jsx)("textarea",{id:"description",onChange:c})]}),(0,i.jsxs)("div",{className:"modal-form-images",children:[(0,i.jsx)("label",{htmlFor:"images",children:"Images"}),(0,i.jsx)(n.A,{inputId:"images",onChange:r})]}),(0,i.jsx)("div",{className:"modal-form-button",children:(0,i.jsx)(l.A,{onClick:e=>a(e,s),disabled:!s.isValid,children:"ADD NEW"})})]})}},961:(e,a,s)=>{s.d(a,{m:()=>t});var l=s(43);const n=(e,a)=>{switch(a.type){case"INPUT_CHANGE":let s=!0;for(const l in e.inputs)e.inputs[l]&&(s=l===a.inputId?s&&a.isValid:s&&e.inputs[l].isValid);return{...e,inputs:{...e.inputs,[a.inputId]:{value:a.value,isValid:a.isValid}},isValid:s};case"SET_DATA":return{inputs:a.inputs,isValid:a.formIsValid};default:return e}},t=(e,a)=>{const[s,t]=(0,l.useReducer)(n,{inputs:e,isValid:a});return[s,(0,l.useCallback)(((e,a,s)=>{t({type:"INPUT_CHANGE",value:a,isValid:s,inputId:e})}),[])]}},663:(e,a,s)=>{s.d(a,{x:()=>n});var l=s(43);const n=()=>{const[e,a]=(0,l.useState)(!1),[s,n]=(0,l.useState)(),t=(0,l.useRef)([]),i=(0,l.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a(!0);const r=new AbortController;t.current.push(r);try{const n=await fetch(e,{method:s,body:l,headers:i,signal:r.signal}),c=await n.json();if(t.current=t.current.filter((e=>e!==r)),!n.ok)throw new Error(c.message);return a(!1),c}catch(c){throw n(c.message),a(!1),c}}),[]);return(0,l.useEffect)((()=>()=>{t.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:s,sendRequest:i,clearError:()=>{n(null)}}}},594:(e,a,s)=>{s.d(a,{A:()=>n});s(43);var l=s(579);const n=e=>{let{children:a,className:s,onClick:n,size:t,disabled:i}=e;return(0,l.jsx)("div",{className:"button ".concat(s," ").concat(t&&"button-"+t," ").concat(i&&"disabled"),onClick:n,children:a})}},429:(e,a,s)=>{s.d(a,{A:()=>n});s(43);var l=s(579);const n=e=>{let{src:a,alt:s,className:n,size:t,onClick:i}=e;return(0,l.jsx)("div",{className:"image ".concat(n," image-").concat(t),onClick:i||null,children:(0,l.jsx)("img",{src:a,alt:s})})}},941:(e,a,s)=>{s.d(a,{A:()=>c});var l=s(594),n=s(43);const t=s.p+"static/media/dummy_user_image.75a04487ce5e21dc1585.png";var i=s(429),r=s(579);const c=e=>{let{inputId:a,onChange:s,errorText:c}=e;const[d,o]=(0,n.useState)(!1),[m,u]=(0,n.useState)([]),[h,p]=(0,n.useState)(),[g,x]=(0,n.useState)([]),[j,v]=(0,n.useState)(),[N,f]=(0,n.useState)(!1),[b,C]=(0,n.useState)(-1),y=(0,n.useRef)();(0,n.useEffect)((()=>{if(g.length<=0)return s(a,"",!1);s(a,g,!0)}),[g]);const A=g.map(((e,a)=>(0,r.jsxs)("li",{onMouseEnter:()=>C(a),onMouseLeave:()=>C(-1),children:[(0,r.jsx)("span",{className:"".concat(b===parseInt(a)&&"active"),onClick:()=>(e=>{const a=[...g].filter((a=>a!==e));x(a)})(e),children:"x"}),(0,r.jsx)(i.A,{src:e||t,alt:"user-image",size:"medium-large",className:"center"})]},a)));return(0,r.jsxs)("div",{className:"form-control",children:[(0,r.jsx)("input",{id:a,ref:y,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:e=>{if(e.target.files&&1===e.target.files.length){const l=e.target.files[0],n=new FileReader;n.onload=()=>{const e=n.result;"images"===a?x((a=>[...a,e])):(v(e),s(a,e,!0))},n.readAsDataURL(l)}}}),(0,r.jsxs)("div",{className:"image-upload",children:[(0,r.jsxs)("div",{className:"image-upload__preview",children:["images"===a?g.length>0?(0,r.jsx)("ul",{className:"images-upload__container",children:A}):(0,r.jsx)(i.A,{src:t,alt:"user-image",size:"medium-large",className:"center"}):(0,r.jsx)(i.A,{src:j||t,alt:"user-image",size:"medium-large",className:"center"}),"images"===a?!g.length>0&&(0,r.jsx)("p",{children:"Please pick an image."}):!j&&(0,r.jsx)("p",{children:"Please pick an image."})]}),(0,r.jsx)(l.A,{type:"button",onClick:()=>{y.current.click()},size:"small",children:"PICK IMAGE"})]}),!N&&(0,r.jsx)("p",{children:c})]})}},309:(e,a,s)=>{s.d(a,{i:()=>n,s:()=>l});const l=["STORE","GALLERY","BREEDS","CART","LOGIN"],n=["STORE","GALLERY","USERS"]},677:(e,a,s)=>{s.d(a,{A:()=>d});var l=s(43),n=s(950),t=s(865),i=s(579);const r=e=>n.createPortal((0,i.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook")),c=e=>{const a=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children})]});return n.createPortal(a,document.getElementById("modal-hook"))},d=e=>(0,i.jsxs)(l.Fragment,{children:[e.show&&(0,i.jsx)(r,{onClick:e.onCancel}),(0,i.jsx)(t.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(c,{...e})})]})},778:(e,a,s)=>{e.exports=s.p+"static/media/blank_dog.91b301549b8440b33834.png"},824:(e,a,s)=>{e.exports=s.p+"static/media/dog_0.bd4ef99cb262a115a8b0.jpg"}}]);
//# sourceMappingURL=412.116041eb.chunk.js.map