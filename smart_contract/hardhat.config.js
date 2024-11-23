// https://eth-sepolia.g.alchemy.com/v2/UV7rZueAQewVP4ZgIuMzL4kBWKjer6OJ

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/UV7rZueAQewVP4ZgIuMzL4kBWKjer6OJ',
      accounts: ['580c5d5c1a52296b9b8d26a62f23297ec2b5989f4305143c05064b7e27ab4f0d']
    }
  }
}