import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function PopupModal(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const icon_url = props.icon_url;
    console.log(icon_url)

    return (
        <>
            <Button block
                    ghost
                    style={{height:'auto'}}
                    onClick={showModal}
                    icon={<img src={icon_url} style={{textAlign: 'center'}} width={"70px"} height={"75px"}/>}>
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default PopupModal;