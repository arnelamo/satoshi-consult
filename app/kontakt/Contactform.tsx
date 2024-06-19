"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Section } from "@/components/Section";
import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Paths } from "@/lib/configs";
import { cn, convertDateToNorwegian, getCalendarPropsData } from "@/lib/utils";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";

// FIX NEW
const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const emailJsContactTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const availableTimes = [
  { label: "08:00-08:30", value: "08:00-08:30" },
  { label: "08:30-09:00", value: "08:30-09:00" },
  { label: "09:00-09:30", value: "09:00-09:30" },
  { label: "09:30-10:00", value: "09:30-10:00" },
  { label: "10:00-10:30", value: "10:00-10:30" },
  { label: "10:30-11:00", value: "10:30-11:00" },
  { label: "11:00-11:30", value: "11:00-11:30" },
  { label: "11:30-12:00", value: "11:30-12:00" },
  { label: "12:00-12:30", value: "12:00-12:30" },
  { label: "12:30-13:00", value: "12:30-13:00" },
  { label: "13:00-13:30", value: "13:00-13:30" },
  { label: "13:30-14:00", value: "13:30-14:00" },
  { label: "14:00-14:30", value: "14:00-14:30" },
  { label: "14:30-15:00", value: "14:30-15:00" },
  { label: "15:00-15:30", value: "15:00-15:30" },
  { label: "15:30-16:00", value: "15:30-16:00" },
];

const formSchema = z
  .object({
    firstName: z.string().trim().min(2, { message: "Fornavn er påkvrevd" }).max(50),
    lastName: z.string().trim().min(2, { message: "Etternavn er påkvrevd" }).max(50),
    email: z.string({ required_error: "Ikke gyldig e-postadresse" }).email(),
    phone: z.string().min(8).max(15),
    message: z.string().min(10).max(500),
    meetingDate: z.date().min(new Date(), { message: "Leveringsdato må være i fremtiden" }),
    meetingTime: z.string(),
  })
  .refine((data) => (data.meetingDate ? data.meetingTime !== undefined : true), {
    message: "Hvis leveringsdato er satt, må også leveringstid være satt",
    path: ["deliveryTime"],
  });

export function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();
  console.log(emailJsServiceId, emailJsContactTemplateId, emailJsPublicKey);

  // 1. Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const date = convertDateToNorwegian(values.meetingDate.toISOString());
      const formValues = {
        ...values,
        meetingDate: date,
      };
      emailjs.send(emailJsServiceId, emailJsContactTemplateId, values, emailJsPublicKey);
      router.push(`${path}?confirmation`);
    } catch (error) {
      console.log(error);
    } finally {
      toast({
        title: "Email sent successfully ⚡️",
      });
    }
  }

  const ConfirmationMessage = () => (
    <div className="max-w-screen-md py-16 mx-auto space-y-4">
      <Text type="h2">Takk for henvendelsen!</Text>
      <Text>Vi har nå mottatt meldingen din, og kontakter deg snart.</Text>
      <Button variant={"link"} className="p-0">
        <Link href={Paths.HOME}>Tilbake til forsiden</Link>
      </Button>
    </div>
  );

  // return searchParams.has("confirmation") ? <ConfirmationMessage /> : <FormComponent />;
  return searchParams.has("confirmation") ? (
    <ConfirmationMessage />
  ) : (
    <Section maxWidth="3xl" verticalPadding="small">
      <div className="space-y-4 mb-8">
        <Text type="h2">La oss høre fra deg</Text>
        <Text>
          Fyll ut kontaktskjemaet, så tar vi kontakt for å skreddersy løsninger som passer akkurat
          dine behov. Ikke vent – ta det første steget mot en tryggere og mer lønnsom
          bitcoin-fremtid i dag!
        </Text>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 w-full">
          <div className="grid md:grid-cols-2 gap-2 md:gap-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fornavn</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Etternavn</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-2 md:gap-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-post</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="meetingDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ønsket møtedato</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "d. MMMM, yyyy", { locale: nb })
                          ) : (
                            <span>Velg dato</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        showOutsideDays
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        initialFocus
                        locale={nb}
                        toMonth={getCalendarPropsData().toMonth}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="meetingTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tidsvindu</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Velg tidspunkt" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableTimes.map((time) => (
                        <SelectItem key={time.value} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Melding</FormLabel>
                <FormControl>
                  <Textarea {...field} required rows={5} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">SEND</Button>
        </form>
      </Form>
      {/* </div> */}
    </Section>
  );
}
