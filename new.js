 // Add scroll event listener
 window.addEventListener('scroll', function() {
    // Get all anchor links from the URL
    const allAnchors = ['#mproject', '#miproject','#about', '#contact','#view',];
    
    allAnchors.forEach(anchor => {
        // Check if the hash in the URL matches the anchor and the user has scrolled
        if (window.location.hash === anchor && window.scrollY > 0) {
            // Remove the hash from the URL without reloading the page
            history.replaceState(null, null, ' ');
        }
    });
});

document.querySelectorAll('header ul li a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
        link.classList.remove('blue');
    });

    link.addEventListener('mouseout', function() {
        link.classList.add('blue');
    });
});
// Select all input containers
document.querySelectorAll('.input-container').forEach(function(container) {
    const input = container.querySelector('input');
    const text = container.querySelector('textarea'); // Select the textarea inside the container

    // Add focus event to the input
    if (input) {
        input.addEventListener('focus', function() {
            container.classList.add('blue'); // Add the 'blue' class on focus
        });

        input.addEventListener('blur', function() {
            // Remove the 'blue' class if the input is empty when it loses focus
                container.classList.remove('blue');
        });
    }

    // Add focus event to the textarea
    if (text) {
        text.addEventListener('focus', function() {
            container.classList.add('blue'); // Add the 'blue' class on focus
        });

        text.addEventListener('blur', function() {
            // Remove the 'blue' class if the textarea is empty when it loses focus
                container.classList.remove('blue');
        });
    }
});


// Select all buttons in both sections
const buttons = document.querySelectorAll('.head .about button, .content .about button, .content2 .about2 button,#contactForm .conbut button');

buttons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        button.classList.remove('remove-hover'); // Trigger shine in effect on hover
    });

    button.addEventListener('mouseout', function() {
        button.classList.add('remove-hover'); // Trigger shine back effect on mouse leave
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const mainPage = document.querySelector('.main-page');
    const contentElements = document.querySelectorAll('nav, .head, .social, .works');
    
    // Hide the content initially
    contentElements.forEach(element => {
        element.classList.add('hidden');
    });

    // Delay the content visibility after the animation
    setTimeout(() => {
        contentElements.forEach(element => {
            element.classList.remove('hidden');
            element.classList.add('visible');
        });
    }, 1699); // 2 seconds delay for content
});


function openBothSections() {
    const mainSection = document.querySelector('.main');
    const aboutSection = document.querySelector('.aboutsec');
    const contactSection = document.querySelector('.contsec');
    
    mainSection.classList.add('hide');
    aboutSection.classList.add('show'); // Show the about section
    contactSection.classList.add('show'); // Show the contact section
}
function closeBothSections() {
    const mainSection = document.querySelector('.main');
    const aboutSection = document.querySelector('.aboutsec');
    const contactSection = document.querySelector('.contsec');
    
    mainSection.classList.remove('hide');
    aboutSection.classList.remove('show');
    contactSection.classList.remove('show');
}

// Add the event listener to the cross icon
document.querySelector('.cross').addEventListener('click', closeBothSections);


function SendMail(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var emailId = document.getElementById("email_id").value;
    var message = document.getElementById("message").value;

    // Regular expression to validate Gmail addresses
    var gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Check if all fields are filled
//    if (!fullName || !emailId || !message) {
//        document.getElementById("formMessage").textContent = "Please fill in all fields.";
//        document.getElementById("formMessage").style.color = "red"; // Change text color to red
//        return; // Exit the function if any field is empty
//    }

    // Validate the email
    if (!gmailPattern.test(emailId)) {
        document.getElementById("formMessage").textContent = "Please enter a valid Gmail address.";
        document.getElementById("formMessage").style.color = "red"; // Change text color to red
        return; // Exit the function if email is invalid
    }

    var params = {
        from_name: fullName,
        email_id: emailId,
        message: message
    };
        // Parameters for the auto-reply email
    // Send the email using EmailJS
    emailjs.send("service_63pqd6d", "template_cibgw5o", params).then(function (res) {
        // Update the message container with a success message
        document.getElementById("formMessage").textContent = "Your message has been sent successfully!";
        document.getElementById("formMessage").style.color = "green"; // Change text color to green

        // Clear the form fields after successful submission
        document.getElementById("contactForm").reset(); // Resets all the form fields
    }).catch(function (error) {
        // Update the message container with an error message
        document.getElementById("formMessage").textContent = "There was an error sending your message. Please try again.";
        document.getElementById("formMessage").style.color = "red"; // Change text color to red
    });
}

// OPEN CLOSE of Certificate
function opencert() {
    const mainSection = document.querySelector('.main');
    const certSection = document.querySelector('.certsec');
    
    mainSection.classList.add('hide');
    certSection.classList.add('show'); // Show the certificate section
}
function closecert() {
    const mainSection = document.querySelector('.main');
    const certSection = document.querySelector('.certsec');
    
    certSection.classList.remove('show');
    mainSection.classList.remove('hide');
    
}

