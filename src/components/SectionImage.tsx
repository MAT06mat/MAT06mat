import { ReactNode } from "react";
import Section from "./Section";

interface Props {
    title?: string;
    src: string;
    gray?: boolean;
    reverse?: boolean;
    children: ReactNode;
}

function SectionImage({ title, src, gray, reverse, children }: Props) {
    return (
        <Section gray={gray} end={gray} start={gray}>
            {title ? <h2>{title}</h2> : null}
            <div className={reverse ? "cols reverse" : "cols"}>
                <img src={"/MAT06mat/images/" + src} alt="" />
                <div className="line">{children}</div>
            </div>
        </Section>
    );
}

export default SectionImage;
