let arr = new Array(20);

// mảng đến gán giá trị = " "
for (let i = 0; i < 20; i++) {
    arr[i] = new Array(20);
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = "";
    }
}
function play(i, j) {
    if (checkPlayer1 && isNotDaTa(i, j)) {
        arr[i][j] = "x";
        checkPlayer1 = false;
        if (checkWin()) {
            if (choose == 1) {
                alert("Người đi trước chiến thắng!")
              
            } else {
                alert("người đi sau chiến thắng");
               
            }
        }

    } else if (!checkPlayer1 && isNotDaTa(i, j)) {
        arr[i][j] = 'o';
        checkPlayer1 = true;
        if (checkWin()) {
            if (choose == 2) {
                alert("Người đi trước chiến thắng!")

            } else {
                alert("người đi sau chiến thắng")
            }
        }
    }
    display();
}
