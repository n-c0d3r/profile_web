
module.use_all()
.exe(()=>{

    const fs = module.require('fs');



    let post_list_analysis_data = {

        entry_list_page_relative_path: "../",

    };



    // compute list count
    let list_count = 0;

    while(true){

        let list_dir = `${module.src_dir}/${list_count}`;
 
        if(!fs.existsSync(list_dir))
            break;

        list_count++;

    }

    // create list module
    for(let list_index = 0; list_index < list_count; ++list_index) {

        let list_dir = `${module.src_dir}/${list_index}`;

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
                
                        infos: "./${list_index}/**",
                
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
                    infos
                );
            
            `,
            {

                virtual_src_file : `${module.src_dir}/${list_index}.js`

            }
        );

        // add entry_list_page_relative_path to post_list_analysis_data
        if(list_index == 0) {

            post_list_analysis_data.entry_list_page_relative_path = list_module.relative_page_build_path();
        }

    }



    // embed post_list_analysis_data to post_list_analysis_data module
    let post_list_analysis_data_module = module.use_and_get("./post_list_analysis_data")[0];
    post_list_analysis_data_module.add_data(
        "post_list_analysis_data", 
        post_list_analysis_data
    );

});