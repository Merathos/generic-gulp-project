import Star from 'public/icons/star.svg';
import { motion } from 'framer-motion';
import { Container, Square, Block, Clock, Arrow, Flare } from './styles';

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

const blow = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
};

const fly = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: -160,
    transition: {
      duration: 0.8,
    },
  },
};

const ClockFigure = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Container>
        <motion.div variants={shape}>
          <Square />
        </motion.div>
        <motion.div variants={shape}>
          <Block>
            <motion.div variants={blow}>
              <Clock />
            </motion.div>
            <Arrow />
            <Arrow />
            <motion.div variants={fly}>
              <Flare>
                <Star />
              </Flare>
            </motion.div>
          </Block>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default ClockFigure;
