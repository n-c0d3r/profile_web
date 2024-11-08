
module.use({
    n0d3s: "./n0d3s",
    Common: "./common",
})
.use([
    "./style",
])
.text({
});



return [
    n0d3s.UI.Element("iframe")
    .setId("portfolio-pdf")
    .setAttribute("title", "Portfolio")
    .setStyle({
        width : "100vw",
        height : "calc(100vh - 50px)",
        border : "none",
    })
    .setAttribute("src", "/resources/pdf/portfolio.pdf")
];