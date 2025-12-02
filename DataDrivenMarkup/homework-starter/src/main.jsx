import ReactDOM from 'react-dom/client';

import { GoodsList } from './GoodsList'

import './main.css';

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// TODO: Реализовать компонент ProductList

reactRoot.render(<GoodsList />)

// reactRoot.render(<ProductList products={products} />);
