
module.use({

    n0d3s: "./n0d3s",

    isInVP: "./is_in_vp",

});



function LightingOnVisible(init_opacity = 0.0, init_grayscale = 1.0) {

    return {

        init(element) {

            element.setStyle({

                filter: `opacity(${init_opacity}) grayscale(${init_grayscale})`,

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