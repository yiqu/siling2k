(self.webpackChunksiling2k=self.webpackChunksiling2k||[]).push([[883],{2883:(t,n,e)=>{"use strict";e.r(n),e.d(n,{CoreModule:()=>sn});var o=e(8785),a=e(229),i=e(614),s=e(4933),r=e(1),c=e(2852),l=e(5366);let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core"]],decls:2,vars:0,consts:[[1,"container-fluid","mb-5","mt-3"]],template:function(t,n){1&t&&(l.TgZ(0,"div",0),l._UZ(1,"router-outlet"),l.qZA())},directives:[c.lC],styles:[""]}),t})();var u=e(5959),p=e(8639),d=e(1041),f=e(2935),m=e(3588),h=function(t){return t.TEXT_INPUT="TEXT_INPUT",t.SELECT_INPUT="SELECT_INPUT",t.DATE_INPUT="DATE_INPUT",t}({}),y=e(3936),x=e(1293),Z=e(5965),v=e(1116),A=e(4369),L=e(3070),w=e(9550),T=e(3841),b=e(7064),D=e(7307),O=e(9024),C=e(158);function N(t,n){1&t&&(l.ynx(0),l._uU(1," Editing Existing Entry "),l.BQk())}function _(t,n){1&t&&l._uU(0," New Siling1k Entry ")}function I(t,n){1&t&&(l.TgZ(0,"div",8),l._uU(1," Fix invalid inputs before saving. "),l.qZA())}function q(t,n){1&t&&(l.TgZ(0,"span",22),l._uU(1,"$\xa0"),l.qZA())}function S(t,n){if(1&t&&(l.TgZ(0,"mat-hint",23),l._uU(1),l.ALo(2,"silingEntryTooltip"),l.qZA()),2&t){const t=l.oxw(2).$implicit;l.Q6J("id",null),l.xp6(1),l.hij(" ",l.xi3(2,2,t.controlName,!0)," ")}}function k(t,n){1&t&&(l.TgZ(0,"mat-error"),l._uU(1," Please enter a valid number! "),l.qZA())}function P(t,n){if(1&t){const t=l.EpF();l.ynx(0),l.TgZ(1,"mat-form-field",17),l.TgZ(2,"mat-label"),l._uU(3),l.ALo(4,"silingEntryTooltip"),l.qZA(),l.TgZ(5,"input",18),l.NdJ("focus",function(){l.CHM(t);const n=l.oxw().$implicit;return l.oxw(2).onFocus(n.controlName)}),l.qZA(),l.YNc(6,q,2,0,"span",19),l.YNc(7,S,3,5,"mat-hint",20),l.YNc(8,k,2,0,"mat-error",21),l.qZA(),l.BQk()}if(2&t){const t=l.oxw().$implicit,n=l.oxw(2);let e;l.xp6(3),l.Oqu(l.xi3(4,5,t.controlName,!0)),l.xp6(2),l.Q6J("formControlName",t.controlName),l.xp6(1),l.Q6J("ngIf","amount"===t.controlName),l.xp6(1),l.Q6J("ngIf",n.currentFocusControl===t.controlName),l.xp6(1),l.Q6J("ngIf",null==(e=n.entryFg.get(t.controlName))?null:e.hasError("optionalCommaSingleDecimalNumberOnly"))}}function E(t,n){if(1&t&&(l.TgZ(0,"mat-option",27),l.TgZ(1,"mat-icon"),l._uU(2,"account_balance"),l.qZA(),l._uU(3),l.ALo(4,"silingCompanyDisplay"),l.qZA()),2&t){const t=n.$implicit;l.Q6J("value",t),l.xp6(3),l.hij(" ",l.lcZ(4,2,t.name)," ")}}function Q(t,n){if(1&t){const t=l.EpF();l.ynx(0),l.TgZ(1,"mat-select",24),l.NdJ("focus",function(){l.CHM(t);const n=l.oxw(2).$implicit;return l.oxw(2).onFocus(n.controlName)}),l.TgZ(2,"mat-option"),l._uU(3,"None"),l.qZA(),l.YNc(4,E,5,4,"mat-option",25),l.TgZ(5,"mat-select-trigger"),l.TgZ(6,"div",26),l.TgZ(7,"mat-icon"),l._uU(8,"account_balance"),l.qZA(),l.TgZ(9,"div"),l._uU(10),l.ALo(11,"silingCompanyDisplay"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.BQk()}if(2&t){const t=n.ngIf,e=l.oxw(2).$implicit,o=l.oxw(2);let a;l.xp6(1),l.Q6J("formControlName",e.controlName),l.xp6(3),l.Q6J("ngForOf",t),l.xp6(6),l.hij(" ",l.lcZ(11,3,null==(a=o.entryFg.get("company"))||null==a.value?null:a.value.name)," ")}}function F(t,n){if(1&t&&(l.TgZ(0,"mat-hint",23),l._uU(1),l.ALo(2,"silingEntryTooltip"),l.qZA()),2&t){const t=l.oxw(2).$implicit;l.Q6J("id",null),l.xp6(1),l.hij(" ",l.xi3(2,2,t.controlName,!0)," ")}}function U(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"mat-form-field",17),l.TgZ(2,"mat-label"),l._uU(3),l.ALo(4,"silingEntryTooltip"),l.qZA(),l.YNc(5,Q,12,5,"ng-container",21),l.ALo(6,"async"),l.YNc(7,F,3,5,"mat-hint",20),l.qZA(),l.BQk()),2&t){const t=l.oxw().$implicit,n=l.oxw(2);l.xp6(3),l.Oqu(l.xi3(4,3,t.controlName,!0)),l.xp6(2),l.Q6J("ngIf",l.lcZ(6,6,n.data.companies)),l.xp6(2),l.Q6J("ngIf",n.currentFocusControl===t.controlName)}}function M(t,n){if(1&t&&(l.TgZ(0,"mat-hint",23),l._uU(1),l.ALo(2,"silingEntryTooltip"),l.qZA()),2&t){const t=l.oxw(2).$implicit;l.Q6J("id",null),l.xp6(1),l.hij(" ",l.xi3(2,2,t.controlName,!0)," ")}}function J(t,n){if(1&t){const t=l.EpF();l.ynx(0),l.TgZ(1,"mat-form-field",17),l.TgZ(2,"mat-label"),l._uU(3),l.ALo(4,"silingEntryTooltip"),l.qZA(),l.TgZ(5,"input",28),l.NdJ("focus",function(){l.CHM(t);const n=l.oxw().$implicit;return l.oxw(2).onFocus(n.controlName)}),l.qZA(),l._UZ(6,"mat-datepicker-toggle",29),l._UZ(7,"mat-datepicker",null,30),l.YNc(9,M,3,5,"mat-hint",20),l.qZA(),l.BQk()}if(2&t){const t=l.MAs(8),n=l.oxw().$implicit,e=l.oxw(2);l.xp6(3),l.Oqu(l.xi3(4,5,n.controlName,!0)),l.xp6(2),l.Q6J("matDatepicker",t)("formControlName",n.controlName),l.xp6(1),l.Q6J("for",t),l.xp6(3),l.Q6J("ngIf",e.currentFocusControl===n.controlName)}}function $(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div"),l.ynx(2,15),l.YNc(3,P,9,8,"ng-container",16),l.YNc(4,U,8,8,"ng-container",16),l.YNc(5,J,10,8,"ng-container",16),l.BQk(),l.qZA(),l.BQk()),2&t){const t=n.$implicit;l.xp6(2),l.Q6J("ngSwitch",t.inputType),l.xp6(1),l.Q6J("ngSwitchCase","TEXT_INPUT"),l.xp6(1),l.Q6J("ngSwitchCase","SELECT_INPUT"),l.xp6(1),l.Q6J("ngSwitchCase","DATE_INPUT")}}function Y(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",31),l._uU(2),l.ALo(3,"titlecase"),l.qZA(),l.TgZ(4,"div",32),l._uU(5),l.ALo(6,"silingEntryTooltip"),l.qZA(),l.BQk()),2&t){const t=l.oxw(2);l.xp6(2),l.hij(" ",l.lcZ(3,2,t.currentFocusControl)," "),l.xp6(3),l.hij(" ",l.lcZ(6,4,t.currentFocusControl)," ")}}function j(t,n){1&t&&(l.TgZ(0,"div",33),l._uU(1," Enter the dollar amount for its institution. "),l.qZA())}function B(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",9),l.TgZ(2,"div",10),l.TgZ(3,"form",11),l.YNc(4,$,6,4,"ng-container",12),l.qZA(),l.TgZ(5,"div",13),l.YNc(6,Y,7,6,"ng-container",1),l.YNc(7,j,2,0,"ng-template",null,14,l.W1O),l.qZA(),l.qZA(),l.qZA(),l.BQk()),2&t){const t=l.MAs(8),n=l.oxw();l.xp6(3),l.Q6J("formGroup",n.entryFg),l.xp6(1),l.Q6J("ngForOf",n.entryFgStruct),l.xp6(2),l.Q6J("ngIf",n.currentFocusControl)("ngIfElse",t)}}function G(t,n){1&t&&(l.TgZ(0,"div"),l._uU(1," Loading... "),l.qZA())}const H=["company"],z=["date"],W=["companyLoading","companies"];let R=(()=>{class t{constructor(t,n,e){this.dialogRef=t,this.data=n,this.fb=e,this.entryFgStruct=[],this.compDest$=new u.xQ,this.entryFg=this.fb.group(this.createFormGroupObj(n)),this.entryFgStruct=this.createFgStructure(n)}get amountFc(){return this.entryFg.get("amount")}ngOnInit(){this.entryFg.valueChanges.pipe((0,m.j)("amount")).subscribe(t=>{t&&this.amountFc.setValue((t+"").trim(),{emitEvent:!1})})}createFormGroupObj(t){return{company:p.j2(null==t?void 0:t.company,!1,[d.kI.required]),date:p.j2(new Date(null==t?void 0:t.date),!1,[d.kI.required]),amount:p.j2(null==t?void 0:t.amount,!1,[y.iN])}}createFgStructure(t){const n=[];let e=Object.keys(t);e.length<1&&(e=["company","date","amount"]);for(const o of e)if(W.indexOf(o)<0){let e=h.TEXT_INPUT;H.indexOf(o)>-1?e=h.SELECT_INPUT:z.indexOf(o)>-1&&(e=h.DATE_INPUT),n.push({controlName:o,inputType:e,value:t[o]})}return n}onFocus(t){this.currentFocusControl=t}onNoClick(){this.dialogRef.close()}onSave(){this.dialogRef.close(this.entryFg.getRawValue())}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(f.so),l.Y36(f.WI),l.Y36(d.qu))},t.\u0275cmp=l.Xpm({type:t,selectors:[["new-siling1k-entry-dialog"]],decls:17,vars:8,consts:[["mat-dialog-title","","ngClass.gt-sm","big","fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","space-between start",1,"mfont","my-2"],[4,"ngIf","ngIfElse"],["newEntry",""],["class","text-danger err-header",4,"ngIf"],["fxLayout","row","fxLayoutGap","1rem","fxLayoutAlign","end center"],["mat-flat-button","",3,"disabled","click"],["mat-flat-button","",3,"click"],["isLoading",""],[1,"text-danger","err-header"],["mat-dialog-content","",1,"content-parent"],["fxLayout","row","fxLayoutGap","20px","fxLayoutAlign","space-between start",1,"w-100"],["fxFlex.gt-sm","50",3,"formGroup"],[4,"ngFor","ngForOf"],["fxFlex","50","fxHide","","fxShow.gt-sm","",1,"tooltip-parent"],["noTooltip",""],[3,"ngSwitch"],[4,"ngSwitchCase"],["appearance","standard",1,"w-100"],["type","text","matInput","",3,"formControlName","focus"],["matPrefix","",4,"ngIf"],[3,"id",4,"ngIf"],[4,"ngIf"],["matPrefix",""],[3,"id"],[3,"formControlName","focus"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutGap","5px","fxLayoutAlign","start end"],[3,"value"],["matInput","",3,"matDatepicker","formControlName","focus"],["matSuffix","",3,"for"],["picker",""],["fxLayout","row","fxLayoutAlign","start center",1,"font-weight-bold","subtitle","mfont","mb-2"],["fxLayout","row","fxLayoutAlign","start center",1,"roboto"],["fxLayout","column","fxLayoutAlign","center center"]],template:function(t,n){if(1&t&&(l.TgZ(0,"h1",0),l.TgZ(1,"div"),l.YNc(2,N,2,0,"ng-container",1),l.YNc(3,_,1,0,"ng-template",null,2,l.W1O),l.qZA(),l.YNc(5,I,2,0,"div",3),l.qZA(),l._UZ(6,"hr"),l.YNc(7,B,9,4,"ng-container",1),l.ALo(8,"async"),l._UZ(9,"hr"),l.TgZ(10,"div",4),l.TgZ(11,"button",5),l.NdJ("click",function(){return n.onSave()}),l._uU(12,"Save"),l.qZA(),l.TgZ(13,"button",6),l.NdJ("click",function(){return n.onNoClick()}),l._uU(14,"Cancel"),l.qZA(),l.qZA(),l.YNc(15,G,2,0,"ng-template",null,7,l.W1O)),2&t){const t=l.MAs(4),e=l.MAs(16);l.xp6(2),l.Q6J("ngIf",n.data.company)("ngIfElse",t),l.xp6(3),l.Q6J("ngIf",n.entryFg.touched&&n.entryFg.invalid),l.xp6(2),l.Q6J("ngIf",!1===l.lcZ(8,6,n.data.companyLoading))("ngIfElse",e),l.xp6(4),l.Q6J("disabled",n.entryFg.invalid)}},directives:[f.uh,x.oO,Z.xw,Z.SQ,Z.Wh,v.O5,A.lW,f.xY,d._Y,d.JL,Z.yH,d.sg,v.sg,x.b8,v.RF,v.n9,L.KE,L.hX,w.Nt,d.Fj,d.JJ,d.u,L.qo,L.bx,L.TO,T.gD,b.ey,T.$L,D.Hw,O.hl,O.nW,L.R9,O.Mq],pipes:[v.Ov,C.q,C.n,v.rS],styles:["h1[_ngcontent-%COMP%]{font-size:18px;font-weight:700}h1[_ngcontent-%COMP%]   .err-header[_ngcontent-%COMP%]{font-size:13px}.big[_ngcontent-%COMP%]{width:40rem}.tooltip-parent[_ngcontent-%COMP%]{width:23rem}"]}),t})(),X=(()=>{class t{constructor(t){this.dialog=t,this.dialogRef=void 0}getDialog(t){return this.dialogRef=void 0,this.dialogRef=this.dialog.open(R,{data:Object.assign({},t),panelClass:"new-siling1k-entry",hasBackdrop:!0,autoFocus:!0,disableClose:!0}),this.dialogRef}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(f.uw))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),t})();var K=e(2523);const V=(0,a.PH)("[Siling/API] Save entry start",(0,a.Ky)()),tt=(0,a.PH)("[Siling/API] Save entry successful",(0,a.Ky)()),nt=(0,a.PH)("[Siling/API] Save entry start failure",(0,a.Ky)()),et=(0,a.PH)("[Siling/API] Get siling data by ins. name start",(0,a.Ky)()),ot=(0,a.PH)("[Siling/API] Get siling data by ins. name successful",(0,a.Ky)()),at=(0,a.PH)("[Siling/API] Get siling data by ins. name failure",(0,a.Ky)()),it=(0,a.ZF)("dashboard"),st=(0,a.P1)(it,t=>t.entrySaveLoading),rt=(0,a.P1)(it,t=>t.silingDataLoading),ct=(0,a.P1)(it,t=>{var n;return null!==(n=t.silingData)&&void 0!==n?n:{}}),lt=(0,a.P1)(it,t=>t.silingDataBeingFetchedNames),gt=(0,a.P1)(lt,ct,(t,n)=>{const e=Object.keys(n),o={};let a=100;return e.length>0&&(a=Math.floor(100/e.length)),e.forEach((t,e)=>{const a=JSON.parse(JSON.stringify(n[t])).sort((t,n)=>t.date>n.date?1:-1),i=[];a.forEach((t,n,e)=>{const o=a[n-1];let s=0,r=0;o&&t&&(s=t.amount-o.amount,r=s/o.amount),i.push(Object.assign(Object.assign({},t),{profit:s,profitPercent:r}))});const s=JSON.parse(JSON.stringify(i));o[t]=s.reverse()}),{data:o,keys:t,flexNumber:a}}),ut=(0,a.P1)(gt,t=>{const n=[],e=[];t.keys.forEach(n=>{t.data&&t.data[n]&&t.data[n].forEach(t=>{e.push(t.date)})}),e.sort((t,n)=>t>n?1:-1);const o=new Set(e),a=Array.from(o);return t.keys.forEach(e=>{const o=(0,p.fm)(e),i={};t.data[e].forEach(t=>{i[t.date]=t.amount});const s=[];a.forEach((t,n)=>{s.push(void 0!==i[t]?+i[t]:NaN)});let r=[],c=0;a.forEach((t,n)=>{isNaN(s[n])?r.push(c):(c=s[n],r.push(s[n]))}),n.push({name:o,data:r})}),{series:n,chart:{type:"line",height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"},width:"100%"},dataLabels:{enabled:!1},markers:{size:0},title:{text:"Siling Growth by Date",align:"left"},fill:{type:"gradient",gradient:{opacityFrom:.9,opacityTo:.9}},yaxis:{labels:{formatter:function(t){return t?"$"+(+t).toLocaleString(void 0):t+""}},title:{text:"$ Amount"}},xaxis:(i=a,{type:"datetime",categories:[...i]}),tooltip:{shared:!0,y:{formatter:function(t,n){return t?"$"+(0,p.gW)(t):t+""}}},legend:{show:!0,position:"top",horizontalAlign:"center",fontFamily:"Roboto",fontSize:"15px"},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}}};var i}),pt=(0,a.P1)(gt,t=>{let n={},e=0,o=0;return t.keys.forEach((a,i)=>{var s,r;if(t.data[a]){const c=JSON.parse(JSON.stringify(t.data[a]));c.sort((t,n)=>t.date>n.date?1:-1);const l=c[null!==(r=(null===(s=t.data[a])||void 0===s?void 0:s.length)-1)&&void 0!==r?r:0];0===i&&(o=l.date);let g=+(null==l?void 0:l.amount);g=isNaN(g)?0:g,n[a]=g,e+=g,o<(null==l?void 0:l.date)&&(o=l.date)}}),{sumAmount:n,lastUpdated:o,total:e}});var dt=e(8811);let ft=(()=>{class t{constructor(t,n){this.store=t,this.rs=n,this.isEntrySaveLoading$=this.store.select(st),this.isDashboardDataLoading$=this.store.select(rt),this.dashboardData$=this.store.select(gt),this.chartData$=this.store.select(ut),this.summary$=this.store.select(pt)}saveSilingEntry(t){this.store.dispatch(V({payload:t}))}getSilingDataByInsName(t){t&&t.length>0&&this.store.dispatch(et({names:t}))}fetchSilingCompanies(){return this.rs.getCollection("settings/kqpro/companies/all")}fetchShowHideList(){return this.rs.getDocument("settings/kqpro/showHideList")}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(a.yh),l.LFG(dt.v))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var mt=e(4350),ht=e(4312);function yt(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",3),l.TgZ(2,"div",4),l.TgZ(3,"div"),l._uU(4,"Last updated:"),l.qZA(),l.TgZ(5,"div"),l._uU(6),l.ALo(7,"dateDisplay"),l.qZA(),l.qZA(),l.TgZ(8,"div",5),l._uU(9," Total: "),l.TgZ(10,"span",6),l._uU(11),l.ALo(12,"localeNumberDisplay"),l.qZA(),l.qZA(),l.qZA(),l.BQk()),2&t){const t=l.oxw(3);l.xp6(6),l.hij(" ",l.xi3(7,2,t.summaryData.lastUpdated,"MDYANDFROMNOW")," "),l.xp6(5),l.hij(" $ ",l.lcZ(12,5,t.summaryData.total)," ")}}function xt(t,n){if(1&t&&(l.ynx(0),l.YNc(1,yt,13,7,"ng-container",0),l.BQk()),2&t){const t=l.oxw(2);l.xp6(1),l.Q6J("ngIf",t.summaryData)}}function Zt(t,n){if(1&t&&(l.ynx(0),l.YNc(1,xt,2,1,"ng-container",2),l.ALo(2,"async"),l.BQk()),2&t){const t=l.oxw(),n=l.MAs(2);l.xp6(1),l.Q6J("ngIf",!1===l.lcZ(2,2,t.loading$))("ngIfElse",n)}}function vt(t,n){1&t&&(l.TgZ(0,"div",7),l._uU(1," Calculating summary... "),l.qZA())}let At=(()=>{class t{constructor(){this.summaryData=void 0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core-summary"]],inputs:{summaryData:"summaryData",loading$:"loading$"},decls:3,vars:1,consts:[[4,"ngIf"],["loading",""],[4,"ngIf","ngIfElse"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","10px",1,"roboto"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","5px",1,"text-muted"],[1,"total"],[1,"green"],["fxLayout","row","fxLayoutAlign","center center"]],template:function(t,n){1&t&&(l.YNc(0,Zt,3,4,"ng-container",0),l.YNc(1,vt,2,0,"ng-template",null,1,l.W1O)),2&t&&l.Q6J("ngIf",n.loading$)},directives:[v.O5,Z.xw,Z.Wh,Z.SQ],pipes:[v.Ov,mt.o,ht.i7],styles:[".total[_ngcontent-%COMP%]{font-weight:300;font-size:30px;letter-spacing:1px}.green[_ngcontent-%COMP%]{color:#00b300}"]}),t})();var Lt=e(6184);function wt(t,n){if(1&t&&(l.ynx(0),l._UZ(1,"apx-chart",1),l.BQk()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("series",t.chartData.series)("chart",t.chartData.chart)("dataLabels",t.chartData.dataLabels)("markers",t.chartData.markers)("title",t.chartData.title)("fill",t.chartData.fill)("yaxis",t.chartData.yaxis)("xaxis",t.chartData.xaxis)("tooltip",t.chartData.tooltip)("legend",t.chartData.legend)("grid",t.chartData.grid)}}let Tt=(()=>{class t{constructor(){this.chartData=void 0}ngOnChanges(){console.log("charting",this.chartData),this.initChartData()}ngOnInit(){}initChartData(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-shared-line-chart"]],inputs:{chartData:"chartData"},features:[l.TTD],decls:1,vars:1,consts:[[4,"ngIf"],[3,"series","chart","dataLabels","markers","title","fill","yaxis","xaxis","tooltip","legend","grid"]],template:function(t,n){1&t&&l.YNc(0,wt,2,11,"ng-container",0),2&t&&l.Q6J("ngIf",n.chartData)},directives:[v.O5,Lt.x],styles:[""]}),t})();var bt=e(4333);let Dt=(()=>{class t{constructor(){this.text=void 0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-shared-popover"]],inputs:{text:"text"},decls:4,vars:6,consts:[["popoverPlacement","top-right",1,"popover-tooltip",3,"popover","popoverOnHover","popoverCloseOnClickOutside","popoverCloseOnMouseOutside","popoverDisabled","popoverAnimation"],[1,"parent"],["fontSet","material-icons-outlined"]],template:function(t,n){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"mat-icon",2),l._uU(3,"info"),l.qZA(),l.qZA(),l.qZA()),2&t&&l.Q6J("popover",n.text+"")("popoverOnHover",!1)("popoverCloseOnClickOutside",!0)("popoverCloseOnMouseOutside",!1)("popoverDisabled",!1)("popoverAnimation",!0)},directives:[bt.k5,D.Hw],styles:[".popover-tooltip[_ngcontent-%COMP%]{display:flex;cursor:pointer}.popover-tooltip[_ngcontent-%COMP%]:focus   mat-icon.mat-icon[_ngcontent-%COMP%], .popover-tooltip[_ngcontent-%COMP%]:hover   mat-icon.mat-icon[_ngcontent-%COMP%]{color:#000}mat-icon.mat-icon[_ngcontent-%COMP%]{color:#33333357;font-size:17px}.parent[_ngcontent-%COMP%]{height:19px}"]}),t})();const Ot=function(t){return{"border-btn-none":t,"list-group-item roboto":!0}};function Ct(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",1),l.ALo(2,"profitGainBgClass"),l.TgZ(3,"div",2),l.TgZ(4,"div",3),l.TgZ(5,"div"),l._uU(6),l.ALo(7,"dateDisplay"),l.qZA(),l.TgZ(8,"div"),l._UZ(9,"app-shared-popover",4),l.qZA(),l.qZA(),l.TgZ(10,"div"),l._uU(11),l.ALo(12,"dateFromNow"),l.qZA(),l.qZA(),l.TgZ(13,"div",5),l.TgZ(14,"div",6),l._uU(15),l.ALo(16,"localeNumberDisplay"),l.qZA(),l.TgZ(17,"div"),l.ALo(18,"numberGainClass"),l._uU(19),l.ALo(20,"profitPercent"),l.qZA(),l.qZA(),l.TgZ(21,"div",7),l._uU(22),l.ALo(23,"profit"),l.qZA(),l.qZA(),l.BQk()),2&t){const t=l.oxw();l.xp6(1),l.Tol(l.lcZ(2,11,t.entryDetail.profitPercent)),l.Q6J("ngClass",l.VKq(26,Ot,t.isLast)),l.xp6(5),l.hij(" ",t.entryDetail.date?l.xi3(7,13,t.entryDetail.date,"MDY"):"NO DATE"," "),l.xp6(3),l.Q6J("text",t.entryDetail.date),l.xp6(2),l.hij(" ",l.lcZ(12,16,t.entryDetail.date)," "),l.xp6(4),l.hij(" $",l.lcZ(16,18,t.entryDetail.amount)," "),l.xp6(2),l.Tol("gains-rate numbers med-number spacing-half "+l.lcZ(18,20,t.entryDetail.profitPercent)),l.xp6(2),l.hij(" ",l.lcZ(20,22,t.entryDetail.profitPercent)," "),l.xp6(3),l.hij(" ",l.lcZ(23,24,t.entryDetail.profit)," ")}}let Nt=(()=>{class t{constructor(){this.entryDetail=void 0,this.isLast=!1}ngOnChanges(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core-siling-column-entry"]],inputs:{entryDetail:"entryDetail",isLast:"isLast"},features:[l.TTD],decls:1,vars:1,consts:[[4,"ngIf"],["fxLayout","column","fxLayoutAlign","start center","fxLayoutGap","10px",3,"ngClass"],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100","roboto","meta-data"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","5px",1,"mb-1"],[3,"text"],["fxLayout.gt-sm","row","fxLayout","column","fxLayoutAlign.gt-sm","space-between center","fxLayoutAlign","start center",1,"w-100"],[1,"dollar-amount","numbers","med-number"],["fxLayout","row","fxLayoutAlign","start center",1,"text-muted","numbers","small-number","w-100"]],template:function(t,n){1&t&&l.YNc(0,Ct,24,28,"ng-container",0),2&t&&l.Q6J("ngIf",n.entryDetail)},directives:[v.O5,Z.xw,Z.Wh,Z.SQ,v.mk,x.oO,Dt],pipes:[ht.PD,mt.o,mt.G,ht.i7,ht.qw,ht.pY,ht.u],styles:[".gains-rate[_ngcontent-%COMP%]{text-align:right}.dollar-amount[_ngcontent-%COMP%]{text-align:left;padding-left:0;letter-spacing:.5px}.med-number[_ngcontent-%COMP%]{font-size:25px}.spacing-half[_ngcontent-%COMP%]{letter-spacing:.5px}.numbers[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:300}.small-number[_ngcontent-%COMP%]{font-size:16px}.positive[_ngcontent-%COMP%]{color:#00b33c}.negative[_ngcontent-%COMP%]{color:#b32400}.no-change[_ngcontent-%COMP%]{color:#888}.pos-bg[_ngcontent-%COMP%]{background-color:#e1f5e154}.neg-bg-1[_ngcontent-%COMP%]{background-color:#f7e5e536}.neg-bg-2[_ngcontent-%COMP%]{background-color:#f7e5e59e}.neg-bg-3[_ngcontent-%COMP%]{background-color:#f7e5e5d9}.no-change-bg[_ngcontent-%COMP%]{background-color:#cccccc0f}.meta-data[_ngcontent-%COMP%]{font-size:14px}.border-btn-none[_ngcontent-%COMP%]{border-bottom:0}"]}),t})();function _t(t,n){if(1&t&&(l.ynx(0),l._UZ(1,"app-core-siling-column-entry",9),l.BQk()),2&t){const t=n.$implicit,e=n.last;l.xp6(1),l.Q6J("entryDetail",t)("isLast",e)}}function It(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"ul",7),l.YNc(2,_t,2,2,"ng-container",8),l.qZA(),l.BQk()),2&t){const t=l.oxw();l.xp6(2),l.Q6J("ngForOf",t.silingData)}}function qt(t,n){1&t&&(l.TgZ(0,"div",10),l._uU(1," No data returned. "),l.qZA())}const St=function(t){return{"background-color":t}};let kt=(()=>{class t{constructor(){this.silingCompanyId=void 0,this.silingData=[]}ngOnChanges(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core-siling-column"]],inputs:{silingCompanyId:"silingCompanyId",silingData:"silingData"},features:[l.TTD],decls:11,vars:9,consts:[[1,"card","text-left","border-secondary"],[1,"img-center","fixed-img-height"],["alt","SiLing Co. Img","onerror","this.src = 'assets/banner/bank5.jpg'",1,"card-img-top","img-fixed-height",3,"src","ngStyle"],[1,"card-header","header"],[1,"panel-header","page-anchor"],[4,"ngIf","ngIfElse"],["noData",""],[1,"list-group"],[4,"ngFor","ngForOf"],[3,"entryDetail","isLast"],["fxLayout","row","fxLayoutAlign","center center",1,"px-3","py-3"]],template:function(t,n){if(1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l._UZ(2,"img",2),l.qZA(),l.TgZ(3,"div",3),l.TgZ(4,"span",4),l._uU(5),l.ALo(6,"titlecase"),l.qZA(),l.qZA(),l.TgZ(7,"div"),l.YNc(8,It,3,1,"ng-container",5),l.YNc(9,qt,2,0,"ng-template",null,6,l.W1O),l.qZA(),l.qZA()),2&t){const t=l.MAs(10);l.xp6(2),l.Q6J("src","assets/banner/"+n.silingCompanyId+".jpg",l.LSH)("ngStyle",l.VKq(7,St,"fidelity"===n.silingCompanyId?"#67941e":"#fff")),l.xp6(3),l.hij(" ",l.lcZ(6,5,n.silingCompanyId?n.silingCompanyId:"Unknown Siling ID")," "),l.xp6(3),l.Q6J("ngIf",n.silingData&&n.silingData.length>0)("ngIfElse",t)}},directives:[v.PC,x.Zl,v.O5,v.sg,Nt,Z.xw,Z.Wh],pipes:[v.rS],styles:[".img-fixed-height[_ngcontent-%COMP%]{max-height:80px;max-width:300px}.img-center[_ngcontent-%COMP%]{text-align:center}.fid-background-green[_ngcontent-%COMP%]{background-color:#67941e}.panel-header[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:24px}.card-header.header[_ngcontent-%COMP%]{color:#8c8c8c}.fixed-img-height[_ngcontent-%COMP%]{height:5rem}"]}),t})();var Pt=e(3817);function Et(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",9),l._UZ(2,"app-shared-line-chart",10),l.ALo(3,"async"),l.qZA(),l.BQk()),2&t){const t=l.oxw();l.xp6(2),l.Q6J("chartData",l.lcZ(3,1,t.cs.chartData$))}}function Qt(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",13),l._UZ(2,"app-core-siling-column",14),l.qZA(),l.BQk()),2&t){const t=n.$implicit,e=l.oxw(2).ngIf;l.xp6(1),l.Q6J("fxFlex",e.flexNumber+"%"),l.xp6(1),l.Q6J("silingCompanyId",t)("silingData",e.data[t])}}function Ft(t,n){if(1&t&&(l.ynx(0),l.YNc(1,Qt,3,3,"ng-container",12),l.BQk()),2&t){const t=l.oxw().ngIf;l.xp6(1),l.Q6J("ngForOf",t.keys)}}function Ut(t,n){if(1&t&&(l.ynx(0),l.YNc(1,Ft,2,1,"ng-container",3),l.BQk()),2&t){const t=n.ngIf;l.oxw(2);const e=l.MAs(22);l.xp6(1),l.Q6J("ngIf",t.keys&&t.keys.length>0)("ngIfElse",e)}}function Mt(t,n){if(1&t&&(l.ynx(0),l.YNc(1,Ut,2,2,"ng-container",11),l.ALo(2,"async"),l.BQk()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,t.cs.dashboardData$))}}function Jt(t,n){1&t&&(l.TgZ(0,"div",15),l._UZ(1,"app-shared-loading"),l.qZA())}function $t(t,n){1&t&&(l.TgZ(0,"div"),l._uU(1," No data to show. "),l.qZA())}let Yt=(()=>{class t{constructor(t,n,e){this.neds=t,this.as=n,this.cs=e,this.compDest$=new u.xQ}ngOnInit(){}onNewEntryClick(){this.as.fetchSilingCompanies();const t={amount:void 0,company:void 0,companies:this.as.getSilingCompanies$,companyLoading:this.as.getSilingCompanyLoading$,date:(new Date).getTime()};this.neds.getDialog(t).afterClosed().subscribe(t=>{if(t&&t.amount&&t.company&&t.date){const n={amount:(0,p.G5)(t.amount),company:t.company.name.toLowerCase(),date:t.date.getTime(),id:void 0};this.cs.saveSilingEntry(n)}})}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(X),l.Y36(K.l),l.Y36(ft))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-core-home"]],decls:23,vars:12,consts:[[1,""],["mat-button","","color","primary",3,"click"],["fxLayout","row","fxLayoutAlign","center center",1,"w-100","pt-3","pb-3"],[4,"ngIf","ngIfElse"],[1,"pb-3","pt-3"],[3,"summaryData","loading$"],["fxLayout.gt-sm","row","fxLayout","column","fxLayoutAlign.gt-sm","center start","fxLayoutAlign","start center","fxLayoutGap.gt-sm","10px","fxLayoutGap","5px",1,"pt-3","pb-3"],["isLoading",""],["noDataShown",""],[1,"chart-shell"],[3,"chartData"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"siling-column1",3,"fxFlex"],[3,"silingCompanyId","silingData"],[1,"w-100"]],template:function(t,n){if(1&t&&(l.TgZ(0,"section"),l.TgZ(1,"div",0),l.TgZ(2,"button",1),l.NdJ("click",function(){return n.onNewEntryClick()}),l.TgZ(3,"mat-icon"),l._uU(4,"add"),l.qZA(),l.TgZ(5,"span"),l._uU(6," New "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(7,"hr"),l.TgZ(8,"section",2),l.YNc(9,Et,4,3,"ng-container",3),l.ALo(10,"async"),l.qZA(),l._UZ(11,"hr"),l.TgZ(12,"section",4),l._UZ(13,"app-core-summary",5),l.ALo(14,"async"),l.qZA(),l._UZ(15,"hr"),l.TgZ(16,"section",6),l.YNc(17,Mt,3,3,"ng-container",3),l.ALo(18,"async"),l.qZA(),l.YNc(19,Jt,2,0,"ng-template",null,7,l.W1O),l.YNc(21,$t,2,0,"ng-template",null,8,l.W1O)),2&t){const t=l.MAs(20);l.xp6(9),l.Q6J("ngIf",!1===l.lcZ(10,6,n.cs.isDashboardDataLoading$))("ngIfElse",t),l.xp6(4),l.Q6J("summaryData",l.lcZ(14,8,n.cs.summary$))("loading$",n.cs.isDashboardDataLoading$),l.xp6(4),l.Q6J("ngIf",!1===l.lcZ(18,10,n.cs.isDashboardDataLoading$))("ngIfElse",t)}},directives:[A.lW,D.Hw,Z.xw,Z.Wh,v.O5,At,Z.SQ,Tt,v.sg,Z.yH,kt,Pt.N],pipes:[v.Ov],styles:[".siling-column[_ngcontent-%COMP%]{width:30rem}.chart-shell[_ngcontent-%COMP%]{width:calc(100% - 10rem)}"]}),t})();var jt=e(3148),Bt=e(611),Gt=e(4019),Ht=e(8177);const zt=[{path:"",component:g,children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:Yt}],resolve:{resolverFired:(()=>{class t{constructor(t,n){this.cs=t,this.ss=n,this.getCompaniesBeingDisplayed$=(0,jt.D)({allCompanies:this.cs.fetchSilingCompanies(),showHideList:this.cs.fetchShowHideList()})}resolve(t,n){return this.getCompaniesBeingDisplayed$.pipe((0,Bt.q)(1),(0,Gt.b)(t=>{const n=[];let e=[],o=[];t.showHideList&&t.showHideList.hiding&&t.showHideList.hiding.length>-1&&(e=t.showHideList.hiding),t.showHideList&&t.showHideList.showing&&t.showHideList.showing.length>-1&&(o=t.showHideList.showing),t.allCompanies.forEach(t=>{e.findIndex(n=>n.name===t.name)<0&&n.push(t)}),n.sort((t,n)=>o.findIndex(n=>n.id===t.id)>o.findIndex(t=>t.id===n.id)?1:-1);const a=n.map(t=>t.name.toLowerCase());this.cs.getSilingDataByInsName(a)}))}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(ft),l.LFG(Ht.g))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},runGuardsAndResolvers:"always"}];let Wt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[c.Bz.forChild(zt)],c.Bz]}),t})();var Rt=e(3982),Xt=e(4689),Kt=e(9996),Vt=e(7727),tn=e(878),nn=e(1447);const en=[(()=>{class t{constructor(t,n,e){this.actions$=t,this.ts=n,this.rs=e,this.saveSilingEntry$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(V),(0,Rt.zg)(t=>{const n=t.payload,e=this.rs.addEntryToCollection(n),o=Object.assign(Object.assign({},n),{id:e.id});return e.operationObs.then(t=>(this.ts.getSuccess("Entry added successfully."),tt({payload:o,date:(new Date).getTime()}))).catch(t=>nt({errMsg:t}))}))),this.getSilingDataByNames$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(et),(0,Xt.w)(t=>{const n={};return t.names.forEach(t=>{n[t]=this.rs.getDataByCollectionName(t)}),(0,jt.D)(n).pipe((0,Kt.U)(t=>(this.ts.getSuccess("Loaded Siling data successfully."),ot({payload:t,date:(new Date).getTime()}))),(0,Vt.K)(t=>(0,tn.of)(at({errMsg:t}))))})))}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(o.eX),l.LFG(nn.M),l.LFG(dt.v))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),t})()],on=(0,a.Lq)({entrySaveLoading:!1,entryApiErr:!1,entryToSave:void 0,entryApiErrMsg:void 0,silingDataBeingFetchedNames:[],silingDataErr:!1,silingDataLoading:!1,silingData:void 0},(0,a.on)(V,(t,{payload:n})=>Object.assign(Object.assign({},t),{entrySaveLoading:!0,entryToSave:n})),(0,a.on)(tt,(t,{payload:n})=>Object.assign(Object.assign({},t),{entryApiErr:!1,entryApiErrMsg:void 0,entrySaveLoading:!1,entryToSave:n})),(0,a.on)(nt,(t,{errMsg:n})=>Object.assign(Object.assign({},t),{entryApiErr:!0,entryApiErrMsg:n,entrySaveLoading:!1})),(0,a.on)(et,(t,{names:n})=>Object.assign(Object.assign({},t),{silingDataBeingFetchedNames:n,silingDataLoading:!0})),(0,a.on)(ot,(t,{payload:n})=>Object.assign(Object.assign({},t),{silingDataLoading:!1,silingData:n,silingDataErrMsg:void 0,silingDataErr:!1})),(0,a.on)(at,(t,{errMsg:n})=>Object.assign(Object.assign({},t),{silingDataLoading:!1,silingDataErrMsg:n,silingDataErr:!0}))),an=(0,a.Lq)({});let sn=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({providers:[X],imports:[[r.n,i.I,o.sQ.forFeature(en),a.Aw.forFeature("dashboard",on),a.Aw.forFeature("dashboardUI",an),Wt,s.d]]}),t})()}}]);