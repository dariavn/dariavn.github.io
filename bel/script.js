// Get the modal
let modals = document.getElementsByClassName('modal');

// Get the buttons that opens the modal
let buttons = document.querySelectorAll('button')
buttons.forEach(button => {
  button.addEventListener('click', function () {
    const modal = button.parentElement.querySelector('.modal')
    // Get the <span> element that closes the modal
    let span = modal.getElementsByClassName("close")[0];
    //When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    modal.style.display = "block";
  });
});;


