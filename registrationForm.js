const enrollmentForm = document.getElementById("enrollmentForm");
        const enrolledStudents = document.getElementById("enrolledStudents");
        const totalEnrolled = document.getElementById("totalEnrolled");
        let enrolledCount = 0;

        enrollmentForm.addEventListener("submit", function (event) {
          event.preventDefault();

          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const Website = document.getElementById("Website").value;
          const gender = document.getElementById("gender").value;
          const dob = document.getElementById("dob").value;

          const newRow = document.createElement("tr");
          newRow.innerHTML = `
          <td>${name}</td>
          <td>${email}</td>
          <td>${Website}</td>
          <td>${gender}</td>
          <td>${dob}</td>
    
        `;
          enrolledStudents.appendChild(newRow);

          enrolledCount++;
          totalEnrolled.textContent = `Total Enrollments: ${enrolledCount}`;

          enrollmentForm.reset();
        });

        