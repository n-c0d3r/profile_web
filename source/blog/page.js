
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.register_page();



$("body")
.appendChild(
    Common.Header({

        current_page_index: 2

    })
);