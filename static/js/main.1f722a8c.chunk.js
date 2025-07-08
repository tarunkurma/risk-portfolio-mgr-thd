(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{275:function(e,t,l){e.exports=l(505)},284:function(e,t,l){},504:function(e,t,l){},505:function(e,t,l){"use strict";l.r(t);var a=l(0),r=l.n(a),n=l(252),o=l.n(n),i=(l(284),l(23)),c=l(18),m=l(2),s=l(65),u=l.n(s);const d=m.c.header`
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
`,E=Object(m.c)(i.b)`
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
`,h=Object(m.c)(i.b)`
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
`;function b(){return r.a.createElement(d,null,r.a.createElement(y,null,r.a.createElement(i.b,{to:"/"},r.a.createElement(g,{src:u.a,alt:"Stable Kernel Logo"})),r.a.createElement(p,null,r.a.createElement(E,{to:"/"},"Home"),r.a.createElement(E,{to:"/risk-dashboard"},"Risk Dashboard"),r.a.createElement(E,{to:"/risk-mitigation"},"Risk Mitigation"),r.a.createElement(f,{href:"#resources"},"Resources"),r.a.createElement(h,{to:"/risk-dashboard"},"View Risks"))))}var x=l(4);const v=[{key:"design",label:"Design",color:"text",icon:r.a.createElement(x.x,null),path:"/design"},{key:"refine",label:"Refine",color:"feature",icon:r.a.createElement(x.q,null),path:"/refine"},{key:"develop",label:"Develop",color:"develop",icon:r.a.createElement(x.k,null),path:"/develop"},{key:"stabilize",label:"Stabilize",color:"stabilize",icon:r.a.createElement(x.l,null),path:"/stabilize"},{key:"deploy",label:"Deploy",color:"deploy",icon:r.a.createElement(x.A,null),path:"/deploy"}],k=m.c.div`
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
  background: ${e=>{let{theme:t,color:l,selected:a}=e;return a?t.colors[l]:t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t,color:l,selected:a}=e;return a?"#fff":t.colors[l]}};
  border: 2px solid ${e=>{let{theme:t,color:l}=e;return t.colors[l]}};
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
  color: ${e=>{let{theme:t,color:l,selected:a}=e;return a?t.colors[l]:t.colors.text}};
`;function z(e){let{onSelect:t,selectedPhase:l}=e;const[n,o]=Object(a.useState)(l||v[0].key),i=Object(c.f)();return r.a.createElement(k,null,v.map(e=>r.a.createElement("div",{key:e.key,style:{textAlign:"center"}},r.a.createElement(w,{color:e.color,selected:n===e.key,onClick:()=>((e,l)=>{o(e),t&&t(e),l&&i.push(l)})(e.key,e.path),"aria-label":e.label},e.icon),r.a.createElement($,{color:e.color,selected:n===e.key},e.label))))}var D=l(506),S=l(507),C=l(265),B=l(266),R=l(53),A=l(113),F=l(109),P=l(67),I=l(508),M=l(267),T=l(70),j=l(509),L=l(510),O=l(110),U=l(112),q=l(270);const H={overallScore:72,phaseScores:[{phase:"Design",score:80,phaseName:"Design"},{phase:"Refine",score:60,phaseName:"Refine"},{phase:"Develop",score:70,phaseName:"Develop"},{phase:"Stabilize",score:75,phaseName:"Stabilize"},{phase:"Deploy",score:65,phaseName:"Deploy"}],riskCategories:[{name:"Security",value:65,fullMark:100},{name:"Compliance",value:80,fullMark:100},{name:"Infrastructure",value:75,fullMark:100},{name:"Process",value:68,fullMark:100},{name:"Team",value:85,fullMark:100}],riskSeverity:[{name:"High",value:4,color:"#ff4136"},{name:"Medium",value:7,color:"#ff851b"},{name:"Low",value:13,color:"#2ecc40"}],topRisks:["No accessibility review in Design","Insufficient feature definition in Refinement phase","Missing test coverage in Develop phase","Manual deployment process in Deploy","Lack of automated security scanning","No formal risk assessment process"],mitigatedRisks:["Outdated dependencies with security vulnerabilities","Missing automated testing in CI pipeline","Inadequate error handling","Poor password policy requirements"],lastUpdated:"2024-05-06 15:00"},K=[{phase:"Design",icon:r.a.createElement(x.x,{size:24}),color:"text"},{phase:"Refine",icon:r.a.createElement(x.q,{size:24}),color:"feature"},{phase:"Develop",icon:r.a.createElement(x.k,{size:24}),color:"develop"},{phase:"Stabilize",icon:r.a.createElement(x.l,{size:24}),color:"stabilize"},{phase:"Deploy",icon:r.a.createElement(x.A,{size:24}),color:"deploy"}],N=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,W=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,G=m.c.div`
  flex: 1;
`,V=m.c.div`
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
`,_=m.c.div`
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
    color: ${e=>{let{theme:t,iconColor:l}=e;return t.colors[l]||t.colors.text}};
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
`,le=m.c.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,ae=m.c.button`
  background: none;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${e=>{let{active:t,theme:l}=e;return t?l.colors.primary:l.colors.text}};
  font-weight: ${e=>{let{active:t,theme:l}=e;return t?l.fonts.weights.medium:l.fonts.weights.regular}};
  border-bottom: 2px solid ${e=>{let{active:t,theme:l}=e;return t?l.colors.primary:"transparent"}};
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
  
  &:focus {
    outline: none;
  }
`,re=m.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,ne=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
`;function oe(e,t){return e>=75?"#2ecc40":e>=60?t.colors.accent:"#ff4136"}const ie=e=>{const{x:t,y:l,width:a,value:n}=e;return r.a.createElement("g",null,r.a.createElement("text",{x:t+a/2,y:l-10,fill:"#333",textAnchor:"middle",dominantBaseline:"middle"},n))};function ce(){const e=Object(m.d)(),[t,l]=Object(a.useState)("overview"),{overallScore:n,phaseScores:o,riskCategories:i,riskSeverity:c,topRisks:s,mitigatedRisks:u,lastUpdated:d}=H,g=oe(n,e);return r.a.createElement(N,null,r.a.createElement(W,null,r.a.createElement(G,null,r.a.createElement("div",null,"Comprehensive view of project risk factors and mitigation status"))),r.a.createElement(le,null,r.a.createElement(ae,{active:"overview"===t?"true":"false",onClick:()=>l("overview")},"Overview"),r.a.createElement(ae,{active:"details"===t?"true":"false",onClick:()=>l("details")},"Detailed Analysis")),"overview"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null,r.a.createElement(x.g,{style:{color:e.colors.primary}}),"Overall Risk Assessment"),r.a.createElement(re,null,r.a.createElement(ne,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement(V,{color:g},n),r.a.createElement(J,null,"Overall Risk Score"),r.a.createElement(D.a,{width:"100%",height:180},r.a.createElement(S.a,{data:o,margin:{top:10,right:20,left:0,bottom:0}},r.a.createElement(C.a,{dataKey:"phase",tick:{fontSize:14}}),r.a.createElement(B.a,{domain:[0,100],hide:!0}),r.a.createElement(R.a,null),r.a.createElement(A.a,{dataKey:"score"},o.map((t,l)=>r.a.createElement(F.a,{key:`cell-${l}`,fill:oe(t.score,e)})),r.a.createElement(P.a,{dataKey:"score",position:"top",style:{fontSize:14,fontWeight:600}})))),r.a.createElement(_,null,K.map(t=>{let{phase:l,icon:a,color:n}=t;return r.a.createElement(Q,{key:l},r.a.cloneElement(a,{color:e.colors[n]}),r.a.createElement(te,null,l))}))),r.a.createElement(ne,null,r.a.createElement(X,null,r.a.createElement(x.n,{style:{color:e.colors.accent}}),"Top Risks"),r.a.createElement(Y,null,s.map((t,l)=>r.a.createElement(Z,{key:l},r.a.createElement(x.n,{size:14,style:{color:e.colors.accent}}),t))),r.a.createElement(X,{style:{marginTop:"1.5rem"}},r.a.createElement(x.h,{style:{color:e.colors.primary}}),"Recently Mitigated"),r.a.createElement(Y,null,u.map((t,l)=>r.a.createElement(Z,{key:l},r.a.createElement(x.h,{size:14,style:{color:e.colors.primary}}),t)))))):r.a.createElement(re,null,r.a.createElement(ne,null,r.a.createElement(X,null,r.a.createElement(x.D,{style:{color:e.colors.security}}),"Risk Severity Distribution"),r.a.createElement(D.a,{width:"100%",height:250},r.a.createElement(I.a,null,r.a.createElement(M.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,label:ie,outerRadius:80,fill:"#8884d8",dataKey:"value"},c.map((e,t)=>r.a.createElement(F.a,{key:`cell-${t}`,fill:e.color}))),r.a.createElement(R.a,null),r.a.createElement(T.a,null)))),r.a.createElement(ne,null,r.a.createElement(X,null,r.a.createElement(x.g,{style:{color:e.colors.primary}}),"Risk Category Assessment"),r.a.createElement(D.a,{width:"100%",height:250},r.a.createElement(j.a,{cx:"50%",cy:"50%",outerRadius:80,data:i},r.a.createElement(L.a,null),r.a.createElement(O.a,{dataKey:"name"}),r.a.createElement(U.a,{angle:30,domain:[0,100]}),r.a.createElement(q.a,{name:"Risk Score",dataKey:"value",stroke:e.colors.primary,fill:e.colors.primary,fillOpacity:.6}),r.a.createElement(R.a,null))))),r.a.createElement(ee,null,"Last updated: ",d))}const me=m.c.section`
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
`,Ee=m.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
`,he=m.c.div`
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
  color: ${e=>{let{color:t,theme:l}=e;return l.colors[t]}};
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
`,De=m.c.h3`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
`;function Se(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,null,r.a.createElement(ue,null,r.a.createElement(de,null,"Software Lifecycle Risk Evaluation"),r.a.createElement(ge,null,"Assess risk across every phase of your software development lifecycle")),r.a.createElement(se,{src:u.a,alt:"Watermark"})),r.a.createElement(pe,null,r.a.createElement(Ee,null,"Lifecycle Phases"),r.a.createElement(z,null),r.a.createElement(xe,null,r.a.createElement(he,{id:"phase-design"},r.a.createElement(ye,null,r.a.createElement(fe,{id:"icon-design",color:"text"},r.a.createElement(x.x,null)),r.a.createElement(be,null,"Design")),r.a.createElement(ve,null,r.a.createElement(ke,null,"UX Research"),r.a.createElement(ke,null,"Accessibility"),r.a.createElement(ke,null,"A/B Testing"),r.a.createElement(ke,null,"Wireframes"))),r.a.createElement(he,{id:"phase-refine"},r.a.createElement(ye,null,r.a.createElement(fe,{id:"icon-refine",color:"feature"},r.a.createElement(x.q,null)),r.a.createElement(be,null,"Refine")),r.a.createElement(ve,null,r.a.createElement(ke,null,"Product Roadmap"),r.a.createElement(ke,null,"ROI Hypothesis"),r.a.createElement(ke,null,"Feature 360"),r.a.createElement(ke,null,"Story Curation"))),r.a.createElement(he,{id:"phase-develop"},r.a.createElement(ye,null,r.a.createElement(fe,{id:"icon-develop",color:"develop"},r.a.createElement(x.k,null)),r.a.createElement(be,null,"Develop")),r.a.createElement(ve,null,r.a.createElement(ke,null,"Security Standards"),r.a.createElement(ke,null,"Branching Strategy"),r.a.createElement(ke,null,"Infra - Local | EUT"),r.a.createElement(ke,null,"Test Coverage"))),r.a.createElement(he,{id:"phase-stabilize"},r.a.createElement(ye,null,r.a.createElement(fe,{id:"icon-stabilize",color:"stabilize"},r.a.createElement(x.l,null)),r.a.createElement(be,null,"Stabilize")),r.a.createElement(ve,null,r.a.createElement(ke,null,"STLC"),r.a.createElement(ke,null,"Data Management"),r.a.createElement(ke,null,"CICD - Stage Gates"),r.a.createElement(ke,null,"Resilience Testing"))),r.a.createElement(he,{id:"phase-deploy"},r.a.createElement(ye,null,r.a.createElement(fe,{id:"icon-deploy",color:"deploy"},r.a.createElement(x.A,null)),r.a.createElement(be,null,"Deploy")),r.a.createElement(ve,null,r.a.createElement(ke,null,"Feature rollouts"),r.a.createElement(ke,null,"Observability"),r.a.createElement(ke,null,"Contingencies"),r.a.createElement(ke,null,"Analytics")))),r.a.createElement(we,{id:"cross-phase-ttt"},r.a.createElement($e,null,r.a.createElement(ze,null,r.a.createElement(x.F,null)),r.a.createElement(De,null,"Tools, Tech & Talent")))),r.a.createElement(pe,null,r.a.createElement(Ee,null,"Risk Dashboard"),r.a.createElement(ce,null)))}const Ce=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Be=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Re=Object(m.c)(i.b)`
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
`,Ae=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Fe=m.c.div`
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
`,Pe=m.c.div`
  flex: 1;
`,Ie=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Me=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Te=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,je=m.c.div`
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
  color: ${e=>{let{theme:t,color:l}=e;return t.colors[l]||t.colors.primary}};
  margin-right: 1rem;
`,Ue=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,qe=m.c.div`
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
`,Ke=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function Ne(){return r.a.createElement(Ce,null,r.a.createElement(Be,null,r.a.createElement(Re,{to:"/"},r.a.createElement(x.b,null)," Back to Home Page")),r.a.createElement(Ae,null,r.a.createElement(Fe,null,r.a.createElement(x.x,null)),r.a.createElement(Pe,null,r.a.createElement(Ie,null,"Design Phase"),r.a.createElement(Me,null,"The foundation of successful software projects starts with thoughtful design"))),r.a.createElement(Te,null,r.a.createElement(je,null,r.a.createElement(Le,null,r.a.createElement(Oe,{color:"text"},r.a.createElement(x.s,null)),r.a.createElement(Ue,null,"UX Research")),r.a.createElement(qe,null,"User experience research forms the backbone of effective design, ensuring products meet user needs and expectations.",r.a.createElement(He,null,r.a.createElement(Ke,null,"User interviews and surveys"),r.a.createElement(Ke,null,"Personas and user journey mapping"),r.a.createElement(Ke,null,"Competitive analysis"),r.a.createElement(Ke,null,"Usability testing")))),r.a.createElement(je,null,r.a.createElement(Le,null,r.a.createElement(Oe,{color:"text"},r.a.createElement(x.a,null)),r.a.createElement(Ue,null,"Accessibility")),r.a.createElement(qe,null,"Designing for all users enhances product reach and compliance with legal standards.",r.a.createElement(He,null,r.a.createElement(Ke,null,"WCAG compliance"),r.a.createElement(Ke,null,"Screen reader compatibility"),r.a.createElement(Ke,null,"Color contrast and readability"),r.a.createElement(Ke,null,"Keyboard navigation support")))),r.a.createElement(je,null,r.a.createElement(Le,null,r.a.createElement(Oe,{color:"text"},r.a.createElement(x.g,null)),r.a.createElement(Ue,null,"A/B Testing")),r.a.createElement(qe,null,"Data-driven design decisions lead to optimized user experiences and better business outcomes.",r.a.createElement(He,null,r.a.createElement(Ke,null,"Test hypothesis formation"),r.a.createElement(Ke,null,"Statistical significance planning"),r.a.createElement(Ke,null,"Multivariate testing"),r.a.createElement(Ke,null,"Iterative design improvements")))),r.a.createElement(je,null,r.a.createElement(Le,null,r.a.createElement(Oe,{color:"text"},r.a.createElement(x.I,null)),r.a.createElement(Ue,null,"Wireframes")),r.a.createElement(qe,null,"Visual blueprints that guide development and align stakeholder expectations.",r.a.createElement(He,null,r.a.createElement(Ke,null,"Low-fidelity sketches"),r.a.createElement(Ke,null,"Interactive prototypes"),r.a.createElement(Ke,null,"Information architecture"),r.a.createElement(Ke,null,"User flow diagrams"))))))}const We=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Ge=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Ve=Object(m.c)(i.b)`
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
`,_e=m.c.div`
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
`,lt=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:l}=e;return t.colors[l]||t.colors.primary}};
  margin-right: 1rem;
