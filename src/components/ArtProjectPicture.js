import React from "react";

export function ArtProjectPicture(props) {
  const showModal = () => {
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = imgCaption;
  };

  const hideModal = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const { imgSrc, imgCaption } = props;

  return (
    <>
      <img src={imgSrc} id="myImg" alt={imgCaption} onClick={showModal} />
      <div id="myModal" class="modal">
        <span class="modal-pic-close" onClick={hideModal}>
          &times;
        </span>
        <img class="pic-modal-content" id="img01" alt="" />
        <div id="caption"></div>
      </div>
    </>
  );
}
