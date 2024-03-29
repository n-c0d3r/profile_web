
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);



const HEADER_BG_COLOR = `rgba(14, 14, 14, 0.95)`;

const LOGO_TEXT_COLOR = `rgb(120, 120, 120)`;
const LOGO_TEXT_COLOR_HOVER = `rgb(120, 190, 200)`;

const LOGO_WIDTH_PX = 180;

const MENU_NAV_BTN_TEXT_OTHER_PAGE_COLOR = `rgb(120, 120, 120)`;
const MENU_NAV_BTN_TEXT_OTHER_PAGE_COLOR_HOVER = `rgb(80, 120, 125)`;
const MENU_NAV_BTN_TEXT_CURRENT_PAGE_COLOR = `rgb(180, 180, 180)`;
const MENU_NAV_BTN_TEXT_CURRENT_PAGE_COLOR_HOVER = `rgb(120, 220, 230)`;

const VERTICAL_LINE_COLOR = `rgb(40, 40, 40)`;

const MENU_SOCIAL_BTN_SIZE_PX = 18;

const MENU_SEARCH_BTN_SIZE_PX = 20;



n0d3s.UI.Style(`

.header {

    width: 100vw;
    height: 50px;

    background-color: ${HEADER_BG_COLOR};

    display: flex;
    flex-flow: row;

    position: fixed;
    top: 0;
    
    box-shadow: 0px 6px 6px rgba(0,0,0,0.15);

    z-index: 39;

    border-bottom: solid 1px rgb(10, 10, 10);

}

.header-logo {

    width: ${LOGO_WIDTH_PX}px;
    height: 50px;

    display: flex;
    flex-flow: row;
    justify-content: center;

    color: ${LOGO_TEXT_COLOR};

    transition: 0.4s;

    cursor: pointer;

}

.header-logo:hover {

    filter: brightness(1.75) saturate(1.125);

}

.header-logo-n {

    width: 50px;
    height: 50px;

    background-image: url("${window.origin}/resources/image/icon/logo1024.png");
    background-size: cover;

    cursor: pointer;

}

.header-logo-text {

    height: 50px;

    margin-right: 15px;
    margin-left: 3px;

    cursor: pointer;

    font-weight: bold;

}



@media (min-width: 928px) {

    .header-menu-desktop {
    
        width: calc(100% - ${LOGO_WIDTH_PX}px);
        height: 50px;

        display: flex;
        flex-flow: row;
        justify-content: center;

        gap: 20px;
    
    }

    .header-menu-mobile {
    
        display: none;
    
    }



    .header-menu-nav-btn {
    
        cursor: pointer;

        padding-left: 15px;
        padding-right: 15px;

        transition: 0.4s;

        font-weight: bold;
    
    }



    .header-menu-nav-btn-text-other-page {

        height: 48px;

        border-top: solid 1px rgba(0,0,0,0); 
        border-bottom: solid 1px rgba(0,0,0,0.0); 

        color: ${MENU_NAV_BTN_TEXT_OTHER_PAGE_COLOR};

        font-weight: bold;
    
    }

    .header-menu-nav-btn-text-other-page:hover {

        border-top: solid 1px rgba(0,0,0,0.0); 
        border-bottom: solid 1px rgba(70,97,100,1.0); 

        color: ${MENU_NAV_BTN_TEXT_OTHER_PAGE_COLOR_HOVER};
    
    }



    .header-menu-nav-btn-text-current-page {

        height: 48px;

        border-top: solid 1px rgba(0,0,0,0.0); 
        border-bottom: solid 1px rgba(120,190,200,1.0); 

        color: ${MENU_NAV_BTN_TEXT_CURRENT_PAGE_COLOR};

        font-weight: bold;
    
    }

    .header-menu-nav-btn-text-current-page:hover {

        color: ${MENU_NAV_BTN_TEXT_CURRENT_PAGE_COLOR_HOVER};
    
    }



    .header-menu-vertical-line {

        width: 1px;
        height: calc(100% - 24px);

        margin-top: 12px;
        margin-bottom: 12px;

        background-color: ${VERTICAL_LINE_COLOR};
    
    }



    .header-menu-social-btn {

        width: ${MENU_SOCIAL_BTN_SIZE_PX}px;
        height: ${MENU_SOCIAL_BTN_SIZE_PX}px;

        margin-top: ${(50 - MENU_SOCIAL_BTN_SIZE_PX) / 2}px;
        margin-bottom: ${(50 - MENU_SOCIAL_BTN_SIZE_PX) / 2}px;

        background-size: cover;

        filter: brightness(0.5) grayscale(1.0);

        transition: 0.4s;

    }

    .header-menu-social-btn:hover {

        filter: brightness(1.0) grayscale(0.0);

    }



    .header-menu-search-btn {

        width: ${MENU_SEARCH_BTN_SIZE_PX}px;
        height: ${MENU_SEARCH_BTN_SIZE_PX}px;

        margin-top: ${(50 - MENU_SEARCH_BTN_SIZE_PX) / 2}px;
        margin-bottom: ${(50 - MENU_SEARCH_BTN_SIZE_PX) / 2}px;

        background-size: cover;

        filter: brightness(0.5) grayscale(1.0);

        transition: 0.4s;

        cursor: pointer;

        background-image: url("${window.origin}/resources/image/icon/search.png");

    }

    .header-menu-search-btn:hover {

        filter: brightness(1.0) grayscale(0.0);

    }
    
}

@media (max-width: 928px) {

    .header-menu-mobile {
        
        width: calc(100% - ${LOGO_WIDTH_PX}px);
        height: 50px;

        display: flex;
        flex-flow: row;
        flex-direction: row-reverse;
    
    }

    .header-menu-desktop {
    
        display: none;
    
    }

    .header-menu-container-open-btn {
        
        width: 24px;
        height: 24px;

        margin: 13px;

        display: flex;
        flex-flow: column;
        justify-content: center;

        gap: 3px;

        cursor: pointer;

        transition: 0.4s;

        border-radius: 20px;

        background-image: url("${window.origin}/resources/image/icon/menu_btn.png");
        background-size: cover;

        filter: brightness(0.4);

    }

    .header-menu-container-open-btn:hover {

        filter: brightness(0.9);

    }

    .header-menu-container-open-btn-line {
        
        margin-left: 7px;
        width: 18px;
        height: 2px;

        background-color: rgb(120, 120, 120);

        transition: 0.3s;

    }

    .header-menu-mobile-bar {

        display: flex;
        flex-flow: row;
        justify-content: center;

        width: 100%;
        height: 50px;

    }

    .header-menu-search-btn {

        width: ${MENU_SEARCH_BTN_SIZE_PX}px;
        height: ${MENU_SEARCH_BTN_SIZE_PX}px;

        margin-top: ${(50 - MENU_SEARCH_BTN_SIZE_PX) / 2}px;
        margin-bottom: ${(50 - MENU_SEARCH_BTN_SIZE_PX) / 2}px;
        margin-left: ${(50 - 18) / 2}px;
        margin-right: ${(50 - 18) / 2}px;

        background-size: cover;

        filter: brightness(0.5) grayscale(1.0);

        transition: 0.4s;

        cursor: pointer;

        background-image: url("${window.origin}/resources/image/icon/search.png");

    }

    .header-menu-search-btn:hover {

        filter: brightness(1.0) grayscale(0.0);

    }

    .header-menu-social-btn {

        width: ${18}px;
        height: ${18}px;

        margin-top: ${(50 - 18) / 2}px;
        margin-bottom: ${(50 - 18) / 2}px;

        background-size: cover;

        filter: brightness(0.5) grayscale(1.0);

        transition: 0.4s;

        cursor: pointer;

        background-image: url("${window.origin}/resources/image/icon/search.png");

    }

    .header-menu-social-btn:hover {

        filter: brightness(1.0) grayscale(0.0);

    }

    .header-menu-vertical-line {

        width: 1px;
        height: calc(100% - 24px);

        margin-top: 12px;
        margin-bottom: 12px;

        background-color: ${VERTICAL_LINE_COLOR};
    
    }

    .header-menu-nav-btn {

        width: 100%;
        height: 50px;

        transform: translate(0, -50px);

        border-bottom: solid 1px rgba(30, 30, 30, 0.3);

        border-color: rgba(40, 40, 40, 0.3);

    }

    .header-menu-nav-btn-text-current-page {

        color: rgba(220, 220, 220, 1);

        font-weight: bold;
        font-size: 24px;
        
        background-color: rgba(19, 19, 20, 0.4);

    }

    .header-menu-nav-btn-text-other-page {

        color: rgba(72, 72, 72, 1);

        font-weight: bold;

    }

    .header-menu-nav-btn-text-current-page:hover {

        filter: brightness(1.25);

    }

    .header-menu-nav-btn-text-other-page:hover {

        filter: brightness(1.25);

    }

}

`);