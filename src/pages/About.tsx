import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import chocolateCollection from "@/assets/chocolate-collection.jpg";
import heroChocolate from "@/assets/hero-chocolate.jpg";

const values = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "We source only the finest organic ingredients, ensuring every bite is pure and natural.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each truffle is handcrafted with care, bringing passion and dedication to every creation.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We never compromise on quality, using only the best raw cacao and superfoods available.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We support sustainable farming practices and give back to the communities we work with.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-primary to-chocolate overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-6 border border-primary-foreground/20">
                Our Story
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Crafted with Passion, <span className="text-accent">Powered by Superfoods</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                At Luv Superfoods, we believe that indulgence and wellness should never be mutually exclusive. 
                Our journey began with a simple mission: to create the most delicious, health-conscious 
                chocolates the world has ever tasted.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                  The Beginning
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  From Kitchen Experiments to Superfood Revolution
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  It all started in a small Austin kitchen, where our founder experimented with combining 
                  raw cacao, raw honey, and ancient adaptogens. What began as a personal health journey 
                  quickly became a passion project that friends and family couldn't get enough of.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The word spread, orders came in, and Luv Superfoods was born. Today, we continue to 
                  handcraft each truffle with the same care and dedication as those first batches, using 
                  only the finest organic ingredients sourced from sustainable farms around the world.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every chocolate we create is a labor of love—free from dairy, soy, gluten, and artificial 
                  ingredients. Just pure, powerful superfoods that taste as good as they make you feel.
                </p>
              </div>
              <div className="relative">
                <img
                  src={chocolateCollection}
                  alt="Our chocolate collection"
                  className="w-full rounded-3xl shadow-large"
                />
                <div className="absolute -bottom-8 -left-8 bg-accent text-accent-foreground px-8 py-6 rounded-2xl shadow-gold hidden md:block">
                  <p className="font-serif text-3xl font-bold">2018</p>
                  <p className="text-sm">Founded in Austin, TX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                What We Believe
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
                Our Core Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 text-center hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src={heroChocolate}
                  alt="Our mission"
                  className="w-full rounded-3xl shadow-large"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                  Our Mission
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Nourish. Indulge. Energize.
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We're on a mission to prove that healthy can be absolutely delicious. Our superfood 
                  chocolates are designed to nourish your body, satisfy your sweet tooth, and provide 
                  natural, sustained energy throughout your day.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  By combining the ancient wisdom of adaptogens with the rich, complex flavors of raw 
                  cacao and honey, we've created a treat that's as good for your body as it is for 
                  your soul. No compromise, no guilt—just pure superfood bliss.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/shop">
                    Try Our Chocolates
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Experience the <span className="text-accent">Luv</span>?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of chocolate lovers who have discovered the perfect blend of indulgence and wellness.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/shop">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
