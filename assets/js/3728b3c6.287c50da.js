"use strict";(self.webpackChunkinstareel_doc=self.webpackChunkinstareel_doc||[]).push([[4965],{3043:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(4848),t=n(8453);const a={title:"Scrape Posts in Instareel",description:"A guide on how to use the scrapePosts function in Instareel to scrape Instagram posts by username.",keywords:["Instareel","Installation","Javascript","Instagram downloader","instagram","reels downloader","instagram post downloader","instagram reels downloader","Javascript package","Node.js","npm"],sidebar_position:2},r="By Username",i={id:"Download Posts/scrapePosts",title:"Scrape Posts in Instareel",description:"A guide on how to use the scrapePosts function in Instareel to scrape Instagram posts by username.",source:"@site/docs/Download Posts/scrapePosts.md",sourceDirName:"Download Posts",slug:"/Download Posts/scrapePosts",permalink:"/instareel/docs/Download Posts/scrapePosts",draft:!1,unlisted:!1,editUrl:"https://github.com/brahmbeyond/instareel/docs/Download Posts/scrapePosts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Scrape Posts in Instareel",description:"A guide on how to use the scrapePosts function in Instareel to scrape Instagram posts by username.",keywords:["Instareel","Installation","Javascript","Instagram downloader","instagram","reels downloader","instagram post downloader","instagram reels downloader","Javascript package","Node.js","npm"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Scrape by Tag in Instareel",permalink:"/instareel/docs/Download Posts/scrapeByTag"},next:{title:"scrapeWithoutLogin in Instareel",permalink:"/instareel/docs/Download Posts/scrapeWithoutLogin"}},l={},c=[{value:"Function - scrapePosts()",id:"function---scrapeposts",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Download Images with Links Included",id:"download-images-with-links-included",level:3},{value:"Download Images only",id:"download-images-only",level:3},{value:"If you only want Image Links only",id:"if-you-only-want-image-links-only",level:3},{value:"You can also use .then()",id:"you-can-also-use-then",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"by-username",children:"By Username"}),"\n",(0,o.jsx)(s.h2,{id:"function---scrapeposts",children:"Function - scrapePosts()"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Check if the cookies file is already set."})," If not the Check Out ",(0,o.jsx)(s.a,{href:"../Cookies",children:"How to set Cookies"})]}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.strong,{children:"Remember, all functions return promises."})}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"arguments",children:"Arguments"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"scrapePosts"})," takes 3 arguments: ",(0,o.jsx)(s.code,{children:"scrapePosts('brahmbeyond',1, true)"})]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Username"}),"\n",(0,o.jsxs)(s.li,{children:["Number (",(0,o.jsx)(s.code,{children:"Scroll Count"})," - the more scroll count the more posts will be scraped) by default its set to ",(0,o.jsx)(s.code,{children:"1"})]}),"\n",(0,o.jsxs)(s.li,{children:["Boolean (",(0,o.jsx)(s.code,{children:"true/false"}),") - indicating whether you want to download the images or not , by default its set to ",(0,o.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"download-images-with-links-included",children:"Download Images with Links Included"}),"\n",(0,o.jsxs)(s.p,{children:["By default, the second argument is set to ",(0,o.jsx)(s.code,{children:"true"})," (meaning images will be downloaded to a folder named 'Images')."]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Note:"})," The import syntax (",(0,o.jsx)(s.code,{children:"import ... from '@brahmbeyond/instareel'"}),") is used with ES6 modules, which are supported in Node.js version 14 and later, and in most modern browsers. If you're using an older version of Node.js or a runtime that doesn't support ES6 modules, you should use the ",(0,o.jsx)(s.code,{children:"require"})," syntax instead (",(0,o.jsx)(s.code,{children:"const ... = require('@brahmbeyond/instareel')"}),")."]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="insta.js"',children:"import {scrapePosts} from '@brahmbeyond/instareel'\n// const {scrapePosts} = require('@brahmbeyond/instareel')\n\nasync function main() {\n    const images = await scrapePosts('brahmbeyond',4, true);\n    console.log(images); // This will log the array of image URLs  \n}\n\nmain().catch(console.error);\n\n"})}),"\n",(0,o.jsx)(s.h3,{id:"download-images-only",children:"Download Images only"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="insta.js"',children:"import {scrapePosts} from '@brahmbeyond/instareel'\n// const {scrapePosts} = require('@brahmbeyond/instareel')\n\nasync function main() {\n     await scrapePosts('brahmbeyond',1, true); // this will download images only\n\n}\n\nmain().catch(console.error);\n"})}),"\n",(0,o.jsx)(s.h3,{id:"if-you-only-want-image-links-only",children:"If you only want Image Links only"}),"\n",(0,o.jsxs)(s.p,{children:["Set second argument to ",(0,o.jsx)(s.code,{children:"false"})]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="insta.js"',children:"import {scrapePosts} from '@brahmbeyond/instareel'\n// const {scrapePosts} = require('@brahmbeyond/instareel')\n\nasync function main() {\n    const images = await scrapePosts('brahmbeyond',1, false);\n    console.log(images); // This will log the array of image URLs\n}\n\nmain().catch(console.error);\n"})}),"\n",(0,o.jsx)(s.h3,{id:"you-can-also-use-then",children:"You can also use .then()"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",metastring:'title="insta.js"',children:"import {scrapePosts} from '@brahmbeyond/instareel'\n// const {scrapePosts} = require('@brahmbeyond/instareel')\n\nscrapePosts('brahmbeyond',1, true).then(images => {\n    console.log(images); // This will log the array of image URLs\n});\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>i});var o=n(6540);const t={},a=o.createContext(t);function r(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);