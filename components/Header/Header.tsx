'use client';

import React from 'react';
import { Container, Group, Title, Box, Text } from '@mantine/core';
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
                <Group justify="center" align="center">
                    <Group onClick={handleBackToStories} style={{ cursor: 'pointer' }}>
                        <IconPumpkinScary size={32} color="black" />
                        <Title order={2} c="black">Alma's Spooky Mad Libs</Title>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}
