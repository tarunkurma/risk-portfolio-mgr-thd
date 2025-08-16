(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{279:function(e,t,r){e.exports=r(509)},288:function(e,t,r){},508:function(e,t,r){},509:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),l=r(256),o=r.n(l),i=(r(288),r(25)),c=r(19),s=r(26),m=r.n(s),u=r(2),d=r(68),g=r.n(d);const p=u.c.header`
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
`,h=u.c.img`
  height: 40px;
  width: auto;
  margin-right: 2rem;
`,f=u.c.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`,E=Object(u.c)(i.b)`
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
`,y=Object(u.c)(i.b)`
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
`,b=u.c.a`
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
`,v=u.c.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;function x(){return a.a.createElement(p,null,a.a.createElement(v,null,a.a.createElement(b,{href:"https://stablekernel.com/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(h,{src:g.a,alt:"Stable Kernel Logo"})),a.a.createElement(f,null,a.a.createElement(E,{to:"/"},"Home"),a.a.createElement(E,{to:"/maturity-dashboard"},"Maturity Dashboard"),a.a.createElement(E,{to:"/mitigation-roadmap"},"Mitigation Roadmap"),a.a.createElement(y,{to:"/maturity-dashboard"},"View Assessment"))))}var w=r(5);const k=[{key:"design",label:"Design",color:"text",icon:a.a.createElement(w.F,null),path:"/design"},{key:"refine",label:"Refine",color:"feature",icon:a.a.createElement(w.x,null),path:"/refine"},{key:"develop",label:"Develop",color:"develop",icon:a.a.createElement(w.r,null),path:"/develop"},{key:"stabilize",label:"Stabilize",color:"stabilize",icon:a.a.createElement(w.s,null),path:"/stabilize"},{key:"deploy",label:"Deploy",color:"deploy",icon:a.a.createElement(w.J,null),path:"/deploy"}],$=u.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  overflow-x: auto;
`,S=u.c.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>{let{theme:t,color:r,selected:n}=e;return"text"===r?n?t.colors.text:t.colors.secondaryBackground:n?t.colors[r]:t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t,color:r,selected:n}=e;return"text"===r?n?"#fff":t.colors.text:n?"#fff":t.colors[r]}};
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
`,A=u.c.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  color: ${e=>{let{theme:t,color:r,selected:n}=e;return n?t.colors[r]:t.colors.text}};
`;function C(e){let{onSelect:t,selectedPhase:r}=e;const[l,o]=Object(n.useState)(r||k[0].key),i=Object(c.f)();return a.a.createElement($,null,k.map(e=>a.a.createElement("div",{key:e.key,style:{textAlign:"center"}},a.a.createElement(S,{color:e.color,selected:l===e.key,onClick:()=>((e,r)=>{o(e),t&&t(e),r&&i.push(r)})(e.key,e.path),"aria-label":e.label},e.icon),a.a.createElement(A,{color:e.color,selected:l===e.key},e.label))))}var z=r(510),D=r(511),P=r(269),I=r(270),M=r(55),j=r(116),O=r(112),R=r(70),T=r(512),B=r(271),_=r(73),F=r(513),L=r(514),U=r(113),H=r(115),q=r(274);const N={overallScore:72,phaseScores:[{phase:"Design",score:80,phaseName:"Design"},{phase:"Refine",score:60,phaseName:"Refine"},{phase:"Develop",score:70,phaseName:"Develop"},{phase:"Stabilize",score:75,phaseName:"Stabilize"},{phase:"Deploy",score:65,phaseName:"Deploy"}],maturityCategories:[{name:"Security",value:65,fullMark:100},{name:"Compliance",value:80,fullMark:100},{name:"Infrastructure",value:75,fullMark:100},{name:"Process",value:68,fullMark:100},{name:"Team",value:85,fullMark:100}],maturitySeverity:[{name:"High",value:4,color:"#ff4136"},{name:"Medium",value:7,color:"#ff851b"},{name:"Low",value:13,color:"#2ecc40"}],improvementAreas:["Release pipeline lacks automation (30-40 min builds)","Android: 103 SDKs, iOS: 44 SDKs - update risks","Configuration management prone to errors","Native-WebView data sharing complexity","Legacy code removal challenges","Manual App/Play Store uploads required"],completedImprovements:["Outdated dependencies with security vulnerabilities","Missing automated testing in CI pipeline","Inadequate error handling","Poor password policy requirements","Configuration drift across environments","Manual release process inefficiencies"],lastUpdated:"2024-05-06 15:00"},K=[{phase:"Design",icon:a.a.createElement(w.F,{size:24}),color:"text"},{phase:"Refine",icon:a.a.createElement(w.x,{size:24}),color:"feature"},{phase:"Develop",icon:a.a.createElement(w.r,{size:24}),color:"develop"},{phase:"Stabilize",icon:a.a.createElement(w.s,{size:24}),color:"stabilize"},{phase:"Deploy",icon:a.a.createElement(w.J,{size:24}),color:"deploy"}],W=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,V=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,G=u.c.div`
  flex: 1;
`,J=u.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{color:t}=e;return t}};
  margin-bottom: 0.5rem;
`,Q=u.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 1.5rem;
`,Y=u.c.h3`
  font-size: 1.1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin-bottom: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,X=u.c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 0.5rem 0 1.5rem 0;
`,Z=u.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`,ee=u.c.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`,te=u.c.li`
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
`,re=u.c.div`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`,ne=u.c.span`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 0.25rem;
`,ae=u.c.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,le=u.c.button`
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
`,oe=u.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,ie=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
`;function ce(e,t){return e>=75?"#2ecc40":e>=60?t.colors.accent:"#ff4136"}const se=e=>{const{x:t,y:r,width:n,value:l}=e;return a.a.createElement("g",null,a.a.createElement("text",{x:t+n/2,y:r-10,fill:"#333",textAnchor:"middle",dominantBaseline:"middle"},l))};function me(){const e=Object(u.e)(),[t,r]=Object(n.useState)("overview"),{overallScore:l,phaseScores:o,maturityCategories:i,maturitySeverity:c,improvementAreas:s,completedImprovements:m,lastUpdated:d}=N,g=ce(l,e);return a.a.createElement(W,null,a.a.createElement(V,null,a.a.createElement(G,null,a.a.createElement("div",null,"Comprehensive view of project maturity levels and improvement progress"))),a.a.createElement(ae,null,a.a.createElement(le,{active:"overview"===t?"true":"false",onClick:()=>r("overview")},"Overview"),a.a.createElement(le,{active:"details"===t?"true":"false",onClick:()=>r("details")},"Detailed Analysis")),"overview"===t?a.a.createElement(a.a.Fragment,null,a.a.createElement(Y,null,a.a.createElement(w.h,{style:{color:e.colors.primary}}),"Overall Maturity Assessment"),a.a.createElement(oe,null,a.a.createElement(ie,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},a.a.createElement(J,{color:g},l),a.a.createElement(Q,null,"Overall Maturity Score"),a.a.createElement(z.a,{width:"100%",height:180},a.a.createElement(D.a,{data:o,margin:{top:10,right:20,left:0,bottom:0}},a.a.createElement(P.a,{dataKey:"phase",tick:{fontSize:14}}),a.a.createElement(I.a,{domain:[0,100],hide:!0}),a.a.createElement(M.a,null),a.a.createElement(j.a,{dataKey:"score"},o.map((t,r)=>a.a.createElement(O.a,{key:`cell-${r}`,fill:ce(t.score,e)})),a.a.createElement(R.a,{dataKey:"score",position:"top",style:{fontSize:14,fontWeight:600}})))),a.a.createElement(X,null,K.map(t=>{let{phase:r,icon:n,color:l}=t;return a.a.createElement(Z,{key:r},a.a.cloneElement(n,{color:e.colors[l]}),a.a.createElement(ne,null,r))}))),a.a.createElement(ie,null,a.a.createElement(Y,null,a.a.createElement(w.v,{style:{color:e.colors.accent}}),"Improvement Areas"),a.a.createElement(ee,null,s.map((t,r)=>a.a.createElement(te,{key:r},a.a.createElement(w.v,{size:14,style:{color:e.colors.accent}}),t))),a.a.createElement(Y,{style:{marginTop:"1.5rem"}},a.a.createElement(w.i,{style:{color:e.colors.primary}}),"Recently Mitigated"),a.a.createElement(ee,null,m.map((t,r)=>a.a.createElement(te,{key:r},a.a.createElement(w.i,{size:14,style:{color:e.colors.primary}}),t)))))):a.a.createElement(oe,null,a.a.createElement(ie,null,a.a.createElement(Y,null,a.a.createElement(w.M,{style:{color:e.colors.security}}),"Risk Severity Distribution"),a.a.createElement(z.a,{width:"100%",height:250},a.a.createElement(T.a,null,a.a.createElement(B.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,label:se,outerRadius:80,fill:"#8884d8",dataKey:"value"},c.map((e,t)=>a.a.createElement(O.a,{key:`cell-${t}`,fill:e.color}))),a.a.createElement(M.a,null),a.a.createElement(_.a,null)))),a.a.createElement(ie,null,a.a.createElement(Y,null,a.a.createElement(w.h,{style:{color:e.colors.primary}}),"Category Maturity Assessment"),a.a.createElement(z.a,{width:"100%",height:250},a.a.createElement(F.a,{cx:"50%",cy:"50%",outerRadius:80,data:i},a.a.createElement(L.a,null),a.a.createElement(U.a,{dataKey:"name"}),a.a.createElement(H.a,{angle:30,domain:[0,100]}),a.a.createElement(q.a,{name:"Maturity Score",dataKey:"value",stroke:e.colors.primary,fill:e.colors.primary,fillOpacity:.6}),a.a.createElement(M.a,null))))),a.a.createElement(re,null,"Last updated: ",d))}const ue=u.c.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  padding: 4rem 2rem 2rem 2rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  overflow: hidden;
`,de=u.c.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 40vw;
  max-width: 500px;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
  transform: translateX(-50%);
`,ge=u.c.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,pe=u.c.h1`
  font-size: 2.5rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1rem;
`,he=u.c.p`
  font-size: 1.25rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 2rem;
`,fe=u.c.section`
  padding: 3rem 2rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
`,Ee=u.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
`,ye=u.c.div`
  flex: 1 1 0;
  margin-bottom: 0;
  padding: 1.5rem 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.04);
  min-width: 0;
`,be=u.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${e=>{let{color:t,theme:r}=e;return r.colors[t]}};
  margin-bottom: 0.75rem;
