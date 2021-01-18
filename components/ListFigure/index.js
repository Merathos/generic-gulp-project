import { motion } from 'framer-motion';
import { Container, Circle, List, Square, Line } from './styles';

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

const ListFigure = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={shape}>
          <Circle />
        </motion.div>
        <List>
          {[Square, Line, Square, Line, Square, Line].map(
            (Component, index) => (
              <motion.div variants={shape} key={index}>
                <Component />
              </motion.div>
            )
          )}
        </List>
      </Container>
    </motion.div>
  );
};

export default ListFigure;
