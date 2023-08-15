
module.use({

    n0d3s: "./n0d3s",

    PageContent: "./page_content",

});



function SubPageContent(){

    return PageContent()
        .setStyle({

            padding: "0",
            width: "100%",
            gap: "min(5vw, 50px) min(5vw, 50px)",

        });
}



return SubPageContent;