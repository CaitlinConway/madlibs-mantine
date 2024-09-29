'use client';

import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
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

    const rows = data.map((row) => (
        <Table.Tr key={row.title}>
            <Table.Td>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleTitleClick(row);
                    }}
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                    {row.title}
                </a>
            </Table.Td>
            <Table.Td>{row.author}</Table.Td>
            <Table.Td>{row.year}</Table.Td>
        </Table.Tr>
    ));

    if (selectedStory) {
        return <StoryForm story={selectedStory} />;
    }

    return (
        <ScrollArea h={300} miw={200} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table miw={700} horizontalSpacing="xl" striped highlightOnHover>
                <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                    <Table.Tr>
                        <Table.Th>Title</Table.Th>
                        <Table.Th>Author</Table.Th>
                        <Table.Th>Year</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}
