
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

});



function ApplyPostWidth(){

    this.setStyle({
        
        width: `min(66vw, 840px)`,

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

                fontSize: `min(4.1vw, ${800 / 2 * 0.138 / 2}px)`,
                lineHeight: `min(4.1vw, ${800 / 2 * 0.138 / 2}px)`,

                color: "rgba(230, 255, 255, 0.84)",

                textAlign: "center",
    
            })
            .exe(ApplyPostWidth)
            .setInner(`${info.title}`),

            Common.Section(
                ["Written by ", info.author, " at ", info.date]
            )
            .$$(
                ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
                e => e
                .setStyle({
    
                    color: "rgb(55, 60, 60)",
    
                })
    
            )
            .$$(
                ".paragraph-name > span:nth-child(4)",
                e => e
                .setStyle({
    
                    color: "rgb(150, 100, 230)",
    
                })
    
            )
            .$$(
                ".paragraph-name > span:nth-child(2)",
                e => {
                    
                    if(info.author == "NCoder") 
                        e.setStyle({
            
                            color: "rgb(100, 220, 255)",
            
                        })

                }
    
            )
            .$$(
                ".paragraph-name > span",
                e => e
                .setStyle({
        
                    paddingRight: "0",
                    paddingLeft: "0",
                    paddingTop: "5px",
    
                    fontSize: `15px`,
                    lineHeight: `15px`,

                    borderTop: "solid 2px rgba(30, 40, 42, 1.0)",
        
                }),
            ),

        ),
    );

    var contents = Common.PageContent()
        .exe(ApplyPostWidth)
        .setStyle({

            flexWrap: "none",
            flexFlow: "column",

            marginLeft: `max(17vw, calc(50vw - 420px))`,

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