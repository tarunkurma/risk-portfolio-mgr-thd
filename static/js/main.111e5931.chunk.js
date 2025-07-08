(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(e,t,l){e.exports=l(507)},286:function(e,t,l){},506:function(e,t,l){},507:function(e,t,l){"use strict";l.r(t);var r=l(1),a=l.n(r),n=l(254),o=l.n(n),i=(l(286),l(25)),c=l(19),m=l(3),s=l(66),u=l.n(s);const d=m.c.header`
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
`;function b(){return a.a.createElement(d,null,a.a.createElement(y,null,a.a.createElement(f,{href:"https://stablekernel.com/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(g,{src:u.a,alt:"Stable Kernel Logo"})),a.a.createElement(p,null,a.a.createElement(E,{to:"/"},"Home"),a.a.createElement(E,{to:"/risk-dashboard"},"Risk Dashboard"),a.a.createElement(E,{to:"/risk-mitigation"},"Risk Mitigation"),a.a.createElement(f,{href:"#resources"},"Resources"),a.a.createElement(h,{to:"/risk-dashboard"},"View Risks"))))}var x=l(6);const v=[{key:"design",label:"Design",color:"text",icon:a.a.createElement(x.v,null),path:"/design"},{key:"refine",label:"Refine",color:"feature",icon:a.a.createElement(x.p,null),path:"/refine"},{key:"develop",label:"Develop",color:"develop",icon:a.a.createElement(x.k,null),path:"/develop"},{key:"stabilize",label:"Stabilize",color:"stabilize",icon:a.a.createElement(x.l,null),path:"/stabilize"},{key:"deploy",label:"Deploy",color:"deploy",icon:a.a.createElement(x.y,null),path:"/deploy"}],k=m.c.div`
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
  background: ${e=>{let{theme:t,color:l,selected:r}=e;return r?t.colors[l]:t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t,color:l,selected:r}=e;return r?"#fff":t.colors[l]}};
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
  color: ${e=>{let{theme:t,color:l,selected:r}=e;return r?t.colors[l]:t.colors.text}};
`;function z(e){let{onSelect:t,selectedPhase:l}=e;const[n,o]=Object(r.useState)(l||v[0].key),i=Object(c.f)();return a.a.createElement(k,null,v.map(e=>a.a.createElement("div",{key:e.key,style:{textAlign:"center"}},a.a.createElement(w,{color:e.color,selected:n===e.key,onClick:()=>((e,l)=>{o(e),t&&t(e),l&&i.push(l)})(e.key,e.path),"aria-label":e.label},e.icon),a.a.createElement($,{color:e.color,selected:n===e.key},e.label))))}var D=l(508),S=l(509),C=l(267),B=l(268),R=l(54),P=l(114),F=l(110),A=l(68),I=l(510),M=l(269),T=l(71),j=l(511),L=l(512),O=l(111),U=l(113),q=l(272);const H={overallScore:72,phaseScores:[{phase:"Design",score:80,phaseName:"Design"},{phase:"Refine",score:60,phaseName:"Refine"},{phase:"Develop",score:70,phaseName:"Develop"},{phase:"Stabilize",score:75,phaseName:"Stabilize"},{phase:"Deploy",score:65,phaseName:"Deploy"}],riskCategories:[{name:"Security",value:65,fullMark:100},{name:"Compliance",value:80,fullMark:100},{name:"Infrastructure",value:75,fullMark:100},{name:"Process",value:68,fullMark:100},{name:"Team",value:85,fullMark:100}],riskSeverity:[{name:"High",value:4,color:"#ff4136"},{name:"Medium",value:7,color:"#ff851b"},{name:"Low",value:13,color:"#2ecc40"}],topRisks:["No accessibility review in Design","Insufficient feature definition in Refinement phase","Missing test coverage in Develop phase","Manual deployment process in Deploy","Lack of automated security scanning","No formal risk assessment process"],mitigatedRisks:["Outdated dependencies with security vulnerabilities","Missing automated testing in CI pipeline","Inadequate error handling","Poor password policy requirements"],lastUpdated:"2024-05-06 15:00"},K=[{phase:"Design",icon:a.a.createElement(x.v,{size:24}),color:"text"},{phase:"Refine",icon:a.a.createElement(x.p,{size:24}),color:"feature"},{phase:"Develop",icon:a.a.createElement(x.k,{size:24}),color:"develop"},{phase:"Stabilize",icon:a.a.createElement(x.l,{size:24}),color:"stabilize"},{phase:"Deploy",icon:a.a.createElement(x.y,{size:24}),color:"deploy"}],_=m.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,N=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,W=m.c.div`
  flex: 1;
`,G=m.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{color:t}=e;return t}};
  margin-bottom: 0.5rem;
`,V=m.c.div`
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
`,J=m.c.div`
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
`,re=m.c.button`
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
`,ae=m.c.div`
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
`;function oe(e,t){return e>=75?"#2ecc40":e>=60?t.colors.accent:"#ff4136"}const ie=e=>{const{x:t,y:l,width:r,value:n}=e;return a.a.createElement("g",null,a.a.createElement("text",{x:t+r/2,y:l-10,fill:"#333",textAnchor:"middle",dominantBaseline:"middle"},n))};function ce(){const e=Object(m.d)(),[t,l]=Object(r.useState)("overview"),{overallScore:n,phaseScores:o,riskCategories:i,riskSeverity:c,topRisks:s,mitigatedRisks:u,lastUpdated:d}=H,g=oe(n,e);return a.a.createElement(_,null,a.a.createElement(N,null,a.a.createElement(W,null,a.a.createElement("div",null,"Comprehensive view of project risk factors and mitigation status"))),a.a.createElement(le,null,a.a.createElement(re,{active:"overview"===t?"true":"false",onClick:()=>l("overview")},"Overview"),a.a.createElement(re,{active:"details"===t?"true":"false",onClick:()=>l("details")},"Detailed Analysis")),"overview"===t?a.a.createElement(a.a.Fragment,null,a.a.createElement(X,null,a.a.createElement(x.g,{style:{color:e.colors.primary}}),"Overall Risk Assessment"),a.a.createElement(ae,null,a.a.createElement(ne,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},a.a.createElement(G,{color:g},n),a.a.createElement(V,null,"Overall Risk Score"),a.a.createElement(D.a,{width:"100%",height:180},a.a.createElement(S.a,{data:o,margin:{top:10,right:20,left:0,bottom:0}},a.a.createElement(C.a,{dataKey:"phase",tick:{fontSize:14}}),a.a.createElement(B.a,{domain:[0,100],hide:!0}),a.a.createElement(R.a,null),a.a.createElement(P.a,{dataKey:"score"},o.map((t,l)=>a.a.createElement(F.a,{key:`cell-${l}`,fill:oe(t.score,e)})),a.a.createElement(A.a,{dataKey:"score",position:"top",style:{fontSize:14,fontWeight:600}})))),a.a.createElement(J,null,K.map(t=>{let{phase:l,icon:r,color:n}=t;return a.a.createElement(Q,{key:l},a.a.cloneElement(r,{color:e.colors[n]}),a.a.createElement(te,null,l))}))),a.a.createElement(ne,null,a.a.createElement(X,null,a.a.createElement(x.n,{style:{color:e.colors.accent}}),"Top Risks"),a.a.createElement(Y,null,s.map((t,l)=>a.a.createElement(Z,{key:l},a.a.createElement(x.n,{size:14,style:{color:e.colors.accent}}),t))),a.a.createElement(X,{style:{marginTop:"1.5rem"}},a.a.createElement(x.h,{style:{color:e.colors.primary}}),"Recently Mitigated"),a.a.createElement(Y,null,u.map((t,l)=>a.a.createElement(Z,{key:l},a.a.createElement(x.h,{size:14,style:{color:e.colors.primary}}),t)))))):a.a.createElement(ae,null,a.a.createElement(ne,null,a.a.createElement(X,null,a.a.createElement(x.B,{style:{color:e.colors.security}}),"Risk Severity Distribution"),a.a.createElement(D.a,{width:"100%",height:250},a.a.createElement(I.a,null,a.a.createElement(M.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,label:ie,outerRadius:80,fill:"#8884d8",dataKey:"value"},c.map((e,t)=>a.a.createElement(F.a,{key:`cell-${t}`,fill:e.color}))),a.a.createElement(R.a,null),a.a.createElement(T.a,null)))),a.a.createElement(ne,null,a.a.createElement(X,null,a.a.createElement(x.g,{style:{color:e.colors.primary}}),"Risk Category Assessment"),a.a.createElement(D.a,{width:"100%",height:250},a.a.createElement(j.a,{cx:"50%",cy:"50%",outerRadius:80,data:i},a.a.createElement(L.a,null),a.a.createElement(O.a,{dataKey:"name"}),a.a.createElement(U.a,{angle:30,domain:[0,100]}),a.a.createElement(q.a,{name:"Risk Score",dataKey:"value",stroke:e.colors.primary,fill:e.colors.primary,fillOpacity:.6}),a.a.createElement(R.a,null))))),a.a.createElement(ee,null,"Last updated: ",d))}const me=m.c.section`
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
`;function Se(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(me,null,a.a.createElement(ue,null,a.a.createElement(de,null,"Software Lifecycle Risk Evaluation"),a.a.createElement(ge,null,"Assess risk across every phase of your software development lifecycle")),a.a.createElement(se,{src:u.a,alt:"Watermark"})),a.a.createElement(pe,null,a.a.createElement(Ee,null,"Lifecycle Phases"),a.a.createElement(z,null),a.a.createElement(xe,null,a.a.createElement(he,{id:"phase-design"},a.a.createElement(ye,null,a.a.createElement(fe,{id:"icon-design",color:"text"},a.a.createElement(x.v,null)),a.a.createElement(be,null,"Design")),a.a.createElement(ve,null,a.a.createElement(ke,null,"UX Research"),a.a.createElement(ke,null,"Accessibility"),a.a.createElement(ke,null,"A/B Testing"),a.a.createElement(ke,null,"Wireframes"))),a.a.createElement(he,{id:"phase-refine"},a.a.createElement(ye,null,a.a.createElement(fe,{id:"icon-refine",color:"feature"},a.a.createElement(x.p,null)),a.a.createElement(be,null,"Refine")),a.a.createElement(ve,null,a.a.createElement(ke,null,"Product Roadmap"),a.a.createElement(ke,null,"ROI Hypothesis"),a.a.createElement(ke,null,"Feature 360"),a.a.createElement(ke,null,"Story Curation"))),a.a.createElement(he,{id:"phase-develop"},a.a.createElement(ye,null,a.a.createElement(fe,{id:"icon-develop",color:"develop"},a.a.createElement(x.k,null)),a.a.createElement(be,null,"Develop")),a.a.createElement(ve,null,a.a.createElement(ke,null,"Security Standards"),a.a.createElement(ke,null,"Branching Strategy"),a.a.createElement(ke,null,"Infra - Local | EUT"),a.a.createElement(ke,null,"Test Coverage"))),a.a.createElement(he,{id:"phase-stabilize"},a.a.createElement(ye,null,a.a.createElement(fe,{id:"icon-stabilize",color:"stabilize"},a.a.createElement(x.l,null)),a.a.createElement(be,null,"Stabilize")),a.a.createElement(ve,null,a.a.createElement(ke,null,"STLC"),a.a.createElement(ke,null,"Data Management"),a.a.createElement(ke,null,"CICD - Stage Gates"),a.a.createElement(ke,null,"Resilience Testing"))),a.a.createElement(he,{id:"phase-deploy"},a.a.createElement(ye,null,a.a.createElement(fe,{id:"icon-deploy",color:"deploy"},a.a.createElement(x.y,null)),a.a.createElement(be,null,"Deploy")),a.a.createElement(ve,null,a.a.createElement(ke,null,"Feature rollouts"),a.a.createElement(ke,null,"Observability"),a.a.createElement(ke,null,"Contingencies"),a.a.createElement(ke,null,"Analytics")))),a.a.createElement(we,{id:"cross-phase-ttt"},a.a.createElement($e,null,a.a.createElement(ze,null,a.a.createElement(x.D,null)),a.a.createElement(De,null,"Tools, Tech & Talent")))),a.a.createElement(pe,null,a.a.createElement(Ee,null,"Risk Dashboard"),a.a.createElement(ce,null)))}const Ce=m.c.div`
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
`,Pe=m.c.div`
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
`,Ae=m.c.div`
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
`;function _e(){return a.a.createElement(Ce,null,a.a.createElement(Be,null,a.a.createElement(Re,{to:"/"},a.a.createElement(x.b,null)," Back to Home Page")),a.a.createElement(Pe,null,a.a.createElement(Fe,null,a.a.createElement(x.v,null)),a.a.createElement(Ae,null,a.a.createElement(Ie,null,"Design Phase"),a.a.createElement(Me,null,"The foundation of successful software projects starts with thoughtful design"))),a.a.createElement(Te,null,a.a.createElement(je,null,a.a.createElement(Le,null,a.a.createElement(Oe,{color:"text"},a.a.createElement(x.r,null)),a.a.createElement(Ue,null,"UX Research")),a.a.createElement(qe,null,"User experience research forms the backbone of effective design, ensuring products meet user needs and expectations.",a.a.createElement(He,null,a.a.createElement(Ke,null,"User interviews and surveys"),a.a.createElement(Ke,null,"Personas and user journey mapping"),a.a.createElement(Ke,null,"Competitive analysis"),a.a.createElement(Ke,null,"Usability testing")))),a.a.createElement(je,null,a.a.createElement(Le,null,a.a.createElement(Oe,{color:"text"},a.a.createElement(x.a,null)),a.a.createElement(Ue,null,"Accessibility")),a.a.createElement(qe,null,"Designing for all users enhances product reach and compliance with legal standards.",a.a.createElement(He,null,a.a.createElement(Ke,null,"WCAG compliance"),a.a.createElement(Ke,null,"Screen reader compatibility"),a.a.createElement(Ke,null,"Color contrast and readability"),a.a.createElement(Ke,null,"Keyboard navigation support")))),a.a.createElement(je,null,a.a.createElement(Le,null,a.a.createElement(Oe,{color:"text"},a.a.createElement(x.g,null)),a.a.createElement(Ue,null,"A/B Testing")),a.a.createElement(qe,null,"Data-driven design decisions lead to optimized user experiences and better business outcomes.",a.a.createElement(He,null,a.a.createElement(Ke,null,"Test hypothesis formation"),a.a.createElement(Ke,null,"Statistical significance planning"),a.a.createElement(Ke,null,"Multivariate testing"),a.a.createElement(Ke,null,"Iterative design improvements")))),a.a.createElement(je,null,a.a.createElement(Le,null,a.a.createElement(Oe,{color:"text"},a.a.createElement(x.F,null)),a.a.createElement(Ue,null,"Wireframes")),a.a.createElement(qe,null,"Visual blueprints that guide development and align stakeholder expectations.",a.a.createElement(He,null,a.a.createElement(Ke,null,"Low-fidelity sketches"),a.a.createElement(Ke,null,"Interactive prototypes"),a.a.createElement(Ke,null,"Information architecture"),a.a.createElement(Ke,null,"User flow diagrams"))))))}const Ne=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,We=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Ge=Object(m.c)(i.b)`
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
`,Je=m.c.div`
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
`,rt=m.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,at=m.c.div`
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
`;function it(){return a.a.createElement(Ne,null,a.a.createElement(We,null,a.a.createElement(Ge,{to:"/"},a.a.createElement(x.b,null)," Back to Home Page")),a.a.createElement(Ve,null,a.a.createElement(Xe,null,a.a.createElement(x.p,null)),a.a.createElement(Je,null,a.a.createElement(Qe,null,"Refine Phase"),a.a.createElement(Ye,null,"Transform design concepts into well-defined requirements and implementation plans"))),a.a.createElement(Ze,null,a.a.createElement(et,null,a.a.createElement(tt,null,a.a.createElement(lt,{color:"feature"},a.a.createElement(x.f,null)),a.a.createElement(rt,null,"Product Roadmap")),a.a.createElement(at,null,"Strategic planning that aligns development with business objectives and market needs.",a.a.createElement(nt,null,a.a.createElement(ot,null,"Feature prioritization"),a.a.createElement(ot,null,"Release planning"),a.a.createElement(ot,null,"Stakeholder alignment"),a.a.createElement(ot,null,"Milestone definition")))),a.a.createElement(et,null,a.a.createElement(tt,null,a.a.createElement(lt,{color:"feature"},a.a.createElement(x.t,null)),a.a.createElement(rt,null,"ROI Hypothesis")),a.a.createElement(at,null,"Economic analysis to ensure development efforts yield meaningful business returns.",a.a.createElement(nt,null,a.a.createElement(ot,null,"Cost-benefit analysis"),a.a.createElement(ot,null,"Resource allocation planning"),a.a.createElement(ot,null,"Market opportunity assessment"),a.a.createElement(ot,null,"Success metrics definition")))),a.a.createElement(et,null,a.a.createElement(tt,null,a.a.createElement(lt,{color:"feature"},a.a.createElement(x.w,null)),a.a.createElement(rt,null,"Feature 360")),a.a.createElement(at,null,"Comprehensive analysis of each feature from multiple perspectives to ensure completeness.",a.a.createElement(nt,null,a.a.createElement(ot,null,"User story development"),a.a.createElement(ot,null,"Edge case identification"),a.a.createElement(ot,null,"Acceptance criteria"),a.a.createElement(ot,null,"Integration requirements")))),a.a.createElement(et,null,a.a.createElement(tt,null,a.a.createElement(lt,{color:"feature"},a.a.createElement(x.d,null)),a.a.createElement(rt,null,"Story Curation")),a.a.createElement(at,null,"Development of clear, complete user stories that capture requirements and acceptance criteria.",a.a.createElement(nt,null,a.a.createElement(ot,null,"Persona-based story writing"),a.a.createElement(ot,null,"Acceptance criteria definition"),a.a.createElement(ot,null,"Story prioritization"),a.a.createElement(ot,null,"Backlog management"))))))}const ct=m.c.div`
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
`;function Dt(){return a.a.createElement(ct,null,a.a.createElement(mt,null,a.a.createElement(st,{to:"/"},a.a.createElement(x.b,null)," Back to Home Page")),a.a.createElement(ut,null,a.a.createElement(dt,null,a.a.createElement(x.k,null)),a.a.createElement(gt,null,a.a.createElement(pt,null,"Develop Phase"),a.a.createElement(Et,null,"Building robust, maintainable, and secure code for your application"))),a.a.createElement(ft,null,a.a.createElement(yt,null,"Development Standards")),a.a.createElement(ht,null,a.a.createElement(bt,null,a.a.createElement(xt,null,a.a.createElement(vt,{color:"develop"},a.a.createElement(x.B,null)),a.a.createElement(kt,null,"Security Standards")),a.a.createElement(wt,null,"Implementing security best practices throughout the development process.",a.a.createElement($t,null,a.a.createElement(zt,null,"Input validation and sanitization"),a.a.createElement(zt,null,"Secure authentication protocols"),a.a.createElement(zt,null,"Sensitive data encryption"),a.a.createElement(zt,null,"OWASP vulnerability prevention"),a.a.createElement(zt,null,"Security code reviews")))),a.a.createElement(bt,null,a.a.createElement(xt,null,a.a.createElement(vt,{color:"develop"},a.a.createElement(x.j,null)),a.a.createElement(kt,null,"Branching Strategy")),a.a.createElement(wt,null,"Organized approach to source code management and collaboration.",a.a.createElement($t,null,a.a.createElement(zt,null,"Feature branch workflow"),a.a.createElement(zt,null,"Pull request processes"),a.a.createElement(zt,null,"Branch protection rules"),a.a.createElement(zt,null,"Merge conflict resolution"),a.a.createElement(zt,null,"Release branch management")))),a.a.createElement(bt,null,a.a.createElement(xt,null,a.a.createElement(vt,{color:"develop"},a.a.createElement(x.A,null)),a.a.createElement(kt,null,"Infra - Local | EUT")),a.a.createElement(wt,null,"Setting up development and testing infrastructure for efficient workflows.",a.a.createElement($t,null,a.a.createElement(zt,null,"Local development environments"),a.a.createElement(zt,null,"Containerization (Docker)"),a.a.createElement(zt,null,"Environment uniformity"),a.a.createElement(zt,null,"End-user testing environments"),a.a.createElement(zt,null,"Environment configuration management")))),a.a.createElement(bt,null,a.a.createElement(xt,null,a.a.createElement(vt,{color:"develop"},a.a.createElement(x.i,null)),a.a.createElement(kt,null,"Test Coverage")),a.a.createElement(wt,null,"Comprehensive testing approach to ensure code quality and reliability.",a.a.createElement($t,null,a.a.createElement(zt,null,"Unit testing frameworks"),a.a.createElement(zt,null,"Integration testing"),a.a.createElement(zt,null,"Code coverage metrics"),a.a.createElement(zt,null,"Test-driven development"),a.a.createElement(zt,null,"Automated regression testing"))))),a.a.createElement(ft,null,a.a.createElement(yt,null,"Code Quality")),a.a.createElement(ht,null,a.a.createElement(bt,null,a.a.createElement(xt,null,a.a.createElement(vt,{color:"develop"},a.a.createElement(x.d,null)),a.a.createElement(kt,null,"Readability")),a.a.createElement(wt,null,"Making code easy to understand, maintain, and extend.",a.a.createElement($t,null,a.a.createElement(zt,null,"Linters"),a.a.createElement(zt,null,"Patterns"),a.a.createElement(zt,null,"Tasks"),a.a.createElement(zt,null,"Docs")))),a.a.createElement(bt,null,a.a.createElement(xt,null,a.a.createElement(vt,{color:"develop"},a.a.createElement(x.x,null)),a.a.createElement(kt,null,"Review Process")),a.a.createElement(wt,null,"Multi-faceted review approach to ensure high quality code.",a.a.createElement($t,null,a.a.createElement(zt,null,"Architecture review"),a.a.createElement(zt,null,"Design review"),a.a.createElement(zt,null,"Code review"),a.a.createElement(zt,null,"Technical review"))))),a.a.createElement(ft,null,a.a.createElement(yt,null,"Testing & Tooling")),a.a.createElement(ht,null,a.a.createElement(bt,null,a.a.createElement(xt,null,a.a.createElement(vt,{color:"develop"},a.a.createElement(x.e,null)),a.a.createElement(kt,null,"Test Strategy")),a.a.createElement(wt,null,"Comprehensive testing approach across multiple levels.",a.a.createElement($t,null,a.a.createElement(zt,null,"Unit testing"),a.a.createElement(zt,null,"Integration testing"),a.a.createElement(zt,null,"Data - Mock & Synthetic")))),a.a.createElement(bt,null,a.a.createElement(xt,null,a.a.createElement(vt,{color:"develop"},a.a.createElement(x.D,null)),a.a.createElement(kt,null,"Tools")),a.a.createElement(wt,null,"Essential tools for monitoring, analysis and deployment.",a.a.createElement($t,null,a.a.createElement(zt,null,"Observability"),a.a.createElement(zt,null,"Feature Flagging"),a.a.createElement(zt,null,"Code Analysis"),a.a.createElement(zt,null,"Crash Reporting"),a.a.createElement(zt,null,"User Analytics"),a.a.createElement(zt,null,"Alerting (pager & on-call)"))))))}const St=m.c.div`
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
`,Pt=m.c.div`
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
`,At=m.c.h1`
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
`;function Kt(){return a.a.createElement(St,null,a.a.createElement(Ct,null,a.a.createElement(Bt,{to:"/"},a.a.createElement(x.b,null)," Back to Home Page")),a.a.createElement(Rt,null,a.a.createElement(Pt,null,a.a.createElement(x.l,null)),a.a.createElement(Ft,null,a.a.createElement(At,null,"Stabilize Phase"),a.a.createElement(It,null,"Ensuring your software is reliable, robust, and ready for production deployment"))),a.a.createElement(Mt,null,a.a.createElement(Tt,null,a.a.createElement(jt,null,a.a.createElement(Lt,{color:"stabilize"},a.a.createElement(x.o,null)),a.a.createElement(Ot,null,"STLC")),a.a.createElement(Ut,null,"Structured Software Testing Life Cycle that ensures comprehensive coverage.",a.a.createElement(qt,null,a.a.createElement(Ht,null,"Test planning and strategy"),a.a.createElement(Ht,null,"Test case development"),a.a.createElement(Ht,null,"Test environment preparation"),a.a.createElement(Ht,null,"Test execution and reporting"),a.a.createElement(Ht,null,"Test closure and lessons learned")))),a.a.createElement(Tt,null,a.a.createElement(jt,null,a.a.createElement(Lt,{color:"stabilize"},a.a.createElement(x.m,null)),a.a.createElement(Ot,null,"Data Management")),a.a.createElement(Ut,null,"Robust handling of data throughout testing and stabilization processes.",a.a.createElement(qt,null,a.a.createElement(Ht,null,"Test data generation and management"),a.a.createElement(Ht,null,"Data migration validation"),a.a.createElement(Ht,null,"Database performance testing"),a.a.createElement(Ht,null,"Data integrity checks"),a.a.createElement(Ht,null,"Data backup and recovery verification")))),a.a.createElement(Tt,null,a.a.createElement(jt,null,a.a.createElement(Lt,{color:"stabilize"},a.a.createElement(x.y,null)),a.a.createElement(Ot,null,"CICD - Stage Gates")),a.a.createElement(Ut,null,"Automated quality gates that ensure only stable code progresses to production.",a.a.createElement(qt,null,a.a.createElement(Ht,null,"Code quality gates (linting, static analysis)"),a.a.createElement(Ht,null,"Automated testing gates"),a.a.createElement(Ht,null,"Performance benchmarking gates"),a.a.createElement(Ht,null,"Security scanning gates"),a.a.createElement(Ht,null,"Approval workflows")))),a.a.createElement(Tt,null,a.a.createElement(jt,null,a.a.createElement(Lt,{color:"stabilize"},a.a.createElement(x.c,null)),a.a.createElement(Ot,null,"Resilience Testing")),a.a.createElement(Ut,null,"Verifying system stability under stress, unusual conditions, and component failures.",a.a.createElement(qt,null,a.a.createElement(Ht,null,"Chaos engineering experiments"),a.a.createElement(Ht,null,"Load and stress testing"),a.a.createElement(Ht,null,"Failover and recovery testing"),a.a.createElement(Ht,null,"Degraded service simulation"),a.a.createElement(Ht,null,"Long-haul reliability testing")))),a.a.createElement(Tt,null,a.a.createElement(jt,null,a.a.createElement(Lt,{color:"stabilize"},a.a.createElement(x.C,null)),a.a.createElement(Ot,null,"Performance Optimization")),a.a.createElement(Ut,null,"Monitoring and enhancing system performance to meet user expectations.",a.a.createElement(qt,null,a.a.createElement(Ht,null,"Response time optimization"),a.a.createElement(Ht,null,"Resource utilization analysis"),a.a.createElement(Ht,null,"Database query optimization"),a.a.createElement(Ht,null,"Network latency reduction"),a.a.createElement(Ht,null,"Caching strategy implementation"))))))}const _t=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Nt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Wt=Object(m.c)(i.b)`
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
`,Gt=m.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Vt=m.c.div`
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
`,Jt=m.c.h1`
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
`,rl=m.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,al=m.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,nl=m.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function ol(){return a.a.createElement(_t,null,a.a.createElement(Nt,null,a.a.createElement(Wt,{to:"/"},a.a.createElement(x.b,null)," Back to Home Page")),a.a.createElement(Gt,null,a.a.createElement(Vt,null,a.a.createElement(x.y,null)),a.a.createElement(Xt,null,a.a.createElement(Jt,null,"Deploy Phase"),a.a.createElement(Qt,null,"Safely delivering your software to production and ensuring operational excellence"))),a.a.createElement(Yt,null,a.a.createElement(Zt,null,a.a.createElement(el,null,a.a.createElement(tl,null,a.a.createElement(x.q,null)),a.a.createElement(ll,null,"Feature Rollouts")),a.a.createElement(rl,null,"Controlled introduction of new capabilities to minimize risk and maximize feedback.",a.a.createElement(al,null,a.a.createElement(nl,null,"Progressive delivery strategies"),a.a.createElement(nl,null,"Canary deployments"),a.a.createElement(nl,null,"Blue/Green deployments"),a.a.createElement(nl,null,"Feature flags and toggles"),a.a.createElement(nl,null,"Early user feedback loops")))),a.a.createElement(Zt,null,a.a.createElement(el,null,a.a.createElement(tl,null,a.a.createElement(x.z,null)),a.a.createElement(ll,null,"Observability")),a.a.createElement(rl,null,"Comprehensive monitoring to understand system behavior and troubleshoot issues.",a.a.createElement(al,null,a.a.createElement(nl,null,"Security Monitors & Alerts"),a.a.createElement(nl,null,"Allow/Block list"),a.a.createElement(nl,null,"Application Performance Monitoring"),a.a.createElement(nl,null,"Distributed tracing"),a.a.createElement(nl,null,"Logging strategies")))),a.a.createElement(Zt,null,a.a.createElement(el,null,a.a.createElement(tl,null,a.a.createElement(x.n,null)),a.a.createElement(ll,null,"Contingencies")),a.a.createElement(rl,null,"Planning for failures and ensuring business continuity in all scenarios.",a.a.createElement(al,null,a.a.createElement(nl,null,"Rollback/Rollforward strategies"),a.a.createElement(nl,null,"Emergency response planning"),a.a.createElement(nl,null,"Disaster recovery procedures"),a.a.createElement(nl,null,"Incident management workflows"),a.a.createElement(nl,null,"On-call rotation and escalation")))),a.a.createElement(Zt,null,a.a.createElement(el,null,a.a.createElement(tl,null,a.a.createElement(x.g,null)),a.a.createElement(ll,null,"Analytics")),a.a.createElement(rl,null,"Leveraging data to inform product decisions and business strategy.",a.a.createElement(al,null,a.a.createElement(nl,null,"User behavior tracking"),a.a.createElement(nl,null,"Conversion and funnel analysis"),a.a.createElement(nl,null,"Feature adoption metrics"),a.a.createElement(nl,null,"Business impact measurement"),a.a.createElement(nl,null,"Predictive usage modeling")))),a.a.createElement(Zt,null,a.a.createElement(el,null,a.a.createElement(tl,null,a.a.createElement(x.y,null)),a.a.createElement(ll,null,"Continuous Improvement")),a.a.createElement(rl,null,"Evolving delivery processes through regular feedback and adaptation.",a.a.createElement(al,null,a.a.createElement(nl,null,"Post-deployment reviews"),a.a.createElement(nl,null,"Release process optimization"),a.a.createElement(nl,null,"Deployment frequency metrics"),a.a.createElement(nl,null,"Cycle time reduction"),a.a.createElement(nl,null,"DevOps maturity assessments"))))))}var il=l(513);const cl={riskCategories:[{name:"Security",unmitigated:8,mitigated:5,inProgress:3,icon:a.a.createElement(x.B,null),color:"security"},{name:"Privacy",unmitigated:6,mitigated:4,inProgress:2,icon:a.a.createElement(x.E,null),color:"highlight"},{name:"Infrastructure",unmitigated:5,mitigated:3,inProgress:2,icon:a.a.createElement(x.A,null),color:"contingencies"},{name:"Authentication",unmitigated:7,mitigated:3,inProgress:4,icon:a.a.createElement(x.s,null),color:"primary"},{name:"Network",unmitigated:4,mitigated:2,inProgress:2,icon:a.a.createElement(x.u,null),color:"analytics"}],topMitigations:[{risk:"SQL Injection Vulnerability",category:"Security",mitigation:"Implemented parameterized queries and input validation",impact:"High",completionDate:"2024-04-15"},{risk:"Clear-Text Password Storage",category:"Authentication",mitigation:"Added password hashing with bcrypt and salting",impact:"High",completionDate:"2024-04-18"},{risk:"Unprotected API Endpoints",category:"Security",mitigation:"Added JWT authentication to all endpoints",impact:"Medium",completionDate:"2024-04-22"},{risk:"Outdated Dependencies",category:"Infrastructure",mitigation:"Implemented dependency scanning and auto-updates",impact:"Medium",completionDate:"2024-04-25"}],pendingMitigations:[{risk:"Insufficient Rate Limiting",category:"Security",mitigation:"Implement API rate limiting and throttling",impact:"Medium",targetDate:"2024-05-15"},{risk:"Weak Password Requirements",category:"Authentication",mitigation:"Enforce stronger password policy",impact:"Medium",targetDate:"2024-05-20"},{risk:"Missing Data Backup Strategy",category:"Infrastructure",mitigation:"Implement automated backup and verification",impact:"High",targetDate:"2024-06-01"}],lastUpdated:"2024-05-06 15:00"},ml=m.c.div`
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
`;function Dl(){const e=Object(m.d)(),{riskCategories:t,topMitigations:l,pendingMitigations:r,lastUpdated:n}=cl,o=t.map(e=>({name:e.name,Mitigated:e.mitigated,"In Progress":e.inProgress,Unmitigated:e.unmitigated-e.mitigated-e.inProgress,icon:e.icon,color:e.color}));return a.a.createElement(ml,null,a.a.createElement(sl,null,a.a.createElement(ul,null,a.a.createElement(x.n,null)),a.a.createElement(dl,null,"Risk Mitigation Roadmap")),a.a.createElement(pl,null,a.a.createElement(gl,null,"Risk Mitigation Status by Category"),a.a.createElement(wl,null,a.a.createElement($l,null,a.a.createElement(zl,{color:e.colors.primary}),"Mitigated"),a.a.createElement($l,null,a.a.createElement(zl,{color:e.colors.accent}),"In Progress"),a.a.createElement($l,null,a.a.createElement(zl,{color:"#D6D6D6"}),"Unmitigated")),a.a.createElement(D.a,{width:"100%",height:250},a.a.createElement(S.a,{data:o,margin:{top:20,right:30,left:20,bottom:5},barGap:0,barCategoryGap:"20%"},a.a.createElement(il.a,{strokeDasharray:"3 3",vertical:!1}),a.a.createElement(C.a,{dataKey:"name",tick:{fontSize:12},tickLine:!1}),a.a.createElement(B.a,{allowDecimals:!1,axisLine:!1,tickLine:!1,tick:{fontSize:12}}),a.a.createElement(R.a,null),a.a.createElement(P.a,{dataKey:"Mitigated",stackId:"a",fill:e.colors.primary}),a.a.createElement(P.a,{dataKey:"In Progress",stackId:"a",fill:e.colors.accent}),a.a.createElement(P.a,{dataKey:"Unmitigated",stackId:"a",fill:"#D6D6D6"})))),a.a.createElement(El,null,a.a.createElement(hl,null,a.a.createElement(gl,null,a.a.createElement(x.B,{style:{color:e.colors.security}}),"Completed Mitigations"),a.a.createElement(fl,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement(yl,null,"Risk"),a.a.createElement(yl,null,"Category"),a.a.createElement(yl,null,"Impact"),a.a.createElement(yl,null,"Date"))),a.a.createElement("tbody",null,l.map((e,t)=>a.a.createElement(bl,{key:t},a.a.createElement(xl,null,e.risk),a.a.createElement(xl,null,e.category),a.a.createElement(xl,null,a.a.createElement(vl,{impact:e.impact},e.impact)),a.a.createElement(xl,null,e.completionDate)))))),a.a.createElement(hl,null,a.a.createElement(gl,null,a.a.createElement(x.E,{style:{color:e.colors.highlight}}),"Pending Mitigations"),a.a.createElement(fl,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement(yl,null,"Risk"),a.a.createElement(yl,null,"Category"),a.a.createElement(yl,null,"Impact"),a.a.createElement(yl,null,"Target Date"))),a.a.createElement("tbody",null,r.map((e,t)=>a.a.createElement(bl,{key:t},a.a.createElement(xl,null,e.risk),a.a.createElement(xl,null,e.category),a.a.createElement(xl,null,a.a.createElement(vl,{impact:e.impact},e.impact)),a.a.createElement(xl,null,e.targetDate))))))),a.a.createElement(kl,null,"Last updated: ",n))}var Sl=l(115);const Cl=m.c.footer`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0 0.5rem 0;
  margin-top: 3rem;
`,Bl=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,Rl=m.c.img`
  height: 36px;
  width: auto;
  margin-right: 2rem;
`,Pl=m.c.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,Fl=m.c.a`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Al=m.c.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`,Il=m.c.a`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Ml=m.c.div`
  width: 100%;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 0.95rem;
  margin-top: 2rem;
  opacity: 0.7;
