
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    basic_about_me: "text/about_me/basic_about_me",
    first_stage: "text/about_me/first_stage",
    second_stage_a: "text/about_me/second_stage_a",
    second_stage_b1: "text/about_me/second_stage_b1",
    second_stage_b2: "text/about_me/second_stage_b2",
    third_stage: "text/about_me/third_stage",
    fourth_stage1: "text/about_me/fourth_stage1",
    fourth_stage2: "text/about_me/fourth_stage2",

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

        ),

    ),



    // Who I Am
    Common.PageContent()
    .appendClass("item-center")
    .appendInner(

        Common.Section(
            [ "| WHO I AM | ", "I AM A TECHNOLOGY LOVER", " |" ],
        )    
        .appendClass("item-left")
        .setStyle({

            width: `calc(${(1400 / 3 - 50) * 2}px + 10vw)`,

        })
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left")
            
            .applyEffect(
                Common.TypingEffect('1px', 500, false, false), 
                10
            ),

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

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(

                Common.ImageBody(
                    `${window.origin}/resources/image/other/robotic2.jpg`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.SubPageContent()
                .setStyle({

                    width: `min(100%, ${1400 / 3 - 50}px)`,

                })
                .appendInner(
    
                    Common.EnhancedTextBody(basic_about_me)
                    .appendClass("item-justify")
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),

                    Common.ImageBody(
                        `${window.origin}/resources/image/other/ge_arch.png`
                    )
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),
    
                ),

            ),

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
            .applyEffect(
                Common.TypingEffect('1px', 500, false, false), 
                10
            ),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(110, 115, 120)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(120, 210, 220)",
                fontWeight: "200",

            })

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(

                Common.ImageBody(
                    `${window.origin}/resources/image/other/robotic.jpg`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.EnhancedTextBody(first_stage)
                .appendClass("item-justify")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedTextBody(second_stage_a)
                .appendClass("item-justify")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/turbo_pascal_7_0.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
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
                    )
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),

                    Common.SubPageContent()
                    .setStyle({
    
                        width: `min(100%, ${1400 / 3 - 50}px)`,
    
                    })
                    .appendInner(
        
                        Common.EnhancedTextBody(second_stage_b1)
                        .appendClass("item-justify")
                        .applyEffect(
                            Common.LightingOnVisible(),
                            50,
                        ),

                        Common.EnhancedTextBody(second_stage_b2)
                        .appendClass("item-justify")
                        .applyEffect(
                            Common.LightingOnVisible(),
                            50,
                        ),
        
                    ),

                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/hgscene.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohqg.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body")
                .appendInner(

                    Common.EnhancedTextBody(third_stage)
                    .appendClass("item-justify")
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),

                    Common.ImageBody(
                        `${window.origin}/resources/image/other/dx11.png`
                    )
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),

                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/hlsl.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ing.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
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
                    )
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),

                    Common.SubPageContent()
                    .setStyle({
    
                        width: `min(100%, ${1400 / 3 - 50}px)`,
    
                    })
                    .appendInner(
        
                        Common.EnhancedTextBody(fourth_stage1)
                        .appendClass("item-justify")
                        .applyEffect(
                            Common.LightingOnVisible(),
                            50,
                        ),

                        Common.EnhancedTextBody(fourth_stage2)
                        .appendClass("item-justify")
                        .applyEffect(
                            Common.LightingOnVisible(),
                            50,
                        ),
        
                    ),

                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/depth_pyramid.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    200,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/mesh_clustering.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    200,
                ),

            ),
    
        ),

    ),


];