
module.use({

    n0d3s: "./n0d3s",

});



return function HR(){

    return n0d3s.UI.Element('hr')
    .setStyle({

        width: "100%",
        backgroundColor: "rgba(60, 60, 60, 0.2)",
        height: "1px",
        border: "none",

    });
};