(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(e,t,r){e.exports=r(507)},286:function(e,t,r){},506:function(e,t,r){},507:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),l=r(254),o=r.n(l),i=(r(286),r(25)),c=r(19),m=r(2),s=r(66),u=r.n(s);const d=m.c.header`
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
`,g=m.c.img`
  height: 40px;
  width: auto;
  margin-right: 2rem;
`,p=m.c.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`,h=Object(m.c)(i.b)`
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
`,f=Object(m.c)(i.b)`
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
`,E=m.c.a`
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
`;function b(){return n.a.createElement(d,null,n.a.createElement(y,null,n.a.createElement(E,{href:"https://stablekernel.com/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(g,{src:u.a,alt:"Stable Kernel Logo"})),n.a.createElement(p,null,n.a.createElement(h,{to:"/"},"Home"),n.a.createElement(h,{to:"/risk-dashboard"},"Risk Dashboard"),n.a.createElement(h,{to:"/risk-mitigation"},"Risk Mitigation"),n.a.createElement(f,{to:"/risk-dashboard"},"View Risks"))))}var x=r(5);const v=[{key:"design",label:"Design",color:"text",icon:n.a.createElement(x.E,null),path:"/design"},{key:"refine",label:"Refine",color:"feature",icon:n.a.createElement(x.w,null),path:"/refine"},{key:"develop",label:"Develop",color:"develop",icon:n.a.createElement(x.q,null),path:"/develop"},{key:"stabilize",label:"Stabilize",color:"stabilize",icon:n.a.createElement(x.r,null),path:"/stabilize"},{key:"deploy",label:"Deploy",color:"deploy",icon:n.a.createElement(x.G,null),path:"/deploy"}],k=m.c.div`
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
  background: ${e=>{let{theme:t,color:r,selected:a}=e;return"text"===r?a?t.colors.text:t.colors.secondaryBackground:a?t.colors[r]:t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t,color:r,selected:a}=e;return"text"===r?a?"#fff":t.colors.text:a?"#fff":t.colors[r]}};
  border: 2px solid ${e=>{let{theme:t,color:r}=e;return"text"===r?t.colors.text:t.colors[r]}};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: ${e=>{let{selected:t}=e;return t?"0 4px 16px rgba(47,72,196,0.10)":"none"}};
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
  margin-bottom: 0.5rem;
`,$=m.c.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  color: ${e=>{let{theme:t,color:r,selected:a}=e;return a?t.colors[r]:t.colors.text}};
`;function z(e){let{onSelect:t,selectedPhase:r}=e;const[l,o]=Object(a.useState)(r||v[0].key),i=Object(c.f)();return n.a.createElement(k,null,v.map(e=>n.a.createElement("div",{key:e.key,style:{textAlign:"center"}},n.a.createElement(w,{color:e.color,selected:l===e.key,onClick:()=>((e,r)=>{o(e),t&&t(e),r&&i.push(r)})(e.key,e.path),"aria-label":e.label},e.icon),n.a.createElement($,{color:e.color,selected:l===e.key},e.label))))}var S=r(508),C=r(509),D=r(267),R=r(268),M=r(54),B=r(114),A=r(110),I=r(68),P=r(510),F=r(269),j=r(71),T=r(511),L=r(512),O=r(111),U=r(113),K=r(272);const H={overallScore:72,phaseScores:[{phase:"Design",score:80,phaseName:"Design"},{phase:"Refine",score:60,phaseName:"Refine"},{phase:"Develop",score:70,phaseName:"Develop"},{phase:"Stabilize",score:75,phaseName:"Stabilize"},{phase:"Deploy",score:65,phaseName:"Deploy"}],riskCategories:[{name:"Security",value:65,fullMark:100},{name:"Compliance",value:80,fullMark:100},{name:"Infrastructure",value:75,fullMark:100},{name:"Process",value:68,fullMark:100},{name:"Team",value:85,fullMark:100}],riskSeverity:[{name:"High",value:4,color:"#ff4136"},{name:"Medium",value:7,color:"#ff851b"},{name:"Low",value:13,color:"#2ecc40"}],topRisks:["Release pipeline lacks automation (30-40 min builds)","Android: 103 SDKs, iOS: 44 SDKs - update risks","Configuration management prone to errors","Native-WebView data sharing complexity","Legacy code removal challenges","Manual App/Play Store uploads required"],mitigatedRisks:["Outdated dependencies with security vulnerabilities","Missing automated testing in CI pipeline","Inadequate error handling","Poor password policy requirements","Configuration drift across environments","Manual release process inefficiencies"],lastUpdated:"2024-05-06 15:00"},q=[{phase:"Design",icon:n.a.createElement(x.E,{size:24}),color:"text"},{phase:"Refine",icon:n.a.createElement(x.w,{size:24}),color:"feature"},{phase:"Develop",icon:n.a.createElement(x.q,{size:24}),color:"develop"},{phase:"Stabilize",icon:n.a.createElement(x.r,{size:24}),color:"stabilize"},{phase:"Deploy",icon:n.a.createElement(x.G,{size:24}),color:"deploy"}],W=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,G=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,N=m.c.div`
  flex: 1;
`,_=m.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{color:t}=e;return t}};
  margin-bottom: 0.5rem;
