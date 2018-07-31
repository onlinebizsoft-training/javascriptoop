(function () {
    var $ = function (params) {
        return new library(params);
    };
    var library = function (params) {
        var selector = document.querySelectorAll(params),
            i = 0;
        this.length = selector.length;
        for (; i < this.length; i++) {
            this[i] = selector[i];
        }
        return params;
    };
    if (!window.$) {
        window.$ = $;
        $.fn = library.prototype = {
            hide: function () {
                var len = this.length;
                while (len--) {
                    this[len].style.display = 'none';
                }
                return this;
            },
            show: function () {
                var len = this.length;
                while (len--) {
                    this[len].style.display = 'block';
                }
                return this;
            },
        };
    }
})();