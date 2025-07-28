interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItem[];
  /** Allow multiple items to be open at once */
  allowMultiple?: boolean;
}

export type { AccordionItem, AccordionProps }