`,V=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 1.5rem;
`,J=m.c.h3`
  font-size: 1.1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin-bottom: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,X=m.c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 0.5rem 0 1.5rem 0;
`,Q=m.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`,Y=m.c.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`,Z=m.c.li`
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
    color: ${e=>{let{theme:t,iconColor:r}=e;return t.colors[r]||t.colors.text}};
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
`,re=m.c.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,ae=m.c.button`
  background: none;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${e=>{let{active:t,theme:r}=e;return t?r.colors.primary:r.colors.text}};
  font-weight: ${e=>{let{active:t,theme:r}=e;return t?r.fonts.weights.medium:r.fonts.weights.regular}};
  border-bottom: 2px solid ${e=>{let{active:t,theme:r}=e;return t?r.colors.primary:"transparent"}};
  
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
`;function oe(e,t){return e>=75?"#2ecc40":e>=60?t.colors.accent:"#ff4136"}const ie=e=>{const{x:t,y:r,width:a,value:l}=e;return n.a.createElement("g",null,n.a.createElement("text",{x:t+a/2,y:r-10,fill:"#333",textAnchor:"middle",dominantBaseline:"middle"},l))};function ce(){const e=Object(m.e)(),[t,r]=Object(a.useState)("overview"),{overallScore:l,phaseScores:o,riskCategories:i,riskSeverity:c,topRisks:s,mitigatedRisks:u,lastUpdated:d}=H,g=oe(l,e);return n.a.createElement(W,null,n.a.createElement(G,null,n.a.createElement(N,null,n.a.createElement("div",null,"Comprehensive view of project risk factors and mitigation status"))),n.a.createElement(re,null,n.a.createElement(ae,{active:"overview"===t?"true":"false",onClick:()=>r("overview")},"Overview"),n.a.createElement(ae,{active:"details"===t?"true":"false",onClick:()=>r("details")},"Detailed Analysis")),"overview"===t?n.a.createElement(n.a.Fragment,null,n.a.createElement(J,null,n.a.createElement(x.h,{style:{color:e.colors.primary}}),"Overall Risk Assessment"),n.a.createElement(ne,null,n.a.createElement(le,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement(_,{color:g},l),n.a.createElement(V,null,"Overall Risk Score"),n.a.createElement(S.a,{width:"100%",height:180},n.a.createElement(C.a,{data:o,margin:{top:10,right:20,left:0,bottom:0}},n.a.createElement(D.a,{dataKey:"phase",tick:{fontSize:14}}),n.a.createElement(R.a,{domain:[0,100],hide:!0}),n.a.createElement(M.a,null),n.a.createElement(B.a,{dataKey:"score"},o.map((t,r)=>n.a.createElement(A.a,{key:`cell-${r}`,fill:oe(t.score,e)})),n.a.createElement(I.a,{dataKey:"score",position:"top",style:{fontSize:14,fontWeight:600}})))),n.a.createElement(X,null,q.map(t=>{let{phase:r,icon:a,color:l}=t;return n.a.createElement(Q,{key:r},n.a.cloneElement(a,{color:e.colors[l]}),n.a.createElement(te,null,r))}))),n.a.createElement(le,null,n.a.createElement(J,null,n.a.createElement(x.u,{style:{color:e.colors.accent}}),"Top Risks"),n.a.createElement(Y,null,s.map((t,r)=>n.a.createElement(Z,{key:r},n.a.createElement(x.u,{size:14,style:{color:e.colors.accent}}),t))),n.a.createElement(J,{style:{marginTop:"1.5rem"}},n.a.createElement(x.i,{style:{color:e.colors.primary}}),"Recently Mitigated"),n.a.createElement(Y,null,u.map((t,r)=>n.a.createElement(Z,{key:r},n.a.createElement(x.i,{size:14,style:{color:e.colors.primary}}),t)))))):n.a.createElement(ne,null,n.a.createElement(le,null,n.a.createElement(J,null,n.a.createElement(x.J,{style:{color:e.colors.security}}),"Risk Severity Distribution"),n.a.createElement(S.a,{width:"100%",height:250},n.a.createElement(P.a,null,n.a.createElement(F.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,label:ie,outerRadius:80,fill:"#8884d8",dataKey:"value"},c.map((e,t)=>n.a.createElement(A.a,{key:`cell-${t}`,fill:e.color}))),n.a.createElement(M.a,null),n.a.createElement(j.a,null)))),n.a.createElement(le,null,n.a.createElement(J,null,n.a.createElement(x.h,{style:{color:e.colors.primary}}),"Risk Category Assessment"),n.a.createElement(S.a,{width:"100%",height:250},n.a.createElement(T.a,{cx:"50%",cy:"50%",outerRadius:80,data:i},n.a.createElement(L.a,null),n.a.createElement(O.a,{dataKey:"name"}),n.a.createElement(U.a,{angle:30,domain:[0,100]}),n.a.createElement(K.a,{name:"Risk Score",dataKey:"value",stroke:e.colors.primary,fill:e.colors.primary,fillOpacity:.6}),n.a.createElement(M.a,null))))),n.a.createElement(ee,null,"Last updated: ",d))}const me=m.c.section`
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
`,ue=m.c.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,de=m.c.h1`
  font-size: 2.5rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1rem;
`,ge=m.c.p`
  font-size: 1.25rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 2rem;
`,pe=m.c.section`
  padding: 3rem 2rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
`,he=m.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
`,fe=m.c.div`
  flex: 1 1 0;
  margin-bottom: 0;
  padding: 1.5rem 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.04);
  min-width: 0;
`,Ee=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${e=>{let{color:t,theme:r}=e;return r.colors[t]}};
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
`,xe=m.c.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,ve=m.c.ul`
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
`,$e=m.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ze=m.c.div`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Se=m.c.h3`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
`;function Ce(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(me,null,n.a.createElement(ue,null,n.a.createElement(de,null,"Software Lifecycle Risk Evaluation"),n.a.createElement(ge,null,"Assess risk across every phase of your software development lifecycle")),n.a.createElement(se,{src:u.a,alt:"Watermark"})),n.a.createElement(pe,null,n.a.createElement(he,null,"Lifecycle Phases"),n.a.createElement(z,null),n.a.createElement(xe,null,n.a.createElement(fe,{id:"phase-design"},n.a.createElement(ye,null,n.a.createElement(Ee,{id:"icon-design",color:"text"},n.a.createElement(x.E,null)),n.a.createElement(be,null,"Design")),n.a.createElement(ve,null,n.a.createElement(ke,null,"A/B Testing"),n.a.createElement(ke,null,"Accessibility"),n.a.createElement(ke,null,"Prototyping"),n.a.createElement(ke,null,"UX Research"),n.a.createElement(ke,null,"Wireframes"))),n.a.createElement(fe,{id:"phase-refine"},n.a.createElement(ye,null,n.a.createElement(Ee,{id:"icon-refine",color:"feature"},n.a.createElement(x.w,null)),n.a.createElement(be,null,"Refine")),n.a.createElement(ve,null,n.a.createElement(ke,null,"Feature 360"),n.a.createElement(ke,null,"Product Roadmap"),n.a.createElement(ke,null,"ROI Hypothesis"),n.a.createElement(ke,null,"Story Curation"),n.a.createElement(ke,null,"Success Metrics"))),n.a.createElement(fe,{id:"phase-develop"},n.a.createElement(ye,null,n.a.createElement(Ee,{id:"icon-develop",color:"develop"},n.a.createElement(x.q,null)),n.a.createElement(be,null,"Develop")),n.a.createElement(ve,null,n.a.createElement(ke,null,"Dev Standards"),n.a.createElement(ke,null,"Infra - Local | EUT"),n.a.createElement(ke,null,"Maintainability"),n.a.createElement(ke,null,"Security Standards"),n.a.createElement(ke,null,"Code Quality"))),n.a.createElement(fe,{id:"phase-stabilize"},n.a.createElement(ye,null,n.a.createElement(Ee,{id:"icon-stabilize",color:"stabilize"},n.a.createElement(x.r,null)),n.a.createElement(be,null,"Stabilize")),n.a.createElement(ve,null,n.a.createElement(ke,null,"CICD - Stage Gates"),n.a.createElement(ke,null,"Data Management"),n.a.createElement(ke,null,"Resiliency"),n.a.createElement(ke,null,"STLC"),n.a.createElement(ke,null,"Usability"))),n.a.createElement(fe,{id:"phase-deploy"},n.a.createElement(ye,null,n.a.createElement(Ee,{id:"icon-deploy",color:"deploy"},n.a.createElement(x.G,null)),n.a.createElement(be,null,"Deploy")),n.a.createElement(ve,null,n.a.createElement(ke,null,"Analytics"),n.a.createElement(ke,null,"Contingencies"),n.a.createElement(ke,null,"Feature rollouts"),n.a.createElement(ke,null,"Observability"),n.a.createElement(ke,null,"Support")))),n.a.createElement(we,{id:"cross-phase-ttt"},n.a.createElement($e,null,n.a.createElement(ze,null,n.a.createElement(x.L,null)),n.a.createElement(Se,null,"Tools, Tech & Talent")))),n.a.createElement(pe,null,n.a.createElement(he,null,"Risk Dashboard"),n.a.createElement(ce,null)))}const De=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Re=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Me=Object(m.c)(i.b)`
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
`,Be=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Ae=m.c.div`
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
`,Ie=m.c.div`
  flex: 1;
