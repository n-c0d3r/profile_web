
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./style"

]);



const header_data = {

    menu: {

        items: [

            {

                name: "About Me",
                url: `${window.origin}/build/pages/about_me/page.html`,               

            },

            {

                name: "Projects & Demos",
                url: `${window.origin}/build/pages/projects_n_demos/page.html`,               

            },

            {

                name: "Blog",
                url: `${window.origin}/build/pages/blog/page.html`,               

            },

            {

                name: "Contact",
                url: `${window.origin}/build/pages/contact/page.html`,               

            },

        ],

        social_urls: {

            github: "https://github.com/n-c0d3r",
            youtube: "https://www.youtube.com/channel/UCpliLhWxstPpFBx8R7ckSsQ",
            facebook: "https://www.facebook.com/tao.sang.543",
            linkedin: "https://www.linkedin.com/in/h%C3%B9ng-nguy%E1%BB%85n-950952254/",

        }

    }

};



return header_data;