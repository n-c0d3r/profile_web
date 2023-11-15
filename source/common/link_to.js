
module.use({

    n0d3s: "./n0d3s",

});



return function LinkTo(url){

    return function(){

        this.appendClass("prevent-select link");
        
        this.addEventListener("click", e => window.location.href = (url));
    }
};