`,at=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,rt=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,nt=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,ot=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function it(){return r.a.createElement(We,null,r.a.createElement(Ge,null,r.a.createElement(Ve,{to:"/"},r.a.createElement(x.b,null)," Back to Home Page")),r.a.createElement(Je,null,r.a.createElement(Xe,null,r.a.createElement(x.q,null)),r.a.createElement(_e,null,r.a.createElement(Qe,null,"Refine Phase"),r.a.createElement(Ye,null,"Transform design concepts into well-defined requirements and implementation plans"))),r.a.createElement(Ze,null,r.a.createElement(et,null,r.a.createElement(tt,null,r.a.createElement(lt,{color:"feature"},r.a.createElement(x.f,null)),r.a.createElement(at,null,"Product Roadmap")),r.a.createElement(rt,null,"Strategic planning that aligns development with business objectives and market needs.",r.a.createElement(nt,null,r.a.createElement(ot,null,"Feature prioritization"),r.a.createElement(ot,null,"Release planning"),r.a.createElement(ot,null,"Stakeholder alignment"),r.a.createElement(ot,null,"Milestone definition")))),r.a.createElement(et,null,r.a.createElement(tt,null,r.a.createElement(lt,{color:"feature"},r.a.createElement(x.v,null)),r.a.createElement(at,null,"ROI Hypothesis")),r.a.createElement(rt,null,"Economic analysis to ensure development efforts yield meaningful business returns.",r.a.createElement(nt,null,r.a.createElement(ot,null,"Cost-benefit analysis"),r.a.createElement(ot,null,"Resource allocation planning"),r.a.createElement(ot,null,"Market opportunity assessment"),r.a.createElement(ot,null,"Success metrics definition")))),r.a.createElement(et,null,r.a.createElement(tt,null,r.a.createElement(lt,{color:"feature"},r.a.createElement(x.y,null)),r.a.createElement(at,null,"Feature 360")),r.a.createElement(rt,null,"Comprehensive analysis of each feature from multiple perspectives to ensure completeness.",r.a.createElement(nt,null,r.a.createElement(ot,null,"User story development"),r.a.createElement(ot,null,"Edge case identification"),r.a.createElement(ot,null,"Acceptance criteria"),r.a.createElement(ot,null,"Integration requirements")))),r.a.createElement(et,null,r.a.createElement(tt,null,r.a.createElement(lt,{color:"feature"},r.a.createElement(x.d,null)),r.a.createElement(at,null,"Story Curation")),r.a.createElement(rt,null,"Development of clear, complete user stories that capture requirements and acceptance criteria.",r.a.createElement(nt,null,r.a.createElement(ot,null,"Persona-based story writing"),r.a.createElement(ot,null,"Acceptance criteria definition"),r.a.createElement(ot,null,"Story prioritization"),r.a.createElement(ot,null,"Backlog management"))))))}const ct=m.c.div`
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
`,Et=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,ht=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ft=m.c.div`
  width: 100%;
  margin: 3rem 0 1.5rem 0;
