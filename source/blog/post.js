
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

});



function ApplyPostWidth(){

    this.setStyle({
        
        width: `min(75vw, 840px)`,

    });
}

function EnhancedTextSection(content) {

    return Common.EnhancedTextBody(content).exe(ApplyPostWidth);
}

function Paragraph(name) {

    return n0d3s.UI.Element("div").setStyle({

        fontSize: "30px",

    })
    .setTextContent(name);
}
function Break() {

    return n0d3s.UI.Element("div").setStyle({

        height: "50px",

    });
}



function Post(info){

    $("title").setInner(info.title);

    $("body")
    .appendInner(
        Common.Header({
    
            current_page_index: 2
    
        }),

        Common.PageContent()
        .setStyle({

            paddingTop: "0",

            background: "linear-gradient(to top right, rgba(18, 18, 18, 0.5), rgb(10, 25, 30))",

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
            .setInner(`${info.title}`),

            Common.Section(
                ["Written by ", info.author, " at ", info.date]
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

                    borderTop: "solid 2px rgba(30, 40, 42, 1.0)",
    
                })
    
            )
            .$$(
                ".paragraph-name > span:nth-child(4)",
                e => e
                .setStyle({
    
                    color: "rgb(150, 100, 230)",
                    fontWeight: "300",

                    borderTop: "solid 2px rgba(30, 40, 42, 1.0)",
    
                })
    
            )
            .$$(
                ".paragraph-name > span:nth-child(2)",
                e => {
                    
                    if(info.author == "NCoder") 
                        e.setStyle({
            
                            color: "rgb(100, 220, 255)",
            
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

            marginLeft: `max(13vw, calc(50vw - 420px))`,

            paddingLeft: "0",
            paddingRight: "0",
            
        });
    $("body").appendInner(contents);
    return contents;
}



Post.EnhancedTextSection = EnhancedTextSection;
Post.ApplyPostWidth = ApplyPostWidth;
Post.Paragraph = Paragraph;
Post.Break = Break;



return Post;