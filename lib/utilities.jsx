import Swal from 'sweetalert2';

export default async function register(datos){
        
        const response = await fetch('/api/register', {
            method: "POST",
            headers: { "Content-type": 'application/json' },
            body: JSON.stringify(datos)
        })
        console.log(response)
    if (response.ok) {
      window.location.href = '/validar';
    } else if (response == "107"){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Esos datos ya existen",
        footer: '<Link href="/auth/login">¿Ya tienes una cuenta? Inicia sesión</Link>'
      });
    }
  };

  export const handleSubmit = async (s) => {
    s.preventDefault();
  }

  export const metadata = {
    title: "SENA Learn | Autenticación",
    description: "Inicia sesión o regístrate para acceder a una gran variedad de cursos totalmente gratis.",
  };