`,yt=m.c.h2`
  font-size: 1.8rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,bt=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,xt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,vt=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:l}=e;return t.colors[l]||t.colors.primary}};
  margin-right: 1rem;
`,kt=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,wt=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,$t=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,zt=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function Dt(){return r.a.createElement(ct,null,r.a.createElement(mt,null,r.a.createElement(st,{to:"/"},r.a.createElement(x.b,null)," Back to Home Page")),r.a.createElement(ut,null,r.a.createElement(dt,null,r.a.createElement(x.k,null)),r.a.createElement(gt,null,r.a.createElement(pt,null,"Develop Phase"),r.a.createElement(Et,null,"Building robust, maintainable, and secure code for your application"))),r.a.createElement(ft,null,r.a.createElement(yt,null,"Development Standards")),r.a.createElement(ht,null,r.a.createElement(bt,null,r.a.createElement(xt,null,r.a.createElement(vt,{color:"develop"},r.a.createElement(x.D,null)),r.a.createElement(kt,null,"Security Standards")),r.a.createElement(wt,null,"Implementing security best practices throughout the development process.",r.a.createElement($t,null,r.a.createElement(zt,null,"Input validation and sanitization"),r.a.createElement(zt,null,"Secure authentication protocols"),r.a.createElement(zt,null,"Sensitive data encryption"),r.a.createElement(zt,null,"OWASP vulnerability prevention"),r.a.createElement(zt,null,"Security code reviews")))),r.a.createElement(bt,null,r.a.createElement(xt,null,r.a.createElement(vt,{color:"develop"},r.a.createElement(x.j,null)),r.a.createElement(kt,null,"Branching Strategy")),r.a.createElement(wt,null,"Organized approach to source code management and collaboration.",r.a.createElement($t,null,r.a.createElement(zt,null,"Feature branch workflow"),r.a.createElement(zt,null,"Pull request processes"),r.a.createElement(zt,null,"Branch protection rules"),r.a.createElement(zt,null,"Merge conflict resolution"),r.a.createElement(zt,null,"Release branch management")))),r.a.createElement(bt,null,r.a.createElement(xt,null,r.a.createElement(vt,{color:"develop"},r.a.createElement(x.C,null)),r.a.createElement(kt,null,"Infra - Local | EUT")),r.a.createElement(wt,null,"Setting up development and testing infrastructure for efficient workflows.",r.a.createElement($t,null,r.a.createElement(zt,null,"Local development environments"),r.a.createElement(zt,null,"Containerization (Docker)"),r.a.createElement(zt,null,"Environment uniformity"),r.a.createElement(zt,null,"End-user testing environments"),r.a.createElement(zt,null,"Environment configuration management")))),r.a.createElement(bt,null,r.a.createElement(xt,null,r.a.createElement(vt,{color:"develop"},r.a.createElement(x.i,null)),r.a.createElement(kt,null,"Test Coverage")),r.a.createElement(wt,null,"Comprehensive testing approach to ensure code quality and reliability.",r.a.createElement($t,null,r.a.createElement(zt,null,"Unit testing frameworks"),r.a.createElement(zt,null,"Integration testing"),r.a.createElement(zt,null,"Code coverage metrics"),r.a.createElement(zt,null,"Test-driven development"),r.a.createElement(zt,null,"Automated regression testing"))))),r.a.createElement(ft,null,r.a.createElement(yt,null,"Code Quality")),r.a.createElement(ht,null,r.a.createElement(bt,null,r.a.createElement(xt,null,r.a.createElement(vt,{color:"develop"},r.a.createElement(x.d,null)),r.a.createElement(kt,null,"Readability")),r.a.createElement(wt,null,"Making code easy to understand, maintain, and extend.",r.a.createElement($t,null,r.a.createElement(zt,null,"Linters"),r.a.createElement(zt,null,"Patterns"),r.a.createElement(zt,null,"Tasks"),r.a.createElement(zt,null,"Docs")))),r.a.createElement(bt,null,r.a.createElement(xt,null,r.a.createElement(vt,{color:"develop"},r.a.createElement(x.z,null)),r.a.createElement(kt,null,"Review Process")),r.a.createElement(wt,null,"Multi-faceted review approach to ensure high quality code.",r.a.createElement($t,null,r.a.createElement(zt,null,"Architecture review"),r.a.createElement(zt,null,"Design review"),r.a.createElement(zt,null,"Code review"),r.a.createElement(zt,null,"Technical review"))))),r.a.createElement(ft,null,r.a.createElement(yt,null,"Testing & Tooling")),r.a.createElement(ht,null,r.a.createElement(bt,null,r.a.createElement(xt,null,r.a.createElement(vt,{color:"develop"},r.a.createElement(x.e,null)),r.a.createElement(kt,null,"Test Strategy")),r.a.createElement(wt,null,"Comprehensive testing approach across multiple levels.",r.a.createElement($t,null,r.a.createElement(zt,null,"Unit testing"),r.a.createElement(zt,null,"Integration testing"),r.a.createElement(zt,null,"Data - Mock & Synthetic")))),r.a.createElement(bt,null,r.a.createElement(xt,null,r.a.createElement(vt,{color:"develop"},r.a.createElement(x.F,null)),r.a.createElement(kt,null,"Tools")),r.a.createElement(wt,null,"Essential tools for monitoring, analysis and deployment.",r.a.createElement($t,null,r.a.createElement(zt,null,"Observability"),r.a.createElement(zt,null,"Feature Flagging"),r.a.createElement(zt,null,"Code Analysis"),r.a.createElement(zt,null,"Crash Reporting"),r.a.createElement(zt,null,"User Analytics"),r.a.createElement(zt,null,"Alerting (pager & on-call)"))))))}const St=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Ct=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Bt=Object(m.c)(i.b)`
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
`,Rt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,At=m.c.div`
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
`,Ft=m.c.div`
  flex: 1;
