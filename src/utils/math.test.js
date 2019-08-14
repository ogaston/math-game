import MathHelper, { evaluate, PRIMES_NUMBERS } from './math'


describe("MathHelper utils", ()=> {

    test('Generate a random problem, its complexity (length) will change depending the points passed', () => {
        const beginner = MathHelper.generateProblem(100).replace(/ /g,"") // removing the whitespace
        const medium = MathHelper.generateProblem(500).replace(/ /g,"") // removing the whitespace
        const pro = MathHelper.generateProblem(1000).replace(/ /g,"") // removing the whitespace

        expect(beginner.length).toBeLessThanOrEqual(5)
        expect(medium.length).toBeLessThanOrEqual(8)
        expect(pro.length).toBeLessThanOrEqual(11)
    });

    test('Return the value of an valid math operation', () => {
        const expression = MathHelper.generateProblem(1000)
        expect(typeof MathHelper.solve(expression)).toBe("number")
        expect(MathHelper.solve("1+2")).toBe(3)
    });

    test('Compare the expression generated with another value', () => {
        const expression = MathHelper.generateProblem(1000)
        expect(MathHelper.compare(expression, MathHelper.solve(expression))).toBe(true)
        expect(MathHelper.compare(expression, 554987848948978)).toBe(false)
    });
  
})

describe("MathHelper utils [private methods]", ()=> {

    test('[evaluate]: Determines whether the operation is a division, it should return  an function with an prime number ', () => {
        const returnedFunc = evaluate("/", 50)
        expect(PRIMES_NUMBERS.includes(returnedFunc())).toBe(true)
    });

})


