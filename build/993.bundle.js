"use strict";(self.webpackChunkps_redux=self.webpackChunkps_redux||[]).push([[993],{2634:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7294),r=n(7135),a=n(4818),c=n(1635),i=n(1758),u=r.Z.Title;function m(e){e.error;var t=e.resetErrorBoundary;return console.log("object"),l.createElement(a.Z,null,l.createElement(c.Z,null,l.createElement(u,{level:4},"Something went wrong"),l.createElement(i.Z,{onClick:t},"Click To Try Again... ")))}r.Z.Text},4993:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var l=n(3430),r=n(7294),a=n(5474),c=(0,n(2222).P1)((function(e){return e.users}),(function(e){return e.userId}),(function(e,t){return e.filter((function(e){return t===e.login.uuid}))})),i=n(9226),u=n(5977),m=n(5800),o=n(7135),s=n(4818),E=n(7049),Z=n(1635),g=n(2634),d=o.Z.Text,f=o.Z.Link;function p(e){var t=e.singleUser;return r.createElement(s.Z,null,r.createElement(d,{strong:!0},"Username : "),r.createElement(d,{italic:!0},t.login.username),r.createElement(E.Z,null),r.createElement(d,{strong:!0},"Date Of Birth : "),r.createElement(d,{italic:!0},t.dob.date),r.createElement(E.Z,null),r.createElement(d,{strong:!0},"Current Age : "),r.createElement(d,{italic:!0},t.dob.age),r.createElement(E.Z,null),r.createElement(d,{strong:!0},"Gender : "),r.createElement(d,{italic:!0},t.gender),r.createElement(E.Z,null),r.createElement(d,{strong:!0},"Email : "),r.createElement(f,{target:"_blank"},t.email),r.createElement(E.Z,null),r.createElement(d,{strong:!0},"Cell : "),r.createElement(d,{italic:!0},t.cell))}var v=o.Z.Text;function k(e){var t=e.singleUser;return r.createElement(s.Z,null,r.createElement(v,{strong:!0},"Address : "),r.createElement(v,{italic:!0},"Street NO# ",t.location.street.number," ",t.location.street.name,",",t.location.city),r.createElement(E.Z,null),r.createElement(v,{strong:!0},"City : "),r.createElement(v,{italic:!0},t.location.city),r.createElement(E.Z,null),r.createElement(v,{strong:!0},"State : "),r.createElement(v,{italic:!0},t.location.state),r.createElement(E.Z,null),r.createElement(v,{strong:!0},"Country : "),r.createElement(v,{italic:!0},t.location.country),r.createElement(E.Z,null),r.createElement(v,{strong:!0},"Nationality : "),r.createElement(v,{italic:!0},t.nat),".",r.createElement(E.Z,null),r.createElement(v,{strong:!0},"Phone : "),r.createElement(v,{italic:!0},t.phone))}o.Z.Link;var y=n(1069),b=o.Z.Title;const h=function(e){var t=e.singleUser;return r.createElement(s.Z,null,r.createElement(Z.Z,{span:24},r.createElement(y.Z,{src:t.picture.large,alt:t.picture.large,style:{borderRadius:"50%"}}),r.createElement(E.Z,null,r.createElement(b,{level:2},t.name.title+" "+t.name.first+" "+t.name.last))))};var T=o.Z.Text,C=(o.Z.Link,o.Z.Title);const U=function(e){var t=(0,u.k6)(),n=(0,i.v9)((function(e){return e.users})),o=e.match.params.userId,d=(0,i.v9)((function(e){return c(e)}));(0,r.useEffect)((function(){0===n.length&&t.push("/"),console.log("object",y)}),[y]);var f=(0,r.useState)({}),v=(0,l.Z)(f,2),y=v[0],b=v[1];return(0,a.n5)(o),r.createElement(s.Z,null,r.createElement(m.ErrorBoundary,{FallbackComponent:g.Z,onReset:function(){b("")}},r.createElement(T,{id:"ForTesting"},y)),r.createElement(E.Z,null,r.createElement(C,{level:2},"User Details")),r.createElement(Z.Z,{span:24},null==d?void 0:d.map((function(e){return r.createElement(s.Z,{key:e.login.uuid,style:{textAlign:"center"}},r.createElement(Z.Z,{span:24},r.createElement(h,{singleUser:e})),r.createElement(s.Z,null,r.createElement(Z.Z,{span:12},r.createElement(p,{singleUser:e})),r.createElement(Z.Z,{span:12},r.createElement(k,{singleUser:e}))))}))))}}}]);
//# sourceMappingURL=993.bundle.js.map