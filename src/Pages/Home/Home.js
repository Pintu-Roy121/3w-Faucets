import React from 'react';
import Modal from '../Modal/Modal';
import Notice from '../Notice/Notice';
import RequestSection from './RequestSection/RequestSection';
import Wallet from './Wallet/Wallet';

const Home = () => {
    return (
        <div>
            <Notice></Notice>
            <RequestSection></RequestSection>
            <Wallet></Wallet>
            <Modal></Modal>
        </div>
    );
};

export default Home;