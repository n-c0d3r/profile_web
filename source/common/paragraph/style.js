
module.use({

    n0d3s: "./n0d3s",
    
    text_config: "./common/text_config",

})
.use([

    "./common/style.js"

]);







n0d3s.UI.Style(`

.paragraph {

    display: flex;

    flex-flow: column;
    flex-wrap: wrap;

    justify-content: flex-start;

    min-height: fit-content;

}

.paragraph-name {

    color: rgb(220, 220, 220);

    margin-bottom: 10px;

    flex-flow: row;
    flex-wrap: wrap;

}

.paragraph-content {

    min-height: fit-content;

}

.paragraph-name > span {

    word-wrap: break-word;

}

.paragraph-content > span {

    word-wrap: break-word;

}

`);