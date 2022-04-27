let arr = new Array(20);

// mảng đến gán giá trị = " "
for (let i = 0; i < 20; i++) {
    arr[i] = new Array(20);
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = "";
    }
}
//Trinh:
function isNotDaTa(i, j) {
    if (arr[i][j] == "") {

        return true;
    } else {
        alert("Ô này đánh rồi");
        return false;
    }
}

