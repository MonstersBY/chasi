import $ from "jquery";
$('.profile__form_item input').on('input', function(evt) {
    console.log(123);
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