function toggleSidebar(){
    const menuBtn = document.querySelector('.menu_btn');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="material-symbols-outlined">close</i>';
        body.style.overflow = 'hidden';
    } else {
        menuBtn.innerHTML = '<i class="material-symbols-outlined">menu</i>';
        body.style.overflow = 'unset';
    }
}