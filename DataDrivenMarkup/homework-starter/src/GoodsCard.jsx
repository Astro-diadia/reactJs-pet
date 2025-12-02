export const GoodsCard = ({ title, pricenew, discount, imageUrl }) => {
    return (
        <div className='card'>
            <img className='card__img' src={imageUrl} width="200" height="200" alt="goods img" />
            {discount ? (
                <div className='card__price'>
                    <span className='card__price-new'>{pricenew * (1 - discount)} &#8381;</span>
                    <span className='card__price-old'>{pricenew} &#8381;</span>
                </div>
            ) : <span className='card__price-same'>{pricenew} &#8381;</span>}
            <p className='card__title'>{title}</p>
        </div>
    )
}