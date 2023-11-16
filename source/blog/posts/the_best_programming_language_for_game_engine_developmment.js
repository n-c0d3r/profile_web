
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./blog/post",

})
.text({

    introduction: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/introduction",
    hardware_friendly_and_os_api_direct_access: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/hardware_friendly_and_os_api_direct_access",
    mem: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/mem",
    preprocessor_and_mtp: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/preprocessor_and_mtp",
    conclusion: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/conclusion",

})
.register_page();



Post({

    title: "C++, The Best Programming Language for Game Engine Development",

    author: "NCoder",
    date: "November 16th, 2023",

})
.appendInner(

    Post.Paragraph("Introduction"),
    Post.EnhancedTextSection(introduction),

    Common.HR(),

    Post.Paragraph("Hardware-Friendly & OS API Direct Access"),
    Post.EnhancedTextSection(hardware_friendly_and_os_api_direct_access),

    Common.HR(),

    Post.Paragraph("Memory Management"),
    Post.EnhancedTextSection(mem),

    Common.HR(),

    Post.Paragraph("Preprocessor & Meta-Template Programming"),
    Post.EnhancedTextSection(preprocessor_and_mtp),

    Common.HR(),

    Post.Paragraph("Conclusion"),
    Post.EnhancedTextSection(conclusion),

);