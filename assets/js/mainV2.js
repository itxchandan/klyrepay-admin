

$(document).ready(function () {
  // ********** Mulit Checkbox With Search [Start] **********
  var checkboxToggleButton = $(".checkbox-toggle-button");
  var checkboxSelected = $(".checkbox-selected");
  var searchCheckbox = $(".search-checkbox");
  var selectAllCheckbox = $(".select-all-checkbox");

  checkboxToggleButton.on("click", function (e) {
    e.preventDefault();
    $(this).children().toggleClass('d-none');
    $(this).siblings('.checkbox-container').toggleClass("d-none");
    $(this)
      .siblings(".checkbox-container")
      .find(".search-checkbox")
      .val("")
      .trigger("input");
  });

  checkboxSelected.on("click", function (e) {
    e.preventDefault();
    $(this).find("div").toggleClass("d-none");
    $(this).toggleClass("fw-semibold");

    var myArray = new Array();
    $(this)
      .closest(".available-items")
      .find(".checkbox-selected.fw-semibold")
      .each(function () {
        var text = $(this).text().trim().toString();
        myArray.push(text);
      });

    var myArrayJoin = myArray.join(", ");
    $(this)
      .closest(".base-container")
      .find(".selected-item-text")
      .val(myArrayJoin);
  });

  searchCheckbox.on("input", function () {
    var searchQuery = $(this).val().toLowerCase();

    // Reset previous highlighting
    $(this)
      .closest(".base-container")
      .find(".available-items")
      .children()
      .addClass("d-none");

    // Perform search
    $(this)
      .closest(".base-container")
      .find(".available-items")
      .children()
      .each(function () {
        var text = $(this).text().trim().toLowerCase();
        if (text.indexOf(searchQuery) !== -1) {
          $(this).removeClass("d-none");
        } else {
          $(this)
            .closest(".available-items")
            .find(".fw-semibold")
            .removeClass("d-none");
        }
      });
  });

  selectAllCheckbox.on("click", function (e) {
    e.preventDefault();

    var container = $(this).closest(".base-container");
    var availableItems = container.find(".available-items");
    var boldCheckboxSelect = availableItems.find(".checkbox-selected.fw-semibold");
    var checkboxSelect = availableItems.find(".checkbox-selected");

    var selectAll = boldCheckboxSelect.length < checkboxSelect.length;
    checkboxSelect.find("div").toggleClass("d-none", !selectAll);
    checkboxSelect.toggleClass("fw-semibold", selectAll);

    var selectedItems = selectAll ? checkboxSelect : boldCheckboxSelect;
    var selectedText = selectedItems
      .map(function () {
        return $(this).text().trim();
      })
      .get()
      .join(", ");

    selectAll ? container.find(".selected-item-text").val(selectedText) : container.find(".selected-item-text").val('');

    container.find(".search-checkbox").trigger("input");
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

  // ********** Table Column Hide And Show [Start] **********
  var tableAllFilterCheckbox = $('.table-all-filter-checkbox');
  var tableAllHeads = $('.table-all-heads');
  var tableAllBody = $('.table-all-body');

  tableAllFilterCheckbox.on('change', 'input[type="checkbox"]', function () {
    var inputs = tableAllFilterCheckbox.find('input[type="checkbox"]');
    var checkedIndices = [];
    var uncheckedIndices = [];
    inputs.each(function () {
      if ($(this).prop('checked')) {
        checkedIndices.push(inputs.index(this));
      } else {
        uncheckedIndices.push(inputs.index(this));
      }
    });

    checkedIndices.forEach(function (index) {
      tableAllHeads.children().eq(index).addClass('d-none');
      tableAllBody.children().each(function () {
        $(this).children().eq(index).addClass('d-none');
      });
    });
    uncheckedIndices.forEach(function (index) {
      tableAllHeads.children().eq(index).removeClass('d-none');
      tableAllBody.children().each(function () {
        $(this).children().eq(index).removeClass('d-none');
      });
    });
  });

  // ********** Table Column Hide And Show [End] **********
  // End Document Ready

});
