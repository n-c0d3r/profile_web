
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./style"

]);



function ImageBody(url){

    let result = n0d3s.UI.Element("img")
    .appendClass("image-body")
    .setStyle({

        

    })
    .setAttribute("src", url)
    .exe(function(){

        let image_body = this;
        
        image_body.setWidthLevel = function(width_level = 1){

            image_body.setStyle({
        
                width: `min(100%, ${1400 / (width_level + 1) - 50}px)`,
        
            });

            return image_body;
        }

    });
    

    return result;
}



return ImageBody;