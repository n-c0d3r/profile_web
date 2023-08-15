
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

});



n0d3s.UI.Style(`

@property --hello-content-color {
    syntax: '<color>';
    initial-value: rgba(120, 215, 230, 0.21);
    inherits: false;
}

.hello-content {

    background: linear-gradient(to top right, rgba(18, 18, 18, 0.5), var(--hello-content-color));
    
    text-shadow: 6px 6px 6px rgba(0,0,0,0.4);

}

    

.img-content {

    border: solid 1px rgb(120, 120, 120);
    
    box-shadow: 6px 6px 6px rgba(0,0,0,0.4);

}

.two-content-body {
    
    text-shadow: 6px 6px 6px rgba(0,0,0,0.4);

}

.two-content-body-reverse {
    
    text-shadow: 6px 6px 6px rgba(0,0,0,0.4);

}



@media (min-width: 1000px) {

    .img-content {
    
        width: min(100%, ${1400/3 - 50}px);
    
    }

}

@media (max-width: 1000px) {

    .img-content {
    
        width: 100%;
    
    }

    .two-content-body {
    
        flex-flow: column;
    
    }
    
    .two-content-body-reverse {
    
        flex-flow: column-reverse;
    
    }

}

`);