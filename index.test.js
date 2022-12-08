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
test("unknown amount of numbers", () => {
    let str1=String(1);
    let str2=String(3);
    let str3=String(1);
    let str4=String(8);
    expect(Add(str1+","+str2+","+str3+","+str4)).toBe("args are not valid, try again");

});


