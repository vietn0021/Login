document.addEventListener('DOMContentLoaded', () => {
    const openLoginBtn = document.getElementById('openLoginBtn');
    const loginBox = document.getElementById('loginBox');
    const closeLoginBtn = document.getElementById('closeLoginBtn');

    openLoginBtn.addEventListener('click', () => {
        loginBox.style.display = 'block';
        openLoginBtn.style.display = 'none'; 
    });

    
    closeLoginBtn.addEventListener('click', () => {
        loginBox.style.display = 'none';
        openLoginBtn.style.display = 'block'; 
    });


    window.addEventListener('click', (event) => {
        if (!loginBox.contains(event.target) && event.target !== openLoginBtn) {
            loginBox.style.display = 'none';
            openLoginBtn.style.display = 'block'; 
        }
    });
});
