
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

    color: rgba(200, 200, 200, 0.75);

    word-wrap: break-word;

    display: initial;

    min-height: fit-content;

    white-space: pre-wrap;

    transition: filter 0.75s;

    font-weight: 300;
}

.text-body > span {

    word-wrap: break-word;

}

`);