`,ve=u.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`,xe=u.c.span`
  font-size: 1.1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  display: flex;
  align-items: center;
  height: 2rem;
`,we=u.c.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,ke=u.c.ul`
  margin: 0.5rem 0 0 0;
  padding-left: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1rem;
  text-align: left;
  align-items: flex-start;
`,$e=u.c.li`
  margin-bottom: 0.4rem;
`,Se=u.c.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`,Ae=u.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Ce=u.c.div`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,ze=u.c.h3`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
`;function De(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ue,null,a.a.createElement(ge,null,a.a.createElement(pe,null,"Software Lifecycle Maturity Assessment"),a.a.createElement(he,null,"Evaluate and improve capabilities across every phase of your software development lifecycle")),a.a.createElement(de,{src:g.a,alt:"Watermark"})),a.a.createElement(fe,null,a.a.createElement(Ee,null,"Lifecycle Phases"),a.a.createElement(C,null),a.a.createElement(we,null,a.a.createElement(ye,{id:"phase-design"},a.a.createElement(ve,null,a.a.createElement(be,{id:"icon-design",color:"text"},a.a.createElement(w.F,null)),a.a.createElement(xe,null,"Design")),a.a.createElement(ke,null,a.a.createElement($e,null,"A/B Testing"),a.a.createElement($e,null,"Accessibility"),a.a.createElement($e,null,"Prototyping"),a.a.createElement($e,null,"UX Research"),a.a.createElement($e,null,"Wireframes"))),a.a.createElement(ye,{id:"phase-refine"},a.a.createElement(ve,null,a.a.createElement(be,{id:"icon-refine",color:"feature"},a.a.createElement(w.x,null)),a.a.createElement(xe,null,"Refine")),a.a.createElement(ke,null,a.a.createElement($e,null,"Feature 360"),a.a.createElement($e,null,"Product Roadmap"),a.a.createElement($e,null,"ROI Hypothesis"),a.a.createElement($e,null,"Story Curation"),a.a.createElement($e,null,"Success Metrics"))),a.a.createElement(ye,{id:"phase-develop"},a.a.createElement(ve,null,a.a.createElement(be,{id:"icon-develop",color:"develop"},a.a.createElement(w.r,null)),a.a.createElement(xe,null,"Develop")),a.a.createElement(ke,null,a.a.createElement($e,null,"Dev Standards"),a.a.createElement($e,null,"Infra - Local | EUT"),a.a.createElement($e,null,"Maintainability"),a.a.createElement($e,null,"Security Standards"),a.a.createElement($e,null,"Code Quality"))),a.a.createElement(ye,{id:"phase-stabilize"},a.a.createElement(ve,null,a.a.createElement(be,{id:"icon-stabilize",color:"stabilize"},a.a.createElement(w.s,null)),a.a.createElement(xe,null,"Stabilize")),a.a.createElement(ke,null,a.a.createElement($e,null,"CICD - Stage Gates"),a.a.createElement($e,null,"Data Management"),a.a.createElement($e,null,"Resiliency"),a.a.createElement($e,null,"STLC"),a.a.createElement($e,null,"Usability"))),a.a.createElement(ye,{id:"phase-deploy"},a.a.createElement(ve,null,a.a.createElement(be,{id:"icon-deploy",color:"deploy"},a.a.createElement(w.J,null)),a.a.createElement(xe,null,"Deploy")),a.a.createElement(ke,null,a.a.createElement($e,null,"Analytics"),a.a.createElement($e,null,"Contingencies"),a.a.createElement($e,null,"Feature rollouts"),a.a.createElement($e,null,"Observability"),a.a.createElement($e,null,"Support")))),a.a.createElement(Se,{id:"cross-phase-ttt"},a.a.createElement(Ae,null,a.a.createElement(Ce,null,a.a.createElement(w.Q,null)),a.a.createElement(ze,null,"Tools, Tech & Talent")))),a.a.createElement(fe,null,a.a.createElement(Ee,null,"Maturity Dashboard"),a.a.createElement(me,null)))}const Pe=u.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Ie=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Me=Object(u.c)(i.b)`
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
`,je=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Oe=u.c.div`
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
`,Re=u.c.div`
  flex: 1;
`,Te=u.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Be=u.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,_e=u.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Fe=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,Le=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Ue=u.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}};
  margin-right: 1rem;
`,He=u.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,qe=u.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,Ne=u.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,Ke=u.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function We(){return a.a.createElement(Pe,null,a.a.createElement(Ie,null,a.a.createElement(Me,{to:"/"},a.a.createElement(w.c,null)," Back to Home Page")),a.a.createElement(je,null,a.a.createElement(Oe,null,a.a.createElement(w.F,null)),a.a.createElement(Re,null,a.a.createElement(Te,null,"Design Phase"),a.a.createElement(Be,null,"The foundation of successful software projects starts with thoughtful design"))),a.a.createElement(_e,null,a.a.createElement(Fe,null,a.a.createElement(Le,null,a.a.createElement(Ue,{color:"text"},a.a.createElement(w.z,null)),a.a.createElement(He,null,"UX Research")),a.a.createElement(qe,null,"User experience research forms the backbone of effective design, ensuring products meet user needs and expectations.",a.a.createElement(Ne,null,a.a.createElement(Ke,null,"User interviews and surveys"),a.a.createElement(Ke,null,"Personas and user journey mapping"),a.a.createElement(Ke,null,"Competitive analysis"),a.a.createElement(Ke,null,"Usability testing")))),a.a.createElement(Fe,null,a.a.createElement(Le,null,a.a.createElement(Ue,{color:"text"},a.a.createElement(w.a,null)),a.a.createElement(He,null,"Accessibility")),a.a.createElement(qe,null,"Designing for all users enhances product reach and compliance with legal standards.",a.a.createElement(Ne,null,a.a.createElement(Ke,null,"WCAG compliance"),a.a.createElement(Ke,null,"Screen reader compatibility"),a.a.createElement(Ke,null,"Color contrast and readability"),a.a.createElement(Ke,null,"Keyboard navigation support")))),a.a.createElement(Fe,null,a.a.createElement(Le,null,a.a.createElement(Ue,{color:"text"},a.a.createElement(w.h,null)),a.a.createElement(He,null,"A/B Testing")),a.a.createElement(qe,null,"Data-driven design decisions lead to optimized user experiences and better business outcomes.",a.a.createElement(Ne,null,a.a.createElement(Ke,null,"Test hypothesis formation"),a.a.createElement(Ke,null,"Statistical significance planning"),a.a.createElement(Ke,null,"Multivariate testing"),a.a.createElement(Ke,null,"Iterative design improvements")))),a.a.createElement(Fe,null,a.a.createElement(Le,null,a.a.createElement(Ue,{color:"text"},a.a.createElement(w.S,null)),a.a.createElement(He,null,"Wireframes")),a.a.createElement(qe,null,"Visual blueprints that guide development and align stakeholder expectations.",a.a.createElement(Ne,null,a.a.createElement(Ke,null,"Low-fidelity sketches"),a.a.createElement(Ke,null,"Interactive prototypes"),a.a.createElement(Ke,null,"Information architecture"),a.a.createElement(Ke,null,"User flow diagrams"))))))}const Ve=u.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Ge=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Je=Object(u.c)(i.b)`
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
`,Qe=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Ye=u.c.div`
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
`,Xe=u.c.div`
  flex: 1;
