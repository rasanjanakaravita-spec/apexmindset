window.onload = function() {
    // HTML එකේ class="center-logo" ලෙස ඇති ලෝගෝ එක තෝරා ගැනීම
    const logo = document.querySelector('.center-logo');

    if (logo) {
        // 1. මුලින්ම ලෝගෝ එක නොපෙනී තිබීමට සකස් කිරීම
        logo.style.opacity = "0";
        logo.style.transform = "translateY(20px)"; // පොඩ්ඩක් පහළින් තිබීමට
        logo.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";

        // 2. තත්පර බාගයකට පසු ලස්සනට මතු වීම (Fade In)
        setTimeout(() => {
            logo.style.opacity = "1";
            logo.style.transform = "translateY(0px)";
        }, 500);

        // 3. මවුසය ලෝගෝ එක උඩට ගිය විට (Hover Effect)
        logo.addEventListener('mouseover', () => {
            logo.style.transform = "scale(1.1) rotate(2deg)"; // පොඩ්ඩක් විශාල වී ඇල වීම
            logo.style.filter = "drop-shadow(0 0 15px rgba(255, 204, 0, 0.6))"; // රන්වන් පැහැති Glow එකක්
            logo.style.cursor = "pointer";
        });

        // 4. මවුසය ඉවතට ගත් විට සාමාන්‍ය තත්වයට පත් කිරීම
        logo.addEventListener('mouseout', () => {
            logo.style.transform = "scale(1) rotate(0deg)";
            logo.style.filter = "none";
        });
    }
};