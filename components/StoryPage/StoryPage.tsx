'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Container, Title } from '@mantine/core';
import { StoryForm } from '../StoryForm/StoryForm';
import { stories } from '../../test-utils/constants';

export function StoryPage() {
    const params = useParams();
    const router = useRouter();
    const title = params.title as string;

    const story = stories.find(s => s.title === decodeURIComponent(title));

    const handleStoryComplete = (storyId: number, modifiedContent: string, title: string) => {
        console.log(`Story ${storyId} completed with modified content:`, modifiedContent);
        // Navigate to the StoryDetails page with the modified content
        router.push(`/story/${encodeURIComponent(title)}/details?content=${encodeURIComponent(modifiedContent)}`);
    };

    if (!story) {
        return <Container><Title>Story not found</Title></Container>;
    }

    return (
        <Container>
            <StoryForm story={story} onSubmit={handleStoryComplete} />
        </Container>
    );
}