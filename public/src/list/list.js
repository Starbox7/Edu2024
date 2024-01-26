let editId = null;
let commentEditId = null;
let totalEmployeeNumber = 0;

function addEmployee() {
  const table = document.getElementById("listTable");
  const name = document.getElementById("nameInput").value;
  const part = document.getElementById("partInput").value;
  const level = document.getElementById("levelInput").value;
  const image = document.getElementById("imageInput").files[0];
  const imageUrl = image
    ? URL.createObjectURL(image)
    : "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586271210/noticon/sageach1qrmmyfufwli1.gif";

  if (editId) {
    const replaceRow = document.getElementById("row-" + editId);

    replaceRow.cells[3].innerText = name;
    replaceRow.cells[4].innerText = part;
    replaceRow.cells[5].innerText = level;
    replaceRow.cells[2].innerHTML = `<img src="${imageUrl}" style="width: 30%; height: auto;"/>`;

    editId = null;
  } else {
    totalEmployeeNumber += 1;

    const rowCount = table.rows.length;
    const newRow = table.insertRow(rowCount);
    newRow.id = "row-" + totalEmployeeNumber;

    const checkboxCell = newRow.insertCell(0);
    checkboxCell.rowSpan = 2;
    checkboxCell.style.textAlign = "center";
    checkboxCell.innerHTML = `<input id="${totalEmployeeNumber}" type="checkbox">`;

    const numberCell = newRow.insertCell(1);
    numberCell.rowSpan = 2;
    numberCell.style.textAlign = "center";
    numberCell.innerText = totalEmployeeNumber;

    const imageCell = newRow.insertCell(2);
    imageCell.style.textAlign = "center";
    imageCell.innerHTML = `<img src="${imageUrl}" style="width: 30%; height: auto;"/>`;

    const nameCell = newRow.insertCell(3);
    nameCell.style.textAlign = "center";
    nameCell.innerText = name;

    const partCell = newRow.insertCell(4);
    partCell.style.textAlign = "center";
    partCell.innerText = part;

    const levelCell = newRow.insertCell(5);
    levelCell.style.textAlign = "center";
    levelCell.innerText = level;

    const editCell = newRow.insertCell(6);
    editCell.style.textAlign = "center";
    editCell.rowSpan = 2;
    editCell.innerHTML = `<button onclick="editEmployee(${totalEmployeeNumber})">수정</button>`;

    const deleteCell = newRow.insertCell(7);
    deleteCell.style.textAlign = "center";
    deleteCell.rowSpan = 2;
    deleteCell.innerHTML = `<button onclick="deleteEmployee(${totalEmployeeNumber})">삭제</button>`;

    const newCommentRow = table.insertRow(rowCount + 1);
    newCommentRow.id = "commentRow-" + totalEmployeeNumber;

    const commentCell = newCommentRow.insertCell(0);
    commentCell.colSpan = 4;
    let commentTableId = "commentTable-" + totalEmployeeNumber;
    commentCell.innerHTML = `
          <table id="${commentTableId}" style="border: 0px">   
            <tr>
                <td colSpan="5" style="border: 0px; border-bottom: 1px solid gray">
                    <div style="display: flex; height:27px; align-items: center; padding: 10px;">          
                        <p style="padding: 10px;">댓글</p>
                        <input id="commentInput-${totalEmployeeNumber}" style="width: 70%"/>
                        <p style="padding: 10px;">작성자</p>
                        <input id="commentNameInput-${totalEmployeeNumber}" style="margin: 10px"/>          
                        <button id="addComment" onclick="addComment(${totalEmployeeNumber})" >댓글 입력</button>
                    </div>
                </td>
            </tr>
            <tr style="height: 50px">
              <td id="commentNumTh">날짜</td>
              <td id="commentTh">댓글 내용</td>
              <td id="writerTh">작성자</td>
              <td id="commentEditTh">수정</td>
              <td id="commentDelTh">삭제</td>
            </tr>
        </table>`;
  }

  document.getElementById("nameInput").value = "";
  document.getElementById("partInput").value = "";
  document.getElementById("levelInput").value = "";
  document.getElementById("imageInput").value = "";
}

