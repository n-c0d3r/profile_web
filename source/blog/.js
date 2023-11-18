
module.use(
    [

        "./posts/**"

    ],
    {

        entry_prefix: "page"

    }
)
.exe(()=>{

    let post_list_analysis_data = {

        entry_list_page_relative_path: "../",

    };



    // list_config module
    let list_config = module.use_and_get("./list_config")[0].auto_return_object;



    // compute post count
    let post_paths = module.path_query(
        "./posts/**", 
        {

            entry_prefix: "info",

        }
    );
    let post_count = post_paths.length;



    // compute list count
    let list_count = Math.ceil(post_count / list_config.max_post_count_per_list);

    // create list module
    let post_index = 0;
    for(let list_index = 0; list_index < list_count; ++list_index) {

        let list_dir = `${module.src_dir}/${list_index}`;

        let info_use_path_query_code = '';
        let info_pass_code = '[';
        let local_post_end_index = Math.min(post_index + list_config.max_post_count_per_list, post_count);
        for(let i = post_index; i < local_post_end_index; ++i){

            info_use_path_query_code += `info_${post_index}: module.decode_js_str(${
                module.encode_js_str(
                    post_paths[post_index]
                )
            }),`;

            info_pass_code += `info_${post_index},`;

        }
        info_pass_code += "]";

        // create virtual module for list
        let list_module = module.create_virtual_module(
            `
                module.use({
                
                    n0d3s: "./n0d3s",
                
                    Common: "./common",
                
                    Post: "./blog/post",
                    BlogPage: "./blog/page",
                
                })
                .use(
                    {
                
                        ${info_use_path_query_code}
                
                    },
                    {
                        
                        entry_prefix: 'info',
                
                    }
                )
                .register_page();
                
                
                
                BlogPage(
                    ${list_index},
                    ${list_index != 0},
                    ${list_index != (list_count - 1)},
                    ${info_pass_code}
                );
            
            `,
            {

                virtual_src_file : `${module.src_dir}/lists/${list_index}.js`

            }
        );

        // add entry_list_page_relative_path to post_list_analysis_data
        if(list_index == 0) {

            post_list_analysis_data.entry_list_page_relative_path = list_module.relative_page_build_path();
        }

        post_index += list_config.max_post_count_per_list;

    }



    // embed post_list_analysis_data to post_list_analysis_data module
    module.use_and_get("./post_list_analysis_data")[0].auto_return(post_list_analysis_data);

});