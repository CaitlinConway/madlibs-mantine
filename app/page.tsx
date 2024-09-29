import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { TableScrollArea } from '@/components/TableScrollArea/TableScrollArea';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <TableScrollArea />
      <ColorSchemeToggle />
    </>
  );
}
