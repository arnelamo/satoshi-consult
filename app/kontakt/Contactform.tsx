"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Section } from "@/components/Section";
import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Paths } from "@/lib/configs";

// FIX NEW
export const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
export const emailJsContactTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const formSchema = z.object({
  firstName: z.string().trim().min(2, { message: "Fornavn er påkvrevd" }).max(50),
  lastName: z.string().trim().min(2, { message: "Etternavn er påkvrevd" }).max(50),
  email: z.string({ required_error: "Ikke gyldig e-postadresse" }).email(),
  phone: z.string().min(8).max(15),
  message: z.string().min(10).max(500),
});

export function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();

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
    try {
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
    <Section maxWidth="xl">
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
