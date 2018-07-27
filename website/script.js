$("div:hidden:first").fadeIn(1000).delay(4000).slideUp(1000);


<script>
function myFunction() {
    document.getElementById("reg1").innerHTML=
    "Thank you for signing up!";
    document.getElementById("reg2").innerHTML=
    "I look forward to speaking with you soon";
    }
</script>

<button onclick="myFunction('click')">Sign Up!</button>
