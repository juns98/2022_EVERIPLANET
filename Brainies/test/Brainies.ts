// test/Brainies.ts
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Brainies", function(){
    var Brainies: any;
    var brainies: any;
    var accounts: any;
    
    before(async function() {
        Brainies = await ethers.getContractFactory('Brainies');
        accounts = await ethers.getSigners();

        brainies = await Brainies.deploy();
    });

    it('Deployed well', async function () {
        expect((await brainies.name())).to.equal('Brainies');
    })
})