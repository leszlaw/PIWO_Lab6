(this.webpackJsonplab5=this.webpackJsonplab5||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(33),i=n.n(s),r=(n(41),n(42),n(36)),j=n(10),b=n(22),o=n(23),u=n(25),l=n(24),d=n(28),O=n.n(d),h=n(34),p=n(17);n(44),n(53);p.a.apps.length?p.a.app():p.a.initializeApp({apiKey:"AIzaSyBf0pwhV_bM7vd5beYvDO0frqQ7Y7FW538",authDomain:"student-announcement-cbbb1.firebaseapp.com",projectId:"student-announcement-cbbb1",storageBucket:"student-announcement-cbbb1.appspot.com",messagingSenderId:"597172804305",appId:"1:597172804305:web:1bc00e7071456b34dbc3f0",measurementId:"G-SCF5MMJQ7F"});var x=p.a.auth(),f=p.a.firestore(),m=function(){var e=Object(h.a)(O.a.mark((function e(t,n,c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.collection("announcements").add({name:t,announcement:n,email:c}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),g=n(1),v=function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("br",{}),Object(g.jsxs)("p",{children:["Imie: ",e.name]}),Object(g.jsxs)("p",{children:["Opis: ",e.description]}),Object(g.jsx)("a",{href:"mailto:"+e.email,children:"wyslij wiadomosc"})]}),Object(g.jsx)("br",{})]})},I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this)).handleNameChange=function(e){c.setState({name:e.target.value})},c.handleDescChange=function(e){c.setState({description:e.target.value})},c.handleEmailChange=function(e){c.setState({email:e.target.value})},c.state={func:e,name:"",description:"",email:""},c}return Object(o.a)(n,[{key:"createStudent",value:function(){""!==this.state.description&&(this.state.func.func(),m(x.currentUser.displayName,this.state.description,x.currentUser.email),this.setState({name:"",description:"",email:""}))}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{children:[Object(g.jsxs)("p",{children:["Dodanie nowego studenta ",this.state.test]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{children:"Opis: \xa0\xa0"}),Object(g.jsx)("input",{type:"text",value:this.state.description,onChange:this.handleDescChange})]}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.createStudent.bind(this),children:"+"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})})}}]),n}(a.a.Component),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){this.props.students.map((function(e){return Object(g.jsx)(v,{text:e},e)}));return Object(g.jsx)("ul",{children:this.props.students})}}]),n}(a.a.Component),_=n(5),S=n.p+"static/media/1.5753b634.png",W=n.p+"static/media/2.b3f9d6c1.png",w=n.p+"static/media/3.c1b1f274.png",C=function(){return Object(g.jsxs)(_.d,{children:[Object(g.jsx)(_.b,{path:"/PIWO_Lab6/",exact:!0,children:Object(g.jsx)("img",{src:S})}),Object(g.jsx)(_.b,{path:"/PIWO_Lab6/students",children:Object(g.jsx)("img",{src:W})}),Object(g.jsx)(_.b,{path:"PIWO_Lab6/add_student",children:Object(g.jsx)("img",{src:w})}),Object(g.jsx)(_.b,{children:Object(g.jsx)("img",{src:S})})]})},L=n(9),N=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){var e=x.onAuthStateChanged((function(e){e?a(e):(a(null),console.log("user not logged"))}));return function(){return e}}),[]);return n?Object(g.jsxs)("nav",{className:"topNav",children:[Object(g.jsx)(L.b,{to:"/PIWO_Lab6/",exact:!0,children:"Strona glowna"}),Object(g.jsx)(L.b,{to:"/PIWO_Lab6/students",children:"Lista studentow"}),Object(g.jsx)(L.b,{to:"/PIWO_Lab6/add_student",children:"Dodaj studenta"}),Object(g.jsx)("a",{children:n.displayName}),Object(g.jsx)("a",{onClick:function(){x.signOut()},href:"/PIWO_Lab6/login",children:"Wyloguj"})]}):Object(g.jsxs)("nav",{className:"topNav",children:[Object(g.jsx)(L.b,{to:"/PIWO_Lab6/",exact:!0,children:"Strona glowna"}),Object(g.jsx)(L.b,{to:"/PIWO_Lab6/students",children:"Lista studentow"}),Object(g.jsx)(L.b,{to:"/PIWO_Lab6/login",children:"Zaloguj"}),Object(g.jsx)(L.b,{to:"/PIWO_Lab6/register",children:"Zarejestruj"})]})},y=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),r=i[0],b=i[1],o=Object(c.useState)(!1),u=Object(j.a)(o,2),l=u[0],d=u[1];return l?Object(g.jsx)(_.a,{to:"/PIWO_Lab6/add_student"}):Object(g.jsxs)("div",{className:"form",children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{className:"font-input",placeholder:"Email",value:n,onChange:function(e){a(e.target.value)}})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{className:"font-input",placeholder:"Password",type:"password",value:r,onChange:function(e){b(e.target.value)}})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){x.signInWithEmailAndPassword(n,r).then((function(e){console.log("zalogowano"),d(!0)})).catch((function(e){console.log(e)}))},children:"Zaloguj"})})]})},k=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),r=i[0],b=i[1],o=Object(c.useState)(""),u=Object(j.a)(o,2),l=u[0],d=u[1],O=Object(c.useState)(!1),h=Object(j.a)(O,2),p=h[0],f=h[1];return p?Object(g.jsx)(_.a,{to:"/PIWO_Lab6/add_student"}):Object(g.jsxs)("div",{className:"form",children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{className:"font-input",placeholder:"Name",value:l,onChange:function(e){d(e.target.value)}})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{className:"font-input",placeholder:"Email",value:n,onChange:function(e){a(e.target.value)}})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{className:"font-input",placeholder:"Password",type:"password",value:r,onChange:function(e){b(e.target.value)}})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){x.createUserWithEmailAndPassword(n,r).then((function(e){e.user.updateProfile({displayName:l}),console.log("zarejestrowano"),f(!0)})).catch((function(e){console.log(e)}))},children:"Zarejestruj"})})]})},F=function(){return Object(g.jsx)("p",{children:"Witaj na stronie na ktorej mozesz sie oglosic aby znalezc grupe!"})},E=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){f.collection("announcements").get().then((function(e){e.docs.forEach((function(e){var t;t=Object(g.jsx)(v,{name:e.data().name,description:e.data().announcement,email:e.data().email},Math.random()),a((function(e){return[].concat(Object(r.a)(e),[t])}))}))}))};return Object(g.jsx)(L.a,{children:Object(g.jsxs)("section",{id:"wrapper",children:[Object(g.jsx)(C,{}),Object(g.jsx)(N,{}),Object(g.jsx)("div",{className:"botContent",children:Object(g.jsxs)(_.d,{children:[Object(g.jsx)(_.b,{path:"/PIWO_Lab6/",exact:!0,children:Object(g.jsx)(F,{})}),Object(g.jsx)(_.b,{path:"/PIWO_Lab6/students",children:Object(g.jsx)(P,{students:n})}),Object(g.jsx)(_.b,{path:"/PIWO_Lab6/add_student",children:Object(g.jsx)(I,{func:s})}),Object(g.jsx)(_.b,{path:"/PIWO_Lab6/login",children:Object(g.jsx)(y,{})}),Object(g.jsx)(_.b,{path:"/PIWO_Lab6/register",children:Object(g.jsx)(k,{})}),Object(g.jsx)(_.b,{children:Object(g.jsx)("p",{children:"404 NOT FOUND"})})]})})]})})};var z=function(){return Object(g.jsx)(E,{})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(z,{})}),document.getElementById("root")),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.bab03fe1.chunk.js.map