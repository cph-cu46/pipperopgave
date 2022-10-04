 // Henter modal afsnittet fra vores html
 var update_modal = document.getElementById("update_myModal");

 // Henter knappen som åbner vores modal, i html
 var btn = document.getElementById("update_PipButton");
 
 // Henter span (<span class="close">&times;</span>) som er et kryds der lukker modal box
 var span = document.getElementsByClassName("update_close")[0];
 
 // Når brugeren klikker på knappen, åbnes modal boxen
 btn.onclick = function() {
   update_modal.style.display = "block";
 }
 
 // Når brugeren klikker på krydset (<span class="close">&times;</span>), lukkes modal boxen
 span.onclick = function() {
   update_modal.style.display = "none";
 }
 
 // Når brugeren klikker steder uden for boxen, lukkes den
 window.onclick = function(event) {
   if (event.target == modal) {
     update_modal.style.display = "none";
   }
 }