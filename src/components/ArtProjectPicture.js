import React from "react";

export function ArtProjectPicture(props) {
  const showModal = () => {
    let modalBackground = document.getElementById("art-modal-background");
    let modalImg = document.getElementById("art-modal-img");

    modalImg.classList.add("show");
    modalBackground.classList.add("show");
    modalImg.src = imgSrc;
    modalImg.title = altText;
  };

  const hideModal = () => {
    let modalBackground = document.getElementById("art-modal-background");
    let modalImg = document.getElementById("art-modal-img");

    modalImg.classList.remove("show");
    modalBackground.classList.remove("show");
  };

  const { imgSrc, altText } = props;

  return (
    <>
      <img src={imgSrc} className="art-grid-img" alt={altText} title={altText} onClick={showModal} />
      <div className="modal-bg" id="art-modal-background" onClick={hideModal}>
        <span id="art-modal-close" onClick={hideModal}>
          &times;
        </span>
        <img id="art-modal-img" alt={altText} title={altText} />
      </div>
    </>
  );
}
