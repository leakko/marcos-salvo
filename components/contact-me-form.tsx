'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { formSchema } from '@/models/form.schema';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export function ContactMeForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-2', 'w-full', 'lg:space-y-4')}>
        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl className={cn('text-black')}>
                <Input placeholder="Jhon Doe" {...field} />
              </FormControl>
              <FormDescription>
                This is your name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl className={cn('text-black')}>
                <Input placeholder="jhon-doe@gmail.com" {...field} />
              </FormControl>
              <FormDescription>
                This is your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className={cn('flex flex-col')}>
              <FormLabel>Message</FormLabel>
              <FormControl className={cn('text-black')}>
                <textarea placeholder="Hello Marcos, I would like to tell you about..." {...field} className={cn('h-40 lg:h-20 rounded p-2 text-sm text-black')} />
              </FormControl>
              <FormDescription>
                This is your message to me.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={cn('flex justify-center')}>
          <Button type="submit" variant="secondary">Send email</Button>
        </div>
      </form>
    </Form>
  );
}
