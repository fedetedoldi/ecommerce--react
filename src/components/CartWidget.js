import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            <div className="qty-display">0</div>
        </div>
    )
}

export default CartWidget;