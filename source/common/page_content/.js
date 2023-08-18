
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./style"

]);



function PageContent(){

    return n0d3s.UI.Element("div")
    .appendClass("page-content")
    .setInner(
        
    )
    .exe(function(){

        let page_content = this;

        page_content.useLargeWidth = function(){

            page_content.setStyle({
        
                width: `calc(${(1400 / 3 - 50) * 2}px + 10vw)`,
        
            });

            return page_content;
        }

        page_content.setWidthLevel = function(width_level){

            page_content.setStyle({
        
                width: `min(100%, ${1400 / (width_level + 1) - 50}px)`,
        
            });

            return page_content;
        }

    });
}



return PageContent;