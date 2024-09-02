
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./blog/post",

    info: "./info",

})
.text({
    
    introduction: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/introduction",
    differences_between_firstrp_and_newrg: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/differences_between_firstrp_and_newrg",
    multithreaded_rendering: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/multithreaded_rendering",
    directx_11_vs_directx_12: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/directx_11_vs_directx_12",

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

    Post.Paragraph("FirstRP vs NewRG"),
    Post.EnhancedTextSection(differences_between_firstrp_and_newrg),

    Common.HR(),

    Post.Paragraph("Multithreaded Rendering"),
    Post.EnhancedTextSection(multithreaded_rendering),

    Common.HR(),

    Post.Paragraph("DirectX 11 vs DirectX 12"),
    Post.EnhancedTextSection(directx_11_vs_directx_12),

    Common.HR(),
);