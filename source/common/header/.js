
module.use({

    n0d3s: "./n0d3s",

    header_data: "./data",

})
.use([

    "./style"

]);



function HeaderMenuDesktop(current_page_index){

    function HeaderMenuNavBtns(){

        let btns = [];

        for(let i = 0; i < header_data.menu.items.length; ++i) {

            let btnInfo = header_data.menu.items[i];

            let btn = n0d3s.UI.Element("a")
            .appendClass(
                `header-menu-nav-btn ${
                    (()=>{

                        if(i == current_page_index)
                            return 'header-menu-nav-btn-text-current-page';
                        else
                            return 'header-menu-nav-btn-text-other-page';

                    })()
                } item-center prevent-select`
            )
            .setInner(
                btnInfo.name,
            )
            .setHRef(btnInfo.url);

            btns.push(btn);

        }

        return btns;
    }



    function HeaderMenuSocailBtns(){

        let btns = [];

        for(let social_name in header_data.menu.social_urls) {

            let social_url = header_data.menu.social_urls[social_name];

            let btn = n0d3s.UI.Element("a")
            .appendClass(
                `header-menu-social-btn`
            )
            .setStyle({

                backgroundImage: `url("${window.origin}/resources/image/icon/${social_name}.png")`,

            })
            .setHRef(social_url);

            btns.push(btn);

        }

        return btns;
    }

    

    function HeaderMenuSearchBar(){

        return n0d3s.UI.Element("div")
        .appendClass(
            `header-menu-search-btn`
        );
    }



    return n0d3s.UI.Element("div")
    .appendClass("header-menu-desktop")
    .setInner(

        ...HeaderMenuNavBtns(),

        n0d3s.UI.Element("div")
        .appendClass("header-menu-vertical-line"),

        HeaderMenuSearchBar(),

        n0d3s.UI.Element("div")
        .appendClass("header-menu-vertical-line"),

        ...HeaderMenuSocailBtns(),

    );
}



function HeaderMenuMobile(current_page_index){

    function HeaderMenuNavBtns(){

        let btns = [];

        for(let i = 0; i < header_data.menu.items.length; ++i) {

            let btnInfo = header_data.menu.items[i];

            let btn = n0d3s.UI.Element("a")
            .appendClass(
                `header-menu-nav-btn ${
                    (()=>{

                        if(i == current_page_index)
                            return 'header-menu-nav-btn-text-current-page';
                        else
                            return 'header-menu-nav-btn-text-other-page';

                    })()
                } item-center prevent-select`
            )
            .setInner(
                btnInfo.name,
            )
            .setHRef(btnInfo.url);

            btns.push(btn);

        }

        return btns;
    }



    function HeaderMenuSocailBtns(){

        let btns = [];

        for(let social_name in header_data.menu.social_urls) {

            let social_url = header_data.menu.social_urls[social_name];

            let btn = n0d3s.UI.Element("a")
            .appendClass(
                `header-menu-social-btn`
            )
            .setStyle({

                backgroundImage: `url("${window.origin}/resources/image/icon/${social_name}.png")`,

            })
            .setHRef(social_url);

            btns.push(btn);

        }

        return btns;
    }



    return n0d3s.UI.Element("div")
    .appendClass("header-menu-mobile")
    .setInner(

        n0d3s.UI.Element("div")
        .appendClass("header-menu-container-open-btn")
        .setInner(            

            

        ),

    )
    .exe(function(){

        let menu = this;

        menu.is_closed = true;

        let container_open_btn = menu.querySelector(".header-menu-container-open-btn");

        menu.open = function(){

            container_open_btn.setStyle({

                transform: "rotate(180deg)",

                backgroundImage: `url("${window.origin}/resources/image/icon/x.png")`,

            });

            menu.is_closed = false;

        };

        menu.close = function(){

            container_open_btn.setStyle({

                transform: "rotate(0deg)",

                backgroundImage: `url("${window.origin}/resources/image/icon/menu_btn.png")`,

            });
            
            menu.is_closed = true;
            
        };

    })
    .on("click", function(){

        if(this.is_closed)
            this.open();
        else
            this.close();

    });
}



function Header(options = new Object()) {

    let current_page_index = options.current_page_index || 0;

    const about_me_url = header_data.menu.items[0].url;

    return n0d3s.UI.Element("div")
    .appendClass("header")
    .setInner(

        n0d3s.UI.Element("a")
        .appendClass("header-logo")
        .setInner(

            n0d3s.UI.Element("a")
            .appendClass("header-logo-n")
            .setHRef(about_me_url),

            n0d3s.UI.Element("div")
            .appendClass("header-logo-text item-center prevent-select")
            .setInner("C O D E R")
            .setHRef(about_me_url)
            .on('click', function() {window.location.href = about_me_url;}),

        )
        .setHRef(about_me_url),

        HeaderMenuMobile(current_page_index),

        HeaderMenuDesktop(current_page_index),

    );
}



return Header;