'use client';

import React from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { Container, Title, Button } from '@mantine/core';
import { StoryDetails } from '../StoryDetails/StoryDetails';
import { stories } from '../../test-utils/constants';

export function StoryDetailsPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const title = params.title as string;
    const modifiedContent = searchParams.get('content');

    const story = stories.find(s => s.title === decodeURIComponent(title));

    const handleBackToStories = () => {
        router.push('/');
    };

    if (!story || !modifiedContent) {
        return <Container><Title>Story details not found</Title></Container>;
    }

    return (
        <Container>
            <Button onClick={handleBackToStories} mb="md">Back to Stories</Button>
            <StoryDetails title={story.title} author={story.author} content={modifiedContent} />
        </Container>
    );
}
