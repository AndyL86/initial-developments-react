import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer text-center" id="contact">
            <div className="py-5 text-center text-white footer-content">
                <div className="col-12 col-md-6 quick-links">
                    <h6>Quick Links</h6>
                    <a href="/portfolio.html">Portfolio</a>
                    <a href="/shopify.html">Shopify</a>
                </div>
                <div className="col-12 col-md-6 copyright"><small>Copyright &copy; Andy Linehan 2025</small></div>
            </div>
        </footer>
    )
}