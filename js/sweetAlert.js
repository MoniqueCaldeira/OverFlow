function winner(atualNivel, poxNivel) {

   Swal.fire({
      title: `Parabéns!! \n Pronto para o próximo Nível?`,
      showDenyButton: true,
      confirmButtonText: 'Proximo Nível',
      denyButtonText: 'Repetir Nível',
   }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         window.location.href = poxNivel;
      } else if (result.isDenied) {
         window.location.href = atualNivel;
      }
   })
}

function loser(atualNivel) {

   Swal.fire({
      title: `Essa não é a Bola Correta \n O Nível será reiciado!`,
      confirmButtonText: 'Reiniciar Nível',
   }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         window.location.href = atualNivel;
      }
   })
}