(function(g){var window=this;'use strict';var B6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.re=!1;this.player=a;this.T(a,"minimized",this.xg);this.T(a,"onStateChange",this.wG)},C6=function(a){g.$M.call(this,a);
this.i=new B6(this.player);this.i.hide();g.NM(this.player,this.i.element,4);a.Me()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(B6,g.V);g.k=B6.prototype;
g.k.qE=function(){this.tooltip=new g.zQ(this.player,this);g.I(this,this.tooltip);g.NM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.uc=new g.TN(this.player);g.I(this,this.uc);this.Cg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Cg);this.Cg.Ea(this.element);this.T(this.Cg.element,"click",this.gA);var a=new g.V({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.VK()]});g.I(this,a);a.Ea(this.Cg.element);this.T(a.element,"click",this.Ci);
a=new g.V1(this.player,this);g.I(this,a);a.Ea(this.Cg.element);this.vp=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.vp);this.vp.Ea(this.Cg.element);this.T(this.vp.element,"click",this.gA);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Ea(this.vp.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Ea(this.vp.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Ea(this.vp.element);this.hN=new g.qP(this.player,
this,!1);g.I(this,this.hN);this.hN.Ea(b.element);b=new g.oP(this.player,this);g.I(this,b);b.Ea(a.element);this.nextButton=new g.qP(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Ea(c.element);this.Fg=new g.kQ(this.player,this);g.I(this,this.Fg);this.Fg.Ea(this.Cg.element);this.Fc=new g.xP(this.player,this);g.I(this,this.Fc);g.NM(this.player,this.Fc.element,4);this.Uz=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.Uz);g.NM(this.player,this.Uz.element,4);a=new g.V({G:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.VK()]});g.I(this,a);a.Ea(this.Uz.element);this.T(a.element,"click",this.Ci);a=new g.V({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.$K()]});g.I(this,a);a.Ea(this.Uz.element);this.T(a.element,"click",this.xV);this.T(this.player,"presentingplayerstatechange",this.Lc);this.T(this.player,"appresize",this.wb);this.T(this.player,"fullscreentoggled",this.wb);this.wb()};
g.k.show=function(){this.Id=new g.Dq(this.iq,null,this);this.Id.start();this.re||(this.qE(),this.re=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Fc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Id&&(this.Id.dispose(),this.Id=void 0);g.V.prototype.hide.call(this);this.player.Me()||(this.re&&this.Fc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Id&&(this.Id.dispose(),this.Id=void 0);g.V.prototype.ya.call(this)};
g.k.Ci=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.xV=function(){this.player.playVideo()};
g.k.gA=function(a){if(a.target===this.Cg.element||a.target===this.vp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.YJ(this.player.xb())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.xg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Me())};
g.k.ld=function(){this.Fc.Wb();this.Fg.Wb()};
g.k.iq=function(){this.ld();this.Id&&this.Id.start()};
g.k.Lc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.wb=function(){g.KP(this.Fc,0,this.player.bb().getPlayerSize().width,!1);g.yP(this.Fc)};
g.k.wG=function(a){this.player.Me()&&(0===a?this.hide():this.show())};
g.k.dc=function(){return this.tooltip};
g.k.Ue=function(){return!1};
g.k.uf=function(){return!1};
g.k.wi=function(){return!1};
g.k.TA=function(){};
g.k.Ym=function(){};
g.k.Tr=function(){};
g.k.An=function(){return null};
g.k.lj=function(){return new g.El(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.qq=function(a,b,c,d,e){var f=0,h=d=0,l=g.Wl(a);if(b){c=g.Oq(b,"ytp-prev-button")||g.Oq(b,"ytp-next-button");var m=g.Oq(b,"ytp-play-button"),n=g.Oq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ul(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Oq(b,"ytp-miniplayer-button-top-left"),f=g.Ul(b,this.element),b=g.Wl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.Xf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Yk=function(){};
g.k.zk=function(){return!1};g.v(C6,g.$M);C6.prototype.create=function(){};
C6.prototype.Ki=function(){return!1};
C6.prototype.load=function(){this.player.hideControls();this.i.show()};
C6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.ZM("miniplayer",C6);})(_yt_player);
