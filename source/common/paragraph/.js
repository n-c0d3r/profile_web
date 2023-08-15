
module.use({

    n0d3s: "./n0d3s",

    TextBody: "./common/text_body",
    EnhancedTextBody: "./common/enhanced_text_body",

})
.use([

    "./style"

]);



function Paragraph(name, content, level = 3, tabs = 0, width_level = 2, use_html_inner_for_name = false){

    let content_elements = [];

    if(content != null) {

        content_elements.push(

            EnhancedTextBody(
                content,
                level,
                tabs,
                0
            )
            .appendClass("paragraph-content")

        );

    }

    let name_element = null;

    if(use_html_inner_for_name)
        name_element = EnhancedTextBody(
            name,
            level - 1,
            0,
            0
        )
        .appendClass("paragraph-name")
        .makeCenter();
    else
        name_element = TextBody(
            name,
            level - 1,
            0,
            0
        )
        .appendClass("paragraph-name")
        .makeCenter();

    return TextBody([], level, 0, width_level)
    .appendClass("paragraph")
    .appendInner(

        name_element,

    )
    .appendInnerArray(content_elements);
}



return Paragraph;