const CardCar = (props) => {
    const {
        name,
        price,
        category,
        imageUrl,
        onButtonClick,
        className
    } = props;

    return (
        <div
            className={`w-50 p-2 d-flex flex-column card ${className}`}
        >
            <img
                src={imageUrl}
                className="w-25"
                alt="car-image"
            />
            <span>Name: {name}</span>
            <span>Price: {price}</span>
            <span>Category: {category}</span>
            <button className="btn btn-success" onClick={onButtonClick}>
                Pilih Mobil
            </button>
        </div>
    )
};

export default CardCar;