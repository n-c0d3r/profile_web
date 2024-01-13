
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
    nframework: "text/projects_n_demos/nframework",
    n0d3s: "text/projects_n_demos/n0d3s",

    gdr: "text/projects_n_demos/gdr",
    cook_torrance: "text/projects_n_demos/cook_torrance",

    foot_placement: "text/projects_n_demos/foot_placement",
    distance_matching: "text/projects_n_demos/distance_matching",
    aa: "text/projects_n_demos/aa",

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
                [ "HERE", "'", "s ", "MY PROJECTS ", "& ", "DEMOS" ],
                null, 
                3,
                0
            )
            .appendClass("item-center")

            .$$(
                'span',
                e => e
                .appendClass("free-style-text-1")
            )
            
            .$(
                ".paragraph-name",
                e => e
                .setStyle({
            
                    color: "rgb(200, 200, 200)",
            
                })
                
            )
            .$(
                ".paragraph-name > span:nth-child(1)",
                e => e
                .setStyle({
            
                    color: "rgb(80, 170, 150)",
            
                })
                
            )
            .$$(
                ".paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(5)",
                e => e
                .setStyle({
            
                    color: "rgb(60, 60, 60)",
            
                })
                
            )
            .$(
                ".paragraph-name > span:nth-child(2)",
                e => e
                .setStyle({
            
                    color: "rgb(50, 170, 200)",
            
                })
                
            )
            .$(
                ".paragraph-name > span:nth-child(6)",
                e => e
                .setStyle({
            
                    color: "rgb(150, 80, 150)",
            
                })
                
            )
            .$(
                ".paragraph-name > span:nth-child(4)",
                e => e
                .setStyle({
            
                    color: "rgb(100, 150, 50)",
            
                })
                
            )
            .$(
                ".paragraph-name",
                e => e
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
            [ " ", "ENGINES", ", ", "LIBRARIES", ", ", "FRAMEWORKS"," " ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left"),

        )
        .$$(
            ".paragraph-name > span",
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

                color: "rgb(150, 230, 160)",
                fontWeight: "bold",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(4)",
            e => e
            .setStyle({

                color: "rgb(150, 160, 230)",
                fontWeight: "bold",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(6)",
            e => e
            .setStyle({

                color: "rgb(200, 150, 200)",
                fontWeight: "bold",

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
                ),

                Common.EnhancedTextBody(
                    ing
                )
                .appendClass("item-left"),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedTextBody(
                    ncpp
                )
                .appendClass("item-left"),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ncpp.png`,
                    "https://github.com/n-c0d3r/ncpp"
                ),

            ),

            Common.HR(),            

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/nframework.png`,
                    "https://github.com/N1ghtTeam/NFramework"
                ),

                Common.EnhancedTextBody(
                    nframework
                )
                .appendClass("item-left"),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedTextBody(
                    n0d3s
                )
                .appendClass("item-left"),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/n0d3s.png`,
                    "https://github.com/n-c0d3r/n0d3s"
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
            [ " ", "COMPUTER ", "GRAPHICS", " " ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left"),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(4)",
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

                color: "rgb(200, 150, 210)",
                fontWeight: "bold",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(200, 160, 180)",
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
                .appendClass("two-content-body-reverse")
                .appendInner(
    
                    Common.ImageBody(
                        `${window.origin}/resources/image/demonstrates/gdr.png`,
                        "https://www.youtube.com/watch?v=Phhg8GvmpT4"
                    ),
    
                    Common.EnhancedTextBody(
                        gdr
                    )
                    .appendClass("item-left"),
    
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/depth_pyramid.png`,
                    "https://www.youtube.com/watch?v=bT3vQ93ZZpQ"
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/mesh_clustering.png`,
                    "https://www.youtube.com/watch?v=cJYO5oo_A3o&t=70s"
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
                .appendClass("item-left"),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/cook_torrance.png`,
                    "https://www.youtube.com/watch?v=p6w_qwCLJYc"
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
            [ " ", "ADVANCED ", "ANIMATION", " " ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left"),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(4)",
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

                color: "rgb(90, 200, 230)",
                fontWeight: "bold",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(120, 200, 180)",
                fontWeight: "bold",

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
                ),
    
                Common.EnhancedTextBody(
                    foot_placement
                )
                .appendClass("item-left"),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(
    
                Common.EnhancedTextBody(
                    distance_matching
                )
                .appendClass("item-left"),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/distance_matching.png`,
                    "https://www.youtube.com/watch?v=FbWhEf3iBuk"
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/aa.png`,
                    "https://www.youtube.com/watch?v=PmepmEqGyxQ"
                ),
    
                Common.EnhancedTextBody(
                    aa
                )
                .appendClass("item-left"),
    
            ),

        ),

    ),



    // Games & Demos
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("games-demos-content")
    .appendInner(

        Common.Section(
            [ " ", "GAMES ", "& ", "DEMOS", " " ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left"),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(5)",
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

                color: "rgb(180, 200, 160)",
                fontWeight: "bold",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(4)",
            e => e
            .setStyle({

                color: "rgb(150, 160, 230)",
                fontWeight: "bold",

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
                ),
    
                Common.EnhancedTextBody(
                    ohhh
                )
                .appendClass("item-left"),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(
    
                Common.EnhancedTextBody(
                    ohhh2
                )
                .appendClass("item-left"),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohhh2.png`,
                    "https://www.youtube.com/watch?v=ROBR3i-oPm0"
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/bhop.png`,
                    "https://www.youtube.com/watch?v=8yr5bNBZKJs"
                ),
    
                Common.EnhancedTextBody(
                    bhop
                )
                .appendClass("item-left"),
    
            ),

        )

    )

];