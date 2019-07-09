
const multiplicationTable = require("../multiplicationTable/MultiplicationTable");
//isValid
it('should  be true when invoke isValid given start=1 and end=3', function () {
    //given
    const start = 1;
    const end = 3;
    //when
    const result = multiplicationTable.isValid(start,end);
    //then
    expect(result).toBe(true);

});
it('should  be false when invoke isValid given start=0 and end=3', function () {
    //given
    const start = 0;
    const end = 3;
    //when
    const result = multiplicationTable.isValid(start,end);
    //then
    expect(result).toBe(false);

});
it('should  be false when invoke isValid given start=2 and end=1001', function () {
    //given
    const start = 2;
    const end = 1001;
    //when
    const result = multiplicationTable.isValid(start,end);
    //then
    expect(result).toBe(false);

});

//createMultiplicationTable
it('should return a table  when invoke isValid given start=1 and end=3', function () {
    //given
    const start = 2;
    const end = 3;
    //when
    const result = multiplicationTable.createMultiplicationTable(start,end);
    //then
    expect(result).toBe("2*2=4\t\n2*3=6\t3*3=9\t\n");
});
it('should return null  when invoke isValid given start=4 and end=2', function () {
    //given
    const start = 4;
    const end = 2;
    //when
    const result = multiplicationTable.createMultiplicationTable(start,end);
    //then
    expect(result).toBe(null);
});

//MultiplyTable
it('should return ""  when invoke isValid given start=4 and end=2', function () {
    //given
    const start = 4;
    const end = 2;
    //when
    const result = multiplicationTable.getMultiplyTable(start,end);
    //then
    expect(result).toBe("");
});
it('should return a table  when invoke isValid given start=1 and end=3', function () {
    //given
    const start = 2;
    const end = 3;
    //when
    const result = multiplicationTable.getMultiplyTable(start,end);
    //then
    expect(result).toBe("2*2=4\t\n2*3=6\t3*3=9\t\n");
});