const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.display = "none";
    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";

    bigImage.style.maxWidth = "75%";

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')){

            imgPopup.style.display = "flex";
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.classList.add('modal-open');
        }
        if (target && target.matches('div.popup')){

            imgPopup.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    });
};

export default images;