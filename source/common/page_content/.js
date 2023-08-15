
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./style"

]);



function PageContent(){

    return n0d3s.UI.Element("div")
    .appendClass("page-content")
    .setInner(
        
    );
}



return PageContent;