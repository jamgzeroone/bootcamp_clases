const eventForm = document.getElementById('evento')
let usertest = 'admin'
let passtest = '12345'
eventForm.addEventListener('click', (e) => {
    e.preventDefault();
    let userof = document.getElementById('usuForm').value
    let password = document.getElementById('contraForm').value

    if (userof == usertest && password == passtest) {
        alert('Exitoso!')
    } else {
        alert('Usuario o password erróneos !!!')
    }
})