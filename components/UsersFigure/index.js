import Face from 'public/icons/face.svg';
import { motion } from 'framer-motion';
import { Container, Square, Block, Circle } from './styles';

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

const rotate = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 360,
    transition: {
      delay: 0.3,
      duration: 0.6,
    },
  },
};

const appear = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const UsersFigure = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={shape}>
          <Square />
          <motion.div variants={appear}>
            <Circle color="#FB5235" />
          </motion.div>
          <motion.div variants={rotate}>
            <Block position="left">
              <Face />
            </Block>
          </motion.div>
          <motion.div variants={shape}>
            <Block position="middle-left">
              <Circle color="#2F8ED9" />
              <Circle color="#2F8ED9" />
            </Block>
          </motion.div>
          <motion.div variants={rotate}>
            <Block position="top">
              <Face />
            </Block>
          </motion.div>
          <motion.div variants={shape}>
            <Block position="middle-right">
              <Circle color="#2F8ED9" />
              <Circle color="#2F8ED9" />
            </Block>
          </motion.div>
          <motion.div variants={rotate}>
            <Block position="right">
              <Face />
            </Block>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default UsersFigure;
