import './ShopifyModals.css'

export default function ShopifyModal({image, id, alt}) {
    return (
        <div className="portfolio-modal modal fade" id={id} tabIndex="-1" aria-labelledby={id} aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content shopify-modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div className="row justify-content-center">
                            <div>
                                <img className="img-fluid" src={image} alt={alt} />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}