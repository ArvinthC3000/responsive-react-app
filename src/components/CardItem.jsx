import { Link } from 'react-router-dom';

const CardItem = () => {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img src='/' alt='Travel_Image' className='cards__item__image' />
          </figure>
          <div className='cards__item__iinfo'>
            <h5 className='cards__item__text'></h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
