import React from 'react';
import PropTypes from 'prop-types';
import { Button, Space } from 'antd';
import { EyeOutlined, DesktopOutlined } from '@ant-design/icons';
import './ArtworkPreview.css';

const ArtworkPreview = ({ imageUrl, title }) => (
    <div className="preview-container">
        <img className="artwork-preview-image" src={imageUrl} alt={title} />
        <Space size="middle" className="preview-buttons">
            <Button
                type="link"
                icon={<EyeOutlined />}
                className="preview-button"
            >
                VIEW IN A ROOM
            </Button>
            <Button
                type="link"
                icon={<DesktopOutlined />}
                className="preview-button"
            >
                AR VIEW
            </Button>
        </Space>
    </div>
);

ArtworkPreview.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
};

export default ArtworkPreview;
