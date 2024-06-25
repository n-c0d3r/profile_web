
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);



const PAGE_CONTENT_MAX_INNER_WIDTH_PX = 1400;
const PAGE_CONTENT_PADDING_VERTICAL_PX = 50;
const PAGE_CONTENT_PADDING_HORIZONTAL_PX = 50;



n0d3s.UI.Style(`

.page-content {

    margin: 0;
    padding-left: 5%;
    padding-right: 5%;

    padding-top: min(10vh, 21vw);
    padding-bottom: min(10vh, 21vw);

    display: flex;
    flex-flow: row;
    flex-wrap: wrap;

    justify-content: space-around;

    height: fit-content;

    gap: ${PAGE_CONTENT_PADDING_HORIZONTAL_PX}px ${PAGE_CONTENT_PADDING_VERTICAL_PX}px;

    z-index: 0;

}

@media (min-width: ${PAGE_CONTENT_MAX_INNER_WIDTH_PX}px) {

    .page-content {

        width: calc(${PAGE_CONTENT_MAX_INNER_WIDTH_PX}px - 10%);

        padding-left: calc(55% - ${PAGE_CONTENT_MAX_INNER_WIDTH_PX / 2}px);
        padding-right: calc(55% - ${PAGE_CONTENT_MAX_INNER_WIDTH_PX / 2}px);

    }

}

@media (max-width: ${PAGE_CONTENT_MAX_INNER_WIDTH_PX}px) {

    .page-content {

        width: 90%;

        padding-left: 5%;
        padding-right: 5%;

    }

}

    
    
@media (min-width: 1000px) {

    .two-content-body {
    
        
    
    }
    
    .two-content-body-reverse {
    
        flex-flow: row-reverse wrap;
    
    }

}

@media (max-width: 1000px) {

    .two-content-body {
    
        flex-flow: column;
    
    }
    
    .two-content-body-reverse {
    
        flex-flow: column;
    
    }

}

`);