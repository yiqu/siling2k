(self.webpackChunksiling2k=self.webpackChunksiling2k||[]).push([[238],{5238:(t,i,s)=>{"use strict";s.r(i),s.d(i,{SettingsModule:()=>Q});var e=s(8785),o=s(229),n=s(1),r=s(2852),a=s(5366),c=s(5965);let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-settings"]],decls:5,vars:0,consts:[[1,"container-fluid","mb-3","mt-3"],["fxLayout","row","fxLayoutAlign","center center",1,"if","underline","mb-5"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"section",1),a.TgZ(2,"h1"),a._uU(3,"Settings"),a.qZA(),a.qZA(),a._UZ(4,"router-outlet"),a.qZA())},directives:[c.xw,c.Wh,r.lC],styles:[""]}),t})();const h=(0,o.PH)("[Settings/API] Show/hide list update start",(0,o.Ky)()),g=(0,o.PH)("[Settings/API] Show/hide list update success",(0,o.Ky)()),p=(0,o.PH)("[Settings/API] Show/hide list update failed",(0,o.Ky)()),l=(0,o.PH)("[Settings/API] Get show/hide list start"),u=(0,o.PH)("[Settings/API] Get show/hide list success",(0,o.Ky)()),w=(0,o.PH)("[Settings/API] Get show/hide list failed",(0,o.Ky)());var f=s(4088);const L=(0,o.ZF)("settings"),m=((0,o.ZF)("admin"),(0,o.P1)(L,t=>t.showHideLists?t.showHideLists.hiding:[])),x=(0,o.P1)(f.n4,m,(t,i)=>{const s=[],e=[];return t.forEach(t=>{i.find(i=>t.id===i.id)?e.push(t):s.push(t)}),{hiding:e,showing:s}});var b=s(8811);let H=(()=>{class t{constructor(t,i){this.store=t,this.rs=i,this.showHideList$=this.store.select(x)}updateShowHideList(t){this.store.dispatch(h({showHideData:t}))}saveShowHideList(t){return this.rs.createDocument(t,"settings/kqpro/showHideList")}fetchShowHideList(){return this.rs.getDocument("settings/kqpro/showHideList")}getShowHideList(){this.store.dispatch(l())}}return t.\u0275fac=function(i){return new(i||t)(a.LFG(o.yh),a.LFG(b.v))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Z=s(2523),v=s(9244),y=s(1293),O=s(1116),D=s(7307),S=s(158);function A(t,i){if(1&t&&a._UZ(0,"img",9),2&t){const t=a.oxw().$implicit;a.Q6J("src","assets/banner/"+t.id+".jpg",a.LSH)("alt",t.name+" logo")}}function C(t,i){if(1&t&&(a.TgZ(0,"div",6),a.TgZ(1,"mat-icon",7),a._uU(2,"account_balance"),a.qZA(),a._uU(3),a.ALo(4,"silingCompanyDisplay"),a.YNc(5,A,1,2,"img",8),a.qZA()),2&t){const t=i.$implicit;a.xp6(3),a.hij(" ",a.lcZ(4,1,t.name)," ")}}function k(t,i){if(1&t&&a._UZ(0,"img",9),2&t){const t=a.oxw().$implicit;a.Q6J("src","assets/banner/"+t.id+".jpg",a.LSH)("alt",t.name+" logo")}}function P(t,i){if(1&t&&(a.TgZ(0,"div",10),a.TgZ(1,"mat-icon",7),a._uU(2,"hide_source"),a.qZA(),a._uU(3),a.ALo(4,"silingCompanyDisplay"),a.YNc(5,k,1,2,"img",8),a.qZA()),2&t){const t=i.$implicit;a.xp6(3),a.hij(" ",a.lcZ(4,1,t.name)," ")}}let M=(()=>{class t{constructor(){this.onShowHideChange=new a.vpe,this.showList=[],this.hideList=[],this.showHideData={hiding:[],showing:[]}}ngOnChanges(){this.showHideData&&(this.showList=this.showHideData.showing,this.hideList=this.showHideData.hiding)}ngOnInit(){}drop(t){t.previousContainer===t.container?(0,v.bA)(t.container.data,t.previousIndex,t.currentIndex):(0,v.EA)(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex),console.log(this.showList,this.hideList),this.onShowHideChange.emit({hiding:this.hideList,showing:this.showList})}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-settings-core-show-hide"]],inputs:{showHideData:"showHideData"},outputs:{onShowHideChange:"onShowHideChange"},features:[a.TTD],decls:11,vars:4,consts:[["cdkDropListGroup",""],["ngClass.gt-sm","desktop-width","ngClass.sm","mobile-width","ngClass.lt-sm","mobile-width",1,"drop-area-container"],[1,"mb-3","if"],["cdkDropList","",1,"drop-area-list",3,"cdkDropListData","cdkDropListDropped"],["class","item-box left roboto","cdkDrag","",4,"ngFor","ngForOf"],["class","item-box right roboto","cdkDrag","",4,"ngFor","ngForOf"],["cdkDrag","",1,"item-box","left","roboto"],[1,"mr-2"],["class","drop-logo",3,"src","alt",4,"cdkDragPreview"],[1,"drop-logo",3,"src","alt"],["cdkDrag","",1,"item-box","right","roboto"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h2",2),a._uU(3,"Currently Being Displayed"),a.qZA(),a.TgZ(4,"div",3),a.NdJ("cdkDropListDropped",function(t){return i.drop(t)}),a.YNc(5,C,6,3,"div",4),a.qZA(),a.qZA(),a.TgZ(6,"div",1),a.TgZ(7,"h2",2),a._uU(8,"Hidden"),a.qZA(),a.TgZ(9,"div",3),a.NdJ("cdkDropListDropped",function(t){return i.drop(t)}),a.YNc(10,P,6,3,"div",5),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.Q6J("cdkDropListData",i.showList),a.xp6(1),a.Q6J("ngForOf",i.showList),a.xp6(4),a.Q6J("cdkDropListData",i.hideList),a.xp6(1),a.Q6J("ngForOf",i.hideList))},directives:[v.Fd,y.oO,v.Wj,O.sg,v.Zt,D.Hw,v.pV],pipes:[S.n],styles:[".drop-area-container[_ngcontent-%COMP%]{max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.drop-area-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{background-color:#b3ffcc}.drop-area-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{background-color:#e6e6e6}.desktop-width[_ngcontent-%COMP%]{width:400px}.mobile-width[_ngcontent-%COMP%]{width:100%}.drop-area-list[_ngcontent-%COMP%]{border:1px solid #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.item-box[_ngcontent-%COMP%]{padding:15px 10px;border-bottom:1px solid #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;box-sizing:border-box;cursor:move;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.item-box[_ngcontent-%COMP%]:last-child{border:none}.custom-placeholder[_ngcontent-%COMP%], .drop-area-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .item-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.custom-placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;min-height:60px}"]}),t})();const _=[{path:"",component:d,children:[{path:"",redirectTo:"all",pathMatch:"full"},{path:"all",component:(()=>{class t{constructor(t,i){this.ss=t,this.as=i}ngOnInit(){this.ss.getShowHideList()}onShowHideChange(t){this.ss.updateShowHideList(t)}}return t.\u0275fac=function(i){return new(i||t)(a.Y36(H),a.Y36(Z.l))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-settings-core"]],decls:8,vars:3,consts:[["fxLayout","column","fxLayoutAlign","start center","fxLayoutGap","25px"],["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","40px",1,"w-100"],["fxLayout","row","fxLayoutAlign","start center"],[1,"roboto"],[3,"showHideData","onShowHideChange"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"section",1),a.TgZ(2,"div",2),a.TgZ(3,"h2",3),a._uU(4," Show / Hide Siling Data on Dashboard "),a.qZA(),a.qZA(),a.TgZ(5,"div"),a.TgZ(6,"app-settings-core-show-hide",4),a.NdJ("onShowHideChange",function(t){return i.onShowHideChange(t)}),a.ALo(7,"async"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(6),a.Q6J("showHideData",a.lcZ(7,1,i.ss.showHideList$)))},directives:[c.xw,c.Wh,c.SQ,M],pipes:[O.Ov],styles:[""]}),t})()}]}];let T=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[r.Bz.forChild(_)],r.Bz]}),t})();var q=s(436),j=s(4689),F=s(9996),G=s(7727),I=s(4019),U=s(878),$=s(1447);const J=[(()=>{class t{constructor(t,i,s){this.actions$=t,this.ts=i,this.ss=s,this.updateShowHideList$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(h),(0,q.b)(t=>{const i=t.showHideData;return this.ss.saveShowHideList(i).then(t=>g({showHideData:i,successMsg:"Updated Show/Hide list successfully."})).catch(t=>p({errMsg:t}))}))),this.getShowHideList$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(l),(0,j.w)(t=>this.ss.fetchShowHideList().pipe((0,F.U)(t=>u({payload:t,successMsg:"Fetched Show/Hide list successfully."})),(0,G.K)(t=>(0,U.of)(w({errMsg:t}))))))),this.successOperationToast$=(0,e.GW)(()=>this.actions$.pipe((0,e.l4)(u,g),(0,I.b)(t=>{var i;const s=null!==(i=t.successMsg)&&void 0!==i?i:"Operation success.";this.ts.getSuccess(s)})),{dispatch:!1})}}return t.\u0275fac=function(i){return new(i||t)(a.LFG(e.eX),a.LFG($.M),a.LFG(H))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),t})()],z=(0,o.Lq)({showHideLists:{hiding:[],showing:[]},showHideLoading:!1},(0,o.on)(h,(t,{showHideData:i})=>Object.assign(Object.assign({},t),{showHideLoading:!0,showHideLists:i})),(0,o.on)(g,(t,{showHideData:i})=>Object.assign(Object.assign({},t),{showHideLoading:!1,showHideLists:i,err:!1,errMsg:void 0})),(0,o.on)(p,(t,{errMsg:i})=>Object.assign(Object.assign({},t),{showHideLoading:!1,err:!0,errMsg:i})),(0,o.on)(l,t=>Object.assign(Object.assign({},t),{showHideLoading:!0})),(0,o.on)(u,(t,{payload:i})=>Object.assign(Object.assign({},t),{showHideLoading:!1,showHideLists:i,err:!1,errMsg:void 0})),(0,o.on)(w,(t,{errMsg:i})=>Object.assign(Object.assign({},t),{showHideLoading:!1,err:!0,errMsg:i})));let Q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[],imports:[[n.n,T,e.sQ.forFeature(J),o.Aw.forFeature("settings",z)]]}),t})()}}]);