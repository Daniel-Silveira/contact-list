import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Card = styled(motion.div)`
  background: #082032;
  border-radius: 8px;
  padding: 0.5em;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.7em 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 0.5em;
`;

export const Wrapper = styled.div`
  width: ${({ width }: { width: string }) => width};
  margin: 0 0.5em;
  display: flex;
  align-items: center;
`;

export const WrapperAction = styled.div`
  width: 7%;
  margin: 0 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: #636e72;
`;
