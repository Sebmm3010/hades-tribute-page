import { galleryData } from '../data';
import { MouseEvent, useContext, useEffect, useState } from 'react';
import '../styles/modal.css';
import { UiContext } from '../context';
import { useSlide } from '../hooks/useSlide';


export const Modal = () => {

  const { galleryType, setShowModal } = useContext(UiContext);

  const [imgs, setImgs] = useState<string[]>([]);
  useEffect(() => {
    galleryData.map(data => {
      (data.type === galleryType) && setImgs(data.imgs);
    });
  }, [galleryType]);

  const { indexImg, setIndexImg, handlerLeft, handlerRight } = useSlide(imgs.length);

  const handleCloseModal = (event: MouseEvent) => {
    const target = event.target as Element;
    if (!target.classList.contains('close')) return;
    setIndexImg(0);
    setImgs([]);
    setShowModal(false);
  }


  return (
    <div className='modal close' onClick={handleCloseModal}>
      <span className='close' onClick={handleCloseModal}>
        <svg viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path className='close' d="M16 2a14 14 0 1 1 0 28 14 14 0 0 1 0-28z m0 12.3L12.7 11.1a1.2 1.2 0 1 0-1.6 1.6L14.3 16 11.1 19.3a1.2 1.2 0 1 0 1.6 1.6L16 17.7 19.3 20.9a1.2 1.2 0 1 0 1.6-1.6L17.7 16 20.9 12.7a1.2 1.2 0 1 0-1.6-1.6L16 14.3z" /></svg>
      </span>
      <img src={imgs[indexImg]} alt="imgGalley" />

      <button className="modal_arrow arrow_left" onClick={handlerLeft}>

        <svg viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path d="M30 16a1 1 0 0 0-1-1H5.4l6.3-6.3a1 1 0 1 0-1.4-1.4l-8 8a1 1 0 0 0 0 1.4l8 8a1 1 0 0 0 1.4-1.4L5.4 17H29A1 1 0 0 0 30 16z" fill-rule="evenodd" /></svg>

      </button>

      <button className="modal_arrow arrow_right" onClick={handlerRight}>
        <svg viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path d="M2 16a1 1 0 0 1 1-1h23.6l-6.3-6.3a1 1 0 0 1 1.4-1.4l8 8a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4-1.4L26.6 17H3A1 1 0 0 1 2 16z" fill-rule="evenodd" /></svg>
      </button>

    </div>
  )
}