`,Pe=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Fe=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,je=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Te=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,Le=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Oe=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}};
  margin-right: 1rem;
`,Ue=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Ke=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,He=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,qe=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function We(){return n.a.createElement(De,null,n.a.createElement(Re,null,n.a.createElement(Me,{to:"/"},n.a.createElement(x.c,null)," Back to Home Page")),n.a.createElement(Be,null,n.a.createElement(Ae,null,n.a.createElement(x.E,null)),n.a.createElement(Ie,null,n.a.createElement(Pe,null,"Design Phase"),n.a.createElement(Fe,null,"The foundation of successful software projects starts with thoughtful design"))),n.a.createElement(je,null,n.a.createElement(Te,null,n.a.createElement(Le,null,n.a.createElement(Oe,{color:"text"},n.a.createElement(x.y,null)),n.a.createElement(Ue,null,"UX Research")),n.a.createElement(Ke,null,"User experience research forms the backbone of effective design, ensuring products meet user needs and expectations.",n.a.createElement(He,null,n.a.createElement(qe,null,"User interviews and surveys"),n.a.createElement(qe,null,"Personas and user journey mapping"),n.a.createElement(qe,null,"Competitive analysis"),n.a.createElement(qe,null,"Usability testing")))),n.a.createElement(Te,null,n.a.createElement(Le,null,n.a.createElement(Oe,{color:"text"},n.a.createElement(x.a,null)),n.a.createElement(Ue,null,"Accessibility")),n.a.createElement(Ke,null,"Designing for all users enhances product reach and compliance with legal standards.",n.a.createElement(He,null,n.a.createElement(qe,null,"WCAG compliance"),n.a.createElement(qe,null,"Screen reader compatibility"),n.a.createElement(qe,null,"Color contrast and readability"),n.a.createElement(qe,null,"Keyboard navigation support")))),n.a.createElement(Te,null,n.a.createElement(Le,null,n.a.createElement(Oe,{color:"text"},n.a.createElement(x.h,null)),n.a.createElement(Ue,null,"A/B Testing")),n.a.createElement(Ke,null,"Data-driven design decisions lead to optimized user experiences and better business outcomes.",n.a.createElement(He,null,n.a.createElement(qe,null,"Test hypothesis formation"),n.a.createElement(qe,null,"Statistical significance planning"),n.a.createElement(qe,null,"Multivariate testing"),n.a.createElement(qe,null,"Iterative design improvements")))),n.a.createElement(Te,null,n.a.createElement(Le,null,n.a.createElement(Oe,{color:"text"},n.a.createElement(x.N,null)),n.a.createElement(Ue,null,"Wireframes")),n.a.createElement(Ke,null,"Visual blueprints that guide development and align stakeholder expectations.",n.a.createElement(He,null,n.a.createElement(qe,null,"Low-fidelity sketches"),n.a.createElement(qe,null,"Interactive prototypes"),n.a.createElement(qe,null,"Information architecture"),n.a.createElement(qe,null,"User flow diagrams"))))))}const Ge=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Ne=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,_e=Object(m.c)(i.b)`
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
`,Ve=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Je=m.c.div`
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
`,Xe=m.c.div`
  flex: 1;
`,Qe=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Ye=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Ze=m.c.div`
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
`,rt=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}};
  margin-right: 1rem;
`,at=m.c.h2`
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
`,ot=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function it(){return n.a.createElement(Ge,null,n.a.createElement(Ne,null,n.a.createElement(_e,{to:"/"},n.a.createElement(x.c,null)," Back to Home Page")),n.a.createElement(Ve,null,n.a.createElement(Je,null,n.a.createElement(x.w,null)),n.a.createElement(Xe,null,n.a.createElement(Qe,null,"Refine Phase"),n.a.createElement(Ye,null,"Transform design concepts into well-defined requirements and implementation plans"))),n.a.createElement(Ze,null,n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(rt,{color:"feature"},n.a.createElement(x.g,null)),n.a.createElement(at,null,"Product Roadmap")),n.a.createElement(nt,null,"Strategic planning that aligns development with business objectives and market needs.",n.a.createElement(lt,null,n.a.createElement(ot,null,"Feature prioritization"),n.a.createElement(ot,null,"Release planning"),n.a.createElement(ot,null,"Stakeholder alignment"),n.a.createElement(ot,null,"Milestone definition")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(rt,{color:"feature"},n.a.createElement(x.C,null)),n.a.createElement(at,null,"ROI Hypothesis")),n.a.createElement(nt,null,"Economic analysis to ensure development efforts yield meaningful business returns.",n.a.createElement(lt,null,n.a.createElement(ot,null,"Cost-benefit analysis"),n.a.createElement(ot,null,"Resource allocation planning"),n.a.createElement(ot,null,"Market opportunity assessment"),n.a.createElement(ot,null,"Success metrics definition")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(rt,{color:"feature"},n.a.createElement(x.F,null)),n.a.createElement(at,null,"Feature 360")),n.a.createElement(nt,null,"Comprehensive analysis of each feature from multiple perspectives to ensure completeness.",n.a.createElement(lt,null,n.a.createElement(ot,null,"User story development"),n.a.createElement(ot,null,"Edge case identification"),n.a.createElement(ot,null,"Acceptance criteria"),n.a.createElement(ot,null,"Integration requirements")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(rt,{color:"feature"},n.a.createElement(x.f,null)),n.a.createElement(at,null,"Story Curation")),n.a.createElement(nt,null,"Development of clear, complete user stories that capture requirements and acceptance criteria.",n.a.createElement(lt,null,n.a.createElement(ot,null,"Persona-based story writing"),n.a.createElement(ot,null,"Acceptance criteria definition"),n.a.createElement(ot,null,"Story prioritization"),n.a.createElement(ot,null,"Backlog management"))))))}const ct=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,mt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,st=Object(m.c)(i.b)`
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
`,ut=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,dt=m.c.div`
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
`,gt=m.c.div`
  flex: 1;
