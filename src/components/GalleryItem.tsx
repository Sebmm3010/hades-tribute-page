import { Realms, realmsName } from "../interfaces"
import { useContext } from 'react';
import { UiContext } from "../context";


export const GalleryItem = (data: Realms) => {

    const { setGalleryType, setShowModal } = useContext(UiContext);

    const handleModal=(type:realmsName)=>{
        setGalleryType(type);
        setShowModal(true);
    }

    return (
        <div className="item" style={{ backgroundImage: `url(${data.bg})` }}>
            <div className="overlay">
                <div className="text_container">
                    <span>{data.title}</span>
                    <hr style={{ width: '100%' }} />
                    <span>{data.details}</span>
                    <span className="link" onClick={()=>handleModal(data.type)}>Ver imagenes</span>
                </div>
            </div>
        </div>
    )
}
