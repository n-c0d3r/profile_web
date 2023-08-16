
module.use({

    n0d3s: "./n0d3s",

    isInVP: "./is_in_vp",

});



function LightingOnVisible(init_opacity = 0.0, init_grayscale = 0.875, transition_time = '0.75s') {

    return {

        init(element) {

            element.setStyle({

                filter: `opacity(${init_opacity}) grayscale(${init_grayscale})`,

                webkitTransition : `-webkit-filter ${transition_time} linear`,

            });

        },

        update(element) {

            if(isInVP(element)) {
                
                element.setStyle({

                    filter: `opacity(1.0) grayscale(0.0)`,

                });

            }
            else {
                
                element.setStyle({

                    filter: `opacity(${init_opacity}) grayscale(${init_grayscale})`,

                });

            }

            return true;
        }

    };
}



return LightingOnVisible;