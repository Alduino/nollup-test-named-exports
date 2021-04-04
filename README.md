# Minimal reproduction

Build and run dev server on port 8080:

```shell
# Build with Rollup (control, working - logs "test value")
pnpm run rollup

# Build with Nollup (not working - logs undefined)
pnpm run nollup
```

If this example works, it should log "test value", which is defined in
`src/test-lib.js`.