`,Ze=u.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,et=u.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,tt=u.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,rt=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,nt=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,at=u.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}};
  margin-right: 1rem;
`,lt=u.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,ot=u.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,it=u.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,ct=u.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function st(){return a.a.createElement(Ve,null,a.a.createElement(Ge,null,a.a.createElement(Je,{to:"/"},a.a.createElement(w.c,null)," Back to Home Page")),a.a.createElement(Qe,null,a.a.createElement(Ye,null,a.a.createElement(w.x,null)),a.a.createElement(Xe,null,a.a.createElement(Ze,null,"Refine Phase"),a.a.createElement(et,null,"Transform design concepts into well-defined requirements and implementation plans"))),a.a.createElement(tt,null,a.a.createElement(rt,null,a.a.createElement(nt,null,a.a.createElement(at,{color:"feature"},a.a.createElement(w.g,null)),a.a.createElement(lt,null,"Product Roadmap")),a.a.createElement(ot,null,"Strategic planning that aligns development with business objectives and market needs.",a.a.createElement(it,null,a.a.createElement(ct,null,"Feature prioritization"),a.a.createElement(ct,null,"Release planning"),a.a.createElement(ct,null,"Stakeholder alignment"),a.a.createElement(ct,null,"Milestone definition")))),a.a.createElement(rt,null,a.a.createElement(nt,null,a.a.createElement(at,{color:"feature"},a.a.createElement(w.D,null)),a.a.createElement(lt,null,"ROI Hypothesis")),a.a.createElement(ot,null,"Economic analysis to ensure development efforts yield meaningful business returns.",a.a.createElement(it,null,a.a.createElement(ct,null,"Cost-benefit analysis"),a.a.createElement(ct,null,"Resource allocation planning"),a.a.createElement(ct,null,"Market opportunity assessment"),a.a.createElement(ct,null,"Success metrics definition")))),a.a.createElement(rt,null,a.a.createElement(nt,null,a.a.createElement(at,{color:"feature"},a.a.createElement(w.H,null)),a.a.createElement(lt,null,"Feature 360")),a.a.createElement(ot,null,"Comprehensive analysis of each feature from multiple perspectives to ensure completeness.",a.a.createElement(it,null,a.a.createElement(ct,null,"User story development"),a.a.createElement(ct,null,"Edge case identification"),a.a.createElement(ct,null,"Acceptance criteria"),a.a.createElement(ct,null,"Integration requirements")))),a.a.createElement(rt,null,a.a.createElement(nt,null,a.a.createElement(at,{color:"feature"},a.a.createElement(w.f,null)),a.a.createElement(lt,null,"Story Curation")),a.a.createElement(ot,null,"Development of clear, complete user stories that capture requirements and acceptance criteria.",a.a.createElement(it,null,a.a.createElement(ct,null,"Persona-based story writing"),a.a.createElement(ct,null,"Acceptance criteria definition"),a.a.createElement(ct,null,"Story prioritization"),a.a.createElement(ct,null,"Backlog management"))))))}const mt=Object({NODE_ENV:"production",PUBLIC_URL:"/risk-portfolio-mgr-thd",REACT_APP_AI_FEATURES_ENABLED:"false"}).REACT_APP_CLAUDE_API_KEY,ut="https://api.anthropic.com/v1/messages";const dt=new class{constructor(){this.apiKey=mt,this.baseUrl=ut,this.apiKey||console.warn("Claude API key not found. AI features will be disabled.")}async callClaude(e){let{prompt:t,model:r="claude-3-sonnet-20240229",maxTokens:n=1e3}=e;if(!this.apiKey)throw new Error("Claude API key not configured");try{const e=await fetch(this.baseUrl,{method:"POST",headers:{"Content-Type":"application/json","x-api-key":this.apiKey,"anthropic-version":"2023-06-01"},body:JSON.stringify({model:r,max_tokens:n,messages:[{role:"user",content:t}]})});if(!e.ok){var a;const t=await e.json().catch(()=>({}));throw new Error(`Claude API Error: ${e.status} - ${(null===(a=t.error)||void 0===a?void 0:a.message)||"Unknown error"}`)}const o=await e.json();return{content:o.content[0].text,usage:o.usage,model:o.model}}catch(l){throw console.error("Claude API call failed:",l),l}}async analyzeAssessmentProgress(e){const t=`You are an expert software maturity assessment consultant. Analyze this assessment progress and provide intelligent guidance.\n\nCurrent Assessment Data:\n${JSON.stringify(e,null,2)}\n\nPlease provide a comprehensive analysis with the following structure:\n\n1. PROGRESS_SUMMARY:\n   - Overall completion percentage\n   - Strongest areas (categories with good coverage)\n   - Weakest areas (categories needing attention)\n   - Critical gaps that need immediate focus\n\n2. NEXT_STEPS:\n   - Top 3 recommended assessment items to complete next (prioritized by impact)\n   - Estimated time to complete each item\n   - Why each item is important\n   - Potential blockers or dependencies\n\n3. CONTEXTUAL_QUESTIONS:\n   - 2-3 intelligent follow-up questions based on current responses\n   - Questions should help clarify implementation details\n   - Focus on areas where more context would improve recommendations\n\n4. RISK_INSIGHTS:\n   - Potential risks based on current gaps\n   - Areas where incomplete assessments might hide problems\n   - Recommendations for risk mitigation\n\nFormat your response as valid JSON with this structure:\n{\n  "progressSummary": {\n    "completionPercentage": number,\n    "strongestAreas": [string],\n    "weakestAreas": [string],\n    "criticalGaps": [string]\n  },\n  "nextSteps": [\n    {\n      "category": string,\n      "item": string,\n      "priority": "high" | "medium" | "low",\n      "estimatedTime": string,\n      "importance": string,\n      "blockers": [string]\n    }\n  ],\n  "contextualQuestions": [\n    {\n      "question": string,\n      "category": string,\n      "purpose": string\n    }\n  ],\n  "riskInsights": {\n    "identifiedRisks": [string],\n    "hiddenProblems": [string],\n    "mitigationRecommendations": [string]\n  }\n}`,r=await this.callClaude({prompt:t,maxTokens:1500});try{return JSON.parse(r.content)}catch(n){return console.warn("Failed to parse Claude response as JSON, returning raw text"),{rawResponse:r.content,error:"Failed to parse structured response"}}}async generateImprovementSuggestions(e,t){const r=`As a software maturity expert, provide specific improvement suggestions for this assessment category.\n\nCategory: ${e}\nCurrent Responses: ${JSON.stringify(t,null,2)}\n\nProvide actionable improvement suggestions for each incomplete or "false" item. For each suggestion, include:\n1. What specifically needs to be implemented\n2. Why it's important for software maturity\n3. Estimated effort level (Low/Medium/High)  \n4. Tools or resources that can help\n5. Success criteria to measure completion\n\nFormat as JSON:\n{\n  "suggestions": [\n    {\n      "item": string,\n      "recommendation": string,\n      "importance": string,\n      "effort": "Low" | "Medium" | "High",\n      "tools": [string],\n      "successCriteria": [string]\n    }\n  ]\n}`,n=await this.callClaude({prompt:r,maxTokens:1200});try{return JSON.parse(n.content)}catch(a){return{rawResponse:n.content,error:"Failed to parse structured response"}}}};class gt{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.name=e,this.config={retryAttempts:3,timeout:3e4,enableLogging:!0,...t},this.isActive=!1,this.lastExecution=null,this.executionHistory=[]}async execute(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=`${this.name}-${Date.now()}`;this.isActive=!0;try{this.config.enableLogging&&console.log(`\ud83e\udd16 Agent ${this.name} starting execution`,{context:e,options:t});const a=Date.now(),l=await this._executeWithRetry(e,t),o=Date.now()-a,i={id:r,timestamp:(new Date).toISOString(),duration:o,success:!0,result:l,context:e};return this.lastExecution=i,this.executionHistory.push(i),this.config.enableLogging&&console.log(`\u2705 Agent ${this.name} completed successfully`,{duration:o,result:l}),l}catch(n){const t={id:r,timestamp:(new Date).toISOString(),duration:Date.now()-Date.now(),success:!1,error:n.message,context:e};throw this.lastExecution=t,this.executionHistory.push(t),this.config.enableLogging&&console.error(`\u274c Agent ${this.name} failed:`,n),m.a.error(`Agent ${this.name} encountered an error: ${n.message}`),n}finally{this.isActive=!1}}async _executeWithRetry(e,t){let r;for(let a=1;a<=this.config.retryAttempts;a++)try{return await Promise.race([this._performExecution(e,t),this._createTimeoutPromise()])}catch(n){if(r=n,a<this.config.retryAttempts){const e=1e3*Math.pow(2,a);this.config.enableLogging&&console.warn(`\ud83d\udd04 Agent ${this.name} retry ${a}/${this.config.retryAttempts} after ${e}ms`),await new Promise(t=>setTimeout(t,e))}}throw r}_createTimeoutPromise(){return new Promise((e,t)=>{setTimeout(()=>{t(new Error(`Agent ${this.name} timed out after ${this.config.timeout}ms`))},this.config.timeout)})}async _performExecution(e,t){throw new Error(`Agent ${this.name} must implement _performExecution method`)}async callClaude(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await dt.callClaude({prompt:e,...t})}getStats(){const e=this.executionHistory.filter(e=>e.success).length,t=this.executionHistory.filter(e=>!e.success).length,r=this.executionHistory.reduce((e,t)=>e+(t.duration||0),0)/this.executionHistory.length;return{totalExecutions:this.executionHistory.length,successful:e,failed:t,successRate:this.executionHistory.length>0?e/this.executionHistory.length*100:0,averageDuration:Math.round(r),isActive:this.isActive,lastExecution:this.lastExecution}}clearHistory(){this.executionHistory=[],this.lastExecution=null}}class pt extends gt{constructor(){super("AssessmentCompletion",{timeout:45e3,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}})}async _performExecution(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{assessmentData:r,phase:n="develop",action:a="analyze"}=e;if(!r)throw new Error("Assessment data is required for analysis");switch(a){case"analyze":return await this._analyzeProgress(r,n);case"suggest":return await this._generateSuggestions(r,n,t);case"validate":return await this._validateCompleteness(r,n);default:throw new Error(`Unknown action: ${a}`)}}async _analyzeProgress(e,t){try{const n=await dt.analyzeAssessmentProgress(e),a={...n,calculatedMetrics:this._calculateMetrics(e),recommendations:this._prioritizeRecommendations(n.nextSteps||[]),timestamp:(new Date).toISOString(),phase:t};return m.a.success("Assessment analysis completed!"),a}catch(r){throw console.error("Failed to analyze assessment progress:",r),new Error(`Analysis failed: ${r.message}`)}}async _generateSuggestions(e,t,r){const{category:n,currentAnswers:a}=r;if(!n||!a)throw new Error("Category and current answers are required for suggestions");try{var l;const e=await dt.generateImprovementSuggestions(n,a),r={...e,category:n,phase:t,generatedAt:(new Date).toISOString(),implementationPlan:this._createImplementationPlan(e.suggestions||[])};return m.a.success(`Generated ${(null===(l=e.suggestions)||void 0===l?void 0:l.length)||0} improvement suggestions`),r}catch(o){throw console.error("Failed to generate suggestions:",o),new Error(`Suggestion generation failed: ${o.message}`)}}async _validateCompleteness(e,t){const r={phase:t,validatedAt:(new Date).toISOString(),completionStatus:this._calculateCompletionStatus(e),missingRequired:this._findMissingRequired(e),qualityScore:this._calculateQualityScore(e),recommendations:[]};return r.completionStatus.percentage<70&&r.recommendations.push({type:"completion",priority:"high",message:"Assessment is below 70% complete. Focus on completing critical sections first."}),r.missingRequired.length>0&&r.recommendations.push({type:"required",priority:"critical",message:`Missing ${r.missingRequired.length} required assessment items.`,items:r.missingRequired}),r}_calculateMetrics(e){const t=e.criteria||{},r=this._countTotalItems(t),n=this._countCompletedItems(t),a=r>0?n/r*100:0,l=Object.entries(t).map(e=>{let[t,r]=e;const n=Object.keys(r).length,a=Object.values(r).filter(Boolean).length,l=n>0?a/n*100:0;return{category:t,total:n,completed:a,percentage:Math.round(l),status:l>=80?"complete":l>=50?"in-progress":"needs-attention"}});return{overall:{total:r,completed:n,percentage:Math.round(a)},byCategory:l,strengths:l.filter(e=>e.percentage>=80),weaknesses:l.filter(e=>e.percentage<50)}}_prioritizeRecommendations(e){return e.sort((e,t)=>{const r={high:3,medium:2,low:1},n=r[e.priority]||0;return(r[t.priority]||0)-n})}_createImplementationPlan(e){const t=e.filter(e=>"Low"===e.effort),r=e.filter(e=>"Medium"===e.effort),n=e.filter(e=>"High"===e.effort);return{immediate:t.slice(0,3),shortTerm:r.slice(0,2),longTerm:n.slice(0,1),timeline:{week1:t.slice(0,1),week2_4:t.slice(1,3).concat(r.slice(0,1)),month2_3:r.slice(1,2).concat(n.slice(0,1))}}}_calculateCompletionStatus(e){e.criteria;const t=e.scores||{},r=this._calculateMetrics(e).overall,n={total:Object.keys(t).length,completed:Object.values(t).filter(e=>e&&""!==e).length};n.percentage=n.total>0?n.completed/n.total*100:0;const a=.7*r.percentage+.3*n.percentage;return{overall:Math.round(a),criteria:r,scores:n,status:a>=90?"complete":a>=70?"mostly-complete":a>=40?"in-progress":"just-started"}}_findMissingRequired(e){const t=[],r=e.criteria||{};return[{category:"securityStandards",item:"inputValidation",reason:"Critical for application security"},{category:"securityStandards",item:"authenticationProtocols",reason:"Essential for user data protection"},{category:"infrastructure",item:"containerization",reason:"Important for deployment consistency"},{category:"testCoverage",item:"unitTestingFrameworks",reason:"Fundamental for code quality"}].forEach(e=>{const n=r[e.category];n&&n[e.item]||t.push({...e,priority:"required"})}),t}_calculateQualityScore(e){const t=this._calculateMetrics(e).overall.percentage,r=this._calculateConsistencyScore(e),n=this._calculateCoverageScore(e),a=.4*t+.3*r+.3*n;return{overall:Math.round(a),factors:{completion:Math.round(t),consistency:Math.round(r),coverage:Math.round(n)},rating:a>=85?"excellent":a>=70?"good":a>=50?"fair":"needs-improvement"}}_calculateConsistencyScore(e){const t=e.criteria||{};let r=100;const n=Object.values(t.securityStandards||{}),a=Object.values(t.infrastructure||{}),l=n.filter(Boolean).length/n.length,o=a.filter(Boolean).length/a.length,i=Math.abs(l-o);return i>.3&&(r-=100*i),Math.max(0,r)}_calculateCoverageScore(e){const t=e.criteria||{},r=Object.keys(t);let n=100;return r.forEach(e=>{const r=Object.values(t[e]||{});0===r.filter(Boolean).length/r.length&&(n-=20)}),Math.max(0,n)}_countTotalItems(e){return Object.values(e).reduce((e,t)=>e+Object.keys(t).length,0)}_countCompletedItems(e){return Object.values(e).reduce((e,t)=>e+Object.values(t).filter(Boolean).length,0)}async quickAnalysis(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"develop";return await this.execute({assessmentData:e,phase:t,action:"analyze"})}async getSuggestions(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"develop";return await this.execute({assessmentData:e,phase:n,action:"suggest"},{category:t,currentAnswers:r})}async validateAssessment(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"develop";return await this.execute({assessmentData:e,phase:t,action:"validate"})}}let ht=null;const ft=()=>(ht||(ht=new pt),ht),Et=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"develop",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=ft(),{autoAnalyze:l=!1,onSuccess:o,onError:i}=r,[c,s]=Object(n.useState)(null),[u,d]=Object(n.useState)(null),[g,p]=Object(n.useState)(null),[h,f]=Object(n.useState)(!1),[E,y]=Object(n.useState)(!1),[b,v]=Object(n.useState)(!1),[x,w]=Object(n.useState)(null),[k,$]=Object(n.useState)(null),[S,A]=Object(n.useState)(null);Object(n.useEffect)(()=>{l&&e&&!h&&C()},[e,t,l]);const C=Object(n.useCallback)(async function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!h){f(!0),w(null);try{const l=await a.quickAnalysis(r||e,t);return s(l),o&&o(l),m.a.success("Assessment analysis completed!"),l}catch(n){const e=n.message||"Analysis failed";throw w(n),i&&i(n),m.a.error(`Analysis failed: ${e}`),n}finally{f(!1)}}},[a,e,t,o,i,h]),z=Object(n.useCallback)(async(r,n)=>{if(!E){y(!0),$(null);try{var l;const i=await a.getSuggestions(e,r,n,t);return d(i),m.a.success(`Generated ${(null===(l=i.suggestions)||void 0===l?void 0:l.length)||0} suggestions!`),i}catch(o){const e=o.message||"Failed to get suggestions";throw $(o),m.a.error(`Failed to get suggestions: ${e}`),o}finally{y(!1)}}},[a,e,t,E]),D=Object(n.useCallback)(async function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!b){v(!0),A(null);try{const l=await a.validateAssessment(r||e,t);return p(l),m.a.success("Assessment validation completed!"),l}catch(n){const e=n.message||"Validation failed";throw A(n),m.a.error(`Validation failed: ${e}`),n}finally{v(!1)}}},[a,e,t,b]),P=Object(n.useCallback)(()=>{c&&C()},[c,C]),I=Object(n.useCallback)(()=>{d(null),$(null)},[]),M=Object(n.useCallback)(()=>{p(null),A(null)},[]),j=Object(n.useCallback)(()=>{s(null),w(null)},[]),O=a.getStats();return{analysis:c,suggestions:u,validation:g,agentStats:O,isAnalyzing:h,isGettingSuggestions:E,isValidating:b,isAnyActionRunning:h||E||b,analysisError:x,suggestionsError:k,validationError:S,hasAnyError:!!(x||k||S),runAnalysis:C,getSuggestions:z,validateAssessment:D,refreshAnalysis:P,resetSuggestions:I,resetValidation:M,resetAnalysis:j,clearAgentHistory:()=>a.clearHistory()}};const yt=u.d`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,bt=u.d`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,vt=u.d`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,xt=u.c.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  font-family: ${e=>{let{theme:t}=e;return t.fonts.primary}};
`,wt=u.c.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.colors.primary}}, ${e=>{let{theme:t}=e;return t.colors.accent}});
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(47, 72, 196, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(47, 72, 196, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }

  ${e=>{let{isActive:t}=e;return t&&`\n    animation: ${bt} 2s infinite;\n  `}}
`,kt=u.c.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 400px;
  max-height: 600px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  overflow: hidden;
  animation: ${yt} 0.3s ease;
  
  @media (max-width: 480px) {
    width: 350px;
    right: -20px;
  }
`,$t=u.c.div`
  padding: 20px;
  background: linear-gradient(135deg, ${e=>{let{theme:t}=e;return t.colors.primary}}, ${e=>{let{theme:t}=e;return t.colors.accent}});
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,St=u.c.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  font-size: 1.1rem;
`,At=u.c.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`,Ct=u.c.div`
  padding: 20px;
  max-height: 500px;
  overflow-y: auto;
`,zt=u.c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
`,Dt=u.c.button`
  padding: 12px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 8px;
  background: white;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Pt=u.c.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 8px;
  margin-bottom: 15px;
  
  svg {
    animation: ${vt} 1s linear infinite;
  }
`,It=u.c.div`
  margin-top: 15px;
  padding: 15px;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 8px;
  border-left: 4px solid ${e=>{let{theme:t,type:r}=e;switch(r){case"success":return t.colors.primary;case"warning":return t.colors.accent;case"error":return"#dc3545";default:return t.colors.primary}}};
`,Mt=u.c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  margin-bottom: 10px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,jt=u.c.div`
  font-size: 0.9rem;
  line-height: 1.4;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
`,Ot=u.c.div`
  width: 100%;
  height: 8px;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
`,Rt=u.c.div`
  height: 100%;
  background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.colors.primary}}, ${e=>{let{theme:t}=e;return t.colors.accent}});
  transition: width 0.3s ease;
  width: ${e=>{let{percentage:t}=e;return t}}%;
`,Tt=u.c.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
`,Bt=u.c.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  font-size: 0.85rem;
  line-height: 1.3;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  }
`,_t=u.c.span`
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  background: ${e=>{let{priority:t,theme:r}=e;switch(t){case"high":return"#dc3545";case"medium":return"#ffc107";case"low":return r.colors.primary;default:return r.colors.secondaryBackground}}};
  color: white;
  text-transform: uppercase;
`;var Ft=e=>{let{assessmentData:t,phase:r="develop"}=e;const[l,o]=Object(n.useState)(!1),[i,c]=Object(n.useState)(null),{analysis:s,suggestions:m,validation:u,isAnalyzing:d,isGettingSuggestions:g,isValidating:p,isAnyActionRunning:h,analysisError:f,runAnalysis:E,getSuggestions:y,validateAssessment:b}=Et(t,r);return a.a.createElement(xt,null,l&&a.a.createElement(kt,null,a.a.createElement($t,null,a.a.createElement(St,null,a.a.createElement(w.I,null),"Assessment Assistant"),a.a.createElement(At,{onClick:()=>o(!1)},a.a.createElement(w.P,null))),a.a.createElement(Ct,null,a.a.createElement(zt,null,a.a.createElement(Dt,{onClick:async()=>{c("analysis");try{await E()}catch(e){console.error("Quick analysis failed:",e)}finally{c(null)}},disabled:h},a.a.createElement(w.h,null),d?"Analyzing...":"Quick Analysis"),a.a.createElement(Dt,{onClick:async()=>{if(null===t||void 0===t?void 0:t.criteria){c("suggestions");try{const r=Object.entries(t.criteria).find(e=>{let[t,r]=e;return Object.values(r).some(e=>!e)});r&&await y(r[0],r[1])}catch(e){console.error("Get suggestions failed:",e)}finally{c(null)}}},disabled:h||!(null===t||void 0===t?void 0:t.criteria)},a.a.createElement(w.z,null),g?"Getting...":"Get Suggestions"),a.a.createElement(Dt,{onClick:async()=>{c("validation");try{await b()}catch(e){console.error("Validation failed:",e)}finally{c(null)}},disabled:h},a.a.createElement(w.j,null),p?"Validating...":"Validate")),h&&a.a.createElement(Pt,null,a.a.createElement(w.N,null),a.a.createElement("span",null,"Agent is thinking...")),f?a.a.createElement(It,{type:"error"},a.a.createElement(Mt,null,a.a.createElement(w.v,null),"Error"),a.a.createElement(jt,null,f.message||"An unexpected error occurred")):null,(()=>{var e;if(!s)return null;const{progressSummary:t,nextSteps:r,calculatedMetrics:n}=s,l=(null===n||void 0===n?void 0:null===(e=n.overall)||void 0===e?void 0:e.percentage)||0;return a.a.createElement(It,{type:"success"},a.a.createElement(Mt,null,a.a.createElement(w.h,null),"Analysis Complete"),a.a.createElement(jt,null,a.a.createElement("div",null,a.a.createElement("strong",null,"Progress: ",l,"%"),a.a.createElement(Ot,null,a.a.createElement(Rt,{percentage:l}))),r&&r.length>0&&a.a.createElement("div",{style:{marginTop:"15px"}},a.a.createElement("strong",null,"Next Steps:"),a.a.createElement(Tt,null,r.slice(0,3).map((e,t)=>a.a.createElement(Bt,{key:t},a.a.createElement(_t,{priority:e.priority},e.priority),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("strong",null,e.item)),a.a.createElement("div",{style:{opacity:.8}},e.importance))))))))})(),(null===m||void 0===m?void 0:m.suggestions)?a.a.createElement(It,{type:"success"},a.a.createElement(Mt,null,a.a.createElement(w.z,null),"Improvement Suggestions"),a.a.createElement(jt,null,a.a.createElement(Tt,null,m.suggestions.slice(0,3).map((e,t)=>{var r;return a.a.createElement(Bt,{key:t},a.a.createElement(_t,{priority:null===(r=e.effort)||void 0===r?void 0:r.toLowerCase()},e.effort),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("strong",null,e.item)),a.a.createElement("div",{style:{opacity:.8}},e.recommendation)))})))):null,(()=>{if(!u)return null;const{completionStatus:e,qualityScore:t,recommendations:r}=u,n=r&&r.length>0;return a.a.createElement(It,{type:n?"warning":"success"},a.a.createElement(Mt,null,n?a.a.createElement(w.v,null):a.a.createElement(w.j,null),"Validation ",n?"Issues Found":"Passed"),a.a.createElement(jt,null,a.a.createElement("div",null,a.a.createElement("strong",null,"Completion: ",(null===e||void 0===e?void 0:e.overall)||0,"%"),a.a.createElement("strong",{style:{marginLeft:"20px"}},"Quality: ",(null===t||void 0===t?void 0:t.overall)||0,"/100")),n&&a.a.createElement(Tt,null,r.slice(0,3).map((e,t)=>a.a.createElement(Bt,{key:t},a.a.createElement(_t,{priority:e.priority},e.priority),a.a.createElement("div",null,e.message))))))})())),a.a.createElement(wt,{onClick:()=>o(!l),isActive:h,title:"Open Assessment Assistant"},h?a.a.createElement(w.N,null):a.a.createElement(w.I,null)))};const Lt=u.c.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  text-align: center;
`,Ut=u.c.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`,Ht=u.c.button`
  background: white;
  color: #667eea;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,qt=u.c.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.4;
`;var Nt=e=>{let{assessmentData:t}=e;const[r,l]=Object(n.useState)(!1),[o,i]=Object(n.useState)(null);return a.a.createElement(Lt,null,a.a.createElement(Ut,null,a.a.createElement(w.I,null),"Agent Demo Mode",Object({NODE_ENV:"production",PUBLIC_URL:"/risk-portfolio-mgr-thd",REACT_APP_AI_FEATURES_ENABLED:"false"}).REACT_APP_CLAUDE_API_KEY?null:" (No API Key)"),a.a.createElement("p",{style:{marginBottom:"20px",opacity:.9}},Object({NODE_ENV:"production",PUBLIC_URL:"/risk-portfolio-mgr-thd",REACT_APP_AI_FEATURES_ENABLED:"false"}).REACT_APP_CLAUDE_API_KEY?"Claude API configured! Try the real agent or run a demo.":"No Claude API key detected. Try the demo to see what the agent can do!"),a.a.createElement("div",null,a.a.createElement(Ht,{onClick:()=>{l(!0),setTimeout(()=>{i({progressSummary:{completionPercentage:45,strongestAreas:["Infrastructure Setup"],weakestAreas:["Security Standards","Test Coverage"],criticalGaps:["Input validation missing","Unit testing not configured"]},nextSteps:[{category:"securityStandards",item:"inputValidation",priority:"high",estimatedTime:"2-3 hours",importance:"Critical for preventing injection attacks and data breaches"},{category:"testCoverage",item:"unitTestingFrameworks",priority:"high",estimatedTime:"4-6 hours",importance:"Essential foundation for code quality and regression prevention"},{category:"securityStandards",item:"authenticationProtocols",priority:"medium",estimatedTime:"3-4 hours",importance:"Important for user data protection and access control"}],riskInsights:{identifiedRisks:["Lack of input validation creates vulnerability to injection attacks","Missing unit tests increase risk of undetected regressions","Incomplete security standards may expose sensitive data"],mitigationRecommendations:["Implement comprehensive input validation immediately","Set up basic unit testing framework before adding more features","Complete security assessment before production deployment"]}})},2e3)},disabled:r&&!o},a.a.createElement(w.G,{style:{marginRight:"5px"}}),"Demo Analysis"),a.a.createElement(Ht,{onClick:()=>{l(!0),setTimeout(()=>{i({category:"securityStandards",suggestions:[{item:"inputValidation",recommendation:"Implement a comprehensive input validation layer using libraries like Joi or Yup for schema validation",importance:"Prevents 80% of common web vulnerabilities including SQL injection and XSS attacks",effort:"Medium",tools:["Joi","express-validator","sanitize-html"],successCriteria:["All user inputs validated","Schema definitions documented","Error handling implemented"]},{item:"dataEncryption",recommendation:"Implement encryption for sensitive data at rest using AES-256 and in transit using TLS 1.3",importance:"Essential for compliance with data protection regulations (GDPR, CCPA)",effort:"High",tools:["bcrypt","crypto-js","helmet.js"],successCriteria:["All sensitive data encrypted","Key rotation implemented","Security audit passed"]}]})},1500)},disabled:r&&!o},a.a.createElement(w.j,{style:{marginRight:"5px"}}),"Demo Suggestions")),r&&!o&&a.a.createElement(qt,null,a.a.createElement("strong",null,"\ud83e\udd16 Agent is thinking..."),a.a.createElement("br",null),"Analyzing your assessment data and generating recommendations..."),o&&o.progressSummary&&a.a.createElement(qt,null,a.a.createElement("strong",null,"\ud83d\udcca Analysis Complete"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("strong",null,"Progress:")," ",o.progressSummary.completionPercentage,"%",a.a.createElement("br",null),a.a.createElement("strong",null,"Strongest Areas:")," ",o.progressSummary.strongestAreas.join(", "),a.a.createElement("br",null),a.a.createElement("strong",null,"Needs Attention:")," ",o.progressSummary.weakestAreas.join(", "),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("strong",null,"Top Priority Actions:"),a.a.createElement("ul",{style:{textAlign:"left",marginLeft:"20px"}},o.nextSteps.slice(0,2).map((e,t)=>a.a.createElement("li",{key:t},a.a.createElement("strong",null,e.item)," (",e.priority," priority)",a.a.createElement("br",null),a.a.createElement("small",null,e.importance))))),o&&o.suggestions&&a.a.createElement(qt,null,a.a.createElement("strong",null,"\ud83d\udca1 Improvement Suggestions"),a.a.createElement("br",null),a.a.createElement("br",null),o.suggestions.map((e,t)=>a.a.createElement("div",{key:t,style:{marginBottom:"15px"}},a.a.createElement("strong",null,e.item)," (",e.effort," effort)",a.a.createElement("br",null),a.a.createElement("small",null,e.recommendation),a.a.createElement("br",null),a.a.createElement("small",null,a.a.createElement("strong",null,"Tools:")," ",e.tools.join(", "))))),o&&a.a.createElement("div",{style:{marginTop:"15px"}},a.a.createElement(Ht,{onClick:()=>{l(!1),i(null)}},"Reset Demo")))};const Kt=u.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Wt=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Vt=Object(u.c)(i.b)`
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
`,Gt=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Jt=u.c.div`
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
`,Qt=u.c.div`
  flex: 1;
`,Yt=u.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Xt=u.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Zt=u.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,er=u.c.div`
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
`,tr=u.c.div`
  position: sticky;
  top: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 20;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`,rr=u.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  text-align: left;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.background}};
