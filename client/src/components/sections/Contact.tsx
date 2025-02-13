import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Your message has been sent!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Name"
                    {...form.register("name")}
                    error={form.formState.errors.name?.message}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...form.register("email")}
                    error={form.formState.errors.email?.message}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    {...form.register("message")}
                    error={form.formState.errors.message?.message}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a
                  href="#linkedin"
                  className="flex items-center gap-2 text-lg hover:text-primary"
                >
                  <SiLinkedin className="w-6 h-6" />
                  LinkedIn
                </a>
                <a
                  href="#github"
                  className="flex items-center gap-2 text-lg hover:text-primary"
                >
                  <SiGithub className="w-6 h-6" />
                  GitHub
                </a>
                <a
                  href="#whatsapp"
                  className="flex items-center gap-2 text-lg hover:text-primary"
                >
                  <SiWhatsapp className="w-6 h-6" />
                  WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