function deleteEmployee(totalEmployeeNumber) {
  const table = document.getElementById("listTable");
  table.deleteRow(
    document.getElementById("row-" + totalEmployeeNumber).rowIndex
  );
  table.deleteRow(
    document.getElementById("commentRow-" + totalEmployeeNumber).rowIndex
  );
}

function deleteSelected() {
  const table = document.getElementById("listTable");
  const checkboxes = table.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach((checkbox) => {
    if (checkbox == table.rows[0].cells[0].querySelector("input")) {
      checkbox.checked = false;
    }
    if (checkbox !== table.rows[0].cells[0].querySelector("input")) {
      table.deleteRow(checkbox.parentElement.parentElement.rowIndex);
      table.deleteRow(
        document.getElementById("commentRow-" + checkbox.id).rowIndex
      );
    }
  });
}

function toggleAllCheckboxes(sourceCheckbox) {
  const checkboxes = document.querySelectorAll(
    '#listTable input[type="checkbox"]'
  );
  for (let checkbox of checkboxes) {
    checkbox.checked = sourceCheckbox.checked;
  }
}

function editEmployee(totalEmployeeNumber) {
  const row = document.getElementById("row-" + totalEmployeeNumber);
  document.getElementById("nameInput").value = row.cells[3].innerText;
  document.getElementById("partInput").value = row.cells[4].innerText;
  document.getElementById("levelInput").value = row.cells[5].innerText;

  editId = totalEmployeeNumber;

  alert("보안 정책에 따라 이미지는 자동으로 입력할 수 없습니다!");
}

function addComment(totalEmployeeNumber) {
  const table = document.getElementById("commentTable-" + totalEmployeeNumber);
  const comment = document.getElementById(
    "commentInput-" + totalEmployeeNumber
  ).value;
  const commentName = document.getElementById(
    "commentNameInput-" + totalEmployeeNumber
  ).value;

  if (commentEditId) {
    const replaceRow = document.getElementById(commentEditId);

    replaceRow.cells[1].innerText = comment;
    replaceRow.cells[2].innerText = commentName;

    editId = null;
  } else {
    const rowCount = table.rows.length;
    const newRow = table.insertRow(rowCount);

    let now = new Date();

    let month = now.getMonth() + 1;
    let day = now.getDate();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let formatted = `${month}/${day}-${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    function generateRandomSevenDigitNumber() {
      return Math.floor(Math.random() * 9000000) + 1000000;
    }

    const randomSevenDigitNumber = generateRandomSevenDigitNumber();

    newRow.id = randomSevenDigitNumber;

    const dateCell = newRow.insertCell(0);
    dateCell.style.textAlign = "center";
    dateCell.innerText = formatted;
    const commentCell = newRow.insertCell(1);
    commentCell.style.paddingLeft = "10px";
    commentCell.innerText = comment;
    const commentNameCell = newRow.insertCell(2);
    commentNameCell.style.textAlign = "center";
    commentNameCell.innerText = commentName;

    const editCell = newRow.insertCell(3);
    editCell.style.textAlign = "center";
    editCell.innerHTML = `<p onclick="editComment(${randomSevenDigitNumber}, ${totalEmployeeNumber})">수정</p>`;

    const deleteCell = newRow.insertCell(4);
    deleteCell.style.textAlign = "center";
    deleteCell.innerHTML = `<p onclick="deleteComment(${randomSevenDigitNumber}, ${totalEmployeeNumber}
  )">삭제</p>`;
  }

  document.getElementById("commentInput-" + totalEmployeeNumber).value = "";
  document.getElementById("commentNameInput-" + totalEmployeeNumber).value = "";
}

function deleteComment(randomSevenDigitNumber, totalEmployeeNumber) {
  const table = document.getElementById("commentTable-" + totalEmployeeNumber);
  table.deleteRow(document.getElementById(randomSevenDigitNumber).rowIndex);
}

function editComment(randomSevenDigitNumber, totalEmployeeNumber) {
  const row = document.getElementById(randomSevenDigitNumber);

  document.getElementById("commentInput-" + totalEmployeeNumber).value =
    row.cells[1].innerText;
  document.getElementById("commentNameInput-" + totalEmployeeNumber).value =
    row.cells[2].innerText;

  commentEditId = randomSevenDigitNumber;
}
