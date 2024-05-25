// Puedes agregar JavaScript aquí si es necesario
<li><a href="javascript:void(0)" onclick="openModal('loginModal')">Inicio Sesión</a></li>

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    const modals = ['loginModal', 'registerModal', 'forgotPasswordModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}
