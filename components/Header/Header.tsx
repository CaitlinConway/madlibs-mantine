import React from 'react';
import { Button, Container, Group, Title, Box } from '@mantine/core';
import { useRouter } from 'next/navigation';

export function Header() {
    const router = useRouter();

    const handleBackToStories = () => {
        router.push('/');
    };

    return (
        <Box bg="gray.1" py="md" mb="xl">
            <Container>
                <Group justify="space-between" align="center">
                    <Title order={2} c="blue">Alma's Mad Libs</Title>
                    <Button onClick={handleBackToStories} variant="outline">Back to Stories</Button>
                </Group>
            </Container>
        </Box>
    );
}