`,pt=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,ht=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,ft=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Et=(m.c.div`
  width: 100%;
  margin: 3rem 0 1.5rem 0;
`,m.c.h2`
  font-size: 1.8rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,m.c.div`
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
`),yt=m.c.div`
  position: sticky;
  top: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 20;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`,bt=(m.c.div`
  position: sticky;
  top: 80px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 15;
  padding: 0 0 1rem 0;
  margin: 0 -1.5rem 1rem -1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
`,m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.background}};
`),xt=m.c.div`
  font-size: 2rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}};
  margin-right: 1rem;
  background: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}}15;
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
`,vt=m.c.h2`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
`,kt=m.c.p`
  font-size: 0.95rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
  margin: 0.75rem 0 1rem 0;
  line-height: 1.5;
  text-align: center;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
`,wt=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,$t=(m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`,m.c.div`
  margin-bottom: 3rem;
`),zt=m.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
  }
`,St=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary}}30;
    transform: translateX(4px);
  }
`,Ct=m.c.input`
  margin-right: 1rem;
  transform: scale(1.3);
  accent-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Dt=m.c.span`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  line-height: 1.4;
`,Rt=m.c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  border-left: 4px solid ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  overflow: hidden;
`,Mt=m.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  }
`,Bt=m.d`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
`,At=m.d`
  from {
    opacity: 1;
    max-height: 500px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`,It=m.c.div`
  font-size: 0.8rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.7;
  transition: transform 0.3s ease;
  transform: rotate(${e=>{let{expanded:t}=e;return t?"180deg":"0deg"}});
`,Pt=m.c.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: ${e=>{let{trend:t,theme:r}=e;return"up"===t?"#2ecc40":"down"===t?"#ff4136":r.colors.text}};
`,Ft=m.c.div`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  animation: ${e=>{let{expanded:t}=e;return t?Bt:At}} 0.3s ease;
  overflow: hidden;
`,jt=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
`,Tt=m.c.li`
  margin-bottom: 0.5rem;
`,Lt=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.primary}}10;
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  font-size: 0.85rem;
`,Ot=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
`,Ut=m.c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 0.25rem;
`,Kt=m.c.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
`,Ht=m.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 0.25rem;
  font-size: 0.85rem;
`,qt=(m.c.input`
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  width: 60px;
  text-align: center;
  
  &:focus {
    outline: none;
    background: ${e=>{let{theme:t}=e;return t.colors.background}};
    border-radius: 0.25rem;
    padding: 0.25rem;
  }
`,m.c.div`
  background: linear-gradient(135deg, ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}}15, ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}}05);
  border: 2px solid ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`),Wt=m.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Gt=m.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  margin-bottom: 0.25rem;
`,Nt=(m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
  margin-bottom: 1rem;
`,m.c.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  color: white;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,m.c.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
`,m.c.div`
  text-align: center;
  font-size: 0.85rem;
`,m.c.div`
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,m.c.div`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.7;
  font-size: 0.75rem;
`,m.c.div`
  position: sticky;
  top: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 10;
  padding: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  margin: 0 -1rem 1rem -1rem;
`),_t=m.c.div`
  display: flex;
  gap: 0.5rem;
`,Vt=m.c.button`
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
`,Jt=m.c.span`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,Xt=m.c.span`
  font-size: 1.2rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  min-width: 1.5rem;
  text-align: center;
  display: inline-block;
