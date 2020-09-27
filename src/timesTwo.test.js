import timesTwo from "./timesTwo"
import "@testing-library/jest-dom"

const QA = [[1,2],[2,4],[3,6],[5,10]];

QA.forEach(element=>{
    const [input,expectedOutput] = element;
    it("multiplies input by two",()=>{
        expect(timesTwo(input)).toBe(expectedOutput)
    })
})