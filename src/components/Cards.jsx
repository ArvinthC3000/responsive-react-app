import CardItem from './CardItem';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Checkout these EPIC destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
