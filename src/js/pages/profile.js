import $ from "jquery";
import Cropper from "cropperjs";

if($('.profile').length) {
    $('.profile__img_set').on('click', () => {
        $('.profile__img_menu').slideToggle();
    });
    
    $(document).on('click', function (e) {
        if ($(e.target).closest(".profile__img").length === 0 && $(".profile__img_menu").css('display') == 'block') {
            $(".profile__img_menu").slideToggle()
        }
    });

    let photoCreating = document.querySelector('#photoCreating');
    let imagesExtentions = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

    $('.profile__img_item input').on('change', function (e) {
        if (e.target.files.length) {
            if (imagesExtentions.includes(e.target.files[0].type)) {
                
                let img = document.createElement('img');
                img.id = 'photoCreating';
                img.src = URL.createObjectURL($(this)[0].files[0])
                $('.photo-modal__img')[0].appendChild(img);
                let cropperAvatar = new Cropper(img, {
                    dragMode: 'move',
                    aspectRatio: 1,
                    autoCrop: true,

                    autoCropArea: 0.68,
                    center: false,
                    cropBoxMovable: false,
                    cropBoxResizable: false,
                    guides: false,

                    ready: function (event) {

                        this.cropperAvatar = cropperAvatar;
                    },
                });
                $('#cropImg').on('click',function(){
                    let croppedImage = cropperAvatar.getCroppedCanvas().toDataURL("image/png")

                    $('.profile__img_set img')[0].src = croppedImage
                    $('.photo-modal').removeClass('active')
                    $('.photo-modal__img').find('.cropper-container').remove()
                    $('.photo-modal__img').find('#photoCreating').remove()
                })
            }
        }
    })


}
