
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./blog/post",

    info: "./info",

})
.text({

    introduction: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/introduction",
    
})
.register_page();



Post(info)
.appendInner(

    Post.Paragraph("Introduction"),
    Post.EnhancedTextSection(introduction),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/nre_render_graph.png`,
        "https://github.com/INGTechnologies/ING/blob/main/Source/Engine/ING/Source/ING/Engine/Engine.cpp"
    ),

    Common.HR(),

);