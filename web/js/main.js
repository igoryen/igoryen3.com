+function ($) {

    $(document).ready(function() {
        $checkbox = $("[id^=form_hiragana]");

        $('.js-header-search-toggle').on('click', function() {
            $('.search-bar').slideToggle();
        });
        $(".sidebar-toggler").on("click", function () {
           $(".page-sidebar").slideToggle();
        });
        $('.selectAllCheckboxes').click(function(){
            $checkbox.click();
        });
    });

}(jQuery);
