
module.use({

    n0d3s: "./n0d3s",

    TextBody: "./text_body",

});



function EnhancedTextBody(content, level = 3, tabs = 0, width_level = 2){

    return TextBody(content, level, tabs, width_level, true);
}



return EnhancedTextBody;