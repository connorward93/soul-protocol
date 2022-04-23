// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;



import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IPublicSharedMetadata} from "@zoralabs/nft-editions-contracts/contracts/IPublicSharedMetadata.sol";
import {ColorLib} from "./ColorLib.sol";


interface INFT {
    function ownerOf(uint256 tokenId) external view returns (address);
}


contract SoulNFT is ERC721, Ownable {
    using Counters for Counters.Counter;

    /// Counter keeping track of last minted token id
    Counters.Counter currentTokenId;

    /// Metadata helper library
    IPublicSharedMetadata private immutable sharedMetadata;

    // Metadata
    string public _baseTokenURI;

    /// Checks if a contract interation is approved or by owner
    modifier onlyApproved(uint256 tokenId) {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Ony approved");
        _;
    }

    /// Make the Soul contract
    /// @param _sharedMetadata linked metadata contract
    constructor(IPublicSharedMetadata _sharedMetadata, string memory baseURI) ERC721("Soul", "SOUL") {
        sharedMetadata = _sharedMetadata;
        currentTokenId.increment();
        setBaseURI(baseURI);
    }



    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    /// Simple public mint function
    function mint() public returns (uint256) {
        _mint(msg.sender, currentTokenId.current());
        currentTokenId.increment();
    }

    /// Number of minted tokens.
    function totalSupply() public view returns (uint256) {
        // starts at 1 then goes to the next token id
        return currentTokenId.current() - 1;
    }

    function gradientForAddress(address user) public pure returns (bytes[5] memory) {
        return ColorLib.gradientForAddress(user);
    }

    /// Public getter for getting the given Soul for an address
    /// @param user address to get Soul SVG for
    function soulForAddress(address user) public view returns (string memory) {
        bytes[5] memory colors = gradientForAddress(user);
        string memory encoded = sharedMetadata.base64Encode(
            abi.encodePacked(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110"><defs>'
                // new gradient fix – test
                '<radialGradient id="gzr" gradientTransform="translate(66.4578 24.3575) scale(75.2908)" gradientUnits="userSpaceOnUse" r="1" cx="0" cy="0%">'
                // '<radialGradient fx="66.46%" fy="24.36%" id="grad">'
                '<stop offset="15.62%" stop-color="',
                colors[0],
                '" /><stop offset="39.58%" stop-color="',
                colors[1],
                '" /><stop offset="72.92%" stop-color="',
                colors[2],
                '" /><stop offset="90.63%" stop-color="',
                colors[3],
                '" /><stop offset="100%" stop-color="',
                colors[4],
                '" /></radialGradient></defs><g transform="translate(5,5)">'
                '<path d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z" fill="url(#gzr)" /><path stroke="rgba(0,0,0,0.075)" fill="transparent" stroke-width="1" d="M50,0.5c27.3,0,49.5,22.2,49.5,49.5S77.3,99.5,50,99.5S0.5,77.3,0.5,50S22.7,0.5,50,0.5z" />'
                "</g></svg>"
            )
        );
        return string(abi.encodePacked("data:image/svg+xml;base64,", encoded));
    }


    /// Determines the actual rendering address instead of just owner address for given soul id
    /// @param tokenId id of token to get render address for
    function getsoulRenderAddress(uint256 tokenId)
        public
        view
        returns (address)
    {
        address soulFor = INFT(address(this)).ownerOf(tokenId);
        if (knownMarketplace[soulFor] && lastOwner[tokenId] != address(0x0)) {
            soulFor = lastOwner[tokenId];
        }
        return soulFor;
    }

    /// TokenURI function returning on-chain encoded SVG for each soul
    /// @param tokenId token id to render
    /**
 * @dev Returns an URI for a given token ID
 */
    function tokenURI(uint256 _tokenId) public view returns (string) {
        return Strings.strConcat(
            baseTokenURI(),
            Strings.uint2str(_tokenId)
            );
    }
}