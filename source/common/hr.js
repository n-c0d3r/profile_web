
module.use({

    n0d3s: "./n0d3s",

});



return function HR(){

    return n0d3s.UI.Element('hr')
    .setStyle({

        width: "100%",
        borderColor: "rgba(33, 33, 33, 0.2)",

    });
};