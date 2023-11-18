module.use(
    [

        "./posts/**",

    ],
    {

        entry_prefix: "page",

    }
)
.exe(()=>{

    let post_list_analysis_data = {

        entry_list_page_relative_path: "../",

    };



    // list_config module
    let list_config = module.use_and_get("./list_config")[0].auto_return_object;



    // compute post count
    let post_info_modules = module.use_and_get(
        "./posts/**", 
        {

            entry_prefix: "info",

        }
    );
    let post_count = post_info_modules.length;



    // compute list count
    let list_count = Math.ceil(post_count / list_config.max_post_count_per_list);

    // create list module
    let post_index = 0;
    for(let list_index = 0; list_index < list_count; ++list_index) {

        let local_post_info_modules = post_info_modules.slice(
            post_index, 
            Math.min(post_index + list_config.max_post_count_per_list, post_count)
        );

        // create virtual module for list
        let list_module = module.create_virtual_module(
            `
                module.use({
                
                    n0d3s: "./n0d3s",
                
                    Common: "./common",
                
                    Post: "./blog/post",
                    BlogPage: "./blog/page",
                
                })
                .register_page();
                
                console.log(infos);
                
                BlogPage(
                    ${list_index},
                    ${list_index != 0},
                    ${list_index != (list_count - 1)},
                    infos
                );
            
            `,
            {

                virtual_src_file : `${module.src_dir}/lists/${list_index}.js`

            }
        );
        list_module.add_variable_dependencies("infos", local_post_info_modules, true);

        // add entry_list_page_relative_path to post_list_analysis_data
        if(list_index == 0) {

            post_list_analysis_data.entry_list_page_relative_path = list_module.relative_page_build_path();
        }

        post_index += list_config.max_post_count_per_list;

    }



    // embed post_list_analysis_data to post_list_analysis_data module
    module.use_and_get("./post_list_analysis_data")[0].auto_return(post_list_analysis_data);

});