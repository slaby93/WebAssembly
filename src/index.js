fetch("./src/wasm/sqrt.wasm")
  .then(resp => resp.arrayBuffer())
  .then(bytes => WebAssembly.compile(bytes))
  .then(module => WebAssembly.instantiate(module))
  .then(instance => {
    window.wasmSqrt = instance.exports.sqrt;
  });
