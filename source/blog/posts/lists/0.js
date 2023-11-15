
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

    Post: "./blog/post",
    BlogPage: "./blog/page",

})
.register_page();



BlogPage(
    0,
    false,
    false,
    [

        Post.Navigator({

            title: "C++, The Best Programming Language for Game Engine Development",

            author: "NCoder",
            date: "November 16th, 2023",

            thumbnailURL: `${window.origin}/resources/image/for_blogs/ing_app_module_demo_image.png`,
            targetURL: `${window.origin}/build/pages/blog/posts/the_best_programming_language_for_game_engine_developmment.html`,

        }),

        Common.HR(),

    ]
);