import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSending, setIsSending] = useState(false);
    const [lastSent, setLastSent] = useState(0);

    const handleChange = (e) =>{
        const {name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (e.target.website?.value !== "") {
            console.warn("Bot detected. Submission blocked.");
            return;
        }

        const now = Date.now();
        if (now - lastSent < 15000) {
            toast.error("Please wait before sending another message.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Enter a valid email address.");
        return;
        }
        
        if (formData.name.trim().length < 2) {
            toast.error("Please enter your name.");
            return;
        }

        if (formData.message.trim().length < 3) {
            toast.error("Please atleast one word in your message.");
            return;
        }

        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID,
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY).then((result) => 
        {
            setLastSent(now);
            toast.success("Andreas fick meddelandet!");
            console.log(result.status);//todo
            
            e.target.reset();
            setFormData({name: "", email: "", message: ""});

        })
        .catch(() => {
            setLastSent(now);
            toast.error("Tillfälligt problem med mailtjänsten!")
        })
        .finally(()=>{setIsSending(false)});
    }

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="bg-black px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Hör av dig
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="website" className="hidden" autoComplete="off" />
                <div className="relative">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Name..."
                    onChange={handleChange}  
                />
                </div>  

                <div className="relative">
                    <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                />
                </div>

                <div className="relative">
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Your Message..."
                    onChange={handleChange}
                    />
                </div>
                <button type="submit" disabled={isSending}
                    className={`w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden ${
                        isSending ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                    }`}
                >
                    {isSending ? "Skickar..." : "Skicka meddelande"}
                </button>
            </form>
            </div>
            </RevealOnScroll>
        </section>
    );
}