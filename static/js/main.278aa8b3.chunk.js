(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(e,t,a){e.exports=a(507)},286:function(e,t,a){},506:function(e,t,a){},507:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(254),i=a.n(l),o=(a(286),a(25)),c=a(19),m=a(3),s=a(66),d=a.n(s);const u=m.c.header`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  box-shadow: 0 2px 8px rgba(47, 72, 196, 0.04);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`,p=m.c.img`
  height: 40px;
  width: auto;
  margin-right: 2rem;
`,g=m.c.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`,h=Object(m.c)(o.b)`
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.2s;
  position: relative;
  &:hover, &:focus {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,E=Object(m.c)(o.b)`
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: #fff;
  background: ${e=>{let{theme:t}=e;return t.colors.primary}};
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  margin-left: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(47, 72, 196, 0.08);
  transition: background 0.2s;
  display: inline-block;
  &:hover, &:focus {
    background: ${e=>{let{theme:t}=e;return t.colors.accent}};
    color: #fff;
  }
`,f=m.c.a`
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  padding: 0.25rem 0;
  transition: color 0.2s;
  position: relative;
  &:hover, &:focus {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,y=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;function b(){return n.a.createElement(u,null,n.a.createElement(y,null,n.a.createElement(f,{href:"https://stablekernel.com/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p,{src:d.a,alt:"Stable Kernel Logo"})),n.a.createElement(g,null,n.a.createElement(h,{to:"/"},"Home"),n.a.createElement(h,{to:"/maturity-dashboard"},"Maturity Dashboard"),n.a.createElement(h,{to:"/mitigation-roadmap"},"Mitigation Roadmap"),n.a.createElement(E,{to:"/maturity-dashboard"},"View Assessment"))))}var v=a(4);const x=[{key:"design",label:"Design",color:"text",icon:n.a.createElement(v.D,null),path:"/design"},{key:"refine",label:"Refine",color:"feature",icon:n.a.createElement(v.v,null),path:"/refine"},{key:"develop",label:"Develop",color:"develop",icon:n.a.createElement(v.p,null),path:"/develop"},{key:"stabilize",label:"Stabilize",color:"stabilize",icon:n.a.createElement(v.q,null),path:"/stabilize"},{key:"deploy",label:"Deploy",color:"deploy",icon:n.a.createElement(v.F,null),path:"/deploy"}],k=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  overflow-x: auto;
`,w=m.c.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>{let{theme:t,color:a,selected:r}=e;return"text"===a?r?t.colors.text:t.colors.secondaryBackground:r?t.colors[a]:t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t,color:a,selected:r}=e;return"text"===a?r?"#fff":t.colors.text:r?"#fff":t.colors[a]}};
  border: 2px solid ${e=>{let{theme:t,color:a}=e;return"text"===a?t.colors.text:t.colors[a]}};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: ${e=>{let{selected:t}=e;return t?"0 4px 16px rgba(47,72,196,0.10)":"none"}};
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  margin-bottom: 0.5rem;
`,S=m.c.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  color: ${e=>{let{theme:t,color:a,selected:r}=e;return r?t.colors[a]:t.colors.text}};
`;function C(e){let{onSelect:t,selectedPhase:a}=e;const[l,i]=Object(r.useState)(a||x[0].key),o=Object(c.f)();return n.a.createElement(k,null,x.map(e=>n.a.createElement("div",{key:e.key,style:{textAlign:"center"}},n.a.createElement(w,{color:e.color,selected:l===e.key,onClick:()=>((e,a)=>{i(e),t&&t(e),a&&o.push(a)})(e.key,e.path),"aria-label":e.label},e.icon),n.a.createElement(S,{color:e.color,selected:l===e.key},e.label))))}var z=a(508),I=a(509),A=a(267),$=a(268),T=a(54),M=a(114),D=a(110),O=a(68),P=a(510),B=a(269),R=a(71),L=a(511),j=a(512),F=a(111),W=a(113),q=a(272);const V={overallScore:72,phaseScores:[{phase:"Design",score:80,phaseName:"Design"},{phase:"Refine",score:60,phaseName:"Refine"},{phase:"Develop",score:70,phaseName:"Develop"},{phase:"Stabilize",score:75,phaseName:"Stabilize"},{phase:"Deploy",score:65,phaseName:"Deploy"}],maturityCategories:[{name:"Security",value:65,fullMark:100},{name:"Compliance",value:80,fullMark:100},{name:"Infrastructure",value:75,fullMark:100},{name:"Process",value:68,fullMark:100},{name:"Team",value:85,fullMark:100}],maturitySeverity:[{name:"High",value:4,color:"#ff4136"},{name:"Medium",value:7,color:"#ff851b"},{name:"Low",value:13,color:"#2ecc40"}],improvementAreas:["Release pipeline lacks automation (30-40 min builds)","Android: 103 SDKs, iOS: 44 SDKs - update risks","Configuration management prone to errors","Native-WebView data sharing complexity","Legacy code removal challenges","Manual App/Play Store uploads required"],completedImprovements:["Outdated dependencies with security vulnerabilities","Missing automated testing in CI pipeline","Inadequate error handling","Poor password policy requirements","Configuration drift across environments","Manual release process inefficiencies"],lastUpdated:"2024-05-06 15:00"},H=[{phase:"Design",icon:n.a.createElement(v.D,{size:24}),color:"text"},{phase:"Refine",icon:n.a.createElement(v.v,{size:24}),color:"feature"},{phase:"Develop",icon:n.a.createElement(v.p,{size:24}),color:"develop"},{phase:"Stabilize",icon:n.a.createElement(v.q,{size:24}),color:"stabilize"},{phase:"Deploy",icon:n.a.createElement(v.F,{size:24}),color:"deploy"}],U=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,K=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,G=m.c.div`
  flex: 1;
`,N=m.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{color:t}=e;return t}};
  margin-bottom: 0.5rem;
`,J=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 1.5rem;
`,X=m.c.h3`
  font-size: 1.1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin-bottom: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,Q=m.c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 0.5rem 0 1.5rem 0;
`,_=m.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`,Z=m.c.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`,Y=m.c.li`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: ${e=>{let{theme:t,iconColor:a}=e;return t.colors[a]||t.colors.text}};
  }
`,ee=m.c.div`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`,te=m.c.span`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 0.25rem;
`,ae=m.c.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,re=m.c.button`
  background: none;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${e=>{let{active:t,theme:a}=e;return t?a.colors.primary:a.colors.text}};
  font-weight: ${e=>{let{active:t,theme:a}=e;return t?a.fonts.weights.medium:a.fonts.weights.regular}};
  border-bottom: 2px solid ${e=>{let{active:t,theme:a}=e;return t?a.colors.primary:"transparent"}};
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
  
  &:focus {
    outline: none;
  }
`,ne=m.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,le=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
`;function ie(e,t){return e>=75?"#2ecc40":e>=60?t.colors.accent:"#ff4136"}const oe=e=>{const{x:t,y:a,width:r,value:l}=e;return n.a.createElement("g",null,n.a.createElement("text",{x:t+r/2,y:a-10,fill:"#333",textAnchor:"middle",dominantBaseline:"middle"},l))};function ce(){const e=Object(m.e)(),[t,a]=Object(r.useState)("overview"),{overallScore:l,phaseScores:i,maturityCategories:o,maturitySeverity:c,improvementAreas:s,completedImprovements:d,lastUpdated:u}=V,p=ie(l,e);return n.a.createElement(U,null,n.a.createElement(K,null,n.a.createElement(G,null,n.a.createElement("div",null,"Comprehensive view of project maturity levels and improvement progress"))),n.a.createElement(ae,null,n.a.createElement(re,{active:"overview"===t?"true":"false",onClick:()=>a("overview")},"Overview"),n.a.createElement(re,{active:"details"===t?"true":"false",onClick:()=>a("details")},"Detailed Analysis")),"overview"===t?n.a.createElement(n.a.Fragment,null,n.a.createElement(X,null,n.a.createElement(v.h,{style:{color:e.colors.primary}}),"Overall Maturity Assessment"),n.a.createElement(ne,null,n.a.createElement(le,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement(N,{color:p},l),n.a.createElement(J,null,"Overall Maturity Score"),n.a.createElement(z.a,{width:"100%",height:180},n.a.createElement(I.a,{data:i,margin:{top:10,right:20,left:0,bottom:0}},n.a.createElement(A.a,{dataKey:"phase",tick:{fontSize:14}}),n.a.createElement($.a,{domain:[0,100],hide:!0}),n.a.createElement(T.a,null),n.a.createElement(M.a,{dataKey:"score"},i.map((t,a)=>n.a.createElement(D.a,{key:`cell-${a}`,fill:ie(t.score,e)})),n.a.createElement(O.a,{dataKey:"score",position:"top",style:{fontSize:14,fontWeight:600}})))),n.a.createElement(Q,null,H.map(t=>{let{phase:a,icon:r,color:l}=t;return n.a.createElement(_,{key:a},n.a.cloneElement(r,{color:e.colors[l]}),n.a.createElement(te,null,a))}))),n.a.createElement(le,null,n.a.createElement(X,null,n.a.createElement(v.t,{style:{color:e.colors.accent}}),"Improvement Areas"),n.a.createElement(Z,null,s.map((t,a)=>n.a.createElement(Y,{key:a},n.a.createElement(v.t,{size:14,style:{color:e.colors.accent}}),t))),n.a.createElement(X,{style:{marginTop:"1.5rem"}},n.a.createElement(v.i,{style:{color:e.colors.primary}}),"Recently Mitigated"),n.a.createElement(Z,null,d.map((t,a)=>n.a.createElement(Y,{key:a},n.a.createElement(v.i,{size:14,style:{color:e.colors.primary}}),t)))))):n.a.createElement(ne,null,n.a.createElement(le,null,n.a.createElement(X,null,n.a.createElement(v.I,{style:{color:e.colors.security}}),"Risk Severity Distribution"),n.a.createElement(z.a,{width:"100%",height:250},n.a.createElement(P.a,null,n.a.createElement(B.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,label:oe,outerRadius:80,fill:"#8884d8",dataKey:"value"},c.map((e,t)=>n.a.createElement(D.a,{key:`cell-${t}`,fill:e.color}))),n.a.createElement(T.a,null),n.a.createElement(R.a,null)))),n.a.createElement(le,null,n.a.createElement(X,null,n.a.createElement(v.h,{style:{color:e.colors.primary}}),"Category Maturity Assessment"),n.a.createElement(z.a,{width:"100%",height:250},n.a.createElement(L.a,{cx:"50%",cy:"50%",outerRadius:80,data:o},n.a.createElement(j.a,null),n.a.createElement(F.a,{dataKey:"name"}),n.a.createElement(W.a,{angle:30,domain:[0,100]}),n.a.createElement(q.a,{name:"Maturity Score",dataKey:"value",stroke:e.colors.primary,fill:e.colors.primary,fillOpacity:.6}),n.a.createElement(T.a,null))))),n.a.createElement(ee,null,"Last updated: ",u))}const me=m.c.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  padding: 4rem 2rem 2rem 2rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  overflow: hidden;
`,se=m.c.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 40vw;
  max-width: 500px;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
  transform: translateX(-50%);
