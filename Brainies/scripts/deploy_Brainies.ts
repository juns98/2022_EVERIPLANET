// scripts/deploy_Brainies.ts
import { ethers } from 'hardhat'

async function main() {
    const Brainies = await ethers.getContractFactory('Brainies');
    console.log('Deploying Brainies...');
    const brainies = await Brainies.deploy();

    console.log('Brainies deployed to: ', brainies.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })