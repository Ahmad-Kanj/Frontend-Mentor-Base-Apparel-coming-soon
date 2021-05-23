var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  document.querySelector(".submitButton").addEventListener("click", (e) => {
    if (document.querySelector(".emailInput").value) {
      if (
        document
          .querySelector(".emailInput")
          .value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)
      ) {
        document.querySelector(".emailInput").value = "";
        document.querySelector(".emailInput").classList.remove("errorBorder");
        document.querySelector(".error").style.display = "none";
        document.querySelector(".errorMessage").style.display = "none";
      } else {
        document.querySelector(".errorMessage").textContent =
          "Please provide a valid email";
        document.querySelector(".emailInput").classList.add("errorBorder");
        document.querySelector(".error").style.display = "block";
        document.querySelector(".errorMessage").style.display = "block";
      }
    } else {
      document.querySelector(".errorMessage").textContent = "Field Empty";
      document.querySelector(".emailInput").classList.add("errorBorder");
      document.querySelector(".error").style.display = "block";
      document.querySelector(".errorMessage").style.display = "block";
    }
  });
});
