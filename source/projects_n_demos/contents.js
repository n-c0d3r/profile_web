
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    ing: "text/projects_n_demos/ing",
    ncpp: "text/projects_n_demos/ncpp",

    gdr: "text/projects_n_demos/gdr",
    cook_torrance: "text/projects_n_demos/cook_torrance",

    foot_placement: "text/projects_n_demos/foot_placement",
    distance_matching: "text/projects_n_demos/distance_matching",

    ohhh: "text/projects_n_demos/ohhh",
    ohhh2: "text/projects_n_demos/ohhh2",
    bhop: "text/projects_n_demos/bhop",

});



return [

    // 
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("title-content")
    .appendInner( 

        Common.SubPageContent()
        .appendInner(

            Common.BigSection(
                [ "HERE", "'s ", "MY ", "PROJECTS ", "& ", "DEMOS" ],
                null, 
                3,
                0
            )
            .appendClass("item-center")
            .$(
                ".paragraph-name",
                e => e
                
                .setStyle({
            
                    fontSize: `min(6.0vw, ${1400 / 2 * 0.0994}px)`,
                    lineHeight: `min(6.0vw, ${1400 / 2 * 0.0994}px)`,
            
                })
                
            )
            .$(
                ".paragraph-name > span:nth-child(3)",
                e => e
                
                .setStyle({
            
                    color: "rgb(230, 150, 160)",
            
                })
                
            )
            .$(
                ".paragraph-name > span:nth-child(1)",
                e => e
                
                .setStyle({
            
                    color: "rgb(230, 120, 235)",
            
                })
                
            )
            .$(
                ".paragraph-name > span:nth-child(2)",
                e => e
                
                .setStyle({
            
                    color: "rgb(80, 80, 80)",
            
                })
                
            )
            .$(
                ".paragraph-name > span:nth-child(5)",
                e => e
                
                .setStyle({
            
                    color: "rgb(210, 180, 120)",
            
                })
                
            )
            .$(
                ".paragraph-name",
                e => e         
                .applyEffect(
                    Common.TypingEffect('1px', 500), 
                    50
                )
            )
            .setWidthLevel(0)            

        ),


    ),



    // Low Level
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("low-level-content")
    .appendInner(

        Common.Section(
            [ "| ", "ENGINE ", "& ", "LIBRARIES", " |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
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
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(5)",
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

                color: "rgb(150, 230, 160)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(4)",
            e => e
            .setStyle({

                color: "rgb(150, 160, 230)",
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
                    `${window.origin}/resources/image/demonstrates/ing.png`,
                    "https://github.com/INGTechnologies/ING"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.EnhancedTextBody(
                    ing
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedTextBody(
                    ncpp
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ncpp.png`,
                    "https://github.com/n-c0d3r/ncpp"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

        ),

    ),



    // CG
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("cg-content")
    .appendInner(

        Common.Section(
            [ "| ", "COMPUTER ", "GRAPHICS", " |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
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
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(4)",
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

                color: "rgb(200, 150, 210)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(200, 160, 180)",
                fontWeight: "200",

            })

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body-reverse")
                .appendInner(
    
                    Common.ImageBody(
                        `${window.origin}/resources/image/demonstrates/gdr.png`,
                        "https://www.youtube.com/watch?v=Phhg8GvmpT4"
                    )
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),
    
                    Common.EnhancedTextBody(
                        gdr
                    )
                    .appendClass("item-left")
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),
    
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/depth_pyramid.png`,
                    "https://www.youtube.com/watch?v=bT3vQ93ZZpQ"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/mesh_clustering.png`,
                    "https://www.youtube.com/watch?v=cJYO5oo_A3o&t=70s"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(
    
                Common.EnhancedTextBody(
                    cook_torrance
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/cook_torrance.png`,
                    "https://www.youtube.com/watch?v=p6w_qwCLJYc"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

        ),

    ),



    // AA
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("aa-content")
    .appendInner(

        Common.Section(
            [ "| ", "ADVANCED ", "ANIMATION", " |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
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
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(4)",
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

                color: "rgb(90, 200, 230)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(120, 200, 180)",
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
                    `${window.origin}/resources/image/demonstrates/foot_placement.png`,
                    "https://www.youtube.com/watch?v=0jOpu6XEZ58"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.EnhancedTextBody(
                    foot_placement
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(
    
                Common.EnhancedTextBody(
                    distance_matching
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/distance_matching.png`,
                    "https://www.youtube.com/watch?v=FbWhEf3iBuk"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

        ),

    ),



    // Games & Demos
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("games-demos-content")
    .appendInner(

        Common.Section(
            [ "| ", "GAMES ", "& ", "DEMOS", " |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
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
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(5)",
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

                color: "rgb(180, 200, 160)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(4)",
            e => e
            .setStyle({

                color: "rgb(150, 160, 230)",
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
                    `${window.origin}/resources/image/demonstrates/ohhh.png`,
                    "https://play.google.com/store/apps/details?id=com.DNGames.Ohhh_Remake"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.EnhancedTextBody(
                    ohhh
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(
    
                Common.EnhancedTextBody(
                    ohhh2
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohhh2.png`,
                    "https://www.youtube.com/watch?v=ROBR3i-oPm0"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/bhop.png`,
                    "https://www.youtube.com/watch?v=8yr5bNBZKJs"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.EnhancedTextBody(
                    bhop
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

        )

    )

];