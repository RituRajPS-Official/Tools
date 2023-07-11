function checkImageRatio() {
    const input = document.getElementById("image-upload");
    const image = document.getElementById("image-preview");
    const result = document.getElementById("result");

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function(e) {
        image.onload = function() {
          const width = image.naturalWidth;
          const height = image.naturalHeight;
          const ratio = width / height;

          let ratioText = "";

          if (ratio === 16 / 9) {
            ratioText = "16:9";
          } else if (ratio === 18 / 9) {
            ratioText = "18:9";
          } else if (ratio === 4 / 3) {
            ratioText = "4:3";
          } else if (ratio === 1) {
            ratioText = "1:1";
          } else {
            ratioText = `${width}:${height}`;
          }

          result.textContent = `Image Ratio: ${ratioText}`;
        };

        image.src = e.target.result;
        image.style.display = "block"; // Show the image preview
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
