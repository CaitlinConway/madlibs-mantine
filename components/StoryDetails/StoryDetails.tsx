import { Text, Title } from '@mantine/core';

interface StoryDetailsProps {
    title: string;
    author: string;
    content: string;
}

export function StoryDetails({ title, author, content }: StoryDetailsProps) {
    return (
        <div>
            <Title order={1}>{title}</Title>
            <Text size="lg" mb="md">By {author}</Text>
            <Text>{content}</Text>
        </div>
    );
}