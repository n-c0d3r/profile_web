
module.use({

    n0d3s: "./n0d3s",

});



return function HR(){

    return n0d3s.UI.Element('hr')
    .setStyle({

        width: "100%",
        backgroundColor: "rgba(60, 60, 60, 0.3)",
        height: "1px",
        border: "none",
        boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",

    });
};