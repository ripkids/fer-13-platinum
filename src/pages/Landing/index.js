import { useState } from 'react';
import { useNavigate } from 'react-router';

import api from '../../api';

import BannerCar from '../../components/BannerCar';
import CardCar from '../../components/CardCar';

const Landing = () => {
    const navigate = useNavigate();
    const [cars, setCars] = useState(null);

    const login = async () => {
        try {
            const response = await api.loginAdmin({
                email: 'admin@bcr.io',
                password: '123456'
            });

            localStorage.setItem('token', response.data.access_token);

            const carResponse = await api.getCars();

            console.log('cars', carResponse);
        } catch (error) {
            console.log('err', error);
        }
    };

    const dummyData = [
        { name: 'Kijang Innova 1', price: 1000, description: 'Yang lain semakin ketinggalan' },
        { name: 'Kijang Innova 2', price: 2000, description: 'Yang lain semakin ketinggalan' },
        { name: 'Kijang Innova 3', price: 3000, description: 'Yang lain semakin ketinggalan' },
        { name: 'Kijang Innova 4', price: 4000, description: 'Yang lain semakin ketinggalan' },
        { name: 'Kijang Innova 5', price: 5000, description: 'Yang lain semakin ketinggalan' },
    ]

    const dummyData2 = [
        { name: 'Kijang Innova 6', price: 6000, description: 'Yang lain semakin ketinggalan' },
        { name: 'Kijang Innova 7', price: 7000, description: 'Yang lain semakin ketinggalan' },
        { name: 'Kijang Innova 8', price: 8000, description: 'Yang lain semakin ketinggalan' },
        { name: 'Kijang Innova 9', price: 9000, description: 'Yang lain semakin ketinggalan' },
        { name: 'Kijang Innova 10', price: 10000, description: 'Yang lain semakin ketinggalan' }
    ]

    const updateCars = () => {
        /*
        * [
        * { name: 'Kijang 1' },
        * { name: 'Kijang 2' },
        * { name: 'Kijang 3' },
        * { name: 'Kijang 4' },
        * { name: 'Kijang 5' }, { name: 'Kijang 1' }, { name: 'Kijang 1' }, { name: 'Kijang 1' }, { name: 'Kijang 1' }, { name: 'Kijang 1' }]
        * */
        setCars([...dummyData, ...dummyData2]);
    };

    return (
        <>
            <div className="d-flex flex-column">
                {
                    cars && cars.map((item, index) => (
                        <CardCar
                            key={`item-${index + 1}`}
                            name={item.name}
                            price={item.price}
                            category={item.description}
                            className={item.name === 'Kijang Innova 1' ? 'bg-black' : ''}
                        />
                    ))
                }
                <button
                    className="btn btn-primary"
                    onClick={() => updateCars()}
                >
                    Update Cars
                </button>
            </div>
        </>
    )
};

export default Landing;