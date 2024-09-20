
  const { expect } = require("chai");
  const { ethers } = require("hardhat");

  describe("Counter", function () {
    it("should increment the counter", async function () {

  const [signer0] = await ethers.getSigners();
  console.log(signer0.address);


      const Counter = await ethers.getContractFactory("Counter");
// if we have constructor in sol then we need to pass the params here counter.deploy(10,202,20)
       const counter = await Counter.deploy(0);

    // await Counter.deployed();

     // console.log(await counter.deployed());

      expect(await counter.count()).to.equal(0);
      await counter.increment();
      expect(await counter.count()).to.equal(1);
    });
  })