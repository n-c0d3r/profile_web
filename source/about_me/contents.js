
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

});



return [

    // Hello
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("hello-content")
    .appendInner( 

        Common.Section(
            ["Hello ", "there", ", ", "I", " am ", "N", "Coder"],
            hello,
            3,
            0
        )
        .appendClass("item-center")
        .setWidthLevel(1)

        .$(
            '.paragraph-content',
            e => e
            .appendClass("item-justify")
            .setStyle({

                color: "rgba(200, 220, 220, 0.8)",

                paddingTop: "min(5vh, 10vw)",

            })
        )

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

                    color: 'rgb(135, 135, 135)',

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
                75
            )

        ),

    ),

    // My Journey
    Common.PageContent()
    .appendClass("item-center")
    .appendInner(

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
                )
                .appendClass("img-content"),

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
                )
                .appendClass("img-content"),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

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
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohhh.png`
                )
                .appendClass("img-content"),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/hgscene.png`
                )
                .appendClass("img-content"),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohqg.png`
                )
                .appendClass("img-content"),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/mesh_clustering.png`
                )
                .appendClass("img-content"),

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
                    `${window.origin}/resources/image/demonstrates/gdr.png`
                )
                .appendClass("img-content"),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/depth_pyramid.png`
                )
                .appendClass("img-content"),

            ),
    
        ),

    ),


];