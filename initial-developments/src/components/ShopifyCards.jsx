import './ShopifyCards.css'

export default function ShopifyCards({image, title, tools, overview, contributions, impact, alt, id}) {
    return (
        <div className="col">
            <div className="card shopify-card" data-bs-toggle="modal" data-bs-target={id}>
            <img src={image} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <span className="fw-bold">{tools}</span>
                    <br />
                    <span className="fw-bold">{overview}</span>
                    <br />
                    <span className="fw-bold">{contributions}</span>
                    <br />
                    <span className="fw-bold">{impact}</span>
                    </p>
            </div>
            </div>
        </div>
    )
}
