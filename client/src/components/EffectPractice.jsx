import { useEffect } from "react";

function EffectPractice() {
    useEffect(() => {
        console.log("Effect is running");
    }, []);

    return <h2>Effect Practice</h2>
}

export default EffectPractice;