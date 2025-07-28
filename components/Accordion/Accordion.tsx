import React, { useState } from 'react';
import { AccordionProps } from './AccordionTypes';
import {
  AccordionWrapper,
  AccordionHeader,
  AccordionItemWrapper,
  AccordionContent,
} from './Accordion.styles';

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple,
}) => {
  const defaultOpenState = allowMultiple ? [] : '';
  const [openItems, setOpenItems] = useState<string[] | string>(
    defaultOpenState
  );
  const toggleOpenItems = (id: string) => {
    if (allowMultiple) {
      setOpenItems(prevState => {
        const currentArray = Array.isArray(prevState) ? prevState : [];
        if (currentArray.includes(id)) {
          return currentArray.filter(item => item !== id);
        }
        return [...currentArray, id];
      });
    } else {
      setOpenItems(prevState => (prevState === id ? '' : id));
    }
  };
  return (
    <AccordionWrapper>
      {items &&
        items?.length > 0 &&
        items?.map(item => {
          return (
            <AccordionItemWrapper key={item.id}>
              <AccordionHeader
                onClick={() => {
                  toggleOpenItems(item?.id);
                }}
              >
                {item?.title}
              </AccordionHeader>
              {openItems?.includes(item?.id) && (
                <AccordionContent>{item?.content}</AccordionContent>
              )}
            </AccordionItemWrapper>
          );
        })}
    </AccordionWrapper>
  );
};
