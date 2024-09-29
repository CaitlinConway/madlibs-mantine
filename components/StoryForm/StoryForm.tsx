import React, { useState, useEffect } from 'react';
import { TextInput, Button, Title, Box, Stack } from '@mantine/core';
import { extractBracketedWords, replaceBracketedWords } from '../../test-utils/wordHelper';

interface Story {
    title: string;
    content: string;
    author: string;
}

interface StoryFormProps {
    story: Story;
    onSubmit: (modifiedContent: string, title: string) => void;
}

export function StoryForm({ story, onSubmit }: StoryFormProps) {
    const [extractedWords, setExtractedWords] = useState<string[]>([]);
    const [replacements, setReplacements] = useState<Record<string, string>>({});

    useEffect(() => {
        const words = extractBracketedWords(story.content);
        setExtractedWords(words);
        const initialReplacements = words.reduce((acc, word, index) => {
            const key = `${word}_${index}`;
            return { ...acc, [key]: '' };
        }, {});
        setReplacements(initialReplacements);
    }, [story.content]);

    const handleInputChange = (key: string, value: string) => {
        setReplacements(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const replacementArray = extractedWords.map((word, index) => {
            const replacement = replacements[`${word}_${index}`];
            return replacement || `[${word}]`; // Use original word if no replacement
        });
        const modifiedContent = replaceBracketedWords(story.content, replacementArray);
        onSubmit(modifiedContent, story.title);
    };

    return (
        <Box>
            <Title order={2} mb="md">{story.title}</Title>
            <form onSubmit={handleSubmit}>
                <Stack>
                    {extractedWords.map((word, index) => {
                        const key = `${word}_${index}`;
                        return (
                            <TextInput
                                key={key}
                                label={`${word}`}
                                placeholder={`Enter replacement for ${word}`}
                                value={replacements[key]}
                                onChange={(e) => handleInputChange(key, e.target.value)}
                            />
                        );
                    })}
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </Box>
    );
}