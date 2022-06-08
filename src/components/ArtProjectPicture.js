import React from "react";


export function ArtProjectPicture(props) {
  function showModal() {
    let modalBackground = document.getElementById("art-modal-background");
    let modalImg = document.getElementById("art-modal-img");

    modalBackground.classList.add("show");
    modalImg.classList.add("show");

    modalImg.src = imgSrc;
    modalImg.title = altText;
  }

  function hideModal() {
    let modalBackground = document.getElementById("art-modal-background");
    let modalImg = document.getElementById("art-modal-img");

    modalBackground.classList.remove("show");
    modalImg.classList.remove("show");
  }

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