`;function Qt(){const[e,t]=Object(a.useState)({}),[r,l]=Object(a.useState)(null),[o,i]=n.a.useState({securityStandards:{inputValidation:!1,authenticationProtocols:!1,dataEncryption:!1,owaspPrevention:!1,securityReviews:!1},branchingStrategy:{featureBranchWorkflow:!1,pullRequestProcesses:!1,branchProtectionRules:!1,mergeConflictResolution:!1,releaseBranchManagement:!1},infrastructure:{localDevelopmentEnvironments:!1,containerization:!1,environmentUniformity:!1,endUserTestingEnvironments:!1,environmentConfigurationManagement:!1},testCoverage:{unitTestingFrameworks:!1,integrationTesting:!1,codeCoverageMetrics:!1,testDrivenDevelopment:!1,automatedRegressionTesting:!1},readability:{linters:!1,patterns:!1,tasks:!1,docs:!1},reviewProcess:{architectureReview:!1,designReview:!1,codeReview:!1,technicalReview:!1},testStrategy:{unitTesting:!1,integrationTesting:!1,dataMockSynthetic:!1},tools:{observability:!1,featureFlagging:!1,codeAnalysis:!1,crashReporting:!1,userAnalytics:!1,alerting:!1}}),[c,m]=n.a.useState({releasePipelineAutomation:"M",sdkManagementComplexity:"L",configurationManagement:"M",nativeWebviewDataSharing:"M",legacyCodeRemoval:"L"}),s=(e,t)=>{i(r=>({...r,[e]:{...r[e],[t]:!r[e][t]}}))},u=e=>{l(e)},d=()=>{l(null)},g=e=>{switch(e){case"H":return"#28a745";case"M":return"#ffc107";case"L":return"#dc3545";case"High":return"#28a745";case"Medium":return"#ffc107";case"Low":return"#dc3545";default:return"#6c757d"}},p=Math.round(Object.values(c).reduce((e,t)=>e+(e=>{switch(e){case"H":return 3;case"M":return 2;case"L":return 1;default:return 2}})(t),0)/Object.values(c).length),h=(f=p)>=2.5?"High":f>=1.5?"Medium":"Low";var f;return n.a.createElement(ct,null,n.a.createElement(mt,null,n.a.createElement(st,{to:"/"},n.a.createElement(x.c,null)," Back to Home Page")),n.a.createElement(ut,null,n.a.createElement(dt,null,n.a.createElement(x.q,null)),n.a.createElement(gt,null,n.a.createElement(pt,null,"Develop Phase"),n.a.createElement(ht,null,"Building robust, maintainable, and secure code for your application"))),n.a.createElement($t,null,n.a.createElement(zt,null,n.a.createElement(x.n,null),"Assessment Criteria"),n.a.createElement(ft,null,n.a.createElement(Et,null,n.a.createElement(bt,null,n.a.createElement(xt,{color:"develop"},n.a.createElement(x.p,null)),n.a.createElement(vt,null,"Dev Standards")),n.a.createElement(kt,null,"Core development practices and architectural standards for building robust, maintainable applications."),n.a.createElement(wt,null,Object.entries({architectureReview:"Architecture review",branchingStrategy:"Branching Strategy",codeAnalysis:"Code Analysis",featureFlagging:"Feature Flagging",observability:"Observability"}).map(e=>{let[t,r]=e;return n.a.createElement(St,{key:t},n.a.createElement(Ct,{type:"checkbox",checked:o.branchingStrategy[t],onChange:()=>s("branchingStrategy",t)}),n.a.createElement(Dt,null,r))}))),n.a.createElement(Et,null,n.a.createElement(bt,null,n.a.createElement(xt,{color:"develop"},n.a.createElement(x.I,null)),n.a.createElement(vt,null,"Infra - Local | EUT")),n.a.createElement(kt,null,"IAC practices for local and provisioned environments for efficient workflows."),n.a.createElement(wt,null,Object.entries({localStack:"Local Stack",containerization:"Containerization",environmentUniformity:"Environment uniformity",endUserTestingSetup:"End-user testing setup",environmentConfigurationManagement:"Configuration management"}).map(e=>{let[t,r]=e;return n.a.createElement(St,{key:t},n.a.createElement(Ct,{type:"checkbox",checked:o.infrastructure[t],onChange:()=>s("infrastructure",t)}),n.a.createElement(Dt,null,r))}))),n.a.createElement(Et,null,n.a.createElement(bt,null,n.a.createElement(xt,{color:"develop"},n.a.createElement(x.J,null)),n.a.createElement(vt,null,"Security Standards")),n.a.createElement(kt,null,"Security protocols and best practices to protect applications and data from vulnerabilities."),n.a.createElement(wt,null,Object.entries({inputValidation:"Input validation and sanitization",authenticationProtocols:"Secure authentication protocols",dataEncryption:"Sensitive data encryption",owaspPrevention:"OWASP vulnerability prevention",securityReviews:"Security code reviews"}).map(e=>{let[t,r]=e;return n.a.createElement(St,{key:t},n.a.createElement(Ct,{type:"checkbox",checked:o.securityStandards[t],onChange:()=>s("securityStandards",t)}),n.a.createElement(Dt,null,r))}))),n.a.createElement(Et,null,n.a.createElement(bt,null,n.a.createElement(xt,{color:"develop"},n.a.createElement(x.j,null)),n.a.createElement(vt,null,"Code Quality")),n.a.createElement(kt,null,"Testing frameworks and quality assurance practices to ensure reliable, well-tested code."),n.a.createElement(wt,null,Object.entries({unitTestingFrameworks:"Unit testing frameworks",integrationTesting:"Integration testing",codeCoverageMetrics:"Code coverage metrics",testDrivenDevelopment:"Test-driven development",automatedRegressionTesting:"Automated regression testing"}).map(e=>{let[t,r]=e;return n.a.createElement(St,{key:t},n.a.createElement(Ct,{type:"checkbox",checked:o.testCoverage[t],onChange:()=>s("testCoverage",t)}),n.a.createElement(Dt,null,r))}))))),n.a.createElement($t,null,n.a.createElement(zt,null,n.a.createElement(x.u,null),"Assessment Results"),n.a.createElement(ft,null,n.a.createElement(Et,{style:{position:"relative"}},n.a.createElement(yt,null,n.a.createElement(bt,null,n.a.createElement(xt,{color:"security"},n.a.createElement(x.u,null)),n.a.createElement(vt,null,"Maintainability"),n.a.createElement(_t,null,n.a.createElement(Vt,{onClick:()=>{t(["releasePipelineAutomation","sdkManagementComplexity","configurationManagement","nativeWebviewDataSharing","legacyCodeRemoval"].reduce((e,t)=>({...e,[t]:!0}),{}))},title:"Expand All"},n.a.createElement(x.k,null)),n.a.createElement(Vt,{onClick:()=>{t({})},title:"Collapse All"},n.a.createElement(x.m,null))))),n.a.createElement(wt,null,Object.entries({releasePipelineAutomation:{label:"Release Pipeline Automation",trend:"down",risks:["App has planned releases every 2 weeks (10 business days)","3 of those 10 days are devoted to preparing for the release","Build Release Pipelines lack automation unit test coverage","Engineers must manually input the values for App and Build versions","Builds typically run for 30-40 minutes before complete"],actions:["Implement automated CI/CD pipeline with unit test coverage","Add automated uploads to App/Play Stores","Reduce build time through parallel processing","Implement automated version management"],correlations:["sdkManagementComplexity","configurationManagement"],timeline:[{date:"2024-01-15",event:"Identified manual release process bottleneck"},{date:"2024-03-20",event:"Started CI/CD pipeline planning"},{date:"2024-05-01",event:"Pilot automated testing implementation"}]},sdkManagementComplexity:{label:"SDK Management Complexity",trend:"stable",risks:["Android has 103 SDKs; iOS has 44","Updating SDKs when required is risky","SDK updates typically introduce bugs","Complex dependency management across platforms"],actions:["Implement automated SDK update testing","Create SDK compatibility matrix","Establish SDK update review process","Implement gradual rollout strategy"],correlations:["releasePipelineAutomation","configurationManagement"],timeline:[{date:"2024-02-10",event:"Documented SDK inventory"},{date:"2024-04-05",event:"Created update testing framework"}]},configurationManagement:{label:"Configuration Management",trend:"down",risks:["Configuration values prone to errors","Feature switches difficult to maintain","Challenges maintaining configs across environments","Manual configuration deployment process"],actions:["Implement configuration as code","Create centralized configuration management","Add configuration validation and testing","Implement environment-specific config validation"],correlations:["releasePipelineAutomation","nativeWebviewDataSharing"],timeline:[{date:"2024-01-20",event:"Identified configuration drift issues"},{date:"2024-03-15",event:"Started configuration audit"}]},nativeWebviewDataSharing:{label:"Native-WebView Data Sharing",trend:"up",risks:["Increased complexity of data sharing between native and WebView","Maintaining source of truth for data is challenging","Synchronization issues between components","Complex state management across platforms"],actions:["Implement unified data layer","Create data synchronization protocols","Add data validation and error handling","Implement data versioning strategy"],correlations:["configurationManagement","legacyCodeRemoval"],timeline:[{date:"2024-02-25",event:"Identified data sharing complexity"},{date:"2024-04-10",event:"Started unified data layer design"}]},legacyCodeRemoval:{label:"Legacy Code Removal",trend:"stable",risks:["Legacy code is intertwined with new implementation","Difficult to remove legacy code safely","Risk of breaking existing functionality","Complex dependency analysis required"],actions:["Create comprehensive dependency mapping","Implement gradual legacy code removal strategy","Add extensive testing for each removal step","Establish rollback procedures"],correlations:["nativeWebviewDataSharing"],timeline:[{date:"2024-01-30",event:"Started legacy code audit"},{date:"2024-03-25",event:"Created removal roadmap"}]}}).map(a=>{let[l,o]=a;return n.a.createElement(Rt,{key:l,score:c[l]},n.a.createElement(Mt,{onClick:()=>(e=>{t(t=>({...t,[e]:!t[e]}))})(l)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Jt,null,o.label),n.a.createElement(Pt,{trend:o.trend},"up"===o.trend&&n.a.createElement(x.d,null),"down"===o.trend&&n.a.createElement(x.b,null),"stable"===o.trend&&n.a.createElement(x.B,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},r===l?n.a.createElement("select",{value:c[l],onChange:e=>((e,t)=>{m(r=>({...r,[e]:t}))})(l,e.target.value),onBlur:d,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:g(c[l])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Xt,{score:c[l],onClick:()=>u(l),style:{cursor:"pointer",color:g(c[l])}},c[l]),n.a.createElement(x.t,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),u(l)}}),n.a.createElement(It,{expanded:e[l]},e[l]?n.a.createElement(x.k,null):n.a.createElement(x.l,null)))),e[l]&&n.a.createElement(Ft,{expanded:e[l]},n.a.createElement(Nt,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(x.y,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Risk Factors"))),n.a.createElement(jt,null,o.risks.map((e,t)=>n.a.createElement(Tt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(x.y,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),o.actions.map((e,t)=>n.a.createElement(Lt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(x.z,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Risk Correlations")),n.a.createElement(Ot,null,o.correlations.map((e,t)=>n.a.createElement(Ut,{key:t},n.a.createElement(x.z,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(x.o,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(Kt,null,o.timeline.map((e,t)=>n.a.createElement(Ht,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(qt,{score:p},n.a.createElement(Wt,null,"Overall Maintainability"),n.a.createElement(Gt,{score:p,style:{color:g(h)}},h)))))))}const Yt=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Zt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,er=Object(m.c)(i.b)`
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
`,tr=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,rr=m.c.div`
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
`,ar=m.c.div`
  flex: 1;
