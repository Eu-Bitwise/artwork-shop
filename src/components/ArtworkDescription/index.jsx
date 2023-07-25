import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Typography } from 'antd';
import './ArtworkDescription.css';

const { Panel } = Collapse;
const { Title, Text } = Typography;

const ArtworkDescription = ({
    description,
    styles,
    mediums,
    subjects,
    materials,
}) => {
    const formatArrayToString = (array) => array.join(', ');

    const data = [
        { key: '1', title: 'SUBJECTS', value: formatArrayToString(subjects) },
        { key: '2', title: 'MEDIUMS', value: formatArrayToString(mediums) },
        { key: '3', title: 'STYLES', value: formatArrayToString(styles) },
        { key: '4', title: 'MATERIALS', value: formatArrayToString(materials) },
    ];

    return (
        <Collapse
            className="artwork-description"
            bordered={false}
            expandIcon={() => null}
        >
            <Panel
                header={<Title level={4}>DESCRIPTION</Title>}
                key="1"
                className="description-panel"
            >
                <Text>{description}</Text>
            </Panel>
            <Panel
                header={
                    <Title level={4}>SUBJECT, MEDIUM, STYLE, MATERIALS</Title>
                }
                key="2"
                className="description-panel"
            >
                {data.map(({ title, value }) => (
                    <div key={title} className="artwork-description-item">
                        <Text strong>{title}</Text>
                        <Text>{value}</Text>
                    </div>
                ))}
            </Panel>
        </Collapse>
    );
};

ArtworkDescription.propTypes = {
    description: PropTypes.string,
    styles: PropTypes.arrayOf(PropTypes.string),
    mediums: PropTypes.arrayOf(PropTypes.string),
    subjects: PropTypes.arrayOf(PropTypes.string),
    materials: PropTypes.arrayOf(PropTypes.string),
};

export default ArtworkDescription;
