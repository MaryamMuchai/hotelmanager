$(document).ready(() => {
  const width = $(document).width();
  if (width <= 576) {
    $(".sidebar-items").toggleClass("hide");
    $("#sidebar").toggleClass("sidebar-hidden");
  }
});

let closed = true;

$("#sidebarToggler").click(() => {
  $(".sidebar-items").toggleClass("hide");
  $("#sidebar").toggleClass("sidebar-hidden");
  closed !== false
    ? (document.getElementById("sidebarToggler").innerText = "Close Sidebar")
    : (document.getElementById("sidebarToggler").innerText = "Open Sidebar");

  closed = !closed;
});
