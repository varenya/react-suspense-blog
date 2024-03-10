function fetchText(): Promise<string> {
  return new Promise<string>((resolve) =>
    setTimeout(() => {
      resolve("async text");
    }, 1000),
  );
}

export { fetchText };
