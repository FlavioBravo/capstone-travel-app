//Add click event for generate Button.
const submitBtn = document.getElementById("submit");

const handleSubmit = (event) => {
  event.preventDefault();

  const locationInput = document.getElementById("location").value;
  const dateInput = document.getElementById("date").value;

  if (locationInput === "" || dateInput === "") {
    alert("all fields should be completed");
    return;
  }

  const dataObject = {
    location: locationInput,
    date: dateInput,
  };
  fetch("api/travel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObject),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        console.log(res.respond);
      }
    })
    .catch((err) => console.log("handleSubmit Error:", err));
};

submitBtn.addEventListener("click", handleSubmit);

export { handleSubmit };
