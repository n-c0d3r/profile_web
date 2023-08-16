
module.use({

    n0d3s: "./n0d3s",

    text_config: "./text_config",

    Header: "./header",
    FullscreenContainer: "./fullscreen_container",

    TextBody: "./text_body",
    EnhancedTextBody: "./enhanced_text_body",

    Paragraph: "./paragraph",
    EnhancedParagraph: "./enhanced_paragraph",
    Section: "./section",
    BigSection: "./big_section",

    PageContent: "./page_content",
    SubPageContent: "./sub_page_content",

    ImageBody: "./image_body",

    TypingEffect: "./typing_effect",

    HR: "./hr",

    isInVP: "./is_in_vp",

    LightingOnVisible: "./lighting_on_visible",

})
.use([

    "./style"

]);



const Common = {

    Header,
    FullscreenContainer,
    
    TextBody,
    EnhancedTextBody,

    Paragraph,
    EnhancedParagraph,
    Section,
    BigSection,

    PageContent,
    SubPageContent,

    ImageBody,

    TypingEffect,

    HR,

    isInVP,

    LightingOnVisible,

};



return Common;