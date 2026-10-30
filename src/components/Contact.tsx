import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'custom-web',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (val: string) => {
    setFormData(prev => ({ ...prev, service: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API submission
      await new Promise(resolve => setTimeout(resolve, 800));

      toast({
        title: "Message received!",
        description: "Thank you for reaching out. We will get back to you within 24 hours.",
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: 'custom-web',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please check your network connection or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#fafbfc] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Main Combined Card Container */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Peach / Warm Orange Info Panel */}
            <div className="lg:col-span-5 bg-[#fff7ed] p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-orange-100/80">
              <div className="space-y-6">
                <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest bg-orange-100/70 border border-orange-200/70 px-3 py-1 rounded-full inline-block">
                  GET IN TOUCH
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Start Your Project <span className="text-[#f37021]">Today</span>
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Have a project in mind or need expert technical advice? We'd love to hear from you and explore how we can help your business thrive.
                </p>

                {/* Contact List */}
                <div className="space-y-5 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#f37021] flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Email Us</span>
                      <a href="mailto:hello@go-ith.com" className="text-sm font-bold text-slate-900 hover:text-[#f37021] transition-colors">
                        hello@go-ith.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#f37021] flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Call or WhatsApp</span>
                      <a href="tel:+251977896783" className="text-sm font-bold text-slate-900 hover:text-[#f37021] transition-colors">
                        +251 977 896 783 / +251 911 223 344
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#f37021] flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Headquarters</span>
                      <span className="text-sm font-bold text-slate-900 block">
                        Addis Ababa, Ethiopia
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#f37021] flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Office Hours</span>
                      <span className="text-sm font-bold text-slate-900 block">
                        Mon – Fri: 9:00 AM – 6:00 PM (EAT)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="pt-8 border-t border-orange-200/50 mt-8 flex items-center gap-2 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#f37021]" />
                <span>NDA & IP protection guaranteed for all proposals.</span>
              </div>
            </div>

            {/* Right Column: Clean White Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    We've received your inquiry and our engineering team will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-slate-300 mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name <span className="text-[#f37021]">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="h-11 rounded-lg border-slate-200 focus:border-[#f37021] focus:ring-[#f37021]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Work Email <span className="text-[#f37021]">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="h-11 rounded-lg border-slate-200 focus:border-[#f37021] focus:ring-[#f37021]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Service You're Interested In
                    </Label>
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger className="h-11 rounded-lg border-slate-200 focus:border-[#f37021] focus:ring-[#f37021]">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-web">Custom Web & Business Systems</SelectItem>
                        <SelectItem value="maintenance">System Maintenance & Support</SelectItem>
                        <SelectItem value="automation">Process Automation & Integration</SelectItem>
                        <SelectItem value="cloud">Cloud & Infrastructure Solutions</SelectItem>
                        <SelectItem value="ai-data">AI & Data Solutions</SelectItem>
                        <SelectItem value="consulting">Consulting & Digital Strategy</SelectItem>
                        <SelectItem value="other">Other / Custom Project</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Message <span className="text-[#f37021]">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or timeline..."
                      rows={4}
                      required
                      className="rounded-lg border-slate-200 focus:border-[#f37021] focus:ring-[#f37021] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#f37021] hover:bg-[#e06214] text-white font-semibold py-6 text-base rounded-lg shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
