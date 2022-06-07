import React from "react";

export function ArtProjectPicture(props) {
  const showModal = () => {
    var modalBackground = document.getElementById("art-modal-background");
    var modalImg = document.getElementById("art-modal-img");

    modalBackground.style.display = "block";
    modalImg.src = imgSrc;
    modalImg.title = altText;
  };

  const hideModal = () => {
    var modalBackground = document.getElementById("art-modal-background");
    modalBackground.style.display = "none";
  };

  const { imgSrc, altText } = props;

  return (
    <>
      <img src={imgSrc} className="art-grid-img" alt={altText} title={altText} onClick={showModal} />
      <div id="art-modal-background" onClick={hideModal}>
        <span id="art-modal-close" onClick={hideModal}>
          &times;
        </span>
        <img id="art-modal-img" alt={altText} title={altText} />
      </div>
    </>
  );
}