`,nr=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,lr=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,or=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ir=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,cr=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,mr=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}};
  margin-right: 1rem;
`,sr=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,ur=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,dr=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,gr=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function pr(){return n.a.createElement(Yt,null,n.a.createElement(Zt,null,n.a.createElement(er,{to:"/"},n.a.createElement(x.c,null)," Back to Home Page")),n.a.createElement(tr,null,n.a.createElement(rr,null,n.a.createElement(x.r,null)),n.a.createElement(ar,null,n.a.createElement(nr,null,"Stabilize Phase"),n.a.createElement(lr,null,"Ensuring your software is reliable, robust, and ready for production deployment"))),n.a.createElement(or,null,n.a.createElement(ir,null,n.a.createElement(cr,null,n.a.createElement(mr,{color:"stabilize"},n.a.createElement(x.v,null)),n.a.createElement(sr,null,"STLC")),n.a.createElement(ur,null,"Structured Software Testing Life Cycle that ensures comprehensive coverage.",n.a.createElement(dr,null,n.a.createElement(gr,null,"Test planning and strategy"),n.a.createElement(gr,null,"Test case development"),n.a.createElement(gr,null,"Test environment preparation"),n.a.createElement(gr,null,"Test execution and reporting"),n.a.createElement(gr,null,"Test closure and lessons learned")))),n.a.createElement(ir,null,n.a.createElement(cr,null,n.a.createElement(mr,{color:"stabilize"},n.a.createElement(x.s,null)),n.a.createElement(sr,null,"Data Management")),n.a.createElement(ur,null,"Robust handling of data throughout testing and stabilization processes.",n.a.createElement(dr,null,n.a.createElement(gr,null,"Test data generation and management"),n.a.createElement(gr,null,"Data migration validation"),n.a.createElement(gr,null,"Database performance testing"),n.a.createElement(gr,null,"Data integrity checks"),n.a.createElement(gr,null,"Data backup and recovery verification")))),n.a.createElement(ir,null,n.a.createElement(cr,null,n.a.createElement(mr,{color:"stabilize"},n.a.createElement(x.G,null)),n.a.createElement(sr,null,"CICD - Stage Gates")),n.a.createElement(ur,null,"Automated quality gates that ensure only stable code progresses to production.",n.a.createElement(dr,null,n.a.createElement(gr,null,"Code quality gates (linting, static analysis)"),n.a.createElement(gr,null,"Automated testing gates"),n.a.createElement(gr,null,"Performance benchmarking gates"),n.a.createElement(gr,null,"Security scanning gates"),n.a.createElement(gr,null,"Approval workflows")))),n.a.createElement(ir,null,n.a.createElement(cr,null,n.a.createElement(mr,{color:"stabilize"},n.a.createElement(x.e,null)),n.a.createElement(sr,null,"Resilience Testing")),n.a.createElement(ur,null,"Verifying system stability under stress, unusual conditions, and component failures.",n.a.createElement(dr,null,n.a.createElement(gr,null,"Chaos engineering experiments"),n.a.createElement(gr,null,"Load and stress testing"),n.a.createElement(gr,null,"Failover and recovery testing"),n.a.createElement(gr,null,"Degraded service simulation"),n.a.createElement(gr,null,"Long-haul reliability testing")))),n.a.createElement(ir,null,n.a.createElement(cr,null,n.a.createElement(mr,{color:"stabilize"},n.a.createElement(x.K,null)),n.a.createElement(sr,null,"Performance Optimization")),n.a.createElement(ur,null,"Monitoring and enhancing system performance to meet user expectations.",n.a.createElement(dr,null,n.a.createElement(gr,null,"Response time optimization"),n.a.createElement(gr,null,"Resource utilization analysis"),n.a.createElement(gr,null,"Database query optimization"),n.a.createElement(gr,null,"Network latency reduction"),n.a.createElement(gr,null,"Caching strategy implementation"))))))}const hr=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,fr=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Er=Object(m.c)(i.b)`
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
`,yr=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,br=m.c.div`
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
`,xr=m.c.div`
  flex: 1;
`,vr=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,kr=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,wr=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,$r=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,zr=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Sr=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.deploy}};
  margin-right: 1rem;
