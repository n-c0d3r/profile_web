
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

    Contents: "./contents",

});



return function BlogPage(index, prev, next, list) {

    $("title").setInner("Blog");



    $("body")
    .appendInner(
        Common.Header({
    
            current_page_index: 2
    
        }),
    
        ...Contents(list),

        Common.SubPageContent()
        .setStyle({

            justifyContent: "center",
            color: "rgba(200, 200, 200, 0.75)",

        })
        .appendInner(

            (!prev) ? "" : n0d3s.UI.Element("span")
            .setTextContent(": prev :")
            .exe(Common.LinkTo(`${window.origin}/build/pages/blog/lists/${index - 1}.js`)),

            (!next) ? "" : n0d3s.UI.Element("span")
            .setTextContent(": next :")
            .exe(Common.LinkTo(`${window.origin}/build/pages/blog/lists/${index + 1}.js`)),

        )
    );
}