import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={20}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'red', to: 'orange' }}>
          Alma's Mad Libs
        </Text>
      </Title>
    </>
  );
}
