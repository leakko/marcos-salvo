import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { facts } from '@/data/facts';

export default function Facts() {
  return (
    <div className={cn('sm:text-2xl text-sm font-semibold')}>
      <div>
        <h2 className={cn('text-primary-200')}>Quick facts.</h2>
        <Accordion type="single" collapsible>
          {
                facts.map((fact) => (
                  <AccordionItem value={fact.title}>
                    <AccordionTrigger><span className={cn('font-semibold')}>{ fact.title }</span></AccordionTrigger>
                    <AccordionContent><span className={cn('font-normal')}>{ fact.description }</span></AccordionContent>
                  </AccordionItem>
                ))
            }
        </Accordion>
      </div>
    </div>
  );
}
