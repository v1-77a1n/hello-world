$(document).ready(function() {

        $("a").each(function () {
                var url = $(this).attr("href");
                var caption = $(this).attr("id");
                $(this).click(function(evt) {
                        $("#gallery img").attr("src", url);
                        $("#title").text(caption);
                        evt.preventDefault();

                });
        });

        $("a").eq(1).focus();

}); // end ready