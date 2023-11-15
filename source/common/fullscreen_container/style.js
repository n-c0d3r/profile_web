
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);







n0d3s.UI.Style(`

    .fullscreen-container {

        position: fixed;

        top: 51px;
        left: 0;

        width: 100vw;
        height: calc(100vh - 51px);

        background: linear-gradient(to top right, rgba(18, 18, 18, 1), rgba(12, 15, 17, 0.965));

        overflow: visible;

        display: flex;
        flex-flow: column;

        z-index: 22;

    }

`);