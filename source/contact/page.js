
module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

    contents: "./contents",

})
.register_page();



$("title").setInner("Contact");



$("body")
.appendInner(
    Common.Header({

        current_page_index: 4

    }),

    ...contents,
);