`;function Tl(){return a.a.createElement(Cl,null,a.a.createElement(Bl,null,a.a.createElement(Rl,{src:u.a,alt:"Stable Kernel Logo"}),a.a.createElement(Pl,null,a.a.createElement(Fl,{href:"https://stablekernel.com/services",target:"_blank",rel:"noopener noreferrer"},"Services"),a.a.createElement(Fl,{href:"https://stablekernel.com/case-studies",target:"_blank",rel:"noopener noreferrer"},"Case Studies"),a.a.createElement(Fl,{href:"https://stablekernel.com/about-us",target:"_blank",rel:"noopener noreferrer"},"About Us"),a.a.createElement(Fl,{href:"https://stablekernel.com/resources",target:"_blank",rel:"noopener noreferrer"},"Resources"),a.a.createElement(Fl,{href:"https://stablekernel.com/book-a-consultation",target:"_blank",rel:"noopener noreferrer"},"Book a Consultation"),a.a.createElement(Fl,{href:"https://stablekernel.com/about-us#careers",target:"_blank",rel:"noopener noreferrer"},"Careers"),a.a.createElement(Fl,{href:"https://stablekernel.com/privacy-policy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy")),a.a.createElement(Al,null,a.a.createElement(Il,{href:"https://twitter.com/stablekernel",target:"_blank",rel:"noopener noreferrer","aria-label":"X (formerly Twitter)"},a.a.createElement(Sl.c,null)),a.a.createElement(Il,{href:"https://www.facebook.com/stablekernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},a.a.createElement(Sl.a,null)),a.a.createElement(Il,{href:"https://www.linkedin.com/company/stable-kernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},a.a.createElement(Sl.b,null)))),a.a.createElement(Ml,null,"\xa9 ",(new Date).getFullYear()," Stable Kernel. All rights reserved."))}l(506);const jl=m.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;var Ll=function(){return a.a.createElement(i.a,{basename:"/risk-portfolio-mgr-thd"},a.a.createElement("div",{className:"App"},a.a.createElement(b,null),a.a.createElement(jl,null,a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/",component:Se}),a.a.createElement(c.a,{path:"/design",component:_e}),a.a.createElement(c.a,{path:"/refine",component:it}),a.a.createElement(c.a,{path:"/develop",component:Dt}),a.a.createElement(c.a,{path:"/stabilize",component:Kt}),a.a.createElement(c.a,{path:"/deploy",component:ol}),a.a.createElement(c.a,{path:"/risk-dashboard",component:ce}),a.a.createElement(c.a,{path:"/risk-mitigation",component:Dl}))),a.a.createElement(Tl,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ol=e=>{e&&e instanceof Function&&l.e(3).then(l.bind(null,514)).then(t=>{let{getCLS:l,getFID:r,getFCP:a,getLCP:n,getTTFB:o}=t;l(e),r(e),a(e),n(e),o(e)})};const Ul=m.b`
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
`;o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m.a,{theme:{colors:{primary:"#2F48C4",accent:"#FF6B57",background:"#FFFFFF",secondaryBackground:"#F7F8FA",text:"#22223B",highlight:"#A3A3FF",feature:"#FF6B57",story:"#00CFE8",develop:"#A3A3FF",stabilize:"#B6E2D3",deploy:"#FFF3B0",security:"#FFB3B3",analytics:"#FFE066",contingencies:"#D6C1FF"},fonts:{primary:"'Inter', 'Segoe UI', Arial, sans-serif",weights:{regular:400,medium:500,bold:700}}}},a.a.createElement(Ul,null),a.a.createElement(Ll,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)}),Ol()},66:function(e,t,l){e.exports=l.p+"static/media/sk-logo-dark.fbff4e0a.svg"}},[[277,1,2]]]);
//# sourceMappingURL=main.111e5931.chunk.js.map