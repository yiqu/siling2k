(self.webpackChunksiling2k=self.webpackChunksiling2k||[]).push([[407],{9407:(t,n,e)=>{"use strict";e.r(n),e.d(n,{SettingsModule:()=>ut});var i=e(1116),o=e(8785),s=e(229),a=e(5366);let c=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[],imports:[[i.ez]]}),t})();var r=e(1),d=e(1041),g=e(2935),l=e(3936),h=e(8639),p=e(5965),u=e(1293),f=e(7307),m=e(3070),w=e(9550),Z=e(4369);function x(t,n){if(1&t){const t=a.EpF();a.TgZ(0,"button",15),a.NdJ("click",function(){return a.CHM(t),a.oxw(2).resetNameValue()}),a.TgZ(1,"mat-icon"),a._uU(2,"close"),a.qZA(),a.qZA()}}function b(t,n){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"div",2),a.TgZ(2,"mat-icon",3),a._uU(3,"account_balance"),a.qZA(),a.TgZ(4,"div",4),a.TgZ(5,"h1",5),a._uU(6," Add new Siling1k institution "),a.qZA(),a.qZA(),a.qZA(),a._UZ(7,"hr"),a.TgZ(8,"div",6),a.TgZ(9,"form",7),a.TgZ(10,"mat-form-field",8),a.TgZ(11,"mat-label"),a._uU(12,"Institution name"),a.qZA(),a.TgZ(13,"input",9),a.NdJ("keyup.enter",function(){return a.CHM(t),a.oxw().onSave()}),a.qZA(),a.YNc(14,x,3,0,"button",10),a.qZA(),a.TgZ(15,"mat-form-field",8),a.TgZ(16,"mat-label"),a._uU(17,"Created date"),a.qZA(),a._UZ(18,"input",11),a.qZA(),a.qZA(),a.qZA(),a._UZ(19,"hr"),a.TgZ(20,"div",12),a.TgZ(21,"button",13),a.NdJ("click",function(){return a.CHM(t),a.oxw().onSave()}),a._uU(22,"Save"),a.qZA(),a.TgZ(23,"button",14),a.NdJ("click",function(){return a.CHM(t),a.oxw().onCancel()}),a._uU(24,"Cancel"),a.qZA(),a.qZA(),a.BQk()}if(2&t){const t=a.oxw();let n;a.xp6(9),a.Q6J("formGroup",t.entryFg),a.xp6(4),a.Q6J("formControlName","name"),a.xp6(1),a.Q6J("ngIf",null==(n=t.entryFg.get("name"))?null:n.value),a.xp6(4),a.Q6J("formControlName","dateAdded"),a.xp6(3),a.Q6J("disabled",t.entryFg.invalid)}}function L(t,n){1&t&&(a.TgZ(0,"div"),a._uU(1," Loading... "),a.qZA())}let y=(()=>{class t{constructor(t,n,e){this.fb=t,this.dialogRef=n,this.data=e,this.entryFg=this.fb.group({name:h.j2(null,!1,[d.kI.required,l.MS]),dateAdded:h.j2(new Date,!0)})}ngOnInit(){}onCancel(){this.dialogRef.close()}onSave(){this.entryFg.valid&&this.dialogRef.close(this.entryFg.getRawValue())}resetNameValue(){var t;null===(t=this.entryFg.get("name"))||void 0===t||t.reset()}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(d.qu),a.Y36(g.so),a.Y36(g.WI))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-settings-new-siling-dialog"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFg",""],["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start center","ngClass.gt-sm","big"],[1,""],["fxLayout","column","fxLayoutAlign","center center"],[1,"mb-0"],["mat-dialog-content",""],["onsu","",3,"formGroup"],["appearance","standard",1,"w-100"],["type","text","matInput","",3,"formControlName","keyup.enter"],["matSuffix","","mat-icon-button","","aria-label","Clear","type","button",3,"click",4,"ngIf"],["type","text","matInput","",3,"formControlName"],["mat-dialog-actions","","fxLayout","row","fxLayoutGap","1rem","fxLayoutAlign","end center"],["mat-button","","type","submit",3,"disabled","click"],["mat-button","","type","button",3,"click"],["matSuffix","","mat-icon-button","","aria-label","Clear","type","button",3,"click"]],template:function(t,n){if(1&t&&(a.YNc(0,b,25,5,"ng-container",0),a.YNc(1,L,2,0,"ng-template",null,1,a.W1O)),2&t){const t=a.MAs(2);a.Q6J("ngIf",n.entryFg)("ngIfElse",t)}},directives:[i.O5,p.xw,p.SQ,p.Wh,u.oO,f.Hw,g.xY,d._Y,d.JL,d.sg,m.KE,m.hX,w.Nt,d.Fj,d.JJ,d.u,g.H8,Z.lW,m.R9],styles:["h1[_ngcontent-%COMP%]{font-size:18px;font-weight:700}h1[_ngcontent-%COMP%]   .err-header[_ngcontent-%COMP%]{font-size:13px}.big[_ngcontent-%COMP%]{width:30rem}"]}),t})(),A=(()=>{class t{constructor(t){this.dialog=t,this.dialogRef=void 0}getDialog(t){return this.dialogRef=void 0,this.dialogRef=this.dialog.open(y,{data:{},panelClass:"new-siling1k-ins",hasBackdrop:!0,autoFocus:!0,disableClose:!0}),this.dialogRef}}return t.\u0275fac=function(n){return new(n||t)(a.LFG(g.uw))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),t})();var v=e(2852);let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-settings"]],decls:5,vars:0,consts:[[1,"container-fluid","mb-5","mt-3"],["fxLayout","row","fxLayoutAlign","center center",1,"if","underline","mb-5"]],template:function(t,n){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"section",1),a.TgZ(2,"h1"),a._uU(3,"Settings"),a.qZA(),a.qZA(),a._UZ(4,"router-outlet"),a.qZA())},directives:[p.xw,p.Wh,v.lC],styles:[""]}),t})();const _=(0,s.PH)("[Settings/API] Show/hide list update start",(0,s.Ky)()),H=(0,s.PH)("[Settings/API] Show/hide list update success",(0,s.Ky)()),O=(0,s.PH)("[Settings/API] Show/hide list update failed",(0,s.Ky)()),k=(0,s.PH)("[Settings/API] Get show/hide list start"),T=(0,s.PH)("[Settings/API] Get show/hide list success",(0,s.Ky)()),q=(0,s.PH)("[Settings/API] Get show/hide list failed",(0,s.Ky)());var M=e(4088);const P=(0,s.ZF)("settings"),S=((0,s.ZF)("admin"),(0,s.P1)(P,t=>t.showHideLists?t.showHideLists.hiding:[])),D=(0,s.P1)(P,t=>t.showHideLists?t.showHideLists.showing:[]),I=(0,s.P1)(P,t=>t.showHideLoading),U=(0,s.P1)(M.n4,S,D,(t,n,e)=>{const i=[],o=[];return t.forEach(t=>{n.find(n=>t.id===n.id)?o.push(t):i.push(t)}),n&&e&&(o.sort((t,e)=>n.findIndex(n=>n.id===t.id)>n.findIndex(t=>t.id===e.id)?1:-1),i.sort((t,n)=>e.findIndex(n=>n.id===t.id)>e.findIndex(t=>t.id===n.id)?1:-1)),{hiding:o,showing:i}});var N=e(9853),F=e(8811);let J=(()=>{class t{constructor(t,n){this.store=t,this.rs=n,this.showHideList$=this.store.select(U),this.showHideApiLoading$=this.store.select(I)}updateShowHideList(t){this.store.dispatch(_({showHideData:t}))}saveShowHideList(t){return this.rs.createDocument(t,"settings/kqpro/showHideList")}fetchShowHideList(){return this.rs.getDocument("settings/kqpro/showHideList")}getShowHideList(){this.store.dispatch(k())}addNewSilingCompany(t){this.store.dispatch(N.wb({company:t}))}}return t.\u0275fac=function(n){return new(n||t)(a.LFG(s.yh),a.LFG(F.v))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var j=e(2523),Q=e(9244),Y=e(158);function G(t,n){1&t&&(a.TgZ(0,"span",8),a._uU(1,"(loading...)"),a.qZA())}function $(t,n){if(1&t&&(a._UZ(0,"img",12),a.ALo(1,"lowercase")),2&t){const t=a.oxw().$implicit;a.Q6J("src","assets/banner/"+a.lcZ(1,2,t.name)+".jpg",a.LSH)("alt",t.name+" logo")}}function z(t,n){if(1&t&&(a.TgZ(0,"div",9),a.TgZ(1,"mat-icon",10),a._uU(2,"account_balance"),a.qZA(),a._uU(3),a.ALo(4,"silingCompanyDisplay"),a.YNc(5,$,2,4,"img",11),a.qZA()),2&t){const t=n.$implicit;a.xp6(3),a.hij(" ",a.lcZ(4,1,t.name)," ")}}function W(t,n){1&t&&(a.TgZ(0,"span",8),a._uU(1,"(loading...)"),a.qZA())}function E(t,n){if(1&t&&(a._UZ(0,"img",12),a.ALo(1,"lowercase")),2&t){const t=a.oxw().$implicit;a.Q6J("src","assets/banner/"+a.lcZ(1,2,t.name)+".jpg",a.LSH)("alt",t.name+" logo")}}function B(t,n){if(1&t&&(a.TgZ(0,"div",14),a.TgZ(1,"mat-icon",10),a._uU(2,"hide_source"),a.qZA(),a._uU(3),a.ALo(4,"silingCompanyDisplay"),a.YNc(5,E,2,4,"img",11),a.qZA()),2&t){const t=n.$implicit;a.xp6(3),a.hij(" ",a.lcZ(4,1,t.name)," ")}}function R(t,n){if(1&t&&(a.ynx(0),a.YNc(1,B,6,3,"div",13),a.BQk()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngForOf",t.hideList)}}function K(t,n){1&t&&(a.TgZ(0,"div",15),a.TgZ(1,"div"),a._uU(2," Empty! "),a.qZA(),a.TgZ(3,"div"),a._uU(4," Drag & drop items into here. "),a.qZA(),a.qZA())}let X=(()=>{class t{constructor(){this.apiLoading=!1,this.onShowHideChange=new a.vpe,this.showList=[],this.hideList=[],this.showHideData={hiding:[],showing:[]}}ngOnChanges(){this.showHideData&&(this.showList=this.showHideData.showing,this.hideList=this.showHideData.hiding)}ngOnInit(){}drop(t){t.previousContainer===t.container?(0,Q.bA)(t.container.data,t.previousIndex,t.currentIndex):(0,Q.EA)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),console.log(this.showList,this.hideList),this.onShowHideChange.emit({hiding:this.hideList,showing:this.showList})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-settings-core-show-hide"]],inputs:{showHideData:"showHideData",apiLoading:"apiLoading"},outputs:{onShowHideChange:"onShowHideChange"},features:[a.TTD],decls:15,vars:7,consts:[["cdkDropListGroup",""],["ngClass.gt-sm","desktop-width","ngClass.sm","mobile-width","ngClass.lt-sm","mobile-width",1,"drop-area-container"],[1,"mb-3","if"],["class","ml-1",4,"ngIf"],["cdkDropList","",1,"drop-area-list",3,"cdkDropListData","cdkDropListDropped"],["class","item-box left roboto","cdkDrag","",4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["emptydataList",""],[1,"ml-1"],["cdkDrag","",1,"item-box","left","roboto"],[1,"mr-2"],["class","drop-logo",3,"src","alt",4,"cdkDragPreview"],[1,"drop-logo",3,"src","alt"],["class","item-box right roboto","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"item-box","right","roboto"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px",1,"if","p-3"]],template:function(t,n){if(1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h2",2),a._uU(3," Currently Being Displayed "),a.YNc(4,G,2,0,"span",3),a.qZA(),a.TgZ(5,"div",4),a.NdJ("cdkDropListDropped",function(t){return n.drop(t)}),a.YNc(6,z,6,3,"div",5),a.qZA(),a.qZA(),a.TgZ(7,"div",1),a.TgZ(8,"h2",2),a._uU(9," Hidden "),a.YNc(10,W,2,0,"span",3),a.qZA(),a.TgZ(11,"div",4),a.NdJ("cdkDropListDropped",function(t){return n.drop(t)}),a.YNc(12,R,2,1,"ng-container",6),a.YNc(13,K,5,0,"ng-template",null,7,a.W1O),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.MAs(14);a.xp6(4),a.Q6J("ngIf",n.apiLoading),a.xp6(1),a.Q6J("cdkDropListData",n.showList),a.xp6(1),a.Q6J("ngForOf",n.showList),a.xp6(4),a.Q6J("ngIf",n.apiLoading),a.xp6(1),a.Q6J("cdkDropListData",n.hideList),a.xp6(1),a.Q6J("ngIf",n.hideList&&n.hideList.length>0)("ngIfElse",t)}},directives:[Q.Fd,u.oO,i.O5,Q.Wj,i.sg,Q.Zt,f.Hw,Q.pV,p.xw,p.Wh,p.SQ],pipes:[Y.n,i.i8],styles:[".drop-area-container[_ngcontent-%COMP%]{max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.drop-area-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background-color:#b3ffcc}.drop-area-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background-color:#e6e6e6}.desktop-width[_ngcontent-%COMP%]{width:400px}.mobile-width[_ngcontent-%COMP%]{width:100%}.drop-area-list[_ngcontent-%COMP%]{border:1px solid #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.item-box[_ngcontent-%COMP%]{padding:15px 10px;border-bottom:1px solid #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;box-sizing:border-box;cursor:move;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.item-box[_ngcontent-%COMP%]:last-child{border:none}.custom-placeholder[_ngcontent-%COMP%], .drop-area-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .item-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.custom-placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:60px}"]}),t})();var V=e(5959);let tt=(()=>{class t{constructor(){this.wholePage=!1,this.loading=!0,this.logoShakeState=!1,this.compDest$=new V.xQ}ngOnChanges(t){this.parentClass=this.wholePage?"whole-page loading-container":"container loading-container mt-5"}ngOnInit(){}ngOnDestroy(){this.compDest$.next(null),this.compDest$.complete()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-shared-loading"]],inputs:{wholePage:"wholePage"},features:[a.TTD],decls:13,vars:2,consts:[[1,"row"],[1,"col-sm-12"],[1,"d-flex","loading-parent"],[1,"loading-logo"],["src","assets/banner/money.png","alt","logo",1,"logo-img","d-inline-block"],[1,"lds-facebook"],[1,"d-flex","loading-parent","secfont"]],template:function(t,n){1&t&&(a.TgZ(0,"div"),a.TgZ(1,"div",0),a.TgZ(2,"div",1),a.TgZ(3,"div",2),a.TgZ(4,"div",3),a._UZ(5,"img",4),a.qZA(),a.qZA(),a.TgZ(6,"div",2),a.TgZ(7,"div",5),a._UZ(8,"div"),a._UZ(9,"div"),a._UZ(10,"div"),a.qZA(),a.qZA(),a.TgZ(11,"div",6),a._uU(12," Loading... "),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&a.Tol(n.parentClass)},styles:[".loading-logo[_ngcontent-%COMP%]{height:3rem}.loading-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.loading-container[_ngcontent-%COMP%], .loading-parent[_ngcontent-%COMP%]{justify-content:center;align-items:center}.loading-container[_ngcontent-%COMP%]{display:flex;height:100%}.whole-page[_ngcontent-%COMP%]{position:fixed;width:100%}.lds-facebook[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;position:absolute;left:8px;width:16px;background:#007bff;animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{left:8px;animation-delay:-.24s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:32px;animation-delay:-.12s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:56px;animation-delay:0}@keyframes lds-facebook{0%{top:8px;height:64px}50%,to{top:24px;height:32px}}"]}),t})();function nt(t,n){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"div"),a.TgZ(2,"app-settings-core-show-hide",10),a.NdJ("onShowHideChange",function(n){return a.CHM(t),a.oxw().onShowHideChange(n)}),a.ALo(3,"async"),a.ALo(4,"async"),a.qZA(),a.qZA(),a.BQk()}if(2&t){const t=a.oxw();a.xp6(2),a.Q6J("showHideData",a.lcZ(3,2,t.ss.showHideList$))("apiLoading",a.lcZ(4,4,t.ss.showHideApiLoading$))}}function et(t,n){1&t&&(a.TgZ(0,"div",11),a._UZ(1,"app-shared-loading"),a.qZA())}const it=[{path:"",component:C,children:[{path:"",redirectTo:"all",pathMatch:"full"},{path:"all",component:(()=>{class t{constructor(t,n,e,i){this.ss=t,this.as=n,this.nsd=e,this.tcp=i}ngOnInit(){this.ss.getShowHideList()}onShowHideChange(t){this.ss.updateShowHideList(t)}onAddNewIns(){this.nsd.getDialog(void 0).afterClosed().subscribe(t=>{if(t&&t.name&&t.dateAdded){const n={dateAdded:new Date(t.dateAdded).getTime(),id:"",name:t.name?this.tcp.transform(t.name):"Invalid Name",hidden:!1};this.ss.addNewSilingCompany(n)}})}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(J),a.Y36(j.l),a.Y36(A),a.Y36(i.rS))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-settings-core"]],decls:18,vars:4,consts:[["fxLayout","column","fxLayoutAlign","start center","fxLayoutGap","25px"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","40px",1,"w-100"],["fxLayout","row","fxLayoutAlign","start center"],[1,"roboto"],[4,"ngIf","ngIfElse"],["fxLayout","row","fxLayoutAlign","center center"],["mat-flat-button","","color","primary",3,"click"],[1,"mx-1"],[1,""],["loading",""],[3,"showHideData","apiLoading","onShowHideChange"],[1,"my-5"]],template:function(t,n){if(1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"section",1),a.TgZ(2,"div",2),a.TgZ(3,"h2",3),a._uU(4," Show or hide Siling institutions "),a.qZA(),a.qZA(),a.YNc(5,nt,5,6,"ng-container",4),a.ALo(6,"async"),a.qZA(),a.TgZ(7,"section",1),a.TgZ(8,"div",5),a.TgZ(9,"button",6),a.NdJ("click",function(){return n.onAddNewIns()}),a.TgZ(10,"mat-icon"),a._uU(11,"add"),a.qZA(),a.TgZ(12,"span",7),a._uU(13," Add New Institution "),a.qZA(),a.TgZ(14,"mat-icon",8),a._uU(15,"account_balance"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(16,et,2,0,"ng-template",null,9,a.W1O)),2&t){const t=a.MAs(17);a.xp6(5),a.Q6J("ngIf",!1===a.lcZ(6,2,n.as.getSilingCompanyLoading$))("ngIfElse",t)}},directives:[p.xw,p.Wh,p.SQ,i.O5,Z.lW,f.Hw,X,tt],pipes:[i.Ov],styles:[""]}),t})()}]}];let ot=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[v.Bz.forChild(it)],v.Bz]}),t})();var st=e(436),at=e(4689),ct=e(9996),rt=e(7727),dt=e(4019),gt=e(878),lt=e(1447);const ht=[(()=>{class t{constructor(t,n,e){this.actions$=t,this.ts=n,this.ss=e,this.updateShowHideList$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(_),(0,st.b)(t=>{const n=t.showHideData;return this.ss.saveShowHideList(n).then(t=>H({showHideData:n,successMsg:"Updated Show/Hide list successfully."})).catch(t=>O({errMsg:t}))}))),this.getShowHideList$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(k),(0,at.w)(t=>this.ss.fetchShowHideList().pipe((0,ct.U)(t=>T({payload:t,successMsg:"Fetched Show/Hide list successfully."})),(0,rt.K)(t=>(0,gt.of)(q({errMsg:t}))))))),this.successOperationToast$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(T,H),(0,dt.b)(t=>{var n;const e=null!==(n=t.successMsg)&&void 0!==n?n:"Operation success.";this.ts.getSuccess(e)})),{dispatch:!1})}}return t.\u0275fac=function(n){return new(n||t)(a.LFG(o.eX),a.LFG(lt.M),a.LFG(J))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),t})()],pt=(0,s.Lq)({showHideLists:{hiding:[],showing:[]},showHideLoading:!1},(0,s.on)(_,(t,{showHideData:n})=>Object.assign(Object.assign({},t),{showHideLoading:!0,showHideLists:n})),(0,s.on)(H,(t,{showHideData:n})=>Object.assign(Object.assign({},t),{showHideLoading:!1,showHideLists:n,err:!1,errMsg:void 0})),(0,s.on)(O,(t,{errMsg:n})=>Object.assign(Object.assign({},t),{showHideLoading:!1,err:!0,errMsg:n})),(0,s.on)(k,t=>Object.assign(Object.assign({},t),{showHideLoading:!0})),(0,s.on)(T,(t,{payload:n})=>Object.assign(Object.assign({},t),{showHideLoading:!1,showHideLists:n,err:!1,errMsg:void 0})),(0,s.on)(q,(t,{errMsg:n})=>Object.assign(Object.assign({},t),{showHideLoading:!1,err:!0,errMsg:n})));let ut=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[A,i.rS],imports:[[r.n,c,ot,o.sQ.forFeature(ht),s.Aw.forFeature("settings",pt)]]}),t})()}}]);