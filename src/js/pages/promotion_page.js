import $ from "jquery";

$(function () {

    const promotionPayment = $(".promotion__payment");
    const confirmPaymentBtn = $(".btn--confirm-payment");
    const publishBtn = $(".btn--publish");
    const continueBtn = $(".btn--continue");
    const noPromotionCheckbox = $("#noPromotionCheckbox");
    const tariffCheckbox = $("#tariffCheckbox");
    const checkboxes = tariffCheckbox.add(noPromotionCheckbox);

    //hide all btns except publishBtn
    promotionPayment.hide();
    confirmPaymentBtn.hide();
    continueBtn.hide();

    //tariffCheckbox event listener
    tariffCheckbox.on("change", function () {

        if (this.checked) {
            noPromotionCheckbox.prop("checked", false);
        }

        
        if (!window.matchMedia("(max-width: 768px)").matches) {
            //desktop
            promotionPayment.toggle(this.checked);
            confirmPaymentBtn.toggle(this.checked);
            publishBtn.hide();

        } else {
            //mobile
            publishBtn.hide(this.checked);
            continueBtn.toggle(this.checked);

            continueBtn.on("click", function () {
                continueBtn.hide();
                confirmPaymentBtn.show();
                promotionPayment.show();

                const promFirstPage = $(".promotion__header:first, .promotion__top, .promotion__tariff, .promotion__no-promotion");
                promFirstPage.hide();
            });
        }
    });

    //noPromotionCheckbox event listener
    noPromotionCheckbox.on("change", function () {

        if (this.checked) {

            tariffCheckbox.prop("checked", false);

            promotionPayment.hide();
            confirmPaymentBtn.hide();
            continueBtn.hide();

            publishBtn.show();
        } 
    });

    // if no checkboxes checked
    checkboxes.on("change", function () {
        if (!tariffCheckbox.prop("checked") && !noPromotionCheckbox.prop("checked")) {
            publishBtn.show();
        }
    });
});
