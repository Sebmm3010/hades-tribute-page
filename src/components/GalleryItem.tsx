import { galleryData } from "../interfaces"


export const GalleryItem = ({ bg, title, details }: galleryData) => {
    return (
        <div className="item" style={{ backgroundImage: `url(${bg})` }}>
            <div className="overlay">
                <div className="text_container">
                    <span>{title}</span>
                    <hr style={{width:'100%'}}/>
                    <span>{details}</span>
                    <span className="link">Ver imagenes</span>
                </div>
            </div>
        </div>
    )
}
