import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';

import api from '../../api';

import CardCar from '../../components/CardCar';

const SearchCar = () => {
    const navigate = useNavigate();
    const [carData, setCarData] = useState(null);

    const searchCar = async () => {
        try {
            const { data } = await api.getCars({
                page: 1,
                pageSize: 10
            });
            setCarData(data);
        } catch (error) {

        }
    };

    const goToResultCarWithId = (id) => {
        // localStorage.setItem('carId', id);
        // navigate('/result-car');
        navigate({
            pathname: '/result-car',
            search: createSearchParams({
                idCar: id
            }).toString()
        })
    };

    useEffect(() => {
        searchCar();
    }, []);

    return (
        <>
            <span>SEARCH CAR</span>
            {
                carData
                    ? (
                        <>
                            {
                                carData.cars.map((item, index) => (
                                    <CardCar
                                        key={`key-${index + 1}`}
                                        name={item.name}
                                        price={item.price}
                                        category={item.category}
                                        imageUrl={item.image}
                                        onButtonClick={() => goToResultCarWithId(item.id)}
                                    />
                                ))
                            }
                        </>
                    )
                    : (<></>)
            }
        </>
    )
};

export default SearchCar;