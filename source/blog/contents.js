
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./post",

})
.use([

    "./style",

])
.text({

    

});



return function Contents(list) {

    let contents = [

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



    let built_list_contents = [];
    for (let i = 0; i < list.length; ++i){

        built_list_contents.push(Post.Navigator(list[i]));

        if(i != (list.length - 1))
            built_list_contents.push(Common.HR());

    }
    
    
    
    contents.push(
    
        Common.PageContent()
        .appendInner(
    
            ...built_list_contents
    
        )
    
    );
    
    
    
    return contents;
}