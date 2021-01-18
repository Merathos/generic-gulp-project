import { motion } from 'framer-motion';
import { Block, Container, Sector, Square, Circle, Group } from './styles';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const shape = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const pulse = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.4,
      loop: 2,
    },
  },
};

const dot = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const IterationsFigure = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Container>
        <Sector />
        <motion.div variants={shape}>
          <Block>
            <Circle position="middle" />
            <motion.div variants={pulse}>
              <Square color="#5FAF52" />
            </motion.div>
            <motion.div variants={pulse}>
              <Square color="#2F8ED9" />
            </motion.div>
            <motion.div variants={pulse}>
              <Square color="#FEB251" />
            </motion.div>
            <motion.div variants={dot}>
              <Circle size="small" state="single" />
            </motion.div>
            <motion.div variants={dot}>
              <Group position="top">
                <Circle size="small" />
                <Circle size="small" />
              </Group>
            </motion.div>
            <motion.div variants={dot}>
              <Group position="bottom">
                <Circle size="small" />
                <Circle size="small" />
              </Group>
            </motion.div>
          </Block>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default IterationsFigure;
