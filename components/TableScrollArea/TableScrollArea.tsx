'use client';

import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea, Box, UnstyledButton, Group, Text, Center } from '@mantine/core';
import { IconChevronUp, IconChevronDown, IconSelector } from '@tabler/icons-react';
import classes from './TableScrollArea.module.css';
import { stories } from '@/test-utils/constants';
import { useRouter } from 'next/navigation';
import { StoryForm } from '@/components/StoryForm/StoryForm';

const data = stories;
type Story = typeof stories[0];

// New type for sort state
type SortState = {
    field: keyof Story;
    direction: 'asc' | 'desc';
} | null;

export function TableScrollArea() {
    const [scrolled, setScrolled] = useState(false);
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);
    const [sortState, setSortState] = useState<SortState>(null);
    const router = useRouter();

    const handleTitleClick = (story: Story) => {
        setSelectedStory(story);
        router.push(`/story/${encodeURIComponent(story.title)}`);
    };

    const handleStoryComplete = (modifiedContent: string, title: string) => {
        console.log(`Story completed with modified content:`, modifiedContent);
        router.push(`/story/${encodeURIComponent(title)}/details?content=${encodeURIComponent(modifiedContent)}`);
    };

    // New sorting function
    const sortedData = [...data].sort((a, b) => {
        if (!sortState) return 0;
        const { field, direction } = sortState;
        const modifier = direction === 'asc' ? 1 : -1;
        return a[field].localeCompare(b[field]) * modifier;
    });

    // New function to handle sorting
    const handleSort = (field: keyof Story) => {
        setSortState((current) => {
            if (current?.field === field) {
                return { field, direction: current.direction === 'asc' ? 'desc' : 'asc' };
            }
            return { field, direction: 'asc' };
        });
    };

    // New component for sortable header
    function Th({ children, field }: { children: React.ReactNode; field: keyof Story }) {
        const Icon = sortState?.field === field
            ? sortState.direction === 'asc'
                ? IconChevronUp
                : IconChevronDown
            : IconSelector;
        return (
            <Table.Th className={classes.th}>
                <UnstyledButton onClick={() => handleSort(field)} className={classes.control}>
                    <Group justify="space-between" wrap="nowrap">
                        <Text fw={500} size="sm" className={classes.thText}>
                            {children}
                        </Text>
                        <Center className={classes.icon}>
                            <Icon size="0.9rem" stroke={1.5} />
                        </Center>
                    </Group>
                </UnstyledButton>
            </Table.Th>
        );
    }

    const rows = sortedData.map((row) => (
        <Table.Tr key={row.title} className={classes.tableRow}>
            <Table.Td>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleTitleClick(row);
                    }}
                    className={classes.storyLink}
                >
                    {row.title}
                </a>
            </Table.Td>
            <Table.Td>{row.author}</Table.Td>
        </Table.Tr>
    ));

    if (selectedStory) {
        return <StoryForm story={selectedStory} onSubmit={handleStoryComplete} />;
    }

    return (
        <Box className={classes.tableWrapper} style={{ height: '100%' }}>
            <ScrollArea className={classes.scrollArea} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table className={classes.table}>
                    <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <Table.Tr>
                            <Th field="title">Sinister Tale</Th>
                            <Th field="author">Ghostly Author</Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </ScrollArea>
        </Box>
    );
}
