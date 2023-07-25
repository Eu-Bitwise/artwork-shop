import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadcrumbComponent = ({ id }) => (
    <Breadcrumb style={{ marginBottom: '16px', fontSize: '16px' }}>
        <Breadcrumb.Item>
            <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Artwork {id}</Breadcrumb.Item>
    </Breadcrumb>
);

BreadcrumbComponent.propTypes = {
    id: PropTypes.string,
};

export default BreadcrumbComponent;
