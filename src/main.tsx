import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FinalVariant } from "./components/FinalVariant.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div
            className={
                "flex min-h-screen flex-col items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-blue-500"
            }
        >
            <FinalVariant />
        </div>
    </React.StrictMode>,
);
