(self.webpackChunksiling2k=self.webpackChunksiling2k||[]).push([[722],{8722:(t,n,e)=>{"use strict";e.r(n),e.d(n,{CoreModule:()=>q});var o=e(1),r=e(5182),c=e(5366);let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-core"]],decls:2,vars:0,consts:[[1,"container-fluid","mb-3","mt-3"]],template:function(t,n){1&t&&(c.TgZ(0,"div",0),c._UZ(1,"router-outlet"),c.qZA())},directives:[r.lC],styles:[""]}),t})();var a=e(2935),s=function(t){return t.TEXT_INPUT="TEXT_INPUT",t.SELECT_INPUT="SELECT_INPUT",t}({}),u=e(8639),l=e(1041),p=e(1116),g=e(5965),f=e(1293),m=e(4369),d=e(3070),h=e(9550);function Z(t,n){1&t&&(c.ynx(0),c._uU(1," Editing Existing Entry "),c.BQk())}function y(t,n){1&t&&c._uU(0," New Siling1k Entry ")}function T(t,n){if(1&t){const t=c.EpF();c.ynx(0),c.TgZ(1,"div"),c.TgZ(2,"mat-form-field",11),c.TgZ(3,"mat-label"),c._uU(4),c.ALo(5,"titlecase"),c.qZA(),c.TgZ(6,"input",12),c.NdJ("focus",function(){const n=c.CHM(t).$implicit;return c.oxw().onFocus(n.controlName)}),c.ALo(7,"titlecase"),c.qZA(),c.TgZ(8,"mat-hint"),c._uU(9,"Hint"),c.qZA(),c.qZA(),c.qZA(),c.BQk()}if(2&t){const t=n.$implicit;c.xp6(4),c.Oqu(c.lcZ(5,3,t.controlName)),c.xp6(2),c.Q6J("formControlName",t.controlName)("placeholder",c.lcZ(7,5,t.controlName))}}const x=["company"];let A=(()=>{class t{constructor(t,n){this.data=t,this.fb=n,this.entryFgStruct=[],this.entryFg=this.fb.group(this.createFormGroupObj(t)),this.entryFgStruct=this.createFgStructure(t),console.log(this.entryFg,this.entryFgStruct)}createFormGroupObj(t){return{company:u.j2(null==t?void 0:t.company,!1),date:u.j2(null==t?void 0:t.date,!1),amount:u.j2(null==t?void 0:t.amount,!1)}}createFgStructure(t){const n=[];let e=Object.keys(t);e.length<1&&(e=["company","date","amount"]);for(const o of e){let e=s.TEXT_INPUT;x.indexOf(o)>-1&&(e=s.SELECT_INPUT),n.push({controlName:o,inputType:e,value:t[o]})}return n}onFocus(t){this.currentFocusControl=t}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(a.WI),c.Y36(l.qu))},t.\u0275cmp=c.Xpm({type:t,selectors:[["new-siling1k-entry-dialog"]],decls:21,vars:8,consts:[["mat-dialog-title","",1,"mfont","my-2","big"],[4,"ngIf","ngIfElse"],["newEntry",""],["mat-dialog-content",""],["fxLayout","row","fxLayoutGap","5px","fxLayoutAlign","space-between start",1,"w-100"],["fxFlex","50",3,"formGroup"],[4,"ngFor","ngForOf"],["fxFlex","50","fxLayout","column","fxLayoutGap","10px","fxLayoutAlign","center center","fxHide","","fxShow.gt-sm",""],[1,"font-weight-bold","subtitle"],["fxLayout","row","fxLayoutGap","1rem","fxLayoutAlign","end center"],["mat-flat-button",""],["appearance","standard",1,"example-full-width"],["type","text","matInput","",3,"formControlName","placeholder","focus"]],template:function(t,n){if(1&t&&(c.TgZ(0,"h1",0),c.YNc(1,Z,2,0,"ng-container",1),c.YNc(2,y,1,0,"ng-template",null,2,c.W1O),c.qZA(),c._UZ(4,"hr"),c.TgZ(5,"div",3),c.TgZ(6,"div",4),c.TgZ(7,"form",5),c.YNc(8,T,10,7,"ng-container",6),c.qZA(),c.TgZ(9,"div",7),c.TgZ(10,"div",8),c._uU(11),c.ALo(12,"titlecase"),c.qZA(),c.TgZ(13,"div"),c._uU(14),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(15,"hr"),c.TgZ(16,"div",9),c.TgZ(17,"button",10),c._uU(18,"Save"),c.qZA(),c.TgZ(19,"button",10),c._uU(20,"Cancel"),c.qZA(),c.qZA()),2&t){const t=c.MAs(3);c.xp6(1),c.Q6J("ngIf",n.data.company)("ngIfElse",t),c.xp6(6),c.Q6J("formGroup",n.entryFg),c.xp6(1),c.Q6J("ngForOf",n.entryFgStruct),c.xp6(3),c.hij(" ",c.lcZ(12,6,n.currentFocusControl)," "),c.xp6(3),c.hij(" ",n.currentFocusControl," ")}},directives:[a.uh,p.O5,a.xY,g.xw,g.SQ,g.Wh,l._Y,l.JL,g.yH,l.sg,p.sg,f.b8,m.lW,d.KE,d.hX,h.Nt,l.Fj,l.JJ,l.u,d.bx],pipes:[p.rS],styles:["h1[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.big[_ngcontent-%COMP%]{width:30rem}.subtitle[_ngcontent-%COMP%]{text-decoration:underline}"]}),t})(),w=(()=>{class t{constructor(t){this.dialog=t,this.dialogRef=void 0}openDialog(){this.dialogRef=this.dialog.open(A,{data:{},panelClass:"new-siling1k-entry",hasBackdrop:!0,autoFocus:!0,disableClose:!0})}}return t.\u0275fac=function(n){return new(n||t)(c.LFG(a.uw))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac}),t})();var v=e(7307);const F=[{path:"",component:i,children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class t{constructor(t){this.neds=t}ngOnInit(){}onNewEntryClick(){this.neds.openDialog()}}return t.\u0275fac=function(n){return new(n||t)(c.Y36(w))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-core-home"]],decls:7,vars:0,consts:[[1,""],["mat-flat-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(c.TgZ(0,"section"),c.TgZ(1,"div",0),c.TgZ(2,"button",1),c.NdJ("click",function(){return n.onNewEntryClick()}),c.TgZ(3,"span"),c._uU(4," New "),c.qZA(),c.TgZ(5,"mat-icon"),c._uU(6,"add"),c.qZA(),c.qZA(),c.qZA(),c.qZA())},directives:[m.lW,v.Hw],styles:[""]}),t})()}]}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(F)],r.Bz]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({providers:[w],imports:[[o.n,b]]}),t})()}}]);