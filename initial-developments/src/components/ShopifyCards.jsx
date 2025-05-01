import './ShopifyCards.css'

export default function ShopifyCards() {
    return (
        <div className="col">
            <div className="card shopify-card" data-bs-toggle="modal" data-bs-target="#portfolioModal8">
            <img src="/assets/images/shopify_1.webp" className="card-img-top" alt="shopify screenshot 1" />
            <div className="card-body">
                <h5 className="card-title">Footer Redesign and Layout Optimisation</h5>
                <p className="card-text">
                    <span className="fw-bold">Tools & Tech:</span> Liquid, HTML, CSS, Shopify Navigation Settings
                    <br />
                    <span className="fw-bold">Overview:</span>
                    Redesigned and implemented a responsive, UX-guided footer.
                    Handled layout restructuring, accessibility improvements and the integration of new components such as mobile app download links and social icons.
                    <br />
                    <span className="fw-bold">Key Contributions:</span>
                    <br />
                    - Rebuilt the footer using a responsive CSS grid system, ensuring optimal layout across desktop, tablet and mobile
                    <br />
                    - Standardised styling to align with the site's updated design system, including iconography, font usage and collapsible sections on mobile for a cleaner user experience without sacrificing content depth
                    <br />
                    - Implemented functional app download icons to drive traffic to the newly developed mobile app
                    <br />
                    <span className="fw-bold">Impact:</span>
                    Delivered a clean, modular structure to support future content updates and improve user navigation across devices.
                    </p>
            </div>
            </div>
        </div>
    )
}
