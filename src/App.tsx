import { Suspense } from "react";
import { Card } from "./components/Card/Card.tsx";

function App() {
  return (
    <div
      className={
        "flex min-h-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500"
      }
    >
      <Suspense fallback={<h1>Loading..</h1>}>
        <Card text={"hello, world!"} />
      </Suspense>
    </div>
  );
}

export default App;
