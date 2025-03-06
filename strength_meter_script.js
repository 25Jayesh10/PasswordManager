function getPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 0 && password.length <= 3) {
      strength = 1; // Weak
    } else if (password.length >= 4 && password.length <= 7) {
      strength = 2; // Medium
    } else if (password.length >= 8 && password.length <= 12) {
      strength = 3; // Strong
    }
    return strength;
  }

  document.querySelector(".pw-meter #password").addEventListener("focus", function() {
    document.querySelector(".pw-meter .pw-strength").style.display = "block";
  });

  document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click", function() {
    let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
    if (el.classList.contains("active")) {
      document.querySelector(".pw-meter #password").setAttribute("type", "password");
      el.classList.remove("active");
    } else {
      document.querySelector(".pw-meter #password").setAttribute("type", "text");
      el.classList.add("active");
    }
  });

  document.querySelector(".pw-meter #password").addEventListener("keyup", function(e) {
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
    passwordStrengthSpans[1].style.width = (strength * 33) + "%"; // Adjusted width based on 3 strength levels
    if (strength === 1) {
      passwordStrengthSpans[0].innerText = "Weak";
      passwordStrengthSpans[0].style.color = "#d13636";
      passwordStrengthSpans[1].style.background = "#d13636";
    } else if (strength === 2) {
      passwordStrengthSpans[0].innerText = "Medium";
      passwordStrengthSpans[0].style.color = "#e6da44";
      passwordStrengthSpans[1].style.background = "#e6da44";
    } else {
      passwordStrengthSpans[0].innerText = "Strong";
      passwordStrengthSpans[0].style.color = "#20a820";
      passwordStrengthSpans[1].style.background = "#20a820";
    }
  });