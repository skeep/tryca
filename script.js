$(document).ready(function () {
  $(
    "#indian, #ccod_yes_section, #ccod_no_section, #give_details, #all_clear, #account_type_choice"
  ).hide();
  var thankYouNoContactModal = new bootstrap.Modal(
    document.getElementById("thankYouNoContact"),
    {}
  );
  //   var thankYouWillContactModal = new bootstrap.Modal(document.getElementById('thankYouWillContact'), {})

  $(
    "input[name=nationality_options], input[name=ccodBankOptions], input[name=constitution]"
  ).change(function () {
    var target = $(this).attr("data-toggle-target");
    var visibility = parseInt($(this).attr("value"), null, 10);
    if (visibility) {
      $(target).show();
    } else {
      $(target).hide();
      if ($(this).attr("name") !== "constitution") {
        thankYouNoContactModal.show();
      }
    }
  });

  $(
    "input[name=ccodOptions], input[name=otherExpOption]"
  ).change(function () {
    var showTarget = $(this).attr("data-show-target");
    var hideTarget = $(this).attr("data-hide-target");
    $(showTarget).show();
    $(hideTarget).hide();
  });
});
