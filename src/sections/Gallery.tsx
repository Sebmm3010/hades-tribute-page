import { GalleryItem } from '../components';
import { realmsData } from '../data';
import '../styles/gallery.css';

export const Gallery = () => {
    return (
        <section className='gallery' id='gallery'>
            {/* Title */}
            <div className='gallery_title'>
                <span>
                    Viaja por
                </span>
                <span className='outline'>
                    los reinos
                </span>
                <span>
                    del inframundo
                </span>
            </div>

            {/* IMGS */}
            <div className="img_gallery">
                {
                    realmsData.map(data=>(
                        <GalleryItem key={data.title} {...data}/>
                    ))
                }
            </div>
        </section>
    )
}
