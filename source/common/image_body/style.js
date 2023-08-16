
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);



const TEXT_BODY_MIN_WIDTH_PX = 500;



n0d3s.UI.Style(`

.image-body {

    /*width: 100%;*/
    min-height: fit-content;

    border-radius: min(1.5vh, 1.5vw);
    
    border: solid 1px rgb(100, 100, 100);
    
    box-shadow: 12px 12px 12px rgba(0,0,0,0.3);

}
    
    
    
@media (min-width: 1000px) {

    .image-body {
    
        width: min(calc(100% - 2px), ${1400/3 - 50 - 2}px);
    
    }

}

@media (max-width: 1000px) {

    .image-body {
    
        width: calc(100% - 2px);
    
    }

}

`);