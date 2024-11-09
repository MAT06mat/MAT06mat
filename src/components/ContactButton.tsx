import "../assets/css/ContactButton.scss";

interface Props {
    center?: boolean;
}

function ContactButton({ center }: Props) {
    const pos = center ? "center" : "";
    return (
        <div className={"contact-button " + pos}>
            <a href="mailto:mat06mat22@gmail.com">ME CONTACTER</a>
        </div>
    );
}

export default ContactButton;
