document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const errorMsg = document.createElement("p");
    
    // Error message styling
    errorMsg.style.color = "red";
    errorMsg.style.fontWeight = "bold";
    errorMsg.style.display = "none";
    form.prepend(errorMsg);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        // Capture form values
        let employeeData = {
            name: document.getElementById("name").value.trim(),
            profileImage: document.querySelector("input[name='profile']:checked")?.value || "",
            gender: document.querySelector("input[name='gender']:checked")?.value || "",
            department: Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
                .map(input => input.value),
            salary: document.querySelector("select").value,
            startDate: {
                day: document.querySelector(".date-select select:nth-child(1)").value,
                month: document.querySelector(".date-select select:nth-child(2)").value,
                year: document.querySelector(".date-select select:nth-child(3)").value
            },
            notes: document.querySelector("textarea").value.trim()
        };

        // Validation: Check if all required fields are filled
        if (!employeeData.name || !employeeData.profileImage || !employeeData.gender || 
            employeeData.department.length === 0 || employeeData.salary === "Select Salary" || 
            employeeData.startDate.day === "Day" || employeeData.startDate.month === "Month" || 
            employeeData.startDate.year === "Year") {

            errorMsg.textContent = "⚠ Please fill out all required fields before submitting.";
            errorMsg.style.display = "block";
            return;
        } else {
            errorMsg.style.display = "none"; 
        }

        // Log the object in the console
        console.log("Employee Data Submitted: ", employeeData);

        // Store data in Local Storage (optional)
        localStorage.setItem("employeeData", JSON.stringify(employeeData));

        alert("Form submitted successfully! Check the console for data.");
    });
});
