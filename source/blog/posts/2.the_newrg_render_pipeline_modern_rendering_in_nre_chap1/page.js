
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
    nrhi_0_2: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/nrhi_0_2",
    general_resource_uploader: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/general_resource_uploader",
    binder_signature: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/binder_signature",
    intermediate_descriptor_manager: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/intermediate_descriptor_manager",
    summary: "text/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre/chapter1_summary",
    
})
.register_page(`
    <div id="fb-root">
    </div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0" nonce="RM4pcjOt">
    </script>
`);



Post(info)
.appendInner(
    Post.Paragraph("Introduction"),
    Post.EnhancedTextSection(introduction),

    Common.HR(),

    Post.Paragraph("FirstRP vs NewRG"),
    Post.EnhancedTextSection(differences_between_firstrp_and_newrg),

    Common.HR(),

    Post.Paragraph("Multithreaded Rendering"),
    Post.EnhancedTextSection(multithreaded_rendering),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/multithreaded_rendering.png`
    ),

    Common.HR(),

    Post.Paragraph("DirectX 11 vs DirectX 12"),
    Post.EnhancedTextSection(directx_11_vs_directx_12),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/dx11_vs_dx12.png`
    ),
    
    Common.HR(),

    Post.Paragraph("NRHI 0.2"),
    Post.EnhancedTextSection(nrhi_0_2),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/nrhi_0_2.png`,
        'https://github.com/n-c0d3r/NRHI'
    ),

    Common.HR(),

    Post.Paragraph("General Resource Uploader"),
    Post.EnhancedTextSection(general_resource_uploader),

    Common.HR(),

    Post.Paragraph("Intermediate Descriptor Manager"),
    Post.EnhancedTextSection(intermediate_descriptor_manager),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/resource_view_create.png`,
        'https://github.com/n-c0d3r/NRE/blob/main/nre/source/nre/rendering/newrg/rhi_alternatives/resource_view.cpp'
    ),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/destroy_resource_view.png`,
        'https://github.com/n-c0d3r/NRE/blob/main/nre/source/nre/rendering/newrg/rhi_alternatives/resource_view.cpp'
    ),

    Common.HR(),

    Post.Paragraph("Binder Signature"),
    Post.EnhancedTextSection(binder_signature),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/nsl_root_signature.png`
    ),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/binder_signature.png`,
        'https://github.com/n-c0d3r/NRE/blob/main/nre/samples/newrg/render_graph/binder_group/source/bootstrap.cpp'
    ),

    Common.HR(),

    Post.Paragraph("Summary"),
    Post.EnhancedTextSection(summary),

    Common.HR(),

    Post.FBComments('http://n-c0d3r.github.io/build/pages/blog/posts/2.the_newrg_render_pipeline_modern_rendering_in_nre_chap1/page.html')
);