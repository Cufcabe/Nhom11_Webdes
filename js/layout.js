//Mobile navbar script
document.getElementById('mobile-menu-toggle').onclick = function() {
    const mobiledropdown = document.getElementById('mobile-menu');
    mobiledropdown.style.display = mobiledropdown.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('mobile-menu-can-dropdown').onclick = function() {
    const mobiledropdownMenu = document.getElementById('mobile-dropdown-menu');
    mobiledropdownMenu.style.display = mobiledropdownMenu.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('mobile-menu-can-dropdown-2').onclick = function() {
    const mobiledropdownMenu = document.getElementById('mobile-dropdown-menu-2');
    mobiledropdownMenu.style.display = mobiledropdownMenu.style.display === 'block' ? 'none' : 'block';
}


//Standard navbar script
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close dropdown if clicking outside
    window.addEventListener('click', (event) => {
        dropdownToggles.forEach(toggle => {
            const dropdownMenu = toggle.nextElementSibling;
            if (!toggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    });
});


//Search bar script
function closeSearchbox() {
    document.getElementById("search-box").style.display = "none";
    document.getElementById("searchbox-background").style.display = "none";
}
function openSearchbox() {
document.getElementById("search-box").style.display = "block";
document.getElementById("searchbox-background").style.display = "block";
}

//Contact form
function openContactForm() {
    document.getElementById("contact-form-container").style.display = "block";
}

function closeContactForm() {
    document.getElementById("contact-form-container").style.display = "none";
}