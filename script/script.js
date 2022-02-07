const rightMenu = document.querySelector('#toggle');
    rightMenu.addEventListener('click', menuToggle);

    function menuToggle(){
        const nav = document.querySelector('.burger');
        nav.classList.toggle('active');
        rightMenu.classList.toggle('active');
    }