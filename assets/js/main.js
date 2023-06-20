// New York Time
window.onload = displayClock();

function displayClock() {
  const currentDate = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    })
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
    $(".tab-button").removeClass("active");
    $(this).addClass("active");

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

  // z-3 overflow-y-auto checkbox-container position-absolute mt-5 form-control d-none

  // ********** Mulit Checkbox With Search [Start] **********
  $(".checkbox-toggle-button").on("click", function (e) {
    e.preventDefault();
    $(this).find("button").toggleClass("d-none");
    $(this).siblings(".checkbox-container").toggleClass("d-none");
    // if ($(this).find("button").eq("0").hasClass("d-none")) {
    //   $(this)
    //     .siblings(".checkbox-container")
    //     .find(".search-checkbox")
    //     .val("")
    //     .trigger("input");
    // }
    $(this)
      .siblings(".checkbox-container")
      .find(".search-checkbox")
      .val("")
      .trigger("input");
  });

  $(".checkbox-selected").on("click", function (e) {
    e.preventDefault();
    $(this).find("div").toggleClass("d-none");
    $(this).toggleClass("fw-semibold");

    var myArray = new Array();
    $(this)
      .closest(".list-group")
      .find(".checkbox-selected.fw-semibold")
      .each(function () {
        var text = $(this).text().trim().toString();
        myArray.push(text);
      });

    var myArrayJoin = myArray.join(", ");
    $(this)
      .closest(".position-relative")
      .find(".selected-item-text")
      .val(myArrayJoin);

    // $(".checkbox-selected").hasClass("fw-semibold")
    //   ? $(".clear-all-checkbox").removeClass("d-none")
    //   : $(".clear-all-checkbox").addClass("d-none");
  });

  $(".search-checkbox").on("input", function () {
    var searchQuery = $(this).val().toLowerCase();

    // Reset previous highlighting
    $(this)
      .closest(".multi-select-search")
      .siblings(".list-group")
      .find(".checkbox-selected")
      .addClass("d-none");
    $(this)
      .closest(".multi-select-search")
      .siblings(".list-group")
      .find(".checkbox-selected.fw-semibold")
      .addClass("d-none");

    // Perform search
    $(this)
      .closest(".multi-select-search")
      .siblings(".list-group")
      .find(".checkbox-selected")
      .each(function () {
        var text = $(this).text().trim().toLowerCase();
        if (text.indexOf(searchQuery) !== -1) {
          $(this).removeClass("d-none");
        } else {
          $(this)
            .closest(".list-group")
            .find(".fw-semibold")
            .removeClass("d-none");
        }
      });
  });

  // Select all and clear all same button checkbox
  $(".select-all-checkbox").on("click", function (e) {
    e.preventDefault();
    var boldCheckboxSelect = $(this)
      .closest(".multi-select-search-wrapper")
      .siblings(".list-group")
      .find(".checkbox-selected.fw-semibold");
    var checkboxSelect = $(this)
      .closest(".multi-select-search-wrapper")
      .siblings(".list-group")
      .find(".checkbox-selected");
    if (boldCheckboxSelect.length < checkboxSelect.length) {
      checkboxSelect.find("div").removeClass("d-none");
      checkboxSelect.addClass("fw-semibold");

      var myArray = new Array();
      checkboxSelect.each(function () {
        var text = $(this).text().trim().toString();
        myArray.push(text);
      });

      var myArrayJoin = myArray.join(", ");
      $(this)
        .closest(".position-relative")
        .find(".selected-item-text")
        .val(myArrayJoin);

      $(".search-checkbox").trigger("input"); // re-render the #search-checkbox
      // $(".clear-all-checkbox").removeClass("d-none");
    } else {
      checkboxSelect.find("div").addClass("d-none");
      checkboxSelect.removeClass("fw-semibold");

      var myArray = new Array();
      boldCheckboxSelect.each(function () {
        var text = $(this).text().trim().toString();
        myArray.push(text);
      });

      var myArrayJoin = myArray.join(", ");
      $(this).closest(".position-relative").find(".selected-item-text").val("");

      $(this)
        .siblings(".position-relative")
        .find(".search-checkbox")
        .val("")
        .trigger("input"); // re-render the #search-checkbox
      $(".clear-all-checkbox").addClass("d-none");
    }
  });

  // Clear all checkbox
  $(".clear-all-checkbox").on("click", function (e) {
    e.preventDefault();
    $(".checkbox-selected").find("div").addClass("d-none");
    $(".checkbox-selected").removeClass("fw-semibold");
    $(this).closest(".position-relative").find(".selected-item-text").val("");

    $(".search-checkbox").val("").trigger("input"); // re-render the #search-checkbox
    $(".clear-all-checkbox").addClass("d-none");
  });

  // Document click
  $(document).on("click", function (e) {
    var target = $(e.target);
    if (
      !target.closest(".checkbox-container").length &&
      !target.closest(".checkbox-toggle-button").length
    ) {
      $(".checkbox-toggle-button").each(function (index, element) {
        $(element).find("button").eq(0).removeClass("d-none");
        $(element).find("button").eq(1).addClass("d-none");
      });
      $(".checkbox-container").addClass("d-none");
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
// var data = [
//   ["Name", "Age", "Country"],
//   ["John", 30, "USA"],
//   ["Mary", 25, "UK"],
//   ["Peter", 40, "Canada"],
// ];

// // Convert data to a format compatible with PivotTable.js
// // Generate the pivot table
// $("#pivot-table").pivot(data, {
//   rows: ["Name"],
//   cols: ["Country"],
//   aggregator: $.pivotUtilities.aggregators.Sum(["Age"]),
//   renderer: $.pivotUtilities.renderers.Table,
// });

// Tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Programs Checkbox
$(document).ready(function () {
  $(".select-all").click(function (e) {
    e.preventDefault();

    var allChecked = true;

    $('.programs-checkbox input[type="checkbox"]').each(function () {
      if (!$(this).prop("checked")) {
        allChecked = false;
        return false;
      }
    });

    $('.programs-checkbox input[type="checkbox"]').each(function () {
      $(this).prop("checked", !allChecked);
    });
  });

  $(".sort-th").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("sort-dsc")) {
      $(this).toggleClass("sort-asc sort-dsc");
      $(".sort-th").removeClass("sort-dsc");
      $(".sort-th").addClass("sort-asc");
    } else {
      $(".sort-th").addClass("sort-asc");
      $(".sort-th").removeClass("sort-dsc");
      $(this).toggleClass("sort-asc sort-dsc");
    }
  });
});

