import Storage from "./storage"

describe("Storage utils", () => {

    test("It should save and get the same value with the same key", () => {
        Storage.Persistent.set("example", 123)
        Storage.Session.set("session-example", 789)
        expect(Number(Storage.Persistent.get("example"))).toBe(123)
        expect(Number(Storage.Session.get("session-example"))).toBe(789)
    })

})