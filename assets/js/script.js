
  const slides = document.querySelectorAll(".slides img");
  let slideIndex = 0;
  let intervalId = null;
  
  document.addEventListener("DOMContentLoaded", initializeSlider);
  
  function initializeSlider(){
      if(slides.length > 0){
          slides[slideIndex].classList.add("displaySlide");
          intervalId = setInterval(nextSlide, 5000);
      }
  }
  
  function showSlide(index){
      if(index >= slides.length){
          slideIndex = 0;
      }
      else if(index < 0){
          slideIndex = slides.length - 1;
      }
  
      slides.forEach(slide => {
          slide.classList.remove("displaySlide");
      });
      slides[slideIndex].classList.add("displaySlide");
  }
  
  function prevSlide(){
      clearInterval(intervalId);
      slideIndex--;
      showSlide(slideIndex);
  }
  
  function nextSlide(){
      slideIndex++;
      showSlide(slideIndex);
  }

  /* Sending Email from Contact Section */
(function () {
  emailjs.init("ywyvf499JDoO1HWa5");
})();

function sendmail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

      var contactParams = {
          from_name: fullName,
          from_email: userEmail,
          message: userMessage
      };

      emailjs.send('service_pflcu2v', 'template_pmiaih8', contactParams)
      .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")
      })
      .catch(err=>console.log(err));
}