
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

    knowledge_animation: "text/about_me/knowledge_animation",
    knowledge_cg_rendering: "text/about_me/knowledge_cg_rendering",
    knowledge_fundamental: "text/about_me/knowledge_fundamental",
    knowledge_game_engine: "text/about_me/knowledge_game_engine",
    knowledge_modern_cpp: "text/about_me/knowledge_modern_cpp",
    knowledge_reverse_engineering: "text/about_me/knowledge_reverse_engineering",
    knowledge_tools: "text/about_me/knowledge_tools",
    knowledge_web: "text/about_me/knowledge_web",

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
                ),
    
            ),

        ),

    ),



    // Who I Am
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("who-i-am-content")
    .appendInner(

        Common.Section(
            [ " WHO I AM ? . ", "I AM A TECHNOLOGY LOVER", " " ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left"),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(100, 100, 100)",
                fontWeight: "bold",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(100, 220, 225)",
                fontWeight: "bold",

            })

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.SubPageContent()
                .setWidthLevel(2)
                .appendInner(
    
                    Common.EnhancedTextBody(basic_about_me)
                    .appendClass("item-justify"),

                    Common.ImageBody(
                        `${window.origin}/resources/image/other/ge_arch.png`,
                        "https://www.amazon.com/Engine-Architecture-Third-Jason-Gregory/dp/1138035459"
                    ),
    
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/robotic2.jpg`
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
            [ " MY JOURNEY . ", "THE THIRD DOOR", " " ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left"),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(110, 115, 120)",
                fontWeight: "bold",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(120, 210, 220)",
                fontWeight: "bold",

            })

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedTextBody(first_stage)
                .appendClass("item-justify"),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/robotic.jpg`
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(

                Common.EnhancedTextBody(second_stage_a)
                .appendClass("item-justify"),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/turbo_pascal_7_0.png`
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body")
                .appendInner(

                    Common.SubPageContent()
                    .setStyle({
    
                        width: `min(100%, ${1400 / 3 - 50}px)`,
    
                    })
                    .appendInner(
        
                        Common.EnhancedTextBody(second_stage_b1)
                        .appendClass("item-justify"),

                        Common.EnhancedTextBody(second_stage_b2)
                        .appendClass("item-justify"),
        
                    ),
    
                    Common.ImageBody(
                        `${window.origin}/resources/image/demonstrates/ohhh.png`,
                        "https://play.google.com/store/apps/details?id=com.DNGames.Ohhh_Remake"
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
                .appendClass("two-content-body-reverse")
                .appendInner(

                    Common.EnhancedTextBody(third_stage)
                    .appendClass("item-justify"),

                    Common.ImageBody(
                        `${window.origin}/resources/image/other/dx11.png`
                    ),

                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/hlsl.png`,
                    "https://www.packtpub.com/product/hlsl-development-cookbook/9781849694209"
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ing.png`,
                    "https://github.com/INGTechnologies/ING"
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body")
                .appendInner(

                    Common.SubPageContent()
                    .setStyle({
    
                        width: `min(100%, ${1400 / 3 - 50}px)`,
    
                    })
                    .appendInner(
        
                        Common.EnhancedTextBody(fourth_stage1)
                        .appendClass("item-justify"),

                        Common.EnhancedTextBody(fourth_stage2)
                        .appendClass("item-justify"),
        
                    ),
    
                    Common.ImageBody(
                        `${window.origin}/resources/image/demonstrates/gdr.png`,
                        "https://www.youtube.com/watch?v=Phhg8GvmpT4"
                    ),

                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/depth_pyramid.png`,
                    "https://www.youtube.com/watch?v=bT3vQ93ZZpQ"
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/mesh_clustering.png`,
                    "https://www.youtube.com/watch?v=cJYO5oo_A3o&t=65s"
                ),

            ),
    
        ),

    ),



    // My Knowledge
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("my-knowledge-content")
    .appendInner(

        Common.Section(
            [ " ", "MY KNOWLEDGE & SKILLS", " " ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$$(

            ".paragraph-name > span",
            e => e
            .appendClass("item-left")
            .setStyle({

                color: "rgb(110, 115, 120)",
                fontWeight: "bold",

            })

        )
        .$(

            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(240, 240, 240)",
                fontWeight: "bold",

            })

        )
        .$(
            ".paragraph-name",
            e => e            
            .appendClass("item-left"),

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.EnhancedTextBody(
                knowledge_fundamental
            )
            .appendClass("item-left"),

            Common.EnhancedTextBody(
                knowledge_modern_cpp
            )
            .appendClass("item-left"),

            Common.EnhancedTextBody(
                knowledge_cg_rendering
            )
            .appendClass("item-left"),

            Common.EnhancedTextBody(
                knowledge_game_engine
            )
            .appendClass("item-left"),

            Common.EnhancedTextBody(
                knowledge_animation
            )
            .appendClass("item-left"),

            Common.EnhancedTextBody(
                knowledge_reverse_engineering
            )
            .appendClass("item-left"),

            Common.EnhancedTextBody(
                knowledge_tools
            )
            .appendClass("item-left")
            .useLargeWidth(),

        ),

    ),

];