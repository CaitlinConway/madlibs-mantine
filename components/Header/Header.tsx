import React from 'react';
import { Button, Container, Group, Title, Box, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { IconPumpkinScary } from '@tabler/icons-react';

export function Header() {
    const router = useRouter();

    const handleBackToStories = () => {
        router.push('/');
    };

    return (
        <Box bg="orange.9" py="md" mb="xl">
            <Container>
                <Group justify="space-between" align="center">
                    <Group>
                        <IconPumpkinScary size={32} color="black" />
                        <Title order={2} c="black">Alma's Spooky Mad Libs</Title>
                    </Group>
                    <Button
                        onClick={handleBackToStories}
                        variant="filled"
                        color="gray.9"
                        leftSection={<Text size="xl">🕸️</Text>}
                    >
                        Back to Haunted Stories
                    </Button>
                </Group>
            </Container>
        </Box>
    );
}
