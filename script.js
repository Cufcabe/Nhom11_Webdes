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

function showContent(sectionId) {
    // Ẩn tất cả nội dung
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Hiện nội dung mới
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

function toggleAnswer(answerId, questionElement) {
    const answer = document.getElementById(answerId);
    const arrow = questionElement.querySelector('.arrow');
    const video = answer.querySelector('video');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.classList.remove('rotated');
        video.style.display = "none"; // Ẩn video khi câu trả lời bị ẩn
    } else {
        answer.style.display = "block";
        arrow.classList.add('rotated');
        video.style.display = "block"; // Hiện video khi câu trả lời được hiển thị
    }
}

// Toggle chatbox visibility
function toggleChatbox() {
    const chatbox = document.getElementById("chatbox-container");
    const openChatButton = document.getElementById("open-chatbox-btn");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
        chatbox.style.display = "flex";
        openChatButton.style.display = "none";
    } else {
        chatbox.style.display = "none";
        openChatButton.style.display = "block";
    }
}

// Send message in chatbox
function sendMessage() {
    const input = document.getElementById("chatbox-input");
    const messages = document.getElementById("chatbox-messages");

    if (input.value.trim() !== "") {
        const userMessage = document.createElement("div");
        userMessage.className = "chatbox-message user-message";
        userMessage.textContent = input.value;
        messages.appendChild(userMessage);

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.className = "chatbox-message bot-message";
            botMessage.textContent = "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ trả lời sớm nhất.";
            messages.appendChild(botMessage);
            messages.scrollTop = messages.scrollHeight;
        }, 1000);

        // Clear the input
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
}
