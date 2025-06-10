// Live name preview (converted to uppercase)
document.getElementById('name').addEventListener('input', function () {
  this.value = this.value.toUpperCase(); // Convert to uppercase
  document.getElementById('liveName').textContent = this.value || "STUDENT";
});

// Character counter for address
const address = document.getElementById('address');
const charsLeft = document.getElementById('charsLeft');
address.addEventListener('input', function () {
  const max = 200;
  const remaining = max - this.value.length;
  charsLeft.textContent = remaining;
});

// Phone number validation
const phone = document.getElementById('phone');
phone.addEventListener('input', function () {
  // Remove non-digits
  this.value = this.value.replace(/\D/g, '');
  // Limit to 10 digits
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10);
  }
});

phone.addEventListener('blur', function () {
  if (this.value.length !== 10) {
    alert("Phone number must be exactly 10 digits.");
    this.focus();
  }
});

// Email validation
const email = document.getElementById('email');
email.addEventListener('blur', function () {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(this.value)) {
    alert("Please enter a valid email address.");
    this.focus();
  }
});
