
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);



const TEXT_BODY_MIN_WIDTH_PX = 500;



n0d3s.UI.Style(`

.image-body {

    width: 100%;
    min-height: fit-content;

    border-radius: min(1.5vh, 1.5vw);

}

`);