`,Pt=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,It=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Mt=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Tt=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,jt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Lt=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:l}=e;return t.colors[l]||t.colors.primary}};
  margin-right: 1rem;
`,Ot=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Ut=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,qt=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,Ht=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function Kt(){return r.a.createElement(St,null,r.a.createElement(Ct,null,r.a.createElement(Bt,{to:"/"},r.a.createElement(x.b,null)," Back to Home Page")),r.a.createElement(Rt,null,r.a.createElement(At,null,r.a.createElement(x.l,null)),r.a.createElement(Ft,null,r.a.createElement(Pt,null,"Stabilize Phase"),r.a.createElement(It,null,"Ensuring your software is reliable, robust, and ready for production deployment"))),r.a.createElement(Mt,null,r.a.createElement(Tt,null,r.a.createElement(jt,null,r.a.createElement(Lt,{color:"stabilize"},r.a.createElement(x.p,null)),r.a.createElement(Ot,null,"STLC")),r.a.createElement(Ut,null,"Structured Software Testing Life Cycle that ensures comprehensive coverage.",r.a.createElement(qt,null,r.a.createElement(Ht,null,"Test planning and strategy"),r.a.createElement(Ht,null,"Test case development"),r.a.createElement(Ht,null,"Test environment preparation"),r.a.createElement(Ht,null,"Test execution and reporting"),r.a.createElement(Ht,null,"Test closure and lessons learned")))),r.a.createElement(Tt,null,r.a.createElement(jt,null,r.a.createElement(Lt,{color:"stabilize"},r.a.createElement(x.m,null)),r.a.createElement(Ot,null,"Data Management")),r.a.createElement(Ut,null,"Robust handling of data throughout testing and stabilization processes.",r.a.createElement(qt,null,r.a.createElement(Ht,null,"Test data generation and management"),r.a.createElement(Ht,null,"Data migration validation"),r.a.createElement(Ht,null,"Database performance testing"),r.a.createElement(Ht,null,"Data integrity checks"),r.a.createElement(Ht,null,"Data backup and recovery verification")))),r.a.createElement(Tt,null,r.a.createElement(jt,null,r.a.createElement(Lt,{color:"stabilize"},r.a.createElement(x.A,null)),r.a.createElement(Ot,null,"CICD - Stage Gates")),r.a.createElement(Ut,null,"Automated quality gates that ensure only stable code progresses to production.",r.a.createElement(qt,null,r.a.createElement(Ht,null,"Code quality gates (linting, static analysis)"),r.a.createElement(Ht,null,"Automated testing gates"),r.a.createElement(Ht,null,"Performance benchmarking gates"),r.a.createElement(Ht,null,"Security scanning gates"),r.a.createElement(Ht,null,"Approval workflows")))),r.a.createElement(Tt,null,r.a.createElement(jt,null,r.a.createElement(Lt,{color:"stabilize"},r.a.createElement(x.c,null)),r.a.createElement(Ot,null,"Resilience Testing")),r.a.createElement(Ut,null,"Verifying system stability under stress, unusual conditions, and component failures.",r.a.createElement(qt,null,r.a.createElement(Ht,null,"Chaos engineering experiments"),r.a.createElement(Ht,null,"Load and stress testing"),r.a.createElement(Ht,null,"Failover and recovery testing"),r.a.createElement(Ht,null,"Degraded service simulation"),r.a.createElement(Ht,null,"Long-haul reliability testing")))),r.a.createElement(Tt,null,r.a.createElement(jt,null,r.a.createElement(Lt,{color:"stabilize"},r.a.createElement(x.E,null)),r.a.createElement(Ot,null,"Performance Optimization")),r.a.createElement(Ut,null,"Monitoring and enhancing system performance to meet user expectations.",r.a.createElement(qt,null,r.a.createElement(Ht,null,"Response time optimization"),r.a.createElement(Ht,null,"Resource utilization analysis"),r.a.createElement(Ht,null,"Database query optimization"),r.a.createElement(Ht,null,"Network latency reduction"),r.a.createElement(Ht,null,"Caching strategy implementation"))))))}const Nt=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Wt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Gt=Object(m.c)(i.b)`
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
`,Vt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Jt=m.c.div`
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
`,Xt=m.c.div`
  flex: 1;
`,_t=m.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Qt=m.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Yt=m.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Zt=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,el=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,tl=m.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:l}=e;return t.colors[l]||t.colors.deploy}};
  margin-right: 1rem;
