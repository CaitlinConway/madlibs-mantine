import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { TableScrollArea } from '@/components/TableScrollArea/TableScrollArea';
import { Box } from '@mantine/core';

export default function HomePage() {
  return (
    <Box style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Welcome />
      <TableScrollArea />
      <Box style={{ marginTop: 'auto', padding: '20px' }}>
        <ColorSchemeToggle />
      </Box>
    </Box>
  );
}
