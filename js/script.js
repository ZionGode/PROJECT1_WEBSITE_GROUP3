function changeGuestCount(delta) {
  var guestInput = document.getElementById('guests');
  var currentCount = guestInput.value ? parseInt(guestInput.value, 10) : 0;
  var newCount = currentCount + delta;
  // If newCount is less than 1 or the input was empty and delta is positive (plus button clicked)
  if (newCount < 1 || (!currentCount && delta > 0)) {
      newCount = 1;
  }
  guestInput.value = newCount;
}

$(document).ready(function(){
  $('#sortOptions').change(function(){
      // Sorting logic here
  });

  $('#filtersForm input').on('change', function() {
      // Filter logic here
      // Example:
      var filterValues = $('#filtersForm').serialize(); // This will give you a string of "name=value" pairs representing checked boxes
      console.log(filterValues);
      // Implement your filtering functionality based on checked options
  });
});
