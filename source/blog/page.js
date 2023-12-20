
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
    
        ...Contents(list, index, prev, next),

    );
}