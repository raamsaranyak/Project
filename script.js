// Live name preview
document.getElementById('name').addEventListener('input', function () {
  document.getElementById('liveName').textContent = this.value || "Student";
});

// Character counter
const address = document.getElementById('address');
const charsLeft = document.getElementById('charsLeft');
address.addEventListener('input', function () {
  const max = 200;
  const remaining = max - this.value.length;
  charsLeft.textContent = remaining;
});