// Add the event listener to the cross icon
document.querySelector('.crosstwo').addEventListener('click', closecert);

function openexpe() {
    const mainSection = document.querySelector('.main');
    const expeSection = document.querySelector('.expesec');
    
    mainSection.classList.add('hide');
    expeSection.classList.add('show'); // Show the certificate section
}
function closeexpe() {
    const mainSection = document.querySelector('.main');
    const expeSection = document.querySelector('.expesec');
    
    expeSection.classList.remove('show');
    mainSection.classList.remove('hide');
    
}

// Add the event listener to the cross icon
document.querySelector('.crossthree').addEventListener('click', closeexpe);



const cardContainer = document.querySelector('.cardiv');
const clone = cardContainer.innerHTML;

// Append a clone of the cards to enable seamless looping
cardContainer.innerHTML += clone;

// Enable horizontal scrolling with touchpad
const container = document.querySelector('.container');

container.addEventListener('wheel', (event) => {
    // Check for horizontal scrolling only
    if (event.deltaX !== 0) {
        event.preventDefault();
        container.scrollLeft += event.deltaX; // Moves the cards horizontally based on horizontal scroll
    }
});

// Continuously loop from first to last card and back
container.addEventListener('scroll', () => {
    const scrollLeft = container.scrollLeft;
    const scrollWidth = cardContainer.scrollWidth / 2; // Half the scroll width (one set of cards)

    if (scrollLeft >= scrollWidth) {
        container.scrollLeft = scrollLeft - scrollWidth; // Seamless loop from end back to the start
    } else if (scrollLeft <= 0) {
        container.scrollLeft = scrollWidth + scrollLeft; // Seamless loop from start back to the end
    }
});

// Auto-scroll continuously from left to right
let autoScroll;

const startAutoScroll = () => {
    autoScroll = setInterval(() => {
        container.scrollLeft += 1; // Adjust speed by changing the increment value
    }, 10); // Adjust interval for smooth scrolling speed
};

const stopAutoScroll = () => clearInterval(autoScroll);

// Start auto-scrolling
startAutoScroll();

// Pause scrolling on hover
container.addEventListener('mouseenter', stopAutoScroll);
container.addEventListener('mouseleave', startAutoScroll);

const socialLinks = document.querySelectorAll('.social a');
const socialText = document.querySelector('.socialtext');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        socialText.classList.remove('show-linkedin', 'show-github', 'show-instagram', 'show-twitter');
        if (link.classList.contains('linkedin')) {
            socialText.classList.add('show-linkedin');
        } else if (link.classList.contains('github')) {
            socialText.classList.add('show-github');
        } else if (link.classList.contains('instagram')) {
            socialText.classList.add('show-instagram');
        } else if (link.classList.contains('twitter')) {
            socialText.classList.add('show-twitter');
        }
    });

    link.addEventListener('mouseout', () => {
        socialText.classList.remove('show-linkedin', 'show-github', 'show-instagram', 'show-twitter');
    });
});



function updateGallery() {
    const certmain = document.querySelector('.certmain');
    const items = certmain.querySelectorAll('div');
    const totalItems = items.length;

    // Reset all styles
    items.forEach(item => {
        item.classList.remove('large');
        item.style.transform = '';
    });

    // Define the middle index (center element)
    const middleIndex = Math.floor(totalItems / 2);

    // Apply styles based on position relative to the center
    items.forEach((item, index) => {
        if (index === middleIndex) {
            item.classList.add('large'); // Highlight the large item
            item.style.transform = 'translateX(0)'; // Center it
        } else if (index < middleIndex) {
            const distance = middleIndex - index;
            item.style.transform = `translateX(${-120 * distance}%) scale(0.8)`; // Move left
        } else {
            const distance = index - middleIndex;
            item.style.transform = `translateX(${120 * distance}%) scale(0.8)`; // Move right
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateGallery(); // Initialize on load
});

function moveLeft() {
    const certmain = document.querySelector('.certmain');
    const items = certmain.querySelectorAll('div');
    certmain.insertBefore(items[items.length - 1], items[0]);
    updateGallery();
    
}

function moveRight() {
    const certmain = document.querySelector('.certmain');
    const items = certmain.querySelectorAll('div');
    certmain.appendChild(items[0]);
    updateGallery();
}

// Show button only from the 3rd slide onward
// Show button only after scrolling past the second half of the page
window.addEventListener('scroll', function () {
    const button = document.getElementById('backToTopButton');
    const halfwayPoint = document.body.scrollHeight / 2;

    if (window.scrollY >= halfwayPoint) {
        button.classList.add('showing');
    } else {
        button.classList.remove('showing');
    }
});

// Scroll to the top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling effect
    });
}
