import { useState } from "react";
import "../assets/css/ZoomImage.scss";
import { isMobile } from "react-device-detect";

interface Props {
    src?: string;
    alt?: string;
    className?: string;
}

function ZoomImage({ src = "", alt = "", className = "" }: Props) {
    const [active, setActive] = useState(Boolean);
    function handleClick() {
        if (!isMobile) {
            setActive(!active);
        }
    }

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={"can-zoom " + className}
                onClick={handleClick}
            />
            {active ? (
                <div className="zoom-image" onClick={handleClick}>
                    <img src={src} alt={alt} />
                </div>
            ) : null}
        </>
    );
}

export default ZoomImage;
