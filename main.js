// document.body.addEventListener('mousemove',
// (event)=>{
//     const {clientX, clientY} = event;

//     gsap.set('.cursor', {
//         x: clientX,
//         y: clientY
//     })

//     gsap.to('.shape', {
//         x: clientX,
//         y: clientY,
//         stagger: -0.1
//     })
// });


document.getElementById('botonFlotante').addEventListener('click', function() {
    document.getElementById('ventanaEmergente').style.display = 'block';
});

document.getElementById('cerrarVentana').addEventListener('click', function() {
    document.getElementById('ventanaEmergente').style.display = 'none';
});


