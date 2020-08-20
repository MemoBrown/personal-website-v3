// --------------------------------------------------------------validacion de formulario
$(document).ready(function(){

    $('#btnSend').click(function(){
  
        let errores = '';
  
        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p style="color: #F14B4B">⦿ Escriba un nombre</p>';
            $('#names').css("border-color", "#F14B4B");
        } else{
            $('#names').css("border-color", "#FFD524");
        }
   
        //Validando telefono=============================
        if( $('#phone').val() == '' ){
          errores += '<p style="color: #F14B4B">⦿ Ingrese un telefono</p>';
          $('#phone').css("border-color", "#f14b4b")
        } else{
          $('#phone').css("border-color", "#FFD524")
        }
  
        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p style="color: #F14B4B">⦿ Ingrese un correo</p>';
            $('#email').css("border-color", "#F14B4B")
        } else{
            $('#email').css("border-color", "#FFD524")
        }
        
        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p style="color: #F14B4B">⦿ Escriba un mensaje</p>';
            $('#mensaje').css("border-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-color", "#FFD524")
        }
  
        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                html:
                '<div>'+
                '<h3>Errores encontrados</h3>'+
                errores+
                '</div>',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }

              })
            // $('body').append(mensajeModal);
        }
    });
  
  });
  