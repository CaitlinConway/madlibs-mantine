'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Container, Title, Button } from '@mantine/core';
import { StoryForm } from '../StoryForm/StoryForm';
import { stories } from '../../test-utils/constants';

export function StoryPage() {
    const params = useParams();
    const router = useRouter();
    const title = params.title as string;

    const story = stories.find(s => s.title === decodeURIComponent(title));

    const handleStoryComplete = (storyId: number, modifiedContent: string, title: string) => {
        console.log(`Story ${storyId} completed with modified content:`, modifiedContent);
        router.push(`/story/${encodeURIComponent(title)}/details?content=${encodeURIComponent(modifiedContent)}`);
    };

    const handleBackToStories = () => {
        router.push('/');
    };

    if (!story) {
        return <Container><Title>Story not found</Title></Container>;
    }

    return (
        <Container>
            <Button onClick={handleBackToStories} mb="md">Back to Stories</Button>
            <StoryForm story={story} onSubmit={handleStoryComplete} />
        </Container>
    );
}