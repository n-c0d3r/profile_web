
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./blog/post",

    info: "the_best_programming_language_for_game_engine_developmment_info",

})
.text({

    introduction: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/introduction",
    hardware_friendly_and_os_api_direct_access: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/hardware_friendly_and_os_api_direct_access",
    mem: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/mem",
    preprocessor_and_mtp: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/preprocessor_and_mtp",
    stl: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/stl",
    build_systems: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/build_systems",
    conclusion: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/conclusion",

})
.register_page();



Post(info)
.appendInner(

    Post.Paragraph("Introduction"),
    Post.EnhancedTextSection(introduction),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/a_piece_of_ing_engine_code.png`,
        "https://github.com/INGTechnologies/ING/blob/main/Source/Engine/ING/Source/ING/Engine/Engine.cpp"
    ),

    Common.HR(),

    Post.Paragraph("Hardware-Friendly & OS API Direct Access"),
    Post.EnhancedTextSection(hardware_friendly_and_os_api_direct_access),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/cpu_intrinsic_func_cpp.png`
    ),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/inline_assembly_cpp.png`,
        "https://github.com/electronicarts/EAThread/blob/master/include/eathread/arm/eathread_sync_arm.h"
    ),

    Common.HR(),

    Post.Paragraph("Preprocessor & Meta-Template Programming"),
    Post.EnhancedTextSection(preprocessor_and_mtp),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/macro_usage.png`
    ),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/mtp.png`
    ),

    Common.HR(),

    Post.Paragraph("Memory Management"),
    Post.EnhancedTextSection(mem),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/incr_chunk_allocator.png`
    ),

    Common.HR(),

    Post.Paragraph("The Standard Template Library (STL)"),
    Post.EnhancedTextSection(stl),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/EASTL.png`,
        "https://github.com/electronicarts/EASTL"
    ),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/folly.png`,
        "https://github.com/facebook/folly"
    ),

    Common.HR(),

    Post.Paragraph("Build Systems"),
    Post.EnhancedTextSection(build_systems),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/cmake.png`,
        "https://cmake.org/"
    ),
    Post.ImageBody(
        `${window.origin}/resources/image/for_blogs/macro_generation_cmake.png`
    ),

    Common.HR(),

    Post.Paragraph("Conclusion"),
    Post.EnhancedTextSection(conclusion),

);