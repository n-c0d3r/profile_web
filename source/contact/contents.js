
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    contact: "text/contact",

});



return [

    // Hello
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("contact")
    .appendInner( 

        Common.SubPageContent()
        .appendInner(

            Common.BigSection(
                ["CONTACT ", "ME"],
                null, 
                3,
                0
            )
            .appendClass("item-center")
            .setWidthLevel(0)
    
            .$(
                '.paragraph-name',
                e => e

                .$$(
                    'span',
                    e => e
                    .appendClass("free-style-text-1")
                )
    
                // Text colors
                .$(
                    'span:nth-child(2)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(210, 250, 100)',
    
                    })
                )
                .$(
                    'span:nth-child(1)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(200, 150, 150)',
    
                    })
                )
    
            ),

        ),

    ),

    

    Common.PageContent()
    .appendInner(

        Common.SubPageContent()
        .useLargeWidth()
        .appendInner(
    
            Common.EnhancedTextBody(contact)
            .useLargeWidth()
            .appendClass("item-left"),
    
        ),

    ),

];