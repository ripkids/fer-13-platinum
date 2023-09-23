import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import api from '../../api';

import CardCar from '../../components/CardCar';

const ResultCar = () => {
    const loc = useLocation();

    const carId = new URLSearchParams(loc.search).get('idCar');

    const [carData, setCarData] = useState(null);
    const [image, setImage] = useState(null);

    const getCarById = async () => {
        try {
            const { data } = await api.getCarById(carId);

            setCarData(data);
            console.log('data', data);
        } catch (error) {

        }
    };

    const changeCarName = async () => {
        try {
            const formDataBody = new FormData();
            formDataBody.append('name', 'Avanza');
            formDataBody.append('price', 300000);
            formDataBody.append('image', image);

            await api.putCarById(carId, formDataBody);
            await getCarById();
        } catch (error) {

        }
    }

    useEffect(() => {
        getCarById();
    }, []);

    useEffect(() => {
        if (image) {
            console.log('im', image);
        }
    }, [image]);

    return (
        <>
            <span>RESULT CAR</span>
            {
                carData
                    ? (
                        <>
                            <CardCar
                                imageUrl={carData.image}
                                name={carData.name}
                                price={carData.price}
                                category={carData.category}
                            />
                            <button
                                className="btn btn-danger"
                                onClick={() => changeCarName()}
                            >
                                Update Car
                            </button>
                            <input type="file" onChange={(event) => setImage(event.target.files[0])}/>
                        </>
                    )
                    : (<></>)
            }
        </>
    )
};

export default ResultCar;