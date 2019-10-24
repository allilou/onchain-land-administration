/**
 * @title SpatialFeatureRegistry
 * @dev an abstract contract that implement a Geospatial Features Registry
 * @notice ....
 * Requirements:
 * - ....
 *
*/

pragma solidity ^0.5.0;

import './SpatialFeature.sol';

contract SpatialFeatureRegistry {
    //
    // State variables
    //
    address public owner;
    mapping(bytes15 => address) csgRegistry;

    //
    // Events - publicize actions to external listeners
    //
    event LogNewFeatureAdded(bytes32 cscIndex, bytes15 dggsIndex, address owner);

    //
    // Functions
    //

    /// @notice constuctor
    constructor () public {
      owner = msg.sender;
    }

    /// @notice addCSCIndexedEntity
    /// @param _dggsIndex dggsIndex of the geospatialy referenced entity
    function addCSCIndexedEntity(bytes15 _dggsIndex)
    public returns (bytes32 cscIndex) {
      // TODO Check validity of external input
    //   cscIndex = calcCSCIndex (msg.sender, _geoHash);
      emit LogNewFeatureAdded(cscIndex, _dggsIndex, owner);
    }

    ///@notice registerFeature
    function registerFeature() public returns (bool);

    ///@notice getFeature
    function getFeature() public view returns (SpatialFeature);


  /* @title callback function
   *
   */

  function () external {
      revert("this contract should never have a balance");
    }

}
