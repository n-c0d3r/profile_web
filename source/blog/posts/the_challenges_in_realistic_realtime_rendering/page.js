
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./blog/post",

    info: "./info",

})
.text({

    introduction: "text/blog/posts/the_challenges_in_realistic_realtime_rendering/introduction",

})
.register_page();



Post(info)
.appendInner(

    Post.Paragraph("Introduction"),
    Post.EnhancedTextSection(introduction),

    Common.HR(),

);