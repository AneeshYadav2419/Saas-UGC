import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: ' Drag & drop your assets. We auto-optimize formats and sizes'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generationt',
        desc: 'Optimized models deliver output in seconds with great fidelity.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with short-form, social-ready videos.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25 ,
        features: [
            '25 credits',
            'Standard quality',
            'No Watermark',
            'Slower generation speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'pro',
        price: '$29',
        desc: 'Creators & small teams',
        credits: 80,
        features: [
            '80 Credits',
            'HD quality',
            'No watermark',
            'Video Generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'ultra',
        price: '$99',
        desc: 'Scale across teams and agencies',
        credits: 300,
        features: [
             '300 Credits',
            'FHD quality',
            'No watermark',
            'Fast generation speed',
            'Chat + Email Support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work?',
        answer: 'AI generation works by learning patterns from large amounts of data and then using those patterns to predict and create new content (like text, images, or code).'
    },
    {
        question: 'Can I cancel anything  ?',
        answer: 'Yes, you can cancel, but it depends on what you want to cancel.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes — you generally own the images generated for you, including the right to use them for personal or commercial purposes.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We accept JPG, PNG and WEBP. Outputs are High-resolution PNGs anD MP4s optimized for social platforms'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];