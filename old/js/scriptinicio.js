document.addEventListener("DOMContentLoaded", () => {
    const btnIngresar = document.querySelector(".btn-ingresar");
    
    if (btnIngresar) {
        btnIngresar.addEventListener("click", () => {
            window.location.href = "/productos"; // Redirige a la página de productos
        });
    }
});