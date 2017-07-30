const loadWasmFile = async (src, functionName, name) => {
  await fetch(src)
    .then(resp => {
      return resp.arrayBuffer();
    })
    .then(bytes => WebAssembly.compile(bytes))
    .then(module =>  WebAssembly.instantiate(module))
    .then(instance => {
      window[name] = instance.exports[functionName];
    });
};

document.addEventListener("DOMContentLoaded", async () => {
  await loadWasmFile("./src/wasm/sqrt.wasm", "sqrt", "wasmSqrt");
  await loadWasmFile("./src/wasm/program.wasm", "test", "wasmCalc");
  console.log(window.wasmCalc(5.99,59.99));
});
