
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    hello: "text/about_me/hello",
    first_stage: "text/about_me/first_stage",
    second_stage_a: "text/about_me/second_stage_a",
    second_stage_b: "text/about_me/second_stage_b",
    third_stage: "text/about_me/third_stage",
    fourth_stage: "text/about_me/fourth_stage",

});



return [

    // Hello
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("hello-content")
    .appendInner( 

        Common.SubPageContent()
        .appendInner(

            Common.BigSection(
                ["HELLO ", "THERE", ", ", "I", " AM ", "N", "CODER"],
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
    
                        color: 'rgb(100, 210, 250)',
    
                    })
                )
                .$(
                    'span:nth-child(1)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(220, 120, 225)',
    
                    })
                )
                .$(
                    'span:nth-child(3)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(80, 80, 80)',
    
                    })
                )
                .$(
                    'span:nth-child(5)',
                    e => e
                    .setStyle({
    
                        // color: 'rgb(120, 120, 120)',
    
                    })
                )
                .$(
                    'span:nth-child(6)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(100, 220, 225)',
    
                    })
                )
    
                .applyEffect(
                    Common.TypingEffect('1px', 500), 
                    50
                )
    
            ),
    
    
    
            // Common.SubPageContent()
            // .appendClass("item-center")
            // .appendInner(
            //     Common.EnhancedParagraph(
            //         hello,
            //         null, 
            //         3,
            //         0
            //     )
            //     .appendClass("item-center")
            //     .setWidthLevel(0)
    
            //     .setStyle({
    
            //         width: `calc(${(1400 / 3 - 50) * 2}px + 10vw)`,
    
            //     })
        
            //     .$(
            //         '.paragraph-name',
            //         e => e
            //         .appendClass("item-justify")
            //         .setStyle({
        
            //             color: "rgba(200, 220, 220, 0.8)",
        
            //             paddingTop: "0",
        
            //             fontSize: `min(5vw, ${1400 / 2 * 0.025}px)`,
            //             lineHeight: `min(5vw, ${1400 / 2 * 0.025}px)`,
        
            //         })
            //     )
            // )

        ),

    ),



    // My Journey
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("my-journey-content")
    .appendInner(

        Common.Section(
            [ "| MY JOURNEY | ", "THE THIRD DOOR", " |" ],
        )    
        .appendClass("item-left")
        .setStyle({

            width: `calc(${(1400 / 3 - 50) * 2}px + 10vw)`,

        })
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left")

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(100, 100, 100)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(100, 220, 225)",
                fontWeight: "200",

            })

        ),

        Common.HR(),

        Common.PageContent()
        .setStyle({

            padding: "0",
            width: "100%",

        })
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(

                Common.ImageBody(
                    `${window.origin}/resources/image/other/robotic.jpg`
                ),

                Common.EnhancedParagraph(
                    first_stage,
                    null,
                    4
                )
                .$(
                    ".paragraph-name",
                    e => e
                    .appendClass("item-justify"),
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedParagraph(
                    second_stage_a,
                    null,
                    4
                )
                .$(
                    ".paragraph-name",
                    e => e
                    .appendClass("item-justify"),
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/turbo_pascal_7_0.png`
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body-reverse")
                .appendInner(
    
                    Common.ImageBody(
                        `${window.origin}/resources/image/demonstrates/ohhh.png`
                    ),

                    Common.EnhancedParagraph(
                        second_stage_b,
                        null,
                        4
                    )
                    .$(
                        ".paragraph-name",
                        e => e
                        .appendClass("item-justify")
                    ),

                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/hgscene.png`
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohqg.png`
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body")
                .appendInner(

                    Common.EnhancedParagraph(
                        third_stage,
                        null,
                        4
                    )
                    .$(
                        ".paragraph-name",
                        e => e
                        .appendClass("item-justify")
                    ),

                    Common.ImageBody(
                        `${window.origin}/resources/image/other/dx11.png`
                    ),

                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/hlsl.png`
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ing.png`
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body-reverse")
                .appendInner(
    
                    Common.ImageBody(
                        `${window.origin}/resources/image/demonstrates/gdr.png`
                    ),

                    Common.EnhancedParagraph(
                        fourth_stage,
                        null,
                        4
                    )
                    .$(
                        ".paragraph-name",
                        e => e
                        .appendClass("item-justify")
                    ),

                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/depth_pyramid.png`
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/mesh_clustering.png`
                ),

            ),
    
        ),

    ),


];