webpackJsonp([1],{"2kaW":function(A,t){A.exports={"navbar.title":"Actimate","home.title.text":"What is Actimate","contact.us.title":"Contact us","home.other.content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}},"4+hh":function(A,t){},"6KiH":function(A,t,e){"use strict";function n(A){e("LdKe")}var a=e("oMBD"),s=e("Zq3w"),i=e("VU/8"),o=n,c=i(a.a,s.a,!1,o,"data-v-936261a2",null);t.a=c.exports},"92WL":function(A,t,e){"use strict";t.a={name:"HomePage",data:function(){return{showSignUp:!1,showContactUs:!1}},methods:{success:function(){this.showSignUp=!1,this.$notify({message:this.$i("message"),type:"success"})},error:function(){this.showSignUp=!1,this.$notify({message:this.$i("message"),type:"danger"})},scrollToEnd:function(A){var t=this;setTimeout(function(){t.$el.querySelector("#home-page").querySelector(A).scrollIntoView({behavior:"smooth",block:"start"})},10)},openSignUp:function(){this.showSignUp=!0,this.scrollToEnd("#registration")},openContactUs:function(){this.showContactUs=!0,this.scrollToEnd("#contact-us")}}}},BOcp:function(A,t,e){"use strict";function n(A){e("vRny"),e("yG5n")}var a=e("U0o5"),s=e("FgWV"),i=e("VU/8"),o=n,c=i(a.a,s.a,!1,o,null,null);t.a=c.exports},BSZy:function(A,t,e){"use strict";var n=e("Zrlr"),a=e.n(n),s=function A(){a()(this,A),this.id=null,this.email="",this.content="",this.sender=""};t.a=s},EYnN:function(A,t,e){A.exports=e.p+"static/img/eng.99b7a70.jpeg"},FgWV:function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"root"}},[e("page-root"),A._v(" "),e("notifications")],1)},a=[],s={render:n,staticRenderFns:a};t.a=s},GbHS:function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("form",{attrs:{id:"registration"}},[e("md-card",{attrs:{id:"registration-card"}},[e("md-card-header",[e("div",{staticClass:"md-title "},[A._v(A._s(A.$i("sign.up.title")))])]),A._v(" "),e("md-card-content",{attrs:{id:"card-content"}},[e("md-field",{class:A.getValidationClass("email")},[e("label",[A._v(A._s(A.$i("email")))]),A._v(" "),e("md-input",{attrs:{name:"email"},on:{input:function(t){A.$v.user.email.$touch()}},model:{value:A.user.email,callback:function(t){A.$set(A.user,"email",t)},expression:"user.email"}}),A._v(" "),A.$v.user.email.required?A.$v.user.email.email?A._e():e("span",{staticClass:"md-error"},[A._v(" "+A._s(A.$i("validation.email"))+" ")]):e("span",{staticClass:"md-error"},[A._v(" "+A._s(A.$i("validation.required")))])],1),A._v(" "),e("md-field",{class:A.getValidationClass("password")},[e("label",[A._v(A._s(A.$i("password")))]),A._v(" "),e("md-input",{attrs:{type:"password"},on:{input:function(t){A.$v.user.password.$touch()}},model:{value:A.user.password,callback:function(t){A.$set(A.user,"password",t)},expression:"user.password"}}),A._v(" "),A.$v.user.email.required?A.$v.user.email.password?A._e():e("span",{staticClass:"md-error"},[A._v(" "+A._s(A.$i("validation.password"))+" ")]):e("span",{staticClass:"md-error"},[A._v(" "+A._s(A.$i("validation.required")))])],1)],1),A._v(" "),e("md-button",{staticClass:"md-primary",on:{click:function(t){A.registration()}}},[A._v(A._s(A.$i("sign-up")))])],1)],1)])},a=[],s={render:n,staticRenderFns:a};t.a=s},LdKe:function(A,t){},NHnr:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("7+uW"),a=e("Lgyv"),s=e.n(a),i=e("4+hh"),o=(e.n(i),e("giDI")),c=(e.n(o),e("ESwS")),r=e.n(c),d=e("1SRG"),u=e.n(d),l=e("U0v6"),m=e.n(l),v=(e("QxPg"),e("1P+R"),e("jS54")),f=e.n(v),p=e("0hmO"),g=e.n(p),h=e("gqTA"),x=e.n(h),_=e("eusF"),b=e.n(_),C=e("kK+V"),V=e("jl7A"),O=e("dUE8"),j=e("gWQ7"),w=e("uYMo"),z=e("6KiH"),T=e("2kaW"),P=e.n(T),E=e("SMZu"),U=e.n(E),R=e("BOcp"),S={eng:P.a,hu:U.a},$=[{name:"actimate",url:"http://localhost:8080",headers:{}}];n.default.component(m.a.name,m.a),n.default.use(s.a),n.default.use(r.a),n.default.use(u.a),n.default.use(f.a,S),n.default.use(b.a,$),n.default.use(g.a,{landingPage:"home-page"}),n.default.use(x.a),n.default.component("home-page",C.a),n.default.component("profile-page",V.a),n.default.component("contact-us-component",O.a),n.default.component("registration-component",j.a),n.default.component("navbar-component",w.a),n.default.component("footer-component",z.a),new n.default({el:"#root",template:"<Root/>",components:{Root:R.a}})},OLUI:function(A,t){},SMZu:function(A,t){A.exports={"navbar.title":"Actimate","home.title.text":" <3 Morcica <3"}},SZFj:function(A,t){},U0o5:function(A,t,e){"use strict";t.a={name:"Root",methods:{addNotification:function(A){this.$notify({message:A,type:"success"})}}}},UFfP:function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("navbar-component"),A._v(" "),e("div",{staticClass:"md-medium-size-60",attrs:{id:"home-page"}},[e("div",{staticClass:"fancy-text",attrs:{id:"introduction"}},[e("h3",{staticClass:"md-xsmall-size-25 md-small-size-45 home-page-text"},[A._v(A._s(A.$i("home.title.text")))]),A._v(" "),e("p",{staticClass:"md-xsmall-size-25 md-small-size-45 home-page-text"},[A._v(A._s(A.$i("home.title.content")))])]),A._v(" "),e("div",{staticClass:"bgimg-1"},[e("div",{staticClass:"caption",attrs:{id:"sign-up-button-div"}},[e("md-button",{staticClass:"md-dense show-button",attrs:{id:"sign-up-button"},on:{click:A.openSignUp}},[A._v(A._s(A.$i("sign.up")))])],1)]),A._v(" "),e("transition",{attrs:{name:"growAppearAndCollapseFade"}},[A.showSignUp?e("div",{attrs:{id:"registration"}},[e("registration-component",{on:{success:A.success,error:A.error}})],1):A._e()]),A._v(" "),e("div",{staticClass:"fancy-text"},[e("h3",{staticClass:"md-xsmall-size-25 md-small-size-45 home-page-text"},[A._v(A._s(A.$i("home.fancy.text")))]),A._v(" "),e("p",{staticClass:"md-xsmall-size-25 md-small-size-45 home-page-text"},[A._v(A._s(A.$i("home.fancy.content")))])]),A._v(" "),e("div",{staticClass:"bgimg-2"},[e("div",{staticClass:"caption",attrs:{id:"contact-us-button-div"}},[e("md-button",{staticClass:"md-dense show-button",attrs:{id:"contact-us-button"},on:{click:A.openContactUs}},[A._v(A._s(A.$i("contact.us")))])],1)]),A._v(" "),e("transition",{attrs:{name:"growAppearAndCollapseFade"}},[A.showContactUs?e("div",{attrs:{id:"contact-us"}},[e("contact-us-component",{on:{success:function(t){A.showContactUs=!1}}})],1):A._e()]),A._v(" "),e("div",{staticClass:"fancy-text"},[e("h3",{staticClass:"md-xsmall-size-25 md-small-size-45 home-page-text"},[A._v(A._s(A.$i("home.other.text")))]),A._v(" "),e("p",{staticClass:"md-xsmall-size-25 md-small-size-45 home-page-text"},[A._v(A._s(A.$i("home.other.content")))])]),A._v(" "),e("div",{staticClass:"bgimg-3"})],1),A._v(" "),e("footer-component")],1)},a=[],s={render:n,staticRenderFns:a};t.a=s},"Ui/T":function(A,t,e){"use strict";var n=e("Zrlr"),a=e.n(n),s=function A(){a()(this,A),this.id=null,this.email="",this.password=""};t.a=s},Zq3w:function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"d-flex justify-content-between"},[n("div",[n("div",{staticClass:"brand"},[A._v("\n        Actimate | 2019\n      ")]),A._v(" "),n("div",{staticClass:"language"},[n("button",{staticClass:"lang-button",on:{click:function(t){A.$setLang("hu")}}},[n("img",{staticClass:"button-img",attrs:{src:e("lbu9")}})]),A._v(" "),n("button",{staticClass:"lang-button",on:{click:function(t){A.$setLang("eng")}}},[n("img",{staticClass:"button-img",attrs:{src:e("EYnN")}})])])])])])},a=[],s={render:n,staticRenderFns:a};t.a=s},aigj:function(A,t){},dUE8:function(A,t,e){"use strict";function n(A){e("oPR+")}var a=e("mfWt"),s=e("egx/"),i=e("VU/8"),o=n,c=i(a.a,s.a,!1,o,"data-v-a15d1c54",null);t.a=c.exports},"egx/":function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"contact-us"}},[e("form",[e("div",[e("md-card",{attrs:{id:"contact-us-card"}},[e("md-card-header",[e("div",{staticClass:"md-title "},[A._v(A._s(A.$i("contact.us.title")))])]),A._v(" "),e("md-card-content",{attrs:{id:"card-content"}},[e("md-field",[e("label",[A._v(A._s(A.$i("email")))]),A._v(" "),e("md-input",{attrs:{required:""},model:{value:A.email.email,callback:function(t){A.$set(A.email,"email",t)},expression:"email.email"}}),A._v(" "),e("span",{staticClass:"md-error"},[A._v("The age is required")])],1),A._v(" "),e("md-field",[e("label",[A._v(A._s(A.$i("sender")))]),A._v(" "),e("md-input",{model:{value:A.email.sender,callback:function(t){A.$set(A.email,"sender",t)},expression:"email.sender"}})],1),A._v(" "),e("md-field",[e("label",[A._v(A._s(A.$i("message")))]),A._v(" "),e("md-textarea",{attrs:{required:""},model:{value:A.email.content,callback:function(t){A.$set(A.email,"content",t)},expression:"email.content"}})],1)],1),A._v(" "),e("md-button",{staticClass:"md-primary",on:{click:function(t){A.sendEmail()}}},[A._v(A._s(A.$i("send")))])],1)],1)])])},a=[],s={render:n,staticRenderFns:a};t.a=s},gWQ7:function(A,t,e){"use strict";function n(A){e("aigj")}var a=e("vScN"),s=e("GbHS"),i=e("VU/8"),o=n,c=i(a.a,s.a,!1,o,"data-v-3a84a9ba",null);t.a=c.exports},giDI:function(A,t){},jl7A:function(A,t,e){"use strict";function n(A){e("mx+A")}var a=e("xMC3"),s=e("lWET"),i=e("VU/8"),o=n,c=i(a.a,s.a,!1,o,"data-v-3440d7fe",null);t.a=c.exports},"kK+V":function(A,t,e){"use strict";function n(A){e("SZFj")}var a=e("92WL"),s=e("UFfP"),i=e("VU/8"),o=n,c=i(a.a,s.a,!1,o,"data-v-716d7480",null);t.a=c.exports},lWET:function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"profile-page"}},[e("navbar-component"),A._v(" "),A._m(0),A._v(" "),e("footer-component")],1)},a=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("h1",[A._v("LAJOS")])])}],s={render:n,staticRenderFns:a};t.a=s},lbu9:function(A,t){A.exports="data:image/jpeg;base64,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"},"mRN+":function(A,t,e){"use strict";t.a={name:"NavbarComponent"}},maKt:function(A,t,e){"use strict";var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"nav-bar"},[e("md-toolbar",{staticClass:"md-dense",attrs:{"md-elevation":"1"}},[e("h4",{staticClass:"md-title",attrs:{id:"navbar-title"}},[A._v(A._s(A.$i("navbar.title")))]),A._v(" "),e("md-button",{staticClass:"md-primary",on:{click:function(t){A.$navigate("home-page")}}},[A._v(A._s(A.$i("navbar.home")))])],1)],1)},a=[],s={render:n,staticRenderFns:a};t.a=s},mfWt:function(A,t,e){"use strict";var n=e("BSZy"),a=e("ESwS"),s=(e.n(a),e("+cKO"));e.n(s);t.a={name:"ContactUsComponent",data:function(){return{email:new n.a}},validations:{email:{email:{required:s.required,email:s.email},content:{required:s.required},sender:{required:s.required}}},methods:{sendEmail:function(){console.log(this.email),this.$actimate.post("/api/contact-us",this.email).then(this.handleSuccess).catch(this.handleError)},handleSuccess:function(){this.$emit("success")},handleError:function(A){this.$emit("success")}},mixins:[a.validationMixin]}},"mx+A":function(A,t){},oMBD:function(A,t,e){"use strict";t.a={name:"FooterComponent"}},"oPR+":function(A,t){},uYMo:function(A,t,e){"use strict";function n(A){e("OLUI")}var a=e("mRN+"),s=e("maKt"),i=e("VU/8"),o=n,c=i(a.a,s.a,!1,o,"data-v-69a9cf2d",null);t.a=c.exports},vRny:function(A,t){},vScN:function(A,t,e){"use strict";var n=e("Ui/T"),a=e("ESwS"),s=(e.n(a),e("+cKO")),i=(e.n(s),s.helpers.regex("passwordPattern",/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/));t.a={name:"RegistrationComponent",data:function(){return{user:new n.a}},validations:{user:{email:{required:s.required,email:s.email},password:{required:s.required,passwordPattern:i}}},methods:{registration:function(){this.$actimate.post("/api/registration",this.user).then(this.handleSuccessRegistration).catch(this.handleErrorRegistration)},getValidationClass:function(A){var t=this.$v.user[A];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},handleSuccessRegistration:function(){this.$emit("success")},handleErrorRegistration:function(){this.$emit("error")}},mixins:[a.validationMixin]}},xMC3:function(A,t,e){"use strict";t.a={name:"ProfilePage"}},yG5n:function(A,t){}},["NHnr"]);
//# sourceMappingURL=app.6e8713864e09fef02462.js.map