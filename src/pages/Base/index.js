import { Outlet } from 'react-router';

import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

const Base = () => {

    return (
        <>
            <TopBar />
            <Outlet />
            <Footer />
        </>
    )
};

export default Base;