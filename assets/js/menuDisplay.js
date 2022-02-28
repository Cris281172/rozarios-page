const listButton = document.querySelectorAll('.list-button');


listButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.lastChild)
        button.classList.toggle('active');
        button.lastChild.classList.toggle('active');
        button.nextElementSibling.classList.toggle("active");
    })
})