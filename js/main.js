var $ = function (params) {
    this.selector = document.getElementById(params);
    function show() {
        element = this.selector;
        return element.style.display = "block";
    };
    function hide() {
        element = this.selector;
        return element.style.display = "none";
    };
    function click(action) {
        element = this.selector;
        element.onclick = action;
    };
}