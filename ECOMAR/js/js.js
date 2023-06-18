let selectedRating = 0;

function toggleForm() {
  let form = document.getElementById("feedback-form");
  form.classList.toggle("expanded");
}

function rate(rating) {
  selectedRating = rating;
  let stars = document.getElementsByClassName("star");
  for (let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.add("selected");
    } else {
      stars[i].classList.remove("selected");
    }
  }

  let starsContainer = document.getElementById("feedback-stars");
  let reversedStars = [];
  for (let i = stars.length - 1; i >= 0; i--) {
    reversedStars.push(stars[i]);
  }
  for (let i = 0; i < reversedStars.length; i++) {
    starsContainer.appendChild(reversedStars[i]);
  }

  alert("Has calificado el sitio web con " + selectedRating + " estrellas.");
}








document.getElementById('divSubirArchivo').addEventListener('click', function () {
    document.getElementById('inputArchivo').click();
});

document.getElementById('inputArchivo').addEventListener('change', function (e) {
    var archivo = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        var contenido = event.target.result;
        localStorage.setItem('archivoSubido', contenido);
    };

    reader.readAsDataURL(archivo);
});




const form = document.querySelector('#form1');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name');
    const mail = document.querySelector('#mail');
    const message = document.querySelector('#message');

    if (name.value === '') {
      alert('Por favor ingrese su nombre.');
      return;
    }

    if (mail.value === '') {
      alert('Por favor ingrese un correo electrónico.');
      return;
    }

    if (message.value === '') {
      alert('Por favor ingrese un mensaje.');
      return;
    }

    form.submit();
  });