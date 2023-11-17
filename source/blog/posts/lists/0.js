
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

    Post: "./blog/post",
    BlogPage: "./blog/page",

})
.use({

    the_best_programming_language_for_game_engine_developmment_info: "../the_best_programming_language_for_game_engine_developmment_info"

})
.register_page();



BlogPage(
    0,
    false,
    false,
    [

        Post.Navigator(the_best_programming_language_for_game_engine_developmment_info),

        Common.HR(),

    ]
);