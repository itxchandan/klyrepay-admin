// New York Time
window.onload = displayClock();
function displayClock() {
  const currentDate = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  var timestamp = currentDate.toString().split("GMT");
  var splitstring = timestamp[0].split(" ");
  var final_string =
    splitstring[0] +
    ", " +
    splitstring[1] +
    " " +
    splitstring[2] +
    " " +
    splitstring[3] +
    ", " +
    splitstring[4];
  $("#clock").text(final_string);
  setTimeout(displayClock, 1000);
}

$(document).ready(function () {
  // Theme Mode
  $(".theme-mode").click(function () {
    var currentSrc = $("html").attr("data-bs-theme");
    if (currentSrc === "light") {
      $("html").attr("data-bs-theme", "dark");
      $(".theme-sun").addClass("d-none");
      $(".theme-moon").removeClass("d-none");
    } else {
      $("html").attr("data-bs-theme", "light");
      $(".theme-sun").removeClass("d-none");
      $(".theme-moon").addClass("d-none");
    }
  });

  // Toggle Password
  $(".show-password").click(function (e) {
    e.preventDefault();
    var eyeToggleButton = $(this);
    var input = eyeToggleButton.siblings("input");

    eyeToggleButton.find("i").toggleClass("hidden");

    if (eyeToggleButton.find("i").first().hasClass("hidden")) {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  // Cancel Toast
  $(".cancel-toast-button").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".cancel-toast").addClass("d-none");
  });

  // Show Toast
  $("#show-saved-toast").on("click", function (e) {
    e.preventDefault();
    $("#savedToast").removeClass("d-none");
  });

  $("#show-moved-toast").on("click", function (e) {
    e.preventDefault();
    $("#movedToast").removeClass("d-none");
  });

  $("#show-archived-toast").on("click", function (e) {
    e.preventDefault();
    $("#archivedToast").removeClass("d-none");
  });

  $("#show-avatar-toast").on("click", function (e) {
    e.preventDefault();
    $("#avatarToast").removeClass("d-none");
  });

  // Date Range Empty Picker
  $(function () {
    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        cancelLabel: "Clear",
      },
    });

    $('input[name="datefilter"]').on(
      "apply.daterangepicker",
      function (ev, picker) {
        $(this).val(
          picker.startDate.format("MM/DD/YYYY") +
            " - " +
            picker.endDate.format("MM/DD/YYYY")
        );
      }
    );

    $('input[name="datefilter"]').on(
      "cancel.daterangepicker",
      function (ev, picker) {
        $(this).val("");
      }
    );
  });

  // Three Level Deep Mobile Menu
  $(".mobile-menu-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("d-none");
    $(".level-one-menu").toggleClass("d-none");
  });

  $(".level-one-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("d-none");
    $(".level-two-menu").toggleClass("d-none");
  });

  $(".level-two-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("d-none");
    $(".level-three-menu").toggleClass("d-none");
  });
});

// Responsive Table
$(document).ready(function () {
  $('#example').DataTable();
});