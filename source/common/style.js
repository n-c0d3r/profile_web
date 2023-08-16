
module.use({

    n0d3s: "./n0d3s",

});



const BG_COLOR = `rgb(22, 22, 22)`;



n0d3s.UI.Style(`

    html {
        overflow: auto;
    }

    body {

        padding-top: 50px;
        padding-right: 0;
        padding-left: 0;
        padding-bottom: 0;
        margin: 0;

        background-color: ${BG_COLOR};

    }

    .info-text-0 {

        font-weight: 500;
        color: rgba(140, 235, 240, 0.8);

    }

    .info-text-1 {

        font-weight: 500;
        color: rgba(140, 200, 255, 0.8);

    }

    .info-text-2 {

        font-weight: 500;
        color: rgba(180, 255, 180, 0.8);

    }

    .info-text-3 {

        font-weight: 420;
        color: rgba(240, 240, 240, 1);

    }

    .info-text-4 {

        color: rgb(160, 160, 160);

    }

    * {

        font-family:  -apple-system, -apple-system, 
        BlinkMacSystemFont, 'Segoe UI', Roboto, 
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 
        'Helvetica Neue', sans-serif;

    }

    span {

        white-space: pre-wrap;

    }

    a {

        text-decoration: none;

    }

    .item-center {

        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        
    }

    .item-left {

        align-items: left;
        text-align: left;
        
    }

    .item-right {

        align-items: right;
        text-align: right;
        
    }

    .item-justify {

        align-items: justify;
        text-align: justify;
        
    }

    .prevent-select {
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

`);