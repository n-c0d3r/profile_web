
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",
    Post: "./blog/post",

})
.text({

    introduction: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/introduction",
    hardware_friendly_and_os_api_direct_access: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/hardware_friendly_and_os_api_direct_access",
    mem: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/mem",
    preprocessor_and_mtp: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/preprocessor_and_mtp",
    conclusion: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/conclusion",
    cmake: "text/blog/posts/the_best_programming_language_for_game_engine_developmment/cmake",

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

    Post.Paragraph("CMake"),
    Post.EnhancedTextSection(cmake),

    Common.HR(),

    Post.Paragraph("Conclusion"),
    Post.EnhancedTextSection(conclusion),

);