`,Cr=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Dr=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,Rr=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,Mr=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function Br(){return n.a.createElement(hr,null,n.a.createElement(fr,null,n.a.createElement(Er,{to:"/"},n.a.createElement(x.c,null)," Back to Home Page")),n.a.createElement(yr,null,n.a.createElement(br,null,n.a.createElement(x.G,null)),n.a.createElement(xr,null,n.a.createElement(vr,null,"Deploy Phase"),n.a.createElement(kr,null,"Safely delivering your software to production and ensuring operational excellence"))),n.a.createElement(wr,null,n.a.createElement($r,null,n.a.createElement(zr,null,n.a.createElement(Sr,null,n.a.createElement(x.x,null)),n.a.createElement(Cr,null,"Feature Rollouts")),n.a.createElement(Dr,null,"Controlled introduction of new capabilities to minimize risk and maximize feedback.",n.a.createElement(Rr,null,n.a.createElement(Mr,null,"Progressive delivery strategies"),n.a.createElement(Mr,null,"Canary deployments"),n.a.createElement(Mr,null,"Blue/Green deployments"),n.a.createElement(Mr,null,"Feature flags and toggles"),n.a.createElement(Mr,null,"Early user feedback loops")))),n.a.createElement($r,null,n.a.createElement(zr,null,n.a.createElement(Sr,null,n.a.createElement(x.H,null)),n.a.createElement(Cr,null,"Observability")),n.a.createElement(Dr,null,"Comprehensive monitoring to understand system behavior and troubleshoot issues.",n.a.createElement(Rr,null,n.a.createElement(Mr,null,"Security Monitors & Alerts"),n.a.createElement(Mr,null,"Allow/Block list"),n.a.createElement(Mr,null,"Application Performance Monitoring"),n.a.createElement(Mr,null,"Distributed tracing"),n.a.createElement(Mr,null,"Logging strategies")))),n.a.createElement($r,null,n.a.createElement(zr,null,n.a.createElement(Sr,null,n.a.createElement(x.u,null)),n.a.createElement(Cr,null,"Contingencies")),n.a.createElement(Dr,null,"Planning for failures and ensuring business continuity in all scenarios.",n.a.createElement(Rr,null,n.a.createElement(Mr,null,"Rollback/Rollforward strategies"),n.a.createElement(Mr,null,"Emergency response planning"),n.a.createElement(Mr,null,"Disaster recovery procedures"),n.a.createElement(Mr,null,"Incident management workflows"),n.a.createElement(Mr,null,"On-call rotation and escalation")))),n.a.createElement($r,null,n.a.createElement(zr,null,n.a.createElement(Sr,null,n.a.createElement(x.h,null)),n.a.createElement(Cr,null,"Analytics")),n.a.createElement(Dr,null,"Leveraging data to inform product decisions and business strategy.",n.a.createElement(Rr,null,n.a.createElement(Mr,null,"User behavior tracking"),n.a.createElement(Mr,null,"Conversion and funnel analysis"),n.a.createElement(Mr,null,"Feature adoption metrics"),n.a.createElement(Mr,null,"Business impact measurement"),n.a.createElement(Mr,null,"Predictive usage modeling")))),n.a.createElement($r,null,n.a.createElement(zr,null,n.a.createElement(Sr,null,n.a.createElement(x.G,null)),n.a.createElement(Cr,null,"Continuous Improvement")),n.a.createElement(Dr,null,"Evolving delivery processes through regular feedback and adaptation.",n.a.createElement(Rr,null,n.a.createElement(Mr,null,"Post-deployment reviews"),n.a.createElement(Mr,null,"Release process optimization"),n.a.createElement(Mr,null,"Deployment frequency metrics"),n.a.createElement(Mr,null,"Cycle time reduction"),n.a.createElement(Mr,null,"DevOps maturity assessments"))))))}var Ar=r(513);const Ir={riskCategories:[{name:"Security",unmitigated:8,mitigated:5,inProgress:3,icon:n.a.createElement(x.J,null),color:"security"},{name:"Privacy",unmitigated:6,mitigated:4,inProgress:2,icon:n.a.createElement(x.M,null),color:"highlight"},{name:"Infrastructure",unmitigated:5,mitigated:3,inProgress:2,icon:n.a.createElement(x.I,null),color:"contingencies"},{name:"Authentication",unmitigated:7,mitigated:3,inProgress:4,icon:n.a.createElement(x.A,null),color:"primary"},{name:"Network",unmitigated:4,mitigated:2,inProgress:2,icon:n.a.createElement(x.D,null),color:"analytics"}],topMitigations:[{risk:"SQL Injection Vulnerability",category:"Security",mitigation:"Implemented parameterized queries and input validation",impact:"High",completionDate:"2024-04-15"},{risk:"Clear-Text Password Storage",category:"Authentication",mitigation:"Added password hashing with bcrypt and salting",impact:"High",completionDate:"2024-04-18"},{risk:"Unprotected API Endpoints",category:"Security",mitigation:"Added JWT authentication to all endpoints",impact:"Medium",completionDate:"2024-04-22"},{risk:"Outdated Dependencies",category:"Infrastructure",mitigation:"Implemented dependency scanning and auto-updates",impact:"Medium",completionDate:"2024-04-25"}],pendingMitigations:[{risk:"Insufficient Rate Limiting",category:"Security",mitigation:"Implement API rate limiting and throttling",impact:"Medium",targetDate:"2024-05-15"},{risk:"Weak Password Requirements",category:"Authentication",mitigation:"Enforce stronger password policy",impact:"Medium",targetDate:"2024-05-20"},{risk:"Missing Data Backup Strategy",category:"Infrastructure",mitigation:"Implement automated backup and verification",impact:"High",targetDate:"2024-06-01"}],lastUpdated:"2024-05-06 15:00"},Pr=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Fr=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,jr=m.c.div`
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
`,Tr=m.c.h2`
  font-size: 1.75rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Lr=m.c.h3`
  font-size: 1.25rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin: 1.5rem 0 1rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,Or=m.c.div`
  margin-bottom: 2rem;
`,Ur=m.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Kr=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
`,Hr=m.c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`,qr=m.c.th`
  text-align: left;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,Wr=m.c.tr`
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
`,Gr=m.c.td`
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Nr=m.c.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  background: ${e=>{let{impact:t,theme:r}=e;switch(t){case"High":return"rgba(255, 107, 87, 0.15)";case"Medium":return"rgba(255, 224, 102, 0.2)";case"Low":return"rgba(182, 226, 211, 0.15)";default:return"rgba(0, 0, 0, 0.05)"}}};
  color: ${e=>{let{impact:t,theme:r}=e;switch(t){case"High":return r.colors.feature;case"Medium":return"#D4AC0D";case"Low":return"#27AE60";default:return r.colors.text}}};
`,_r=m.c.div`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`,Vr=m.c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`,Jr=m.c.div`
  display: flex;
  align-items: center;
  margin: 0 0.75rem;
  font-size: 0.85rem;
`,Xr=m.c.div`
  width: 12px;
  height: 12px;
  background-color: ${e=>{let{color:t}=e;return t}};
  margin-right: 0.5rem;
  border-radius: 2px;
