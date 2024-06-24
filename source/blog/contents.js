
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



n0d3s.UI.Style(`

    .blog-list-nav-btn{

        margin-top: 20px;
        margin-bottom: 20px;

        padding-right: 10px;
        padding-left: 10px;
        padding-top: 6px;
        padding-bottom: 9px;

        border-radius: 5px;

        background-color: rgba(50, 50, 60, 0.2);
        color: rgba(110, 70, 150, 0.3);
        font-weight: bold;

        width: 120px;
        text-align: center;

    }

`);



return function Contents(list, index, prev, next) {

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

                .$$(
                    'span',
                    e => e
                    .appendClass("free-style-text-1")
                )
        
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
    
        )
    
    ];



    let built_list_contents = [];
    let enabledI = 0;
    for (let i = 0; i < list.length; ++i){

        if(list[i].enable == false)
            continue;

        built_list_contents.push(
            Common.PageContent()
            .appendInner(Post.Navigator(list[i]))
            .setStyle({

                backgroundColor: [ "rgba(0,0,0,0)", "rgba(40, 40, 40, 0.25)" ][enabledI % 2],

            })
        );

        enabledI++;

    }
    
    
    
    contents.push(

        ...built_list_contents
    
    );




    contents.push(
        
        Common.SubPageContent()
        .setStyle({

            justifyContent: "center",
            color: "rgba(200, 200, 200, 0.75)", 
            backgroundColor: "rgba(60, 60, 60, 0.25)",
            gap: "2px",

        })
        .appendInner(

            n0d3s.UI.Element("span")
            .setTextContent("Previous Page")
            .appendClass("blog-list-nav-btn")
            .appendClass("prevent-select link")
            .setStyle((!prev) ? {} : {

                backgroundColor: "rgba(90, 50, 140, 0.2)",
                color: "rgb(90, 50, 140)",

            })
            .exe((!prev) ? ()=>{} : Common.LinkTo(`${window.origin}/build/pages/blog/lists/${index - 1}.html`)),

            n0d3s.UI.Element("span")
            .setTextContent("Next Page")
            .appendClass("blog-list-nav-btn")
            .appendClass("prevent-select link")
            .setStyle((!next) ? {} : {

                backgroundColor: "rgba(90, 50, 140, 0.2)",
                color: "rgb(90, 50, 140)",
                filter: "hue-rotate(12deg)",

            })
            .exe((!next) ? ()=>{} : Common.LinkTo(`${window.origin}/build/pages/blog/lists/${index + 1}.html`)),

        )

    )
    
    
    
    return contents;
}