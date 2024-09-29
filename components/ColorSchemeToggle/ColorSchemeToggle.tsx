'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')} variant="outline">Light</Button>
      <Button onClick={() => setColorScheme('dark')} variant="outline">Dark</Button>
      <Button onClick={() => setColorScheme('auto')} variant="outline">Auto</Button>
    </Group>
  );
}
