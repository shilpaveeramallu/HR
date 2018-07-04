$.components.register("animsition",{mode:"manual",defaults:{inClass:"fade-in",outClass:"fade-out",inDuration:800,outDuration:500,linkElement:".animsition-link",loading:!0,loadingParentElement:".page",loadingClass:"loader",loadingType:"default",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",inDefaults:["fade-in","fade-in-up-sm","fade-in-up","fade-in-up-lg","fade-in-down-sm","fade-in-down","fade-in-down-lg","fade-in-left-sm","fade-in-left","fade-in-left-lg","fade-in-right-sm","fade-in-right","fade-in-right-lg","zoom-in-sm","zoom-in","zoom-in-lg"],outDefaults:["fade-out","fade-out-up-sm","fade-out-up","fade-out-up-lg","fade-out-down-sm","fade-out-down","fade-out-down-lg","fade-out-left-sm","fade-out-left","fade-out-left-lg","fade-out-right-sm","fade-out-right","fade-out-right-lg","zoom-out-sm","zoom-out","zoom-out-lg"]},init:function(a,n){var o=$.components.getDefaults("animsition");if(o.random){var i=o.inDefaults.length,t=o.outDefaults.length,e=parseInt(i*Math.random(),0),l=parseInt(t*Math.random(),0);o.inClass=o.inDefaults[e],o.outClass=o.outDefaults[l]}var d=$(".animsition",a);return d.animsition(o),$("."+o.loadingClass).addClass("loader-"+o.loadingType),d.animsition("supportCheck",o)?($.isFunction(n)&&d.one("animsition.end",function(){n.call()}),!0):($.isFunction(n)&&n.call(),!1)}});