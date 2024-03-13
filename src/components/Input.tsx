import { useState } from "react";

function Input() {
    const [name, setName] = useState("");
    return (
        <input
            name={"userName"}
            className={"w-96 rounded-md px-2 py-4 outline-none"}
            placeholder={"Write something awesome"}
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}

export { Input };