`,nr=u.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ar=u.c.div`
  font-size: 2rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}};
  background: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}}15;
  padding: 0.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
`,lr=u.c.h2`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  line-height: 1.2;
  display: flex;
  align-items: center;
`,or=u.c.p`
  font-size: 0.95rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
  margin: 0.75rem 0 1rem 0;
  line-height: 1.5;
  text-align: center;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
`,ir=u.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,cr=u.c.div`
  margin-bottom: 3rem;
`,sr=u.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
  }
`,mr=u.c.div`
  height: 2px;
  background: linear-gradient(90deg, 
    ${e=>{let{theme:t}=e;return t.colors.primary}}20 0%, 
    ${e=>{let{theme:t}=e;return t.colors.primary}} 50%, 
    ${e=>{let{theme:t}=e;return t.colors.primary}}20 100%);
  margin: 3rem 0;
  border-radius: 1px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: ${e=>{let{theme:t}=e;return t.colors.primary}};
    border-radius: 50%;
  }
`,ur=u.c.div`
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
`,dr=u.c.input`
  margin-right: 1rem;
  transform: scale(1.3);
  accent-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,gr=u.c.span`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  line-height: 1.4;
`,pr=u.c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  border-left: 4px solid ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  overflow: hidden;
`,hr=u.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  }
`,fr=u.d`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
`,Er=u.d`
  from {
    opacity: 1;
    max-height: 500px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`,yr=u.c.div`
  font-size: 0.8rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.7;
  transition: transform 0.3s ease;
  transform: rotate(${e=>{let{expanded:t}=e;return t?"180deg":"0deg"}});
`,br=u.c.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: ${e=>{let{trend:t,theme:r}=e;return"up"===t?"#2ecc40":"down"===t?"#ff4136":r.colors.text}};
`,vr=u.c.div`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  animation: ${e=>{let{expanded:t}=e;return t?fr:Er}} 0.3s ease;
  overflow: hidden;
`,xr=u.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
`,wr=u.c.li`
  margin-bottom: 0.5rem;
`,kr=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.primary}}10;
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  font-size: 0.85rem;
`,$r=u.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
`,Sr=u.c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 0.25rem;
`,Ar=u.c.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
`,Cr=u.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 0.25rem;
  font-size: 0.85rem;
`,zr=(u.c.input`
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
`,u.c.div`
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
`),Dr=u.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Pr=u.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  margin-bottom: 0.25rem;
`,Ir=(u.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
  margin-bottom: 1rem;
`,u.c.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${e=>{let{score:t,theme:r}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  color: white;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,u.c.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
`,u.c.div`
  text-align: center;
  font-size: 0.85rem;
`,u.c.div`
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,u.c.div`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.7;
  font-size: 0.75rem;
`,u.c.div`
  position: sticky;
  top: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 10;
  padding: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  margin: 0 -1rem 1rem -1rem;
`),Mr=u.c.div`
  display: flex;
  gap: 0.5rem;
`,jr=u.c.button`
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
`,Or=u.c.span`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,Rr=u.c.span`
  font-size: 1.2rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  min-width: 1.5rem;
  text-align: center;
  display: inline-block;
`;function Tr(){const[e,t]=Object(n.useState)({}),[r,l]=Object(n.useState)(null),[o,i]=a.a.useState({securityStandards:{inputValidation:!1,authenticationProtocols:!1,dataEncryption:!1,owaspPrevention:!1,securityReviews:!1},branchingStrategy:{featureBranchWorkflow:!1,pullRequestProcesses:!1,branchProtectionRules:!1,mergeConflictResolution:!1,releaseBranchManagement:!1},infrastructure:{localDevelopmentEnvironments:!1,containerization:!1,environmentUniformity:!1,endUserTestingEnvironments:!1,environmentConfigurationManagement:!1},testCoverage:{unitTestingFrameworks:!1,integrationTesting:!1,codeCoverageMetrics:!1,testDrivenDevelopment:!1,automatedRegressionTesting:!1},readability:{linters:!1,patterns:!1,tasks:!1,docs:!1},reviewProcess:{architectureReview:!1,designReview:!1,codeReview:!1,technicalReview:!1},testStrategy:{unitTesting:!1,integrationTesting:!1,dataMockSynthetic:!1},tools:{observability:!1,featureFlagging:!1,codeAnalysis:!1,crashReporting:!1,userAnalytics:!1,alerting:!1}}),[c,s]=a.a.useState({releasePipelineAutomation:"M",sdkManagementComplexity:"L",configurationManagement:"M",nativeWebviewDataSharing:"M",legacyCodeRemoval:"L"}),m=(e,t)=>{i(r=>({...r,[e]:{...r[e],[t]:!r[e][t]}}))},u=e=>{l(e)},d=()=>{l(null)},g=e=>{switch(e){case"H":return"#28a745";case"M":return"#ffc107";case"L":return"#dc3545";case"High":return"#28a745";case"Medium":return"#ffc107";case"Low":return"#dc3545";default:return"#6c757d"}},p=Math.round(Object.values(c).reduce((e,t)=>e+(e=>{switch(e){case"H":return 3;case"M":return 2;case"L":return 1;default:return 2}})(t),0)/Object.values(c).length),h=(f=p)>=2.5?"High":f>=1.5?"Medium":"Low";var f;return a.a.createElement(Kt,null,a.a.createElement(Wt,null,a.a.createElement(Vt,{to:"/"},a.a.createElement(w.c,null)," Back to Home Page")),a.a.createElement(Gt,null,a.a.createElement(Jt,null,a.a.createElement(w.r,null)),a.a.createElement(Qt,null,a.a.createElement(Yt,null,"Develop Phase"),a.a.createElement(Xt,null,"Building robust, maintainable, and secure code for your application"))),a.a.createElement(Nt,{assessmentData:{criteria:o,scores:{maintainability:c}}}),a.a.createElement(cr,null,a.a.createElement(sr,null,a.a.createElement(w.o,null),"Assessment Criteria"),a.a.createElement(Zt,null,a.a.createElement(er,null,a.a.createElement(rr,null,a.a.createElement(nr,null,a.a.createElement(ar,{color:"develop"},a.a.createElement(w.q,null)),a.a.createElement(lr,null,"Dev Standards"))),a.a.createElement(or,null,"Core development practices and architectural standards for building robust, maintainable applications."),a.a.createElement(ir,null,Object.entries({architectureReview:"Architecture review",branchingStrategy:"Branching Strategy",codeAnalysis:"Code Analysis",featureFlagging:"Feature Flagging",observability:"Observability"}).map(e=>{let[t,r]=e;return a.a.createElement(ur,{key:t},a.a.createElement(dr,{type:"checkbox",checked:o.branchingStrategy[t],onChange:()=>m("branchingStrategy",t)}),a.a.createElement(gr,null,r))}))),a.a.createElement(er,null,a.a.createElement(rr,null,a.a.createElement(nr,null,a.a.createElement(ar,{color:"develop"},a.a.createElement(w.L,null)),a.a.createElement(lr,null,"Infra - Local | EUT"))),a.a.createElement(or,null,"IAC practices for local and provisioned environments for efficient workflows."),a.a.createElement(ir,null,Object.entries({localStack:"Local Stack",containerization:"Containerization",environmentUniformity:"Environment uniformity",endUserTestingSetup:"End-user testing setup",environmentConfigurationManagement:"Configuration management"}).map(e=>{let[t,r]=e;return a.a.createElement(ur,{key:t},a.a.createElement(dr,{type:"checkbox",checked:o.infrastructure[t],onChange:()=>m("infrastructure",t)}),a.a.createElement(gr,null,r))}))),a.a.createElement(er,null,a.a.createElement(rr,null,a.a.createElement(ar,{color:"develop"},a.a.createElement(w.M,null)),a.a.createElement(lr,null,"Security Standards")),a.a.createElement(or,null,"Security protocols and best practices to protect applications and data from vulnerabilities."),a.a.createElement(ir,null,Object.entries({inputValidation:"Input validation and sanitization",authenticationProtocols:"Secure authentication protocols",dataEncryption:"Sensitive data encryption",owaspPrevention:"OWASP vulnerability prevention",securityReviews:"Security code reviews"}).map(e=>{let[t,r]=e;return a.a.createElement(ur,{key:t},a.a.createElement(dr,{type:"checkbox",checked:o.securityStandards[t],onChange:()=>m("securityStandards",t)}),a.a.createElement(gr,null,r))}))),a.a.createElement(er,null,a.a.createElement(rr,null,a.a.createElement(nr,null,a.a.createElement(ar,{color:"develop"},a.a.createElement(w.k,null)),a.a.createElement(lr,null,"Code Quality"))),a.a.createElement(or,null,"Testing frameworks and quality assurance practices to ensure reliable, well-tested code."),a.a.createElement(ir,null,Object.entries({unitTestingFrameworks:"Unit testing frameworks",integrationTesting:"Integration testing",codeCoverageMetrics:"Code coverage metrics",testDrivenDevelopment:"Test-driven development",automatedRegressionTesting:"Automated regression testing"}).map(e=>{let[t,r]=e;return a.a.createElement(ur,{key:t},a.a.createElement(dr,{type:"checkbox",checked:o.testCoverage[t],onChange:()=>m("testCoverage",t)}),a.a.createElement(gr,null,r))}))))),a.a.createElement(mr,null),a.a.createElement(cr,null,a.a.createElement(sr,null,a.a.createElement(w.v,null),"Assessment Results"),a.a.createElement(Zt,null,a.a.createElement(er,{style:{position:"relative"}},a.a.createElement(tr,null,a.a.createElement(rr,null,a.a.createElement(nr,null,a.a.createElement(ar,{color:"develop"},a.a.createElement(w.q,null)),a.a.createElement(lr,null,"Dev Standards")))),a.a.createElement(ir,null,a.a.createElement("div",{style:{padding:"1rem",textAlign:"center",color:"#666"}},"Dev Standards assessment container - coming soon"))),a.a.createElement(er,{style:{position:"relative"}},a.a.createElement(tr,null,a.a.createElement(rr,null,a.a.createElement(nr,null,a.a.createElement(ar,{color:"develop"},a.a.createElement(w.L,null)),a.a.createElement(lr,null,"Infra - Local | EUT")))),a.a.createElement(ir,null,a.a.createElement("div",{style:{padding:"1rem",textAlign:"center",color:"#666"}},"Infrastructure assessment container - coming soon"))),a.a.createElement(er,{style:{position:"relative"}},a.a.createElement(tr,null,a.a.createElement(rr,null,a.a.createElement(nr,null,a.a.createElement(ar,{color:"security"},a.a.createElement(w.v,null)),a.a.createElement(lr,null,"Maintainability")),a.a.createElement(Mr,null,a.a.createElement(jr,{onClick:()=>{t(["releasePipelineAutomation","sdkManagementComplexity","configurationManagement","nativeWebviewDataSharing","legacyCodeRemoval"].reduce((e,t)=>({...e,[t]:!0}),{}))},title:"Expand All"},a.a.createElement(w.l,null)),a.a.createElement(jr,{onClick:()=>{t({})},title:"Collapse All"},a.a.createElement(w.n,null))))),a.a.createElement(ir,null,Object.entries({releasePipelineAutomation:{label:"Release Pipeline Automation",trend:"down",risks:["App has planned releases every 2 weeks (10 business days)","3 of those 10 days are devoted to preparing for the release","Build Release Pipelines lack automation unit test coverage","Engineers must manually input the values for App and Build versions","Builds typically run for 30-40 minutes before complete"],actions:["Implement automated CI/CD pipeline with unit test coverage","Add automated uploads to App/Play Stores","Reduce build time through parallel processing","Implement automated version management"],correlations:["sdkManagementComplexity","configurationManagement"],timeline:[{date:"2024-01-15",event:"Identified manual release process bottleneck"},{date:"2024-03-20",event:"Started CI/CD pipeline planning"},{date:"2024-05-01",event:"Pilot automated testing implementation"}]},sdkManagementComplexity:{label:"SDK Management Complexity",trend:"stable",risks:["Android has 103 SDKs; iOS has 44","Updating SDKs when required is risky","SDK updates typically introduce bugs","Complex dependency management across platforms"],actions:["Implement automated SDK update testing","Create SDK compatibility matrix","Establish SDK update review process","Implement gradual rollout strategy"],correlations:["releasePipelineAutomation","configurationManagement"],timeline:[{date:"2024-02-10",event:"Documented SDK inventory"},{date:"2024-04-05",event:"Created update testing framework"}]},configurationManagement:{label:"Configuration Management",trend:"down",risks:["Configuration values prone to errors","Feature switches difficult to maintain","Challenges maintaining configs across environments","Manual configuration deployment process"],actions:["Implement configuration as code","Create centralized configuration management","Add configuration validation and testing","Implement environment-specific config validation"],correlations:["releasePipelineAutomation","nativeWebviewDataSharing"],timeline:[{date:"2024-01-20",event:"Identified configuration drift issues"},{date:"2024-03-15",event:"Started configuration audit"}]},nativeWebviewDataSharing:{label:"Native-WebView Data Sharing",trend:"up",risks:["Increased complexity of data sharing between native and WebView","Maintaining source of truth for data is challenging","Synchronization issues between components","Complex state management across platforms"],actions:["Implement unified data layer","Create data synchronization protocols","Add data validation and error handling","Implement data versioning strategy"],correlations:["configurationManagement","legacyCodeRemoval"],timeline:[{date:"2024-02-25",event:"Identified data sharing complexity"},{date:"2024-04-10",event:"Started unified data layer design"}]},legacyCodeRemoval:{label:"Legacy Code Removal",trend:"stable",risks:["Legacy code is intertwined with new implementation","Difficult to remove legacy code safely","Risk of breaking existing functionality","Complex dependency analysis required"],actions:["Create comprehensive dependency mapping","Implement gradual legacy code removal strategy","Add extensive testing for each removal step","Establish rollback procedures"],correlations:["nativeWebviewDataSharing"],timeline:[{date:"2024-01-30",event:"Started legacy code audit"},{date:"2024-03-25",event:"Created removal roadmap"}]}}).map(n=>{let[l,o]=n;return a.a.createElement(pr,{key:l,score:c[l]},a.a.createElement(hr,{onClick:()=>(e=>{t(t=>({...t,[e]:!t[e]}))})(l)},a.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a.a.createElement(Or,null,o.label),a.a.createElement(br,{trend:o.trend},"up"===o.trend&&a.a.createElement(w.d,null),"down"===o.trend&&a.a.createElement(w.b,null),"stable"===o.trend&&a.a.createElement(w.C,null))),a.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},r===l?a.a.createElement("select",{value:c[l],onChange:e=>((e,t)=>{s(r=>({...r,[e]:t}))})(l,e.target.value),onBlur:d,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:g(c[l])},autoFocus:!0},a.a.createElement("option",{value:"H"},"H"),a.a.createElement("option",{value:"M"},"M"),a.a.createElement("option",{value:"L"},"L")):a.a.createElement(Rr,{score:c[l],onClick:()=>u(l),style:{cursor:"pointer",color:g(c[l])}},c[l]),a.a.createElement(w.u,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),u(l)}}),a.a.createElement(yr,{expanded:e[l]},e[l]?a.a.createElement(w.l,null):a.a.createElement(w.m,null)))),e[l]&&a.a.createElement(vr,{expanded:e[l]},a.a.createElement(Ir,null,a.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},a.a.createElement(w.z,{style:{color:"#ff851b"}}),a.a.createElement("strong",null,"Maturity Factors"))),a.a.createElement(xr,null,o.risks.map((e,t)=>a.a.createElement(wr,{key:t},e))),a.a.createElement("div",{style:{marginTop:"1rem"}},a.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},a.a.createElement(w.z,{style:{color:"#2ecc40"}}),a.a.createElement("strong",null,"Recommended Actions")),o.actions.map((e,t)=>a.a.createElement(kr,{key:t},e))),a.a.createElement("div",{style:{marginTop:"1rem"}},a.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},a.a.createElement(w.A,{style:{color:"#0074d9"}}),a.a.createElement("strong",null,"Maturity Correlations")),a.a.createElement($r,null,o.correlations.map((e,t)=>a.a.createElement(Sr,{key:t},a.a.createElement(w.A,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),a.a.createElement("div",{style:{marginTop:"1rem"}},a.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},a.a.createElement(w.p,{style:{color:"#85144b"}}),a.a.createElement("strong",null,"Timeline")),a.a.createElement(Ar,null,o.timeline.map((e,t)=>a.a.createElement(Cr,{key:t},a.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),a.a.createElement("div",null,e.event)))))))}),a.a.createElement(zr,{score:p},a.a.createElement(Dr,null,"Overall Maintainability"),a.a.createElement(Pr,{score:p,style:{color:g(h)}},h)))),a.a.createElement(er,{style:{position:"relative"}},a.a.createElement(tr,null,a.a.createElement(rr,null,a.a.createElement(nr,null,a.a.createElement(ar,{color:"security"},a.a.createElement(w.M,null)),a.a.createElement(lr,null,"Security Standards")))),a.a.createElement(ir,null,a.a.createElement("div",{style:{padding:"1rem",textAlign:"center",color:"#666"}},"Security Standards assessment container - coming soon"))),a.a.createElement(er,{style:{position:"relative"}},a.a.createElement(tr,null,a.a.createElement(rr,null,a.a.createElement(nr,null,a.a.createElement(ar,{color:"develop"},a.a.createElement(w.k,null)),a.a.createElement(lr,null,"Code Quality")))),a.a.createElement(ir,null,a.a.createElement("div",{style:{padding:"1rem",textAlign:"center",color:"#666"}},"Code Quality assessment container - coming soon"))))),a.a.createElement(Ft,{assessmentData:{criteria:o,scores:{maintainability:c},phase:"develop",completionStatus:Object.values(o).reduce((e,t)=>{const r=Object.values(t).filter(Boolean).length,n=Object.keys(t).length;return e+(n>0?r/n:0)},0)/Object.keys(o).length,lastUpdated:(new Date).toISOString()},phase:"develop"}))}const Br=u.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,_r=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Fr=Object(u.c)(i.b)`
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
`,Lr=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Ur=u.c.div`
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
`,Hr=u.c.div`
  flex: 1;
`,qr=u.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Nr=u.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,Kr=u.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Wr=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,Vr=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Gr=u.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.primary}};
  margin-right: 1rem;
`,Jr=u.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Qr=u.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,Yr=u.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,Xr=u.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function Zr(){return a.a.createElement(Br,null,a.a.createElement(_r,null,a.a.createElement(Fr,{to:"/"},a.a.createElement(w.c,null)," Back to Home Page")),a.a.createElement(Lr,null,a.a.createElement(Ur,null,a.a.createElement(w.s,null)),a.a.createElement(Hr,null,a.a.createElement(qr,null,"Stabilize Phase"),a.a.createElement(Nr,null,"Ensuring your software is reliable, robust, and ready for production deployment"))),a.a.createElement(Kr,null,a.a.createElement(Wr,null,a.a.createElement(Vr,null,a.a.createElement(Gr,{color:"stabilize"},a.a.createElement(w.w,null)),a.a.createElement(Jr,null,"STLC")),a.a.createElement(Qr,null,"Structured Software Testing Life Cycle that ensures comprehensive coverage.",a.a.createElement(Yr,null,a.a.createElement(Xr,null,"Test planning and strategy"),a.a.createElement(Xr,null,"Test case development"),a.a.createElement(Xr,null,"Test environment preparation"),a.a.createElement(Xr,null,"Test execution and reporting"),a.a.createElement(Xr,null,"Test closure and lessons learned")))),a.a.createElement(Wr,null,a.a.createElement(Vr,null,a.a.createElement(Gr,{color:"stabilize"},a.a.createElement(w.t,null)),a.a.createElement(Jr,null,"Data Management")),a.a.createElement(Qr,null,"Robust handling of data throughout testing and stabilization processes.",a.a.createElement(Yr,null,a.a.createElement(Xr,null,"Test data generation and management"),a.a.createElement(Xr,null,"Data migration validation"),a.a.createElement(Xr,null,"Database performance testing"),a.a.createElement(Xr,null,"Data integrity checks"),a.a.createElement(Xr,null,"Data backup and recovery verification")))),a.a.createElement(Wr,null,a.a.createElement(Vr,null,a.a.createElement(Gr,{color:"stabilize"},a.a.createElement(w.J,null)),a.a.createElement(Jr,null,"CICD - Stage Gates")),a.a.createElement(Qr,null,"Automated quality gates that ensure only stable code progresses to production.",a.a.createElement(Yr,null,a.a.createElement(Xr,null,"Code quality gates (linting, static analysis)"),a.a.createElement(Xr,null,"Automated testing gates"),a.a.createElement(Xr,null,"Performance benchmarking gates"),a.a.createElement(Xr,null,"Security scanning gates"),a.a.createElement(Xr,null,"Approval workflows")))),a.a.createElement(Wr,null,a.a.createElement(Vr,null,a.a.createElement(Gr,{color:"stabilize"},a.a.createElement(w.e,null)),a.a.createElement(Jr,null,"Resilience Testing")),a.a.createElement(Qr,null,"Verifying system stability under stress, unusual conditions, and component failures.",a.a.createElement(Yr,null,a.a.createElement(Xr,null,"Chaos engineering experiments"),a.a.createElement(Xr,null,"Load and stress testing"),a.a.createElement(Xr,null,"Failover and recovery testing"),a.a.createElement(Xr,null,"Degraded service simulation"),a.a.createElement(Xr,null,"Long-haul reliability testing")))),a.a.createElement(Wr,null,a.a.createElement(Vr,null,a.a.createElement(Gr,{color:"stabilize"},a.a.createElement(w.O,null)),a.a.createElement(Jr,null,"Performance Optimization")),a.a.createElement(Qr,null,"Monitoring and enhancing system performance to meet user expectations.",a.a.createElement(Yr,null,a.a.createElement(Xr,null,"Response time optimization"),a.a.createElement(Xr,null,"Resource utilization analysis"),a.a.createElement(Xr,null,"Database query optimization"),a.a.createElement(Xr,null,"Network latency reduction"),a.a.createElement(Xr,null,"Caching strategy implementation"))))))}const en=u.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,tn=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,rn=Object(u.c)(i.b)`
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
`,nn=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,an=u.c.div`
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
`,ln=u.c.div`
  flex: 1;
`,on=u.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,cn=u.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,sn=u.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,mn=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,un=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,dn=u.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]||t.colors.deploy}};
  margin-right: 1rem;
