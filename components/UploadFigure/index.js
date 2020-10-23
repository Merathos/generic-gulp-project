import { Container, Square, Sector, Block } from './styles';
import SubstructedCircle from 'public/icons/substracted-circle.svg';
import CurvedArrow from 'public/icons/curved-arrow.svg';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const shape = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};

const fly = {
  hidden: {
    opacity: 0,
    y: -100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      loop: 1
    }
  }
};

const pulse = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      loop: 3
    }
  }
};

const UploadFigure = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Container>
        <Sector />
        <Block>
          <motion.div variants={fly}>
            <Square />
          </motion.div>
          <motion.div variants={pulse}>
            <CurvedArrow />
          </motion.div>
          <motion.div variants={shape}>
            <SubstructedCircle />
          </motion.div>
        </Block>
      </Container>
    </motion.div>
  );
};

export default UploadFigure;
