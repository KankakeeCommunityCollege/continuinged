"use strict";(self.webpackChunkkcc_continuinged=self.webpackChunkkcc_continuinged||[]).push([[964],{964:function(t,e,n){n.r(e);const a=document.getElementById("JobBoard"),l={responsive:!0,order:[],pageLength:"/"==window.location.pathname?10:25};e.default=function(t){Promise.resolve().then((()=>{const e=function(t){let e=`<div class="col-xl-10 offset-xl-1 mt-3 mb-4">\n  <table id="JobsTable" class="table table-sm table-striped table-hover">\n    <thead>\n      <tr>\n        <th class="all">Job Title:</th>\n        <th>Company:</th>\n        <th>Location:</th>\n        <th>Date Posted:</th>\n        <th class="all">Details:</th>\n        <th class="never">Searchable column</th>\n      </tr>\n    </thead>\n    <tbody>\n      ${function(t){let e="";return t.forEach(((t,n)=>{let[a,l,o,d,r,c,,,,,,,,s,i,h,u,b,f,,,,,,,]=t;a=a.replace(/^(\d{4})-(\d{2})-(\d{2}).+$/,"$2/$3/$1"),e+=`<tr>\n  <td>${l}</td>\n  <td>${r}</td>\n  <td>${d}</td>\n  <td>${a}</td>\n  <td><button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#jobModal${n}">\n      More&nbsp;details...</button>\n  </td>\n  <td>${[o,c,s,i,h,u,b,f].join(", ")}</td>\n</tr>`})),e}(t)}\n    </tbody>\n  </table>\n</div>`;return e}(t);return a.innerHTML="",a.innerHTML=`<div id="JobBoardRow" class="row">${e}</div>`})).then((()=>n.e(757).then(n.bind(n,757)).then((e=>{let{default:n}=e;return n(t)})))).then((()=>n.e(84).then(n.bind(n,84)).then((e=>{let{default:n}=e;return n(t,a)})))).then((()=>{const t=document.getElementById("JobsTable");return $(t).DataTable(l)})).then((()=>document.querySelector('input[aria-controls="JobsTable"]').placeholder="Filter jobs...")).then((()=>{if(document.querySelector("div[data-flyer-src]"))return n.e(800).then(n.bind(n,800)).then((t=>{let{default:e}=t;return e()}))}))}}}]);