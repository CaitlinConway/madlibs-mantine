import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { TableScrollArea } from '@/components/TableScrollArea/TableScrollArea';
import { Box, Flex } from '@mantine/core';

export default function HomePage() {
  return (
    <Flex direction="column" style={{ height: '100vh' }}>
      <Welcome />
      <Box style={{ flex: 1, overflow: 'hidden' }}>
        <TableScrollArea />
      </Box>
      <Box mb="md">
        <ColorSchemeToggle />
      </Box>
    </Flex>
  );
}
