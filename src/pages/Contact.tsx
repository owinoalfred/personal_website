
import { useState } from "react";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Clock, Users, MessageSquare, Badge } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
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
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@owinoalfred.me",
      href: "mailto:contact@owinoalfred.me",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+256 701 330 920",
      href: "tel:+256701330920",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Kampala, Uganda",
      href: "https://maps.google.com/?q=Kampala,Uganda",
    },
  ];

  const socialLinks = [
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://twitter.com/hakimurah_",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alfredowino",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/owinoalfred",
    },
  ];

  const statistics = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      value: "24/7",
      label: "Response Time",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      value: "100+",
      label: "Happy Clients",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      value: "5+ Years",
      label: "Experience",
    },
    {
      icon: <Badge className="h-8 w-8 text-orange-500" />,
      value: "50+",
      label: "Projects Completed",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-100">
            Have a question or want to work together? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-lg space-y-6 animate-fade-up">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent/10 transition-colors"
                  >
                    <div className="text-accent">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg animate-fade-up delay-100">
              <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-accent/10 transition-colors"
                    aria-label={social.label}
                  >
                    <div className="text-accent">{social.icon}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Best Time to Contact */}
            <div className="glass-card p-6 rounded-lg animate-fade-up delay-200">
              <h2 className="text-2xl font-semibold mb-4">Best Time to Contact</h2>
              <div className="space-y-3">
                <p className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM (EAT)</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 rounded-lg animate-fade-up delay-200">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
