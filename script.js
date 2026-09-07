document.addEventListener("DOMContentLoaded", function () {

  const downloadButton =
    document.querySelector(".download-button");

  if (!downloadButton) return;

  downloadButton.addEventListener("click", function () {

    const oldContent =
      downloadButton.innerHTML;

    downloadButton.innerHTML =
      "Starting download...";

    setTimeout(function () {

      downloadButton.innerHTML =
        oldContent;

    }, 1800);

  });


  // Smooth navigation

  document.querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

      link.addEventListener("click", function (event) {

        const target =
          document.querySelector(
            this.getAttribute("href")
          );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });

      });

    });

});
