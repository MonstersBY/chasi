import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import $ from "jquery";

$(function () {
    Fancybox.bind("[data-fancybox='swiper-gallery']", {
        idle: false,
        Carousel: {
            transition: "slide",
        },
        Thumbs: {
            type: "classic",
        },
        Toolbar: {
            display: {
                middle: ['infobar'],
                left: [],
                right: ["close"],
            },
        },
        // infobar: {
        //     tpl: '<div class="custom-infobar" tabindex="-1"><span data-fancybox-current-index></span> of <span data-fancybox-count></span></div>',
        // },
        on: {
            init: function () {
                $(".fancybox-bg").fadeIn();
            },
            close: function () {
                $(".fancybox-bg").fadeOut();
            },
        },
    });

    $(".fancybox-bg").on("click", function () {
        Fancybox.close();
    });
});