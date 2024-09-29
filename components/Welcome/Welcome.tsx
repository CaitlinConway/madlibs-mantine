import { Text, Title, Box } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Box py="xs">
      <Title className={classes.title} ta="center">
        <Text inherit variant="gradient" component="span" gradient={{ from: 'red', to: 'orange' }}>
          Alma's Mad Libs
        </Text>
      </Title>
    </Box>
  );
}
