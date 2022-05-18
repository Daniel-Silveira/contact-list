import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: #00000070;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

export const Container = styled(motion.div)`
  background: #2c394b;
  border-radius: 16px;
  padding: 1em;
  box-sizing: border-box;
  height: 60%;
  width: 50%;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid #636e7250;
  margin-bottom: 2em;
`;

export const Title = styled.h1`
  font-size: 1.4em;
  color: #ff0075;
`;
