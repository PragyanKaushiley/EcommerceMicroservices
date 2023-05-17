import { Routes, Route } from 'react-router-dom';

import Login from '../Auth/Login'
import Signin from '../Auth/Signin'
import Logout from '../Auth/Logout'

import Catalog from '../Common/Catalog';
import Detail from '../Common/Detail';
import Payment from '../Protected/Payment'

import Error404 from "../Shared/Error404";

const RouterComponent = (props: any) => {
    return (
        <>
            <Routes>
                <Route path='*' element={<Error404 />} />
                <Route path='/Login' element={<Login {...props} />} />
                <Route path='/Signin' element={<Signin {...props} />} />
                <Route path='/Logout' element={<Logout {...props} />} />

                <Route path='/' element={<Catalog {...props} />} />
                <Route path='/Details/:ProductId' element={<Detail {...props} />} />
                {/* <Route path='/Payment/:paymentId' element={<Logout {...props} />} /> */}
                {/* <Route path='/Basket/:userData' element={<Logout {...props} />} /> */}

            </Routes>
        </>
    )
}

export default RouterComponent;