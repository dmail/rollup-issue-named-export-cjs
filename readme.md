# How to replicate

```console
git clone https://github.com/dmail/rollup-issue-named-export-cjs.git
cd rollup-issue-named-export-cjs
npm install
node ./rollup.mjs
```

## Actual

```console
> node ./rollup.mjs

file:///Users/dmail/rollup-issue-named-export-cjs/rollup.mjs:18
  throw new Error(`answer should be 42`);
        ^

Error: answer should be 42
    at file:///Users/dmail/rollup-issue-named-export-cjs/rollup.mjs:18:9
```

## Expected

No error during execution of `rollup.mjs`

```console
> node ./rollup.mjs

```
