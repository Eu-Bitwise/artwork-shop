import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Row, Col, Select, Input, Space } from 'antd';
import {
    ClockCircleOutlined,
    EuroOutlined,
    HomeOutlined,
    CheckCircleOutlined,
    StarOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const ArtworkOrderDetails = ({ artwork }) => {
    const { title, artistShort, category, dimensions, creationYear, price } =
        artwork;

    return (
        <Row>
            <Col span={24}>
                <Row align="middle" justify="space-between">
                    <Title level={2} style={{ margin: 0 }}>
                        {title}
                        <Button
                            type="text"
                            icon={<StarOutlined />}
                            style={{ marginLeft: 16 }}
                        />
                    </Title>
                </Row>
                <Row>
                    <Title level={4}>
                        <span style={{ color: '#FFA500' }}>
                            {artistShort.fullname}
                        </span>
                        <span style={{ color: '#757575' }}>
                            {` ${artistShort.country}`}
                        </span>
                    </Title>
                </Row>

                <Space direction="vertical" size="small">
                    <Text strong>
                        {category}, {creationYear}
                    </Text>
                    <Text strong>
                        {`${dimensions.width} W x ${dimensions.height} H
                         x ${dimensions.depth} D`}
                    </Text>
                </Space>
                <Title level={2}>{price} €</Title>
                <Row gutter={16}>
                    <Col span={24}>
                        <Button
                            type="primary"
                            style={{
                                width: '40%',
                                marginBottom: 16,
                                backgroundColor: '#212121',
                                color: 'white',
                            }}
                        >
                            Acquire
                        </Button>
                    </Col>
                    <Col span={24}>
                        <Button style={{ width: '40%', marginBottom: 16 }}>
                            Make an Offer
                        </Button>
                    </Col>
                </Row>
                <Space direction="vertical" size="middle">
                    <Space>
                        <ClockCircleOutlined />
                        <Text>PRE-RESERVE FOR 24 HOURS</Text>
                    </Space>
                    <Space>
                        <EuroOutlined />
                        <Text>131€ estimated delivery fee for France</Text>
                    </Space>
                    <Space>
                        <Text>
                            In order to obtain an accurate delivery fee, please
                            enter your country of residence and zip code:
                        </Text>
                    </Space>
                    <Row gutter={8}>
                        <Col span={12}>
                            <Select
                                placeholder="Select a country"
                                style={{ width: '100%' }}
                            >
                                <Option value="us">United States</Option>
                                <Option value="uk">United Kingdom</Option>
                                <Option value="fr">France</Option>
                                <Option value="de">Germany</Option>
                                <Option value="es">Spain</Option>
                            </Select>
                        </Col>
                        <Col span={12}>
                            <Input placeholder="Enter zip code" />
                        </Col>
                    </Row>
                    <Space>
                        <HomeOutlined />
                        <Text>
                            Free pickup in <Text strong>Bruxelles</Text>,{' '}
                            <Text strong>Belgium</Text>
                        </Text>
                    </Space>
                    <Space>
                        <CheckCircleOutlined />
                        <Text>Try 13 days at home for free</Text>
                    </Space>
                </Space>
            </Col>
        </Row>
    );
};

ArtworkOrderDetails.propTypes = {
    artwork: PropTypes.shape({
        title: PropTypes.string,
        artistShort: PropTypes.object,
        category: PropTypes.string,
        dimensions: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
            depth: PropTypes.number,
        }),
        creationYear: PropTypes.number,
        price: PropTypes.number,
    }),
};

export default ArtworkOrderDetails;
