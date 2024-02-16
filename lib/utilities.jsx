import Swal from 'sweetalert2';

export default async function addData(){
      console.log('hola')
        const datos = {
            "Nom_User": "Steven",
            "Ape_User": "Gonzalez",
            "Ema_User": "ste@gmail.com",
            "Pass_User": "1234",
            "Id_Rol_FK": 1,
            "Dir_Ip": "192.168.0.1"
        }
        const response = await fetch('http://127.0.0.1:3000/api/register', {
            method: "POST",
            headers: { "Content-type": 'application/json' },
            body: JSON.stringify(datos)
        })
    if (response.ok) {
      let timerInterval;
      Swal.fire({
        title: "Seras redirigido!",
        html: "Se ha enviado un codigo de verificaion a tu email  <b></b> milliseconds.",
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });

      console.log('Recibiras un codigo ');
      const timer = setTimeout(() => {
        window.location.href = '/validar';
      }, 5000);
      return () => clearTimeout(timer);
    }
  };



  const handleSubmit = async (s) => {
    s.preventDefault();

  }