/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

function mobileNavToogle() {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavToggleBtn.classList.toggle("bi-list");
  mobileNavToggleBtn.classList.toggle("bi-x");
}
mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll("#navmenu a").forEach((navmenu) => {
  navmenu.addEventListener("click", () => {
    if (document.querySelector(".mobile-nav-active")) {
      mobileNavToogle();
    }
  });
});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll(".navmenu .has-dropdown i").forEach((navmenu) => {
  navmenu.addEventListener("click", function (e) {
    if (document.querySelector(".mobile-nav-active")) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    }
  });
});

// // Toggle Table

// Slide 12 Gray Scale

$(document).ready(function () {
  $("#exampleCheck1").change(function () {
    if ($(this).is(":checked")) {
      $(".check1").addClass("hidden");
    } else {
      $(".check1").removeClass("hidden");
    }
  });

  $("#exampleCheck2").change(function () {
    if ($(this).is(":checked")) {
      $(".check2").addClass("hidden");
    } else {
      $(".check2").removeClass("hidden");
    }
  });

  $("#exampleCheck3").change(function () {
    if ($(this).is(":checked")) {
      $(".check3").addClass("hidden");
    } else {
      $(".check3").removeClass("hidden");
    }
  });

  $("#exampleCheck4").change(function () {
    if ($(this).is(":checked")) {
      $(".check4").addClass("hidden");
    } else {
      $(".check4").removeClass("hidden");
    }
  });

  $("#exampleCheck5").change(function () {
    if ($(this).is(":checked")) {
      $(".check5").addClass("hidden");
    } else {
      $(".check5").removeClass("hidden");
    }
  });

  $("#exampleCheck6").change(function () {
    if ($(this).is(":checked")) {
      $(".check6").addClass("hidden");
    } else {
      $(".check6").removeClass("hidden");
    }
  });

  $("#exampleCheck7").change(function () {
    if ($(this).is(":checked")) {
      $(".check7").addClass("hidden");
    } else {
      $(".check7").removeClass("hidden");
    }
  });

  $("#exampleCheck8").change(function () {
    if ($(this).is(":checked")) {
      $(".check8").addClass("hidden");
    } else {
      $(".check8").removeClass("hidden");
    }
  });

  $("#exampleCheck9").change(function () {
    if ($(this).is(":checked")) {
      $(".check9").addClass("hidden");
    } else {
      $(".check9").removeClass("hidden");
    }
  });


  $('#InactivityAmount').on('input', function() {
	let inputValue = $(this).val();
	
	// Remove any existing dollar symbols
	inputValue = inputValue.replace(/\$/g, "");
	
	// Add a dollar symbol at the beginning
	inputValue = "$" + inputValue;
	
	// Update the input field value
	$(this).val(inputValue);
  });

  $('#amount').on('input', function() {
	let inputValue = $(this).val();
	
	// Remove any existing dollar symbols
	inputValue = inputValue.replace(/\$/g, "");
	
	// Add a dollar symbol at the beginning
	inputValue = "$" + inputValue;
	
	// Update the input field value
	$(this).val(inputValue);
  });

	$("#selectedprograms").change(function () {
		if ($(this).is(":checked")) {
		  $(".selectprogram").removeClass("d-none");
		} else {
		  $(".selectprogram").addClass("d-none");
		}
	});

	$("#allprograms").change(function () {
		if ($(this).is(":checked")) {
		  $(".selectprogram").addClass("d-none");
		} else {
		  $(".selectprogram").removeClass("d-none");
		}
	});

});



// .selectprogram