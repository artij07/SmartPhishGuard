async function checkPhishing() {
  const url = document.getElementById("urlInput").value;

  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  });

  const result = await response.json();

  const resultBox = document.getElementById("resultBox");
  if (result.prediction === 1) {
    resultBox.innerHTML = "⚠️ This URL is **Phishing**!";
    resultBox.style.color = "red";
  } else if (result.prediction === 0) {
    resultBox.innerHTML = "✅ This URL is **Safe**!";
    resultBox.style.color = "green";
  } else {
    resultBox.innerHTML = "❓ Unable to check the URL.";
    resultBox.style.color = "gray";
  }
}