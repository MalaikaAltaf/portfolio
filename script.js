document.querySelectorAll('.tab-links').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelector('.active-link').classList.remove('active-link');
        this.classList.add('active-link');

        document.querySelector('.active-tab').classList.remove('active-tab');
        document.getElementById(this.textContent.trim()).classList.add('active-tab');
    });
});   //This script makes sure that when you click on a tab, it highlights that tab and shows the corresponding content while hiding the other sections.