`,ll=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,al=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,rl=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,nl=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function ol(){return r.a.createElement(Nt,null,r.a.createElement(Wt,null,r.a.createElement(Gt,{to:"/"},r.a.createElement(x.b,null)," Back to Home Page")),r.a.createElement(Vt,null,r.a.createElement(Jt,null,r.a.createElement(x.A,null)),r.a.createElement(Xt,null,r.a.createElement(_t,null,"Deploy Phase"),r.a.createElement(Qt,null,"Safely delivering your software to production and ensuring operational excellence"))),r.a.createElement(Yt,null,r.a.createElement(Zt,null,r.a.createElement(el,null,r.a.createElement(tl,null,r.a.createElement(x.r,null)),r.a.createElement(ll,null,"Feature Rollouts")),r.a.createElement(al,null,"Controlled introduction of new capabilities to minimize risk and maximize feedback.",r.a.createElement(rl,null,r.a.createElement(nl,null,"Progressive delivery strategies"),r.a.createElement(nl,null,"Canary deployments"),r.a.createElement(nl,null,"Blue/Green deployments"),r.a.createElement(nl,null,"Feature flags and toggles"),r.a.createElement(nl,null,"Early user feedback loops")))),r.a.createElement(Zt,null,r.a.createElement(el,null,r.a.createElement(tl,null,r.a.createElement(x.B,null)),r.a.createElement(ll,null,"Observability")),r.a.createElement(al,null,"Comprehensive monitoring to understand system behavior and troubleshoot issues.",r.a.createElement(rl,null,r.a.createElement(nl,null,"Security Monitors & Alerts"),r.a.createElement(nl,null,"Allow/Block list"),r.a.createElement(nl,null,"Application Performance Monitoring"),r.a.createElement(nl,null,"Distributed tracing"),r.a.createElement(nl,null,"Logging strategies")))),r.a.createElement(Zt,null,r.a.createElement(el,null,r.a.createElement(tl,null,r.a.createElement(x.n,null)),r.a.createElement(ll,null,"Contingencies")),r.a.createElement(al,null,"Planning for failures and ensuring business continuity in all scenarios.",r.a.createElement(rl,null,r.a.createElement(nl,null,"Rollback/Rollforward strategies"),r.a.createElement(nl,null,"Emergency response planning"),r.a.createElement(nl,null,"Disaster recovery procedures"),r.a.createElement(nl,null,"Incident management workflows"),r.a.createElement(nl,null,"On-call rotation and escalation")))),r.a.createElement(Zt,null,r.a.createElement(el,null,r.a.createElement(tl,null,r.a.createElement(x.g,null)),r.a.createElement(ll,null,"Analytics")),r.a.createElement(al,null,"Leveraging data to inform product decisions and business strategy.",r.a.createElement(rl,null,r.a.createElement(nl,null,"User behavior tracking"),r.a.createElement(nl,null,"Conversion and funnel analysis"),r.a.createElement(nl,null,"Feature adoption metrics"),r.a.createElement(nl,null,"Business impact measurement"),r.a.createElement(nl,null,"Predictive usage modeling")))),r.a.createElement(Zt,null,r.a.createElement(el,null,r.a.createElement(tl,null,r.a.createElement(x.A,null)),r.a.createElement(ll,null,"Continuous Improvement")),r.a.createElement(al,null,"Evolving delivery processes through regular feedback and adaptation.",r.a.createElement(rl,null,r.a.createElement(nl,null,"Post-deployment reviews"),r.a.createElement(nl,null,"Release process optimization"),r.a.createElement(nl,null,"Deployment frequency metrics"),r.a.createElement(nl,null,"Cycle time reduction"),r.a.createElement(nl,null,"DevOps maturity assessments"))))))}var il=l(511);const cl={riskCategories:[{name:"Security",unmitigated:8,mitigated:5,inProgress:3,icon:r.a.createElement(x.D,null),color:"security"},{name:"Privacy",unmitigated:6,mitigated:4,inProgress:2,icon:r.a.createElement(x.H,null),color:"highlight"},{name:"Infrastructure",unmitigated:5,mitigated:3,inProgress:2,icon:r.a.createElement(x.C,null),color:"contingencies"},{name:"Authentication",unmitigated:7,mitigated:3,inProgress:4,icon:r.a.createElement(x.u,null),color:"primary"},{name:"Network",unmitigated:4,mitigated:2,inProgress:2,icon:r.a.createElement(x.w,null),color:"analytics"}],topMitigations:[{risk:"SQL Injection Vulnerability",category:"Security",mitigation:"Implemented parameterized queries and input validation",impact:"High",completionDate:"2024-04-15"},{risk:"Clear-Text Password Storage",category:"Authentication",mitigation:"Added password hashing with bcrypt and salting",impact:"High",completionDate:"2024-04-18"},{risk:"Unprotected API Endpoints",category:"Security",mitigation:"Added JWT authentication to all endpoints",impact:"Medium",completionDate:"2024-04-22"},{risk:"Outdated Dependencies",category:"Infrastructure",mitigation:"Implemented dependency scanning and auto-updates",impact:"Medium",completionDate:"2024-04-25"}],pendingMitigations:[{risk:"Insufficient Rate Limiting",category:"Security",mitigation:"Implement API rate limiting and throttling",impact:"Medium",targetDate:"2024-05-15"},{risk:"Weak Password Requirements",category:"Authentication",mitigation:"Enforce stronger password policy",impact:"Medium",targetDate:"2024-05-20"},{risk:"Missing Data Backup Strategy",category:"Infrastructure",mitigation:"Implement automated backup and verification",impact:"High",targetDate:"2024-06-01"}],lastUpdated:"2024-05-06 15:00"},ml=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,sl=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,ul=m.c.div`
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
`,dl=m.c.h2`
  font-size: 1.75rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,gl=m.c.h3`
  font-size: 1.25rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin: 1.5rem 0 1rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,pl=m.c.div`
  margin-bottom: 2rem;
