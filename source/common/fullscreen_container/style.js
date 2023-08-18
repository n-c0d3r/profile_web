
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);







n0d3s.UI.Style(`

    .fullscreen-container {

        position: fixed;

        top: 50px;
        left: 0;

        width: 100vw;
        height: calc(100vh - 50px);

        background-color: rgba(18, 18, 18, 1);

        overflow: visible;

        display: flex;
        flex-flow: column;

    }

`);