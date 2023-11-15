
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);



const TEXT_BODY_MIN_WIDTH_PX = 500;



n0d3s.UI.Style(`

.image-body {

    cursor: pointer;

    transition: filter 0.5s;

}

.image-body > img {

    width: 100%;

    border-radius: min(1.5vh, 3vw);
    
    border: solid 2px rgba(80, 80, 80, 0.2);

    transition: border 0.25s;
    
    box-shadow: 12px 12px 12px rgba(0,0,0,0.3);

}

.image-body:hover > img {

    border: solid 2px rgba(200, 200, 200, 1.0);

}

.image-body > div {

    height: 0px;
    overflow-y: visible;

}

.image-body:hover > div > div{

    filter: brightness(1.0);

}

.image-body > div > div {

    filter: brightness(0.4);

    transform: translateY(4px);
    margin-left: calc(100% - 28px);

    position: static;

    width: 24px;
    height: 24px;
    
    background-size: cover;
    background-image: url("${window.origin}/resources/image/icon/ex_link.png");

    transition: filter 0.25s;

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