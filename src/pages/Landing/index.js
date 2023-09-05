import { useNavigate } from 'react-router';

import api from '../../api';

import BannerCar from '../../components/BannerCar';
import CardCar from '../../components/CardCar';

const Landing = () => {
    const navigate = useNavigate();

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

    return (
        <>
            <span>LANDING</span>
            <BannerCar
                isButtonShown={true}
                isDanger={true}
                clickCount={500}
                onButtonClick={() => navigate('/search-car')}
            />
            <div className="d-flex flex-row">
                {
                    dummyData.map((item, index) => (
                        <CardCar
                            key={`item-${index + 1}`}
                            name={item.name}
                            price={item.price}
                            category={item.description}
                            className={item.name === 'Kijang Innova 1' ? 'bg-black' : ''}
                        />
                    ))
                }
            </div>
        </>
    )
};

export default Landing;