(function(){
    const menuIcon = document.getElementById('menuToggled')
    const backBtn = document.getElementById('backButton')
    const sidebarDiv = document.getElementById('sidebar')
    function openSidebar (){
        sidebarDiv.classList.add('visible')
        document.body.style.overflow = 'hidden';
    }
    function closeSidebar(){
        sidebarDiv.classList.remove('visible')
        document.body.removeAttribute('style');;
    }
    menuIcon.addEventListener('click', openSidebar)
    backBtn.addEventListener('click',closeSidebar)
    

})()