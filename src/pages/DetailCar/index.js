const DetailCar = () => {
    return (
        <>
            <div className="d-flex flex-row justify-content-end bg-black">
                <a href="#test-1" className="mr-5 text-white">TEST 1</a>
                <a href="#test-2" className="mx-3 text-white">TEST 2</a>
                <a href="#test-3" className="ml-5 text-white">TEST 3</a>
            </div>
            <div
                id="test-1"
                className="bg-info"
                style={{ height: '750px' }}
            >
                TEST 1
            </div>
            <div
                id="test-2"
                className="bg-warning"
                style={{ height: '750px' }}
            >
                TEST 2
            </div>
            <div
                id="test-3"
                className="bg-danger"
                style={{ height: '750px' }}
            >
                TEST 3
            </div>
        </>
    )
};

export default DetailCar;