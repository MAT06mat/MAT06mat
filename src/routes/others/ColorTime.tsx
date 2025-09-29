import { useEffect, useState } from "react";

function ColorTime() {
    const [color, setColor] = useState("rbg(255, 255, 255)");
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const i = setInterval(() => {
            const date = new Date();
            const ms = date.getMilliseconds();
            const s = date.getSeconds() + ms / 1000;
            const m = date.getMinutes() + s / 60;
            const h = date.getHours() + m / 60;

            const r = Math.round((h / 24) * 255);
            const g = Math.round((m / 60) * 255);
            const b = Math.round((s / 60) * 255);

            const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            setDarkMode(luma >= 40);

            setColor(`rgb(${r}, ${g}, ${b})`);
        }, 10);

        return () => clearInterval(i);
    });

    const divStyle: React.CSSProperties = {
        width: "max-content",
        padding: "0.5rem 1rem",
        borderRadius: "0.4rem",
        border: `#${darkMode ? "000000" : "ffffff"} 2px solid`,
        color: darkMode ? "#000000" : "#ffffff",
        backgroundColor: color,
    };

    return (
        <div className="container">
            <p style={{ paddingBottom: "0.5rem" }}>
                <b>Current time :</b>
            </p>
            <div style={divStyle}>{color} MT</div>
        </div>
    );
}

export default ColorTime;
