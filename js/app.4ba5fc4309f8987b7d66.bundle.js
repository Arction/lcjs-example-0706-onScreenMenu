(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,n,t)=>{const o=t(475),r=t(27),{lightningChart:s,OnScreenMenuButtonType:a,OnScreenMenuButtonShape:i,ColorRGBA:d,SolidFill:c,PointShape:l,SolidLine:u,Themes:y}=o,{createProgressiveTraceGenerator:m,createProgressiveRandomGenerator:x}=r,S=s().Dashboard({numberOfColumns:1,numberOfRows:3}),h=S.createChartXY({columnIndex:0,columnSpan:1,rowIndex:0,rowSpan:2}),f=h.getDefaultAxisX().setInterval({start:0,end:100}),p=S.createZoomBandChart({columnIndex:0,rowIndex:2}),g=h.addLineSeries(),b=new u({fillStyle:new c({color:d(200,50,50)}),thickness:2}),w=h.addLineSeries().setStrokeStyle(b),I=h.addPointSeries({pointShape:l.Circle}).setPointFillStyle(new c({color:d(180,180,180)})).setPointSize(10);p.add(g),p.add(w),p.add(I);const O=[];let P,R=!1;function C(e){const n=e.x;if(e.x>0){if(e.y>O[n].y&&P.y<O[n-1].y||e.y<O[n].y&&P.y>O[n-1].y){const t=function(e,n,t,o){const r=e.x*n.y-e.y*n.x,s=t.x*o.y-t.y*o.x,a=t.x-o.x,i=e.x-n.x,d=t.y-o.y,c=e.y-n.y,l=(e.x-n.x)*(t.y-o.y)-(e.y-n.y)*(t.x-o.x);if(0===l)throw new Error("Number of intersection points is zero or infinity.");return{x:(r*a-i*s)/l,y:(r*d-c*s)/l}}(e,P,O[n],O[n-1]);I.add(t)}P=e}else P=e}m().setNumberOfPoints(250).generate().toPromise().then((e=>{O.push(...e),g.add(e)})),x().setNumberOfPoints(250).generate().setStreamBatchSize(1).setStreamInterval(50).setStreamRepeat(!1).toStream().forEach((e=>{const n=e.y*(20*Math.random())-10;if(w.add({x:e.x,y:n}),C({x:e.x,y:n}),e.x>50&&e.x<200){const e=f.getInterval();f.setInterval({start:e.start+1,end:e.end+1})}})),h.addOnScreenMenu([[a.ZoomInX,a.ZoomOutX,a.ZoomInY,a.ZoomOutY,a.ZoomToFit,a.ToggleAnimations,{icon:document.head.baseURI+"examples/assets/0706/icon.png",dimensions:{rows:1,columns:1},opacity:"0.8",color:"blue",shape:i.RoundedRectangle,action:function(){R?I.setVisible(!0):I.setVisible(!1),R=0==R}}]],i.RoundedRectangle)}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);