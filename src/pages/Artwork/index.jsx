import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

// Using axios for HTTP requests
import axios from 'axios';

import BreadcrumbComponent from '../../components/BreadcrumbComponent';
import ArtworkPreview from '../../components/ArtworkPreview';
import ArtworkOrderDetails from '../../components/ArtworkOrderDetails';
import ArtworkDescription from '../../components/ArtworkDescription';
import ArtworkRecommendation from '../../components/ArtworkRecommendation';

// Import local data
import artworkData from '../../assets/data/1.json';

const Artwork = () => {
    const { id } = useParams();
    const [artwork, setArtwork] = useState(null);
    const storageUrl =
        'https://storage.googleapis.com/ya-misc/interviews/front/examples/';

    useEffect(() => {
        axios
            .get(`${storageUrl}${id}.json`)
            .then((res) => {
                setArtwork(res.data);
            })
            .catch((err) => {
                console.error(err);
            });

        // Simulating API response
        // setTimeout(() => {
        //     setArtwork(artworkData);
        // }, 200);
    }, [id]);

    if (!artwork) return <p>Loading...</p>;

    return (
        <Card style={{ margin: '16px', borderRadius: '8px' }}>
            <BreadcrumbComponent id={id} />
            <Row gutter={16}>
                <Col span={12}>
                    <ArtworkPreview
                        imageUrl={artwork.imageUrl}
                        title={artwork.title}
                    />
                    <ArtworkDescription
                        description={artwork.description}
                        styles={artwork.styles}
                        mediums={artwork.mediums}
                        subjects={artwork.subjects}
                        materials={artwork.materials}
                    />
                </Col>
                <Col span={12}>
                    <ArtworkOrderDetails artwork={artwork} />
                </Col>
            </Row>
            <ArtworkRecommendation
                artworks={artwork.otherArtworkImages.map((url) => ({
                    title: '',
                    imageUrl: url,
                }))}
            />
        </Card>
    );
};

export default Artwork;