`,gn=u.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,pn=u.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,hn=u.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,fn=u.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function En(){return a.a.createElement(en,null,a.a.createElement(tn,null,a.a.createElement(rn,{to:"/"},a.a.createElement(w.c,null)," Back to Home Page")),a.a.createElement(nn,null,a.a.createElement(an,null,a.a.createElement(w.J,null)),a.a.createElement(ln,null,a.a.createElement(on,null,"Deploy Phase"),a.a.createElement(cn,null,"Safely delivering your software to production and ensuring operational excellence"))),a.a.createElement(sn,null,a.a.createElement(mn,null,a.a.createElement(un,null,a.a.createElement(dn,null,a.a.createElement(w.y,null)),a.a.createElement(gn,null,"Feature Rollouts")),a.a.createElement(pn,null,"Controlled introduction of new capabilities to minimize risk and maximize feedback.",a.a.createElement(hn,null,a.a.createElement(fn,null,"Progressive delivery strategies"),a.a.createElement(fn,null,"Canary deployments"),a.a.createElement(fn,null,"Blue/Green deployments"),a.a.createElement(fn,null,"Feature flags and toggles"),a.a.createElement(fn,null,"Early user feedback loops")))),a.a.createElement(mn,null,a.a.createElement(un,null,a.a.createElement(dn,null,a.a.createElement(w.K,null)),a.a.createElement(gn,null,"Observability")),a.a.createElement(pn,null,"Comprehensive monitoring to understand system behavior and troubleshoot issues.",a.a.createElement(hn,null,a.a.createElement(fn,null,"Security Monitors & Alerts"),a.a.createElement(fn,null,"Allow/Block list"),a.a.createElement(fn,null,"Application Performance Monitoring"),a.a.createElement(fn,null,"Distributed tracing"),a.a.createElement(fn,null,"Logging strategies")))),a.a.createElement(mn,null,a.a.createElement(un,null,a.a.createElement(dn,null,a.a.createElement(w.v,null)),a.a.createElement(gn,null,"Contingencies")),a.a.createElement(pn,null,"Planning for failures and ensuring business continuity in all scenarios.",a.a.createElement(hn,null,a.a.createElement(fn,null,"Rollback/Rollforward strategies"),a.a.createElement(fn,null,"Emergency response planning"),a.a.createElement(fn,null,"Disaster recovery procedures"),a.a.createElement(fn,null,"Incident management workflows"),a.a.createElement(fn,null,"On-call rotation and escalation")))),a.a.createElement(mn,null,a.a.createElement(un,null,a.a.createElement(dn,null,a.a.createElement(w.h,null)),a.a.createElement(gn,null,"Analytics")),a.a.createElement(pn,null,"Leveraging data to inform product decisions and business strategy.",a.a.createElement(hn,null,a.a.createElement(fn,null,"User behavior tracking"),a.a.createElement(fn,null,"Conversion and funnel analysis"),a.a.createElement(fn,null,"Feature adoption metrics"),a.a.createElement(fn,null,"Business impact measurement"),a.a.createElement(fn,null,"Predictive usage modeling")))),a.a.createElement(mn,null,a.a.createElement(un,null,a.a.createElement(dn,null,a.a.createElement(w.J,null)),a.a.createElement(gn,null,"Continuous Improvement")),a.a.createElement(pn,null,"Evolving delivery processes through regular feedback and adaptation.",a.a.createElement(hn,null,a.a.createElement(fn,null,"Post-deployment reviews"),a.a.createElement(fn,null,"Release process optimization"),a.a.createElement(fn,null,"Deployment frequency metrics"),a.a.createElement(fn,null,"Cycle time reduction"),a.a.createElement(fn,null,"DevOps maturity assessments"))))))}var yn=r(515);const bn={maturityCategories:[{name:"Security",unmitigated:8,mitigated:5,inProgress:3,icon:a.a.createElement(w.M,null),color:"security"},{name:"Privacy",unmitigated:6,mitigated:4,inProgress:2,icon:a.a.createElement(w.R,null),color:"highlight"},{name:"Infrastructure",unmitigated:5,mitigated:3,inProgress:2,icon:a.a.createElement(w.L,null),color:"contingencies"},{name:"Authentication",unmitigated:7,mitigated:3,inProgress:4,icon:a.a.createElement(w.B,null),color:"primary"},{name:"Network",unmitigated:4,mitigated:2,inProgress:2,icon:a.a.createElement(w.E,null),color:"analytics"}],topMitigations:[{risk:"SQL Injection Vulnerability",category:"Security",mitigation:"Implemented parameterized queries and input validation",impact:"High",completionDate:"2024-04-15"},{risk:"Clear-Text Password Storage",category:"Authentication",mitigation:"Added password hashing with bcrypt and salting",impact:"High",completionDate:"2024-04-18"},{risk:"Unprotected API Endpoints",category:"Security",mitigation:"Added JWT authentication to all endpoints",impact:"Medium",completionDate:"2024-04-22"},{risk:"Outdated Dependencies",category:"Infrastructure",mitigation:"Implemented dependency scanning and auto-updates",impact:"Medium",completionDate:"2024-04-25"}],pendingMitigations:[{risk:"Insufficient Rate Limiting",category:"Security",mitigation:"Implement API rate limiting and throttling",impact:"Medium",targetDate:"2024-05-15"},{risk:"Weak Password Requirements",category:"Authentication",mitigation:"Enforce stronger password policy",impact:"Medium",targetDate:"2024-05-20"},{risk:"Missing Data Backup Strategy",category:"Infrastructure",mitigation:"Implement automated backup and verification",impact:"High",targetDate:"2024-06-01"}],lastUpdated:"2024-05-06 15:00"},vn=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,xn=u.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,wn=u.c.div`
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
`,kn=u.c.h2`
  font-size: 1.75rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,$n=u.c.h3`
  font-size: 1.25rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin: 1.5rem 0 1rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,Sn=u.c.div`
  margin-bottom: 2rem;
