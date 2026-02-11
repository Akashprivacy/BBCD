import { Service, Testimonial, PortfolioItem, VideoItem } from './types.ts';

export const BUSINESS_NAME = "Bhai Bhai Decorators & Caterers";
export const BUSINESS_ADDRESS = "Near Maynaguri, Jalpaiguri, West Bengal";
export const PHONE_NUMBER = "+91 94341 57802";
export const EMAIL = "info@bhaibhaievents.com";

export const SOCIAL_LINKS = {
  justdial: "https://www.justdial.com/Jalpaiguri/Bhai-Bhai-Decorators-Caterers-Pvt-Ltd-Near-Maynaguri/9999P3561-3561-220414114004-P5T8_BZDET",
  facebook: "https://www.facebook.com/bhaibhaidecoratorscaterers/",
  instagram: "https://www.instagram.com/bbdceventplanner/"
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Luxury Wedding Planning',
    description: 'Bespoke wedding management for traditional ceremonies. We bring royal themes to life with exquisite decor and flawless execution.',
    image: 'https://images.unsplash.com/photo-1595967444215-4901e8439907?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Gourmet Catering',
    description: 'A culinary journey through authentic heritage flavors. From traditional feasts to modern banquet spreads, crafted by master chefs.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Thematic Decorations',
    description: 'Transforming venues into dreamlike spaces. Our floral artistry and thematic lighting create the perfect ambiance for your big day.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800'
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Royal Bengali Wedding Highlights',
    category: 'Wedding',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-wedding-ceremony-in-the-forest-41158-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'v2',
    title: 'Grand Buffet Presentation',
    category: 'Catering',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-buffet-dinner-at-a-wedding-party-41159-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce7a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'v3',
    title: 'Floral Decor Walkthrough',
    category: 'Decor',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-at-a-wedding-41160-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1512413919939-b42d6b72d28a?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Mukherjee',
    role: 'Groom',
    content: 'The team was incredibly professional. They handled everything with so much care. The decor surpassed our expectations.',
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    id: '2',
    name: 'Sumitra Das',
    role: 'Mother of the Bride',
    content: 'Our guests were blown away by the catering and the floral arrangements. Best event planner in the region.',
    avatar: 'https://i.pravatar.cc/150?u=sumitra'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', category: 'Wedding', image: 'https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?auto=format&fit=crop&q=80&w=800', title: 'Royal Reception' },
  { id: '2', category: 'Decor', image: 'https://images.unsplash.com/photo-1512413919939-b42d6b72d28a?auto=format&fit=crop&q=80&w=800', title: 'Traditional Ceremonies' },
  { id: '3', category: 'Catering', image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce7a?auto=format&fit=crop&q=80&w=800', title: 'Heritage Feast' },
  { id: '4', category: 'Ritual', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800', title: 'Sacred Rituals' },
  { id: '5', category: 'Gaye Holud', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', title: 'Vibrant Gaye Holud' },
  { id: '6', category: 'Evening', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800', title: 'Magical Lighting' },
];