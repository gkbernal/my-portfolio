$(document).ready(function () {
  // Toggle a single element
  $(".mobile > a").click(function () {
    $(".sub-head").slideToggle("fast");
  });
});

$(document).ready(function () {
  $(".sub-head > li > a").click(function () {
    $(".sub-head").slideToggle("fast");
  });
});
