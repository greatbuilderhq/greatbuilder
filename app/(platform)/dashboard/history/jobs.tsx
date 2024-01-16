"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { CalendarDateRangePicker } from "../components/date-range-picker"
import { Textarea } from "@/components/ui/textarea"

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const



const JobFormSchema = z.object({
  role: z
    .string()
    .min(2, {
      message: "Job Role must be at least 2 characters.",
    })
    .max(30, {
      message: "Job Role must not be longer than 30 characters.",
    }),
  experience: z.string({
    required_error: "Please select years of experience",
  }),
  location: z.string({
    required_error: "Please select a work setting.",
  }),
  terms: z
    .string()
    .max(1024, {
      message: "Terms must not be longer than 1024 characters.",
    }).optional(),
  benefits: z
    .string()
    .max(1024, {
      message: "Terms must not be longer than 1024 characters.",
    }).optional(),
})

type JobFormValues = z.infer<typeof JobFormSchema>

// This can come from your database or API.
const defaultValues: Partial<JobFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export function JobForm() {
  const form = useForm<JobFormValues>({
    resolver: zodResolver(JobFormSchema),
    defaultValues,
  })

  function onSubmit(data: JobFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Role</FormLabel>
              <FormControl>
                <Input placeholder="Type the Job Role" {...field} />
              </FormControl>
              <FormDescription>
                This will be the job role which is required to be hired
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years of Experience</FormLabel>
              <FormControl>
                <Input placeholder="Type the years of experience" {...field} />
              </FormControl>
              <FormDescription>
                Years of Experience Required for the job role
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Type the location. is it remote/hybrid/WFO along with city and country of the job" {...field} />
              </FormControl>
              <FormDescription>
                Location of the job Required for the job role
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Terms</FormLabel>
              <FormControl>
                <Textarea placeholder="Type the terms of the job" {...field} />
              </FormControl>
              <FormDescription>
                Terms and condition for the job
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="benefits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Benefits</FormLabel>
              <FormControl>
                <Textarea placeholder="Type the benefits of the job" {...field} />
              </FormControl>
              <FormDescription>
                Benefits of the job Required for the job role
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        
        <Button type="submit">Create Job Description</Button>
      </form>
    </Form>
  )
}
