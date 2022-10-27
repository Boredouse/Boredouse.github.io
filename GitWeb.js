const OpenMenu = document.querySelector('')
const HideMenu = document.querySelector('')
const SideMenu = document.querySelector('')

OpenMenu.addEventListener('click', function() {
  SideMenu.classlist.add('active')
}
)

function blink_text() {
	$('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink_text, 1000);

