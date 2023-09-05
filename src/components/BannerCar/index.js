const BannerCar = (props) => {
    const {
        isButtonShown,
        isDanger,
        clickCount,
        onButtonClick
    } = props;

    return (
        <div>
            <span
                className={isDanger
                    ? 'text-danger'
                    : 'text-info'}
            >
                TAMPILAN MOBIL {clickCount}
            </span>
            {
                isButtonShown
                    ? (
                        <button
                            className="btn btn-danger"
                            onClick={onButtonClick}
                        >
                            Cari Mobil
                        </button>
                    )
                    : (<></>)
            }
        </div>
    )
};

export default BannerCar;