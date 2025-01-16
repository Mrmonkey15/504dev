(function () {
    // Sidebar functionality
    const menuIcon = document.getElementById('menuToggled');
    const backBtn = document.getElementById('backButton');
    const sidebarDiv = document.getElementById('sidebar');

    function openSidebar() {
        sidebarDiv.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebarDiv.classList.remove('visible');
        document.body.removeAttribute('style');
    }

    menuIcon.addEventListener('click', openSidebar);
    backBtn.addEventListener('click', closeSidebar);

    // Processos functionalidade
    
    const process = document.querySelector('.process');
    const content1 = document.getElementById('contentStep1');
    const content2 = document.getElementById('contentStep2');
    const content3 = document.getElementById('contentStep3');
    const content4 = document.getElementById('contentStep4');
    const content5 = document.getElementById('contentStep5');
    const row1 = document.getElementById('stepRow1');
    const row2 = document.getElementById('stepRow2');
    const row3 = document.getElementById('stepRow3');
    const row4 = document.getElementById('stepRow4');
    const row5 = document.getElementById('stepRow5');
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const icon4 = document.getElementById('icon4');
    const icon5 = document.getElementById('icon5');
    const title1 = document.getElementById('title1');
    const title2 = document.getElementById('title2');
    const title3 = document.getElementById('title3');
    const title4 = document.getElementById('title4');
    const title5 = document.getElementById('title5');
    process.addEventListener('click', (e) => {
        const target = e.target.closest('.stepRow'); 
        if (!target) return; 
        const stepId = target.id;
        const contentId = target.nextElementSibling;
        content1.style.display = 'none';
        title1.style.display = "inline";
        content2.style.display = 'none';
        title2.style.display = "inline";
        content3.style.display = 'none';
        title3.style.display = "inline";
        content4.style.display = 'none';
        title4.style.display = "inline";
        content5.style.display = 'none';
        title5.style.display = "inline";
        row1.style.width = '60%';
        row2.style.width = '60%';
        row3.style.width = '60%';
        row4.style.width = '60%';
        row5.style.width = '60%';
        switch (stepId) {
            case 'stepRow1':
                content1.style.display = 'block';
                row1.style.width = '100%';
                icon1.style.display = "none";
                title1.style.display = "none";
                setTimeout(() => {
                    closeLastStep(content1, title1, row1, icon1);
                }, 4000);
                break;
            case 'stepRow2':
                content2.style.display = 'block';
                row2.style.width = '100%';
                icon2.style.display = "none";
                title2.style.display = "none";
                setTimeout(() => {
                    closeLastStep(content2, title2, row2, icon2);
                }, 4000);
                break;
            case 'stepRow3':
                content3.style.display = 'block';
                row3.style.width = '100%';
                icon3.style.display = "none";
                title3.style.display = "none";
                setTimeout(() => {
                    closeLastStep(content3, title3, row3, icon3);
                }, 4000);
                break;
            case 'stepRow4':
                content4.style.display = 'block';
                row4.style.width = '100%';
                icon4.style.display = "none";
                title4.style.display = "none";
                setTimeout(() => {
                    closeLastStep(content4, title4, row4, icon4);
                }, 4000);
                break;
            case 'stepRow5':
                content5.style.display = 'block';
                row5.style.width = '100%';
                icon5.style.display = "none";
                title5.style.display = "none";
                setTimeout(() => {
                    closeLastStep(content5, title5, row5, icon5);
                }, 3000);
                break;
            default:
                break;
        }
    });

    function closeLastStep(content, title, row, icon) {
        content.style.display = 'none';
        title.style.display = "inline";
        row.style.width = '60%';
        icon.style.display = "inline";
    }


// Seleciona todas as linhas (etapas)
const steps = document.querySelectorAll('.stepRow');
const animationClass = 'animate-arrow';

// Variável para controlar o índice atual
let currentStep = 0;

// Função para atualizar as animações
function updateAnimation() {
    // Remove a animação do elemento atual
    steps[currentStep].querySelector('.rowContent').classList.remove(animationClass);

    // Atualiza o índice para o próximo elemento
    currentStep++;

    if (currentStep < steps.length) {
        // Adiciona a animação ao próximo elemento
        steps[currentStep].querySelector('.rowContent').classList.add(animationClass);
    } else {
        // Quando chegar ao final, aguarda 30 segundos antes de retornar ao primeiro
        setTimeout(() => {
            currentStep = 0; // Reseta o índice para o primeiro
            steps[currentStep].querySelector('.rowContent').classList.add(animationClass);
        }, 3000); // 30 segundos
    }
}

// Adiciona eventos de clique a cada etapa
steps.forEach((step, index) => {
    step.addEventListener('click', () => {
        if (index === currentStep) {
            updateAnimation(); // Atualiza a animação somente no elemento atual
        }
    });
});


})();
