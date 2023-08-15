
module.use({

    n0d3s: "./n0d3s",

    Paragraph: "./paragraph",

});



function EnhancedParagraph(name, content, level = 3, tabs = 0, width_level = 2){

    return Paragraph(name, content, level, tabs, width_level, true);
}



return EnhancedParagraph;