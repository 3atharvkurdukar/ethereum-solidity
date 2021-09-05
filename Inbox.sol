pragma solidity ^0.4.17;

contract Inbox {
    // Contract data
    // Instance variable: initialized and maintained as part of blockchain
    string public message;

    // 'public' means it is visible outside the contract
    // 'private' means it is visible only inside the contract
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    // 'view' or 'constant' means the contract data is returned and not modified
    // 'pure' means the contract data is neither read or modified
    // 'payable' means the function might send ether along
    function getMessage() public view returns (string) {
        return message;
    }
}
