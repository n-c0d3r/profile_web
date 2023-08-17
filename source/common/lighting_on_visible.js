
module.use({

    n0d3s: "./n0d3s",

    isInVP: "./is_in_vp",

});



function LightingOnVisible(init_opacity = 0.0, init_grayscale = 1.0, transition_time = '0.3s') {

    return {

        init(element) {

            element.setStyle({

                filter: `brightness(0.0) blur(2px) opacity(${init_opacity}) grayscale(${init_grayscale})`,

                webkitTransition : `-webkit-filter ${transition_time} linear`,

            });

        },

        update(element) {

            if(isInVP(element)) {
                
                element.setStyle({

                    filter: `brightness(1.0) blur(0px) opacity(1.0) grayscale(0.0)`,

                });

            }
            else {
                
                element.setStyle({

                    filter: `brightness(0.0) blur(2px) opacity(${init_opacity}) grayscale(${init_grayscale})`,

                });

            }

            return true;
        }

    };
}



return LightingOnVisible;