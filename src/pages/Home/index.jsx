import React from 'react';
import { Card, List } from 'antd';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const data = ['0', '1']; // ids of the available artwork json data

    return (
        <Card style={{ margin: '16px', borderRadius: '8px' }}>
            <List
                header={<div>Artwork Pages</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Link to={`/artwork/${item}`}>Artwork {item}</Link>
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default HomePage;
