import { GoodsCard } from './GoodsCard'

import { products } from './products';

export const GoodsList = () => {
    return (
        <ul className='goods-list'>
            {products.map((item) => {
                return (
                    <li className='goods-list__item'>
                        <GoodsCard
                            title={item.title}
                            pricenew={item.price}
                            discount={item.discount}
                            imageUrl={item.imageUrl}
                        />
                    </li>
                )
            })}
        </ul>
    )
}