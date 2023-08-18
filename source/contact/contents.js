
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    contact: "text/contact",

});



return [

    Common.PageContent()
    .appendInner(

        Common.SubPageContent()
        .useLargeWidth()
        .appendInner(
    
            Common.EnhancedTextBody(contact)
            .useLargeWidth()
            .appendClass("item-left"),
    
        ),

    ),

];