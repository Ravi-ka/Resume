let navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
//console.log(navMenuAnchorTags);

for(let i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
            event.preventDefault();

            let targetSectionID=this.textContent.trim().toLowerCase();
            let targetSection=document.getElementById(targetSectionID);
            console.log(targetSection);

            let scrollInterval= setInterval(function(){
                let scrollCoordinates=targetSection.getBoundingClientRect();
                    //console.log(scrollCoordinates);
                    if(scrollCoordinates.top<=0){
                        clearInterval(scrollInterval);
                        return;
                    }
                window.scrollBy(0,50);
                
            },20)
    })
}