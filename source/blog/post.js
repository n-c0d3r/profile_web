
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

});



function ParseInfo(info){

    let result = JSON.parse(JSON.stringify(info));

    result.tags = result.tags || [];

    return result;
}
function ApplyPostWidth(){

    this.setStyle({
        
        width: `min(calc(100vw - 40px), 840px)`,

    });
}

function EnhancedTextSection(content) {

    return Common.EnhancedTextBody(content).exe(ApplyPostWidth);
}

function Paragraph(name) {

    return n0d3s.UI.Element("div").setStyle({

        fontSize: "30px",
        color: "rgba(255, 255, 255, 0.75)",

    })
    .setTextContent(name)
    .exe(ApplyPostWidth);
}
function Break() {

    return n0d3s.UI.Element("div").setStyle({

        height: "50px",

    });
}
function ImageBody(url, href){

    return Common.ImageBody(url, href).exe(ApplyPostWidth);
}
function Navigator(info){

    let parsedInfo = ParseInfo(info);

    
    
    let tag_elements = [];
    let tag_index = 0;
    for (let tag of parsedInfo.tags) {

        tag_elements.push(

            n0d3s.UI.Element("div")
            .appendClass(`ex-link-${tag_index % 6}`)
            .setStyle({

                

            })
            .setTextContent(tag)

        );

        ++tag_index;

    }



    return Common.SubPageContent()
    .setStyle({

        justifyContent: "center",

    })
    .appendInner(

        Common.ImageBody(parsedInfo.thumbnailURL)
        .setStyle({

            width: `min(calc(100vw - 40px), 500px)`,

            borderRadius: "10px",

        })
        .exe(Common.LinkTo(parsedInfo.targetURL)),

        n0d3s.UI.Element("div")
        .setStyle({

            width: `min(calc(100vw - 40px), 500px)`,

            justifyContent: "center",

        })
        .appendInner(

            Common.PageContent()
            .setStyle({
    
                paddingRight: "0",
                paddingLeft: "0",
                paddingTop: "5px",
                paddingBottom: "15px",

                fontSize: `min(5vw, ${600 / 2 * 0.138 / 2}px)`,
                lineHeight: `min(6.1vw, ${800 / 2 * 0.138 / 2}px)`,
                letterSpacing: `min(1.5vw, ${150 / 2 * 0.138 / 2}px)`,

                color: "rgba(230, 255, 255, 0.75)",

                textAlign: "left",

                width: `min(calc(100vw - 40px), 500px)`,
    
            })
            .setInner(`${parsedInfo.title}`)
            .exe(Common.LinkTo(parsedInfo.targetURL)),

            Common.HR().setStyle({ opacity: "0.42", }),

            Common.PageContent()
            .setStyle({
    
                paddingRight: "0",
                paddingLeft: "0",
                paddingTop: "15px",
                paddingBottom: "15px",

                width: `min(calc(100vw - 40px), 500px)`,

                justifyContent: "left",

                gap: "10px",
                flexWrap: "wrap",

            })
            .appendInner(

                ...tag_elements,

            ),

            Common.HR().setStyle({ opacity: "0.42", }),

            Common.Section(
                ["Written by ", parsedInfo.author, " at ", parsedInfo.date]
            )
            .appendClass("prevent-select")
            .setStyle({

                width: `min(calc(100vw - 40px), 500px)`,

            })
            .$(
                ".paragraph-name",
                e => e
                .setStyle({

                    textAlign: "left",
        
                }),
            )
            .$$(
                ".paragraph-name > span",
                e => e
                .setStyle({
        
                    paddingRight: "0",
                    paddingLeft: "0",
                    paddingTop: "5px",
                    paddingBottom: "5px",
    
                    fontSize: `min(3vw, ${400 / 2 * 0.138 / 2}px)`,
                    lineHeight: `min(3vw, ${400 / 2 * 0.138 / 2}px)`,
        
                    letterSpacing: `1px`,

                    textAlign: "left",
        
                }),
            )
            .$$(
                ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
                e => e
                .setStyle({
    
                    color: "rgb(65, 70, 70)",
                    fontWeight: "200",
    
                })
    
            )
            .$$(
                ".paragraph-name > span:nth-child(4)",
                e => e
                .setStyle({
    
                    color: "rgb(120, 50, 185)",
                    fontWeight: "300",
    
                })
    
            )
            .$$(
                ".paragraph-name > span:nth-child(2)",
                e => {
                    
                    if(parsedInfo.author == "NCoder") 
                        e.setStyle({
            
                            color: "rgb(80, 200, 235)",
            
                        })

                    e.setStyle({

                        fontWeight: "300",
                        fontSize: `min(4vw, ${600 / 2 * 0.138 / 2}px)`,
                        lineHeight: `min(4vw, ${600 / 2 * 0.138 / 2}px)`,

                    })

                }
    
            ),

        )

    )
}



