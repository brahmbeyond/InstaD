"use strict";(self.webpackChunkinstareel_doc=self.webpackChunkinstareel_doc||[]).push([[5302],{265:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(4848),t=n(8453);const r={title:"Cookies Handling in Instareel",description:"A guide on how to export your login cookies in JSON format and use them with Instareel.",image:"/path/to/your/image.jpg",keywords:["Instareel","Cookies","JSON","Instareel","Installation","Javascript","Instagram downloader","instagram","reels downloader","instagram post downloader","instagram reels downloader","Javascript package","Node.js","npm"],sidebar_position:8},i="Cookies",a={id:"Cookies",title:"Cookies Handling in Instareel",description:"A guide on how to export your login cookies in JSON format and use them with Instareel.",source:"@site/docs/Cookies.md",sourceDirName:".",slug:"/Cookies",permalink:"/instareel/docs/Cookies",draft:!1,unlisted:!1,editUrl:"https://github.com/brahmbeyond/instareel/docs/Cookies.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Cookies Handling in Instareel",description:"A guide on how to export your login cookies in JSON format and use them with Instareel.",image:"/path/to/your/image.jpg",keywords:["Instareel","Cookies","JSON","Instareel","Installation","Javascript","Instagram downloader","instagram","reels downloader","instagram post downloader","instagram reels downloader","Javascript package","Node.js","npm"],sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Scrape Reels in Instareel",permalink:"/instareel/docs/Download Reels/scrapeReels"}},l={},c=[{value:"Instructions",id:"instructions",level:2},{value:"Purpose",id:"purpose",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"cookies",children:"Cookies"}),"\n",(0,s.jsx)(o.h2,{id:"instructions",children:"Instructions"}),"\n",(0,s.jsx)(o.p,{children:"To use this tool, you need to export your login cookies in JSON format and place them in the root directory of the project. Follow these steps:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Export your login cookies in JSON format and save the file as ",(0,s.jsx)(o.code,{children:"exported-cookies.json"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Place the ",(0,s.jsx)(o.code,{children:"exported-cookies.json"})," file in the root directory of the project."]}),"\n",(0,s.jsxs)(o.li,{children:["If you are unsure how to export cookies, refer to the following blog post: ",(0,s.jsx)(o.a,{href:"https://brahmbeyond.code.blog/2024/03/04/how-to-export-your-login-cookies-from-browser-in-json-format/",children:"Blog"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Create a file and name it ",(0,s.jsx)(o.code,{children:"setCookies.js"})," and put this code inside:"]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",metastring:'title="setCookies.js"',children:'const fs = require(\'fs\');\nconst path = require(\'path\');\nconst srcFile = "exported-cookies.json";\nconst targetDir = path.join("node_modules", "@brahmbeyond", "instareel");\nif (!fs.existsSync(srcFile)) {\n    console.error(`Source file ${srcFile} does not exist.`);\n    process.exit(1);\n}\nif (!fs.existsSync(targetDir)) {\n    console.error(`Target directory ${targetDir} does not exist.`);\n    process.exit(1);\n}\nfs.copyFileSync(srcFile, path.join(targetDir, srcFile));\nconsole.log("Cookies all set.");\n\n'})}),"\n",(0,s.jsx)(o.p,{children:"and then run"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"node setCookies.js\n"})}),"\n",(0,s.jsx)(o.h2,{id:"purpose",children:"Purpose"}),"\n",(0,s.jsx)(o.p,{children:"The Instagram features are hidden behind a login wall, requiring cookies for access. By following these instructions, you will be able to provide the necessary cookies for the tool to function properly."})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>a});var s=n(6540);const t={},r=s.createContext(t);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);