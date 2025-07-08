(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{275:function(e,t,l){e.exports=l(505)},284:function(e,t,l){},504:function(e,t,l){},505:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(252),o=l.n(r),i=(l(284),l(23)),c=l(18),m=l(2),s=l(65),u=l.n(s);const d=m.c.header`
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
`;function b(){return n.a.createElement(d,null,n.a.createElement(y,null,n.a.createElement(i.b,{to:"/"},n.a.createElement(g,{src:u.a,alt:"Stable Kernel Logo"})),n.a.createElement(p,null,n.a.createElement(E,{to:"/"},"Home"),n.a.createElement(E,{to:"/risk-dashboard"},"Risk Dashboard"),n.a.createElement(E,{to:"/risk-mitigation"},"Risk Mitigation"),n.a.createElement(f,{href:"#resources"},"Resources"),n.a.createElement(h,{to:"/risk-dashboard"},"View Risks"))))}var x=l(4);const v=[{key:"design",label:"Design",color:"text",icon:n.a.createElement(x.x,null),path:"/design"},{key:"refine",label:"Refine",color:"feature",icon:n.a.createElement(x.q,null),path:"/refine"},{key:"develop",label:"Develop",color:"develop",icon:n.a.createElement(x.k,null),path:"/develop"},{key:"stabilize",label:"Stabilize",color:"stabilize",icon:n.a.createElement(x.l,null),path:"/stabilize"},{key:"deploy",label:"Deploy",color:"deploy",icon:n.a.createElement(x.A,null),path:"/deploy"}],k=m.c.div`
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
`;function z(e){let{onSelect:t,selectedPhase:l}=e;const[r,o]=Object(a.useState)(l||v[0].key),i=Object(c.f)();return n.a.createElement(k,null,v.map(e=>n.a.createElement("div",{key:e.key,style:{textAlign:"center"}},n.a.createElement(w,{color:e.color,selected:r===e.key,onClick:()=>((e,l)=>{o(e),t&&t(e),l&&i.push(l)})(e.key,e.path),"aria-label":e.label},e.icon),n.a.createElement($,{color:e.color,selected:r===e.key},e.label))))}var D=l(506),S=l(507),C=l(265),B=l(266),R=l(53),A=l(113),F=l(109),P=l(67),I=l(508),M=l(267),T=l(70),j=l(509),L=l(510),O=l(110),U=l(112),q=l(270);const H={overallScore:72,phaseScores:[{phase:"Design",score:80,phaseName:"Design"},{phase:"Refine",score:60,phaseName:"Refine"},{phase:"Develop",score:70,phaseName:"Develop"},{phase:"Stabilize",score:75,phaseName:"Stabilize"},{phase:"Deploy",score:65,phaseName:"Deploy"}],riskCategories:[{name:"Security",value:65,fullMark:100},{name:"Compliance",value:80,fullMark:100},{name:"Infrastructure",value:75,fullMark:100},{name:"Process",value:68,fullMark:100},{name:"Team",value:85,fullMark:100}],riskSeverity:[{name:"High",value:4,color:"#ff4136"},{name:"Medium",value:7,color:"#ff851b"},{name:"Low",value:13,color:"#2ecc40"}],topRisks:["No accessibility review in Design","Insufficient feature definition in Refinement phase","Missing test coverage in Develop phase","Manual deployment process in Deploy","Lack of automated security scanning","No formal risk assessment process"],mitigatedRisks:["Outdated dependencies with security vulnerabilities","Missing automated testing in CI pipeline","Inadequate error handling","Poor password policy requirements"],lastUpdated:"2024-05-06 15:00"},K=[{phase:"Design",icon:n.a.createElement(x.x,{size:24}),color:"text"},{phase:"Refine",icon:n.a.createElement(x.q,{size:24}),color:"feature"},{phase:"Develop",icon:n.a.createElement(x.k,{size:24}),color:"develop"},{phase:"Stabilize",icon:n.a.createElement(x.l,{size:24}),color:"stabilize"},{phase:"Deploy",icon:n.a.createElement(x.A,{size:24}),color:"deploy"}],N=m.c.div`
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
`,ne=m.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,re=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
`;function oe(e,t){return e>=75?"#2ecc40":e>=60?t.colors.accent:"#ff4136"}const ie=e=>{const{x:t,y:l,width:a,value:r}=e;return n.a.createElement("g",null,n.a.createElement("text",{x:t+a/2,y:l-10,fill:"#333",textAnchor:"middle",dominantBaseline:"middle"},r))};function ce(){const e=Object(m.d)(),[t,l]=Object(a.useState)("overview"),{overallScore:r,phaseScores:o,riskCategories:i,riskSeverity:c,topRisks:s,mitigatedRisks:u,lastUpdated:d}=H,g=oe(r,e);return n.a.createElement(N,null,n.a.createElement(W,null,n.a.createElement(G,null,n.a.createElement("subTitle",null,"Comprehensive view of project risk factors and mitigation status"))),n.a.createElement(le,null,n.a.createElement(ae,{active:"overview"===t,onClick:()=>l("overview")},"Overview"),n.a.createElement(ae,{active:"details"===t,onClick:()=>l("details")},"Detailed Analysis")),"overview"===t?n.a.createElement(n.a.Fragment,null,n.a.createElement(X,null,n.a.createElement(x.g,{style:{color:e.colors.primary}}),"Overall Risk Assessment"),n.a.createElement(ne,null,n.a.createElement(re,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement(V,{color:g},r),n.a.createElement(J,null,"Overall Risk Score"),n.a.createElement(D.a,{width:"100%",height:180},n.a.createElement(S.a,{data:o,margin:{top:10,right:20,left:0,bottom:0}},n.a.createElement(C.a,{dataKey:"phase",tick:{fontSize:14}}),n.a.createElement(B.a,{domain:[0,100],hide:!0}),n.a.createElement(R.a,null),n.a.createElement(A.a,{dataKey:"score"},o.map((t,l)=>n.a.createElement(F.a,{key:`cell-${l}`,fill:oe(t.score,e)})),n.a.createElement(P.a,{dataKey:"score",position:"top",style:{fontSize:14,fontWeight:600}})))),n.a.createElement(_,null,K.map(t=>{let{phase:l,icon:a,color:r}=t;return n.a.createElement(Q,{key:l},n.a.cloneElement(a,{color:e.colors[r]}),n.a.createElement(te,null,l))}))),n.a.createElement(re,null,n.a.createElement(X,null,n.a.createElement(x.n,{style:{color:e.colors.accent}}),"Top Risks"),n.a.createElement(Y,null,s.map((e,t)=>n.a.createElement(Z,{key:t,iconColor:"accent"},n.a.createElement(x.n,{size:14}),e))),n.a.createElement(X,{style:{marginTop:"1.5rem"}},n.a.createElement(x.h,{style:{color:e.colors.primary}}),"Recently Mitigated"),n.a.createElement(Y,null,u.map((e,t)=>n.a.createElement(Z,{key:t,iconColor:"primary"},n.a.createElement(x.h,{size:14}),e)))))):n.a.createElement(ne,null,n.a.createElement(re,null,n.a.createElement(X,null,n.a.createElement(x.D,{style:{color:e.colors.security}}),"Risk Severity Distribution"),n.a.createElement(D.a,{width:"100%",height:250},n.a.createElement(I.a,null,n.a.createElement(M.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,label:ie,outerRadius:80,fill:"#8884d8",dataKey:"value"},c.map((e,t)=>n.a.createElement(F.a,{key:`cell-${t}`,fill:e.color}))),n.a.createElement(R.a,null),n.a.createElement(T.a,null)))),n.a.createElement(re,null,n.a.createElement(X,null,n.a.createElement(x.g,{style:{color:e.colors.primary}}),"Risk Category Assessment"),n.a.createElement(D.a,{width:"100%",height:250},n.a.createElement(j.a,{cx:"50%",cy:"50%",outerRadius:80,data:i},n.a.createElement(L.a,null),n.a.createElement(O.a,{dataKey:"name"}),n.a.createElement(U.a,{angle:30,domain:[0,100]}),n.a.createElement(q.a,{name:"Risk Score",dataKey:"value",stroke:e.colors.primary,fill:e.colors.primary,fillOpacity:.6}),n.a.createElement(R.a,null))))),n.a.createElement(ee,null,"Last updated: ",d))}const me=m.c.section`
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
`;function Se(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(me,null,n.a.createElement(ue,null,n.a.createElement(de,null,"Software Lifecycle Risk Evaluation"),n.a.createElement(ge,null,"Assess risk across every phase of your software development lifecycle")),n.a.createElement(se,{src:u.a,alt:"Watermark"})),n.a.createElement(pe,null,n.a.createElement(Ee,null,"Lifecycle Phases"),n.a.createElement(z,null),n.a.createElement(xe,null,n.a.createElement(he,{id:"phase-design"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-design",color:"text"},n.a.createElement(x.x,null)),n.a.createElement(be,null,"Design")),n.a.createElement(ve,null,n.a.createElement(ke,null,"UX Research"),n.a.createElement(ke,null,"Accessibility"),n.a.createElement(ke,null,"A/B Testing"),n.a.createElement(ke,null,"Wireframes"))),n.a.createElement(he,{id:"phase-refine"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-refine",color:"feature"},n.a.createElement(x.q,null)),n.a.createElement(be,null,"Refine")),n.a.createElement(ve,null,n.a.createElement(ke,null,"Product Roadmap"),n.a.createElement(ke,null,"ROI Hypothesis"),n.a.createElement(ke,null,"Feature 360"),n.a.createElement(ke,null,"Story Curation"))),n.a.createElement(he,{id:"phase-develop"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-develop",color:"develop"},n.a.createElement(x.k,null)),n.a.createElement(be,null,"Develop")),n.a.createElement(ve,null,n.a.createElement(ke,null,"Security Standards"),n.a.createElement(ke,null,"Branching Strategy"),n.a.createElement(ke,null,"Infra - Local | EUT"),n.a.createElement(ke,null,"Test Coverage"))),n.a.createElement(he,{id:"phase-stabilize"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-stabilize",color:"stabilize"},n.a.createElement(x.l,null)),n.a.createElement(be,null,"Stabilize")),n.a.createElement(ve,null,n.a.createElement(ke,null,"STLC"),n.a.createElement(ke,null,"Data Management"),n.a.createElement(ke,null,"CICD - Stage Gates"),n.a.createElement(ke,null,"Resilience Testing"))),n.a.createElement(he,{id:"phase-deploy"},n.a.createElement(ye,null,n.a.createElement(fe,{id:"icon-deploy",color:"deploy"},n.a.createElement(x.A,null)),n.a.createElement(be,null,"Deploy")),n.a.createElement(ve,null,n.a.createElement(ke,null,"Feature rollouts"),n.a.createElement(ke,null,"Observability"),n.a.createElement(ke,null,"Contingencies"),n.a.createElement(ke,null,"Analytics")))),n.a.createElement(we,{id:"cross-phase-ttt"},n.a.createElement($e,null,n.a.createElement(ze,null,n.a.createElement(x.F,null)),n.a.createElement(De,null,"Tools, Tech & Talent")))),n.a.createElement(pe,null,n.a.createElement(Ee,null,"Risk Dashboard"),n.a.createElement(ce,null)))}const Ce=m.c.div`
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
`;function Ne(){return n.a.createElement(Ce,null,n.a.createElement(Be,null,n.a.createElement(Re,{to:"/"},n.a.createElement(x.b,null)," Back to Home Page")),n.a.createElement(Ae,null,n.a.createElement(Fe,null,n.a.createElement(x.x,null)),n.a.createElement(Pe,null,n.a.createElement(Ie,null,"Design Phase"),n.a.createElement(Me,null,"The foundation of successful software projects starts with thoughtful design"))),n.a.createElement(Te,null,n.a.createElement(je,null,n.a.createElement(Le,null,n.a.createElement(Oe,{color:"text"},n.a.createElement(x.s,null)),n.a.createElement(Ue,null,"UX Research")),n.a.createElement(qe,null,"User experience research forms the backbone of effective design, ensuring products meet user needs and expectations.",n.a.createElement(He,null,n.a.createElement(Ke,null,"User interviews and surveys"),n.a.createElement(Ke,null,"Personas and user journey mapping"),n.a.createElement(Ke,null,"Competitive analysis"),n.a.createElement(Ke,null,"Usability testing")))),n.a.createElement(je,null,n.a.createElement(Le,null,n.a.createElement(Oe,{color:"text"},n.a.createElement(x.a,null)),n.a.createElement(Ue,null,"Accessibility")),n.a.createElement(qe,null,"Designing for all users enhances product reach and compliance with legal standards.",n.a.createElement(He,null,n.a.createElement(Ke,null,"WCAG compliance"),n.a.createElement(Ke,null,"Screen reader compatibility"),n.a.createElement(Ke,null,"Color contrast and readability"),n.a.createElement(Ke,null,"Keyboard navigation support")))),n.a.createElement(je,null,n.a.createElement(Le,null,n.a.createElement(Oe,{color:"text"},n.a.createElement(x.g,null)),n.a.createElement(Ue,null,"A/B Testing")),n.a.createElement(qe,null,"Data-driven design decisions lead to optimized user experiences and better business outcomes.",n.a.createElement(He,null,n.a.createElement(Ke,null,"Test hypothesis formation"),n.a.createElement(Ke,null,"Statistical significance planning"),n.a.createElement(Ke,null,"Multivariate testing"),n.a.createElement(Ke,null,"Iterative design improvements")))),n.a.createElement(je,null,n.a.createElement(Le,null,n.a.createElement(Oe,{color:"text"},n.a.createElement(x.I,null)),n.a.createElement(Ue,null,"Wireframes")),n.a.createElement(qe,null,"Visual blueprints that guide development and align stakeholder expectations.",n.a.createElement(He,null,n.a.createElement(Ke,null,"Low-fidelity sketches"),n.a.createElement(Ke,null,"Interactive prototypes"),n.a.createElement(Ke,null,"Information architecture"),n.a.createElement(Ke,null,"User flow diagrams"))))))}const We=m.c.div`
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
`,nt=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,rt=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,ot=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function it(){return n.a.createElement(We,null,n.a.createElement(Ge,null,n.a.createElement(Ve,{to:"/"},n.a.createElement(x.b,null)," Back to Home Page")),n.a.createElement(Je,null,n.a.createElement(Xe,null,n.a.createElement(x.q,null)),n.a.createElement(_e,null,n.a.createElement(Qe,null,"Refine Phase"),n.a.createElement(Ye,null,"Transform design concepts into well-defined requirements and implementation plans"))),n.a.createElement(Ze,null,n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(lt,{color:"feature"},n.a.createElement(x.f,null)),n.a.createElement(at,null,"Product Roadmap")),n.a.createElement(nt,null,"Strategic planning that aligns development with business objectives and market needs.",n.a.createElement(rt,null,n.a.createElement(ot,null,"Feature prioritization"),n.a.createElement(ot,null,"Release planning"),n.a.createElement(ot,null,"Stakeholder alignment"),n.a.createElement(ot,null,"Milestone definition")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(lt,{color:"feature"},n.a.createElement(x.v,null)),n.a.createElement(at,null,"ROI Hypothesis")),n.a.createElement(nt,null,"Economic analysis to ensure development efforts yield meaningful business returns.",n.a.createElement(rt,null,n.a.createElement(ot,null,"Cost-benefit analysis"),n.a.createElement(ot,null,"Resource allocation planning"),n.a.createElement(ot,null,"Market opportunity assessment"),n.a.createElement(ot,null,"Success metrics definition")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(lt,{color:"feature"},n.a.createElement(x.y,null)),n.a.createElement(at,null,"Feature 360")),n.a.createElement(nt,null,"Comprehensive analysis of each feature from multiple perspectives to ensure completeness.",n.a.createElement(rt,null,n.a.createElement(ot,null,"User story development"),n.a.createElement(ot,null,"Edge case identification"),n.a.createElement(ot,null,"Acceptance criteria"),n.a.createElement(ot,null,"Integration requirements")))),n.a.createElement(et,null,n.a.createElement(tt,null,n.a.createElement(lt,{color:"feature"},n.a.createElement(x.d,null)),n.a.createElement(at,null,"Story Curation")),n.a.createElement(nt,null,"Development of clear, complete user stories that capture requirements and acceptance criteria.",n.a.createElement(rt,null,n.a.createElement(ot,null,"Persona-based story writing"),n.a.createElement(ot,null,"Acceptance criteria definition"),n.a.createElement(ot,null,"Story prioritization"),n.a.createElement(ot,null,"Backlog management"))))))}const ct=m.c.div`
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
`;function Dt(){return n.a.createElement(ct,null,n.a.createElement(mt,null,n.a.createElement(st,{to:"/"},n.a.createElement(x.b,null)," Back to Home Page")),n.a.createElement(ut,null,n.a.createElement(dt,null,n.a.createElement(x.k,null)),n.a.createElement(gt,null,n.a.createElement(pt,null,"Develop Phase"),n.a.createElement(Et,null,"Building robust, maintainable, and secure code for your application"))),n.a.createElement(ft,null,n.a.createElement(yt,null,"Development Standards")),n.a.createElement(ht,null,n.a.createElement(bt,null,n.a.createElement(xt,null,n.a.createElement(vt,{color:"develop"},n.a.createElement(x.D,null)),n.a.createElement(kt,null,"Security Standards")),n.a.createElement(wt,null,"Implementing security best practices throughout the development process.",n.a.createElement($t,null,n.a.createElement(zt,null,"Input validation and sanitization"),n.a.createElement(zt,null,"Secure authentication protocols"),n.a.createElement(zt,null,"Sensitive data encryption"),n.a.createElement(zt,null,"OWASP vulnerability prevention"),n.a.createElement(zt,null,"Security code reviews")))),n.a.createElement(bt,null,n.a.createElement(xt,null,n.a.createElement(vt,{color:"develop"},n.a.createElement(x.j,null)),n.a.createElement(kt,null,"Branching Strategy")),n.a.createElement(wt,null,"Organized approach to source code management and collaboration.",n.a.createElement($t,null,n.a.createElement(zt,null,"Feature branch workflow"),n.a.createElement(zt,null,"Pull request processes"),n.a.createElement(zt,null,"Branch protection rules"),n.a.createElement(zt,null,"Merge conflict resolution"),n.a.createElement(zt,null,"Release branch management")))),n.a.createElement(bt,null,n.a.createElement(xt,null,n.a.createElement(vt,{color:"develop"},n.a.createElement(x.C,null)),n.a.createElement(kt,null,"Infra - Local | EUT")),n.a.createElement(wt,null,"Setting up development and testing infrastructure for efficient workflows.",n.a.createElement($t,null,n.a.createElement(zt,null,"Local development environments"),n.a.createElement(zt,null,"Containerization (Docker)"),n.a.createElement(zt,null,"Environment uniformity"),n.a.createElement(zt,null,"End-user testing environments"),n.a.createElement(zt,null,"Environment configuration management")))),n.a.createElement(bt,null,n.a.createElement(xt,null,n.a.createElement(vt,{color:"develop"},n.a.createElement(x.i,null)),n.a.createElement(kt,null,"Test Coverage")),n.a.createElement(wt,null,"Comprehensive testing approach to ensure code quality and reliability.",n.a.createElement($t,null,n.a.createElement(zt,null,"Unit testing frameworks"),n.a.createElement(zt,null,"Integration testing"),n.a.createElement(zt,null,"Code coverage metrics"),n.a.createElement(zt,null,"Test-driven development"),n.a.createElement(zt,null,"Automated regression testing"))))),n.a.createElement(ft,null,n.a.createElement(yt,null,"Code Quality")),n.a.createElement(ht,null,n.a.createElement(bt,null,n.a.createElement(xt,null,n.a.createElement(vt,{color:"develop"},n.a.createElement(x.d,null)),n.a.createElement(kt,null,"Readability")),n.a.createElement(wt,null,"Making code easy to understand, maintain, and extend.",n.a.createElement($t,null,n.a.createElement(zt,null,"Linters"),n.a.createElement(zt,null,"Patterns"),n.a.createElement(zt,null,"Tasks"),n.a.createElement(zt,null,"Docs")))),n.a.createElement(bt,null,n.a.createElement(xt,null,n.a.createElement(vt,{color:"develop"},n.a.createElement(x.z,null)),n.a.createElement(kt,null,"Review Process")),n.a.createElement(wt,null,"Multi-faceted review approach to ensure high quality code.",n.a.createElement($t,null,n.a.createElement(zt,null,"Architecture review"),n.a.createElement(zt,null,"Design review"),n.a.createElement(zt,null,"Code review"),n.a.createElement(zt,null,"Technical review"))))),n.a.createElement(ft,null,n.a.createElement(yt,null,"Testing & Tooling")),n.a.createElement(ht,null,n.a.createElement(bt,null,n.a.createElement(xt,null,n.a.createElement(vt,{color:"develop"},n.a.createElement(x.e,null)),n.a.createElement(kt,null,"Test Strategy")),n.a.createElement(wt,null,"Comprehensive testing approach across multiple levels.",n.a.createElement($t,null,n.a.createElement(zt,null,"Unit testing"),n.a.createElement(zt,null,"Integration testing"),n.a.createElement(zt,null,"Data - Mock & Synthetic")))),n.a.createElement(bt,null,n.a.createElement(xt,null,n.a.createElement(vt,{color:"develop"},n.a.createElement(x.F,null)),n.a.createElement(kt,null,"Tools")),n.a.createElement(wt,null,"Essential tools for monitoring, analysis and deployment.",n.a.createElement($t,null,n.a.createElement(zt,null,"Observability"),n.a.createElement(zt,null,"Feature Flagging"),n.a.createElement(zt,null,"Code Analysis"),n.a.createElement(zt,null,"Crash Reporting"),n.a.createElement(zt,null,"User Analytics"),n.a.createElement(zt,null,"Alerting (pager & on-call)"))))))}const St=m.c.div`
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
`;function Kt(){return n.a.createElement(St,null,n.a.createElement(Ct,null,n.a.createElement(Bt,{to:"/"},n.a.createElement(x.b,null)," Back to Home Page")),n.a.createElement(Rt,null,n.a.createElement(At,null,n.a.createElement(x.l,null)),n.a.createElement(Ft,null,n.a.createElement(Pt,null,"Stabilize Phase"),n.a.createElement(It,null,"Ensuring your software is reliable, robust, and ready for production deployment"))),n.a.createElement(Mt,null,n.a.createElement(Tt,null,n.a.createElement(jt,null,n.a.createElement(Lt,{color:"stabilize"},n.a.createElement(x.p,null)),n.a.createElement(Ot,null,"STLC")),n.a.createElement(Ut,null,"Structured Software Testing Life Cycle that ensures comprehensive coverage.",n.a.createElement(qt,null,n.a.createElement(Ht,null,"Test planning and strategy"),n.a.createElement(Ht,null,"Test case development"),n.a.createElement(Ht,null,"Test environment preparation"),n.a.createElement(Ht,null,"Test execution and reporting"),n.a.createElement(Ht,null,"Test closure and lessons learned")))),n.a.createElement(Tt,null,n.a.createElement(jt,null,n.a.createElement(Lt,{color:"stabilize"},n.a.createElement(x.m,null)),n.a.createElement(Ot,null,"Data Management")),n.a.createElement(Ut,null,"Robust handling of data throughout testing and stabilization processes.",n.a.createElement(qt,null,n.a.createElement(Ht,null,"Test data generation and management"),n.a.createElement(Ht,null,"Data migration validation"),n.a.createElement(Ht,null,"Database performance testing"),n.a.createElement(Ht,null,"Data integrity checks"),n.a.createElement(Ht,null,"Data backup and recovery verification")))),n.a.createElement(Tt,null,n.a.createElement(jt,null,n.a.createElement(Lt,{color:"stabilize"},n.a.createElement(x.A,null)),n.a.createElement(Ot,null,"CICD - Stage Gates")),n.a.createElement(Ut,null,"Automated quality gates that ensure only stable code progresses to production.",n.a.createElement(qt,null,n.a.createElement(Ht,null,"Code quality gates (linting, static analysis)"),n.a.createElement(Ht,null,"Automated testing gates"),n.a.createElement(Ht,null,"Performance benchmarking gates"),n.a.createElement(Ht,null,"Security scanning gates"),n.a.createElement(Ht,null,"Approval workflows")))),n.a.createElement(Tt,null,n.a.createElement(jt,null,n.a.createElement(Lt,{color:"stabilize"},n.a.createElement(x.c,null)),n.a.createElement(Ot,null,"Resilience Testing")),n.a.createElement(Ut,null,"Verifying system stability under stress, unusual conditions, and component failures.",n.a.createElement(qt,null,n.a.createElement(Ht,null,"Chaos engineering experiments"),n.a.createElement(Ht,null,"Load and stress testing"),n.a.createElement(Ht,null,"Failover and recovery testing"),n.a.createElement(Ht,null,"Degraded service simulation"),n.a.createElement(Ht,null,"Long-haul reliability testing")))),n.a.createElement(Tt,null,n.a.createElement(jt,null,n.a.createElement(Lt,{color:"stabilize"},n.a.createElement(x.E,null)),n.a.createElement(Ot,null,"Performance Optimization")),n.a.createElement(Ut,null,"Monitoring and enhancing system performance to meet user expectations.",n.a.createElement(qt,null,n.a.createElement(Ht,null,"Response time optimization"),n.a.createElement(Ht,null,"Resource utilization analysis"),n.a.createElement(Ht,null,"Database query optimization"),n.a.createElement(Ht,null,"Network latency reduction"),n.a.createElement(Ht,null,"Caching strategy implementation"))))))}const Nt=m.c.div`
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
`,nl=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,rl=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function ol(){return n.a.createElement(Nt,null,n.a.createElement(Wt,null,n.a.createElement(Gt,{to:"/"},n.a.createElement(x.b,null)," Back to Home Page")),n.a.createElement(Vt,null,n.a.createElement(Jt,null,n.a.createElement(x.A,null)),n.a.createElement(Xt,null,n.a.createElement(_t,null,"Deploy Phase"),n.a.createElement(Qt,null,"Safely delivering your software to production and ensuring operational excellence"))),n.a.createElement(Yt,null,n.a.createElement(Zt,null,n.a.createElement(el,null,n.a.createElement(tl,null,n.a.createElement(x.r,null)),n.a.createElement(ll,null,"Feature Rollouts")),n.a.createElement(al,null,"Controlled introduction of new capabilities to minimize risk and maximize feedback.",n.a.createElement(nl,null,n.a.createElement(rl,null,"Progressive delivery strategies"),n.a.createElement(rl,null,"Canary deployments"),n.a.createElement(rl,null,"Blue/Green deployments"),n.a.createElement(rl,null,"Feature flags and toggles"),n.a.createElement(rl,null,"Early user feedback loops")))),n.a.createElement(Zt,null,n.a.createElement(el,null,n.a.createElement(tl,null,n.a.createElement(x.B,null)),n.a.createElement(ll,null,"Observability")),n.a.createElement(al,null,"Comprehensive monitoring to understand system behavior and troubleshoot issues.",n.a.createElement(nl,null,n.a.createElement(rl,null,"Security Monitors & Alerts"),n.a.createElement(rl,null,"Allow/Block list"),n.a.createElement(rl,null,"Application Performance Monitoring"),n.a.createElement(rl,null,"Distributed tracing"),n.a.createElement(rl,null,"Logging strategies")))),n.a.createElement(Zt,null,n.a.createElement(el,null,n.a.createElement(tl,null,n.a.createElement(x.n,null)),n.a.createElement(ll,null,"Contingencies")),n.a.createElement(al,null,"Planning for failures and ensuring business continuity in all scenarios.",n.a.createElement(nl,null,n.a.createElement(rl,null,"Rollback/Rollforward strategies"),n.a.createElement(rl,null,"Emergency response planning"),n.a.createElement(rl,null,"Disaster recovery procedures"),n.a.createElement(rl,null,"Incident management workflows"),n.a.createElement(rl,null,"On-call rotation and escalation")))),n.a.createElement(Zt,null,n.a.createElement(el,null,n.a.createElement(tl,null,n.a.createElement(x.g,null)),n.a.createElement(ll,null,"Analytics")),n.a.createElement(al,null,"Leveraging data to inform product decisions and business strategy.",n.a.createElement(nl,null,n.a.createElement(rl,null,"User behavior tracking"),n.a.createElement(rl,null,"Conversion and funnel analysis"),n.a.createElement(rl,null,"Feature adoption metrics"),n.a.createElement(rl,null,"Business impact measurement"),n.a.createElement(rl,null,"Predictive usage modeling")))),n.a.createElement(Zt,null,n.a.createElement(el,null,n.a.createElement(tl,null,n.a.createElement(x.A,null)),n.a.createElement(ll,null,"Continuous Improvement")),n.a.createElement(al,null,"Evolving delivery processes through regular feedback and adaptation.",n.a.createElement(nl,null,n.a.createElement(rl,null,"Post-deployment reviews"),n.a.createElement(rl,null,"Release process optimization"),n.a.createElement(rl,null,"Deployment frequency metrics"),n.a.createElement(rl,null,"Cycle time reduction"),n.a.createElement(rl,null,"DevOps maturity assessments"))))))}var il=l(511);const cl={riskCategories:[{name:"Security",unmitigated:8,mitigated:5,inProgress:3,icon:n.a.createElement(x.D,null),color:"security"},{name:"Privacy",unmitigated:6,mitigated:4,inProgress:2,icon:n.a.createElement(x.H,null),color:"highlight"},{name:"Infrastructure",unmitigated:5,mitigated:3,inProgress:2,icon:n.a.createElement(x.C,null),color:"contingencies"},{name:"Authentication",unmitigated:7,mitigated:3,inProgress:4,icon:n.a.createElement(x.u,null),color:"primary"},{name:"Network",unmitigated:4,mitigated:2,inProgress:2,icon:n.a.createElement(x.w,null),color:"analytics"}],topMitigations:[{risk:"SQL Injection Vulnerability",category:"Security",mitigation:"Implemented parameterized queries and input validation",impact:"High",completionDate:"2024-04-15"},{risk:"Clear-Text Password Storage",category:"Authentication",mitigation:"Added password hashing with bcrypt and salting",impact:"High",completionDate:"2024-04-18"},{risk:"Unprotected API Endpoints",category:"Security",mitigation:"Added JWT authentication to all endpoints",impact:"Medium",completionDate:"2024-04-22"},{risk:"Outdated Dependencies",category:"Infrastructure",mitigation:"Implemented dependency scanning and auto-updates",impact:"Medium",completionDate:"2024-04-25"}],pendingMitigations:[{risk:"Insufficient Rate Limiting",category:"Security",mitigation:"Implement API rate limiting and throttling",impact:"Medium",targetDate:"2024-05-15"},{risk:"Weak Password Requirements",category:"Authentication",mitigation:"Enforce stronger password policy",impact:"Medium",targetDate:"2024-05-20"},{risk:"Missing Data Backup Strategy",category:"Infrastructure",mitigation:"Implement automated backup and verification",impact:"High",targetDate:"2024-06-01"}],lastUpdated:"2024-05-06 15:00"},ml=m.c.div`
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
`;function Dl(){const e=Object(m.d)(),{riskCategories:t,topMitigations:l,pendingMitigations:a,lastUpdated:r}=cl,o=t.map(e=>({name:e.name,Mitigated:e.mitigated,"In Progress":e.inProgress,Unmitigated:e.unmitigated-e.mitigated-e.inProgress,icon:e.icon,color:e.color}));return n.a.createElement(ml,null,n.a.createElement(sl,null,n.a.createElement(ul,null,n.a.createElement(x.n,null)),n.a.createElement(dl,null,"Risk Mitigation Roadmap")),n.a.createElement(pl,null,n.a.createElement(gl,null,"Risk Mitigation Status by Category"),n.a.createElement(wl,null,n.a.createElement($l,null,n.a.createElement(zl,{color:e.colors.primary}),"Mitigated"),n.a.createElement($l,null,n.a.createElement(zl,{color:e.colors.accent}),"In Progress"),n.a.createElement($l,null,n.a.createElement(zl,{color:"#D6D6D6"}),"Unmitigated")),n.a.createElement(D.a,{width:"100%",height:250},n.a.createElement(S.a,{data:o,margin:{top:20,right:30,left:20,bottom:5},barGap:0,barCategoryGap:"20%"},n.a.createElement(il.a,{strokeDasharray:"3 3",vertical:!1}),n.a.createElement(C.a,{dataKey:"name",tick:{fontSize:12},tickLine:!1}),n.a.createElement(B.a,{allowDecimals:!1,axisLine:!1,tickLine:!1,tick:{fontSize:12}}),n.a.createElement(R.a,null),n.a.createElement(A.a,{dataKey:"Mitigated",stackId:"a",fill:e.colors.primary}),n.a.createElement(A.a,{dataKey:"In Progress",stackId:"a",fill:e.colors.accent}),n.a.createElement(A.a,{dataKey:"Unmitigated",stackId:"a",fill:"#D6D6D6"})))),n.a.createElement(El,null,n.a.createElement(hl,null,n.a.createElement(gl,null,n.a.createElement(x.D,{style:{color:e.colors.security}}),"Completed Mitigations"),n.a.createElement(fl,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement(yl,null,"Risk"),n.a.createElement(yl,null,"Category"),n.a.createElement(yl,null,"Impact"),n.a.createElement(yl,null,"Date"))),n.a.createElement("tbody",null,l.map((e,t)=>n.a.createElement(bl,{key:t},n.a.createElement(xl,null,e.risk),n.a.createElement(xl,null,e.category),n.a.createElement(xl,null,n.a.createElement(vl,{impact:e.impact},e.impact)),n.a.createElement(xl,null,e.completionDate)))))),n.a.createElement(hl,null,n.a.createElement(gl,null,n.a.createElement(x.H,{style:{color:e.colors.highlight}}),"Pending Mitigations"),n.a.createElement(fl,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement(yl,null,"Risk"),n.a.createElement(yl,null,"Category"),n.a.createElement(yl,null,"Impact"),n.a.createElement(yl,null,"Target Date"))),n.a.createElement("tbody",null,a.map((e,t)=>n.a.createElement(bl,{key:t},n.a.createElement(xl,null,e.risk),n.a.createElement(xl,null,e.category),n.a.createElement(xl,null,n.a.createElement(vl,{impact:e.impact},e.impact)),n.a.createElement(xl,null,e.targetDate))))))),n.a.createElement(kl,null,"Last updated: ",r))}const Sl=m.c.footer`
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
`;function Ml(){return n.a.createElement(Sl,null,n.a.createElement(Cl,null,n.a.createElement(Bl,{src:u.a,alt:"Stable Kernel Logo"}),n.a.createElement(Rl,null,n.a.createElement(Al,{href:"#services"},"Services"),n.a.createElement(Al,{href:"#case-studies"},"Case Studies"),n.a.createElement(Al,{href:"#about-us"},"About Us"),n.a.createElement(Al,{href:"#resources"},"Resources"),n.a.createElement(Al,{href:"#book-a-consultation"},"Book a Consultation"),n.a.createElement(Al,{href:"#careers"},"Careers"),n.a.createElement(Al,{href:"#privacy-policy"},"Privacy Policy")),n.a.createElement(Fl,null,n.a.createElement(Pl,{href:"https://twitter.com/stablekernel",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"},n.a.createElement(x.G,null)),n.a.createElement(Pl,{href:"https://www.facebook.com/stablekernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},n.a.createElement(x.o,null)),n.a.createElement(Pl,{href:"https://www.linkedin.com/company/stable-kernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},n.a.createElement(x.t,null)))),n.a.createElement(Il,null,"\xa9 ",(new Date).getFullYear()," Stable Kernel. All rights reserved."))}l(504);const Tl=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;var jl=function(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement(Tl,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",component:Se}),n.a.createElement(c.a,{path:"/design",component:Ne}),n.a.createElement(c.a,{path:"/refine",component:it}),n.a.createElement(c.a,{path:"/develop",component:Dt}),n.a.createElement(c.a,{path:"/stabilize",component:Kt}),n.a.createElement(c.a,{path:"/deploy",component:ol}),n.a.createElement(c.a,{path:"/risk-dashboard",component:ce}),n.a.createElement(c.a,{path:"/risk-mitigation",component:Dl}))),n.a.createElement(Ml,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ll=e=>{e&&e instanceof Function&&l.e(3).then(l.bind(null,512)).then(t=>{let{getCLS:l,getFID:a,getFCP:n,getLCP:r,getTTFB:o}=t;l(e),a(e),n(e),r(e),o(e)})};const Ol=m.b`
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
`;o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m.a,{theme:{colors:{primary:"#2F48C4",accent:"#FF6B57",background:"#FFFFFF",secondaryBackground:"#F7F8FA",text:"#22223B",highlight:"#A3A3FF",feature:"#FF6B57",story:"#00CFE8",develop:"#A3A3FF",stabilize:"#B6E2D3",deploy:"#FFF3B0",security:"#FFB3B3",analytics:"#FFE066",contingencies:"#D6C1FF"},fonts:{primary:"'Inter', 'Segoe UI', Arial, sans-serif",weights:{regular:400,medium:500,bold:700}}}},n.a.createElement(Ol,null),n.a.createElement(jl,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)}),Ll()},65:function(e,t,l){e.exports=l.p+"static/media/sk-logo-dark.fbff4e0a.svg"}},[[275,1,2]]]);
//# sourceMappingURL=main.349009d6.chunk.js.map