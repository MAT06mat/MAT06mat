import { useEffect, useState } from "react";
import namer from "color-namer";
import "./ColorTime.scss";

function timeToColor() {
    const date = new Date();
    const ms = date.getMilliseconds();
    const s = date.getSeconds() + ms / 1000;
    const m = date.getMinutes() + s / 60;
    const h = date.getHours() + m / 60;

    const r = Math.round((h / 24) * 255);
    const g = Math.round((m / 60) * 255);
    const b = Math.round((s / 60) * 255);

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return { r, g, b, luma };
}

function colorToTime({ r, g, b }: { r: number; g: number; b: number }) {
    // Clamp pour éviter les débordements si valeurs hors [0,255]
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // Recalcul des unités en inversant la règle
    const h = (r / 255) * 24; // 0 → 24h
    const m = (g / 255) * 60; // 0 → 60min
    const s = (b / 255) * 60; // 0 → 60s

    // On récupère la partie entière + décimale
    const hours = Math.floor(h);
    const minutes = Math.floor(m);
    const seconds = Math.floor(s);
    const ms = Math.round((s - seconds) * 1000);

    return { hours, minutes, seconds, ms };
}

function ColorTime() {
    const [color, setColor] = useState("rgb(255, 255, 255)");
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const i = setInterval(() => {
            const { r, g, b, luma } = timeToColor();
            setDarkMode(luma >= 40);
            setColor(`rgb(${r}, ${g}, ${b})`);
        }, 10);

        return () => clearInterval(i);
    });

    const [averageColor, setAverageColor] = useState<null | {
        r: number;
        g: number;
        b: number;
        dark: boolean;
    }>(null);

    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            alert("Veuillez choisir une image (JPEG ou PNG).");
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            if (!e.target?.result) return;
            img.src = String(e.target.result);
            img.onload = () => {
                // Créer un canvas temporaire
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (!ctx) return;
                ctx.drawImage(img, 0, 0);

                // Récupérer les pixels
                const imageData = ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
                const data = imageData.data;

                let r = 0,
                    g = 0,
                    b = 0;
                const totalPixels = data.length / 4;

                for (let i = 0; i < data.length; i += 4) {
                    r += data[i]; // Rouge
                    g += data[i + 1]; // Vert
                    b += data[i + 2]; // Bleu
                }

                r = Math.round(r / totalPixels);
                g = Math.round(g / totalPixels);
                b = Math.round(b / totalPixels);

                const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

                setAverageColor({ r, g, b, dark: luma >= 40 });
            };
        };
        reader.readAsDataURL(file);
    };

    const fileColor = `rgb(${averageColor?.r}, ${averageColor?.g}, ${averageColor?.b})`;

    return (
        <div className="container" id="color-time">
            <div className="section">
                <p>
                    <b>Current time :</b>
                </p>
                <div
                    className={"colored-div" + (darkMode ? " dark-mode" : "")}
                    style={{ backgroundColor: color }}
                    onClick={() => navigator.clipboard.writeText(color)}
                >
                    {color} MT
                </div>
                <p>
                    <b>Name:</b> {namer(color).pantone[0].name}
                </p>
            </div>
            <div className="section">
                <p>
                    <b>Choose file :</b>
                </p>
                <input
                    type="file"
                    accept="image/jpeg, image/png"
                    name="img"
                    onChange={handleFileChange}
                />
                {averageColor ? (
                    <>
                        <div
                            className={
                                "colored-div" +
                                (averageColor.dark ? " dark-mode" : "")
                            }
                            style={{ backgroundColor: fileColor }}
                            onClick={() =>
                                navigator.clipboard.writeText(fileColor)
                            }
                        >
                            {fileColor + " MT"}
                        </div>
                        <p>{`Il est actuelement ${
                            colorToTime(averageColor).hours
                        }h ${colorToTime(averageColor).minutes}min ${
                            colorToTime(averageColor).seconds
                        }sec sur cette image !`}</p>
                        <b>Name:</b> {namer(fileColor).pantone[0].name}
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default ColorTime;
