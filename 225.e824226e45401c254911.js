(self.webpackChunksiling2k=self.webpackChunksiling2k||[]).push([[225],{9225:(t,n,e)=>{"use strict";e.r(n),e.d(n,{CoreModule:()=>Tn});var o=e(8785),i=e(229),a=e(614),s=e(4933),r=e(5425),c=e(2852),l=e(5366);let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core"]],decls:2,vars:0,consts:[[1,"container-fluid","mb-5","mt-3"]],template:function(t,n){1&t&&(l.TgZ(0,"div",0),l._UZ(1,"router-outlet"),l.qZA())},directives:[c.lC],styles:[""]}),t})();var p=e(5959),u=e(8639),d=e(529),f=e(1041),m=e(2935),h=e(5416),y=e(3588),x=function(t){return t.TEXT_INPUT="TEXT_INPUT",t.SELECT_INPUT="SELECT_INPUT",t.DATE_INPUT="DATE_INPUT",t}({}),Z=e(3936),v=e(1293),b=e(5965),w=e(1116),A=e(4369),T=e(3070),L=e(9550),D=e(3841),C=e(7064),O=e(7307),N=e(9024),I=e(158);function _(t,n){1&t&&(l.ynx(0),l._uU(1," Editing Existing Entry "),l.BQk())}function S(t,n){1&t&&l._uU(0," New Siling1k Entry ")}function q(t,n){1&t&&(l.TgZ(0,"div",8),l._uU(1," Fix invalid inputs before saving. "),l.qZA())}function Q(t,n){1&t&&(l.TgZ(0,"span",22),l._uU(1,"$\xa0"),l.qZA())}function P(t,n){if(1&t&&(l.TgZ(0,"mat-hint",23),l._uU(1),l.ALo(2,"silingEntryTooltip"),l.qZA()),2&t){const t=l.oxw(2).$implicit;l.Q6J("id",null),l.xp6(1),l.hij(" ",l.xi3(2,2,t.controlName,!0)," ")}}function k(t,n){1&t&&(l.TgZ(0,"mat-error"),l._uU(1," Please enter a valid number! "),l.qZA())}function F(t,n){if(1&t){const t=l.EpF();l.ynx(0),l.TgZ(1,"mat-form-field",17),l.TgZ(2,"mat-label"),l._uU(3),l.ALo(4,"silingEntryTooltip"),l.qZA(),l.TgZ(5,"input",18),l.NdJ("focus",function(){l.CHM(t);const n=l.oxw().$implicit;return l.oxw(2).onFocus(n.controlName)}),l.qZA(),l.YNc(6,Q,2,0,"span",19),l.YNc(7,P,3,5,"mat-hint",20),l.YNc(8,k,2,0,"mat-error",21),l.qZA(),l.BQk()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);let e;l.xp6(3),l.Oqu(l.xi3(4,5,t.controlName,!0)),l.xp6(2),l.Q6J("formControlName",t.controlName),l.xp6(1),l.Q6J("ngIf","amount"===t.controlName),l.xp6(1),l.Q6J("ngIf",n.currentFocusControl===t.controlName),l.xp6(1),l.Q6J("ngIf",null==(e=n.entryFg.get(t.controlName))?null:e.hasError("optionalCommaSingleDecimalNumberOnly"))}}function E(t,n){if(1&t&&(l.TgZ(0,"mat-option",27),l.TgZ(1,"mat-icon"),l._uU(2,"account_balance"),l.qZA(),l._uU(3),l.ALo(4,"silingCompanyDisplay"),l.qZA()),2&t){const t=n.$implicit;l.Q6J("value",t),l.xp6(3),l.hij(" ",l.lcZ(4,2,t.name)," ")}}function U(t,n){if(1&t){const t=l.EpF();l.ynx(0),l.TgZ(1,"mat-select",24),l.NdJ("focus",function(){l.CHM(t);const n=l.oxw(2).$implicit;return l.oxw(2).onFocus(n.controlName)}),l.TgZ(2,"mat-option"),l._uU(3,"None"),l.qZA(),l.YNc(4,E,5,4,"mat-option",25),l.TgZ(5,"mat-select-trigger"),l.TgZ(6,"div",26),l.TgZ(7,"mat-icon"),l._uU(8,"account_balance"),l.qZA(),l.TgZ(9,"div"),l._uU(10),l.ALo(11,"silingCompanyDisplay"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.BQk()}if(2&t){const t=n.ngIf,e=l.oxw(2).$implicit,o=l.oxw(2);let i;l.xp6(1),l.Q6J("formControlName",e.controlName),l.xp6(3),l.Q6J("ngForOf",t),l.xp6(6),l.hij(" ",l.lcZ(11,3,null==(i=o.entryFg.get("company"))||null==i.value?null:i.value.name)," ")}}function J(t,n){if(1&t&&(l.TgZ(0,"mat-hint",23),l._uU(1),l.ALo(2,"silingEntryTooltip"),l.qZA()),2&t){const t=l.oxw(2).$implicit;l.Q6J("id",null),l.xp6(1),l.hij(" ",l.xi3(2,2,t.controlName,!0)," ")}}function M(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"mat-form-field",17),l.TgZ(2,"mat-label"),l._uU(3),l.ALo(4,"silingEntryTooltip"),l.qZA(),l.YNc(5,U,12,5,"ng-container",21),l.ALo(6,"async"),l.YNc(7,J,3,5,"mat-hint",20),l.qZA(),l.BQk()),2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(3),l.Oqu(l.xi3(4,3,t.controlName,!0)),l.xp6(2),l.Q6J("ngIf",l.lcZ(6,6,n.data.companies)),l.xp6(2),l.Q6J("ngIf",n.currentFocusControl===t.controlName)}}function $(t,n){if(1&t&&(l.TgZ(0,"mat-hint",23),l._uU(1),l.ALo(2,"silingEntryTooltip"),l.qZA()),2&t){const t=l.oxw(2).$implicit;l.Q6J("id",null),l.xp6(1),l.hij(" ",l.xi3(2,2,t.controlName,!0)," ")}}function Y(t,n){if(1&t){const t=l.EpF();l.ynx(0),l.TgZ(1,"mat-form-field",17),l.TgZ(2,"mat-label"),l._uU(3),l.ALo(4,"silingEntryTooltip"),l.qZA(),l.TgZ(5,"input",28),l.NdJ("focus",function(){l.CHM(t);const n=l.oxw().$implicit;return l.oxw(2).onFocus(n.controlName)}),l.qZA(),l._UZ(6,"mat-datepicker-toggle",29),l._UZ(7,"mat-datepicker",null,30),l.YNc(9,$,3,5,"mat-hint",20),l.qZA(),l.BQk()}if(2&t){const t=l.MAs(8),n=l.oxw().$implicit,e=l.oxw(2);l.xp6(3),l.Oqu(l.xi3(4,5,n.controlName,!0)),l.xp6(2),l.Q6J("matDatepicker",t)("formControlName",n.controlName),l.xp6(1),l.Q6J("for",t),l.xp6(3),l.Q6J("ngIf",e.currentFocusControl===n.controlName)}}function j(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div"),l.ynx(2,15),l.YNc(3,F,9,8,"ng-container",16),l.YNc(4,M,8,8,"ng-container",16),l.YNc(5,Y,10,8,"ng-container",16),l.BQk(),l.qZA(),l.BQk()),2&t){const t=n.$implicit;l.xp6(2),l.Q6J("ngSwitch",t.inputType),l.xp6(1),l.Q6J("ngSwitchCase","TEXT_INPUT"),l.xp6(1),l.Q6J("ngSwitchCase","SELECT_INPUT"),l.xp6(1),l.Q6J("ngSwitchCase","DATE_INPUT")}}function G(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",31),l._uU(2),l.ALo(3,"titlecase"),l.qZA(),l.TgZ(4,"div",32),l._uU(5),l.ALo(6,"silingEntryTooltip"),l.qZA(),l.BQk()),2&t){const t=l.oxw(2);l.xp6(2),l.hij(" ",l.lcZ(3,2,t.currentFocusControl)," "),l.xp6(3),l.hij(" ",l.lcZ(6,4,t.currentFocusControl)," ")}}function B(t,n){1&t&&(l.TgZ(0,"div",33),l._uU(1," Enter the dollar amount for its institution. "),l.qZA())}function H(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",9),l.TgZ(2,"div",10),l.TgZ(3,"form",11),l.YNc(4,j,6,4,"ng-container",12),l.qZA(),l.TgZ(5,"div",13),l.YNc(6,G,7,6,"ng-container",1),l.YNc(7,B,2,0,"ng-template",null,14,l.W1O),l.qZA(),l.qZA(),l.qZA(),l.BQk()),2&t){const t=l.MAs(8),n=l.oxw();l.xp6(3),l.Q6J("formGroup",n.entryFg),l.xp6(1),l.Q6J("ngForOf",n.entryFgStruct),l.xp6(2),l.Q6J("ngIf",n.currentFocusControl)("ngIfElse",t)}}function z(t,n){1&t&&(l.TgZ(0,"div"),l._uU(1," Loading... "),l.qZA())}const W=["company"],R=["date"],X=["companyLoading","companies"];let K=(()=>{class t{constructor(t,n,e){this.dialogRef=t,this.data=n,this.fb=e,this.entryFgStruct=[],this.compDest$=new p.xQ,this.entryFg=this.fb.group(this.createFormGroupObj(n)),this.entryFgStruct=this.createFgStructure(n)}get amountFc(){return this.entryFg.get("amount")}ngOnInit(){this.entryFg.valueChanges.pipe((0,h.R)(this.compDest$),(0,y.j)("amount")).subscribe(t=>{t&&this.amountFc.setValue((t+"").trim(),{emitEvent:!1})})}createFormGroupObj(t){return{company:u.j2(null==t?void 0:t.company,!1,[f.kI.required]),date:u.j2(new Date(null==t?void 0:t.date),!1,[f.kI.required]),amount:u.j2(null==t?void 0:t.amount,!1,[Z.iN])}}createFgStructure(t){const n=[];let e=Object.keys(t);e.length<1&&(e=["company","date","amount"]);for(const o of e)if(X.indexOf(o)<0){let e=x.TEXT_INPUT;W.indexOf(o)>-1?e=x.SELECT_INPUT:R.indexOf(o)>-1&&(e=x.DATE_INPUT),n.push({controlName:o,inputType:e,value:t[o]})}return n}onFocus(t){this.currentFocusControl=t}onNoClick(){this.dialogRef.close()}onSave(){this.dialogRef.close(this.entryFg.getRawValue())}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(m.so),l.Y36(m.WI),l.Y36(f.qu))},t.\u0275cmp=l.Xpm({type:t,selectors:[["new-siling1k-entry-dialog"]],decls:17,vars:8,consts:[["mat-dialog-title","","ngClass.gt-sm","big","fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","space-between start",1,"mfont","my-2"],[4,"ngIf","ngIfElse"],["newEntry",""],["class","text-danger err-header",4,"ngIf"],["fxLayout","row","fxLayoutGap","1rem","fxLayoutAlign","end center"],["mat-flat-button","",3,"disabled","click"],["mat-flat-button","",3,"click"],["isLoading",""],[1,"text-danger","err-header"],["mat-dialog-content","",1,"content-parent"],["fxLayout","row","fxLayoutGap","20px","fxLayoutAlign","space-between start",1,"w-100"],["fxFlex.gt-sm","50",3,"formGroup"],[4,"ngFor","ngForOf"],["fxFlex","50","fxHide","","fxShow.gt-sm","",1,"tooltip-parent"],["noTooltip",""],[3,"ngSwitch"],[4,"ngSwitchCase"],["appearance","standard",1,"w-100"],["type","text","matInput","",3,"formControlName","focus"],["matPrefix","",4,"ngIf"],[3,"id",4,"ngIf"],[4,"ngIf"],["matPrefix",""],[3,"id"],[3,"formControlName","focus"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutGap","5px","fxLayoutAlign","start end"],[3,"value"],["matInput","",3,"matDatepicker","formControlName","focus"],["matSuffix","",3,"for"],["picker",""],["fxLayout","row","fxLayoutAlign","start center",1,"font-weight-bold","subtitle","mfont","mb-2"],["fxLayout","row","fxLayoutAlign","start center",1,"roboto"],["fxLayout","column","fxLayoutAlign","center center"]],template:function(t,n){if(1&t&&(l.TgZ(0,"h1",0),l.TgZ(1,"div"),l.YNc(2,_,2,0,"ng-container",1),l.YNc(3,S,1,0,"ng-template",null,2,l.W1O),l.qZA(),l.YNc(5,q,2,0,"div",3),l.qZA(),l._UZ(6,"hr"),l.YNc(7,H,9,4,"ng-container",1),l.ALo(8,"async"),l._UZ(9,"hr"),l.TgZ(10,"div",4),l.TgZ(11,"button",5),l.NdJ("click",function(){return n.onSave()}),l._uU(12,"Save"),l.qZA(),l.TgZ(13,"button",6),l.NdJ("click",function(){return n.onNoClick()}),l._uU(14,"Cancel"),l.qZA(),l.qZA(),l.YNc(15,z,2,0,"ng-template",null,7,l.W1O)),2&t){const t=l.MAs(4),e=l.MAs(16);l.xp6(2),l.Q6J("ngIf",n.data.company)("ngIfElse",t),l.xp6(3),l.Q6J("ngIf",n.entryFg.touched&&n.entryFg.invalid),l.xp6(2),l.Q6J("ngIf",!1===l.lcZ(8,6,n.data.companyLoading))("ngIfElse",e),l.xp6(4),l.Q6J("disabled",n.entryFg.invalid)}},directives:[m.uh,v.oO,b.xw,b.SQ,b.Wh,w.O5,A.lW,m.xY,f._Y,f.JL,b.yH,f.sg,w.sg,v.b8,w.RF,w.n9,T.KE,T.hX,L.Nt,f.Fj,f.JJ,f.u,T.qo,T.bx,T.TO,D.gD,C.ey,D.$L,O.Hw,N.hl,N.nW,T.R9,N.Mq],pipes:[w.Ov,I.q,I.n,w.rS],styles:["h1[_ngcontent-%COMP%]{font-size:18px;font-weight:500}h1[_ngcontent-%COMP%]   .err-header[_ngcontent-%COMP%]{font-size:13px}.big[_ngcontent-%COMP%]{width:40rem}.tooltip-parent[_ngcontent-%COMP%]{width:23rem}"]}),t})(),V=(()=>{class t{constructor(t){this.dialog=t,this.dialogRef=void 0}getDialog(t){return this.dialogRef=void 0,this.dialogRef=this.dialog.open(K,{data:Object.assign({},t),panelClass:"new-siling1k-entry",hasBackdrop:!0,autoFocus:!0,disableClose:!0}),this.dialogRef}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(m.uw))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),t})();var tt=e(2523);const nt=(0,i.PH)("[Siling/API] Save entry start",(0,i.Ky)()),et=(0,i.PH)("[Siling/API] Save entry successful",(0,i.Ky)()),ot=(0,i.PH)("[Siling/API] Save entry start failure",(0,i.Ky)()),it=(0,i.PH)("[Siling/API] Get siling data by ins. name start",(0,i.Ky)()),at=(0,i.PH)("[Siling/API] Get siling data by ins. name successful",(0,i.Ky)()),st=(0,i.PH)("[Siling/API] Get siling data by ins. name failure",(0,i.Ky)()),rt=(0,i.ZF)("dashboard"),ct=(0,i.P1)(rt,t=>t.entrySaveLoading),lt=(0,i.P1)(rt,t=>t.silingDataLoading),gt=(0,i.P1)(rt,t=>{var n;return null!==(n=t.silingData)&&void 0!==n?n:{}}),pt=(0,i.P1)(rt,t=>t.silingDataBeingFetchedNames),ut=(0,i.P1)(pt,gt,(t,n)=>{const e=Object.keys(n),o={};let i=100;return e.length>0&&(i=Math.floor(100/e.length)),e.forEach((t,e)=>{const i=JSON.parse(JSON.stringify(n[t])).sort((t,n)=>t.date>n.date?1:-1),a=[];i.forEach((t,n,e)=>{const o=i[n-1];let s=0,r=0;o&&t&&(s=t.amount-o.amount,r=s/o.amount),a.push(Object.assign(Object.assign({},t),{profit:s,profitPercent:r}))});const s=JSON.parse(JSON.stringify(a));o[t]=s.reverse()}),{data:o,keys:t,flexNumber:i}}),dt=(0,i.P1)(ut,t=>{const n=[],e=[];t.keys.forEach(n=>{t.data&&t.data[n]&&t.data[n].forEach(t=>{e.push(t.date)})}),e.sort((t,n)=>t>n?1:-1);const o=new Set(e),i=Array.from(o);return t.keys.forEach(e=>{const o=(0,u.fm)(e),a={};t.data[e].forEach(t=>{a[t.date]=t.amount});const s=[];i.forEach((t,n)=>{s.push(void 0!==a[t]?+a[t]:NaN)});let r=[],c=0;i.forEach((t,n)=>{isNaN(s[n])?r.push(c):(c=s[n],r.push(s[n]))}),n.push({name:o,data:r})}),{series:n,chart:{type:"line",height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"},width:"100%"},dataLabels:{enabled:!1},markers:{size:0},title:{text:"Siling Growth by Date",align:"left"},fill:{type:"gradient",gradient:{opacityFrom:.9,opacityTo:.9}},yaxis:{labels:{formatter:function(t){return t?"$"+(+t).toLocaleString(void 0):t+""}},title:{text:"$ Amount"}},xaxis:(a=i,{type:"datetime",categories:[...a]}),tooltip:{shared:!0,y:{formatter:function(t,n){return t?"$"+(0,u.gW)(t):t+""}}},legend:{show:!0,position:"top",horizontalAlign:"center",fontFamily:"Roboto",fontSize:"15px"},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}}};var a}),ft=(0,i.P1)(ut,t=>{let n={},e=0,o=0;return t.keys.forEach((i,a)=>{var s,r;if(t.data[i]){const c=JSON.parse(JSON.stringify(t.data[i]));c.sort((t,n)=>t.date>n.date?1:-1);const l=c[null!==(r=(null===(s=t.data[i])||void 0===s?void 0:s.length)-1)&&void 0!==r?r:0];0===a&&(o=l.date);let g=+(null==l?void 0:l.amount);g=isNaN(g)?0:g,n[i]=g,e+=g,o<(null==l?void 0:l.date)&&(o=l.date)}}),{sumAmount:n,lastUpdated:o,total:e}}),mt=(0,i.ZF)("dashboardUI"),ht=(0,i.P1)(mt,t=>t.currentSelection),yt=(0,i.P1)(mt,t=>t.allTabSelections),xt=(0,i.P1)(yt,ht,(t,n)=>t&&n?t.findIndex(t=>t.id===n.id):0),Zt=(0,i.PH)("[Siling/UI] Set dashboard view tab selection",(0,i.Ky)());var vt=e(8811);let bt=(()=>{class t{constructor(t,n){this.store=t,this.rs=n,this.isEntrySaveLoading$=this.store.select(ct),this.isDashboardDataLoading$=this.store.select(lt),this.dashboardData$=this.store.select(ut),this.chartData$=this.store.select(dt),this.summary$=this.store.select(ft),this.selectTabIndex$=this.store.select(xt),this.dashboardTabs$=this.store.select(yt)}saveSilingEntry(t){this.store.dispatch(nt({payload:t}))}getSilingDataByInsName(t){t&&t.length>0&&this.store.dispatch(it({names:t}))}fetchSilingCompanies(){return this.rs.getCollection("settings/kqpro/companies/all")}fetchShowHideList(){return this.rs.getDocument("settings/kqpro/showHideList")}setTab(t){this.store.dispatch(Zt({tabIndex:t}))}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(i.yh),l.LFG(vt.v))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var wt=e(4350),At=e(4312);function Tt(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",3),l.TgZ(2,"div",4),l.TgZ(3,"div"),l._uU(4,"Last updated:"),l.qZA(),l.TgZ(5,"div"),l._uU(6),l.ALo(7,"dateDisplay"),l.qZA(),l.qZA(),l.TgZ(8,"div",5),l._uU(9," Total: "),l.TgZ(10,"span",6),l._uU(11),l.ALo(12,"localeNumberDisplay"),l.qZA(),l.qZA(),l.qZA(),l.BQk()),2&t){const t=l.oxw(3);l.xp6(6),l.hij(" ",l.xi3(7,2,t.summaryData.lastUpdated,"MDYANDFROMNOW")," "),l.xp6(5),l.hij(" $ ",l.lcZ(12,5,t.summaryData.total)," ")}}function Lt(t,n){if(1&t&&(l.ynx(0),l.YNc(1,Tt,13,7,"ng-container",0),l.BQk()),2&t){const t=l.oxw(2);l.xp6(1),l.Q6J("ngIf",t.summaryData)}}function Dt(t,n){if(1&t&&(l.ynx(0),l.YNc(1,Lt,2,1,"ng-container",2),l.ALo(2,"async"),l.BQk()),2&t){const t=l.oxw(),n=l.MAs(2);l.xp6(1),l.Q6J("ngIf",!1===l.lcZ(2,2,t.loading$))("ngIfElse",n)}}function Ct(t,n){1&t&&(l.TgZ(0,"div",7),l._uU(1," Calculating summary... "),l.qZA())}let Ot=(()=>{class t{constructor(){this.summaryData=void 0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core-summary"]],inputs:{summaryData:"summaryData",loading$:"loading$"},decls:3,vars:1,consts:[[4,"ngIf"],["loading",""],[4,"ngIf","ngIfElse"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",1,"roboto"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","5px",1,"text-muted"],[1,"total"],[1,"green"],["fxLayout","row","fxLayoutAlign","center center"]],template:function(t,n){1&t&&(l.YNc(0,Dt,3,4,"ng-container",0),l.YNc(1,Ct,2,0,"ng-template",null,1,l.W1O)),2&t&&l.Q6J("ngIf",n.loading$)},directives:[w.O5,b.xw,b.Wh,b.SQ],pipes:[w.Ov,wt.o,At.i7],styles:[".total[_ngcontent-%COMP%]{font-weight:300;font-size:30px;letter-spacing:1px}.green[_ngcontent-%COMP%]{color:#00b300}"]}),t})();var Nt=e(7173),It=e(6184);const _t=["chart"];function St(t,n){if(1&t&&(l.ynx(0),l._UZ(1,"apx-chart",1,2),l.BQk()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("series",t.chartData.series)("chart",t.chartData.chart)("dataLabels",t.chartData.dataLabels)("markers",t.chartData.markers)("title",t.chartData.title)("fill",t.chartData.fill)("yaxis",t.chartData.yaxis)("xaxis",t.chartData.xaxis)("tooltip",t.chartData.tooltip)("legend",t.chartData.legend)("grid",t.chartData.grid)}}let qt=(()=>{class t{constructor(){this.chartData=void 0}ngOnChanges(){this.initChartData(),console.log("new chart data")}ngOnInit(){}initChartData(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-shared-line-chart"]],viewQuery:function(t,n){if(1&t&&l.Gf(_t,5),2&t){let t;l.iGM(t=l.CRH())&&(n.chart=t.first)}},inputs:{chartData:"chartData"},features:[l.TTD],decls:1,vars:1,consts:[[4,"ngIf"],[3,"series","chart","dataLabels","markers","title","fill","yaxis","xaxis","tooltip","legend","grid"],["chart",""]],template:function(t,n){1&t&&l.YNc(0,St,3,11,"ng-container",0),2&t&&l.Q6J("ngIf",n.chartData)},directives:[w.O5,It.x],styles:[""],changeDetection:0}),t})();var Qt=e(4333);let Pt=(()=>{class t{constructor(){this.text=void 0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-shared-popover"]],inputs:{text:"text"},decls:4,vars:6,consts:[["popoverPlacement","top-right",1,"popover-tooltip",3,"popover","popoverOnHover","popoverCloseOnClickOutside","popoverCloseOnMouseOutside","popoverDisabled","popoverAnimation"],[1,"parent"]],template:function(t,n){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"mat-icon"),l._uU(3,"help_outline"),l.qZA(),l.qZA(),l.qZA()),2&t&&l.Q6J("popover",n.text+"")("popoverOnHover",!1)("popoverCloseOnClickOutside",!0)("popoverCloseOnMouseOutside",!1)("popoverDisabled",!1)("popoverAnimation",!0)},directives:[Qt.k5,O.Hw],styles:[".popover-tooltip[_ngcontent-%COMP%]{display:flex;cursor:pointer}.popover-tooltip[_ngcontent-%COMP%]:focus   mat-icon.mat-icon[_ngcontent-%COMP%], .popover-tooltip[_ngcontent-%COMP%]:hover   mat-icon.mat-icon[_ngcontent-%COMP%]{color:#000}mat-icon.mat-icon[_ngcontent-%COMP%]{color:#33333357;font-size:17px}.parent[_ngcontent-%COMP%]{height:19px}"]}),t})();const kt=function(t){return{"border-btn-none":t,"list-group-item roboto":!0}};function Ft(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",1),l.ALo(2,"profitGainBgClass"),l.TgZ(3,"div",2),l.TgZ(4,"div",3),l.TgZ(5,"div"),l._uU(6),l.ALo(7,"dateDisplay"),l.qZA(),l.TgZ(8,"div"),l._UZ(9,"app-shared-popover",4),l.qZA(),l.qZA(),l.TgZ(10,"div"),l._uU(11),l.ALo(12,"dateFromNow"),l.qZA(),l.qZA(),l.TgZ(13,"div",5),l.TgZ(14,"div",6),l._uU(15),l.ALo(16,"localeNumberDisplay"),l.qZA(),l.TgZ(17,"div",7),l.ALo(18,"numberGainClass"),l._uU(19),l.ALo(20,"profitPercent"),l.qZA(),l.qZA(),l.TgZ(21,"div",8),l._uU(22),l.ALo(23,"profit"),l.qZA(),l.qZA(),l.BQk()),2&t){const t=l.oxw();l.xp6(1),l.Tol(l.lcZ(2,13,t.entryDetail.profitPercent)),l.Q6J("ngClass",l.VKq(28,kt,t.isLast)),l.xp6(5),l.hij(" ",t.entryDetail.date?l.xi3(7,15,t.entryDetail.date,"MDY"):"NO DATE"," "),l.xp6(3),l.Q6J("text",t.entryDetail.date),l.xp6(2),l.hij(" ",l.lcZ(12,18,t.entryDetail.date)," "),l.xp6(4),l.hij(" $",l.lcZ(16,20,t.entryDetail.amount)," "),l.xp6(2),l.Tol("gains-rate numbers med-number spacing-half "+l.lcZ(18,22,t.entryDetail.profitPercent)),l.Q6J("title",t.entryDetail.profitPercent),l.xp6(2),l.hij(" ",l.lcZ(20,24,t.entryDetail.profitPercent)," "),l.xp6(2),l.Q6J("title",t.entryDetail.profit),l.xp6(1),l.hij(" ",l.lcZ(23,26,t.entryDetail.profit)," ")}}let Et=(()=>{class t{constructor(){this.entryDetail=void 0,this.isLast=!1}ngOnChanges(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core-siling-column-entry"]],inputs:{entryDetail:"entryDetail",isLast:"isLast"},features:[l.TTD],decls:1,vars:1,consts:[[4,"ngIf"],["fxLayout","column","fxLayoutAlign","start center","fxLayoutGap","10px",3,"ngClass"],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100","roboto","meta-data"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","5px",1,"mb-1"],[3,"text"],["fxLayout.gt-sm","row","fxLayout","column","fxLayoutAlign.gt-sm","space-between center","fxLayoutAlign","start center",1,"w-100"],[1,"dollar-amount","numbers","med-number"],[3,"title"],["fxLayout","row","fxLayoutAlign","start center",1,"text-muted","numbers","small-number","w-100",3,"title"]],template:function(t,n){1&t&&l.YNc(0,Ft,24,30,"ng-container",0),2&t&&l.Q6J("ngIf",n.entryDetail)},directives:[w.O5,b.xw,b.Wh,b.SQ,w.mk,v.oO,Pt],pipes:[At.PD,wt.o,wt.G,At.i7,At.qw,At.pY,At.u],styles:[".gains-rate[_ngcontent-%COMP%]{text-align:right}.dollar-amount[_ngcontent-%COMP%]{text-align:left;padding-left:0;letter-spacing:.5px}.med-number[_ngcontent-%COMP%]{font-size:25px}.spacing-half[_ngcontent-%COMP%]{letter-spacing:.5px}.numbers[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:300}.small-number[_ngcontent-%COMP%]{font-size:16px}.positive[_ngcontent-%COMP%]{color:#00b33c}.negative[_ngcontent-%COMP%]{color:#b32400}.no-change[_ngcontent-%COMP%]{color:#888}.pos-bg[_ngcontent-%COMP%]{background-color:#e1f5e154}.neg-bg-1[_ngcontent-%COMP%]{background-color:#f7e5e536}.neg-bg-2[_ngcontent-%COMP%]{background-color:#f7e5e59e}.neg-bg-3[_ngcontent-%COMP%]{background-color:#f7e5e5d9}.no-change-bg[_ngcontent-%COMP%]{background-color:#cccccc0f}.meta-data[_ngcontent-%COMP%]{font-size:14px}.border-btn-none[_ngcontent-%COMP%]{border-bottom:0}"]}),t})();function Ut(t,n){if(1&t&&(l.ynx(0),l._UZ(1,"app-core-siling-column-entry",9),l.BQk()),2&t){const t=n.$implicit,e=n.last;l.xp6(1),l.Q6J("entryDetail",t)("isLast",e)}}function Jt(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"ul",7),l.YNc(2,Ut,2,2,"ng-container",8),l.qZA(),l.BQk()),2&t){const t=l.oxw();l.xp6(2),l.Q6J("ngForOf",t.silingData)}}function Mt(t,n){1&t&&(l.TgZ(0,"div",10),l._uU(1," No data returned. "),l.qZA())}const $t=function(t){return{"background-color":t}};let Yt=(()=>{class t{constructor(){this.silingCompanyId=void 0,this.silingData=[]}ngOnChanges(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core-siling-column"]],inputs:{silingCompanyId:"silingCompanyId",silingData:"silingData"},features:[l.TTD],decls:11,vars:9,consts:[[1,"card","text-left","border-secondary"],[1,"img-center","fixed-img-height"],["alt","SiLing Co. Img","onerror","this.src = 'assets/banner/bank5.jpg'",1,"card-img-top","img-fixed-height",3,"src","ngStyle"],[1,"card-header","header"],[1,"panel-header","page-anchor"],[4,"ngIf","ngIfElse"],["noData",""],[1,"list-group"],[4,"ngFor","ngForOf"],[3,"entryDetail","isLast"],["fxLayout","row","fxLayoutAlign","center center",1,"px-3","py-3"]],template:function(t,n){if(1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l._UZ(2,"img",2),l.qZA(),l.TgZ(3,"div",3),l.TgZ(4,"span",4),l._uU(5),l.ALo(6,"titlecase"),l.qZA(),l.qZA(),l.TgZ(7,"div"),l.YNc(8,Jt,3,1,"ng-container",5),l.YNc(9,Mt,2,0,"ng-template",null,6,l.W1O),l.qZA(),l.qZA()),2&t){const t=l.MAs(10);l.xp6(2),l.Q6J("src","assets/banner/"+n.silingCompanyId+".jpg",l.LSH)("ngStyle",l.VKq(7,$t,"fidelity"===n.silingCompanyId?"#67941e":"#fff")),l.xp6(3),l.hij(" ",l.lcZ(6,5,n.silingCompanyId?n.silingCompanyId:"Unknown Siling ID")," "),l.xp6(3),l.Q6J("ngIf",n.silingData&&n.silingData.length>0)("ngIfElse",t)}},directives:[w.PC,v.Zl,w.O5,w.sg,Et,b.xw,b.Wh],pipes:[w.rS],styles:[".img-fixed-height[_ngcontent-%COMP%]{max-height:80px;max-width:300px}.img-center[_ngcontent-%COMP%]{text-align:center}.fid-background-green[_ngcontent-%COMP%]{background-color:#67941e}.panel-header[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:24px}.card-header.header[_ngcontent-%COMP%]{color:#8c8c8c}.fixed-img-height[_ngcontent-%COMP%]{height:5rem}"]}),t})();var jt=e(3817);const Gt=["tabGroup"];function Bt(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",12),l._UZ(2,"app-shared-line-chart",13),l.ALo(3,"async"),l.qZA(),l.BQk()),2&t){const t=l.oxw(2);l.xp6(2),l.Q6J("chartData",l.lcZ(3,1,t.cs.chartData$))}}function Ht(t,n){if(1&t&&(l.TgZ(0,"section",10),l.YNc(1,Bt,4,3,"ng-container",11),l.ALo(2,"async"),l.qZA()),2&t){const t=l.oxw(),n=l.MAs(20);l.xp6(1),l.Q6J("ngIf",!1===l.lcZ(2,2,t.cs.isDashboardDataLoading$))("ngIfElse",n)}}function zt(t,n){if(1&t&&(l.TgZ(0,"mat-icon",18),l._uU(1),l.qZA(),l._uU(2)),2&t){const t=l.oxw().$implicit;l.xp6(1),l.Oqu(t.tabIcon),l.xp6(1),l.hij(" ",t.display," ")}}function Wt(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",21),l._UZ(2,"app-core-siling-column",22),l.qZA(),l.BQk()),2&t){const t=n.$implicit,e=l.oxw(2).ngIf;l.xp6(1),l.Q6J("fxFlex",e.flexNumber+"%"),l.xp6(1),l.Q6J("silingCompanyId",t)("silingData",e.data[t])}}function Rt(t,n){if(1&t&&(l.ynx(0),l.YNc(1,Wt,3,3,"ng-container",7),l.BQk()),2&t){const t=l.oxw().ngIf;l.xp6(1),l.Q6J("ngForOf",t.keys)}}function Xt(t,n){if(1&t&&(l.ynx(0),l.YNc(1,Rt,2,1,"ng-container",11),l.BQk()),2&t){const t=n.ngIf;l.oxw(4);const e=l.MAs(22);l.xp6(1),l.Q6J("ngIf",t.keys&&t.keys.length>0)("ngIfElse",e)}}function Kt(t,n){if(1&t&&(l.ynx(0),l.YNc(1,Xt,2,2,"ng-container",20),l.ALo(2,"async"),l.BQk()),2&t){const t=l.oxw(3);l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,t.cs.dashboardData$))}}function Vt(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"section",19),l.YNc(2,Kt,3,3,"ng-container",11),l.ALo(3,"async"),l.qZA(),l.BQk()),2&t){const t=l.oxw(2),n=l.MAs(20);l.xp6(2),l.Q6J("ngIf",!1===l.lcZ(3,2,t.cs.isDashboardDataLoading$))("ngIfElse",n)}}function tn(t,n){1&t&&(l.ynx(0),l._uU(1," Table "),l.BQk())}function nn(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"mat-tab",14),l.YNc(2,zt,3,2,"ng-template",15),l.ynx(3,16),l.YNc(4,Vt,4,4,"ng-container",17),l.YNc(5,tn,2,0,"ng-container",17),l.BQk(),l.qZA(),l.BQk()),2&t){const t=n.$implicit;l.xp6(1),l.Q6J("label",t.display),l.xp6(2),l.Q6J("ngSwitch",t.id),l.xp6(1),l.Q6J("ngSwitchCase","expandedView"),l.xp6(1),l.Q6J("ngSwitchCase","compactView")}}function en(t,n){1&t&&(l.TgZ(0,"div",23),l._UZ(1,"app-shared-loading"),l.qZA())}function on(t,n){1&t&&(l.TgZ(0,"div"),l._uU(1," No data to show. "),l.qZA())}let an=(()=>{class t{constructor(t,n,e,o,i){this.neds=t,this.as=n,this.cs=e,this.router=o,this.route=i,this.showGraph=d.N.showGraph,this.compDest$=new p.xQ}ngOnInit(){}ngAfterViewInit(){console.log(this.viewTabGroup)}onNewEntryClick(){this.as.fetchSilingCompanies();const t={amount:void 0,company:void 0,companies:this.as.getSilingCompanies$,companyLoading:this.as.getSilingCompanyLoading$,date:(new Date).getTime()};this.neds.getDialog(t).afterClosed().subscribe(t=>{if(t&&t.amount&&t.company&&t.date){const n={amount:(0,u.G5)(t.amount),company:t.company.name.toLowerCase(),date:t.date.getTime(),id:void 0};this.cs.saveSilingEntry(n)}})}onTabChange(t){var n;const e=null!==(n=t.index)&&void 0!==n?n:0;this.router.navigate(["./"],{queryParams:{tabIndex:e}})}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(V),l.Y36(tt.l),l.Y36(bt),l.Y36(c.F0),l.Y36(c.gz))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core-home"]],viewQuery:function(t,n){if(1&t&&l.Gf(Gt,5),2&t){let t;l.iGM(t=l.CRH())&&(n.viewTabGroup=t.first)}},decls:23,vars:11,consts:[[1,""],["mat-button","","color","primary",3,"click"],["class","w-100 pt-3 pb-3","fxLayout","row","fxLayoutAlign","center center",4,"ngIf"],[1,"pb-3","pt-3"],[3,"summaryData","loading$"],["mat-align-tabs","center","animationDuration","0ms",1,"pb-3","pt-3","siling-tab-group",3,"selectedIndex","selectedTabChange"],["tabGroup",""],[4,"ngFor","ngForOf"],["isLoading",""],["noDataShown",""],["fxLayout","row","fxLayoutAlign","center center",1,"w-100","pt-3","pb-3"],[4,"ngIf","ngIfElse"],[1,"chart-shell"],[3,"chartData"],[3,"label"],["mat-tab-label",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"tab-icon","mr-2"],["fxLayout.gt-sm","row","fxLayout","column","fxLayoutAlign.gt-sm","center start","fxLayoutAlign","start center","fxLayoutGap.gt-sm","10px","fxLayoutGap","5px",1,"pt-3","pb-3"],[4,"ngIf"],[1,"",3,"fxFlex"],[3,"silingCompanyId","silingData"],[1,"w-100"]],template:function(t,n){1&t&&(l.TgZ(0,"section"),l.TgZ(1,"div",0),l.TgZ(2,"button",1),l.NdJ("click",function(){return n.onNewEntryClick()}),l.TgZ(3,"mat-icon"),l._uU(4,"add"),l.qZA(),l.TgZ(5,"span"),l._uU(6," New "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(7,"hr"),l.YNc(8,Ht,3,4,"section",2),l._UZ(9,"hr"),l.TgZ(10,"section",3),l._UZ(11,"app-core-summary",4),l.ALo(12,"async"),l.qZA(),l._UZ(13,"hr"),l.TgZ(14,"mat-tab-group",5,6),l.NdJ("selectedTabChange",function(t){return n.onTabChange(t)}),l.ALo(16,"async"),l.YNc(17,nn,6,4,"ng-container",7),l.ALo(18,"async"),l.qZA(),l.YNc(19,en,2,0,"ng-template",null,8,l.W1O),l.YNc(21,on,2,0,"ng-template",null,9,l.W1O)),2&t&&(l.xp6(8),l.Q6J("ngIf",n.showGraph),l.xp6(3),l.Q6J("summaryData",l.lcZ(12,5,n.cs.summary$))("loading$",n.cs.isDashboardDataLoading$),l.xp6(3),l.Q6J("selectedIndex",l.lcZ(16,7,n.cs.selectTabIndex$)),l.xp6(3),l.Q6J("ngForOf",l.lcZ(18,9,n.cs.dashboardTabs$)))},directives:[A.lW,O.Hw,w.O5,Ot,Nt.SP,w.sg,b.xw,b.Wh,qt,Nt.uX,Nt.uD,w.RF,w.n9,b.SQ,b.yH,Yt,jt.N],pipes:[w.Ov],styles:[".chart-shell[_ngcontent-%COMP%]{width:calc(100% - 10rem)}"]}),t})();var sn=e(3148),rn=e(611),cn=e(4019),ln=e(9223);const gn=[{path:"",component:g,children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:an,data:{pageTitle:"Summary"}}],resolve:{resolverFired:(()=>{class t{constructor(t,n){this.cs=t,this.ss=n,this.getCompaniesBeingDisplayed$=(0,sn.D)({allCompanies:this.cs.fetchSilingCompanies(),showHideList:this.cs.fetchShowHideList()})}resolve(t,n){return console.log("resolver to get company data fired"),this.getCompaniesBeingDisplayed$.pipe((0,rn.q)(1),(0,cn.b)(t=>{const n=[];let e=[],o=[];t.showHideList&&t.showHideList.hiding&&t.showHideList.hiding.length>-1&&(e=t.showHideList.hiding),t.showHideList&&t.showHideList.showing&&t.showHideList.showing.length>-1&&(o=t.showHideList.showing),t.allCompanies.forEach(t=>{e.findIndex(n=>n.name===t.name)<0&&n.push(t)}),n.sort((t,n)=>o.findIndex(n=>n.id===t.id)>o.findIndex(t=>t.id===n.id)?1:-1);const i=n.map(t=>t.name.toLowerCase());this.cs.getSilingDataByInsName(i)}))}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(bt),l.LFG(ln.g))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];let pn=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[c.Bz.forChild(gn)],c.Bz]}),t})();var un=e(3982),dn=e(4689),fn=e(9996),mn=e(7727),hn=e(878),yn=e(1447);const xn=[(()=>{class t{constructor(t,n,e){this.actions$=t,this.ts=n,this.rs=e,this.saveSilingEntry$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(nt),(0,un.zg)(t=>{const n=t.payload,e=this.rs.addEntryToCollection(n),o=Object.assign(Object.assign({},n),{id:e.id});return e.operationObs.then(t=>(this.ts.getSuccess("Entry added successfully."),et({payload:o,date:(new Date).getTime()}))).catch(t=>ot({errMsg:t}))}))),this.getSilingDataByNames$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(it),(0,dn.w)(t=>{const n={};return t.names.forEach(t=>{n[t]=this.rs.getDataByCollectionName(t)}),(0,sn.D)(n).pipe((0,fn.U)(t=>(this.ts.getSuccess("Loaded Siling data successfully."),at({payload:t,date:(new Date).getTime()}))),(0,mn.K)(t=>(0,hn.of)(st({errMsg:t}))))})))}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(o.eX),l.LFG(yn.M),l.LFG(vt.v))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),t})()],Zn=(0,i.Lq)({entrySaveLoading:!1,entryApiErr:!1,entryToSave:void 0,entryApiErrMsg:void 0,silingDataBeingFetchedNames:[],silingDataErr:!1,silingDataLoading:!1,silingData:void 0,firstTimeLoading:!0},(0,i.on)(nt,(t,{payload:n})=>Object.assign(Object.assign({},t),{entrySaveLoading:!0,entryToSave:n})),(0,i.on)(et,(t,{payload:n})=>Object.assign(Object.assign({},t),{entryApiErr:!1,entryApiErrMsg:void 0,entrySaveLoading:!1,entryToSave:n})),(0,i.on)(ot,(t,{errMsg:n})=>Object.assign(Object.assign({},t),{entryApiErr:!0,entryApiErrMsg:n,entrySaveLoading:!1})),(0,i.on)(it,(t,{names:n})=>Object.assign(Object.assign({},t),{silingDataBeingFetchedNames:n,silingDataLoading:!0})),(0,i.on)(at,(t,{payload:n})=>Object.assign(Object.assign({},t),{silingDataLoading:!1,silingData:n,silingDataErrMsg:void 0,silingDataErr:!1,firstTimeLoading:!1})),(0,i.on)(st,(t,{errMsg:n})=>Object.assign(Object.assign({},t),{silingDataLoading:!1,silingDataErrMsg:n,silingDataErr:!0,firstTimeLoading:!0}))),vn=(0,i.Lq)({allTabSelections:[{display:"Expanded View",id:"expandedView",index:0,tabIcon:"collections"},{display:"Compact View",id:"compactView",index:1,tabIcon:"table_chart"}],currentSelection:void 0},(0,i.on)(Zt,(t,{tabIndex:n})=>{let e;return t.allTabSelections&&(e=t.allTabSelections.find(t=>t.index+""===n)),Object.assign(Object.assign({},t),{currentSelection:e})}));var bn=e(3884),wn=e(2718);const An=[(()=>{class t{constructor(t,n,e,i){this.actions$=t,this.ts=n,this.rs=e,this.routerService=i,this.setTabSelection$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(bn.CE),(0,o.IC)(()=>this.routerService.queryParams$),(0,fn.U)(t=>{var n;const e=(null!==(n=t[1].tabIndex)&&void 0!==n?n:0)+"";return Zt({tabIndex:e})})),{dispatch:!0})}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(o.eX),l.LFG(yn.M),l.LFG(vt.v),l.LFG(wn.c))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),t})()];let Tn=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({providers:[V],imports:[[r.n,a.I,o.sQ.forFeature(xn),o.sQ.forFeature(An),i.Aw.forFeature("dashboard",Zn),i.Aw.forFeature("dashboardUI",vn),pn,s.d]]}),t})()}}]);