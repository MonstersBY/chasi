import $ from "jquery";
$(document).ready(function () {

	$(document).on('keyup', (evt) => {
		evt.keyCode === 27 ? closeModal() : null;
	})

	$('[data-modal="seller-card"]').on('click', () => {
		$('.seller-card-modal').addClass('active');
	});
	$('[data-modal="photo"]').on('click', () => {
		$('.photo-modal').addClass('active');
	});

	$('[data-modal]').on('click', () => {
		$('body').addClass('lock');
	})

	$('.modal-back').on('click', closeModal);
	$('.modal-return').on('click', closeModal);
	$('.modal-exit').on('click', closeModal);
	$('.btn--go-back').on('click', closeModal);

	function closeModal() {
		$('.modal').removeClass('active');
		$('body').removeClass('lock');
	}

	$('.seller-card-modal__form').on('submit', function(evt) {
		evt.preventDefault();
		closeModal()
		$('.pop-up').addClass('showed')
		setTimeout(()=> {
			$('.pop-up').removeClass('showed')
		}, 5000);
	});

	$('.pop-up').find('svg').on('click', () => {
		$('.pop-up').removeClass('showed')
	})
})