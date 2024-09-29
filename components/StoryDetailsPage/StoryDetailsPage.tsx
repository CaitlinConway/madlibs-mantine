'use client';

import React from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { Container, Title } from '@mantine/core';
import { StoryDetails } from '../StoryDetails/StoryDetails';
import { stories } from '../../test-utils/constants';

export function StoryDetailsPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const title = params.title as string;
    const modifiedContent = searchParams.get('content');

    const story = stories.find(s => s.title === decodeURIComponent(title));

    if (!story || !modifiedContent) {
        return <Container><Title>Story details not found</Title></Container>;
    }

    return (
        <Container>
            <StoryDetails title={story.title} author={story.author} content={modifiedContent} />
        </Container>
    );
}