function Post(info){

    let parsedInfo = ParseInfo(info);



    $("title").setInner(parsedInfo.title);

    
    
    let tag_elements = [];
    let tag_index = 0;
    for (let tag of parsedInfo.tags) {

        tag_elements.push(

            n0d3s.UI.Element("div")
            .appendClass(`ex-link-${tag_index % 6}`)
            .setStyle({

                

            })
            .setTextContent(tag)

        );

        ++tag_index;

    }



    $("body")
    .appendInner(
        Common.Header({
    
            current_page_index: 2
    
        }),

        Common.PageContent()
        .setStyle({

            paddingTop: "0",

            background: "linear-gradient(to top right, rgba(12, 12, 12, 0.75), rgb(15, 19, 25))",

        })
        .appendInner(

            Common.PageContent()
            .setStyle({
    
                paddingRight: "0",
                paddingLeft: "0",
                paddingBottom: "0",

                fontSize: `min(5vw, ${600 / 2 * 0.138 / 2}px)`,
                lineHeight: `min(6.1vw, ${800 / 2 * 0.138 / 2}px)`,
                letterSpacing: `min(1.5vw, ${150 / 2 * 0.138 / 2}px)`,

                color: "rgba(230, 255, 255, 0.84)",

                textAlign: "center",
    
            })
            .exe(ApplyPostWidth)
            .setInner(`${parsedInfo.title}`),

            Common.Section(
                ["Written by ", parsedInfo.author, " at ", parsedInfo.date]
            )
            .$$(
                ".paragraph-name > span",
                e => e
                .setStyle({
        
                    paddingRight: "0",
                    paddingLeft: "0",
                    paddingTop: "5px",
    
                    fontSize: `min(3vw, ${400 / 2 * 0.138 / 2}px)`,
                    lineHeight: `min(3vw, ${400 / 2 * 0.138 / 2}px)`,
        
                    letterSpacing: `1px`,
        
                }),
            )
            .$$(
                ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
                e => e
                .setStyle({
    
                    color: "rgb(65, 70, 70)",
                    fontWeight: "200",
    
                })
    
            )
            .$$(
                ".paragraph-name > span:nth-child(4)",
                e => e
                .setStyle({
    
                    color: "rgb(150, 100, 230)",
                    fontWeight: "300",
    
                })
    
            )
            .$$(
                ".paragraph-name > span:nth-child(2)",
                e => {
                    
                    if(parsedInfo.author == "NCoder") 
                        e.setStyle({
            
                            color: "rgb(80, 200, 235)",
            
                        })

                    e.setStyle({

                        fontWeight: "300",
                        fontSize: `min(4vw, ${600 / 2 * 0.138 / 2}px)`,
                        lineHeight: `min(4vw, ${600 / 2 * 0.138 / 2}px)`,

                    })

                }
    
            ),

        ),
    );

    var contents = Common.PageContent()
        .exe(ApplyPostWidth)
        .setStyle({

            flexWrap: "none",
            flexFlow: "column",

            marginLeft: `max(20px, calc(50vw - 420px))`,

            paddingLeft: "0",
            paddingRight: "0",
            
        })
        .appendInner(

            n0d3s.UI.Element("div")
            .setStyle({

                justifyContent: "left",

                flexFlow: "row",
                flexWrap: "wrap",

                gap: "10px",

                display: "flex",

            })
            .exe(ApplyPostWidth)
            .appendInner(

                ...tag_elements,

            ),

            Common.HR(),

        );
    $("body").appendInner(contents);
    return contents;
}



Post.EnhancedTextSection = EnhancedTextSection;
Post.ApplyPostWidth = ApplyPostWidth;
Post.Paragraph = Paragraph;
Post.Break = Break;
Post.Navigator = Navigator;
Post.ImageBody = ImageBody;
Post.ParseInfo = ParseInfo;



return Post;