`,El=m.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,hl=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
`,fl=m.c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`,yl=m.c.th`
  text-align: left;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,bl=m.c.tr`
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
`,xl=m.c.td`
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,vl=m.c.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  background: ${e=>{let{impact:t,theme:l}=e;switch(t){case"High":return"rgba(255, 107, 87, 0.15)";case"Medium":return"rgba(255, 224, 102, 0.2)";case"Low":return"rgba(182, 226, 211, 0.15)";default:return"rgba(0, 0, 0, 0.05)"}}};
  color: ${e=>{let{impact:t,theme:l}=e;switch(t){case"High":return l.colors.feature;case"Medium":return"#D4AC0D";case"Low":return"#27AE60";default:return l.colors.text}}};
`,kl=m.c.div`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`,wl=m.c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`,$l=m.c.div`
  display: flex;
  align-items: center;
  margin: 0 0.75rem;
  font-size: 0.85rem;
`,zl=m.c.div`
  width: 12px;
  height: 12px;
  background-color: ${e=>{let{color:t}=e;return t}};
  margin-right: 0.5rem;
  border-radius: 2px;
`;function Dl(){const e=Object(m.d)(),{riskCategories:t,topMitigations:l,pendingMitigations:a,lastUpdated:n}=cl,o=t.map(e=>({name:e.name,Mitigated:e.mitigated,"In Progress":e.inProgress,Unmitigated:e.unmitigated-e.mitigated-e.inProgress,icon:e.icon,color:e.color}));return r.a.createElement(ml,null,r.a.createElement(sl,null,r.a.createElement(ul,null,r.a.createElement(x.n,null)),r.a.createElement(dl,null,"Risk Mitigation Roadmap")),r.a.createElement(pl,null,r.a.createElement(gl,null,"Risk Mitigation Status by Category"),r.a.createElement(wl,null,r.a.createElement($l,null,r.a.createElement(zl,{color:e.colors.primary}),"Mitigated"),r.a.createElement($l,null,r.a.createElement(zl,{color:e.colors.accent}),"In Progress"),r.a.createElement($l,null,r.a.createElement(zl,{color:"#D6D6D6"}),"Unmitigated")),r.a.createElement(D.a,{width:"100%",height:250},r.a.createElement(S.a,{data:o,margin:{top:20,right:30,left:20,bottom:5},barGap:0,barCategoryGap:"20%"},r.a.createElement(il.a,{strokeDasharray:"3 3",vertical:!1}),r.a.createElement(C.a,{dataKey:"name",tick:{fontSize:12},tickLine:!1}),r.a.createElement(B.a,{allowDecimals:!1,axisLine:!1,tickLine:!1,tick:{fontSize:12}}),r.a.createElement(R.a,null),r.a.createElement(A.a,{dataKey:"Mitigated",stackId:"a",fill:e.colors.primary}),r.a.createElement(A.a,{dataKey:"In Progress",stackId:"a",fill:e.colors.accent}),r.a.createElement(A.a,{dataKey:"Unmitigated",stackId:"a",fill:"#D6D6D6"})))),r.a.createElement(El,null,r.a.createElement(hl,null,r.a.createElement(gl,null,r.a.createElement(x.D,{style:{color:e.colors.security}}),"Completed Mitigations"),r.a.createElement(fl,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(yl,null,"Risk"),r.a.createElement(yl,null,"Category"),r.a.createElement(yl,null,"Impact"),r.a.createElement(yl,null,"Date"))),r.a.createElement("tbody",null,l.map((e,t)=>r.a.createElement(bl,{key:t},r.a.createElement(xl,null,e.risk),r.a.createElement(xl,null,e.category),r.a.createElement(xl,null,r.a.createElement(vl,{impact:e.impact},e.impact)),r.a.createElement(xl,null,e.completionDate)))))),r.a.createElement(hl,null,r.a.createElement(gl,null,r.a.createElement(x.H,{style:{color:e.colors.highlight}}),"Pending Mitigations"),r.a.createElement(fl,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(yl,null,"Risk"),r.a.createElement(yl,null,"Category"),r.a.createElement(yl,null,"Impact"),r.a.createElement(yl,null,"Target Date"))),r.a.createElement("tbody",null,a.map((e,t)=>r.a.createElement(bl,{key:t},r.a.createElement(xl,null,e.risk),r.a.createElement(xl,null,e.category),r.a.createElement(xl,null,r.a.createElement(vl,{impact:e.impact},e.impact)),r.a.createElement(xl,null,e.targetDate))))))),r.a.createElement(kl,null,"Last updated: ",n))}const Sl=m.c.footer`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0 0.5rem 0;
  margin-top: 3rem;
