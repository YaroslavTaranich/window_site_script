const modals = (state) => {
    function bindModal(triggerSelectr, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelectr),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              message = document.querySelectorAll('[data-calc-status]'),
              forms = document.querySelectorAll("form"),
              scroll = calcScroll();
              
            function showWindows(){
                windows.forEach(item => {
                    item.style.display = "none";
                });

                modal.style.display = "block";
                
                // document.body.style.overflow = "hidden";
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
            }
            function closeModal(){
                windows.forEach(item => {
                    item.style.display = "none";
                });
                modal.style.display = "none";
                // document.body.style.overflow = "";
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            }

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                if (!modal.getAttribute('data-calc')) {
                    showWindows();
                    message.forEach(i => {
                        i.innerText ="";
                    });
                }
                if (e.target.getAttribute('data-button') === 'calc1' && Object.keys(state).length === 3) {
                    showWindows();
                    message[0].innerText = '';
                } 
                if (e.target.getAttribute('data-button') === 'calc1' && Object.keys(state).length < 3) { 
                    message[0].innerText = "Заполните все поля!"; 
                }
                if (e.target.getAttribute('data-button') === 'calc2' && Object.keys(state).length === 5) {
                    showWindows();
                    message[1].innerText = '';
                } 
                if (e.target.getAttribute('data-button') === 'calc2' && Object.keys(state).length < 5) {
                    message[1].innerText = "Заполните все поля!"; 
                }
            });
        });

        close.addEventListener("click", () => {
            closeModal();
        });
        forms.forEach(form => {
            form.addEventListener('submit', () => {
                setTimeout(closeModal, 2000);
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay){
                windows.forEach(item => {
                    item.style.display = "none";
                });
                modal.style.display = "none";
                // document.body.style.overflow = "";
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            } 
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            // document.body.style.overflow = "";
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        console.log(scrollWidth);
        return scrollWidth;
    }

    bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
    bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
    bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
    // showModalByTime(".popup", 3000);

    
};
export default modals;