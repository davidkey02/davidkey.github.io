function fetchGradeData() {
    console.log("Fetching grade data...");

    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const results = JSON.parse(xhr.responseText);
                populateGradebook(results);
            } else {
                console.error(`Could not get grades.\nStatus: ${xhr.status}`);
            }
        }
    };

    xhr.open("GET", apiRoute, true);
    xhr.send();
}

function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);
    let tableElm = document.getElementById("gradeTableBody");
 // Full table element

    data.forEach(function (assignment) {
        let row = document.createElement("tr");

        // First TD: full name (last, first)
        let nameCell = document.createElement("td");
        nameCell.appendChild(
            document.createTextNode(`${assignment.last_name}, ${assignment.first_name}`)
        );

        // Second TD: total grade
        let gradeCell = document.createElement("td");
        gradeCell.appendChild(
            document.createTextNode(assignment.total_grade)
        );

        // Add to row
        row.appendChild(nameCell);
        row.appendChild(gradeCell);

        // Add to table
        tableElm.appendChild(row);
    });
}

// Only call fetch here
fetchGradeData();
