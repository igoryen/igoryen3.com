+function ($) {

    $(document).ready(function() {
        $('.js-header-search-toggle').on('click', function() {
            $('.search-bar').slideToggle();
        });
        $(".sidebar-toggler").on("click", function () {
           $(".page-sidebar").slideToggle();
        });
    });

}(jQuery);
