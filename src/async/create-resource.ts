type Status = "Initial" | "Loading" | "Done" | "Error";

function createResource<T>(promise: Promise<T>) {
  let status: Status = "Loading";
  let result: T | null = null;
  let error: Error | null = null;
  promise
    .then((res) => {
      status = "Done";
      result = res;
    })
    .catch((err) => {
      status = "Error";
      error = err;
    });
  return {
    read() {
      console.log({ status });
      switch (status) {
        case "Loading":
          throw promise;
        case "Error":
          throw error;
        case "Done":
          return result;
      }
    },
  };
}

export { createResource };
