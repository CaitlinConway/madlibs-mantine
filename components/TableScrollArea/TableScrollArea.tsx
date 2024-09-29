'use client';

import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea, Box } from '@mantine/core';
import classes from './TableScrollArea.module.css';
import { stories } from '@/test-utils/constants';
import { useRouter } from 'next/navigation';
import { StoryForm } from '@/components/StoryForm/StoryForm';

const data = stories;
type Story = typeof stories[0];

export function TableScrollArea() {
    const [scrolled, setScrolled] = useState(false);
    const [selectedStory, setSelectedStory] = useState<Story | null>(null);
    const router = useRouter();

    const handleTitleClick = (story: Story) => {
        setSelectedStory(story);
        router.push(`/story/${encodeURIComponent(story.title)}`);
    };

    const handleStoryComplete = (modifiedContent: string, title: string) => {
        console.log(`Story completed with modified content:`, modifiedContent);
        router.push(`/story/${encodeURIComponent(title)}/details?content=${encodeURIComponent(modifiedContent)}`);
    };

    const rows = data.map((row) => (
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
        <Box className={classes.tableWrapper}>
            <ScrollArea className={classes.scrollArea} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table className={classes.table}>
                    <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <Table.Tr>
                            <Table.Th>Spooky Title</Table.Th>
                            <Table.Th>Ghostly Author</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </ScrollArea>
        </Box>
    );
}
