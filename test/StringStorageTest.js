const StringStorage = artifacts.require("StringStorage");

contract("StringStorage", accounts => {
    let contractInstance;

    beforeEach(async () => {
        contractInstance = await StringStorage.new(); // Deploy a new instance for each test to maintain independence
    });

    it("should store a string and increment transaction count", async () => {
        await contractInstance.storeString("Hello, World!");
        const storedString = await contractInstance.retrieveString(1);
        const transactionCount = await contractInstance.transactionCount();

        assert.equal(storedString, "Hello, World!", "The string was not stored correctly.");
        assert.equal(transactionCount, 1, "Transaction count should be incremented.");
    });

    it("should emit an event when a string is stored", async () => {
        const result = await contractInstance.storeString("Hello, again!");
        assert.equal(result.logs[0].event, "StringStored", "StringStored event should be emitted.");
        assert.equal(result.logs[0].args.transactionId.toNumber(), 1, "Event transaction ID incorrect.");
        assert.equal(result.logs[0].args.storedString, "Hello, again!", "Event stored string incorrect.");
    });

    it("should retrieve the correct string for given transaction IDs", async () => {
        await contractInstance.storeString("First");
        await contractInstance.storeString("Second");

        const firstString = await contractInstance.retrieveString(1);
        const secondString = await contractInstance.retrieveString(2);

        assert.equal(firstString, "First", "The first string retrieved is incorrect.");
        assert.equal(secondString, "Second", "The second string retrieved is incorrect.");
    });
});
