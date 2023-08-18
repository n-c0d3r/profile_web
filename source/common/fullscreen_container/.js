
module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./style"

]);



function FullscreenContainer(show_time_seconds = "0.5"){

    return n0d3s.UI.Element('div')
    .appendClass("fullscreen-container")
    .setStyle({

        filter: `opacity(0)`,
        visibility: "hidden",
        transition: `filter ${show_time_seconds}s`,
        
    })
    .appendInner(
        
    )
    .exe(function(){

        let container = this;

        container.is_closed = true;

        container.open = function(){

            container.is_closed = false;

            container.setStyle({

                visibility: "visible",
                filter: `opacity(1)`,

            });

            return container;
        }

        container.close = function(){

            container.is_closed = true;

            container.setStyle({

                filter: `opacity(0)`,
                
            });

            setTimeout(
                ()=>{

                    if(container.is_closed)
                        container.setStyle({

                            visibility: "hidden",

                        });

                },
                show_time_seconds * 1000.0
            );

            return container;
        }

    });
}



return FullscreenContainer;