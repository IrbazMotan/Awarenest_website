// Hamburger menu toggle
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');
        });

        // Close nav on link click (mobile)
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                if(window.innerWidth <= 700){
                    hamburger.classList.remove('active');
                    nav.classList.remove('open');
                }
            });
        });

        // Active link highlight on scroll
        const sections = document.querySelectorAll('main section');
        const navLinks = document.querySelectorAll('nav a');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 90;
                if (pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });


// Resource cards for Senior Emotional Resources
// document.addEventListener('DOMContentLoaded', function() {
//   // Articles & Overviews
//   const articles = [
//     {
//       title: "Understanding the Emotional Needs of Seniors",
//       source: "Home Care Providers",
//       overview: "Explores emotional health in seniors, focusing on managing emotions, relationships, and finding purpose. Offers insights on fostering well-being through resilience, connection, and meaningful activities.",
//       link: "https://homecareproviders.com"
//     },
//     {
//       title: "7 Ways to Address Emotional Needs and Mental Health Care for Seniors",
//       source: "Blue Moon Senior Counseling",
//       overview: "Seven practical strategies for meeting emotional and mental health needs of older adults, including social interaction, relationships, safety, belonging, and purpose.",
//       link: "https://bluemoonseniorcounseling.com"
//     },
//     {
//       title: "Factors Influencing Emotional Support of Older Adults Living in the Community: A Scoping Review Protocol",
//       source: "Systematic Reviews Journal (BioMed Central)",
//       overview: "Academic article identifying factors influencing emotional support for community-dwelling older adults, with potential for tailored interventions.",
//       link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC/"
//     }
//   ];



  // Videos Section
  const videosSection = document.querySelector('#senior-emotional-resources h3:nth-of-type(3)');
  if (videosSection) {
    const cardsDiv = document.createElement('div');
    cardsDiv.className = 'cards-container';
    videos.forEach(v => {
      const card = document.createElement('div');
      card.className = 'resource-card video-card';
      card.innerHTML = `
        <h4>${v.title}</h4>
        <em>Platform: ${v.platform}</em>
        <p>${v.overview}</p>
        <a class="card-btn" href="${v.link}" target="_blank" rel="noopener">Watch Video</a>
      `;
      cardsDiv.appendChild(card);
    });
    // Remove original <ol>
    const origOl = videosSection.nextElementSibling;
    if (origOl && origOl.tagName === 'OL') origOl.remove();
    videosSection.after(cardsDiv);
  }
