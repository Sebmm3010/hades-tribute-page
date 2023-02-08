import { galleryData } from '../data';
import { MouseEvent, useContext, useEffect, useState } from 'react';
import '../styles/modal.css';
import { UiContext } from '../context';
import { useSlide } from '../hooks/useSlide';


export const Modal = () => {

  const { galleryType, showModal, setShowModal } = useContext(UiContext);

  const [imgs, setImgs] = useState<string[]>([]);
  useEffect(() => {
    galleryData.map(data => {
      (data.type === galleryType) && setImgs(data.imgs);
    });
  }, [galleryType]);
  
  const {  indexImg, setIndexImg, handlerLeft, handlerRight } = useSlide(imgs.length);

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

        <svg viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path d="M30 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4zM0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4z m23 11a1 1 0 0 1 0 2H11.4l4.3 4.3a1 1 0 0 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 1 1 1.4 1.4L11.4 15H23z" fillRule="evenodd" /></svg>

      </button>

      <button className="modal_arrow arrow_right" onClick={handlerRight}>
        <svg viewBox="0 0 32 32" width="32" height="32" stroke="currentColor" fill="currentColor"><path d="M30 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4zM0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4z m9 11a1 1 0 0 0 0 2h11.6l-4.3 4.3a1 1 0 0 0 1.4 1.4l6-6a1 1 0 0 0 0-1.4l-6-6a1 1 0 1 0-1.4 1.4L20.6 15H9z" fillRule="evenodd" /></svg>
      </button>

    </div>
  )
}
