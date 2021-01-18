import { motion } from 'framer-motion';
import {
  Circle,
  Container,
  Square,
  Sector,
  LeftBottom,
  TopRight,
  TopLeft,
} from './styles';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fly = {
  hidden: {
    opacity: 0,
    y: 100,
    x: 250,
  },
  visible: {
    opacity: 1,
    y: -240,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
};

const pulse = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -240,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: -240,
    transition: {
      delay: 0.7,
      duration: 0.4,
    },
  },
};

const SatelliteFigure = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Container>
        <Square />
        <motion.div variants={fly}>
          <Circle />
        </motion.div>
        <motion.div variants={pulse}>
          <LeftBottom>
            <Sector color="#5FAF52" />
            <Sector color="#5FAF52" />
          </LeftBottom>
        </motion.div>
        <motion.div variants={pulse}>
          <TopLeft>
            <Sector color="#FEB251" />
            <Sector color="#FEB251" />
          </TopLeft>
        </motion.div>
        <motion.div variants={pulse}>
          <TopRight>
            <Sector color="#2F8ED9" />
            <Sector color="#2F8ED9" />
          </TopRight>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default SatelliteFigure;
