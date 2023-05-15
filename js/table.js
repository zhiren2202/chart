
    function isIE() {
    return navigator.userAgent.indexOf('MSIE') > -1 || navigator.appVersion.indexOf('Trident/') > -1
}


    if (isIE()) {

        // Fix table head
        function table-col-scroll-fix(ths) {
      var sT = this.scrollTop;
    [].forEach.call(ths, function (th) {
        th.style.transform = "translateY(" + sT + "px)";
      });
    }

    [].forEach.call(document.querySelectorAll(".maxTable-scroll-fix-row"), function (el) {
      var ths = el.querySelectorAll("thead th");
    el.addEventListener("scroll", table-col-scroll-fix.bind(el, ths));
    });

  }