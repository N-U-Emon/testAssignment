$(document).ready(function(){
    // Social share icon bar
	$('#share-bar').share({
        theme:'circle',
        popupWidth: false,
        popupHeight:false,
        channels: ['facebook','googleplus','youtube','twitter'],
        itemTriggerClass:'js-share',
        animate:true,
        pageUrl: window.location.href,
    });

    // Image Hover effect 
    $('.demo').contenthover({
        overlay_background:'#e8e9e9',
        overlay_opacity:0.8
    });
    
        

});

