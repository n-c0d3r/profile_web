
module.use({

    n0d3s: "./n0d3s",

});



const BG_COLOR = `rgb(12, 12, 13)`;



n0d3s.UI.Style(`

    html {
        overflow: auto;

        color-scheme: dark;

    }

    body {

        padding-top: 50px;
        padding-right: 0;
        padding-left: 0;
        padding-bottom: 0;
        margin: 0;

        background-color: ${BG_COLOR};

        color-scheme: dark;

    }

    .info-text-0 {

        font-weight: 400;
        color: rgba(120, 230, 240, 0.8);
        text-decoration: underline dotted rgba(120, 230, 240, 0.3);

    }

    .info-text-1 {

        font-weight: 400;
        color: rgba(110, 200, 255, 0.8);
        text-decoration: underline dotted rgba(110, 200, 255, 0.3);

    }

    .info-text-2 {

        font-weight: 400;
        color: rgba(180, 240, 120, 0.8);
        text-decoration: underline dotted rgba(180, 240, 120, 0.3);

    }

    .info-text-3 {

        font-weight: 420;
        color: rgba(240, 240, 240, 1);
        text-decoration: underline dotted rgba(240, 240, 240, 0.3);

    }

    .info-text-4 {

        color: rgb(160, 160, 160);
        text-decoration: underline dotted rgba(160, 160, 160, 0.3);

    }

    .info-text-5 {

        font-weight: 400;
        color: rgba(150, 125, 200, 0.8);
        text-decoration: underline dotted rgba(150, 125, 200, 0.3);

    }

    .info-text-6 {

        font-weight: 400;
        color: rgba(70, 200, 150, 0.8);
        text-decoration: underline dotted rgba(70, 200, 150, 0.3);

    }

    .info-text-7 {

        font-weight: 400;
        color: rgba(150, 130, 255, 0.8);
        text-decoration: underline dotted rgba(150, 130, 255, 0.3);

    }

    .info-text-8 {

        font-weight: 400;
        color: rgba(220, 220, 40, 0.8);
        text-decoration: underline dotted rgba(220, 220, 70, 0.3);

    }

    .info-text-9 {

        font-weight: 400;
        color: rgba(110, 130, 230, 0.8);
        text-decoration: underline dotted rgba(110, 130, 230, 0.3);

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

        color: rgba(255, 255, 255, 1.0);
        text-decoration: none;
        
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */

        cursor: pointer;

    }

    .link:hover {

        cursor: pointer;

        text-decoration: underline;

    }

    .github-link {

        background-image: url("${window.origin}/resources/image/icon/github-mark-white_32.png");
        background-size: cover;

        display: inline-block;

        height: 18px;
        width: 18px;

        transform: translate(0, 4px);

    }

    .ytb-link {

        background-image: url("${window.origin}/resources/image/icon/youtube_fullcolor.png");
        background-size: cover;

        display: inline-block;

        height: 18px;
        width: 18px;

        transform: translate(0, 4px);

    }

    .gg-play-link {

        background-image: url("${window.origin}/resources/image/icon/ggplay.png");
        background-size: cover;

        display: inline-block;

        height: 18px;
        width: 18px;

        transform: translate(0, 4px);

    }

    .text-tag-0 {

        background-color: rgba(60, 160, 170, 0.84);

        color: rgb(18, 18, 18);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px #213F42;

    }

    .text-tag-1 {

        background-color: rgba(160, 60, 170, 0.84);

        color: rgb(18, 18, 18);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px #3F2142;

    }

    .text-tag-2 {

        background-color: rgba(160, 170, 60, 0.84);

        color: rgb(18, 18, 18);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px #3F4221;

    }

    .text-tag-3 {

        background-color: rgba(30, 170, 120, 0.84);

        color: rgb(18, 18, 18);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px #164031;

    }

    .text-tag-4 {

        background-color: rgba(80, 170, 40, 0.84);

        color: rgb(18, 18, 18);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px #26401A;

    }

    .text-tag-5 {

        background-color: rgba(170, 40, 40, 0.84);

        color: rgb(18, 18, 18);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px #401A1A;

    }

    .ex-link-0 {

        color: rgb(60, 160, 170);

        background-color: rgb(27, 27, 27);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px rgb(27, 27, 27);

    }

    .ex-link-1 {

        color: rgb(160, 60, 170);

        background-color: rgb(27, 27, 27);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px rgb(27, 27, 27);

    }

    .ex-link-2 {

        color: rgb(30, 170, 120);

        background-color: rgb(27, 27, 27);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px rgb(27, 27, 27);

    }

    .ex-link-3 {

        color: rgb(80, 170, 40);

        background-color: rgb(27, 27, 27);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px rgb(27, 27, 27);

    }

    .ex-link-4 {

        color: rgb(160, 170, 60);

        background-color: rgb(27, 27, 27);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px rgb(27, 27, 27);

    }

    .ex-link-5 {

        color: rgb(170, 40, 40);

        background-color: rgb(27, 27, 27);

        font-weight: 400;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

        word-break: keep-all;

        border: solid 1px rgb(27, 27, 27);

    }

    /*
    line_heights: [
        55,
        45,
        35,
        25,
    ],

    sizes: [
        45,
        35,
        25,
        15,
    ],*/

    .text-0 {

        font-size: 15px;
        line-height: 25px;

    }

    .text-1 {

        font-size: 25px;
        line-height: 35px;

    }

    .text-2 {

        font-size: 35px;
        line-height: 45px;

    }

    .text-3 {

        font-size: 45px;
        line-height: 55px;

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