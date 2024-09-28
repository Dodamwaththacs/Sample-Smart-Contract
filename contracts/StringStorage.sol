// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StringStorage {
    // Event to emit when a string is stored
    event StringStored(uint256 indexed transactionId, string storedString);

    // Mapping from transaction ID to strings
    mapping(uint256 => string) public strings;

    // Counter for the transaction IDs
    uint256 public transactionCount;

    // Function to store a string
    function storeString(string memory inputString) public {
        transactionCount++; // Increment the transaction ID
        strings[transactionCount] = inputString; // Map the string to the new transaction ID
        emit StringStored(transactionCount, inputString); // Emit an event with the transaction ID
    }

    // Function to retrieve a string by transaction ID
    function retrieveString(
        uint256 transactionId
    ) public view returns (string memory) {
        return strings[transactionId];
    }
}