`,Cl=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,Bl=m.c.img`
  height: 36px;
  width: auto;
  margin-right: 2rem;
`,Rl=m.c.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,Al=m.c.a`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Fl=m.c.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`,Pl=m.c.a`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Il=m.c.div`
  width: 100%;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 0.95rem;
  margin-top: 2rem;
  opacity: 0.7;
`;function Ml(){return r.a.createElement(Sl,null,r.a.createElement(Cl,null,r.a.createElement(Bl,{src:u.a,alt:"Stable Kernel Logo"}),r.a.createElement(Rl,null,r.a.createElement(Al,{href:"#services"},"Services"),r.a.createElement(Al,{href:"#case-studies"},"Case Studies"),r.a.createElement(Al,{href:"#about-us"},"About Us"),r.a.createElement(Al,{href:"#resources"},"Resources"),r.a.createElement(Al,{href:"#book-a-consultation"},"Book a Consultation"),r.a.createElement(Al,{href:"#careers"},"Careers"),r.a.createElement(Al,{href:"#privacy-policy"},"Privacy Policy")),r.a.createElement(Fl,null,r.a.createElement(Pl,{href:"https://twitter.com/stablekernel",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"},r.a.createElement(x.G,null)),r.a.createElement(Pl,{href:"https://www.facebook.com/stablekernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},r.a.createElement(x.o,null)),r.a.createElement(Pl,{href:"https://www.linkedin.com/company/stable-kernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},r.a.createElement(x.t,null)))),r.a.createElement(Il,null,"\xa9 ",(new Date).getFullYear()," Stable Kernel. All rights reserved."))}l(504);const Tl=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;var jl=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(Tl,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:Se}),r.a.createElement(c.a,{path:"/design",component:Ne}),r.a.createElement(c.a,{path:"/refine",component:it}),r.a.createElement(c.a,{path:"/develop",component:Dt}),r.a.createElement(c.a,{path:"/stabilize",component:Kt}),r.a.createElement(c.a,{path:"/deploy",component:ol}),r.a.createElement(c.a,{path:"/risk-dashboard",component:ce}),r.a.createElement(c.a,{path:"/risk-mitigation",component:Dl}))),r.a.createElement(Ml,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ll=e=>{e&&e instanceof Function&&l.e(3).then(l.bind(null,512)).then(t=>{let{getCLS:l,getFID:a,getFCP:r,getLCP:n,getTTFB:o}=t;l(e),a(e),r(e),n(e),o(e)})};const Ol=m.b`
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
`;o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{theme:{colors:{primary:"#2F48C4",accent:"#FF6B57",background:"#FFFFFF",secondaryBackground:"#F7F8FA",text:"#22223B",highlight:"#A3A3FF",feature:"#FF6B57",story:"#00CFE8",develop:"#A3A3FF",stabilize:"#B6E2D3",deploy:"#FFF3B0",security:"#FFB3B3",analytics:"#FFE066",contingencies:"#D6C1FF"},fonts:{primary:"'Inter', 'Segoe UI', Arial, sans-serif",weights:{regular:400,medium:500,bold:700}}}},r.a.createElement(Ol,null),r.a.createElement(jl,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)}),Ll()},65:function(e,t,l){e.exports=l.p+"static/media/sk-logo-dark.fbff4e0a.svg"}},[[275,1,2]]]);
//# sourceMappingURL=main.1f722a8c.chunk.js.map