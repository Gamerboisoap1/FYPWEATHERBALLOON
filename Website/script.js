// Initialize particles.js with cloud images as particles
particlesJS("particle-background", {
    particles: {
        number: {
            value: 15, // Number of cloud particles
            density: {
                enable: true,
                value_area: 800 // Area covered by the particles
            }
        },
        shape: {
            type: "image", // Use an image for the particle shape
            image: {
                src: "./cloud.png", // Cloud image URL (replace this with your cloud image URL)
                width: 200,  // Width of the cloud image
                height: 200  // Height of the cloud image
            }
        },
        color: {
            value: "#ffffff" // Clouds should be white
        },
        opacity: {
            value: 0.85, // Semi-transparent for a soft look
            random: true, // Opacity varies for texture
            anim: {
                enable: true,
                speed: 0.2, // Fading speed
                opacity_min: 0.6, // Minimum opacity for edge particles
                sync: false
            }
        },
        size: {
            value: 150, // Size of cloud particles
            random: true, // Random sizes for better texture
            anim: {
                enable: true,
                speed: 2, // Cloud particles will grow/shrink slightly
                size_min: 100, // Minimum size for cloud particles
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 0.5, // Slow movement to mimic drifting clouds
            direction: "right", // Clouds drift to the right
            random: false, // No random direction
            straight: true, // Smooth linear motion
            out_mode: "out", // Clouds disappear when they go off-screen
            bounce: false // No bouncing effect
        }
    },
    interactivity: {
        detect_on: "canvas", // Interaction based on canvas events
        events: {
            onhover: { enable: false }, // No hover effect
            onclick: { enable: false } // No click effect
        }
    },
    retina_detect: true // Make sure it looks good on retina screens
});
// Initialize particles.js
particlesJS("particle-background", {
    particles: {
        number: { value: 15, density: { enable: true, value_area: 800 } },
        shape: { type: "image", image: { src: "./cloud.png", width: 200, height: 200 } },
        opacity: { value: 0.85, random: true, anim: { enable: true, speed: 0.2, opacity_min: 0.6, sync: false } },
        size: { value: 150, random: true, anim: { enable: true, speed: 2, size_min: 100, sync: false } },
        move: { enable: true, speed: 0.5, direction: "right", random: false, straight: true, out_mode: "out" }
    },
    interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false } } },
    retina_detect: true
});

// Toggle Chatbot Visibility
function toggleChatbot() {
    const chatbot = document.getElementById("chatbot-ui");
    chatbot.style.display = chatbot.style.display === "none" || !chatbot.style.display ? "flex" : "none";
}

// Handle Chatbot Messages
function sendMessage() {
    const input = document.getElementById("chatbot-input");
    const messages = document.querySelector(".chatbot-messages");
    if (input.value.trim()) {
        const userMessage = `<div class="user-message">${input.value}</div>`;
        messages.innerHTML += userMessage;
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
}

// Navigate to Analytics Page
function navigateToAnalytics() {
    window.location.href = "analytics.html";
}
 // Toggle the Analytics Sidebar
        function toggleAnalyticsSidebar() {
            const sidebar = document.getElementById("analytics-sidebar");
            if (sidebar.style.right === "0px") {
                sidebar.style.right = "-100%";
            } else {
                sidebar.style.right = "0";
            }
        }

        // Handle Chatbot Visibility
        function toggleChatbot() {
            const chatbot = document.getElementById("chatbot-ui");
            chatbot.style.display = chatbot.style.display === "none" || !chatbot.style.display ? "flex" : "none";
        }

        // Handle Chatbot Messages
        function sendMessage() {
            const input = document.getElementById("chatbot-input");
            const messages = document.querySelector(".chatbot-messages");
            if (input.value.trim()) {
                const userMessage = `<div class="user-message">${input.value}</div>`;
                messages.innerHTML += userMessage;
                input.value = "";
                messages.scrollTop = messages.scrollHeight;
            }
        }

        // Navigate to Analytics Page
        function navigateToAnalytics() {
            window.location.href = "analytics.html";
        }