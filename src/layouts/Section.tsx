import { ReactNode } from "react";
import "../assets/css/Section.scss";

interface Props {
    children: ReactNode;
    gray?: boolean;
    start?: boolean;
    end?: boolean;
}

function Section({ children, gray, start, end }: Props) {
    return (
        <>
            {start ? (
                <div className="start">
                    <img src="/MAT06mat/images/triangle1white.svg" alt="" />
                </div>
            ) : null}
            <section className={gray ? "gray" : ""}>
                <div className="container">{children}</div>
            </section>
            {end ? (
                <div className="end">
                    <img src="/MAT06mat/images/triangle2white.svg" alt="" />
                </div>
            ) : null}
        </>
    );
}

export default Section;
