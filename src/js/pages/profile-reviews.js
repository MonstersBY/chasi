import $ from "jquery";

$(function () {
    $('.switcher-content').hide();
    $('.switcher-content[data-content="revFromClients"]').show();

    $('.switcher-rev').on('click', function () {
        $('.switcher-rev').removeClass('switcher-rev--active');
        $(this).addClass('switcher-rev--active');
        $('.switcher-content').hide();
        var switcherValue = $(this).data('switcher');
        $('.switcher-content[data-content="' + switcherValue + '"]').show();
    })
})