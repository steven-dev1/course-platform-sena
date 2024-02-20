"use client"
import Swal from 'sweetalert2'
// import Footer from "../miscursos/footer"
// import Header from "../../components/Header"
import React, { useState } from 'react';

export default function VerificationPage() {
  const [codigo, setCodigo] = useState('');
  const [codigoValido, setCodigoValido] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const ValorCodigo = (event) => {
    setCodigo(event.target.value);
  };

  const VerificarCodigo = () => {
    // Enviar el código y el ID de usuario al servidor para verificarlo
    fetch('http://127.0.0.1:3000/api/emailvalidate ', {
      method: 'POST',
      body: JSON.stringify({ Id_User:32, codigo }), 
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        if (data.result == 200) {
          setCodigoValido(true);
          setMensaje('Código verificado correctamente. Registrado pa');
          Swal.fire({
            title: "validacion completa",
            text: "Se ha validado correctamente tu email!",
            icon: "success"
          });
        } else if (data.result == 106) {
          setCodigoValido(false);
          setMensaje('El código ha expirado perro hpt. Por favor, solicita uno nuevo.');
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El codigo ha expirado pa, solicita uno nuevo !",
            footer: '<a href="#">como?</a>'
          });
        } else {
          setCodigoValido(false);
          Swal.fire({
            icon: "error",
            title: "Codigo invalido",
            text: "Error codigo invalido, porfavor verifique los datos y vuelva a intentar",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      })
      .catch((error) => {
        console.error('Error al verificar el código', error);
        setMensaje('Error al verificar el código. Por favor, intenta nuevamente.');
      });
  };

  return (
    <div  className='h-screen   bg-white'>
      <section className="w-screen">
          <div className="flex flex-col shadow-xl mt-20 rounded-xl bg-[#F5F5F5] gap-4 m-auto  h-[60vh] items-center justify-center w-[40%]  text-black">
          
              <div className="flex gap-10 w-[80%]  items-center flex-col">
              <h1 className="font-black text-2xl  ">Verificación de código</h1>
         
                  
                 
                  <input name="n"  placeholder="Ingrese el codigo de verificacion"  className="p-4 rounded-xl w-[100%]"  type="text" value={codigo} onChange={ValorCodigo} />
                
                <button className="p-4 w-[40%] text-white font-bold rounded-md bg-[#00324D]" onClick={VerificarCodigo}>Activar cuenta</button>
                <p className="text-[0.7rem]">Verifique su direccion de correo electronico para poder continuar con la  activacion de su cuenta</p>
                {mensaje && <p>{mensaje}</p>}
              </div>
          </div>
      </section>
    </div>
  );
}