# wagmi-uniswap-v4-bug
### **Reproducing a naming collision with wagmi codegen**

When using solmate's [MockERC20](src/Counter.sol#L11) in a Uniswap v4 repo, wagmi codegen fails

This is caused by naming collision with Uniswap v4-core's [MockERC20](https://github.com/Uniswap/v4-core/blob/main/test/foundry-tests/utils/MockERC20.sol)

If you manually modify the v4-core codebase `MockERC20 -> UniMockERC20`, wagmi codegen succeeds

Reproduce:
```bash
yarn install
forge build --force
yarn wagmi generate
```

Error:
```bash
saucepoint@air wagmi-uniswap-v4-bug % yarn wagmi generate
yarn run v1.22.19
$ /Users/saucepoint/code/wagmi-uniswap-v4-bug/node_modules/.bin/wagmi generate
✔ Validating plugins
⠦ Resolving contracts
Contract name "MockERC20" must be unique.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```