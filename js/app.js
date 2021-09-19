
            // **** ADD ANOTHER SECTION ****

//Find the main tag which will comprise all sections 
const mainTag = document.querySelector('main'); 

//Create a new section with id class and content for that section
const newSection4 = '<section id="section4" data-nav="Section 4"> <div class="landing__container"> <h2> Section 4 </h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p> <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p> </div></section>';

//Append the new section in the main tag
mainTag.insertAdjacentHTML("beforeend",newSection4);

            // **** BUILD THE NAV ****

// Find the ul element
const ulElement = document.querySelector('ul');

// Create four li tags equivalent to four sections
for (let i=1; i<=4; i++) {
    const htmlSectionToAdd = `<li> <a href="#section${i}">Section ${i} </a> </li>`;
    ulElement.insertAdjacentHTML("beforeend", htmlSectionToAdd);
}

            // *** ADD CLASS 'ACTIVE' TO NAVI ITEM WHEN CLICKED ***

const naviItems = document.querySelectorAll('li');

// Function to remove any current active class element
function removeActive() {
    for (let i = 0; i < naviItems.length; i++) {
        const currentActiveItem = document.querySelector('li.active');
        // Remove active class in the current li element
        if (currentActiveItem) {
            naviItems[i].classList.remove('active');
        }
    }   
}

// Add active class to new clicked item
for (let i = 0; i < naviItems.length; i++) {
    naviItems[i].addEventListener('click', function() {
        removeActive();
        naviItems[i].classList.add('active');
    })
}

            // ***ADD CLASS 'ACTIVE' TO SECTION WHEN NEAR TOP OF VIEWPORT***

// Function to detect whether the section is in the viewport
function isInViewPort(sect) {
    const box = sect.getBoundingClientRect();
    return (
        box.top <= 150 && box.bottom >= 150
    );
}

// Apply active state on the current section and the corresponding Nav link
document.addEventListener('scroll', function() {
    sections = document.querySelectorAll('section');
    const currentActiveSection = document.querySelector('section.your-active-class');
    for (let i = 0; i < sections.length; i++) {
        if (isInViewPort(sections[i])) {
            currentActiveSection.classList.remove('your-active-class');
            naviItems[i].classList.add('active');
            sections[i].classList.add('your-active-class');
        }
        else {
            naviItems[i].classList.remove('active');
        }
    }
})
