
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./blog/post",

})
.text({

    introduction: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/introduction",
    high_performance: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/high_performance",
    os_api_direct_access: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/os_api_direct_access",
    compile_time_features: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/os_api_direct_access",

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

    Post.Paragraph("High Performance"),
    Post.EnhancedTextSection(high_performance),

    Post.Paragraph("OS API Direct Access"),
    Post.EnhancedTextSection(os_api_direct_access),

);