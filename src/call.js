Function.prototype.call = function(context, ...arg) {
    if (!context || context === null) context = window;
    
}