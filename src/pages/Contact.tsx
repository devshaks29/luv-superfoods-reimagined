import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available at checkout. We ship nationwide!",
  },
  {
    question: "Are your chocolates really raw?",
    answer: "Yes! We use raw cacao that's never heated above 118°F, preserving all the natural enzymes and nutrients. Our chocolates are also sweetened with raw, unprocessed honey.",
  },
  {
    question: "What are adaptogens?",
    answer: "Adaptogens are natural substances that help your body adapt to stress and promote balance. We use adaptogens like reishi, ashwagandha, and lion's mane in our chocolates.",
  },
  {
    question: "Are your products allergy-friendly?",
    answer: "All our products are dairy-free, soy-free, and gluten-free. However, they do contain tree nuts. Please check individual product pages for specific allergen information.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes! We offer complimentary gift wrapping on all orders. Simply select the gift wrap option at checkout and add a personal message.",
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, contact us for a full refund or exchange.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary to-chocolate">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions about our superfood chocolates? We'd love to hear from you! 
              Our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <Button variant="hero" size="lg" type="submit">
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                      <p className="text-muted-foreground">hello@luvsuperfoods.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-5pm CST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">Austin, Texas</p>
                      <p className="text-sm text-muted-foreground mt-1">Handcrafted in the heart of TX</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-muted/50 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-5 h-5 text-secondary" />
                    <h4 className="font-semibold text-foreground">Live Chat</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need immediate help? Our customer support team is available via live chat 
                    during business hours.
                  </p>
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground">{faq.question}</span>
                    <span className="text-muted-foreground text-xl">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
