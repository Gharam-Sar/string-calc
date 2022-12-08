const Add = require("./index");
test("empty string", () => {
    let str="";
    expect(Add(str)).toBe("0");

});
test("one number", () => {
    let str=String(1);
    expect(Add("1")).toBe(parseInt(str));
});
test("2 numbers", () => {
    let str1=String(1);
     let str2=String(3);
    expect(Add(str1+","+str2)).toBe(parseInt(str1)+parseInt(str2));

});


