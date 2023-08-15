
module.use({

    n0d3s: "./n0d3s",
    
    text_config: "./common/text_config",

})
.use([

    "./common/style.js"

]);



const TEXT_BODY_MIN_WIDTH_PX = 500;



n0d3s.UI.Style(`

.text-body {

    color: rgb(180, 180, 180);

    word-wrap: break-word;

    display: initial;

    min-height: fit-content;

}

.text-body > span {

    word-wrap: break-word;

}

`);