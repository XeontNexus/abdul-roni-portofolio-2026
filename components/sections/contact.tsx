"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { z } from "zod";
import { Container, SectionHeading } from "../shared";
import { Button } from "../ui/button";
import { AlertCircle, CheckCircle, Loader2, Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");

    try {
      // Using Formspree for form submission
      const response = await fetch("https://formspree.io/f/mwpedorb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _subject: `New Portfolio Contact: ${data.subject}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <Container id="contact">
      <div className="relative max-w-2xl mx-auto">
        <SectionHeading
          title="Let's Connect"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        {/* Contact Icons & CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 mb-12"
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:abdulroni0616@gmail.com"
              className="group relative p-4 rounded-full border border-border hover:border-accent/50 transition-all hover:bg-accent/5"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Email
              </span>
            </a>
            <a
              href="https://linkedin.com/in/abdul-roni-872106252"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border border-border hover:border-accent/50 transition-all hover:bg-accent/5"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/XeontNexus"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border border-border hover:border-accent/50 transition-all hover:bg-accent/5"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GitHub
              </span>
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full border border-border hover:border-accent/50 transition-all hover:bg-accent/5"
              aria-label="LINE"
            >
              <MessageCircle className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LINE
              </span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 p-6 md:p-8 rounded-lg border border-border bg-card hover:border-accent/50 transition-all"
        >
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name")}
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border hover:border-accent/50 focus:border-accent outline-none transition-colors text-foreground placeholder-muted-foreground"
            />
            {errors.name && (
              <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border hover:border-accent/50 focus:border-accent outline-none transition-colors text-foreground placeholder-muted-foreground"
            />
            {errors.email && (
              <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project inquiry, collaboration, etc."
              {...register("subject")}
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border hover:border-accent/50 focus:border-accent outline-none transition-colors text-foreground placeholder-muted-foreground"
            />
            {errors.subject && (
              <p className="text-xs text-destructive mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project or inquiry..."
              rows={5}
              {...register("message")}
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border hover:border-accent/50 focus:border-accent outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-400">
                Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-gap-3">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
              <p className="text-sm text-destructive">{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="accent"
            className="w-full"
            disabled={submitStatus === "loading"}
          >
            {submitStatus === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            I typically respond within 24 hours.
          </p>
        </motion.form>
      </div>
    </Container>
  );
}
