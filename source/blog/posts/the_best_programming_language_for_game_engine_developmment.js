
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./blog/post",

})
.text({

    introduction: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/introduction",

})
.register_page();



Post({

    title: "C++, The Best Programming Language for Game Engine Development",

    author: "NCoder",
    date: "November 14th, 2023",

})
.appendInner(

    Post.EnhancedTextSection(introduction)

);