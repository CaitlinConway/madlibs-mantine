'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Container, Title } from '@mantine/core';
import { StoryForm } from '../StoryForm/StoryForm';
import { stories } from '../../test-utils/constants';
import { Header } from '../Header/Header';

interface Story {
    title: string;
    content: string;
    author: string;
}

export function StoryPage() {
    const params = useParams();
    const router = useRouter();
    const title = params.title as string;

    const story = stories.find(s => s.title === decodeURIComponent(title)) as Story | undefined;

    const handleStoryComplete = (modifiedContent: string, title: string) => {
        console.log(`Story completed with modified content:`, modifiedContent);
        router.push(`/story/${encodeURIComponent(title)}/details?content=${encodeURIComponent(modifiedContent)}`);
    };

    if (!story) {
        return <Container><Title>Story not found</Title></Container>;
    }

    return (
        <>
            <Header />
            <Container>
                <StoryForm story={story} onSubmit={handleStoryComplete} />
            </Container>
        </>
    );
}