`,de=m.c.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,ue=m.c.h1`
  font-size: 2.5rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1rem;
`,pe=m.c.p`
  font-size: 1.25rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 2rem;
`,ge=m.c.section`
  padding: 3rem 2rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
`,he=m.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
`,Ee=m.c.div`
  flex: 1 1 0;
  margin-bottom: 0;
  padding: 1.5rem 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.04);
  min-width: 0;
`,fe=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${e=>{let{color:t,theme:a}=e;return a.colors[t]}};
  margin-bottom: 0.75rem;
`,ye=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`,be=m.c.span`
  font-size: 1.1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  display: flex;
  align-items: center;
  height: 2rem;
`,ve=m.c.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,xe=m.c.ul`
  margin: 0.5rem 0 0 0;
  padding-left: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1rem;
  text-align: left;
  align-items: flex-start;
`,ke=m.c.li`
  margin-bottom: 0.4rem;
`,we=m.c.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`,Se=m.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Ce=m.c.div`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,ze=m.c.h3`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
`;function Ie(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(me,null,n.a.createElement(de,null,n.a.createElement(ue,null,"Software Lifecycle Maturity Assessment"),n.a.createElement(pe,null,"Evaluate and improve capabilities across every phase of your software development lifecycle")),n.a.createElement(se,{src:d.a,alt:"Watermark"})),n.a.createElement(ge,null,n.a.createElement(he,null,"Lifecycle Phases"),n.a.createElement(C,null),n.a.createElement(ve,null,n.a.createElement(Ee,{id:"phase-design"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-design",color:"text"},n.a.createElement(v.D,null)),n.a.createElement(be,null,"Design")),n.a.createElement(xe,null,n.a.createElement(ke,null,"A/B Testing"),n.a.createElement(ke,null,"Accessibility"),n.a.createElement(ke,null,"Prototyping"),n.a.createElement(ke,null,"UX Research"),n.a.createElement(ke,null,"Wireframes"))),n.a.createElement(Ee,{id:"phase-refine"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-refine",color:"feature"},n.a.createElement(v.v,null)),n.a.createElement(be,null,"Refine")),n.a.createElement(xe,null,n.a.createElement(ke,null,"Feature 360"),n.a.createElement(ke,null,"Product Roadmap"),n.a.createElement(ke,null,"ROI Hypothesis"),n.a.createElement(ke,null,"Story Curation"),n.a.createElement(ke,null,"Success Metrics"))),n.a.createElement(Ee,{id:"phase-develop"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-develop",color:"develop"},n.a.createElement(v.p,null)),n.a.createElement(be,null,"Develop")),n.a.createElement(xe,null,n.a.createElement(ke,null,"Dev Standards"),n.a.createElement(ke,null,"Infra - Local | EUT"),n.a.createElement(ke,null,"Maintainability"),n.a.createElement(ke,null,"Security Standards"),n.a.createElement(ke,null,"Code Quality"))),n.a.createElement(Ee,{id:"phase-stabilize"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-stabilize",color:"stabilize"},n.a.createElement(v.q,null)),n.a.createElement(be,null,"Stabilize")),n.a.createElement(xe,null,n.a.createElement(ke,null,"CICD - Stage Gates"),n.a.createElement(ke,null,"Data Management"),n.a.createElement(ke,null,"Resiliency"),n.a.createElement(ke,null,"STLC"),n.a.createElement(ke,null,"Usability"))),n.a.createElement(Ee,{id:"phase-deploy"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-deploy",color:"deploy"},n.a.createElement(v.F,null)),n.a.createElement(be,null,"Deploy")),n.a.createElement(xe,null,n.a.createElement(ke,null,"Analytics"),n.a.createElement(ke,null,"Contingencies"),n.a.createElement(ke,null,"Feature rollouts"),n.a.createElement(ke,null,"Observability"),n.a.createElement(ke,null,"Support")))),n.a.createElement(we,{id:"cross-phase-ttt"},n.a.createElement(Se,null,n.a.createElement(Ce,null,n.a.createElement(v.K,null)),n.a.createElement(ze,null,"Tools, Tech & Talent")))),n.a.createElement(ge,null,n.a.createElement(he,null,"Maturity Dashboard"),n.a.createElement(ce,null)))}const Ae=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,$e=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Te=Object(m.c)(o.b)`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  margin-right: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }

  svg {
    margin-right: 0.5rem;
  }
`,Me=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,De=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.text}};
  border-radius: 50%;
  font-size: 2rem;
  margin-right: 1.5rem;
`,Oe=m.c.div`
  flex: 1;
`,Pe=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Be=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Re=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Le=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,je=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Fe=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.primary}};
  margin-right: 1rem;
`,We=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,qe=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,Ve=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,He=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function Ue(){return n.a.createElement(Ae,null,n.a.createElement($e,null,n.a.createElement(Te,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(Me,null,n.a.createElement(De,null,n.a.createElement(v.D,null)),n.a.createElement(Oe,null,n.a.createElement(Pe,null,"Design Phase"),n.a.createElement(Be,null,"The foundation of successful software projects starts with thoughtful design"))),n.a.createElement(Re,null,n.a.createElement(Le,null,n.a.createElement(je,null,n.a.createElement(Fe,{color:"text"},n.a.createElement(v.x,null)),n.a.createElement(We,null,"UX Research")),n.a.createElement(qe,null,"User experience research forms the backbone of effective design, ensuring products meet user needs and expectations.",n.a.createElement(Ve,null,n.a.createElement(He,null,"User interviews and surveys"),n.a.createElement(He,null,"Personas and user journey mapping"),n.a.createElement(He,null,"Competitive analysis"),n.a.createElement(He,null,"Usability testing")))),n.a.createElement(Le,null,n.a.createElement(je,null,n.a.createElement(Fe,{color:"text"},n.a.createElement(v.a,null)),n.a.createElement(We,null,"Accessibility")),n.a.createElement(qe,null,"Designing for all users enhances product reach and compliance with legal standards.",n.a.createElement(Ve,null,n.a.createElement(He,null,"WCAG compliance"),n.a.createElement(He,null,"Screen reader compatibility"),n.a.createElement(He,null,"Color contrast and readability"),n.a.createElement(He,null,"Keyboard navigation support")))),n.a.createElement(Le,null,n.a.createElement(je,null,n.a.createElement(Fe,{color:"text"},n.a.createElement(v.h,null)),n.a.createElement(We,null,"A/B Testing")),n.a.createElement(qe,null,"Data-driven design decisions lead to optimized user experiences and better business outcomes.",n.a.createElement(Ve,null,n.a.createElement(He,null,"Test hypothesis formation"),n.a.createElement(He,null,"Statistical significance planning"),n.a.createElement(He,null,"Multivariate testing"),n.a.createElement(He,null,"Iterative design improvements")))),n.a.createElement(Le,null,n.a.createElement(je,null,n.a.createElement(Fe,{color:"text"},n.a.createElement(v.M,null)),n.a.createElement(We,null,"Wireframes")),n.a.createElement(qe,null,"Visual blueprints that guide development and align stakeholder expectations.",n.a.createElement(Ve,null,n.a.createElement(He,null,"Low-fidelity sketches"),n.a.createElement(He,null,"Interactive prototypes"),n.a.createElement(He,null,"Information architecture"),n.a.createElement(He,null,"User flow diagrams"))))))}const Ke=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Ge=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Ne=Object(m.c)(o.b)`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  margin-right: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }

  svg {
    margin-right: 0.5rem;
  }
`,Je=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Xe=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.feature}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.feature}};
  border-radius: 50%;
  font-size: 2rem;
  margin-right: 1.5rem;
`,Qe=m.c.div`
  flex: 1;
`,_e=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Ze=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Ye=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,et=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,tt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,at=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.primary}};
  margin-right: 1rem;
`,rt=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,nt=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,lt=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,it=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function ot(){return n.a.createElement(Ke,null,n.a.createElement(Ge,null,n.a.createElement(Ne,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(Je,null,n.a.createElement(Xe,null,n.a.createElement(v.v,null)),n.a.createElement(Qe,null,n.a.createElement(_e,null,"Refine Phase"),n.a.createElement(Ze,null,"Transform design concepts into well-defined requirements and implementation plans"))),n.a.createElement(Ye,null,n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(at,{color:"feature"},n.a.createElement(v.g,null)),n.a.createElement(rt,null,"Product Roadmap")),n.a.createElement(nt,null,"Strategic planning that aligns development with business objectives and market needs.",n.a.createElement(lt,null,n.a.createElement(it,null,"Feature prioritization"),n.a.createElement(it,null,"Release planning"),n.a.createElement(it,null,"Stakeholder alignment"),n.a.createElement(it,null,"Milestone definition")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(at,{color:"feature"},n.a.createElement(v.B,null)),n.a.createElement(rt,null,"ROI Hypothesis")),n.a.createElement(nt,null,"Economic analysis to ensure development efforts yield meaningful business returns.",n.a.createElement(lt,null,n.a.createElement(it,null,"Cost-benefit analysis"),n.a.createElement(it,null,"Resource allocation planning"),n.a.createElement(it,null,"Market opportunity assessment"),n.a.createElement(it,null,"Success metrics definition")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(at,{color:"feature"},n.a.createElement(v.E,null)),n.a.createElement(rt,null,"Feature 360")),n.a.createElement(nt,null,"Comprehensive analysis of each feature from multiple perspectives to ensure completeness.",n.a.createElement(lt,null,n.a.createElement(it,null,"User story development"),n.a.createElement(it,null,"Edge case identification"),n.a.createElement(it,null,"Acceptance criteria"),n.a.createElement(it,null,"Integration requirements")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(at,{color:"feature"},n.a.createElement(v.f,null)),n.a.createElement(rt,null,"Story Curation")),n.a.createElement(nt,null,"Development of clear, complete user stories that capture requirements and acceptance criteria.",n.a.createElement(lt,null,n.a.createElement(it,null,"Persona-based story writing"),n.a.createElement(it,null,"Acceptance criteria definition"),n.a.createElement(it,null,"Story prioritization"),n.a.createElement(it,null,"Backlog management"))))))}const ct=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,mt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,st=Object(m.c)(o.b)`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  margin-right: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }

  svg {
    margin-right: 0.5rem;
  }
`,dt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,ut=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.develop}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.develop}};
  border-radius: 50%;
  font-size: 2rem;
  margin-right: 1.5rem;
`,pt=m.c.div`
  flex: 1;
`,gt=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,ht=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Et=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ft=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`,yt=m.c.div`
  position: sticky;
  top: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 20;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`,bt=m.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  text-align: left;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.background}};
`,vt=m.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,xt=m.c.div`
  font-size: 2rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.primary}};
  background: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.primary}}15;
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
`,kt=m.c.h2`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  line-height: 1.2;
  display: flex;
  align-items: center;
`,wt=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,St=m.c.div`
  margin-bottom: 3rem;
`,Ct=m.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
  }
