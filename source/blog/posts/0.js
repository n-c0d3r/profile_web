
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

    Post: "./blog/post",
    BlogPage: "./blog/page",

})
.use({

    infos: "./0/**"

})
.register_page();



BlogPage(
    0,
    false,
    false,
    infos
);