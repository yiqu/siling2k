(self.webpackChunksiling2k=self.webpackChunksiling2k||[]).push([[846],{4846:(t,n,o)=>{"use strict";o.r(n),o.d(n,{CoreModule:()=>nt});var e=o(1),i=o(5182),a=o(5366);let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-core"]],decls:2,vars:0,consts:[[1,"container-fluid","mb-3","mt-3"]],template:function(t,n){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"router-outlet"),a.qZA())},directives:[i.lC],styles:[""]}),t})();var r=o(9666),s=o(1041),l=o(2935),u=function(t){return t.TEXT_INPUT="TEXT_INPUT",t.SELECT_INPUT="SELECT_INPUT",t.DATE_INPUT="DATE_INPUT",t}({});function g(t){if(!t.value||!(t.value+"").match(/^[0-9]+([.][0-9]+)?$/))return{decimalAndNumbersOnly:!0}}var p=o(8639),m=o(1293),f=o(5965),d=o(1116),Z=o(4369),x=o(3070),y=o(9550),h=o(3841),T=o(7064),A=o(7307),w=o(9024),N=o(4762),q=o(6996);let v=(()=>{class t{transform(t,n){let o=t;switch(t){case"amount":o=n?"Dollar amount":"The dollar amount of this date.";break;case"company":o=n?"Institution name":"The bank institution name.";break;case"date":o=n?"Date":"The entry date. Defaults to today."}return o}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=a.Yjl({name:"silingEntryTooltip",type:t,pure:!0}),t})(),_=(()=>{class t{transform(t){let n=t;switch(t){case"ascensus":n="Ascensus";break;case"fidelity":n="Fidelity";break;case"empower":n="Empower";break;case"csg":n="Capital Solutions Group"}return n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=a.Yjl({name:"silingCompanyDisplay",type:t,pure:!0}),(0,N.gn)([(0,q.Z)()],t.prototype,"transform",null),t})();function C(t,n){1&t&&(a.ynx(0),a._uU(1," Editing Existing Entry "),a.BQk())}function L(t,n){1&t&&a._uU(0," New Siling1k Entry ")}function k(t,n){1&t&&(a.TgZ(0,"div",8),a._uU(1," Fix invalid inputs before saving. "),a.qZA())}function b(t,n){1&t&&(a.TgZ(0,"span",22),a._uU(1,"$\xa0"),a.qZA())}function U(t,n){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Invalid input "),a.qZA())}function F(t,n){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"mat-form-field",17),a.TgZ(2,"mat-label"),a._uU(3),a.ALo(4,"titlecase"),a.qZA(),a.TgZ(5,"input",18),a.NdJ("focus",function(){a.CHM(t);const n=a.oxw().$implicit;return a.oxw(2).onFocus(n.controlName)}),a.ALo(6,"titlecase"),a.qZA(),a.YNc(7,b,2,0,"span",19),a.TgZ(8,"mat-hint",20),a._uU(9),a.ALo(10,"silingEntryTooltip"),a.qZA(),a.YNc(11,U,2,0,"mat-error",21),a.qZA(),a.BQk()}if(2&t){const t=a.oxw().$implicit,n=a.oxw(2);let o;a.xp6(3),a.Oqu(a.lcZ(4,7,t.controlName)),a.xp6(2),a.Q6J("formControlName",t.controlName)("placeholder",a.lcZ(6,9,t.controlName)),a.xp6(2),a.Q6J("ngIf","amount"===t.controlName),a.xp6(1),a.Q6J("id",null),a.xp6(1),a.Oqu(a.xi3(10,11,t.controlName,!0)),a.xp6(2),a.Q6J("ngIf",null==(o=n.entryFg.get(t.controlName))?null:o.hasError("decimalAndNumbersOnly"))}}function E(t,n){if(1&t&&(a.TgZ(0,"mat-option",26),a.TgZ(1,"mat-icon"),a._uU(2,"account_balance"),a.qZA(),a._uU(3),a.ALo(4,"silingCompanyDisplay"),a.qZA()),2&t){const t=n.$implicit;a.Q6J("value",t),a.xp6(3),a.hij(" ",a.lcZ(4,2,t.name)," ")}}function I(t,n){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"mat-select",23),a.NdJ("focus",function(){a.CHM(t);const n=a.oxw(2).$implicit;return a.oxw(2).onFocus(n.controlName)}),a.TgZ(2,"mat-option"),a._uU(3,"None"),a.qZA(),a.YNc(4,E,5,4,"mat-option",24),a.TgZ(5,"mat-select-trigger"),a.TgZ(6,"div",25),a.TgZ(7,"mat-icon"),a._uU(8,"account_balance"),a.qZA(),a.TgZ(9,"div"),a._uU(10),a.ALo(11,"silingCompanyDisplay"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.BQk()}if(2&t){const t=n.ngIf,o=a.oxw(2).$implicit,e=a.oxw(2);let i;a.xp6(1),a.Q6J("formControlName",o.controlName),a.xp6(3),a.Q6J("ngForOf",t),a.xp6(6),a.hij(" ",a.lcZ(11,3,null==(i=e.entryFg.get("company"))||null==i.value?null:i.value.name)," ")}}function O(t,n){if(1&t&&(a.ynx(0),a.TgZ(1,"mat-form-field",17),a.TgZ(2,"mat-label"),a._uU(3),a.ALo(4,"titlecase"),a.qZA(),a.YNc(5,I,12,5,"ng-container",21),a.ALo(6,"async"),a.TgZ(7,"mat-hint",20),a._uU(8),a.ALo(9,"silingEntryTooltip"),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw().$implicit,n=a.oxw(2);a.xp6(3),a.Oqu(a.lcZ(4,4,t.controlName)),a.xp6(2),a.Q6J("ngIf",a.lcZ(6,6,n.data.companies)),a.xp6(2),a.Q6J("id",null),a.xp6(1),a.Oqu(a.xi3(9,8,t.controlName,!0))}}function J(t,n){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"mat-form-field",17),a.TgZ(2,"mat-label"),a._uU(3),a.ALo(4,"titlecase"),a.qZA(),a.TgZ(5,"input",27),a.NdJ("focus",function(){a.CHM(t);const n=a.oxw().$implicit;return a.oxw(2).onFocus(n.controlName)}),a.qZA(),a._UZ(6,"mat-datepicker-toggle",28),a._UZ(7,"mat-datepicker",null,29),a.TgZ(9,"mat-hint",20),a._uU(10),a.ALo(11,"silingEntryTooltip"),a.qZA(),a.qZA(),a.BQk()}if(2&t){const t=a.MAs(8),n=a.oxw().$implicit;a.xp6(3),a.Oqu(a.lcZ(4,6,n.controlName)),a.xp6(2),a.Q6J("matDatepicker",t)("formControlName",n.controlName),a.xp6(1),a.Q6J("for",t),a.xp6(3),a.Q6J("id",null),a.xp6(1),a.Oqu(a.xi3(11,8,n.controlName,!0))}}function Q(t,n){if(1&t&&(a.ynx(0),a.TgZ(1,"div"),a.ynx(2,15),a.YNc(3,F,12,14,"ng-container",16),a.YNc(4,O,10,11,"ng-container",16),a.YNc(5,J,12,11,"ng-container",16),a.BQk(),a.qZA(),a.BQk()),2&t){const t=n.$implicit;a.xp6(2),a.Q6J("ngSwitch",t.inputType),a.xp6(1),a.Q6J("ngSwitchCase","TEXT_INPUT"),a.xp6(1),a.Q6J("ngSwitchCase","SELECT_INPUT"),a.xp6(1),a.Q6J("ngSwitchCase","DATE_INPUT")}}function S(t,n){if(1&t&&(a.ynx(0),a.TgZ(1,"div",30),a._uU(2),a.ALo(3,"titlecase"),a.qZA(),a.TgZ(4,"div",31),a._uU(5),a.ALo(6,"silingEntryTooltip"),a.qZA(),a.BQk()),2&t){const t=a.oxw(2);a.xp6(2),a.hij(" ",a.lcZ(3,2,t.currentFocusControl)," "),a.xp6(3),a.hij(" ",a.lcZ(6,4,t.currentFocusControl)," ")}}function Y(t,n){1&t&&(a.TgZ(0,"div",32),a._uU(1," Enter the dollar amount for its institution. "),a.qZA())}function D(t,n){if(1&t&&(a.ynx(0),a.TgZ(1,"div",9),a.TgZ(2,"div",10),a.TgZ(3,"form",11),a.YNc(4,Q,6,4,"ng-container",12),a.qZA(),a.TgZ(5,"div",13),a.YNc(6,S,7,6,"ng-container",1),a.YNc(7,Y,2,0,"ng-template",null,14,a.W1O),a.qZA(),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.MAs(8),n=a.oxw();a.xp6(3),a.Q6J("formGroup",n.entryFg),a.xp6(1),a.Q6J("ngForOf",n.entryFgStruct),a.xp6(2),a.Q6J("ngIf",n.currentFocusControl)("ngIfElse",t)}}function P(t,n){1&t&&(a.TgZ(0,"div"),a._uU(1," Loading... "),a.qZA())}const $=["company"],j=["date"],M=["companyLoading","companies"];let B=(()=>{class t{constructor(t,n,o){this.dialogRef=t,this.data=n,this.fb=o,this.entryFgStruct=[],this.compDest$=new r.x,this.entryFg=this.fb.group(this.createFormGroupObj(n)),this.entryFgStruct=this.createFgStructure(n),console.log(this.data,this.entryFg)}ngOnInit(){}createFormGroupObj(t){return{company:p.j2(null==t?void 0:t.company,!1,[s.kI.required]),date:p.j2(new Date(null==t?void 0:t.date),!1,[s.kI.required]),amount:p.j2(null==t?void 0:t.amount,!1,[g])}}createFgStructure(t){const n=[];let o=Object.keys(t);o.length<1&&(o=["company","date","amount"]);for(const e of o)if(M.indexOf(e)<0){let o=u.TEXT_INPUT;$.indexOf(e)>-1?o=u.SELECT_INPUT:j.indexOf(e)>-1&&(o=u.DATE_INPUT),n.push({controlName:e,inputType:o,value:t[e]})}return n}onFocus(t){this.currentFocusControl=t}onNoClick(){this.dialogRef.close()}onSave(){this.dialogRef.close(this.entryFg.getRawValue())}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(l.so),a.Y36(l.WI),a.Y36(s.qu))},t.\u0275cmp=a.Xpm({type:t,selectors:[["new-siling1k-entry-dialog"]],decls:17,vars:8,consts:[["mat-dialog-title","","ngClass.gt-sm","big","fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","space-between start",1,"mfont","my-2"],[4,"ngIf","ngIfElse"],["newEntry",""],["class","text-danger err-header",4,"ngIf"],["fxLayout","row","fxLayoutGap","1rem","fxLayoutAlign","end center"],["mat-flat-button","",3,"disabled","click"],["mat-flat-button","",3,"click"],["isLoading",""],[1,"text-danger","err-header"],["mat-dialog-content","",1,"content-parent"],["fxLayout","row","fxLayoutGap","20px","fxLayoutAlign","space-between start",1,"w-100"],["fxFlex.gt-sm","50",3,"formGroup"],[4,"ngFor","ngForOf"],["fxFlex","50","fxHide","","fxShow.gt-sm","",1,"tooltip-parent"],["noTooltip",""],[3,"ngSwitch"],[4,"ngSwitchCase"],["appearance","standard",1,"w-100"],["type","text","matInput","",3,"formControlName","placeholder","focus"],["matPrefix","",4,"ngIf"],[3,"id"],[4,"ngIf"],["matPrefix",""],[3,"formControlName","focus"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutGap","5px","fxLayoutAlign","start end"],[3,"value"],["matInput","",3,"matDatepicker","formControlName","focus"],["matSuffix","",3,"for"],["picker",""],["fxLayout","row","fxLayoutAlign","start center",1,"font-weight-bold","subtitle","mfont","mb-2"],["fxLayout","row","fxLayoutAlign","start center",1,"roboto"],["fxLayout","column","fxLayoutAlign","center center"]],template:function(t,n){if(1&t&&(a.TgZ(0,"h1",0),a.TgZ(1,"div"),a.YNc(2,C,2,0,"ng-container",1),a.YNc(3,L,1,0,"ng-template",null,2,a.W1O),a.qZA(),a.YNc(5,k,2,0,"div",3),a.qZA(),a._UZ(6,"hr"),a.YNc(7,D,9,4,"ng-container",1),a.ALo(8,"async"),a._UZ(9,"hr"),a.TgZ(10,"div",4),a.TgZ(11,"button",5),a.NdJ("click",function(){return n.onSave()}),a._uU(12,"Save"),a.qZA(),a.TgZ(13,"button",6),a.NdJ("click",function(){return n.onNoClick()}),a._uU(14,"Cancel"),a.qZA(),a.qZA(),a.YNc(15,P,2,0,"ng-template",null,7,a.W1O)),2&t){const t=a.MAs(4),o=a.MAs(16);a.xp6(2),a.Q6J("ngIf",n.data.company)("ngIfElse",t),a.xp6(3),a.Q6J("ngIf",n.entryFg.touched&&n.entryFg.invalid),a.xp6(2),a.Q6J("ngIf",!1===a.lcZ(8,6,n.data.companyLoading))("ngIfElse",o),a.xp6(4),a.Q6J("disabled",n.entryFg.invalid)}},directives:[l.uh,m.oO,f.xw,f.SQ,f.Wh,d.O5,Z.lW,l.xY,s._Y,s.JL,f.yH,s.sg,d.sg,m.b8,d.RF,d.n9,x.KE,x.hX,y.Nt,s.Fj,s.JJ,s.u,x.bx,x.qo,x.TO,h.gD,T.ey,h.$L,A.Hw,w.hl,w.nW,x.R9,w.Mq],pipes:[d.Ov,d.rS,v,_],styles:["h1[_ngcontent-%COMP%]{font-size:18px;font-weight:700}h1[_ngcontent-%COMP%]   .err-header[_ngcontent-%COMP%]{font-size:13px}.big[_ngcontent-%COMP%]{width:40rem}.tooltip-parent[_ngcontent-%COMP%]{width:23rem}"]}),t})(),G=(()=>{class t{constructor(t){this.dialog=t,this.dialogRef=void 0}getDialog(t){return this.dialogRef=void 0,this.dialogRef=this.dialog.open(B,{data:Object.assign({},t),panelClass:"new-siling1k-entry",hasBackdrop:!0,autoFocus:!0,disableClose:!0}),this.dialogRef}}return t.\u0275fac=function(n){return new(n||t)(a.LFG(l.uw))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),t})();var R=o(3350);const W=(0,R.ZF)("admin"),X=(0,R.P1)(W,t=>t.companies),H=(0,R.P1)(W,t=>t.apiLoading);var z=o(1447);let K=(()=>{class t{constructor(t){this.store=t,this.getSilingCompanies$=this.store.select(X),this.getSilingCompanyLoading$=this.store.select(H)}fetchSilingCompanies(){this.store.dispatch(z.kC())}}return t.\u0275fac=function(n){return new(n||t)(a.LFG(R.yh))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const V=[{path:"",component:c,children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class t{constructor(t,n){this.neds=t,this.as=n,this.compDest$=new r.x}ngOnInit(){}onNewEntryClick(){this.as.fetchSilingCompanies();const t={amount:void 0,company:void 0,companies:this.as.getSilingCompanies$,companyLoading:this.as.getSilingCompanyLoading$,date:(new Date).getTime()};this.neds.getDialog(t).afterClosed().subscribe(t=>{console.log("closed",t)})}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(G),a.Y36(K))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-core-home"]],decls:12,vars:0,consts:[[1,""],["mat-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(a.TgZ(0,"section"),a.TgZ(1,"div",0),a.TgZ(2,"button",1),a.NdJ("click",function(){return n.onNewEntryClick()}),a.TgZ(3,"mat-icon"),a._uU(4,"add"),a.qZA(),a.TgZ(5,"span"),a._uU(6," New "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(7,"hr"),a.TgZ(8,"section"),a._uU(9," Graph\n"),a.qZA(),a.TgZ(10,"section"),a._uU(11," Table\n"),a.qZA())},directives:[Z.lW,A.Hw],styles:[""]}),t})()}]}];let tt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.Bz.forChild(V)],i.Bz]}),t})(),nt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[G],imports:[[e.n,tt]]}),t})()}}]);