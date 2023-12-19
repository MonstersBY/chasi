import $ from "jquery";

$(function() {
  $(".chat__dialog__message--photo").each(function() {
    let numPhotos = $(this).find("img").length;

    if (numPhotos === 4) {
        $(this).css({
          "grid-template-columns": "repeat(3, 1fr)",
          "grid-template-rows": "auto auto",
        });
        $(this).find("img:lt(3)").css({
          "width": "100%",
          "height": "16rem",
          
        });
        $(this).find("img:eq(3)").css({
          "width": "100%",
          "height": "22.4rem",
          "grid-area": "2 / 1 / 3 / 4"
        });
      }else if (numPhotos === 5) {
        $(this).css({
          "grid-template-columns": "repeat(6, 1fr)",
          "grid-template-rows": "auto auto",
        });
        $(this).find("img:lt(3)").css({
          "width": "100%",
          "height": "16rem",
          "grid-column": "auto / span 2"
        });
        $(this).find("img:eq(3)").css({
            "width": "100%",
            "height": "22.4rem",
            "grid-column": "auto / span 3"
          });
          $(this).find("img:eq(4)").css({
            "width": "100%",
            "height": "22.4rem",
            "grid-column": "auto / span 3"
          });
    }
  });
});