`,An=u.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Cn=u.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
`,zn=u.c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`,Dn=u.c.th`
  text-align: left;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,Pn=u.c.tr`
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
`,In=u.c.td`
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Mn=u.c.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  background: ${e=>{let{impact:t,theme:r}=e;switch(t){case"High":return"rgba(255, 107, 87, 0.15)";case"Medium":return"rgba(255, 224, 102, 0.2)";case"Low":return"rgba(182, 226, 211, 0.15)";default:return"rgba(0, 0, 0, 0.05)"}}};
  color: ${e=>{let{impact:t,theme:r}=e;switch(t){case"High":return r.colors.feature;case"Medium":return"#D4AC0D";case"Low":return"#27AE60";default:return r.colors.text}}};
`,jn=u.c.div`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`,On=u.c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`,Rn=u.c.div`
  display: flex;
  align-items: center;
  margin: 0 0.75rem;
  font-size: 0.85rem;
`,Tn=u.c.div`
  width: 12px;
  height: 12px;
  background-color: ${e=>{let{color:t}=e;return t}};
  margin-right: 0.5rem;
  border-radius: 2px;
`;function Bn(){const e=Object(u.e)(),{maturityCategories:t,topMitigations:r,pendingMitigations:n,lastUpdated:l}=bn,o=t.map(e=>({name:e.name,Mitigated:e.mitigated,"In Progress":e.inProgress,Unmitigated:e.unmitigated-e.mitigated-e.inProgress,icon:e.icon,color:e.color}));return a.a.createElement(vn,null,a.a.createElement(xn,null,a.a.createElement(wn,null,a.a.createElement(w.v,null)),a.a.createElement(kn,null,"Risk Mitigation Roadmap")),a.a.createElement(Sn,null,a.a.createElement($n,null,"Risk Mitigation Status by Category"),a.a.createElement(On,null,a.a.createElement(Rn,null,a.a.createElement(Tn,{color:e.colors.primary}),"Mitigated"),a.a.createElement(Rn,null,a.a.createElement(Tn,{color:e.colors.accent}),"In Progress"),a.a.createElement(Rn,null,a.a.createElement(Tn,{color:"#D6D6D6"}),"Unmitigated")),a.a.createElement(z.a,{width:"100%",height:250},a.a.createElement(D.a,{data:o,margin:{top:20,right:30,left:20,bottom:5},barGap:0,barCategoryGap:"20%"},a.a.createElement(yn.a,{strokeDasharray:"3 3",vertical:!1}),a.a.createElement(P.a,{dataKey:"name",tick:{fontSize:12},tickLine:!1}),a.a.createElement(I.a,{allowDecimals:!1,axisLine:!1,tickLine:!1,tick:{fontSize:12}}),a.a.createElement(M.a,null),a.a.createElement(j.a,{dataKey:"Mitigated",stackId:"a",fill:e.colors.primary}),a.a.createElement(j.a,{dataKey:"In Progress",stackId:"a",fill:e.colors.accent}),a.a.createElement(j.a,{dataKey:"Unmitigated",stackId:"a",fill:"#D6D6D6"})))),a.a.createElement(An,null,a.a.createElement(Cn,null,a.a.createElement($n,null,a.a.createElement(w.M,{style:{color:e.colors.security}}),"Completed Mitigations"),a.a.createElement(zn,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement(Dn,null,"Risk"),a.a.createElement(Dn,null,"Category"),a.a.createElement(Dn,null,"Impact"),a.a.createElement(Dn,null,"Date"))),a.a.createElement("tbody",null,r.map((e,t)=>a.a.createElement(Pn,{key:t},a.a.createElement(In,null,e.risk),a.a.createElement(In,null,e.category),a.a.createElement(In,null,a.a.createElement(Mn,{impact:e.impact},e.impact)),a.a.createElement(In,null,e.completionDate)))))),a.a.createElement(Cn,null,a.a.createElement($n,null,a.a.createElement(w.R,{style:{color:e.colors.highlight}}),"Pending Mitigations"),a.a.createElement(zn,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement(Dn,null,"Risk"),a.a.createElement(Dn,null,"Category"),a.a.createElement(Dn,null,"Impact"),a.a.createElement(Dn,null,"Target Date"))),a.a.createElement("tbody",null,n.map((e,t)=>a.a.createElement(Pn,{key:t},a.a.createElement(In,null,e.risk),a.a.createElement(In,null,e.category),a.a.createElement(In,null,a.a.createElement(Mn,{impact:e.impact},e.impact)),a.a.createElement(In,null,e.targetDate))))))),a.a.createElement(jn,null,"Last updated: ",l))}var _n=r(117);const Fn=u.c.footer`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0 0.5rem 0;
  margin-top: 3rem;
