
module.use({

    n0d3s: "./n0d3s",

    Paragraph: "./paragraph",

});



function Section(name, content, level = 3, tabs = 0, width_level = 2, use_html_inner_for_name = false){

    return Paragraph(name, content, level, tabs, width_level, use_html_inner_for_name)
    .$(

        ".paragraph-name",
        e => e
        .appendClass("prevent-select")
        .setStyle({
    
            fontSize: `min(4.1vw, ${1400 / 2 * 0.138 / 2}px)`,
            lineHeight: `min(4.1vw, ${1400 / 2 * 0.138 / 2}px)`,
    
        })

    )
    .setWidthLevel(1);
}



return Section;