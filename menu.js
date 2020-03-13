// const tabla=document.querySelector('.popupmenu')
// const body=document.querySelector('body')
// const responsive=window.matchMedia('screen and (max-width:959px)')
// var icono = document.getElementById('icon-button')
//
//
// responsive.addListener(validation)
//
// function validation(event){
//   if (event.matches){
//       icono.addEventListener('click', mostrar)
//           }
//   }
//
//
//         function mostrar () {
//           if (tabla.classList.contains('is-active')) {
//             tabla.classList.remove('is-active')
//             body.classList.remove('is-active')
//               document.querySelector('.men').classList.remove('is-active')
//                 document.querySelector('.men2').classList.remove('is-active')
//
//           }else {
//             tabla.classList.add('is-active')
//             body.classList.add('is-active')
//             document.querySelector('.men').classList.add('is-active')
//               document.querySelector('.men2').classList.add('is-active')
//           }
//
//         }

const tabla=document.querySelector('.popupmenu')
const body=document.querySelector('body')
const responsive=window.matchMedia('screen and (max-width:959px)')
var icono = document.getElementById('icon-button')


icono.addEventListener('click', mostrar)




        function mostrar () {
          if (tabla.classList.contains('is-active')) {
            tabla.classList.remove('is-active')
            body.classList.remove('is-active')
              document.querySelector('.men').classList.remove('is-active')
                document.querySelector('.men2').classList.remove('is-active')

          }else {
            tabla.classList.add('is-active')
            body.classList.add('is-active')
            document.querySelector('.men').classList.add('is-active')
              document.querySelector('.men2').classList.add('is-active')
          }

        }
