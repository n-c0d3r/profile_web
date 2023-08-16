
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
    
    /*text-shadow: 6px 6px 6px rgba(0,0,0,0.4);*/

}

`);