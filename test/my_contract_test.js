const MyContract = artifacts.require("MyContract");

contract("MyContract", (accounts) => {
  it("should set initial value correctly", async () => {
    const myContractInstance = await MyContract.deployed();
    const initialValue = await myContractInstance.myNumber();
    assert.equal(initialValue, 100, "Initial value is not correct");
  });

  it("should set new value correctly", async () => {
    const myContractInstance = await MyContract.deployed();
    const newValue = 200;
    await myContractInstance.setNumber(newValue, { from: accounts[0] });
    const updatedValue = await myContractInstance.myNumber();
    assert.equal(updatedValue, newValue, "New value was not set correctly");
  });
});