`,Ln=u.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,Un=u.c.img`
  height: 36px;
  width: auto;
  margin-right: 2rem;
`,Hn=u.c.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,qn=u.c.a`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Nn=u.c.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`,Kn=u.c.a`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,Wn=u.c.div`
  width: 100%;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 0.95rem;
  margin-top: 2rem;
  opacity: 0.7;
`;function Vn(){return a.a.createElement(Fn,null,a.a.createElement(Ln,null,a.a.createElement(Un,{src:g.a,alt:"Stable Kernel Logo"}),a.a.createElement(Hn,null,a.a.createElement(qn,{href:"https://stablekernel.com/services",target:"_blank",rel:"noopener noreferrer"},"Services"),a.a.createElement(qn,{href:"https://stablekernel.com/case-studies",target:"_blank",rel:"noopener noreferrer"},"Case Studies"),a.a.createElement(qn,{href:"https://stablekernel.com/about-us",target:"_blank",rel:"noopener noreferrer"},"About Us"),a.a.createElement(qn,{href:"https://stablekernel.com/resources",target:"_blank",rel:"noopener noreferrer"},"Resources"),a.a.createElement(qn,{href:"https://stablekernel.com/book-a-consultation",target:"_blank",rel:"noopener noreferrer"},"Book a Consultation"),a.a.createElement(qn,{href:"https://stablekernel.com/about-us#careers",target:"_blank",rel:"noopener noreferrer"},"Careers"),a.a.createElement(qn,{href:"https://stablekernel.com/privacy-policy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy")),a.a.createElement(Nn,null,a.a.createElement(Kn,{href:"https://twitter.com/stablekernel",target:"_blank",rel:"noopener noreferrer","aria-label":"X (formerly Twitter)"},a.a.createElement(_n.c,null)),a.a.createElement(Kn,{href:"https://www.facebook.com/stablekernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},a.a.createElement(_n.a,null)),a.a.createElement(Kn,{href:"https://www.linkedin.com/company/stable-kernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},a.a.createElement(_n.b,null)))),a.a.createElement(Wn,null,"\xa9 ",(new Date).getFullYear()," Stable Kernel. All rights reserved."))}r(508);const Gn=u.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;var Jn=function(){return a.a.createElement(i.a,{basename:"/risk-portfolio-mgr-thd"},a.a.createElement("div",{className:"App"},a.a.createElement(x,null),a.a.createElement(Gn,null,a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/",component:De}),a.a.createElement(c.a,{path:"/design",component:We}),a.a.createElement(c.a,{path:"/refine",component:st}),a.a.createElement(c.a,{path:"/develop",component:Tr}),a.a.createElement(c.a,{path:"/stabilize",component:Zr}),a.a.createElement(c.a,{path:"/deploy",component:En}),a.a.createElement(c.a,{path:"/maturity-dashboard",component:me}),a.a.createElement(c.a,{path:"/mitigation-roadmap",component:Bn}))),a.a.createElement(Vn,null),a.a.createElement(s.Toaster,{position:"top-right",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff"},success:{duration:3e3,theme:{primary:"#4aed88"}},error:{duration:5e3,theme:{primary:"#ff6b6b"}}}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qn=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,516)).then(t=>{let{getCLS:r,getFID:n,getFCP:a,getLCP:l,getTTFB:o}=t;r(e),n(e),a(e),l(e),o(e)})};const Yn=u.b`
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
`;o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{theme:{colors:{primary:"#2F48C4",accent:"#FF6B57",background:"#FFFFFF",secondaryBackground:"#F7F8FA",text:"#22223B",highlight:"#A3A3FF",feature:"#FF6B57",story:"#00CFE8",develop:"#A3A3FF",stabilize:"#B6E2D3",deploy:"#FFF3B0",security:"#FFB3B3",analytics:"#FFE066",contingencies:"#D6C1FF"},fonts:{primary:"'Inter', 'Segoe UI', Arial, sans-serif",weights:{regular:400,medium:500,bold:700}}}},a.a.createElement(Yn,null),a.a.createElement(Jn,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)}),Qn()},68:function(e,t,r){e.exports=r.p+"static/media/sk-logo-dark.fbff4e0a.svg"}},[[279,1,2]]]);
//# sourceMappingURL=main.71785350.chunk.js.map