'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRightIcon, GithubIcon, LinkedinIcon, TwitterIcon, Twitter, Send } from "lucide-react"

const fixedHeightCardClass = "h-[280px] flex flex-col"
const fixedHeightCardContentClass = "flex-grow overflow-y-auto"

export default function LandingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Now modify your LandingPage component's handleSubmit function:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true); // Add this state to show loading state

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    alert('Message sent successfully!');
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Hi, I am Jaswinder</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8 space-y-16">
        <div className="grid md:grid-cols-2 gap-8">
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-blue-800 border-b-2 border-blue-300 pb-2">Current Explorations</h2>
            
            <Card className={`transition-all duration-300 hover:shadow-xl bg-white ${fixedHeightCardClass}`}>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">DirectTransfer: Simplified USDC Transfers</CardTitle>
                <CardDescription>Streamlining NEAR to ETH USDC transfers</CardDescription>
              </CardHeader>
              <CardContent className={fixedHeightCardContentClass}>
                <p className="text-gray-600 mb-4">
                  DirectTransfer simplifies the process of transferring USDC from NEAR to Ethereum. 
                  Unlike the complex Rainbow bridge, our solution offers a straightforward, 
                  easy-to-understand process that removes the fear and uncertainty from cross-chain transfers.
                </p>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full" variant="outline" onClick={scrollToContact}>
                  More Info <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 hover:shadow-xl bg-white ${fixedHeightCardClass}`}>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">DeFi on Litecoin</CardTitle>
                <CardDescription>Bringing advanced DeFi capabilities to Litecoin</CardDescription>
              </CardHeader>
              <CardContent className={fixedHeightCardContentClass}>
                <p className="text-gray-600 mb-4">
                Leveraging the stability of Litecoin, we’re introducing advanced DeFi tools powered by Chain Signatures. Our platform enables a multichain account system, smart-contracted Proof of Reserves, and robust liquidity pools with oracle integration, paving the way for seamless, secure financial services on Litecoin. This project is a step toward building a trusted, decentralized financial future on Litecoin. </p>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full" variant="outline" onClick={scrollToContact}>
                  More Info <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-blue-800 border-b-2 border-blue-300 pb-2">Working</h2>
            
            <Card className={`transition-all duration-300 hover:shadow-xl bg-white ${fixedHeightCardClass}`}>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">Developer at NEAR Builders</CardTitle>
                <CardDescription>Building the future of decentralized applications</CardDescription>
              </CardHeader>
              <CardContent className={fixedHeightCardContentClass}>
                <p className="text-gray-600">
                  As a developer at NEAR Builders, I contribute to the growth and development of the NEAR ecosystem. 
                  My work involves creating innovative solutions and tools that empower developers and users within 
                  the NEAR blockchain community.
                </p>
              </CardContent>
            </Card>

            <Card className={`transition-all duration-300 hover:shadow-xl bg-white ${fixedHeightCardClass}`}>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700">Rust Developer on Catalyze</CardTitle>
                <CardDescription>A web3 app for communities</CardDescription>
              </CardHeader>
              <CardContent className={fixedHeightCardContentClass}>
                <p className="text-gray-600">
                  At Catalyze, I leverage my Rust programming skills to build robust and efficient backend systems 
                  for our web3 community platform. My role involves developing smart contracts and implementing 
                  decentralized features that enhance user engagement and community management.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        <section id="contact-form" className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Let's Connect!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</Button>
          </form>
        </section>

        <footer className="text-center space-y-4">
          <p className="text-blue-700">Connect with me</p>
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com/jassification" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:text-blue-500">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              </a>
              <a href="https://t.me/allcoolhandlestaken" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:text-blue-500">
                <Send className="h-4 w-4" />
                <span className="sr-only">Telegram</span>
              </Button>
              </a>
            </div>
        </footer>
      </main>
    </div>
  )
}