`,zt=m.c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  border-left: 4px solid ${e=>{let{score:t,theme:a}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  overflow: hidden;
`,It=m.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  }
`,At=m.d`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
`,$t=m.d`
  from {
    opacity: 1;
    max-height: 500px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`,Tt=m.c.div`
  font-size: 0.8rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.7;
  transition: transform 0.3s ease;
  transform: rotate(${e=>{let{expanded:t}=e;return t?"180deg":"0deg"}});
`,Mt=m.c.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: ${e=>{let{trend:t,theme:a}=e;return"up"===t?"#2ecc40":"down"===t?"#ff4136":a.colors.text}};
`,Dt=m.c.div`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  animation: ${e=>{let{expanded:t}=e;return t?At:$t}} 0.3s ease;
  overflow: hidden;
`,Ot=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
`,Pt=m.c.li`
  margin-bottom: 0.5rem;
`,Bt=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.primary}}10;
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  font-size: 0.85rem;
`,Rt=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
`,Lt=m.c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 0.25rem;
`,jt=m.c.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
`,Ft=m.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 0.25rem;
  font-size: 0.85rem;
`,Wt=m.c.div`
  background: linear-gradient(135deg, ${e=>{let{score:t,theme:a}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}}15, ${e=>{let{score:t,theme:a}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}}05);
  border: 2px solid ${e=>{let{score:t,theme:a}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`,qt=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Vt=m.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{score:t,theme:a}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  margin-bottom: 0.25rem;
`,Ht=m.c.div`
  position: sticky;
  top: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 10;
  padding: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  margin: 0 -1rem 1rem -1rem;
`,Ut=m.c.div`
  display: flex;
  gap: 0.5rem;
`,Kt=m.c.button`
  background: ${e=>{let{theme:t}=e;return t.colors.primary}};
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.primary}}dd;
  }
  
  &:focus {
    outline: none;
  }
