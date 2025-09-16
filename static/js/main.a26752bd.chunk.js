(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(e,t,a){e.exports=a(507)},286:function(e,t,a){},506:function(e,t,a){},507:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(254),i=a.n(l),o=(a(286),a(25)),c=a(19),s=a(3),m=a(66),d=a.n(m);const u=s.c.header`
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
`,p=s.c.img`
  height: 40px;
  width: auto;
  margin-right: 2rem;
`,g=s.c.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`,h=Object(s.c)(o.b)`
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
`,b=Object(s.c)(o.b)`
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
`,f=s.c.a`
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
`,y=s.c.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;function E(){return n.a.createElement(u,null,n.a.createElement(y,null,n.a.createElement(f,{href:"https://stablekernel.com/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(p,{src:d.a,alt:"Stable Kernel Logo"})),n.a.createElement(g,null,n.a.createElement(h,{to:"/"},"Home"),n.a.createElement(h,{to:"/maturity-dashboard"},"Maturity Dashboard"),n.a.createElement(h,{to:"/mitigation-roadmap"},"Mitigation Roadmap"),n.a.createElement(b,{to:"/maturity-dashboard"},"View Assessment"))))}var v=a(4);const x=[{key:"design",label:"Design",color:"text",icon:n.a.createElement(v.C,null),path:"/design"},{key:"refine",label:"Refine",color:"feature",icon:n.a.createElement(v.u,null),path:"/refine"},{key:"develop",label:"Develop",color:"develop",icon:n.a.createElement(v.o,null),path:"/develop"},{key:"stabilize",label:"Stabilize",color:"stabilize",icon:n.a.createElement(v.p,null),path:"/stabilize"},{key:"deploy",label:"Deploy",color:"deploy",icon:n.a.createElement(v.E,null),path:"/deploy"}],w=s.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  overflow-x: auto;
`,k=s.c.button`
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
`,S=s.c.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  color: ${e=>{let{theme:t,color:a,selected:r}=e;return r?t.colors[a]:t.colors.text}};
`;function C(e){let{onSelect:t,selectedPhase:a}=e;const[l,i]=Object(r.useState)(a||x[0].key),o=Object(c.f)();return n.a.createElement(w,null,x.map(e=>n.a.createElement("div",{key:e.key,style:{textAlign:"center"}},n.a.createElement(k,{color:e.color,selected:l===e.key,onClick:()=>((e,a)=>{i(e),t&&t(e),a&&o.push(a)})(e.key,e.path),"aria-label":e.label},e.icon),n.a.createElement(S,{color:e.color,selected:l===e.key},e.label))))}var z=a(508),A=a(509),I=a(267),M=a(268),$=a(54),T=a(114),D=a(110),L=a(68),O=a(510),R=a(269),P=a(71),B=a(511),j=a(512),F=a(111),W=a(113),H=a(272);const V={maintainability:{releaseCycleEfficiency:"M",configurationManagement:"M",sdkManagementComplexity:"L",nativeWebviewDataSharing:"M",buildPipelineAutomation:"M",legacyCodeRemoval:"L"},performance:{appStartupPerformance:"L",webViewLoadTime:"M",coreWebVitals:"L",cacheOptimization:"M",networkBandwidthOptimization:"L"},reliability:{iosCrashFreeRate:"M",androidCrashFreeRate:"M",crashReproducibility:"L",crashImpactAnalysis:"M",reliabilityTooling:"M"},testing:{unitTestCoverage:"M",endToEndTestFramework:"M",testInfrastructure:"M",crossTeamTestAccessibility:"L",testToolOptimization:"M"},technology:{platformMigrationProgress:"M",multiDeviceStrategy:"L",modularArchitecture:"L",codeHealthMetrics:"M",technologyStackModernization:"M"},developmentPractices:{cicdPipelineAutomation:"L",codeQualityGates:"L",buildArtifactManagement:"M",manualProcessElimination:"L",aiAssistedDevelopment:"L"}},q=e=>{switch(e){case"H":return 3;case"M":return 2;case"L":return 1;default:return 2}},U=e=>{const t=Object.values(e),a=t.reduce((e,t)=>e+q(t),0)/t.length;return Math.round(a/3*100)},K=()=>{const e=[U(V.maintainability),U(V.performance),U(V.reliability),U(V.testing),U(V.technology),U(V.developmentPractices)];return Math.round(e.reduce((e,t)=>e+t,0)/e.length)},G=(()=>{const e=[{name:"Maintainability",value:U(V.maintainability),fullMark:100,color:"#ff851b"},{name:"Performance",value:U(V.performance),fullMark:100,color:"#dc3545"},{name:"Reliability",value:U(V.reliability),fullMark:100,color:"#28a745"},{name:"Testing",value:U(V.testing),fullMark:100,color:"#007bff"},{name:"Technology",value:U(V.technology),fullMark:100,color:"#6f42c1"},{name:"Dev Practices",value:U(V.developmentPractices),fullMark:100,color:"#fd7e14"}],t=[{phase:"Design",score:75,phaseName:"Design"},{phase:"Refine",score:68,phaseName:"Refine"},{phase:"Develop",score:K(),phaseName:"Develop"},{phase:"Stabilize",score:U(V.reliability),phaseName:"Stabilize"},{phase:"Deploy",score:U(V.developmentPractices),phaseName:"Deploy"}];return{overallScore:(()=>{const e=[];Object.values(V).forEach(t=>{Object.values(t).forEach(t=>{e.push(q(t))})});const t=e.reduce((e,t)=>e+t,0)/e.length;return Math.round(t/3*100)})(),phaseScores:t,maturityCategories:e,maturitySeverity:(()=>{let e=0,t=0,a=0;return Object.values(V).forEach(r=>{Object.values(r).forEach(r=>{switch(r){case"H":e++;break;case"M":t++;break;case"L":a++}})}),[{name:"High Risk (Low Score)",value:a,color:"#dc3545"},{name:"Medium Risk",value:t,color:"#ffc107"},{name:"Low Risk (High Score)",value:e,color:"#28a745"}]})(),improvementAreas:(()=>{const e=[];return"M"===V.maintainability.releasePipelineAutomation&&e.push("Release pipeline automation (30-40 min builds, manual GitHub actions)"),"L"===V.maintainability.sdkManagementComplexity&&e.push("SDK management complexity (Android: 103 SDKs, iOS: 44 SDKs)"),"L"===V.performance.appStartupPerformance&&e.push("App startup performance (network bandwidth dependent, customer complaints)"),"L"===V.performance.coreWebVitals&&e.push("Core Web Vitals optimization (Android only, missing iOS coverage)"),"L"===V.reliability.crashReproducibility&&e.push("Crash reproducibility challenges (difficult to reproduce crashes)"),"L"===V.testing.crossTeamTestAccessibility&&e.push("Cross-team test accessibility barriers (complex setup for product teams)"),"L"===V.technology.multiDeviceStrategy&&e.push("Multi-device strategy gaps (no tablet, watch, auto support)"),"L"===V.technology.modularArchitecture&&e.push("Modular architecture implementation (features as importable products)"),"L"===V.developmentPractices.cicdPipelineAutomation&&e.push("CI/CD pipeline fully manual (unit tests, regressions, releases)"),"L"===V.developmentPractices.codeQualityGates&&e.push("Automated code quality gates missing (no coverage thresholds)"),e})(),completedImprovements:["Implemented Embrace tooling for reliability tracking","Established 80% branch coverage requirement for unit tests","Set up Bugbear E2E testing framework with WebDriverIO","Configured SauceLabs device testing infrastructure","Started Swift migration (63% complete) and Kotlin migration (59% complete)","Implemented selective WebView caching with native rendering UX"],lastUpdated:(new Date).toISOString()}})(),N=[{phase:"Design",icon:n.a.createElement(v.C,{size:24}),color:"text"},{phase:"Refine",icon:n.a.createElement(v.u,{size:24}),color:"feature"},{phase:"Develop",icon:n.a.createElement(v.o,{size:24}),color:"develop"},{phase:"Stabilize",icon:n.a.createElement(v.p,{size:24}),color:"stabilize"},{phase:"Deploy",icon:n.a.createElement(v.E,{size:24}),color:"deploy"}],J=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,X=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Q=s.c.div`
  flex: 1;
`,_=s.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{color:t}=e;return t}};
  margin-bottom: 0.5rem;
`,Z=s.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 1.5rem;
`,Y=s.c.h3`
  font-size: 1.1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin-bottom: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,ee=s.c.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 0.5rem 0 1.5rem 0;
`,te=s.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`,ae=(s.c.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`,s.c.li`
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
`,s.c.div`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`),re=s.c.span`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 0.25rem;
`,ne=s.c.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,le=s.c.button`
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
`,ie=s.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,oe=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
`;function ce(e,t){return e>=75?"#2ecc40":e>=60?t.colors.accent:"#ff4136"}const se=e=>{const{x:t,y:a,width:r,value:l}=e;return n.a.createElement("g",null,n.a.createElement("text",{x:t+r/2,y:a-10,fill:"#333",textAnchor:"middle",dominantBaseline:"middle"},l))};function me(){const e=Object(s.e)(),[t,a]=Object(r.useState)("overview"),{overallScore:l,phaseScores:i,maturityCategories:o,maturitySeverity:c,lastUpdated:m}=G,d=ce(l,e);return n.a.createElement(J,null,n.a.createElement(X,null,n.a.createElement(Q,null,n.a.createElement("div",null,"Comprehensive view of project maturity levels and improvement progress"))),n.a.createElement(ne,null,n.a.createElement(le,{active:"overview"===t?"true":"false",onClick:()=>a("overview")},"Overview"),n.a.createElement(le,{active:"details"===t?"true":"false",onClick:()=>a("details")},"Detailed Analysis")),"overview"===t?n.a.createElement(n.a.Fragment,null,n.a.createElement(Y,null,n.a.createElement(v.h,{style:{color:e.colors.primary}}),"Overall Capability Maturity Assessment"),n.a.createElement(ie,null,n.a.createElement(oe,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},n.a.createElement(_,{color:d},l),n.a.createElement(Z,null,"Overall Maturity Score"),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem",textAlign:"center",maxWidth:"400px"}},n.a.createElement("strong",null,"THD Assessment Overview:")," Based on 30 detailed metrics across 6 capability areas from The Home Depot's development maturity evaluation."),n.a.createElement(z.a,{width:"100%",height:180},n.a.createElement(A.a,{data:i,margin:{top:10,right:20,left:0,bottom:0}},n.a.createElement(I.a,{dataKey:"phase",tick:{fontSize:14}}),n.a.createElement(M.a,{domain:[0,100],hide:!0}),n.a.createElement($.a,null),n.a.createElement(T.a,{dataKey:"score"},i.map((t,a)=>n.a.createElement(D.a,{key:`cell-${a}`,fill:ce(t.score,e)})),n.a.createElement(L.a,{dataKey:"score",position:"top",style:{fontSize:14,fontWeight:600}})))),n.a.createElement(ee,null,N.map(t=>{let{phase:a,icon:r,color:l}=t;return n.a.createElement(te,{key:a},n.a.cloneElement(r,{color:e.colors[l]}),n.a.createElement(re,null,a))}))),n.a.createElement(oe,null,n.a.createElement(Y,null,n.a.createElement(v.H,{style:{color:e.colors.primary}}),"THD Capability Assessment Categories"),n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"0.75rem"}},[...o].sort((e,t)=>e.name.localeCompare(t.name)).map(e=>{const t=(e=>e>=84?"H":e>=50?"M":"L")(e.value),a="L"===t?"#dc3545":"M"===t?"#ffc107":"#28a745";return n.a.createElement("div",{key:e.name,style:{padding:"1rem",background:"rgba(255, 255, 255, 0.05)",borderLeft:`4px solid ${a}`,borderRadius:"0.5rem",textAlign:"center"}},n.a.createElement("div",{style:{fontSize:"1.1rem",fontWeight:"bold",color:a,marginBottom:"0.5rem"}},e.name),n.a.createElement("div",{style:{fontSize:"2.5rem",fontWeight:"bold",color:a,marginBottom:"0.5rem"}},t),n.a.createElement("div",{style:{fontSize:"0.8rem",color:"#666",backgroundColor:"L"===t?"rgba(220, 53, 69, 0.1)":"M"===t?"rgba(255, 193, 7, 0.1)":"rgba(40, 167, 69, 0.1)",padding:"0.25rem 0.5rem",borderRadius:"0.25rem",fontWeight:"bold"}},"L"===t?"Low":"M"===t?"Medium":"High"))}))))):n.a.createElement(ie,null,n.a.createElement(oe,null,n.a.createElement(Y,null,n.a.createElement(v.H,{style:{color:e.colors.security}}),"Risk Severity Distribution"),n.a.createElement(z.a,{width:"100%",height:250},n.a.createElement(O.a,null,n.a.createElement(R.a,{data:c,cx:"50%",cy:"50%",labelLine:!1,label:se,outerRadius:80,fill:"#8884d8",dataKey:"value"},c.map((e,t)=>n.a.createElement(D.a,{key:`cell-${t}`,fill:e.color}))),n.a.createElement($.a,null),n.a.createElement(P.a,null)))),n.a.createElement(oe,null,n.a.createElement(Y,null,n.a.createElement(v.h,{style:{color:e.colors.primary}}),"Category Capability Maturity Assessment"),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},n.a.createElement("strong",null,"THD Assessment Categories:")," Radar chart showing relative maturity across six key capability domains. Outer edge represents 100% maturity."),n.a.createElement(z.a,{width:"100%",height:250},n.a.createElement(B.a,{cx:"50%",cy:"50%",outerRadius:80,data:o},n.a.createElement(j.a,null),n.a.createElement(F.a,{dataKey:"name",tick:{fontSize:12}}),n.a.createElement(W.a,{angle:30,domain:[0,100],tick:{fontSize:10}}),n.a.createElement(H.a,{name:"Capability Maturity %",dataKey:"value",stroke:e.colors.primary,fill:e.colors.primary,fillOpacity:.3,strokeWidth:2}),n.a.createElement($.a,{formatter:e=>[`${e}%`,"Capability Maturity"]}))),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem",textAlign:"center"}},n.a.createElement("strong",null,"Scoring:")," H=100%, M=67%, L=33% | ",n.a.createElement("strong",null,"Current Range:")," ",Math.min(...o.map(e=>e.value)),"% - ",Math.max(...o.map(e=>e.value)),"%"))),n.a.createElement(ae,null,"Last updated: ",new Date(m).toLocaleString()))}const de=s.c.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  padding: 4rem 2rem 2rem 2rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  overflow: hidden;
`,ue=s.c.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 40vw;
  max-width: 500px;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
  transform: translateX(-50%);
`,pe=s.c.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,ge=s.c.h1`
  font-size: 2.5rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1rem;
`,he=s.c.p`
  font-size: 1.25rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-bottom: 2rem;
`,be=s.c.section`
  padding: 3rem 2rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
`,fe=s.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
`,ye=s.c.div`
  flex: 1 1 0;
  margin-bottom: 0;
  padding: 1.5rem 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.04);
  min-width: 0;
`,Ee=s.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${e=>{let{color:t,theme:a}=e;return a.colors[t]}};
  margin-bottom: 0.75rem;
`,ve=s.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`,xe=s.c.span`
  font-size: 1.1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  display: flex;
  align-items: center;
  height: 2rem;
`,we=s.c.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 2rem;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,ke=s.c.ul`
  margin: 0.5rem 0 0 0;
  padding-left: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1rem;
  text-align: left;
  align-items: flex-start;
`,Se=s.c.li`
  margin-bottom: 0.4rem;
`,Ce=s.c.div`
  width: 100%;
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(47, 72, 196, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`,ze=s.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Ae=s.c.div`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Ie=s.c.h3`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
`;function Me(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(de,null,n.a.createElement(pe,null,n.a.createElement(ge,null,"Capability Maturity Assessment"),n.a.createElement(he,null,"Evaluate and improve capabilities across every phase of your software development lifecycle")),n.a.createElement(ue,{src:d.a,alt:"Watermark"})),n.a.createElement(be,null,n.a.createElement(fe,null,"Lifecycle Phases"),n.a.createElement(C,null),n.a.createElement(we,null,n.a.createElement(ye,{id:"phase-design"},n.a.createElement(ve,null,n.a.createElement(Ee,{id:"icon-design",color:"text"},n.a.createElement(v.C,null)),n.a.createElement(xe,null,"Design")),n.a.createElement(ke,null,n.a.createElement(Se,null,"A/B Testing"),n.a.createElement(Se,null,"Accessibility"),n.a.createElement(Se,null,"Prototyping"),n.a.createElement(Se,null,"UX Research"),n.a.createElement(Se,null,"Wireframes"))),n.a.createElement(ye,{id:"phase-refine"},n.a.createElement(ve,null,n.a.createElement(Ee,{id:"icon-refine",color:"feature"},n.a.createElement(v.u,null)),n.a.createElement(xe,null,"Refine")),n.a.createElement(ke,null,n.a.createElement(Se,null,"Feature 360"),n.a.createElement(Se,null,"Product Roadmap"),n.a.createElement(Se,null,"ROI Hypothesis"),n.a.createElement(Se,null,"Story Curation"),n.a.createElement(Se,null,"Success Metrics"))),n.a.createElement(ye,{id:"phase-develop"},n.a.createElement(ve,null,n.a.createElement(Ee,{id:"icon-develop",color:"develop"},n.a.createElement(v.o,null)),n.a.createElement(xe,null,"Develop")),n.a.createElement(ke,null,n.a.createElement(Se,null,"Dev Standards"),n.a.createElement(Se,null,"Infra - Local | EUT"),n.a.createElement(Se,null,"Maintainability"),n.a.createElement(Se,null,"Security Standards"),n.a.createElement(Se,null,"Code Quality"))),n.a.createElement(ye,{id:"phase-stabilize"},n.a.createElement(ve,null,n.a.createElement(Ee,{id:"icon-stabilize",color:"stabilize"},n.a.createElement(v.p,null)),n.a.createElement(xe,null,"Stabilize")),n.a.createElement(ke,null,n.a.createElement(Se,null,"CICD - Stage Gates"),n.a.createElement(Se,null,"Data Management"),n.a.createElement(Se,null,"Resiliency"),n.a.createElement(Se,null,"STLC"),n.a.createElement(Se,null,"Usability"))),n.a.createElement(ye,{id:"phase-deploy"},n.a.createElement(ve,null,n.a.createElement(Ee,{id:"icon-deploy",color:"deploy"},n.a.createElement(v.E,null)),n.a.createElement(xe,null,"Deploy")),n.a.createElement(ke,null,n.a.createElement(Se,null,"Analytics"),n.a.createElement(Se,null,"Contingencies"),n.a.createElement(Se,null,"Feature rollouts"),n.a.createElement(Se,null,"Observability"),n.a.createElement(Se,null,"Support")))),n.a.createElement(Ce,{id:"cross-phase-ttt"},n.a.createElement(ze,null,n.a.createElement(Ae,null,n.a.createElement(v.J,null)),n.a.createElement(Ie,null,"Tools, Tech & Talent")))),n.a.createElement(be,null,n.a.createElement(fe,null,"Maturity Dashboard"),n.a.createElement(me,null)))}const $e=s.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Te=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,De=Object(s.c)(o.b)`
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
`,Le=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,Oe=s.c.div`
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
`,Re=s.c.div`
  flex: 1;
`,Pe=s.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Be=s.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,je=s.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Fe=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,We=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,He=s.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.primary}};
  margin-right: 1rem;
`,Ve=s.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,qe=s.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,Ue=s.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,Ke=s.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function Ge(){return n.a.createElement($e,null,n.a.createElement(Te,null,n.a.createElement(De,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(Le,null,n.a.createElement(Oe,null,n.a.createElement(v.C,null)),n.a.createElement(Re,null,n.a.createElement(Pe,null,"Design Phase"),n.a.createElement(Be,null,"The foundation of successful software projects starts with thoughtful design"))),n.a.createElement(je,null,n.a.createElement(Fe,null,n.a.createElement(We,null,n.a.createElement(He,{color:"text"},n.a.createElement(v.w,null)),n.a.createElement(Ve,null,"UX Research")),n.a.createElement(qe,null,"User experience research forms the backbone of effective design, ensuring products meet user needs and expectations.",n.a.createElement(Ue,null,n.a.createElement(Ke,null,"User interviews and surveys"),n.a.createElement(Ke,null,"Personas and user journey mapping"),n.a.createElement(Ke,null,"Competitive analysis"),n.a.createElement(Ke,null,"Usability testing")))),n.a.createElement(Fe,null,n.a.createElement(We,null,n.a.createElement(He,{color:"text"},n.a.createElement(v.a,null)),n.a.createElement(Ve,null,"Accessibility")),n.a.createElement(qe,null,"Designing for all users enhances product reach and compliance with legal standards.",n.a.createElement(Ue,null,n.a.createElement(Ke,null,"WCAG compliance"),n.a.createElement(Ke,null,"Screen reader compatibility"),n.a.createElement(Ke,null,"Color contrast and readability"),n.a.createElement(Ke,null,"Keyboard navigation support")))),n.a.createElement(Fe,null,n.a.createElement(We,null,n.a.createElement(He,{color:"text"},n.a.createElement(v.h,null)),n.a.createElement(Ve,null,"A/B Testing")),n.a.createElement(qe,null,"Data-driven design decisions lead to optimized user experiences and better business outcomes.",n.a.createElement(Ue,null,n.a.createElement(Ke,null,"Test hypothesis formation"),n.a.createElement(Ke,null,"Statistical significance planning"),n.a.createElement(Ke,null,"Multivariate testing"),n.a.createElement(Ke,null,"Iterative design improvements")))),n.a.createElement(Fe,null,n.a.createElement(We,null,n.a.createElement(He,{color:"text"},n.a.createElement(v.L,null)),n.a.createElement(Ve,null,"Wireframes")),n.a.createElement(qe,null,"Visual blueprints that guide development and align stakeholder expectations.",n.a.createElement(Ue,null,n.a.createElement(Ke,null,"Low-fidelity sketches"),n.a.createElement(Ke,null,"Interactive prototypes"),n.a.createElement(Ke,null,"Information architecture"),n.a.createElement(Ke,null,"User flow diagrams"))))))}const Ne=s.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Je=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Xe=Object(s.c)(o.b)`
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
`,Qe=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,_e=s.c.div`
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
`,Ze=s.c.div`
  flex: 1;
`,Ye=s.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,et=s.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,tt=s.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,at=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,rt=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,nt=s.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.primary}};
  margin-right: 1rem;
`,lt=s.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,it=s.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,ot=s.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,ct=s.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function st(){return n.a.createElement(Ne,null,n.a.createElement(Je,null,n.a.createElement(Xe,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(Qe,null,n.a.createElement(_e,null,n.a.createElement(v.u,null)),n.a.createElement(Ze,null,n.a.createElement(Ye,null,"Refine Phase"),n.a.createElement(et,null,"Transform design concepts into well-defined requirements and implementation plans"))),n.a.createElement(tt,null,n.a.createElement(at,null,n.a.createElement(rt,null,n.a.createElement(nt,{color:"feature"},n.a.createElement(v.g,null)),n.a.createElement(lt,null,"Product Roadmap")),n.a.createElement(it,null,"Strategic planning that aligns development with business objectives and market needs.",n.a.createElement(ot,null,n.a.createElement(ct,null,"Feature prioritization"),n.a.createElement(ct,null,"Release planning"),n.a.createElement(ct,null,"Stakeholder alignment"),n.a.createElement(ct,null,"Milestone definition")))),n.a.createElement(at,null,n.a.createElement(rt,null,n.a.createElement(nt,{color:"feature"},n.a.createElement(v.A,null)),n.a.createElement(lt,null,"ROI Hypothesis")),n.a.createElement(it,null,"Economic analysis to ensure development efforts yield meaningful business returns.",n.a.createElement(ot,null,n.a.createElement(ct,null,"Cost-benefit analysis"),n.a.createElement(ct,null,"Resource allocation planning"),n.a.createElement(ct,null,"Market opportunity assessment"),n.a.createElement(ct,null,"Success metrics definition")))),n.a.createElement(at,null,n.a.createElement(rt,null,n.a.createElement(nt,{color:"feature"},n.a.createElement(v.D,null)),n.a.createElement(lt,null,"Feature 360")),n.a.createElement(it,null,"Comprehensive analysis of each feature from multiple perspectives to ensure completeness.",n.a.createElement(ot,null,n.a.createElement(ct,null,"User story development"),n.a.createElement(ct,null,"Edge case identification"),n.a.createElement(ct,null,"Acceptance criteria"),n.a.createElement(ct,null,"Integration requirements")))),n.a.createElement(at,null,n.a.createElement(rt,null,n.a.createElement(nt,{color:"feature"},n.a.createElement(v.f,null)),n.a.createElement(lt,null,"Story Curation")),n.a.createElement(it,null,"Development of clear, complete user stories that capture requirements and acceptance criteria.",n.a.createElement(ot,null,n.a.createElement(ct,null,"Persona-based story writing"),n.a.createElement(ct,null,"Acceptance criteria definition"),n.a.createElement(ct,null,"Story prioritization"),n.a.createElement(ct,null,"Backlog management"))))))}const mt=s.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,dt=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,ut=Object(s.c)(o.b)`
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
`,pt=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,gt=s.c.div`
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
`,ht=s.c.div`
  flex: 1;
`,bt=s.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,ft=s.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,yt=s.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Et=s.c.div`
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
`,vt=s.c.div`
  position: sticky;
  top: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 20;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin: -1.5rem -1.5rem 1rem -1.5rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`,xt=s.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  text-align: left;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.background}};
`,wt=s.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,kt=s.c.div`
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
`,St=s.c.h2`
  font-size: 1.4rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  line-height: 1.2;
  display: flex;
  align-items: center;
`,Ct=s.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,zt=s.c.div`
  margin-bottom: 3rem;
`,At=s.c.h2`
  font-size: 2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
  }
`,It=s.c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  border-left: 4px solid ${e=>{let{score:t,theme:a}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  overflow: hidden;
`,Mt=s.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  }
`,$t=s.d`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
`,Tt=s.d`
  from {
    opacity: 1;
    max-height: 500px;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`,Dt=s.c.div`
  font-size: 0.8rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.7;
  transition: transform 0.3s ease;
  transform: rotate(${e=>{let{expanded:t}=e;return t?"180deg":"0deg"}});
`,Lt=s.c.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: ${e=>{let{trend:t,theme:a}=e;return"up"===t?"#2ecc40":"down"===t?"#ff4136":a.colors.text}};
`,Ot=s.c.div`
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  animation: ${e=>{let{expanded:t}=e;return t?$t:Tt}} 0.3s ease;
  overflow: hidden;
`,Rt=s.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
`,Pt=s.c.li`
  margin-bottom: 0.5rem;
`,Bt=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.primary}}10;
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  font-size: 0.85rem;
`,jt=s.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
`,Ft=s.c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  padding: 0.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 0.25rem;
`,Wt=s.c.div`
  margin: 1rem 0;
  padding: 1rem;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
`,Ht=s.c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 0.25rem;
  font-size: 0.85rem;
`,Vt=s.c.div`
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
`,qt=s.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Ut=s.c.div`
  font-size: 2.5rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  color: ${e=>{let{score:t,theme:a}=e;return t>=80?"#2ecc40":t>=60?"#ff851b":"#ff4136"}};
  margin-bottom: 0.25rem;
`,Kt=s.c.div`
  position: sticky;
  top: 0;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  z-index: 10;
  padding: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  margin: 0 -1rem 1rem -1rem;
`,Gt=s.c.div`
  display: flex;
  gap: 0.5rem;
`,Nt=s.c.button`
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
`,Jt=s.c.span`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,Xt=s.c.span`
  font-size: 1.2rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.bold}};
  min-width: 1.5rem;
  text-align: center;
  display: inline-block;
`;function Qt(){const[e,t]=Object(r.useState)({}),[a,l]=Object(r.useState)(null),[i,o]=n.a.useState({releaseCycleEfficiency:"M",configurationManagement:"M",sdkManagementComplexity:"L",nativeWebviewDataSharing:"M",buildPipelineAutomation:"M",legacyCodeRemoval:"L"}),[c,s]=n.a.useState({appStartupPerformance:"L",webViewLoadTime:"M",coreWebVitals:"L",cacheOptimization:"M",networkBandwidthOptimization:"L"}),[m,d]=n.a.useState({iosCrashFreeRate:"M",androidCrashFreeRate:"M",crashReproducibility:"L",crashImpactAnalysis:"M",reliabilityTooling:"M"}),[u,p]=n.a.useState({unitTestCoverage:"M",endToEndTestFramework:"M",testInfrastructure:"M",crossTeamTestAccessibility:"L",testToolOptimization:"M"}),[g,h]=n.a.useState({platformMigrationProgress:"M",multiDeviceStrategy:"L",modularArchitecture:"L",codeHealthMetrics:"M",technologyStackModernization:"M"}),[b,f]=n.a.useState({cicdPipelineAutomation:"L",codeQualityGates:"L",buildArtifactManagement:"M",manualProcessElimination:"L",aiAssistedDevelopment:"L"}),y=e=>{t(t=>({...t,[e]:!t[e]}))},E=e=>{l(e)},x=()=>{l(null)},w=e=>{switch(e){case"H":return 3;case"M":return 2;case"L":return 1;default:return 2}},k=e=>{switch(e){case"H":return"#28a745";case"M":return"#ffc107";case"L":return"#dc3545";case"High":return"#28a745";case"Medium":return"#ffc107";case"Low":return"#dc3545";default:return"#6c757d"}},S=e=>e>=2.5?"High":e>=1.5?"Medium":"Low",C=Math.round(Object.values(i).reduce((e,t)=>e+w(t),0)/Object.values(i).length),z=S(C);return n.a.createElement(mt,null,n.a.createElement(dt,null,n.a.createElement(ut,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(pt,null,n.a.createElement(gt,null,n.a.createElement(v.o,null)),n.a.createElement(ht,null,n.a.createElement(bt,null,"Develop Phase"),n.a.createElement(ft,null,"Building robust, maintainable, and secure code for your application"))),n.a.createElement(zt,null,n.a.createElement(At,null,n.a.createElement(v.s,null),"Assessment Results"),n.a.createElement(yt,null,n.a.createElement(Et,{style:{position:"relative"}},n.a.createElement(vt,null,n.a.createElement(xt,null,n.a.createElement(wt,null,n.a.createElement(kt,{color:"develop"},n.a.createElement(v.p,null)),n.a.createElement(St,null,"Maintainability")),n.a.createElement(Gt,null,n.a.createElement(Nt,{onClick:()=>{t(["releaseCycleEfficiency","configurationManagement","sdkManagementComplexity","nativeWebviewDataSharing","buildPipelineAutomation","legacyCodeRemoval"].reduce((e,t)=>({...e,[t]:!0}),{}))},title:"Expand All"},n.a.createElement(v.j,null)),n.a.createElement(Nt,{onClick:()=>{t({})},title:"Collapse All"},n.a.createElement(v.l,null))))),n.a.createElement(Ct,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"How might we make our app smaller, easier to maintain, with fewer SDKs, so that we can move faster without accruing tech debt?"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"The Home Depot would like to understand how the proposed approach would provide a more maintainable implementation that speeds up delivery time, improves development experience, and makes it easier to find and address bugs.")),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(220, 53, 69, 0.1)",borderLeft:"4px solid #dc3545",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current State Challenges"),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"1fr",gap:"0.5rem"}},n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Planned releases every 2 weeks (10 business days), 3 days devoted to release preparation"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Configuration values and feature switches prone to errors across environments"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 SDK complexity: Android 103 SDKs, iOS 44 SDKs - risky updates that introduce bugs"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Native-WebView data sharing complexity - maintaining source of truth increasingly challenging"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Build pipelines lack automation (30-40 min builds, manual uploads, manual version input)"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Legacy code intertwined with new modular implementation - difficult to remove safely"))),Object.entries({releaseCycleEfficiency:{label:"Release Cycle Efficiency",trend:"down",currentState:"App has planned releases every 2 weeks (10 business days). 3 of those 10 days are devoted to preparing for the release including: creating final build, running regression tests, bug hunts, uploading to App/Play Stores and awaiting approval.",risks:["30% of release cycle (3/10 days) spent on manual release preparation","Manual build creation process introduces human error risk","Regression testing and bug hunts delay delivery timeline","Manual App/Play Store uploads and approval waiting creates bottlenecks"],actions:["Implement automated build and release pipeline","Add automated regression testing and quality gates","Create automated App/Play Store upload processes","Establish continuous deployment with approval workflows"],correlations:["buildPipelineAutomation","configurationManagement"],timeline:[{date:"2024-01-15",event:"Analyzed 2-week release cycle inefficiencies"},{date:"2024-03-20",event:"Started release automation planning"},{date:"2024-05-01",event:"Initiated automated pipeline proof of concept"}]},configurationManagement:{label:"Configuration Management",trend:"down",currentState:"Configuration values and feature switches are prone to errors. It has been a challenge to maintain these across all environments.",risks:["Configuration values prone to errors across environments","Feature switches difficult to maintain consistently","Environment-specific configuration drift creates issues","Manual configuration deployment increases error likelihood"],actions:["Implement configuration as code with version control","Create centralized configuration management system","Add automated configuration validation and testing","Establish environment parity monitoring and alerts"],correlations:["releaseCycleEfficiency","nativeWebviewDataSharing"],timeline:[{date:"2024-01-20",event:"Identified configuration management as error source"},{date:"2024-03-15",event:"Started configuration audit across environments"}]},sdkManagementComplexity:{label:"SDK Management Complexity",trend:"stable",currentState:"Android has 103 SDKs; iOS has 44. Updating them when required is risky and typically introduces bugs.",risks:["Android: 103 SDKs create significant maintenance overhead","iOS: 44 SDKs still substantial complexity to manage","SDK updates are risky and typically introduce bugs","Complex dependency management across platforms increases tech debt"],actions:["Audit and reduce unnecessary SDK dependencies","Implement automated SDK update testing and validation","Create SDK compatibility matrix and update guidelines","Establish gradual SDK consolidation strategy"],correlations:["releaseCycleEfficiency","buildPipelineAutomation"],timeline:[{date:"2024-02-10",event:"Documented complete SDK inventory (103 Android, 44 iOS)"},{date:"2024-04-05",event:"Started SDK reduction feasibility analysis"}]},nativeWebviewDataSharing:{label:"Native-WebView Data Sharing",trend:"up",currentState:"Increased complexity of data sharing and functionality between native and WebView. Maintaining a source of truth for the data has become an increasing challenge.",risks:["Data sharing complexity between native and WebView components","Source of truth maintenance increasingly challenging","Synchronization issues cause data inconsistencies","Complex state management across hybrid architecture"],actions:["Design unified data architecture with single source of truth","Implement standardized data sharing protocols","Add comprehensive data validation and error handling","Create data flow documentation and governance"],correlations:["configurationManagement","legacyCodeRemoval"],timeline:[{date:"2024-02-25",event:"Identified data sharing as increasing complexity source"},{date:"2024-04-10",event:"Started unified data architecture design"}]},buildPipelineAutomation:{label:"Build Pipeline Automation",trend:"down",currentState:"Build Release Pipelines lack automation unit test coverage, code warning thresholds and automated uploads to App/Play Stores. Engineers must manually input values for App and Build versions. Builds typically run for 30-40 minutes before complete.",risks:["No automation unit test coverage in build pipelines","Missing code warning thresholds and quality gates","Manual App and Build version input creates error risk","30-40 minute build times impact development velocity"],actions:["Implement automated unit test coverage in build pipeline","Add code quality thresholds and automated warnings","Automate version management and App/Play Store uploads","Optimize build performance to reduce 30-40 minute runtime"],correlations:["releaseCycleEfficiency","sdkManagementComplexity"],timeline:[{date:"2024-01-30",event:"Analyzed build pipeline automation gaps"},{date:"2024-03-25",event:"Started build optimization and automation planning"}]},legacyCodeRemoval:{label:"Legacy Code Removal",trend:"stable",currentState:"Legacy code is being replaced with a new modular implementation, however removing the legacy code is difficult as it is intertwined.",risks:["Legacy code intertwined with new modular implementation","Difficult to remove legacy code safely without breaking functionality","Risk of introducing regressions during removal process","Complex dependency analysis required for safe removal"],actions:["Create comprehensive dependency mapping for legacy components","Implement gradual legacy code removal with extensive testing","Establish clear boundaries between legacy and modular code","Develop rollback procedures for legacy removal steps"],correlations:["nativeWebviewDataSharing","buildPipelineAutomation"],timeline:[{date:"2024-01-30",event:"Started legacy code intertwining analysis"},{date:"2024-03-25",event:"Created safe removal strategy framework"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(It,{key:r,score:i[r]},n.a.createElement(Mt,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Jt,null,l.label),n.a.createElement(Lt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.z,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:i[r],onChange:e=>((e,t)=>{o(a=>({...a,[e]:t}))})(r,e.target.value),onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:k(i[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Xt,{score:i[r],onClick:()=>E(r),style:{cursor:"pointer",color:k(i[r])}},i[r]),n.a.createElement(v.r,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),E(r)}}),n.a.createElement(Dt,{expanded:e[r]},e[r]?n.a.createElement(v.j,null):n.a.createElement(v.k,null)))),e[r]&&n.a.createElement(Ot,{expanded:e[r]},n.a.createElement(Kt,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.s,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Maintainability Challenges")),n.a.createElement(Rt,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Maintainability Correlations")),n.a.createElement(jt,null,l.correlations.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement(v.x,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.m,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(Wt,null,l.timeline.map((e,t)=>n.a.createElement(Ht,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Vt,{score:C},n.a.createElement(qt,null,"Overall Maintainability"),n.a.createElement(Ut,{score:C,style:{color:k(z)}},z)))),n.a.createElement(Et,{style:{position:"relative"}},n.a.createElement(vt,null,n.a.createElement(xt,null,n.a.createElement(wt,null,n.a.createElement(kt,{color:"develop"},n.a.createElement(v.m,null)),n.a.createElement(St,null,"Performance")),n.a.createElement(Gt,null,n.a.createElement(Nt,{onClick:()=>{const e=["appStartupPerformance","webViewLoadTime","coreWebVitals","cacheOptimization","networkBandwidthOptimization"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.j,null)),n.a.createElement(Nt,{onClick:()=>{const e=["appStartupPerformance","webViewLoadTime","coreWebVitals","cacheOptimization","networkBandwidthOptimization"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.l,null))))),n.a.createElement(Ct,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(255, 193, 7, 0.1)",borderLeft:"4px solid #ffc107",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"How might we measure and improve the true and perceived performance of the app for The Home Depot customers?"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},'Customer feedback data tells us customers increasingly have a perception that our app is "slow" or "clunky".')),Object.entries({appStartupPerformance:{label:"App Startup Performance",trend:"down",currentState:"App startup performance is dependent on network bandwidth",risks:["Currently using embrace tooling (moments) to measure startup performance","Performance varies significantly based on network bandwidth","Startup times impact first impression of app quality","Need to optimize UX for low bandwidth usage"],actions:["Implement app startup performance optimization strategies","Add progressive loading for critical first-screen content","Optimize initial bundle size and lazy load non-critical components","Implement offline-first startup experience"],correlations:["cacheOptimization","networkBandwidthOptimization"],timeline:[{date:"2024-01-15",event:"Identified startup performance as customer pain point"},{date:"2024-03-20",event:"Implemented embrace tooling for measurement"},{date:"2024-05-01",event:"Started bandwidth optimization initiative"}]},webViewLoadTime:{label:"WebView Load Time",trend:"stable",currentState:"Load time for WebViews is WebView container load to WebView complete callback. Load time for Native screens is Native view container load to first interactable native element load time",risks:["WebView container load to complete callback measurement may not reflect user experience","Native-WebView bridge communication delays","WebView initialization overhead impacts perceived performance","Inconsistent performance between WebView and native screens"],actions:["Optimize WebView initialization and pre-loading","Implement WebView pooling for faster screen transitions","Enhance native-WebView bridge for faster data communication","Add progressive loading indicators for better perceived performance"],correlations:["cacheOptimization","appStartupPerformance"],timeline:[{date:"2024-02-10",event:"Established WebView performance measurement baseline"},{date:"2024-04-05",event:"Started WebView bridge optimization"}]},coreWebVitals:{label:"Core Web Vitals (CWV)",trend:"down",currentState:"Core web vitals are measured against mobile web (on Android only)",risks:["CWV measurements only on Android, no iOS coverage","WebView performance may not match mobile web expectations","Goal is to have WebViews with the same perceived performance as native","Missing comprehensive performance monitoring across platforms"],actions:["Expand CWV measurement to iOS WebViews","Implement comprehensive performance monitoring framework","Optimize WebView rendering to meet native performance standards","Create performance budgets and alerts for CWV metrics"],correlations:["webViewLoadTime","cacheOptimization"],timeline:[{date:"2024-01-20",event:"Started CWV measurement on Android WebViews"},{date:"2024-03-15",event:"Identified performance gap vs native"}]},cacheOptimization:{label:"Cache Optimization",trend:"up",currentState:"We cache select WebView static files and use native rendering UX to improve perceived performance. We manage a standard cache validation TTL (1-3 hours), but would like it to be smarter",risks:["Standard cache TTL (1-3 hours) is not optimized for content types","Limited WebView caching to select screens only","Cache invalidation strategy needs improvement","Want to expand cached WebViews to more screens"],actions:["Implement intelligent cache TTL based on content type and update frequency","Expand WebView caching to additional screens","Add cache preloading for frequently accessed content","Implement cache versioning and smart invalidation"],correlations:["webViewLoadTime","appStartupPerformance"],timeline:[{date:"2024-02-25",event:"Implemented selective WebView static file caching"},{date:"2024-04-10",event:"Started smart cache TTL development"}]},networkBandwidthOptimization:{label:"Network Bandwidth Optimization",trend:"stable",currentState:"We want to optimize UX for low bandwidth usage. We have a native to JavaScript WebView bridge to communicate data that can be leveraged to improve performance",risks:["Poor user experience on low bandwidth connections","Native-WebView bridge underutilized for performance optimization","Network requests not optimized for mobile conditions","Missing adaptive content delivery based on connection quality"],actions:["Implement adaptive content delivery based on network conditions","Leverage native-WebView bridge for efficient data sharing","Add request batching and prioritization","Implement progressive image loading and compression"],correlations:["appStartupPerformance","cacheOptimization"],timeline:[{date:"2024-01-30",event:"Identified low bandwidth UX issues"},{date:"2024-03-25",event:"Started native-WebView bridge optimization"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(It,{key:r,score:c[r]},n.a.createElement(Mt,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Jt,null,l.label),n.a.createElement(Lt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.z,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:c[r],onChange:e=>{s(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:k(c[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Xt,{score:c[r],onClick:()=>E(r),style:{cursor:"pointer",color:k(c[r])}},c[r]),n.a.createElement(v.r,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),E(r)}}),n.a.createElement(Dt,{expanded:e[r]},e[r]?n.a.createElement(v.j,null):n.a.createElement(v.k,null)))),e[r]&&n.a.createElement(Ot,{expanded:e[r]},n.a.createElement(Kt,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.s,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Performance Challenges")),n.a.createElement(Rt,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Performance Correlations")),n.a.createElement(jt,null,l.correlations.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement(v.x,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.m,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(Wt,null,l.timeline.map((e,t)=>n.a.createElement(Ht,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Vt,{score:Math.round(Object.values(c).reduce((e,t)=>e+w(t),0)/Object.values(c).length)},n.a.createElement(qt,null,"Overall Performance"),n.a.createElement(Ut,{score:Math.round(Object.values(c).reduce((e,t)=>e+w(t),0)/Object.values(c).length),style:{color:k(S(Object.values(c).reduce((e,t)=>e+w(t),0)/Object.values(c).length))}},S(Object.values(c).reduce((e,t)=>e+w(t),0)/Object.values(c).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Assessment Framework Goal:"),n.a.createElement("p",{style:{margin:"0.25rem 0 0 0"}},"Seeking recommendations for a best-in-class app performance measurement framework and tooling for both WebView and native needs, considering organizational and operational complexity."))))),n.a.createElement(Et,{style:{position:"relative"}},n.a.createElement(vt,null,n.a.createElement(xt,null,n.a.createElement(wt,null,n.a.createElement(kt,{color:"develop"},n.a.createElement(v.H,null)),n.a.createElement(St,null,"Reliability")),n.a.createElement(Gt,null,n.a.createElement(Nt,{onClick:()=>{const e=["iosCrashFreeRate","androidCrashFreeRate","crashReproducibility","crashImpactAnalysis","reliabilityTooling"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.j,null)),n.a.createElement(Nt,{onClick:()=>{const e=["iosCrashFreeRate","androidCrashFreeRate","crashReproducibility","crashImpactAnalysis","reliabilityTooling"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.l,null))))),n.a.createElement(Ct,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(40, 167, 69, 0.1)",borderLeft:"4px solid #28a745",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current Reliability Tracking"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"We currently track this metric via Embrace tooling."),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"0.5rem"}},n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"iOS:")," 99.85% current (Goal: 99.9% for 2024)"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(40, 167, 69, 0.1)",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Android:")," 99.8% current (Goal: 99.85% for 2024)"))),Object.entries({iosCrashFreeRate:{label:"iOS Crash-Free Rate",trend:"up",currentState:"Currently at 99.85% with a goal of 99.9% for 2024. Tracked via Embrace tooling.",risks:["Currently at 99.85%, need to improve by 0.05% to meet 2024 goal","Small margin for error - even minor crashes impact SLA significantly","iOS-specific crashes may be harder to reproduce in development","Device fragmentation and iOS version compatibility issues"],actions:["Implement proactive crash prevention strategies","Enhanced iOS-specific testing across device variants","Improve crash reproduction tools and processes","Create automated crash trend analysis and alerting"],correlations:["androidCrashFreeRate","crashReproducibility"],timeline:[{date:"2024-01-15",event:"Set 99.9% crash-free rate goal for iOS"},{date:"2024-03-20",event:"Implemented enhanced iOS crash monitoring"},{date:"2024-05-01",event:"Started proactive crash prevention initiatives"}]},androidCrashFreeRate:{label:"Android Crash-Free Rate",trend:"stable",currentState:"Currently at 99.8% with a goal of 99.85% for 2024. Tracked via Embrace tooling.",risks:["Currently at 99.8%, need to improve by 0.05% to meet 2024 goal","Android device fragmentation creates more crash scenarios","OS version compatibility across wide range of devices","Hardware variations impact app stability"],actions:["Enhance Android device testing coverage","Implement crash clustering and root cause analysis","Develop Android-specific stability improvements","Create device-specific crash monitoring dashboards"],correlations:["iosCrashFreeRate","crashImpactAnalysis"],timeline:[{date:"2024-02-10",event:"Set 99.85% crash-free rate goal for Android"},{date:"2024-04-05",event:"Enhanced Android fragmentation testing"}]},crashReproducibility:{label:"Crash Reproducibility",trend:"down",currentState:"Many crashes are difficult to reproduce, making root cause analysis and fixes challenging.",risks:["Difficult to reproduce crashes lead to longer resolution times","Unable to validate fixes without reproduction","Customer impact continues while investigating elusive crashes","Engineering time wasted on unreproducible issues"],actions:["Implement enhanced crash context capture (device state, user journey)","Create crash reproduction environment with varied device configurations","Add user session replay for crash scenarios","Develop crash simulation and testing frameworks"],correlations:["iosCrashFreeRate","androidCrashFreeRate"],timeline:[{date:"2024-01-20",event:"Identified reproducibility as major challenge"},{date:"2024-03-15",event:"Started enhanced crash context capture project"}]},crashImpactAnalysis:{label:"Crash Impact Analysis",trend:"up",currentState:"A typical crash rarely impacts more than 0.05% of customers, but collectively all crashes add up to a crash-free rate below SLAs.",risks:["Individual crashes seem minor but collectively miss SLA targets","Cumulative impact of small crashes creates significant reliability gap","Difficult to prioritize which crashes to fix first","Customer experience degradation from aggregate crash frequency"],actions:["Implement crash impact scoring and prioritization matrix","Create cumulative impact dashboards and alerts","Develop crash frequency vs impact analysis tools","Establish crash remediation prioritization framework"],correlations:["androidCrashFreeRate","reliabilityTooling"],timeline:[{date:"2024-02-25",event:"Analyzed cumulative crash impact on SLA"},{date:"2024-04-10",event:"Started crash prioritization framework development"}]},reliabilityTooling:{label:"Reliability Tooling",trend:"stable",currentState:"Currently using Embrace for reliability tracking. Seeking recommendations for best-in-class toolset.",risks:["Single tool dependency may not provide comprehensive coverage","May be missing advanced reliability measurement capabilities","Limited integration with development and deployment workflows","Potential gaps in proactive reliability monitoring"],actions:["Evaluate comprehensive reliability tooling options","Implement multi-layered reliability monitoring approach","Integrate reliability metrics into CI/CD pipeline","Create custom reliability dashboards and alerting"],correlations:["crashImpactAnalysis","crashReproducibility"],timeline:[{date:"2024-01-30",event:"Started evaluation of reliability tooling options"},{date:"2024-03-25",event:"Initiated best-in-class tooling research"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(It,{key:r,score:m[r]},n.a.createElement(Mt,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Jt,null,l.label),n.a.createElement(Lt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.z,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:m[r],onChange:e=>{d(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:k(m[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Xt,{score:m[r],onClick:()=>E(r),style:{cursor:"pointer",color:k(m[r])}},m[r]),n.a.createElement(v.r,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),E(r)}}),n.a.createElement(Dt,{expanded:e[r]},e[r]?n.a.createElement(v.j,null):n.a.createElement(v.k,null)))),e[r]&&n.a.createElement(Ot,{expanded:e[r]},n.a.createElement(Kt,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.s,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Reliability Challenges")),n.a.createElement(Rt,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Reliability Correlations")),n.a.createElement(jt,null,l.correlations.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement(v.x,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.m,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(Wt,null,l.timeline.map((e,t)=>n.a.createElement(Ht,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Vt,{score:Math.round(Object.values(m).reduce((e,t)=>e+w(t),0)/Object.values(m).length)},n.a.createElement(qt,null,"Overall Reliability"),n.a.createElement(Ut,{score:Math.round(Object.values(m).reduce((e,t)=>e+w(t),0)/Object.values(m).length),style:{color:k(S(Object.values(m).reduce((e,t)=>e+w(t),0)/Object.values(m).length))}},S(Object.values(m).reduce((e,t)=>e+w(t),0)/Object.values(m).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(40, 167, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Tooling Assessment Goal:"),n.a.createElement("p",{style:{margin:"0.25rem 0 0 0"}},"Seeking recommendations for what a best-in-class toolset for reliability measurement would look like, beyond current Embrace implementation."))))),n.a.createElement(Et,{style:{position:"relative"}},n.a.createElement(vt,null,n.a.createElement(xt,null,n.a.createElement(wt,null,n.a.createElement(kt,{color:"develop"},n.a.createElement(v.i,null)),n.a.createElement(St,null,"Testing")),n.a.createElement(Gt,null,n.a.createElement(Nt,{onClick:()=>{const e=["unitTestCoverage","endToEndTestFramework","testInfrastructure","crossTeamTestAccessibility","testToolOptimization"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.j,null)),n.a.createElement(Nt,{onClick:()=>{const e=["unitTestCoverage","endToEndTestFramework","testInfrastructure","crossTeamTestAccessibility","testToolOptimization"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.l,null))))),n.a.createElement(Ct,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"What best practice methodologies and technologies should be put in place for ensuring quality in app?"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"How can we make creating, managing, and running tests as easy as possible for both the app team and other product teams who deliver capabilities through app?")),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(40, 167, 69, 0.1)",borderLeft:"4px solid #28a745",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current Testing Infrastructure"),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"1fr",gap:"0.5rem"}},n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},n.a.createElement("strong",null,"Unit Tests:")," 80% branch coverage requirement - Android (JUnit), iOS (XCTest)"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},n.a.createElement("strong",null,"E2E Tests:")," Bugbear (WebDriverIO wrapper) for browser/app test reusability"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(40, 167, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},n.a.createElement("strong",null,"Testbed:")," SauceLabs with virtual & physical devices"))),Object.entries({unitTestCoverage:{label:"Unit Test Coverage & Standards",trend:"up",currentState:"All new modules are expected to instrument a minimum of 80% branch unit test coverage. Android utilizes JUnit and iOS uses the XCTest framework.",risks:["80% coverage requirement may not ensure quality if tests are not well-designed","Different frameworks (JUnit vs XCTest) create maintenance overhead","Branch coverage alone may miss edge cases and integration scenarios","Enforcement and monitoring of coverage standards needs improvement"],actions:["Implement automated coverage reporting and enforcement in CI/CD","Add mutation testing to validate test quality beyond coverage metrics","Create shared testing standards and best practices across platforms","Implement test quality gates with meaningful assertions validation"],correlations:["endToEndTestFramework","crossTeamTestAccessibility"],timeline:[{date:"2024-01-15",event:"Established 80% branch coverage requirement"},{date:"2024-03-20",event:"Implemented coverage monitoring tools"},{date:"2024-05-01",event:"Started test quality improvement initiative"}]},endToEndTestFramework:{label:"End-to-End Test Framework (Bugbear)",trend:"stable",currentState:"Regression Tests are written in The Home Depot custom tool called Bugbear. Bugbear is a wrapper around WebDriverIO that simplifies test writing, improves traceability, provides standardized configs, and enables test reusability between browser and app.",risks:["Custom tool dependency creates maintenance burden and learning curve","Limited community support compared to mainstream testing frameworks","Potential technical debt if WebDriverIO evolves faster than Bugbear wrapper","May miss out on newer testing technologies and methodologies"],actions:["Evaluate modern testing frameworks against Bugbear reusability benefits","Create comprehensive Bugbear documentation and training materials","Implement Bugbear version management and upgrade planning","Assess hybrid approach with multiple testing tools for different scenarios"],correlations:["testInfrastructure","testToolOptimization"],timeline:[{date:"2024-02-10",event:"Completed Bugbear vs alternatives evaluation"},{date:"2024-04-05",event:"Enhanced Bugbear documentation and training"}]},testInfrastructure:{label:"Test Infrastructure (SauceLabs)",trend:"up",currentState:"The Home Depot currently utilizes SauceLabs to run End-to-End tests with a combination of virtual devices, public & private physical devices hosted in SauceLabs cloud.",risks:["Cloud testing dependency may impact test reliability and speed","Cost scaling with increased test volume and device coverage","Limited control over test environment configuration and debugging","Potential vendor lock-in with SauceLabs platform"],actions:["Implement hybrid testing infrastructure with local device farms","Optimize SauceLabs usage and cost management strategies","Evaluate alternative device cloud providers and capabilities","Create infrastructure monitoring and performance optimization"],correlations:["endToEndTestFramework","crossTeamTestAccessibility"],timeline:[{date:"2024-01-20",event:"Expanded SauceLabs device coverage"},{date:"2024-03-15",event:"Implemented test infrastructure monitoring"}]},crossTeamTestAccessibility:{label:"Cross-Team Test Accessibility",trend:"down",currentState:"Need to make creating, managing, and running tests as easy as possible for both the app team and other product teams who deliver capabilities through the app.",risks:["Complex test setup barriers prevent other product teams from contributing","Lack of self-service testing capabilities creates bottlenecks","Inconsistent testing practices across different product teams","Knowledge silos limit test maintenance and collaboration"],actions:["Create self-service testing platform with guided workflows","Implement test-as-code with version control and collaboration features","Develop testing training programs and documentation for product teams","Build automated test generation tools and templates"],correlations:["unitTestCoverage","testToolOptimization"],timeline:[{date:"2024-02-25",event:"Identified cross-team testing challenges"},{date:"2024-04-10",event:"Started self-service testing platform development"}]},testToolOptimization:{label:"Test Tool Evaluation & Optimization",trend:"stable",currentState:"There may be scenarios where reusability of tests may not be necessary or desired, and having a combination of tools may be preferable. There may also be better tools available that we are not aware of and didnt review.",risks:["Over-reliance on single testing approach may miss optimal solutions","Lack of systematic evaluation of new testing technologies","Missing specialized tools for specific testing scenarios","Potential inefficiencies from suboptimal tool selection"],actions:["Conduct comprehensive testing tool landscape analysis","Implement tool selection framework based on specific use cases","Create proof-of-concept evaluations for promising new tools","Develop hybrid testing strategy with multiple complementary tools"],correlations:["endToEndTestFramework","crossTeamTestAccessibility"],timeline:[{date:"2024-01-30",event:"Started comprehensive testing tool research"},{date:"2024-03-25",event:"Initiated tool evaluation framework development"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(It,{key:r,score:u[r]},n.a.createElement(Mt,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Jt,null,l.label),n.a.createElement(Lt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.z,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:u[r],onChange:e=>{p(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:k(u[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Xt,{score:u[r],onClick:()=>E(r),style:{cursor:"pointer",color:k(u[r])}},u[r]),n.a.createElement(v.r,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),E(r)}}),n.a.createElement(Dt,{expanded:e[r]},e[r]?n.a.createElement(v.j,null):n.a.createElement(v.k,null)))),e[r]&&n.a.createElement(Ot,{expanded:e[r]},n.a.createElement(Kt,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.s,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Testing Challenges")),n.a.createElement(Rt,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Testing Correlations")),n.a.createElement(jt,null,l.correlations.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement(v.x,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.m,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(Wt,null,l.timeline.map((e,t)=>n.a.createElement(Ht,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Vt,{score:Math.round(Object.values(u).reduce((e,t)=>e+w(t),0)/Object.values(u).length)},n.a.createElement(qt,null,"Overall Testing Maturity"),n.a.createElement(Ut,{score:Math.round(Object.values(u).reduce((e,t)=>e+w(t),0)/Object.values(u).length),style:{color:k(S(Object.values(u).reduce((e,t)=>e+w(t),0)/Object.values(u).length))}},S(Object.values(u).reduce((e,t)=>e+w(t),0)/Object.values(u).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Testing Strategy Goals:"),n.a.createElement("div",{style:{margin:"0.5rem 0 0 0"}},n.a.createElement("div",null,"\u2022 Ensure quality through best practice methodologies and technologies"),n.a.createElement("div",null,"\u2022 Make testing easy for app team and other product teams"),n.a.createElement("div",null,"\u2022 Evaluate combination of tools beyond current Bugbear/SauceLabs setup")))))),n.a.createElement(Et,{style:{position:"relative"}},n.a.createElement(vt,null,n.a.createElement(xt,null,n.a.createElement(wt,null,n.a.createElement(kt,{color:"develop"},n.a.createElement(v.n,null)),n.a.createElement(St,null,"Technology")),n.a.createElement(Gt,null,n.a.createElement(Nt,{onClick:()=>{const e=["platformMigrationProgress","multiDeviceStrategy","modularArchitecture","codeHealthMetrics","technologyStackModernization"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.j,null)),n.a.createElement(Nt,{onClick:()=>{const e=["platformMigrationProgress","multiDeviceStrategy","modularArchitecture","codeHealthMetrics","technologyStackModernization"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.l,null))))),n.a.createElement(Ct,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"How should we evolve and/or rebuild our technology and architecture to achieve and maintain a modern approach?"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"The Home Depot is interested in providing engaging experiences across all devices (phone, tablet, watch, auto, etc.) with flexibility and speed to market.")),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(255, 193, 7, 0.1)",borderLeft:"4px solid #ffc107",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current Technology Migration Status"),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"0.75rem"}},n.a.createElement("div",{style:{padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"iOS Progress:"),n.a.createElement("div",{style:{fontSize:"0.85rem",marginTop:"0.5rem"}},"\u2022 Swift: 63%, Objective-C: 26%, Other: 11%",n.a.createElement("br",null),"\u2022 SwiftUI: 15%, UIKit: 85%",n.a.createElement("br",null),"\u2022 iPhone primary, iPad renders iPhone app")),n.a.createElement("div",{style:{padding:"0.75rem",background:"rgba(40, 167, 69, 0.1)",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Android Progress:"),n.a.createElement("div",{style:{fontSize:"0.85rem",marginTop:"0.5rem"}},"\u2022 Kotlin: 59%, Java: 29%, Other: 12%",n.a.createElement("br",null),"\u2022 Jetpack Compose: 7%, XML Fragments: 93%",n.a.createElement("br",null),"\u2022 Phone primary, no tablet/foldable support")))),Object.entries({platformMigrationProgress:{label:"Platform Migration Progress",trend:"up",currentState:"iOS migrating to Swift (63% complete) and SwiftUI (15% complete). Android migrating to Kotlin (59% complete) and Jetpack Compose (7% complete). Heavy utilization of WebViews with openness to technical direction changes.",risks:["iOS: 37% still Objective-C, 85% still UIKit - significant legacy code remains","Android: 41% still Java, 93% still XML Fragments - early in UI modernization","Mixed technology stack creates maintenance complexity and knowledge silos","WebView dependency may limit performance and native platform capabilities"],actions:["Accelerate Swift and Kotlin migration with automated conversion tools","Create SwiftUI and Jetpack Compose adoption roadmap with training programs","Implement mixed codebase management strategies and coding standards","Evaluate WebView vs native implementation trade-offs for key user journeys"],correlations:["technologyStackModernization","modularArchitecture"],timeline:[{date:"2024-01-15",event:"Established migration baselines and targets"},{date:"2024-03-20",event:"Launched Swift/Kotlin training programs"},{date:"2024-05-01",event:"Started SwiftUI/Jetpack Compose pilot projects"}]},multiDeviceStrategy:{label:"Multi-Device Strategy & Support",trend:"down",currentState:"iPhone support primarily; iPad renders iPhone app with unfriendly UI; no Apple Watch app. Android phone support primarily; no explicit support for foldables; removed tablet download capability.",risks:["Limited device support misses growing tablet, watch, and auto markets","iPad experience renders iPhone app creating poor user experience","No support for emerging form factors (foldables, automotive) limits future growth","Device-specific optimization opportunities are being missed"],actions:["Develop comprehensive multi-device strategy and roadmap","Create responsive design system for tablets and large screens","Evaluate Apple Watch, Android Watch, and automotive platform opportunities","Implement adaptive UI frameworks for emerging form factors"],correlations:["modularArchitecture","technologyStackModernization"],timeline:[{date:"2024-02-10",event:"Identified multi-device strategy gap"},{date:"2024-04-05",event:"Started device market opportunity analysis"}]},modularArchitecture:{label:"Modular Architecture Implementation",trend:"stable",currentState:"Future implementation should be modular to support reusability, collaboration, maintenance, readability, testing, faster fixes, easier updates, and refactoring. Isolated features as importable products adhering to cybersecurity requirements.",risks:["Current monolithic architecture limits reusability and collaboration","Lack of clear module boundaries creates tight coupling and maintenance issues","No standardized approach for creating and sharing isolated feature modules","Cybersecurity requirements compliance across modular components needs framework"],actions:["Design and implement modular architecture framework with clear boundaries","Create module development standards and reusability guidelines","Implement feature-as-a-product methodology with import/export capabilities","Establish cybersecurity compliance framework for modular components"],correlations:["codeHealthMetrics","platformMigrationProgress"],timeline:[{date:"2024-01-20",event:"Defined modular architecture requirements and benefits"},{date:"2024-03-15",event:"Started modular framework design phase"}]},codeHealthMetrics:{label:"Code Health & Maintainability Metrics",trend:"up",currentState:"Need to establish measures to understand code health. Focus on making app smaller and more modular with clear separation of responsibilities for enhanced readability and maintainability.",risks:["Lack of standardized code health metrics prevents quality assessment","App size and complexity growth without measurement and control","No visibility into technical debt accumulation and impact","Mixed technology stack makes health assessment challenging"],actions:["Implement comprehensive code health monitoring and metrics dashboard","Establish app size budgets and modular complexity measurements","Create technical debt tracking and remediation prioritization system","Add automated code quality gates and continuous health monitoring"],correlations:["modularArchitecture","platformMigrationProgress"],timeline:[{date:"2024-02-25",event:"Identified need for code health measurement framework"},{date:"2024-04-10",event:"Started code metrics and monitoring tool evaluation"}]},technologyStackModernization:{label:"Technology Stack Modernization",trend:"up",currentState:"Open to considering changes in technical direction to achieve goals. Heavy WebView utilization with migration to Swift/SwiftUI and Kotlin/Jetpack Compose in progress.",risks:["WebView dependency may limit performance and platform-specific capabilities","Technology choices may not align with multi-device strategy requirements","Legacy stack components create maintenance burden and slow development","Rapid technology evolution requires continuous evaluation and adaptation"],actions:["Conduct comprehensive technology stack evaluation against multi-device goals","Create technology roadmap balancing WebView benefits with native capabilities","Implement technology decision framework for future stack choices","Establish continuous technology monitoring and adoption processes"],correlations:["multiDeviceStrategy","platformMigrationProgress"],timeline:[{date:"2024-01-30",event:"Started comprehensive technology stack assessment"},{date:"2024-03-25",event:"Initiated technology roadmap development"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(It,{key:r,score:g[r]},n.a.createElement(Mt,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Jt,null,l.label),n.a.createElement(Lt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.z,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:g[r],onChange:e=>{h(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:k(g[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Xt,{score:g[r],onClick:()=>E(r),style:{cursor:"pointer",color:k(g[r])}},g[r]),n.a.createElement(v.r,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),E(r)}}),n.a.createElement(Dt,{expanded:e[r]},e[r]?n.a.createElement(v.j,null):n.a.createElement(v.k,null)))),e[r]&&n.a.createElement(Ot,{expanded:e[r]},n.a.createElement(Kt,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.s,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Technology Challenges")),n.a.createElement(Rt,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Technology Correlations")),n.a.createElement(jt,null,l.correlations.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement(v.x,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.m,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(Wt,null,l.timeline.map((e,t)=>n.a.createElement(Ht,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Vt,{score:Math.round(Object.values(g).reduce((e,t)=>e+w(t),0)/Object.values(g).length)},n.a.createElement(qt,null,"Overall Technology Maturity"),n.a.createElement(Ut,{score:Math.round(Object.values(g).reduce((e,t)=>e+w(t),0)/Object.values(g).length),style:{color:k(S(Object.values(g).reduce((e,t)=>e+w(t),0)/Object.values(g).length))}},S(Object.values(g).reduce((e,t)=>e+w(t),0)/Object.values(g).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Technology Evolution Goals:"),n.a.createElement("div",{style:{margin:"0.5rem 0 0 0"}},n.a.createElement("div",null,"\u2022 Enable flexibility and speed to market across all devices"),n.a.createElement("div",null,"\u2022 Achieve modular architecture with reusable, isolated features"),n.a.createElement("div",null,"\u2022 Establish code health measures and app size optimization"),n.a.createElement("div",null,"\u2022 Complete platform migrations (Swift, Kotlin, SwiftUI, Jetpack Compose)")))))),n.a.createElement(Et,{style:{position:"relative"}},n.a.createElement(vt,null,n.a.createElement(xt,null,n.a.createElement(wt,null,n.a.createElement(kt,{color:"develop"},n.a.createElement(v.o,null)),n.a.createElement(St,null,"Development Practices")),n.a.createElement(Gt,null,n.a.createElement(Nt,{onClick:()=>{const e=["cicdPipelineAutomation","codeQualityGates","buildArtifactManagement","manualProcessElimination","aiAssistedDevelopment"];t(t=>({...t,...e.reduce((e,t)=>({...e,[t]:!0}),{})}))},title:"Expand All"},n.a.createElement(v.j,null)),n.a.createElement(Nt,{onClick:()=>{const e=["cicdPipelineAutomation","codeQualityGates","buildArtifactManagement","manualProcessElimination","aiAssistedDevelopment"];t(t=>{const a={...t};return e.forEach(e=>delete a[e]),a})},title:"Collapse All"},n.a.createElement(v.l,null))))),n.a.createElement(Ct,null,n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"4px solid #007bff",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Goal: Automated CI/CD state with comprehensive quality gates and AI assistance"),n.a.createElement("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.9rem",opacity:.8}},"Tests, code complexity scanning, duplication detection run automatically per PR. No code modification between dev and production builds.")),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"1rem",background:"rgba(220, 53, 69, 0.1)",borderLeft:"4px solid #dc3545",borderRadius:"0.25rem"}},n.a.createElement("strong",null,"Current State: Fully Manual Process"),n.a.createElement("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"1fr",gap:"0.5rem"}},n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Unit tests manually run locally by developers"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Quality engineering team manually performs application regressions"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 Manual UI end-to-end test triggering with Bugbear"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(220, 53, 69, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 GitHub release branches manually created by engineers"),n.a.createElement("div",{style:{padding:"0.5rem",background:"rgba(255, 193, 7, 0.1)",borderRadius:"0.25rem",fontSize:"0.9rem"}},"\u2022 GitHub actions manually triggered (iOS: auto TestFlight, Android: manual Google Play)"))),Object.entries({cicdPipelineAutomation:{label:"CI/CD Pipeline Automation",trend:"down",currentState:"Currently manual process at every step: manual unit test runs, manual regression testing, manual GitHub release branch creation, manual GitHub actions triggering for builds.",risks:["Fully manual process creates bottlenecks and delays in delivery","Human error risk at every manual step impacts reliability","Inconsistent process execution across different engineers and releases","Lack of automated gates allows quality issues to reach production"],actions:["Implement fully automated CI/CD pipeline with trigger-based automation","Create automated PR validation with test execution and quality checks","Add automated release branch creation and build artifact generation","Implement progressive deployment automation with rollback capabilities"],correlations:["codeQualityGates","buildArtifactManagement"],timeline:[{date:"2024-01-15",event:"Identified fully manual CI/CD process as major bottleneck"},{date:"2024-03-20",event:"Started CI/CD automation planning and tool evaluation"},{date:"2024-05-01",event:"Initiated automated pipeline proof of concept"}]},codeQualityGates:{label:"Automated Code Quality Gates",trend:"down",currentState:"No automated quality gates exist. Need automatic fail if code coverage change diff is less than (x)%. Tests, code complexity scanning, and duplication detection should run automatically for each PR.",risks:["No automated coverage threshold enforcement allows quality regression","Missing code complexity and duplication scanning in PR process","Quality issues discovered late in process increase fix costs","Inconsistent code quality standards across development team"],actions:["Implement automated code coverage diff analysis with configurable thresholds","Add code complexity and duplication scanning to PR pipeline","Create quality gates that automatically fail PRs below standards","Establish comprehensive code quality metrics dashboard and reporting"],correlations:["cicdPipelineAutomation","manualProcessElimination"],timeline:[{date:"2024-02-10",event:"Defined code quality gate requirements and thresholds"},{date:"2024-04-05",event:"Started automated quality scanning tool integration"}]},buildArtifactManagement:{label:"Build Artifact Management",trend:"up",currentState:"iOS artifacts automatically published to TestFlight, but Android requires manual Google Play process. Goal is same binary tested should be published with no code modification between development and production builds.",risks:["Manual Android publishing process creates deployment delays and errors","Different artifacts between testing and production environments","Code modifications between environments introduce untested changes","Inconsistent deployment processes between iOS and Android platforms"],actions:["Automate Android Google Play publishing to match iOS TestFlight process","Implement single binary promotion from dev through production environments","Create artifact validation and signing automation","Establish consistent deployment processes across both platforms"],correlations:["cicdPipelineAutomation","manualProcessElimination"],timeline:[{date:"2024-01-20",event:"Analyzed artifact management inconsistencies between platforms"},{date:"2024-03-15",event:"Started Android publishing automation development"}]},manualProcessElimination:{label:"Manual Process Elimination",trend:"down",currentState:"Comprehensive manual process elimination needed across entire development lifecycle. Should be automated as much as possible with pass/fail gates requiring human intervention only when necessary.",risks:["Manual processes throughout development lifecycle create inefficiency","Human intervention required for routine tasks slows development velocity","Inconsistent process execution leads to quality variations","Manual bottlenecks limit team scaling and delivery capacity"],actions:["Identify and prioritize all manual processes for automation","Implement smart pass/fail gates with human intervention only for exceptions","Create self-service development workflows and tooling","Establish process automation metrics and continuous improvement"],correlations:["cicdPipelineAutomation","aiAssistedDevelopment"],timeline:[{date:"2024-02-25",event:"Conducted comprehensive manual process audit"},{date:"2024-04-10",event:"Started prioritized automation roadmap development"}]},aiAssistedDevelopment:{label:"AI-Assisted Development Integration",trend:"stable",currentState:"Interest in AI assisted development practices. No current implementation of AI tools in development workflow.",risks:["Missing AI productivity opportunities in code generation and review","Competitive disadvantage without AI-assisted development capabilities","Manual code review and testing processes could benefit from AI augmentation","Lack of AI integration strategy for development workflow optimization"],actions:["Evaluate and implement AI-powered code generation and completion tools","Integrate AI-assisted code review and quality analysis","Add AI-powered test case generation and bug detection capabilities","Create AI development assistant integration strategy and training"],correlations:["codeQualityGates","manualProcessElimination"],timeline:[{date:"2024-01-30",event:"Identified AI-assisted development as strategic interest"},{date:"2024-03-25",event:"Started AI development tools evaluation and pilot planning"}]}}).map(t=>{let[r,l]=t;return n.a.createElement(It,{key:r,score:b[r]},n.a.createElement(Mt,{onClick:()=>y(r)},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},n.a.createElement(Jt,null,l.label),n.a.createElement(Lt,{trend:l.trend},"up"===l.trend&&n.a.createElement(v.d,null),"down"===l.trend&&n.a.createElement(v.b,null),"stable"===l.trend&&n.a.createElement(v.z,null))),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},a===r?n.a.createElement("select",{value:b[r],onChange:e=>{f(t=>({...t,[r]:e.target.value}))},onBlur:x,style:{padding:"0.25rem 0.5rem",border:"1px solid #ddd",borderRadius:"4px",fontSize:"0.875rem",backgroundColor:"white",color:k(b[r])},autoFocus:!0},n.a.createElement("option",{value:"H"},"H"),n.a.createElement("option",{value:"M"},"M"),n.a.createElement("option",{value:"L"},"L")):n.a.createElement(Xt,{score:b[r],onClick:()=>E(r),style:{cursor:"pointer",color:k(b[r])}},b[r]),n.a.createElement(v.r,{size:12,style:{cursor:"pointer",opacity:.7},onClick:e=>{e.stopPropagation(),E(r)}}),n.a.createElement(Dt,{expanded:e[r]},e[r]?n.a.createElement(v.j,null):n.a.createElement(v.k,null)))),e[r]&&n.a.createElement(Ot,{expanded:e[r]},n.a.createElement(Kt,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#ff851b"}}),n.a.createElement("strong",null,"Current State"))),n.a.createElement("div",{style:{marginBottom:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderLeft:"3px solid #007bff",borderRadius:"0.25rem",fontSize:"0.9rem"}},l.currentState),n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.s,{style:{color:"#dc3545"}}),n.a.createElement("strong",null,"Development Practice Challenges")),n.a.createElement(Rt,null,l.risks.map((e,t)=>n.a.createElement(Pt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.w,{style:{color:"#2ecc40"}}),n.a.createElement("strong",null,"Recommended Actions")),l.actions.map((e,t)=>n.a.createElement(Bt,{key:t},e))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.x,{style:{color:"#0074d9"}}),n.a.createElement("strong",null,"Practice Correlations")),n.a.createElement(jt,null,l.correlations.map((e,t)=>n.a.createElement(Ft,{key:t},n.a.createElement(v.x,{size:10}),e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()))))),n.a.createElement("div",{style:{marginTop:"1rem"}},n.a.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem"}},n.a.createElement(v.m,{style:{color:"#85144b"}}),n.a.createElement("strong",null,"Timeline")),n.a.createElement(Wt,null,l.timeline.map((e,t)=>n.a.createElement(Ht,{key:t},n.a.createElement("div",{style:{fontSize:"0.75rem",opacity:.7}},new Date(e.date).toLocaleDateString()),n.a.createElement("div",null,e.event)))))))}),n.a.createElement(Vt,{score:Math.round(Object.values(b).reduce((e,t)=>e+w(t),0)/Object.values(b).length)},n.a.createElement(qt,null,"Overall Development Practices Maturity"),n.a.createElement(Ut,{score:Math.round(Object.values(b).reduce((e,t)=>e+w(t),0)/Object.values(b).length),style:{color:k(S(Object.values(b).reduce((e,t)=>e+w(t),0)/Object.values(b).length))}},S(Object.values(b).reduce((e,t)=>e+w(t),0)/Object.values(b).length)),n.a.createElement("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"rgba(0, 123, 255, 0.1)",borderRadius:"0.25rem",fontSize:"0.85rem"}},n.a.createElement("strong",null,"Development Practice Goals:"),n.a.createElement("div",{style:{margin:"0.5rem 0 0 0"}},n.a.createElement("div",null,"\u2022 Achieve fully automated CI/CD with quality gates and coverage thresholds"),n.a.createElement("div",null,"\u2022 Eliminate manual processes with smart pass/fail automation"),n.a.createElement("div",null,"\u2022 Ensure same binary tested is published across environments"),n.a.createElement("div",null,"\u2022 Integrate AI-assisted development practices and tools")))))))))}const _t=s.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Zt=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Yt=Object(s.c)(o.b)`
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
`,ea=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,ta=s.c.div`
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
`,aa=s.c.div`
  flex: 1;
`,ra=s.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,na=s.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,la=s.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ia=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,oa=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,ca=s.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.primary}};
  margin-right: 1rem;
`,sa=s.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,ma=s.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,da=s.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,ua=s.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function pa(){return n.a.createElement(_t,null,n.a.createElement(Zt,null,n.a.createElement(Yt,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(ea,null,n.a.createElement(ta,null,n.a.createElement(v.p,null)),n.a.createElement(aa,null,n.a.createElement(ra,null,"Stabilize Phase"),n.a.createElement(na,null,"Ensuring your software is reliable, robust, and ready for production deployment"))),n.a.createElement(la,null,n.a.createElement(ia,null,n.a.createElement(oa,null,n.a.createElement(ca,{color:"stabilize"},n.a.createElement(v.t,null)),n.a.createElement(sa,null,"STLC")),n.a.createElement(ma,null,"Structured Software Testing Life Cycle that ensures comprehensive coverage.",n.a.createElement(da,null,n.a.createElement(ua,null,"Test planning and strategy"),n.a.createElement(ua,null,"Test case development"),n.a.createElement(ua,null,"Test environment preparation"),n.a.createElement(ua,null,"Test execution and reporting"),n.a.createElement(ua,null,"Test closure and lessons learned")))),n.a.createElement(ia,null,n.a.createElement(oa,null,n.a.createElement(ca,{color:"stabilize"},n.a.createElement(v.q,null)),n.a.createElement(sa,null,"Data Management")),n.a.createElement(ma,null,"Robust handling of data throughout testing and stabilization processes.",n.a.createElement(da,null,n.a.createElement(ua,null,"Test data generation and management"),n.a.createElement(ua,null,"Data migration validation"),n.a.createElement(ua,null,"Database performance testing"),n.a.createElement(ua,null,"Data integrity checks"),n.a.createElement(ua,null,"Data backup and recovery verification")))),n.a.createElement(ia,null,n.a.createElement(oa,null,n.a.createElement(ca,{color:"stabilize"},n.a.createElement(v.E,null)),n.a.createElement(sa,null,"CICD - Stage Gates")),n.a.createElement(ma,null,"Automated quality gates that ensure only stable code progresses to production.",n.a.createElement(da,null,n.a.createElement(ua,null,"Code quality gates (linting, static analysis)"),n.a.createElement(ua,null,"Automated testing gates"),n.a.createElement(ua,null,"Performance benchmarking gates"),n.a.createElement(ua,null,"Security scanning gates"),n.a.createElement(ua,null,"Approval workflows")))),n.a.createElement(ia,null,n.a.createElement(oa,null,n.a.createElement(ca,{color:"stabilize"},n.a.createElement(v.e,null)),n.a.createElement(sa,null,"Resilience Testing")),n.a.createElement(ma,null,"Verifying system stability under stress, unusual conditions, and component failures.",n.a.createElement(da,null,n.a.createElement(ua,null,"Chaos engineering experiments"),n.a.createElement(ua,null,"Load and stress testing"),n.a.createElement(ua,null,"Failover and recovery testing"),n.a.createElement(ua,null,"Degraded service simulation"),n.a.createElement(ua,null,"Long-haul reliability testing")))),n.a.createElement(ia,null,n.a.createElement(oa,null,n.a.createElement(ca,{color:"stabilize"},n.a.createElement(v.I,null)),n.a.createElement(sa,null,"Performance Optimization")),n.a.createElement(ma,null,"Monitoring and enhancing system performance to meet user expectations.",n.a.createElement(da,null,n.a.createElement(ua,null,"Response time optimization"),n.a.createElement(ua,null,"Resource utilization analysis"),n.a.createElement(ua,null,"Database query optimization"),n.a.createElement(ua,null,"Network latency reduction"),n.a.createElement(ua,null,"Caching strategy implementation"))))))}const ga=s.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,ha=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,ba=Object(s.c)(o.b)`
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
`,fa=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
`,ya=s.c.div`
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
`,Ea=s.c.div`
  flex: 1;
`,va=s.c.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,xa=s.c.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.8;
`,wa=s.c.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,ka=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  text-align: left;
`,Sa=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`,Ca=s.c.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:t,color:a}=e;return t.colors[a]||t.colors.deploy}};
  margin-right: 1rem;
`,za=s.c.h2`
  font-size: 1.3rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Aa=s.c.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  opacity: 0.9;
  line-height: 1.6;
  text-align: left;
`,Ia=s.c.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  list-style-type: disc;
  text-align: left;
`,Ma=s.c.li`
  margin-bottom: 0.5rem;
  text-align: left;
`;function $a(){return n.a.createElement(ga,null,n.a.createElement(ha,null,n.a.createElement(ba,{to:"/"},n.a.createElement(v.c,null)," Back to Home Page")),n.a.createElement(fa,null,n.a.createElement(ya,null,n.a.createElement(v.E,null)),n.a.createElement(Ea,null,n.a.createElement(va,null,"Deploy Phase"),n.a.createElement(xa,null,"Safely delivering your software to production and ensuring operational excellence"))),n.a.createElement(wa,null,n.a.createElement(ka,null,n.a.createElement(Sa,null,n.a.createElement(Ca,null,n.a.createElement(v.v,null)),n.a.createElement(za,null,"Feature Rollouts")),n.a.createElement(Aa,null,"Controlled introduction of new capabilities to minimize risk and maximize feedback.",n.a.createElement(Ia,null,n.a.createElement(Ma,null,"Progressive delivery strategies"),n.a.createElement(Ma,null,"Canary deployments"),n.a.createElement(Ma,null,"Blue/Green deployments"),n.a.createElement(Ma,null,"Feature flags and toggles"),n.a.createElement(Ma,null,"Early user feedback loops")))),n.a.createElement(ka,null,n.a.createElement(Sa,null,n.a.createElement(Ca,null,n.a.createElement(v.F,null)),n.a.createElement(za,null,"Observability")),n.a.createElement(Aa,null,"Comprehensive monitoring to understand system behavior and troubleshoot issues.",n.a.createElement(Ia,null,n.a.createElement(Ma,null,"Security Monitors & Alerts"),n.a.createElement(Ma,null,"Allow/Block list"),n.a.createElement(Ma,null,"Application Performance Monitoring"),n.a.createElement(Ma,null,"Distributed tracing"),n.a.createElement(Ma,null,"Logging strategies")))),n.a.createElement(ka,null,n.a.createElement(Sa,null,n.a.createElement(Ca,null,n.a.createElement(v.s,null)),n.a.createElement(za,null,"Contingencies")),n.a.createElement(Aa,null,"Planning for failures and ensuring business continuity in all scenarios.",n.a.createElement(Ia,null,n.a.createElement(Ma,null,"Rollback/Rollforward strategies"),n.a.createElement(Ma,null,"Emergency response planning"),n.a.createElement(Ma,null,"Disaster recovery procedures"),n.a.createElement(Ma,null,"Incident management workflows"),n.a.createElement(Ma,null,"On-call rotation and escalation")))),n.a.createElement(ka,null,n.a.createElement(Sa,null,n.a.createElement(Ca,null,n.a.createElement(v.h,null)),n.a.createElement(za,null,"Analytics")),n.a.createElement(Aa,null,"Leveraging data to inform product decisions and business strategy.",n.a.createElement(Ia,null,n.a.createElement(Ma,null,"User behavior tracking"),n.a.createElement(Ma,null,"Conversion and funnel analysis"),n.a.createElement(Ma,null,"Feature adoption metrics"),n.a.createElement(Ma,null,"Business impact measurement"),n.a.createElement(Ma,null,"Predictive usage modeling")))),n.a.createElement(ka,null,n.a.createElement(Sa,null,n.a.createElement(Ca,null,n.a.createElement(v.E,null)),n.a.createElement(za,null,"Continuous Improvement")),n.a.createElement(Aa,null,"Evolving delivery processes through regular feedback and adaptation.",n.a.createElement(Ia,null,n.a.createElement(Ma,null,"Post-deployment reviews"),n.a.createElement(Ma,null,"Release process optimization"),n.a.createElement(Ma,null,"Deployment frequency metrics"),n.a.createElement(Ma,null,"Cycle time reduction"),n.a.createElement(Ma,null,"DevOps capability maturity assessments"))))))}var Ta=a(513);const Da={maturityCategories:[{name:"Security",unmitigated:8,mitigated:5,inProgress:3,icon:n.a.createElement(v.H,null),color:"security"},{name:"Privacy",unmitigated:6,mitigated:4,inProgress:2,icon:n.a.createElement(v.K,null),color:"highlight"},{name:"Infrastructure",unmitigated:5,mitigated:3,inProgress:2,icon:n.a.createElement(v.G,null),color:"contingencies"},{name:"Authentication",unmitigated:7,mitigated:3,inProgress:4,icon:n.a.createElement(v.y,null),color:"primary"},{name:"Network",unmitigated:4,mitigated:2,inProgress:2,icon:n.a.createElement(v.B,null),color:"analytics"}],topMitigations:[{risk:"SQL Injection Vulnerability",category:"Security",mitigation:"Implemented parameterized queries and input validation",impact:"High",completionDate:"2024-04-15"},{risk:"Clear-Text Password Storage",category:"Authentication",mitigation:"Added password hashing with bcrypt and salting",impact:"High",completionDate:"2024-04-18"},{risk:"Unprotected API Endpoints",category:"Security",mitigation:"Added JWT authentication to all endpoints",impact:"Medium",completionDate:"2024-04-22"},{risk:"Outdated Dependencies",category:"Infrastructure",mitigation:"Implemented dependency scanning and auto-updates",impact:"Medium",completionDate:"2024-04-25"}],pendingMitigations:[{risk:"Insufficient Rate Limiting",category:"Security",mitigation:"Implement API rate limiting and throttling",impact:"Medium",targetDate:"2024-05-15"},{risk:"Weak Password Requirements",category:"Authentication",mitigation:"Enforce stronger password policy",impact:"Medium",targetDate:"2024-05-20"},{risk:"Missing Data Backup Strategy",category:"Infrastructure",mitigation:"Implement automated backup and verification",impact:"High",targetDate:"2024-06-01"}],lastUpdated:"2024-05-06 15:00"},La=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(47, 72, 196, 0.08);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Oa=s.c.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`,Ra=s.c.div`
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
`,Pa=s.c.h2`
  font-size: 1.75rem;
  margin: 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Ba=s.c.h3`
  font-size: 1.25rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  margin: 1.5rem 0 1rem 0;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`,ja=s.c.div`
  margin-bottom: 2rem;
`,Fa=s.c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,Wa=s.c.div`
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  border-radius: 1rem;
  padding: 1.5rem;
`,Ha=s.c.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`,Va=s.c.th`
  text-align: left;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
`,qa=s.c.tr`
  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
`,Ua=s.c.td`
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`,Ka=s.c.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  background: ${e=>{let{impact:t,theme:a}=e;switch(t){case"High":return"rgba(255, 107, 87, 0.15)";case"Medium":return"rgba(255, 224, 102, 0.2)";case"Low":return"rgba(182, 226, 211, 0.15)";default:return"rgba(0, 0, 0, 0.05)"}}};
  color: ${e=>{let{impact:t,theme:a}=e;switch(t){case"High":return a.colors.feature;case"Medium":return"#D4AC0D";case"Low":return"#27AE60";default:return a.colors.text}}};
`,Ga=s.c.div`
  font-size: 0.85rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  margin-top: 1.5rem;
  opacity: 0.7;
  text-align: right;
`,Na=s.c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`,Ja=s.c.div`
  display: flex;
  align-items: center;
  margin: 0 0.75rem;
  font-size: 0.85rem;
`,Xa=s.c.div`
  width: 12px;
  height: 12px;
  background-color: ${e=>{let{color:t}=e;return t}};
  margin-right: 0.5rem;
  border-radius: 2px;
`;function Qa(){const e=Object(s.e)(),{maturityCategories:t,topMitigations:a,pendingMitigations:r,lastUpdated:l}=Da,i=t.map(e=>({name:e.name,Mitigated:e.mitigated,"In Progress":e.inProgress,Unmitigated:e.unmitigated-e.mitigated-e.inProgress,icon:e.icon,color:e.color}));return n.a.createElement(La,null,n.a.createElement(Oa,null,n.a.createElement(Ra,null,n.a.createElement(v.s,null)),n.a.createElement(Pa,null,"Risk Mitigation Roadmap")),n.a.createElement(ja,null,n.a.createElement(Ba,null,"Risk Mitigation Status by Category"),n.a.createElement(Na,null,n.a.createElement(Ja,null,n.a.createElement(Xa,{color:e.colors.primary}),"Mitigated"),n.a.createElement(Ja,null,n.a.createElement(Xa,{color:e.colors.accent}),"In Progress"),n.a.createElement(Ja,null,n.a.createElement(Xa,{color:"#D6D6D6"}),"Unmitigated")),n.a.createElement(z.a,{width:"100%",height:250},n.a.createElement(A.a,{data:i,margin:{top:20,right:30,left:20,bottom:5},barGap:0,barCategoryGap:"20%"},n.a.createElement(Ta.a,{strokeDasharray:"3 3",vertical:!1}),n.a.createElement(I.a,{dataKey:"name",tick:{fontSize:12},tickLine:!1}),n.a.createElement(M.a,{allowDecimals:!1,axisLine:!1,tickLine:!1,tick:{fontSize:12}}),n.a.createElement($.a,null),n.a.createElement(T.a,{dataKey:"Mitigated",stackId:"a",fill:e.colors.primary}),n.a.createElement(T.a,{dataKey:"In Progress",stackId:"a",fill:e.colors.accent}),n.a.createElement(T.a,{dataKey:"Unmitigated",stackId:"a",fill:"#D6D6D6"})))),n.a.createElement(Fa,null,n.a.createElement(Wa,null,n.a.createElement(Ba,null,n.a.createElement(v.H,{style:{color:e.colors.security}}),"Completed Mitigations"),n.a.createElement(Ha,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement(Va,null,"Risk"),n.a.createElement(Va,null,"Category"),n.a.createElement(Va,null,"Impact"),n.a.createElement(Va,null,"Date"))),n.a.createElement("tbody",null,a.map((e,t)=>n.a.createElement(qa,{key:t},n.a.createElement(Ua,null,e.risk),n.a.createElement(Ua,null,e.category),n.a.createElement(Ua,null,n.a.createElement(Ka,{impact:e.impact},e.impact)),n.a.createElement(Ua,null,e.completionDate)))))),n.a.createElement(Wa,null,n.a.createElement(Ba,null,n.a.createElement(v.K,{style:{color:e.colors.highlight}}),"Pending Mitigations"),n.a.createElement(Ha,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement(Va,null,"Risk"),n.a.createElement(Va,null,"Category"),n.a.createElement(Va,null,"Impact"),n.a.createElement(Va,null,"Target Date"))),n.a.createElement("tbody",null,r.map((e,t)=>n.a.createElement(qa,{key:t},n.a.createElement(Ua,null,e.risk),n.a.createElement(Ua,null,e.category),n.a.createElement(Ua,null,n.a.createElement(Ka,{impact:e.impact},e.impact)),n.a.createElement(Ua,null,e.targetDate))))))),n.a.createElement(Ga,null,"Last updated: ",l))}var _a=a(115);const Za=s.c.footer`
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0 0.5rem 0;
  margin-top: 3rem;
`,Ya=s.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`,er=s.c.img`
  height: 36px;
  width: auto;
  margin-right: 2rem;
`,tr=s.c.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
`,ar=s.c.a`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  font-weight: ${e=>{let{theme:t}=e;return t.fonts.weights.medium}};
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,rr=s.c.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`,nr=s.c.a`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,lr=s.c.div`
  width: 100%;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  font-size: 0.95rem;
  margin-top: 2rem;
  opacity: 0.7;
`;function ir(){return n.a.createElement(Za,null,n.a.createElement(Ya,null,n.a.createElement(er,{src:d.a,alt:"Stable Kernel Logo"}),n.a.createElement(tr,null,n.a.createElement(ar,{href:"https://stablekernel.com/services",target:"_blank",rel:"noopener noreferrer"},"Services"),n.a.createElement(ar,{href:"https://stablekernel.com/case-studies",target:"_blank",rel:"noopener noreferrer"},"Case Studies"),n.a.createElement(ar,{href:"https://stablekernel.com/about-us",target:"_blank",rel:"noopener noreferrer"},"About Us"),n.a.createElement(ar,{href:"https://stablekernel.com/resources",target:"_blank",rel:"noopener noreferrer"},"Resources"),n.a.createElement(ar,{href:"https://stablekernel.com/book-a-consultation",target:"_blank",rel:"noopener noreferrer"},"Book a Consultation"),n.a.createElement(ar,{href:"https://stablekernel.com/about-us#careers",target:"_blank",rel:"noopener noreferrer"},"Careers"),n.a.createElement(ar,{href:"https://stablekernel.com/privacy-policy",target:"_blank",rel:"noopener noreferrer"},"Privacy Policy")),n.a.createElement(rr,null,n.a.createElement(nr,{href:"https://twitter.com/stablekernel",target:"_blank",rel:"noopener noreferrer","aria-label":"X (formerly Twitter)"},n.a.createElement(_a.c,null)),n.a.createElement(nr,{href:"https://www.facebook.com/stablekernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},n.a.createElement(_a.a,null)),n.a.createElement(nr,{href:"https://www.linkedin.com/company/stable-kernel/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},n.a.createElement(_a.b,null)))),n.a.createElement(lr,null,"\xa9 ",(new Date).getFullYear()," Stable Kernel. All rights reserved."))}a(506);const or=s.c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;var cr=function(){return n.a.createElement(o.a,{basename:"/risk-portfolio-mgr-thd"},n.a.createElement("div",{className:"App"},n.a.createElement(E,null),n.a.createElement(or,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",component:Me}),n.a.createElement(c.a,{path:"/design",component:Ge}),n.a.createElement(c.a,{path:"/refine",component:st}),n.a.createElement(c.a,{path:"/develop",component:Qt}),n.a.createElement(c.a,{path:"/stabilize",component:pa}),n.a.createElement(c.a,{path:"/deploy",component:$a}),n.a.createElement(c.a,{path:"/maturity-dashboard",component:me}),n.a.createElement(c.a,{path:"/mitigation-roadmap",component:Qa}))),n.a.createElement(ir,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var sr=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,514)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:l,getTTFB:i}=t;a(e),r(e),n(e),l(e),i(e)})};const mr=s.b`
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
`;i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,{theme:{colors:{primary:"#2F48C4",accent:"#FF6B57",background:"#FFFFFF",secondaryBackground:"#F7F8FA",text:"#22223B",highlight:"#A3A3FF",feature:"#FF6B57",story:"#00CFE8",develop:"#A3A3FF",stabilize:"#B6E2D3",deploy:"#FFF3B0",security:"#FFB3B3",analytics:"#FFE066",contingencies:"#D6C1FF"},fonts:{primary:"'Inter', 'Segoe UI', Arial, sans-serif",weights:{regular:400,medium:500,bold:700}}}},n.a.createElement(mr,null),n.a.createElement(cr,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)}),sr()},66:function(e,t,a){e.exports=a.p+"static/media/sk-logo-dark.fbff4e0a.svg"}},[[277,1,2]]]);
//# sourceMappingURL=main.a26752bd.chunk.js.map