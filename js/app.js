// var str, r;

function btnSubmit() {
    var str = document.getElementById("text").value;
    var str1 = whiteSpaceRemove(str);
    document.getElementById("output").innerHTML = ('Your Result: ' + whiteSpaceRemove(str));
    document.getElementById("new").innerHTML = ('Count Word Number: ' + countWords(str));
    // document.getElementById("new").innerHTML = ('New line: ' + whiteSpaceRemove(str) + newLine(str));
    // document.getElementById("pro").innerHTML = ('New Line Result: ' + newLineChanges());
    // speace remove function 
    function whiteSpaceRemove(str) {
        return str.replace(/^\s+|\s+$/gm, '');
    }

    // var spaceCount = (w.split('').length - 1);
    // console.log(spaceCount);


    function countWords(str) {
        str = str.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");
        return str.split(' ').length;
    }
}







// function newLineChanges() {

//     var a = document.getElementById("new").value;
//     if (a >= 10) {
//         return x.replace(/^\s+|\s+$/gm, '\n');
//     } else {
//         // return x.replace(/^\s+|\s+$/gm, '');
//     }


// }

// function addNewlines(str) {
//     if (str.length >= 10) {
//         var result = '';
//         r
//         while (str.length > 0) {
//             result += str.substring(0, 10) + '\n';
//             str = str.substring(10);
//         }
//         return result;
//     }
//     return str;
// }



//word count function 
// function countWords(str) {
//     str = str.replace(/(^\s*)|(\s*$)/gi, "");
//     str = str.replace(/[ ]{2,}/gi, " ");
//     str = str.replace(/\n /, "\n");
//     return str.split(' ').length;
// }

//when word count and 10 or more number then newline added but that function doesn't work

// function newLine(str) {
//     str = str.replace(/(^\s*)|(\s*$)/gi, "");
//     str = str.replace(/[ ]{2,}/gi, " ");
//     str = str.replace(/\n /, "\n");
//     return str.split(' ').length;


//     for (str = 0; str >= 10; str++) {
//         // alert(str);
//         document.write(str + newLinevar);
//     }
// }



// function countThis() {
//     var string = whiteSpaceRemove(x).value;
//     var spaceCount = (string.split(" ").length - 1);
//     document.getElementById("new").innerHTML = spaceCount;
// }