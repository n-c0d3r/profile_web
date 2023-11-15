
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    

});



return function Contents(list) {

    let contents = [

        // Hello
        Common.PageContent()
        .appendClass("item-center")
        .appendClass("blog")
        .appendInner( 
    
            Common.SubPageContent()
            .appendInner(
    
                Common.BigSection(
                    ["NCoder", "'", "s ", "Blogs"],
                    null, 
                    3,
                    0
                )
                .appendClass("item-center")
                .setWidthLevel(0)
        
                .$(
                    '.paragraph-name',
                    e => e
        
                    // Text colors
                    .$(
                        'span:nth-child(2)',
                        e => e
                        .setStyle({
        
                            color: 'rgb(150, 70, 200)',
        
                        })
                    )
                    .$(
                        'span:nth-child(1)',
                        e => e
                        .setStyle({
        
                            color: 'rgb(120, 100, 255)',
        
                        })
                    )
                    .$(
                        'span:nth-child(3)',
                        e => e
                        .setStyle({
        
                            color: 'rgb(80, 80, 80)',
        
                        })
                    )
        
                ),
    
            ),
    
        ),
    
    ];
    
    
    
    contents.push(
    
        Common.PageContent()
        .appendInner(
    
            ...list
    
        )
    
    );
    
    
    
    return contents;
}