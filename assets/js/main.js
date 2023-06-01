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

  // Tab View
  $(".tab-button").on("click", function (e) {
    e.preventDefault();

    // Click Styling Condition
    $(".tab-button").removeClass(
      "border-bottom fw-bold border-primary border-3"
    );
    $(".tab-button").addClass("border border-bottom-0");
    $(this).removeClass("border border-bottom-0");
    $(this).addClass("border-bottom fw-bold border-primary border-3");

    // Tab Conditions
    $(".tab-view").addClass("d-none");
    var currentTabView = $(".tab-view").eq($(this).index());
    currentTabView.removeClass("d-none");
  });

  // ******* Multi Select *******
  $(".show-options").on("click", function (e) {
    e.preventDefault();
    var toggleButton = $(this).find("i");

    toggleButton.toggleClass("d-none");
    $(this).find(".fa-xmark").addClass("d-none");
    $("#multi-options").toggleClass("d-none");
  });

  $(".multi-selected").on("click", function (e) {
    e.preventDefault();
    var tickMark = $(this).find("div");
    var selectedValue = $(this).find("input");

    $(this).toggleClass("active");
    tickMark.toggleClass("d-none");
    selectedValue.toggleClass("count");

    var counts = $("#multi-options").find(".count");
    $("#total-selected").val(counts.length + " selected");

    if (counts.length > 0) {
      $(".show-options").find("i").addClass("d-none");
      $(".show-options").find(".fa-xmark").removeClass("d-none");
    } else {
      $(".show-options").find(".fa-angle-down").addClass("d-none");
      $(".show-options").find(".fa-xmark").addClass("d-none");
      $(".show-options").find(".fa-angle-up").removeClass("d-none");
    }
  });

  // cancel all selected
  $(".show-options")
    .find(".fa-xmark")
    .on("click", function (e) {
      e.preventDefault();
      $("#multi-options").addClass("d-none");
      $("#multi-options").find(".count").removeClass("count");
      $(".show-options").find(".fa-angle-down").removeClass("d-none");
      $(".show-options").find(".fa-xmark").addClass("d-none");
      $(".show-options").find(".fa-angle-up").addClass("d-none");
      $(".multi-selected").removeClass("active");
    });

  // ********** Live Search [Start] **********
  $("#search").on("input", function () {
    var searchText = $(this).val();

    // Dummy live search result
    var liveSearchResult = [
      "Result 1",
      "Result 2",
      "Result 3",
      "Vikas",
      "Chandan",
    ];

    var resultsContainer = $("#search-results");
    resultsContainer.empty();
    if (searchText !== "") {
      $.each(liveSearchResult, function (index, result) {
        if (result.toLowerCase().includes(searchText.toLowerCase())) {
          var resultItem = $('<li class="list-group-item">').text(result);
          resultsContainer.append(resultItem);
        }
      });
    }
  });
  // ********** Live Search [End] **********

  // ********** Mulit Checkbox With Search [Start] **********
  $("#checkbox-toggle-button").on("click", function (e) {
    e.preventDefault();
    $(this).find("button").toggleClass("d-none");
    $("#checkbox-container").toggleClass("d-none");
  });

  $(".checkbox-selected").on("click", function (e) {
    e.preventDefault();
    $(this).find("div").toggleClass("d-none");
    $(this).toggleClass("fw-bold");

    var myArray = new Array();
    $(".checkbox-selected.fw-bold").each(function () {
      var text = $(this).text().trim().toString();
      myArray.push(text);
    });

    var myArrayJoin = myArray.join(", ");
    $("#selected-item-text").val(myArrayJoin);

    $(".checkbox-selected").hasClass("fw-bold")
      ? $(".clear-all-checkbox").removeClass("d-none")
      : $(".clear-all-checkbox").addClass("d-none");
  });

  $("#search-checkbox").on("input", function () {
    var searchQuery = $(this).val().toLowerCase();

    // Reset previous highlighting
    $(".checkbox-selected").addClass("d-none");
    $(".checkbox-selected.fw-bold").addClass("d-none");

    // Perform search
    $(".checkbox-selected").each(function () {
      var text = $(this).text().toLowerCase();
      if (text.indexOf(searchQuery) !== -1) {
        $(this).removeClass("d-none");
      } else {
        $(".checkbox-selected.fw-bold").removeClass("d-none");
      }
    });
  });

  // Select all checkbox
  $(".select-all-checkbox").on("click", function (e) {
    e.preventDefault();
    $(".checkbox-selected").find("div").removeClass("d-none");
    $(".checkbox-selected").addClass("fw-bold");

    var myArray = new Array();
    $(".checkbox-selected.fw-bold").each(function () {
      var text = $(this).text().trim().toString();
      myArray.push(text);
    });

    var myArrayJoin = myArray.join(", ");
    $("#selected-item-text").val(myArrayJoin);

    $("#search-checkbox").trigger("input"); // re-render the #search-checkbox
    $(".clear-all-checkbox").removeClass("d-none");
  });

  // Clear all checkbox
  $(".clear-all-checkbox").on("click", function (e) {
    e.preventDefault();
    $(".checkbox-selected").find("div").addClass("d-none");
    $(".checkbox-selected").removeClass("fw-bold");
    $("#selected-item-text").val("");

    $("#search-checkbox").val("").trigger("input"); // re-render the #search-checkbox
    $(".clear-all-checkbox").addClass("d-none");
    // $("#search-checkbox").val("");
  });

  // Document click
  $(document).on("click", function (e) {
    var target = $(e.target);
    if (
      !target.closest("#checkbox-container").length &&
      !target.closest("#checkbox-toggle-button").length
    ) {
      $("#checkbox-toggle-button").find("button").eq(0).removeClass("d-none");
      $("#checkbox-toggle-button").find("button").eq(1).addClass("d-none");
      $("#checkbox-container").addClass("d-none");
    }
  });

  // ********** Mulit Checkbox With Search [End] **********

  // End Document Ready
});

// Responsive Table
$(document).ready(function () {
  $("#example").DataTable();
});

// Pivot Table Not Working
var data = [
  ["Name", "Age", "Country"],
  ["John", 30, "USA"],
  ["Mary", 25, "UK"],
  ["Peter", 40, "Canada"],
];

// Convert data to a format compatible with PivotTable.js
// Generate the pivot table
$("#pivot-table").pivot(data, {
  rows: ["Name"],
  cols: ["Country"],
  aggregator: $.pivotUtilities.aggregators.Sum(["Age"]),
  renderer: $.pivotUtilities.renderers.Table,
});
