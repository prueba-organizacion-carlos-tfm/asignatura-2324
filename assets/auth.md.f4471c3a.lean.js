import{s}from"./chunks/index.61e47978.js";import{_,o as r,c as a,z as u,a as d,t as i,G as p}from"./chunks/framework.65549c57.js";const g={data(){return{userlogged:!1,role:null,currentUser:null}},methods:{async logout(){await s.dispatch("logout",{}),this.role=null,this.currentUser=null},async login(){await s.dispatch("login",{organization:"proyecto-prueba-tfm-carlos"});const t=s.getters.userData;this.role=t.role,this.currentUser=t.user.displayName}},beforeMount(){const t=s.getters.userData;t.user?(this.role=t.role,this.currentUser=t.user.displayName):console.log("no autenticado")}},h={key:0},m=u("h1",null," LOGIN FIREBASE (GitHub) ",-1),f={key:1};function y(t,e,c,N,n,o){return r(),a("div",null,[n.role==null?(r(),a("div",h,[m,u("button",{type:"button",onClick:e[0]||(e[0]=(...l)=>o.login&&o.login(...l))}," Login ")])):(r(),a("div",f,[d(" Welcome "+i(n.role)+" "+i(n.currentUser)+" ",1),u("button",{type:"button",onClick:e[1]||(e[1]=(...l)=>o.logout&&o.logout(...l))}," Logout ")]))])}const b=_(g,[["render",y]]),D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"auth.md","filePath":"auth.md","lastUpdated":1687251839000}'),v={name:"auth.md"},U=Object.assign(v,{setup(t){return(e,c)=>(r(),a("div",null,[p(b)]))}});export{D as __pageData,U as default};