const Add = require("./index");
test("empty string", () => {
    let str="";
    expect(Add(str)).toBe("0");

});
test("one number", () => {

    let str=String(1);
    expect(Add("1")).toBe(parseInt(str));
});
test("one negative number", () => {

    let str=String(-1);
    try {
        Add(str);
    } catch (e) {
        expect(e.message).toBe("negatives not allowed,you entered"+str);
    }
});
test("the first of 2 is a negative number", () => {

    let str1=String(-1);
    let str2=String(3);
    try {
        Add(str1+","+str2);
    } catch (e) {
        expect(e.message).toBe("negatives not allowed,you entered"+str1);
    }
});
test("the second of 2 is a negative number", () => {

    let str1=String(1);
    let str2=String(-3);
    try {
        Add(str1+","+str2);
    } catch (e) {
        expect(e.message).toBe("negatives not allowed,you entered"+str2);
    }
});
test(" 2 negative numbers", () => {

    let str1=String(-1);
    let str2=String(-3);
    let ss=str1+","+ str2;
    try {
        console.log(Add(str1+","+str2));
        Add(str1+","+str2);

    } catch (e) {
        expect(e.message).toBe('negatives not allowed,you entered'+ ss);
    }
});
test("2 numbers", () => {
    let str1=String(1);
     let str2=String(3);
    expect(Add(str1+","+str2)).toBe(parseInt(str1)+parseInt(str2));

});

test("1 number  over 1000", () => {
    let str1=String(1002);
  expect(Add(str1)).toBe(0);

});
test("2 numbers  over 1000", () => {
    let str1=String(1002);
    let str2=String(1003);
  expect(Add(str1+","+str2)).toBe(0);

});
test("first of 2 numbers is over 1000", () => {
    let str1=String(1002);
    let str2=String(3);
  expect(Add(str1+","+str2)).toBe(parseInt(str2));

});
test("seconed of 2 numbers is over 1000", () => {
    let str1=String(2);
    let str2=String(1003);
  expect(Add(str1+","+str2)).toBe(parseInt(str1));

});


test("unknown amount of numbers", () => {
    let str1=String(1);
    let str2=String(3);
    let str3=String(1);
    let str4=String(8);
    expect(Add(str1+","+str2+","+str3+","+str4)).toBe("args are not valid, try again");

});


