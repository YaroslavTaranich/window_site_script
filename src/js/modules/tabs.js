const tabs = (headerSelector, tabSecector, contentSelector, activeClass, display = "block") => {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSecector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(i => {
            i.style.display = "none";
            
        });
        tabs.forEach(i => {
            i.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if ( target && (target.classList.contains(tabSecector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSecector.replace(/\./, "")))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode ==item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;