`,Gt=m.c.span`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,Nt=m.c.span`
  font-size: 1.2rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  min-width: 1.5rem;
  text-align: center;
  display: inline-block;
`;function Jt(){const[e,t]=Object(r.useState)({}),[a,l]=Object(r.useState)(null),[i,o]=n.a.useState({releasePipelineAutomation:"M",sdkManagementComplexity:"L",configurationManagement:"M",nativeWebviewDataSharing:"M",legacyCodeRemoval:"L"}),[c,m]=n.a.useState({appStartupPerformance:"L",webViewLoadTime:"M",coreWebVitals:"L",cacheOptimization:"M",networkBandwidthOptimization:"L"}),[s,d]=n.a.useState({iosCrashFreeRate:"M",androidCrashFreeRate:"M",crashReproducibility:"L",crashImpactAnalysis:"M",reliabilityTooling:"M"}),[u,p]=n.a.useState({unitTestCoverage:"M",endToEndTestFramework:"M",testInfrastructure:"M",crossTeamTestAccessibility:"L",testToolOptimization:"M"}),[g,h]=n.a.useState({platformMigrationProgress:"M",multiDeviceStrategy:"L",modularArchitecture:"L",codeHealthMetrics:"M",technologyStackModernization:"M"}),[E,f]=n.a.useState({cicdPipelineAutomation:"L",codeQualityGates:"L",buildArtifactManagement:"M",manualProcessElimination:"L",aiAssistedDevelopment:"L"}),y=e=>{t(t=>({...t,[e]:!t[e]}))},b=e=>{l(e)},x=()=>{l(null)},k=e=>{switch(e){case"H":return 3;case"M":return 2;case"L":return 1;default:return 2}},w=e=>{switch(e){case"H":return"#28a745";case"M":return"#ffc107";case"L":return"#dc3545";case"High":return"#28a745";case"Medium":return"#ffc107";case"Low":return"#dc3545";default:return"#6c757d"}},S=e=>e>=2.5?"High":e>=1.5?"Medium":"Low",C=Math.round(Object.values(i).reduce((e,t)=>e+k(t),0)/Object.values(i).length),z=S(C);return n.a.createElement(ct,null,n.a.createElement(mt,null,n.a.createElement(st,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(dt,null,n.a.createElement(ut,null,n.a.createElement(v.p,null)),n.a.createElement(pt,null,n.a.createElement(gt,null,"Develop Phase"),n.a.createElement(ht,null,"Building robust, maintainable, and secure code for your application"))),n.a.createElement(St,null,n.a.createElement(Ct,null,n.a.createElement(v.t,null),"Assessment Results"),n.a.createElement(Et,null,n.a.createElement(ft,{style:{position:"relative"}},n.a.createElement(yt,null,n.a.createElement(bt,null,n.a.createElement(vt,null,n.a.createElement(xt,{color:"security"},n.a.createElement(v.t,null)),n.a.createElement(kt,null,"Maintainability")),n.a.createElement(Ut,null,n.a.createElement(Kt,{onClick:()=>{t(["releasePipelineAutomation","sdkManagementComplexity","configurationManagement","nativeWebviewDataSharing","legacyCodeRemoval"].reduce((e,t)=>({...e,[t]:!0}),{}))},title:"Expand All"},n.a.createElement(v.k,null)),n.a.createElement(Kt,{onClick:()=>{t({})},title:"Collapse All"},n.a.createElement(v.m,null))))),n.a.createElement(wt,null,Object.entries({releasePipelineAutomation:{label:"Release Pipeline Automation",trend:"down",risks:["App has planned releases every 2 weeks (10 business days)","3 of those 10 days are devoted to preparing for the release","Build Release Pipelines lack automation unit test coverage","Engineers must manually input the values for App and Build versions","Builds typically run for 30-40 minutes before complete"],actions:["Implement automated CI/CD pipeline with unit test coverage","Add automated uploads to App/Play Stores","Reduce build time through parallel processing","Implement automated version management"],correlations:["sdkManagementComplexity","configurationManagement"],timeline:[{date:"2024-01-15",event:"Identified manual release process bottleneck"},{date:"2024-03-20",event:"Started CI/CD pipeline planning"},{date:"2024-05-01",event:"Pilot automated testing implementation"}]},sdkManagementComplexity:{label:"SDK Management Complexity",trend:"stable",risks:["Android has 103 SDKs; iOS has 44","Updating SDKs when required is risky","SDK updates typically introduce bugs","Complex dependency management across platforms"],actions:["Implement automated SDK update testing","Create SDK compatibility matrix","Establish SDK update review process","Implement gradual rollout strategy"],correlations:["releasePipelineAutomation","configurationManagement"],timeline:[{date:"2024-02-10",event:"Documented SDK inventory"},{date:"2024-04-05",event:"Created update testing framework"}]},configurationManagement:{label:"Configuration Management",trend:"down",risks:["Configuration values prone to errors","Feature switches difficult to maintain","Challenges maintaining configs across environments","Manual configuration deployment process"],actions:["Implement configuration as code","Create centralized configuration management","Add configuration validation and testing","Implement environment-specific config validation"],correlations:["releasePipelineAutomation","nativeWebviewDataSharing"],timeline:[{date:"2024-01-20",event:"Identified configuration drift issues"},{date:"2024-03-15",event:"Started configuration audit"}]},nativeWebviewDataSharing:{label:"Native-WebView Data Sharing",trend:"up",risks:["Increased complexity of data sharing between native and WebView","Maintaining source of truth for data is challenging","Synchronization issues between components","Complex state management across platforms"],actions:["Implement unified data layer","Create data synchronization protocols","Add data validation and error handling","Implement data versioning strategy"],correlations:["configurationManagement","legacyCodeRemoval"],timeline:[{date:"2024-02-25",event:"Identified data sharing complexity"},{date:"2024-04-10",event:"Started unified data layer design"}]},legacyCodeRemoval:{label:"Legacy Code Removal",trend:"stable",risks:["Legacy code is intertwined with new implementation","Difficult to remove legacy code safely","Risk of breaking existing functionality","Complex dependency analysis required"],actions:["Create comprehensive dependency mapping","Implement gradual legacy code removal strategy","Add extensive testing for each removal step","Establish rollback procedures"],correlations:["nativeWebviewDataSharing"],timeline:[{date:"2024-01-30",event:"Started legacy code audit"},{date:"2024-03-25",event:"Created removal roadmap"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(zt,{key:r,score:i[r]},n.a.createElement(It,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Gt,null,l.label),n.a.createElement(Mt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.A,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:i[r],onChange:e=>((e,t)=>{o(a=>({...a,[e]:t}))})(r,e.target.value),onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:w(i[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Nt,{score:i[r],onClick:()=>b(r),style:{cursor:"pointer",color:w(i[r])}},i[r]),n.a.createElement(v.s,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),b(r)}}),n.a.createElement(Tt,{expanded:e[r]},e[r]?n.a.createElement(v.k,null):n.a.createElement(v.l,null)))),e[r]&&n.a.createElement(Dt,{expanded:e[r]},n.a.createElement(Ht,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Maturity Factors"))),n.a.createElement(Ot,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.y,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Maturity Correlations")),n.a.createElement(Rt,null,l.correlations.map((e,t)=>n.a.createElement(Lt,{key:t},n.a.createElement(v.y,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.n,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(jt,null,l.timeline.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Wt,{score:C},n.a.createElement(qt,null,"Overall Maintainability"),n.a.createElement(Vt,{score:C,style:{color:w(z)}},z)))),n.a.createElement(ft,{style:{position:"relative"}},n.a.createElement(yt,null,n.a.createElement(bt,null,n.a.createElement(vt,null,n.a.createElement(xt,{color:"primary"},n.a.createElement(v.n,null)),n.a.createElement(kt,null,"Performance")),n.a.createElement(Ut,null,n.a.createElement(Kt,{onClick:()=>{const e=["appStartupPerformance","webViewLoadTime","coreWebVitals","cacheOptimization","networkBandwidthOptimization"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.k,null)),n.a.createElement(Kt,{onClick:()=>{const e=["appStartupPerformance","webViewLoadTime","coreWebVitals","cacheOptimization","networkBandwidthOptimization"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.m,null))))),n.a.createElement(wt,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(255, 193, 7, 0.1)",borderLeft:"4px solid #ffc107",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"How might we measure and improve the true and perceived performance of the app for The Home Depot customers?"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},'Customer feedback data tells us customers increasingly have a perception that our app is "slow" or "clunky".')),Object.entries({appStartupPerformance:{label:"App Startup Performance",trend:"down",currentState:"App startup performance is dependent on network bandwidth",risks:["Currently using embrace tooling (moments) to measure startup performance","Performance varies significantly based on network bandwidth","Startup times impact first impression of app quality","Need to optimize UX for low bandwidth usage"],actions:["Implement app startup performance optimization strategies","Add progressive loading for critical first-screen content","Optimize initial bundle size and lazy load non-critical components","Implement offline-first startup experience"],correlations:["cacheOptimization","networkBandwidthOptimization"],timeline:[{date:"2024-01-15",event:"Identified startup performance as customer pain point"},{date:"2024-03-20",event:"Implemented embrace tooling for measurement"},{date:"2024-05-01",event:"Started bandwidth optimization initiative"}]},webViewLoadTime:{label:"WebView Load Time",trend:"stable",currentState:"Load time for WebViews is WebView container load to WebView complete callback. Load time for Native screens is Native view container load to first interactable native element load time",risks:["WebView container load to complete callback measurement may not reflect user experience","Native-WebView bridge communication delays","WebView initialization overhead impacts perceived performance","Inconsistent performance between WebView and native screens"],actions:["Optimize WebView initialization and pre-loading","Implement WebView pooling for faster screen transitions","Enhance native-WebView bridge for faster data communication","Add progressive loading indicators for better perceived performance"],correlations:["cacheOptimization","appStartupPerformance"],timeline:[{date:"2024-02-10",event:"Established WebView performance measurement baseline"},{date:"2024-04-05",event:"Started WebView bridge optimization"}]},coreWebVitals:{label:"Core Web Vitals (CWV)",trend:"down",currentState:"Core web vitals are measured against mobile web (on Android only)",risks:["CWV measurements only on Android, no iOS coverage","WebView performance may not match mobile web expectations","Goal is to have WebViews with the same perceived performance as native","Missing comprehensive performance monitoring across platforms"],actions:["Expand CWV measurement to iOS WebViews","Implement comprehensive performance monitoring framework","Optimize WebView rendering to meet native performance standards","Create performance budgets and alerts for CWV metrics"],correlations:["webViewLoadTime","cacheOptimization"],timeline:[{date:"2024-01-20",event:"Started CWV measurement on Android WebViews"},{date:"2024-03-15",event:"Identified performance gap vs native"}]},cacheOptimization:{label:"Cache Optimization",trend:"up",currentState:"We cache select WebView static files and use native rendering UX to improve perceived performance. We manage a standard cache validation TTL (1-3 hours), but would like it to be smarter",risks:["Standard cache TTL (1-3 hours) is not optimized for content types","Limited WebView caching to select screens only","Cache invalidation strategy needs improvement","Want to expand cached WebViews to more screens"],actions:["Implement intelligent cache TTL based on content type and update frequency","Expand WebView caching to additional screens","Add cache preloading for frequently accessed content","Implement cache versioning and smart invalidation"],correlations:["webViewLoadTime","appStartupPerformance"],timeline:[{date:"2024-02-25",event:"Implemented selective WebView static file caching"},{date:"2024-04-10",event:"Started smart cache TTL development"}]},networkBandwidthOptimization:{label:"Network Bandwidth Optimization",trend:"stable",currentState:"We want to optimize UX for low bandwidth usage. We have a native to JavaScript WebView bridge to communicate data that can be leveraged to improve performance",risks:["Poor user experience on low bandwidth connections","Native-WebView bridge underutilized for performance optimization","Network requests not optimized for mobile conditions","Missing adaptive content delivery based on connection quality"],actions:["Implement adaptive content delivery based on network conditions","Leverage native-WebView bridge for efficient data sharing","Add request batching and prioritization","Implement progressive image loading and compression"],correlations:["appStartupPerformance","cacheOptimization"],timeline:[{date:"2024-01-30",event:"Identified low bandwidth UX issues"},{date:"2024-03-25",event:"Started native-WebView bridge optimization"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(zt,{key:r,score:c[r]},n.a.createElement(It,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Gt,null,l.label),n.a.createElement(Mt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.A,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:c[r],onChange:e=>{m(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:w(c[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Nt,{score:c[r],onClick:()=>b(r),style:{cursor:"pointer",color:w(c[r])}},c[r]),n.a.createElement(v.s,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),b(r)}}),n.a.createElement(Tt,{expanded:e[r]},e[r]?n.a.createElement(v.k,null):n.a.createElement(v.l,null)))),e[r]&&n.a.createElement(Dt,{expanded:e[r]},n.a.createElement(Ht,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.t,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Performance Challenges")),n.a.createElement(Ot,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.y,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Performance Correlations")),n.a.createElement(Rt,null,l.correlations.map((e,t)=>n.a.createElement(Lt,{key:t},n.a.createElement(v.y,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.n,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(jt,null,l.timeline.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Wt,{score:Math.round(Object.values(c).reduce((e,t)=>e+k(t),0)/Object.values(c).length)},n.a.createElement(qt,null,"Overall Performance"),n.a.createElement(Vt,{score:Math.round(Object.values(c).reduce((e,t)=>e+k(t),0)/Object.values(c).length),style:{color:w(S(Object.values(c).reduce((e,t)=>e+k(t),0)/Object.values(c).length))}},S(Object.values(c).reduce((e,t)=>e+k(t),0)/Object.values(c).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Assessment Framework Goal:"),n.a.createElement("p",{style:{margin:"0.25rem 0 0 0"}},"Seeking recommendations for a best-in-class app performance measurement framework and tooling for both WebView and native needs, considering organizational and operational complexity."))))),n.a.createElement(ft,{style:{position:"relative"}},n.a.createElement(yt,null,n.a.createElement(bt,null,n.a.createElement(vt,null,n.a.createElement(xt,{color:"stabilize"},n.a.createElement(v.I,null)),n.a.createElement(kt,null,"Reliability")),n.a.createElement(Ut,null,n.a.createElement(Kt,{onClick:()=>{const e=["iosCrashFreeRate","androidCrashFreeRate","crashReproducibility","crashImpactAnalysis","reliabilityTooling"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.k,null)),n.a.createElement(Kt,{onClick:()=>{const e=["iosCrashFreeRate","androidCrashFreeRate","crashReproducibility","crashImpactAnalysis","reliabilityTooling"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.m,null))))),n.a.createElement(wt,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(40, 167, 69, 0.1)",borderLeft:"4px solid #28a745",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current Reliability Tracking"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"We currently track this metric via Embrace tooling."),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"0.5rem"}},n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"iOS:")," 99.85% current (Goal: 99.9% for 2024)"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(40, 167, 69, 0.1)",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Android:")," 99.8% current (Goal: 99.85% for 2024)"))),Object.entries({iosCrashFreeRate:{label:"iOS Crash-Free Rate",trend:"up",currentState:"Currently at 99.85% with a goal of 99.9% for 2024. Tracked via Embrace tooling.",risks:["Currently at 99.85%, need to improve by 0.05% to meet 2024 goal","Small margin for error - even minor crashes impact SLA significantly","iOS-specific crashes may be harder to reproduce in development","Device fragmentation and iOS version compatibility issues"],actions:["Implement proactive crash prevention strategies","Enhanced iOS-specific testing across device variants","Improve crash reproduction tools and processes","Create automated crash trend analysis and alerting"],correlations:["androidCrashFreeRate","crashReproducibility"],timeline:[{date:"2024-01-15",event:"Set 99.9% crash-free rate goal for iOS"},{date:"2024-03-20",event:"Implemented enhanced iOS crash monitoring"},{date:"2024-05-01",event:"Started proactive crash prevention initiatives"}]},androidCrashFreeRate:{label:"Android Crash-Free Rate",trend:"stable",currentState:"Currently at 99.8% with a goal of 99.85% for 2024. Tracked via Embrace tooling.",risks:["Currently at 99.8%, need to improve by 0.05% to meet 2024 goal","Android device fragmentation creates more crash scenarios","OS version compatibility across wide range of devices","Hardware variations impact app stability"],actions:["Enhance Android device testing coverage","Implement crash clustering and root cause analysis","Develop Android-specific stability improvements","Create device-specific crash monitoring dashboards"],correlations:["iosCrashFreeRate","crashImpactAnalysis"],timeline:[{date:"2024-02-10",event:"Set 99.85% crash-free rate goal for Android"},{date:"2024-04-05",event:"Enhanced Android fragmentation testing"}]},crashReproducibility:{label:"Crash Reproducibility",trend:"down",currentState:"Many crashes are difficult to reproduce, making root cause analysis and fixes challenging.",risks:["Difficult to reproduce crashes lead to longer resolution times","Unable to validate fixes without reproduction","Customer impact continues while investigating elusive crashes","Engineering time wasted on unreproducible issues"],actions:["Implement enhanced crash context capture (device state, user journey)","Create crash reproduction environment with varied device configurations","Add user session replay for crash scenarios","Develop crash simulation and testing frameworks"],correlations:["iosCrashFreeRate","androidCrashFreeRate"],timeline:[{date:"2024-01-20",event:"Identified reproducibility as major challenge"},{date:"2024-03-15",event:"Started enhanced crash context capture project"}]},crashImpactAnalysis:{label:"Crash Impact Analysis",trend:"up",currentState:"A typical crash rarely impacts more than 0.05% of customers, but collectively all crashes add up to a crash-free rate below SLAs.",risks:["Individual crashes seem minor but collectively miss SLA targets","Cumulative impact of small crashes creates significant reliability gap","Difficult to prioritize which crashes to fix first","Customer experience degradation from aggregate crash frequency"],actions:["Implement crash impact scoring and prioritization matrix","Create cumulative impact dashboards and alerts","Develop crash frequency vs impact analysis tools","Establish crash remediation prioritization framework"],correlations:["androidCrashFreeRate","reliabilityTooling"],timeline:[{date:"2024-02-25",event:"Analyzed cumulative crash impact on SLA"},{date:"2024-04-10",event:"Started crash prioritization framework development"}]},reliabilityTooling:{label:"Reliability Tooling",trend:"stable",currentState:"Currently using Embrace for reliability tracking. Seeking recommendations for best-in-class toolset.",risks:["Single tool dependency may not provide comprehensive coverage","May be missing advanced reliability measurement capabilities","Limited integration with development and deployment workflows","Potential gaps in proactive reliability monitoring"],actions:["Evaluate comprehensive reliability tooling options","Implement multi-layered reliability monitoring approach","Integrate reliability metrics into CI/CD pipeline","Create custom reliability dashboards and alerting"],correlations:["crashImpactAnalysis","crashReproducibility"],timeline:[{date:"2024-01-30",event:"Started evaluation of reliability tooling options"},{date:"2024-03-25",event:"Initiated best-in-class tooling research"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(zt,{key:r,score:s[r]},n.a.createElement(It,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Gt,null,l.label),n.a.createElement(Mt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.A,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:s[r],onChange:e=>{d(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:w(s[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Nt,{score:s[r],onClick:()=>b(r),style:{cursor:"pointer",color:w(s[r])}},s[r]),n.a.createElement(v.s,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),b(r)}}),n.a.createElement(Tt,{expanded:e[r]},e[r]?n.a.createElement(v.k,null):n.a.createElement(v.l,null)))),e[r]&&n.a.createElement(Dt,{expanded:e[r]},n.a.createElement(Ht,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.t,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Reliability Challenges")),n.a.createElement(Ot,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.y,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Reliability Correlations")),n.a.createElement(Rt,null,l.correlations.map((e,t)=>n.a.createElement(Lt,{key:t},n.a.createElement(v.y,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.n,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(jt,null,l.timeline.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Wt,{score:Math.round(Object.values(s).reduce((e,t)=>e+k(t),0)/Object.values(s).length)},n.a.createElement(qt,null,"Overall Reliability"),n.a.createElement(Vt,{score:Math.round(Object.values(s).reduce((e,t)=>e+k(t),0)/Object.values(s).length),style:{color:w(S(Object.values(s).reduce((e,t)=>e+k(t),0)/Object.values(s).length))}},S(Object.values(s).reduce((e,t)=>e+k(t),0)/Object.values(s).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(40, 167, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Tooling Assessment Goal:"),n.a.createElement("p",{style:{margin:"0.25rem 0 0 0"}},"Seeking recommendations for what a best-in-class toolset for reliability measurement would look like, beyond current Embrace implementation."))))),n.a.createElement(ft,{style:{position:"relative"}},n.a.createElement(yt,null,n.a.createElement(bt,null,n.a.createElement(vt,null,n.a.createElement(xt,{color:"develop"},n.a.createElement(v.j,null)),n.a.createElement(kt,null,"Testing")),n.a.createElement(Ut,null,n.a.createElement(Kt,{onClick:()=>{const e=["unitTestCoverage","endToEndTestFramework","testInfrastructure","crossTeamTestAccessibility","testToolOptimization"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.k,null)),n.a.createElement(Kt,{onClick:()=>{const e=["unitTestCoverage","endToEndTestFramework","testInfrastructure","crossTeamTestAccessibility","testToolOptimization"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.m,null))))),n.a.createElement(wt,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"What best practice methodologies and technologies should be put in place for ensuring quality in app?"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"How can we make creating, managing, and running tests as easy as possible for both the app team and other product teams who deliver capabilities through app?")),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(40, 167, 69, 0.1)",borderLeft:"4px solid #28a745",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current Testing Infrastructure"),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"1fr",gap:"0.5rem"}},n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},n.a.createElement("strong",null,"Unit Tests:")," 80% branch coverage requirement - Android (JUnit), iOS (XCTest)"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},n.a.createElement("strong",null,"E2E Tests:")," Bugbear (WebDriverIO wrapper) for browser/app test reusability"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(40, 167, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},n.a.createElement("strong",null,"Testbed:")," SauceLabs with virtual & physical devices"))),Object.entries({unitTestCoverage:{label:"Unit Test Coverage & Standards",trend:"up",currentState:"All new modules are expected to instrument a minimum of 80% branch unit test coverage. Android utilizes JUnit and iOS uses the XCTest framework.",risks:["80% coverage requirement may not ensure quality if tests are not well-designed","Different frameworks (JUnit vs XCTest) create maintenance overhead","Branch coverage alone may miss edge cases and integration scenarios","Enforcement and monitoring of coverage standards needs improvement"],actions:["Implement automated coverage reporting and enforcement in CI/CD","Add mutation testing to validate test quality beyond coverage metrics","Create shared testing standards and best practices across platforms","Implement test quality gates with meaningful assertions validation"],correlations:["endToEndTestFramework","crossTeamTestAccessibility"],timeline:[{date:"2024-01-15",event:"Established 80% branch coverage requirement"},{date:"2024-03-20",event:"Implemented coverage monitoring tools"},{date:"2024-05-01",event:"Started test quality improvement initiative"}]},endToEndTestFramework:{label:"End-to-End Test Framework (Bugbear)",trend:"stable",currentState:"Regression Tests are written in The Home Depot custom tool called Bugbear. Bugbear is a wrapper around WebDriverIO that simplifies test writing, improves traceability, provides standardized configs, and enables test reusability between browser and app.",risks:["Custom tool dependency creates maintenance burden and learning curve","Limited community support compared to mainstream testing frameworks","Potential technical debt if WebDriverIO evolves faster than Bugbear wrapper","May miss out on newer testing technologies and methodologies"],actions:["Evaluate modern testing frameworks against Bugbear reusability benefits","Create comprehensive Bugbear documentation and training materials","Implement Bugbear version management and upgrade planning","Assess hybrid approach with multiple testing tools for different scenarios"],correlations:["testInfrastructure","testToolOptimization"],timeline:[{date:"2024-02-10",event:"Completed Bugbear vs alternatives evaluation"},{date:"2024-04-05",event:"Enhanced Bugbear documentation and training"}]},testInfrastructure:{label:"Test Infrastructure (SauceLabs)",trend:"up",currentState:"The Home Depot currently utilizes SauceLabs to run End-to-End tests with a combination of virtual devices, public & private physical devices hosted in SauceLabs cloud.",risks:["Cloud testing dependency may impact test reliability and speed","Cost scaling with increased test volume and device coverage","Limited control over test environment configuration and debugging","Potential vendor lock-in with SauceLabs platform"],actions:["Implement hybrid testing infrastructure with local device farms","Optimize SauceLabs usage and cost management strategies","Evaluate alternative device cloud providers and capabilities","Create infrastructure monitoring and performance optimization"],correlations:["endToEndTestFramework","crossTeamTestAccessibility"],timeline:[{date:"2024-01-20",event:"Expanded SauceLabs device coverage"},{date:"2024-03-15",event:"Implemented test infrastructure monitoring"}]},crossTeamTestAccessibility:{label:"Cross-Team Test Accessibility",trend:"down",currentState:"Need to make creating, managing, and running tests as easy as possible for both the app team and other product teams who deliver capabilities through the app.",risks:["Complex test setup barriers prevent other product teams from contributing","Lack of self-service testing capabilities creates bottlenecks","Inconsistent testing practices across different product teams","Knowledge silos limit test maintenance and collaboration"],actions:["Create self-service testing platform with guided workflows","Implement test-as-code with version control and collaboration features","Develop testing training programs and documentation for product teams","Build automated test generation tools and templates"],correlations:["unitTestCoverage","testToolOptimization"],timeline:[{date:"2024-02-25",event:"Identified cross-team testing challenges"},{date:"2024-04-10",event:"Started self-service testing platform development"}]},testToolOptimization:{label:"Test Tool Evaluation & Optimization",trend:"stable",currentState:"There may be scenarios where reusability of tests may not be necessary or desired, and having a combination of tools may be preferable. There may also be better tools available that we are not aware of and didnt review.",risks:["Over-reliance on single testing approach may miss optimal solutions","Lack of systematic evaluation of new testing technologies","Missing specialized tools for specific testing scenarios","Potential inefficiencies from suboptimal tool selection"],actions:["Conduct comprehensive testing tool landscape analysis","Implement tool selection framework based on specific use cases","Create proof-of-concept evaluations for promising new tools","Develop hybrid testing strategy with multiple complementary tools"],correlations:["endToEndTestFramework","crossTeamTestAccessibility"],timeline:[{date:"2024-01-30",event:"Started comprehensive testing tool research"},{date:"2024-03-25",event:"Initiated tool evaluation framework development"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(zt,{key:r,score:u[r]},n.a.createElement(It,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Gt,null,l.label),n.a.createElement(Mt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.A,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:u[r],onChange:e=>{p(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:w(u[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Nt,{score:u[r],onClick:()=>b(r),style:{cursor:"pointer",color:w(u[r])}},u[r]),n.a.createElement(v.s,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),b(r)}}),n.a.createElement(Tt,{expanded:e[r]},e[r]?n.a.createElement(v.k,null):n.a.createElement(v.l,null)))),e[r]&&n.a.createElement(Dt,{expanded:e[r]},n.a.createElement(Ht,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.t,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Testing Challenges")),n.a.createElement(Ot,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.y,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Testing Correlations")),n.a.createElement(Rt,null,l.correlations.map((e,t)=>n.a.createElement(Lt,{key:t},n.a.createElement(v.y,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.n,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(jt,null,l.timeline.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Wt,{score:Math.round(Object.values(u).reduce((e,t)=>e+k(t),0)/Object.values(u).length)},n.a.createElement(qt,null,"Overall Testing Maturity"),n.a.createElement(Vt,{score:Math.round(Object.values(u).reduce((e,t)=>e+k(t),0)/Object.values(u).length),style:{color:w(S(Object.values(u).reduce((e,t)=>e+k(t),0)/Object.values(u).length))}},S(Object.values(u).reduce((e,t)=>e+k(t),0)/Object.values(u).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Testing Strategy Goals:"),n.a.createElement("div",{style:{margin:"0.5rem 0 0 0"}},n.a.createElement("div",null,"\u2022 Ensure quality through best practice methodologies and technologies"),n.a.createElement("div",null,"\u2022 Make testing easy for app team and other product teams"),n.a.createElement("div",null,"\u2022 Evaluate combination of tools beyond current Bugbear/SauceLabs setup")))))),n.a.createElement(ft,{style:{position:"relative"}},n.a.createElement(yt,null,n.a.createElement(bt,null,n.a.createElement(vt,null,n.a.createElement(xt,{color:"primary"},n.a.createElement(v.o,null)),n.a.createElement(kt,null,"Technology")),n.a.createElement(Ut,null,n.a.createElement(Kt,{onClick:()=>{const e=["platformMigrationProgress","multiDeviceStrategy","modularArchitecture","codeHealthMetrics","technologyStackModernization"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.k,null)),n.a.createElement(Kt,{onClick:()=>{const e=["platformMigrationProgress","multiDeviceStrategy","modularArchitecture","codeHealthMetrics","technologyStackModernization"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.m,null))))),n.a.createElement(wt,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"How should we evolve and/or rebuild our technology and architecture to achieve and maintain a modern approach?"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"The Home Depot is interested in providing engaging experiences across all devices (phone, tablet, watch, auto, etc.) with flexibility and speed to market.")),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(255, 193, 7, 0.1)",borderLeft:"4px solid #ffc107",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current Technology Migration Status"),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"0.75rem"}},n.a.createElement("div",{style:{padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"iOS Progress:"),n.a.createElement("div",{style:{fontSize:"0.85rem",marginTop:"0.5rem"}},"\u2022 Swift: 63%, Objective-C: 26%, Other: 11%",n.a.createElement("br",null),"\u2022 SwiftUI: 15%, UIKit: 85%",n.a.createElement("br",null),"\u2022 iPhone primary, iPad renders iPhone app")),n.a.createElement("div",{style:{padding:"0.75rem",background:"rgba(40, 167, 69, 0.1)",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Android Progress:"),n.a.createElement("div",{style:{fontSize:"0.85rem",marginTop:"0.5rem"}},"\u2022 Kotlin: 59%, Java: 29%, Other: 12%",n.a.createElement("br",null),"\u2022 Jetpack Compose: 7%, XML Fragments: 93%",n.a.createElement("br",null),"\u2022 Phone primary, no tablet/foldable support")))),Object.entries({platformMigrationProgress:{label:"Platform Migration Progress",trend:"up",currentState:"iOS migrating to Swift (63% complete) and SwiftUI (15% complete). Android migrating to Kotlin (59% complete) and Jetpack Compose (7% complete). Heavy utilization of WebViews with openness to technical direction changes.",risks:["iOS: 37% still Objective-C, 85% still UIKit - significant legacy code remains","Android: 41% still Java, 93% still XML Fragments - early in UI modernization","Mixed technology stack creates maintenance complexity and knowledge silos","WebView dependency may limit performance and native platform capabilities"],actions:["Accelerate Swift and Kotlin migration with automated conversion tools","Create SwiftUI and Jetpack Compose adoption roadmap with training programs","Implement mixed codebase management strategies and coding standards","Evaluate WebView vs native implementation trade-offs for key user journeys"],correlations:["technologyStackModernization","modularArchitecture"],timeline:[{date:"2024-01-15",event:"Established migration baselines and targets"},{date:"2024-03-20",event:"Launched Swift/Kotlin training programs"},{date:"2024-05-01",event:"Started SwiftUI/Jetpack Compose pilot projects"}]},multiDeviceStrategy:{label:"Multi-Device Strategy & Support",trend:"down",currentState:"iPhone support primarily; iPad renders iPhone app with unfriendly UI; no Apple Watch app. Android phone support primarily; no explicit support for foldables; removed tablet download capability.",risks:["Limited device support misses growing tablet, watch, and auto markets","iPad experience renders iPhone app creating poor user experience","No support for emerging form factors (foldables, automotive) limits future growth","Device-specific optimization opportunities are being missed"],actions:["Develop comprehensive multi-device strategy and roadmap","Create responsive design system for tablets and large screens","Evaluate Apple Watch, Android Watch, and automotive platform opportunities","Implement adaptive UI frameworks for emerging form factors"],correlations:["modularArchitecture","technologyStackModernization"],timeline:[{date:"2024-02-10",event:"Identified multi-device strategy gap"},{date:"2024-04-05",event:"Started device market opportunity analysis"}]},modularArchitecture:{label:"Modular Architecture Implementation",trend:"stable",currentState:"Future implementation should be modular to support reusability, collaboration, maintenance, readability, testing, faster fixes, easier updates, and refactoring. Isolated features as importable products adhering to cybersecurity requirements.",risks:["Current monolithic architecture limits reusability and collaboration","Lack of clear module boundaries creates tight coupling and maintenance issues","No standardized approach for creating and sharing isolated feature modules","Cybersecurity requirements compliance across modular components needs framework"],actions:["Design and implement modular architecture framework with clear boundaries","Create module development standards and reusability guidelines","Implement feature-as-a-product methodology with import/export capabilities","Establish cybersecurity compliance framework for modular components"],correlations:["codeHealthMetrics","platformMigrationProgress"],timeline:[{date:"2024-01-20",event:"Defined modular architecture requirements and benefits"},{date:"2024-03-15",event:"Started modular framework design phase"}]},codeHealthMetrics:{label:"Code Health & Maintainability Metrics",trend:"up",currentState:"Need to establish measures to understand code health. Focus on making app smaller and more modular with clear separation of responsibilities for enhanced readability and maintainability.",risks:["Lack of standardized code health metrics prevents quality assessment","App size and complexity growth without measurement and control","No visibility into technical debt accumulation and impact","Mixed technology stack makes health assessment challenging"],actions:["Implement comprehensive code health monitoring and metrics dashboard","Establish app size budgets and modular complexity measurements","Create technical debt tracking and remediation prioritization system","Add automated code quality gates and continuous health monitoring"],correlations:["modularArchitecture","platformMigrationProgress"],timeline:[{date:"2024-02-25",event:"Identified need for code health measurement framework"},{date:"2024-04-10",event:"Started code metrics and monitoring tool evaluation"}]},technologyStackModernization:{label:"Technology Stack Modernization",trend:"up",currentState:"Open to considering changes in technical direction to achieve goals. Heavy WebView utilization with migration to Swift/SwiftUI and Kotlin/Jetpack Compose in progress.",risks:["WebView dependency may limit performance and platform-specific capabilities","Technology choices may not align with multi-device strategy requirements","Legacy stack components create maintenance burden and slow development","Rapid technology evolution requires continuous evaluation and adaptation"],actions:["Conduct comprehensive technology stack evaluation against multi-device goals","Create technology roadmap balancing WebView benefits with native capabilities","Implement technology decision framework for future stack choices","Establish continuous technology monitoring and adoption processes"],correlations:["multiDeviceStrategy","platformMigrationProgress"],timeline:[{date:"2024-01-30",event:"Started comprehensive technology stack assessment"},{date:"2024-03-25",event:"Initiated technology roadmap development"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(zt,{key:r,score:g[r]},n.a.createElement(It,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Gt,null,l.label),n.a.createElement(Mt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.A,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:g[r],onChange:e=>{h(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:w(g[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Nt,{score:g[r],onClick:()=>b(r),style:{cursor:"pointer",color:w(g[r])}},g[r]),n.a.createElement(v.s,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),b(r)}}),n.a.createElement(Tt,{expanded:e[r]},e[r]?n.a.createElement(v.k,null):n.a.createElement(v.l,null)))),e[r]&&n.a.createElement(Dt,{expanded:e[r]},n.a.createElement(Ht,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.t,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Technology Challenges")),n.a.createElement(Ot,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.y,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Technology Correlations")),n.a.createElement(Rt,null,l.correlations.map((e,t)=>n.a.createElement(Lt,{key:t},n.a.createElement(v.y,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.n,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(jt,null,l.timeline.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Wt,{score:Math.round(Object.values(g).reduce((e,t)=>e+k(t),0)/Object.values(g).length)},n.a.createElement(qt,null,"Overall Technology Maturity"),n.a.createElement(Vt,{score:Math.round(Object.values(g).reduce((e,t)=>e+k(t),0)/Object.values(g).length),style:{color:w(S(Object.values(g).reduce((e,t)=>e+k(t),0)/Object.values(g).length))}},S(Object.values(g).reduce((e,t)=>e+k(t),0)/Object.values(g).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Technology Evolution Goals:"),n.a.createElement("div",{style:{margin:"0.5rem 0 0 0"}},n.a.createElement("div",null,"\u2022 Enable flexibility and speed to market across all devices"),n.a.createElement("div",null,"\u2022 Achieve modular architecture with reusable, isolated features"),n.a.createElement("div",null,"\u2022 Establish code health measures and app size optimization"),n.a.createElement("div",null,"\u2022 Complete platform migrations (Swift, Kotlin, SwiftUI, Jetpack Compose)")))))),n.a.createElement(ft,{style:{position:"relative"}},n.a.createElement(yt,null,n.a.createElement(bt,null,n.a.createElement(vt,null,n.a.createElement(xt,{color:"develop"},n.a.createElement(v.p,null)),n.a.createElement(kt,null,"Development Practices")),n.a.createElement(Ut,null,n.a.createElement(Kt,{onClick:()=>{const e=["cicdPipelineAutomation","codeQualityGates","buildArtifactManagement","manualProcessElimination","aiAssistedDevelopment"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.k,null)),n.a.createElement(Kt,{onClick:()=>{const e=["cicdPipelineAutomation","codeQualityGates","buildArtifactManagement","manualProcessElimination","aiAssistedDevelopment"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.m,null))))),n.a.createElement(wt,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Goal: Automated CI/CD state with comprehensive quality gates and AI assistance"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"Tests, code complexity scanning, duplication detection run automatically per PR. No code modification between dev and production builds.")),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(220, 53, 69, 0.1)",borderLeft:"4px solid #dc3545",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current State: Fully Manual Process"),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"1fr",gap:"0.5rem"}},n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Unit tests manually run locally by developers"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Quality engineering team manually performs application regressions"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Manual UI end-to-end test triggering with Bugbear"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 GitHub release branches manually created by engineers"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 GitHub actions manually triggered (iOS: auto TestFlight, Android: manual Google Play)"))),Object.entries({cicdPipelineAutomation:{label:"CI/CD Pipeline Automation",trend:"down",currentState:"Currently manual process at every step: manual unit test runs, manual regression testing, manual GitHub release branch creation, manual GitHub actions triggering for builds.",risks:["Fully manual process creates bottlenecks and delays in delivery","Human error risk at every manual step impacts reliability","Inconsistent process execution across different engineers and releases","Lack of automated gates allows quality issues to reach production"],actions:["Implement fully automated CI/CD pipeline with trigger-based automation","Create automated PR validation with test execution and quality checks","Add automated release branch creation and build artifact generation","Implement progressive deployment automation with rollback capabilities"],correlations:["codeQualityGates","buildArtifactManagement"],timeline:[{date:"2024-01-15",event:"Identified fully manual CI/CD process as major bottleneck"},{date:"2024-03-20",event:"Started CI/CD automation planning and tool evaluation"},{date:"2024-05-01",event:"Initiated automated pipeline proof of concept"}]},codeQualityGates:{label:"Automated Code Quality Gates",trend:"down",currentState:"No automated quality gates exist. Need automatic fail if code coverage change diff is less than (x)%. Tests, code complexity scanning, and duplication detection should run automatically for each PR.",risks:["No automated coverage threshold enforcement allows quality regression","Missing code complexity and duplication scanning in PR process","Quality issues discovered late in process increase fix costs","Inconsistent code quality standards across development team"],actions:["Implement automated code coverage diff analysis with configurable thresholds","Add code complexity and duplication scanning to PR pipeline","Create quality gates that automatically fail PRs below standards","Establish comprehensive code quality metrics dashboard and reporting"],correlations:["cicdPipelineAutomation","manualProcessElimination"],timeline:[{date:"2024-02-10",event:"Defined code quality gate requirements and thresholds"},{date:"2024-04-05",event:"Started automated quality scanning tool integration"}]},buildArtifactManagement:{label:"Build Artifact Management",trend:"up",currentState:"iOS artifacts automatically published to TestFlight, but Android requires manual Google Play process. Goal is same binary tested should be published with no code modification between development and production builds.",risks:["Manual Android publishing process creates deployment delays and errors","Different artifacts between testing and production environments","Code modifications between environments introduce untested changes","Inconsistent deployment processes between iOS and Android platforms"],actions:["Automate Android Google Play publishing to match iOS TestFlight process","Implement single binary promotion from dev through production environments","Create artifact validation and signing automation","Establish consistent deployment processes across both platforms"],correlations:["cicdPipelineAutomation","manualProcessElimination"],timeline:[{date:"2024-01-20",event:"Analyzed artifact management inconsistencies between platforms"},{date:"2024-03-15",event:"Started Android publishing automation development"}]},manualProcessElimination:{label:"Manual Process Elimination",trend:"down",currentState:"Comprehensive manual process elimination needed across entire development lifecycle. Should be automated as much as possible with pass/fail gates requiring human intervention only when necessary.",risks:["Manual processes throughout development lifecycle create inefficiency","Human intervention required for routine tasks slows development velocity","Inconsistent process execution leads to quality variations","Manual bottlenecks limit team scaling and delivery capacity"],actions:["Identify and prioritize all manual processes for automation","Implement smart pass/fail gates with human intervention only for exceptions","Create self-service development workflows and tooling","Establish process automation metrics and continuous improvement"],correlations:["cicdPipelineAutomation","aiAssistedDevelopment"],timeline:[{date:"2024-02-25",event:"Conducted comprehensive manual process audit"},{date:"2024-04-10",event:"Started prioritized automation roadmap development"}]},aiAssistedDevelopment:{label:"AI-Assisted Development Integration",trend:"stable",currentState:"Interest in AI assisted development practices. No current implementation of AI tools in development workflow.",risks:["Missing AI productivity opportunities in code generation and review","Competitive disadvantage without AI-assisted development capabilities","Manual code review and testing processes could benefit from AI augmentation","Lack of AI integration strategy for development workflow optimization"],actions:["Evaluate and implement AI-powered code generation and completion tools","Integrate AI-assisted code review and quality analysis","Add AI-powered test case generation and bug detection capabilities","Create AI development assistant integration strategy and training"],correlations:["codeQualityGates","manualProcessElimination"],timeline:[{date:"2024-01-30",event:"Identified AI-assisted development as strategic interest"},{date:"2024-03-25",event:"Started AI development tools evaluation and pilot planning"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(zt,{key:r,score:E[r]},n.a.createElement(It,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Gt,null,l.label),n.a.createElement(Mt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.A,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:E[r],onChange:e=>{f(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:w(E[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Nt,{score:E[r],onClick:()=>b(r),style:{cursor:"pointer",color:w(E[r])}},E[r]),n.a.createElement(v.s,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),b(r)}}),n.a.createElement(Tt,{expanded:e[r]},e[r]?n.a.createElement(v.k,null):n.a.createElement(v.l,null)))),e[r]&&n.a.createElement(Dt,{expanded:e[r]},n.a.createElement(Ht,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.t,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Development Practice Challenges")),n.a.createElement(Ot,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.y,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Practice Correlations")),n.a.createElement(Rt,null,l.correlations.map((e,t)=>n.a.createElement(Lt,{key:t},n.a.createElement(v.y,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.n,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(jt,null,l.timeline.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Wt,{score:Math.round(Object.values(E).reduce((e,t)=>e+k(t),0)/Object.values(E).length)},n.a.createElement(qt,null,"Overall Development Practices Maturity"),n.a.createElement(Vt,{score:Math.round(Object.values(E).reduce((e,t)=>e+k(t),0)/Object.values(E).length),style:{color:w(S(Object.values(E).reduce((e,t)=>e+k(t),0)/Object.values(E).length))}},S(Object.values(E).reduce((e,t)=>e+k(t),0)/Object.values(E).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Development Practice Goals:"),n.a.createElement("div",{style:{margin:"0.5rem 0 0 0"}},n.a.createElement("div",null,"\u2022 Achieve fully automated CI/CD with quality gates and coverage thresholds"),n.a.createElement("div",null,"\u2022 Eliminate manual processes with smart pass/fail automation"),n.a.createElement("div",null,"\u2022 Ensure same binary tested is published across environments"),n.a.createElement("div",null,"\u2022 Integrate AI-assisted development practices and tools")))))))))}const Xt=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Qt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,_t=Object(m.c)(o.b)`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  margin-right: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }

  svg {
    margin-right: 0.5rem;
  }
`,Zt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Yt=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.stabilize}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.stabilize}};
  border-radius: 50%;
  font-size: 2rem;
  margin-right: 1.5rem;
`,ea=m.c.div`
  flex: 1;
`,ta=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,aa=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,ra=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,na=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,la=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,ia=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.primary}};
  margin-right: 1rem;
`,oa=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,ca=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,ma=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,sa=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function da(){return n.a.createElement(Xt,null,n.a.createElement(Qt,null,n.a.createElement(_t,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(Zt,null,n.a.createElement(Yt,null,n.a.createElement(v.q,null)),n.a.createElement(ea,null,n.a.createElement(ta,null,"Stabilize Phase"),n.a.createElement(aa,null,"Ensuring your software is reliable, robust, and ready for production deployment"))),n.a.createElement(ra,null,n.a.createElement(na,null,n.a.createElement(la,null,n.a.createElement(ia,{color:"stabilize"},n.a.createElement(v.u,null)),n.a.createElement(oa,null,"STLC")),n.a.createElement(ca,null,"Structured Software Testing Life Cycle that ensures comprehensive coverage.",n.a.createElement(ma,null,n.a.createElement(sa,null,"Test planning and strategy"),n.a.createElement(sa,null,"Test case development"),n.a.createElement(sa,null,"Test environment preparation"),n.a.createElement(sa,null,"Test execution and reporting"),n.a.createElement(sa,null,"Test closure and lessons learned")))),n.a.createElement(na,null,n.a.createElement(la,null,n.a.createElement(ia,{color:"stabilize"},n.a.createElement(v.r,null)),n.a.createElement(oa,null,"Data Management")),n.a.createElement(ca,null,"Robust handling of data throughout testing and stabilization processes.",n.a.createElement(ma,null,n.a.createElement(sa,null,"Test data generation and management"),n.a.createElement(sa,null,"Data migration validation"),n.a.createElement(sa,null,"Database performance testing"),n.a.createElement(sa,null,"Data integrity checks"),n.a.createElement(sa,null,"Data backup and recovery verification")))),n.a.createElement(na,null,n.a.createElement(la,null,n.a.createElement(ia,{color:"stabilize"},n.a.createElement(v.F,null)),n.a.createElement(oa,null,"CICD - Stage Gates")),n.a.createElement(ca,null,"Automated quality gates that ensure only stable code progresses to production.",n.a.createElement(ma,null,n.a.createElement(sa,null,"Code quality gates (linting, static analysis)"),n.a.createElement(sa,null,"Automated testing gates"),n.a.createElement(sa,null,"Performance benchmarking gates"),n.a.createElement(sa,null,"Security scanning gates"),n.a.createElement(sa,null,"Approval workflows")))),n.a.createElement(na,null,n.a.createElement(la,null,n.a.createElement(ia,{color:"stabilize"},n.a.createElement(v.e,null)),n.a.createElement(oa,null,"Resilience Testing")),n.a.createElement(ca,null,"Verifying system stability under stress, unusual conditions, and component failures.",n.a.createElement(ma,null,n.a.createElement(sa,null,"Chaos engineering experiments"),n.a.createElement(sa,null,"Load and stress testing"),n.a.createElement(sa,null,"Failover and recovery testing"),n.a.createElement(sa,null,"Degraded service simulation"),n.a.createElement(sa,null,"Long-haul reliability testing")))),n.a.createElement(na,null,n.a.createElement(la,null,n.a.createElement(ia,{color:"stabilize"},n.a.createElement(v.J,null)),n.a.createElement(oa,null,"Performance Optimization")),n.a.createElement(ca,null,"Monitoring and enhancing system performance to meet user expectations.",n.a.createElement(ma,null,n.a.createElement(sa,null,"Response time optimization"),n.a.createElement(sa,null,"Resource utilization analysis"),n.a.createElement(sa,null,"Database query optimization"),n.a.createElement(sa,null,"Network latency reduction"),n.a.createElement(sa,null,"Caching strategy implementation"))))))}const ua=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,pa=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,ga=Object(m.c)(o.b)`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  margin-right: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }

  svg {
    margin-right: 0.5rem;
  }
`,ha=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Ea=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.deploy}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.deploy}};
  border-radius: 50%;
  font-size: 2rem;
  margin-right: 1.5rem;
`,fa=m.c.div`
  flex: 1;
`,ya=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,ba=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,va=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,xa=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,ka=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,wa=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.deploy}};
  margin-right: 1rem;
`,Sa=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Ca=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,za=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,Ia=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function Aa(){return n.a.createElement(ua,null,n.a.createElement(pa,null,n.a.createElement(ga,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(ha,null,n.a.createElement(Ea,null,n.a.createElement(v.F,null)),n.a.createElement(fa,null,n.a.createElement(ya,null,"Deploy Phase"),n.a.createElement(ba,null,"Safely delivering your software to production and ensuring operational excellence"))),n.a.createElement(va,null,n.a.createElement(xa,null,n.a.createElement(ka,null,n.a.createElement(wa,null,n.a.createElement(v.w,null)),n.a.createElement(Sa,null,"Feature Rollouts")),n.a.createElement(Ca,null,"Controlled introduction of new capabilities to minimize risk and maximize feedback.",n.a.createElement(za,null,n.a.createElement(Ia,null,"Progressive delivery strategies"),n.a.createElement(Ia,null,"Canary deployments"),n.a.createElement(Ia,null,"Blue/Green deployments"),n.a.createElement(Ia,null,"Feature flags and toggles"),n.a.createElement(Ia,null,"Early user feedback loops")))),n.a.createElement(xa,null,n.a.createElement(ka,null,n.a.createElement(wa,null,n.a.createElement(v.G,null)),n.a.createElement(Sa,null,"Observability")),n.a.createElement(Ca,null,"Comprehensive monitoring to understand system behavior and troubleshoot issues.",n.a.createElement(za,null,n.a.createElement(Ia,null,"Security Monitors & Alerts"),n.a.createElement(Ia,null,"Allow/Block list"),n.a.createElement(Ia,null,"Application Performance Monitoring"),n.a.createElement(Ia,null,"Distributed tracing"),n.a.createElement(Ia,null,"Logging strategies")))),n.a.createElement(xa,null,n.a.createElement(ka,null,n.a.createElement(wa,null,n.a.createElement(v.t,null)),n.a.createElement(Sa,null,"Contingencies")),n.a.createElement(Ca,null,"Planning for failures and ensuring business continuity in all scenarios.",n.a.createElement(za,null,n.a.createElement(Ia,null,"Rollback/Rollforward strategies"),n.a.createElement(Ia,null,"Emergency response planning"),n.a.createElement(Ia,null,"Disaster recovery procedures"),n.a.createElement(Ia,null,"Incident management workflows"),n.a.createElement(Ia,null,"On-call rotation and escalation")))),n.a.createElement(xa,null,n.a.createElement(ka,null,n.a.createElement(wa,null,n.a.createElement(v.h,null)),n.a.createElement(Sa,null,"Analytics")),n.a.createElement(Ca,null,"Leveraging data to inform product decisions and business strategy.",n.a.createElement(za,null,n.a.createElement(Ia,null,"User behavior tracking"),n.a.createElement(Ia,null,"Conversion and funnel analysis"),n.a.createElement(Ia,null,"Feature adoption metrics"),n.a.createElement(Ia,null,"Business impact measurement"),n.a.createElement(Ia,null,"Predictive usage modeling")))),n.a.createElement(xa,null,n.a.createElement(ka,null,n.a.createElement(wa,null,n.a.createElement(v.F,null)),n.a.createElement(Sa,null,"Continuous Improvement")),n.a.createElement(Ca,null,"Evolving delivery processes through regular feedback and adaptation.",n.a.createElement(za,null,n.a.createElement(Ia,null,"Post-deployment reviews"),n.a.createElement(Ia,null,"Release process optimization"),n.a.createElement(Ia,null,"Deployment frequency metrics"),n.a.createElement(Ia,null,"Cycle time reduction"),n.a.createElement(Ia,null,"DevOps maturity assessments"))))))}var $a=a(513);const Ta={maturityCategories:[{name:"Security",unmitigated:8,mitigated:5,inProgress:3,icon:n.a.createElement(v.I,null),color:"security"},{name:"Privacy",unmitigated:6,mitigated:4,inProgress:2,icon:n.a.createElement(v.L,null),color:"highlight"},{name:"Infrastructure",unmitigated:5,mitigated:3,inProgress:2,icon:n.a.createElement(v.H,null),color:"contingencies"},{name:"Authentication",unmitigated:7,mitigated:3,inProgress:4,icon:n.a.createElement(v.z,null),color:"primary"},{name:"Network",unmitigated:4,mitigated:2,inProgress:2,icon:n.a.createElement(v.C,null),color:"analytics"}],topMitigations:[{risk:"SQL Injection Vulnerability",category:"Security",mitigation:"Implemented parameterized queries and input validation",impact:"High",completionDate:"2024-04-15"},{risk:"Clear-Text Password Storage",category:"Authentication",mitigation:"Added password hashing with bcrypt and salting",impact:"High",completionDate:"2024-04-18"},{risk:"Unprotected API Endpoints",category:"Security",mitigation:"Added JWT authentication to all endpoints",impact:"Medium",completionDate:"2024-04-22"},{risk:"Outdated Dependencies",category:"Infrastructure",mitigation:"Implemented dependency scanning and auto-updates",impact:"Medium",completionDate:"2024-04-25"}],pendingMitigations:[{risk:"Insufficient Rate Limiting",category:"Security",mitigation:"Implement API rate limiting and throttling",impact:"Medium",targetDate:"2024-05-15"},{risk:"Weak Password Requirements",category:"Authentication",mitigation:"Enforce stronger password policy",impact:"Medium",targetDate:"2024-05-20"},{risk:"Missing Data Backup Strategy",category:"Infrastructure",mitigation:"Implement automated backup and verification",impact:"High",targetDate:"2024-06-01"}],lastUpdated:"2024-05-06 15:00"},Ma=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Da=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Oa=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  border-radius: 50%;
  font-size: 1.75rem;
  margin-right: 1.5rem;
`,Pa=m.c.h2`
  font-size: 1.75rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Ba=m.c.h3`
  font-size: 1.25rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin: 1.5rem 0 1rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,Ra=m.c.div`
  margin-bottom: 2rem;
`,La=m.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,ja=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
`,Fa=m.c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`,Wa=m.c.th`
  text-align: left;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,qa=m.c.tr`
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
`,Va=m.c.td`
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Ha=m.c.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  background: ${e=>{let{impact:t,theme:a}=e;switch(t){case"High":return"rgba(255, 107, 87, 0.15)";case"Medium":return"rgba(255, 224, 102, 0.2)";case"Low":return"rgba(182, 226, 211, 0.15)";default:return"rgba(0, 0, 0, 0.05)"}}};
  color: ${e=>{let{impact:t,theme:a}=e;switch(t){case"High":return a.colors.feature;case"Medium":return"#D4AC0D";case"Low":return"#27AE60";default:return a.colors.text}}};
`,Ua=m.c.div`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`,Ka=m.c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`,Ga=m.c.div`
  display: flex;
  align-items: center;
  margin: 0 0.75rem;
  font-size: 0.85rem;
`,Na=m.c.div`
  width: 12px;
  height: 12px;
  background-color: ${e=>{let{color:t}=e;return t}};
  margin-right: 0.5rem;
  border-radius: 2px;
`;function Ja(){const e=Object(m.e)(),{maturityCategories:t,topMitigations:a,pendingMitigations:r,lastUpdated:l}=Ta,i=t.map(e=>({name:e.name,Mitigated:e.mitigated,"In Progress":e.inProgress,Unmitigated:e.unmitigated-e.mitigated-e.inProgress,icon:e.icon,color:e.color}));return n.a.createElement(Ma,null,n.a.createElement(Da,null,n.a.createElement(Oa,null,n.a.createElement(v.t,null)),n.a.createElement(Pa,null,"Risk Mitigation Roadmap")),n.a.createElement(Ra,null,n.a.createElement(Ba,null,"Risk Mitigation Status by Category"),n.a.createElement(Ka,null,n.a.createElement(Ga,null,n.a.createElement(Na,{color:e.colors.primary}),"Mitigated"),n.a.createElement(Ga,null,n.a.createElement(Na,{color:e.colors.accent}),"In Progress"),n.a.createElement(Ga,null,n.a.createElement(Na,{color:"#D6D6D6"}),"Unmitigated")),n.a.createElement(z.a,{width:"100%",height:250},n.a.createElement(I.a,{data:i,margin:{top:20,right:30,left:20,bottom:5},barGap:0,barCategoryGap:"20%"},n.a.createElement($a.a,{strokeDasharray:"3 3",vertical:!1}),n.a.createElement(A.a,{dataKey:"name",tick:{fontSize:12},tickLine:!1}),n.a.createElement($.a,{allowDecimals:!1,axisLine:!1,tickLine:!1,tick:{fontSize:12}}),n.a.createElement(T.a,null),n.a.createElement(M.a,{dataKey:"Mitigated",stackId:"a",fill:e.colors.primary}),n.a.createElement(M.a,{dataKey:"In Progress",stackId:"a",fill:e.colors.accent}),n.a.createElement(M.a,{dataKey:"Unmitigated",stackId:"a",fill:"#D6D6D6"})))),n.a.createElement(La,null,n.a.createElement(ja,null,n.a.createElement(Ba,null,n.a.createElement(v.I,{style:{color:e.colors.security}}),"Completed Mitigations"),n.a.createElement(Fa,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement(Wa,null,"Risk"),n.a.createElement(Wa,null,"Category"),n.a.createElement(Wa,null,"Impact"),n.a.createElement(Wa,null,"Date"))),n.a.createElement("tbody",null,a.map((e,t)=>n.a.createElement(qa,{key:t},n.a.createElement(Va,null,e.risk),n.a.createElement(Va,null,e.category),n.a.createElement(Va,null,n.a.createElement(Ha,{impact:e.impact},e.impact)),n.a.createElement(Va,null,e.completionDate)))))),n.a.createElement(ja,null,n.a.createElement(Ba,null,n.a.createElement(v.L,{style:{color:e.colors.highlight}}),"Pending Mitigations"),n.a.createElement(Fa,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement(Wa,null,"Risk"),n.a.createElement(Wa,null,"Category"),n.a.createElement(Wa,null,"Impact"),n.a.createElement(Wa,null,"Target Date"))),n.a.createElement("tbody",null,r.map((e,t)=>n.a.createElement(qa,{key:t},n.a.createElement(Va,null,e.risk),n.a.createElement(Va,null,e.category),n.a.createElement(Va,null,n.a.createElement(Ha,{impact:e.impact},e.impact)),n.a.createElement(Va,null,e.targetDate))))))),n.a.createElement(Ua,null,"Last updated: ",l))}var Xa=a(115);const Qa=m.c.footer`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0 0.5rem 0;
  margin-top: 3rem;
`,_a=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,Za=m.c.img`
  height: 36px;
  width: auto;
  margin-right: 2rem;
`,Ya=m.c.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,er=m.c.a`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,tr=m.c.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`,ar=m.c.a`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,rr=m.c.div`
  width: 100%;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 0.95rem;
  margin-top: 2rem;
  opacity: 0.7;
`;function nr(){return n.a.createElement(Qa,null,n.a.createElement(_a,null,n.a.createElement(Za,{src:d.a,alt:"Stable Kernel Logo"}),n.a.createElement(Ya,null,n.a.createElement(er,{href:"https://stablekernel.com/services",target:"_blank",rel:"noopener noreferrer"},"Services"),n.a.createElement(er,{href:"https://stablekernel.com/case-studies",target:"_blank",rel:"noopener noreferrer"},"Case Studies"),n.a.createElement(er,{href:"https://stablekernel.com/about-us",target:"_blank",rel:"noopener noreferrer"},"About Us"),n.a.createElement(er,{href:"https://stablekernel.com/resources",target:"_blank",rel:"noopener noreferrer"},"Resources"),n.a.createElement(er,{href:"https://stablekernel.com/book-a-consultation",target:"_blank",rel:"noopener noreferrer"},"Book a Consultation"),n.a.createElement(er,{href:"https://stablekernel.com/about-us#careers",target:"_blank",rel:"noopener noreferrer"},"Careers"),n.a.createElement(er,{href:"https://stablekernel.com/privacy-policy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy")),n.a.createElement(tr,null,n.a.createElement(ar,{href:"https://twitter.com/stablekernel",target:"_blank",rel:"noopener noreferrer","aria-label":"X (formerly Twitter)"},n.a.createElement(Xa.c,null)),n.a.createElement(ar,{href:"https://www.facebook.com/stablekernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},n.a.createElement(Xa.a,null)),n.a.createElement(ar,{href:"https://www.linkedin.com/company/stable-kernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},n.a.createElement(Xa.b,null)))),n.a.createElement(rr,null,"\xa9 ",(new Date).getFullYear()," Stable Kernel. All rights reserved."))}a(506);const lr=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;var ir=function(){return n.a.createElement(o.a,{basename:"/risk-portfolio-mgr-thd"},n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement(lr,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",component:Ie}),n.a.createElement(c.a,{path:"/design",component:Ue}),n.a.createElement(c.a,{path:"/refine",component:ot}),n.a.createElement(c.a,{path:"/develop",component:Jt}),n.a.createElement(c.a,{path:"/stabilize",component:da}),n.a.createElement(c.a,{path:"/deploy",component:Aa}),n.a.createElement(c.a,{path:"/maturity-dashboard",component:ce}),n.a.createElement(c.a,{path:"/mitigation-roadmap",component:Ja}))),n.a.createElement(nr,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var or=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,514)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:l,getTTFB:i}=t;a(e),r(e),n(e),l(e),i(e)})};const cr=m.b`
  body {
    font-family: ${e=>{let{theme:t}=e;return t.fonts.primary}};
    background: ${e=>{let{theme:t}=e;return t.colors.background}};
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5 {
    font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  a {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  }
  button {
    font-family: ${e=>{let{theme:t}=e;return t.fonts.primary}};
    font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    background: ${e=>{let{theme:t}=e;return t.colors.primary}};
    color: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(47, 72, 196, 0.08);
    transition: background 0.2s;
  }
  button:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  }
`;i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m.a,{theme:{colors:{primary:"#2F48C4",accent:"#FF6B57",background:"#FFFFFF",secondaryBackground:"#F7F8FA",text:"#22223B",highlight:"#A3A3FF",feature:"#FF6B57",story:"#00CFE8",develop:"#A3A3FF",stabilize:"#B6E2D3",deploy:"#FFF3B0",security:"#FFB3B3",analytics:"#FFE066",contingencies:"#D6C1FF"},fonts:{primary:"'Inter', 'Segoe UI', Arial, sans-serif",weights:{regular:400,medium:500,bold:700}}}},n.a.createElement(cr,null),n.a.createElement(ir,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)}),or()},66:function(e,t,a){e.exports=a.p+"static/media/sk-logo-dark.fbff4e0a.svg"}},[[277,1,2]]]);
//# sourceMappingURL=main.278aa8b3.chunk.js.map