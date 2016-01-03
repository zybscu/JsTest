
function test() {
    var element = document.getElementById("test_btn");
    print($(element).is(":hidden"));
}

function main() {
    test();
}

function print(msg) {
    console.info(msg);
}
