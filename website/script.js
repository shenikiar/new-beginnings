
// Hide Welcome text
$('.spoiler span').hide();
//When the button is pressed
$('.spoiler button').click(function(){
  //Show the Welcome text
$('.spoiler span').show();
  //Hide the "Welcome" Button
  $('.spoiler button').fadeOut();
});


<script>
//When the user clicks on <div>, open the popuptext
function myFunction() {
  var popup = document.getElementById("myPopup");

popup.classList.toggle("show");
}
</script>

// Hide Thanks text
$('.popup span').hide();
//When the button is pressed
$('.popup button').click(function(){
  //Show the Thanks text
$('.popup span').show();
  //Hide the "Thanks" Button
$('.popup button').hide();

});
