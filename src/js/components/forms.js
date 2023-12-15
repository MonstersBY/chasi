import $ from "jquery";
$('.profile__form_item input').on('input', function(evt) {
	let $this = $(this);
	let $parent = $this.parent();
	let $placeholder = $parent.find('.profile__form_name');

	$this.removeClass('invalid');

	if ($this.val()) {
		$placeholder.addClass('active');
	} else {
		$placeholder.removeClass('active');
	}
});

$('.dropdown_top').on('click', function(evt) {
	console.log($(this));
	$(this).closest('.dropdown').toggleClass('open')
});