`;function Qr(){const e=Object(m.e)(),{riskCategories:t,topMitigations:r,pendingMitigations:a,lastUpdated:l}=Ir,o=t.map(e=>({name:e.name,Mitigated:e.mitigated,"In Progress":e.inProgress,Unmitigated:e.unmitigated-e.mitigated-e.inProgress,icon:e.icon,color:e.color}));return n.a.createElement(Pr,null,n.a.createElement(Fr,null,n.a.createElement(jr,null,n.a.createElement(x.u,null)),n.a.createElement(Tr,null,"Risk Mitigation Roadmap")),n.a.createElement(Or,null,n.a.createElement(Lr,null,"Risk Mitigation Status by Category"),n.a.createElement(Vr,null,n.a.createElement(Jr,null,n.a.createElement(Xr,{color:e.colors.primary}),"Mitigated"),n.a.createElement(Jr,null,n.a.createElement(Xr,{color:e.colors.accent}),"In Progress"),n.a.createElement(Jr,null,n.a.createElement(Xr,{color:"#D6D6D6"}),"Unmitigated")),n.a.createElement(S.a,{width:"100%",height:250},n.a.createElement(C.a,{data:o,margin:{top:20,right:30,left:20,bottom:5},barGap:0,barCategoryGap:"20%"},n.a.createElement(Ar.a,{strokeDasharray:"3 3",vertical:!1}),n.a.createElement(D.a,{dataKey:"name",tick:{fontSize:12},tickLine:!1}),n.a.createElement(R.a,{allowDecimals:!1,axisLine:!1,tickLine:!1,tick:{fontSize:12}}),n.a.createElement(M.a,null),n.a.createElement(B.a,{dataKey:"Mitigated",stackId:"a",fill:e.colors.primary}),n.a.createElement(B.a,{dataKey:"In Progress",stackId:"a",fill:e.colors.accent}),n.a.createElement(B.a,{dataKey:"Unmitigated",stackId:"a",fill:"#D6D6D6"})))),n.a.createElement(Ur,null,n.a.createElement(Kr,null,n.a.createElement(Lr,null,n.a.createElement(x.J,{style:{color:e.colors.security}}),"Completed Mitigations"),n.a.createElement(Hr,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement(qr,null,"Risk"),n.a.createElement(qr,null,"Category"),n.a.createElement(qr,null,"Impact"),n.a.createElement(qr,null,"Date"))),n.a.createElement("tbody",null,r.map((e,t)=>n.a.createElement(Wr,{key:t},n.a.createElement(Gr,null,e.risk),n.a.createElement(Gr,null,e.category),n.a.createElement(Gr,null,n.a.createElement(Nr,{impact:e.impact},e.impact)),n.a.createElement(Gr,null,e.completionDate)))))),n.a.createElement(Kr,null,n.a.createElement(Lr,null,n.a.createElement(x.M,{style:{color:e.colors.highlight}}),"Pending Mitigations"),n.a.createElement(Hr,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement(qr,null,"Risk"),n.a.createElement(qr,null,"Category"),n.a.createElement(qr,null,"Impact"),n.a.createElement(qr,null,"Target Date"))),n.a.createElement("tbody",null,a.map((e,t)=>n.a.createElement(Wr,{key:t},n.a.createElement(Gr,null,e.risk),n.a.createElement(Gr,null,e.category),n.a.createElement(Gr,null,n.a.createElement(Nr,{impact:e.impact},e.impact)),n.a.createElement(Gr,null,e.targetDate))))))),n.a.createElement(_r,null,"Last updated: ",l))}var Yr=r(115);const Zr=m.c.footer`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0 0.5rem 0;
  margin-top: 3rem;
`,ea=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,ta=m.c.img`
  height: 36px;
  width: auto;
  margin-right: 2rem;
`,ra=m.c.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,aa=m.c.a`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,na=m.c.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`,la=m.c.a`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,oa=m.c.div`
  width: 100%;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 0.95rem;
  margin-top: 2rem;
  opacity: 0.7;
`;function ia(){return n.a.createElement(Zr,null,n.a.createElement(ea,null,n.a.createElement(ta,{src:u.a,alt:"Stable Kernel Logo"}),n.a.createElement(ra,null,n.a.createElement(aa,{href:"https://stablekernel.com/services",target:"_blank",rel:"noopener noreferrer"},"Services"),n.a.createElement(aa,{href:"https://stablekernel.com/case-studies",target:"_blank",rel:"noopener noreferrer"},"Case Studies"),n.a.createElement(aa,{href:"https://stablekernel.com/about-us",target:"_blank",rel:"noopener noreferrer"},"About Us"),n.a.createElement(aa,{href:"https://stablekernel.com/resources",target:"_blank",rel:"noopener noreferrer"},"Resources"),n.a.createElement(aa,{href:"https://stablekernel.com/book-a-consultation",target:"_blank",rel:"noopener noreferrer"},"Book a Consultation"),n.a.createElement(aa,{href:"https://stablekernel.com/about-us#careers",target:"_blank",rel:"noopener noreferrer"},"Careers"),n.a.createElement(aa,{href:"https://stablekernel.com/privacy-policy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy")),n.a.createElement(na,null,n.a.createElement(la,{href:"https://twitter.com/stablekernel",target:"_blank",rel:"noopener noreferrer","aria-label":"X (formerly Twitter)"},n.a.createElement(Yr.c,null)),n.a.createElement(la,{href:"https://www.facebook.com/stablekernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},n.a.createElement(Yr.a,null)),n.a.createElement(la,{href:"https://www.linkedin.com/company/stable-kernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},n.a.createElement(Yr.b,null)))),n.a.createElement(oa,null,"\xa9 ",(new Date).getFullYear()," Stable Kernel. All rights reserved."))}r(506);const ca=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;var ma=function(){return n.a.createElement(i.a,{basename:"/risk-portfolio-mgr-thd"},n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement(ca,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",component:Ce}),n.a.createElement(c.a,{path:"/design",component:We}),n.a.createElement(c.a,{path:"/refine",component:it}),n.a.createElement(c.a,{path:"/develop",component:Qt}),n.a.createElement(c.a,{path:"/stabilize",component:pr}),n.a.createElement(c.a,{path:"/deploy",component:Br}),n.a.createElement(c.a,{path:"/risk-dashboard",component:ce}),n.a.createElement(c.a,{path:"/risk-mitigation",component:Qr}))),n.a.createElement(ia,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var sa=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,514)).then(t=>{let{getCLS:r,getFID:a,getFCP:n,getLCP:l,getTTFB:o}=t;r(e),a(e),n(e),l(e),o(e)})};const ua=m.b`
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
`;o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m.a,{theme:{colors:{primary:"#2F48C4",accent:"#FF6B57",background:"#FFFFFF",secondaryBackground:"#F7F8FA",text:"#22223B",highlight:"#A3A3FF",feature:"#FF6B57",story:"#00CFE8",develop:"#A3A3FF",stabilize:"#B6E2D3",deploy:"#FFF3B0",security:"#FFB3B3",analytics:"#FFE066",contingencies:"#D6C1FF"},fonts:{primary:"'Inter', 'Segoe UI', Arial, sans-serif",weights:{regular:400,medium:500,bold:700}}}},n.a.createElement(ua,null),n.a.createElement(ma,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)}),sa()},66:function(e,t,r){e.exports=r.p+"static/media/sk-logo-dark.fbff4e0a.svg"}},[[277,1,2]]]);
//# sourceMappingURL=main.5c956fdc.chunk.js.map