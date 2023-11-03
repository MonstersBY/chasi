const draft = document.getElementsByClassName("draft");

if (draft) {
    const draftSections = Array.from(document.getElementsByClassName("draft__sections__item"));

    draftSections.forEach(section => {
    section.onclick = function () {

        draftSections.forEach(otherSection => otherSection.classList.remove('draft__sections__item--active'));
        section.classList.add('draft__sections__item--active');

    };
  });

  };




let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

