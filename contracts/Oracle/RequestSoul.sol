// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract RequestSoul is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    bytes32 public soul;
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    constructor() {
        setPublicChainlinkToken();
        oracle = 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8;
        jobId = "d5270d1c311941d0b08bead21fea7747";
        fee = 0.1 * 10**18;
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data.
     */
    function requestSoulData() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        // Set the URL to perform the GET request on
        request.add(
            "get",
            "https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken"
        );

        // Specify the path for retrieving the data
        request.add("path", "RAW.PRICE");
        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    /**
     * Callback Function- receive the response in the form of uint256
     */
    function fulfill(bytes32 _requestId, bytes32 _soul)
        public
        recordChainlinkFulfillment(_requestId)
    {
        soul = _soul;
    }

    /**
     * @notice Allows the owner to withdraw any LINK balance on the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }

/**
   * @notice Call this method if no response is received within 5 minutes
   * @param _requestId The ID that was generated for the request to cancel
   * @param _payment The payment specified for the request to cancel
   * @param _callbackFunctionId The bytes4 callback function ID specified for
   * the request to cancel
   * @param _expiration The expiration generated for the request to cancel
   */
    function cancelRequest(
        bytes32 _requestId,
        uint256 _payment,
        bytes4 _callbackFunctionId,
        uint256 _expiration
    )
        public
        onlyOwner
    {
        cancelChainlinkRequest(_requestId, _payment, _callbackFunctionId, _expiration);
    }
    }
}
