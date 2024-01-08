import "../styles/components/Footer.css";

function Footer() {
    return (
    <footer className="main-footer">
        <section className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} BBDS Media Group
            </p>
        </section>
    </footer>
    );
}

export default Footer;
