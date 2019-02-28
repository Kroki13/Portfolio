(function() {
    'use strict';

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -10);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.bottom__arrow');


    goTopBtn.addEventListener('click', backToTop);
})();