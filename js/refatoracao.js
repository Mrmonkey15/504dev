(function () {
    // Processos funcionalidade
    const process = document.querySelector('.process');
    const contents = [
        document.getElementById('contentStep1'),
        document.getElementById('contentStep2'),
        document.getElementById('contentStep3'),
        document.getElementById('contentStep4'),
        document.getElementById('contentStep5'),
    ];
    const rows = [
        document.getElementById('stepRow1'),
        document.getElementById('stepRow2'),
        document.getElementById('stepRow3'),
        document.getElementById('stepRow4'),
        document.getElementById('stepRow5'),
    ];
    const icons = [
        document.getElementById('icon1'),
        document.getElementById('icon2'),
        document.getElementById('icon3'),
        document.getElementById('icon4'),
        document.getElementById('icon5'),
    ];
    const titles = [
        document.getElementById('title1'),
        document.getElementById('title2'),
        document.getElementById('title3'),
        document.getElementById('title4'),
        document.getElementById('title5'),
    ];

    process.addEventListener('click', (e) => {
        const target = e.target.closest('.stepRow');
        if (!target) return;

        const stepId = target.id;
        const stepIndex = parseInt(stepId.replace('stepRow', '')) - 1; // Determina o índice com base no ID

        // Oculta todos os conteúdos e reseta os estilos
        contents.forEach((content, index) => {
            content.style.display = 'none';
            titles[index].style.display = "inline";
            rows[index].style.width = '60%';
            icons[index].style.display = "inline";
        });

        // Mostra o conteúdo do passo atual
        contents[stepIndex].style.display = 'block';
        rows[stepIndex].style.width = '100%';
        icons[stepIndex].style.display = "none";
        titles[stepIndex].style.display = "none";

        setTimeout(() => {
            closeLastStep(contents[stepIndex], titles[stepIndex], rows[stepIndex], icons[stepIndex]);
        }, 4000);
    });

    function closeLastStep(content, title, row, icon) {
        content.style.display = 'none';
        title.style.display = "inline";
        row.style.width = '60%';
        icon.style.display = "inline";
    }
})();
