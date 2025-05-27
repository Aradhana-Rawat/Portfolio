// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
<<<<<<< HEAD
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
=======

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
>>>>>>> e91c9ae6ee8994d8718368e004d756e0f8c900f7
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
<<<<<<< HEAD
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on nav links
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Smooth scrolling for anchor links
    navLinksItems.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
=======
>>>>>>> e91c9ae6ee8994d8718368e004d756e0f8c900f7
        }
    });
});

// Testimonials Data
const testimonials = [
    {
        text: "Before joining Ma'am's classes, organic chemistry was a nightmare for me. Her unique way of explaining mechanisms through real-life examples helped me score 98% in my board exams. Now I'm pursuing B.Tech in Chemical Engineering!",
        name: "Priya Sharma",
        detail: "Grade 12 Chemistry | Now at IIT Roorkee"
    },
    {
        text: "I struggled with trigonometry and was scoring barely 60%. Ma'am's visual approach and step-by-step problem solving techniques helped me achieve 92% in my boards. Her weekend doubt-clearing sessions were particularly helpful.",
        name: "Arjun Patel",
        detail: "Grade 10 Mathematics | Distinction Holder"
    },
    {
        text: "Coming from a Hindi medium background, I found A-level Chemistry intimidating. Ma'am not only helped me understand complex concepts but also improved my technical vocabulary. Secured an A* and got admission in my dream university!",
        name: "Riya Gupta",
        detail: "A-level Chemistry | University of Delhi"
    },
    {
        text: "Science was just another subject until Ma'am showed us its practical applications. Her lab demonstrations and real-world examples made concepts crystal clear. Scored 95% in my boards and won the district science competition!",
        name: "Aditya Singh",
        detail: "Grade 10 Science | District Science Olympiad Winner"
    },
    {
        text: "The way Ma'am explains redox reactions and electrochemistry is exceptional. Her notes and practice materials helped me crack JEE Mains with 99.2 percentile in Chemistry. Forever grateful for her guidance!",
        name: "Neha Verma",
        detail: "Grade 11-12 Chemistry | JEE Mains Qualified"
    },
    {
        text: "I was terrified of Mathematics before joining O-levels. Ma'am's systematic approach and regular mock tests boosted my confidence. Her special focus on common mistakes helped me avoid errors in the final exam.",
        name: "Rahul Kumar",
        detail: "O-level Mathematics | A* Grade"
    },
    {
        text: "Organic Chemistry mechanisms seemed impossible until Ma'am introduced her famous 'story-telling' method. Her emphasis on understanding rather than memorizing helped me top the ISC board in my school!",
        name: "Ananya Mishra",
        detail: "Grade 12 Chemistry | School Topper"
    },
    {
        text: "What sets Ma'am apart is her problem-solving approach. She taught us how to think analytically. Her special worksheets for competitive exams helped me crack NEET in my first attempt!",
        name: "Rohan Joshi",
        detail: "Grade 11-12 Chemistry | NEET Qualified"
    },
    {
        text: "Ma'am's method of teaching coordinate geometry through real-world applications made it my favorite chapter. Her extra practice sessions during weekends made all the difference in my final score.",
        name: "Ishaan Mehta",
        detail: "Grade 10 Mathematics | 96% in Boards"
    },
    {
        text: "Being a working professional, I needed flexible timing for my A-level preparation. Ma'am's online sessions and recorded lectures were a blessing. Her exam-oriented tips were invaluable!",
        name: "Kavya Reddy",
        detail: "A-level Chemistry | Distance Learning Student"
    }
];

// Testimonial Slider
let currentTestimonial = 0;

function setupTestimonials() {
    const slider = document.querySelector('.testimonials-slider');
    const dotsContainer = document.querySelector('.testimonial-dots');
    
    // Create testimonial cards
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
        card.innerHTML = `
            <p>"${testimonial.text}"</p>
            <h4>${testimonial.name}</h4>
            <p class="student-detail">${testimonial.detail}</p>
        `;
        slider.appendChild(card);

        // Create dot
        const dot = document.createElement('button');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
        dot.addEventListener('click', () => goToTestimonial(index));
        dotsContainer.appendChild(dot);
    });

    // Setup navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonials();
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonials();
    });

    // Auto-advance testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonials();
    }, 5000);
}

function updateTestimonials() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentTestimonial);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonials();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupTestimonials();

    const form = document.getElementById('sessionForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('student-name').value;
        const grade = document.getElementById('grade').value;
        const subject = document.getElementById('subject').value;
<<<<<<< HEAD
        const sessionType = document.getElementById('session-type').value;
=======
>>>>>>> e91c9ae6ee8994d8718368e004d756e0f8c900f7
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('session-date').value;

        // Format email content
        const emailContent = `
            New Trial Session Request

            Student Details:
            Name: ${name}
            Grade: ${grade}
            Subject: ${subject}
<<<<<<< HEAD
            Session Type: ${sessionType}
=======
>>>>>>> e91c9ae6ee8994d8718368e004d756e0f8c900f7
            Phone: ${phone}
            Email: ${email}
            Preferred Date: ${date}
        `.trim();

        try {
            const response = await fetch('https://api.resend.com/v1/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer re_iLMRgjLq_PPDHrTbsGY7fJruDWkPpW1T4',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    from: 'Aradhana Rawat <onboarding@resend.dev>',
                    to: ['aradhana8439@gmail.com'],
                    subject: `New Trial Session Request - ${name}`,
                    text: emailContent,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                            <h2 style="color: #1a237e;">New Trial Session Request</h2>
                            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                                <h3 style="color: #009688;">Student Details:</h3>
                                <p><strong>Name:</strong> ${name}</p>
                                <p><strong>Grade:</strong> ${grade}</p>
                                <p><strong>Subject:</strong> ${subject}</p>
<<<<<<< HEAD
                                <p><strong>Session Type:</strong> ${sessionType}</p>
=======
>>>>>>> e91c9ae6ee8994d8718368e004d756e0f8c900f7
                                <p><strong>Phone:</strong> ${phone}</p>
                                <p><strong>Email:</strong> ${email}</p>
                                <p><strong>Preferred Date:</strong> ${date}</p>
                            </div>
                        </div>
                    `
                })
            });

            const data = await response.json();

            if (response.ok) {
                form.reset();
                alert('Thank you for your interest! Your session request has been sent successfully. I will contact you soon to confirm the details.');
            } else {
                console.error('Error details:', data);
                throw new Error(data.message || 'Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your request. Please try contacting me directly via email at aradhana8439@gmail.com');
            
            // Fallback to mailto link if API fails
            const mailtoLink = `mailto:aradhana8439@gmail.com?subject=New Trial Session Request - ${name}&body=${encodeURIComponent(emailContent)}`;
            window.location.href = mailtoLink;
        }
    });
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });
});

// Set minimum date for booking
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('session-date');
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
});
