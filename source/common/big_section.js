
module.use({

    n0d3s: "./n0d3s",

    Paragraph: "./paragraph",

});



function BigSection(name, content, level = 3, tabs = 0, width_level = 2, use_html_inner_for_name = false){

    return Paragraph(name, content, level, tabs, width_level, use_html_inner_for_name)
    .$(

        ".paragraph-name",
        e => e
        .appendClass("prevent-select")
        .setStyle({
    
            fontWeight: "600",
    
            fontSize: `min(6.85vw, ${1400 / 2 * 0.1122}px)`,
            lineHeight: `min(6.85vw, ${1400 / 2 * 0.1122}px)`,
    
        })

    )
    .setWidthLevel(1);
}



return BigSection;