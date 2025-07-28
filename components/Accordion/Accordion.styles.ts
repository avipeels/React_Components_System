import styled from 'styled-components';

const AccordionWrapper = styled.div`
  font-family: 'Verdana', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  width: 1024px;
`;

const AccordionItemWrapper = styled.div`
  margin-bottom: 8px;
  border-radius: 8px;
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  background-color: teal;
  color: white;
`;

const AccordionContent = styled.div`
  padding: 8px;
`;

export {
  AccordionWrapper,
  AccordionHeader,
  AccordionItemWrapper,
  AccordionContent,
};
