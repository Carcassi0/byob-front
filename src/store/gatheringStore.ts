import { create } from 'zustand';

interface gatheringStore {
    name: string;
    size: number;
    location: string;
    date: string;
    description: string;
    coverImage: File | null;
    deposit: number;
    termAgreed: boolean;
    setName: (name: string) => void;
    setSize: (size: number) => void;
    setLocation: (name: string) => void;
    setDate: (name: string) => void;
    setDescription: (name: string) => void;
    setCoverImage: (name: File | null) => void;
    setDeposit: (name: number) => void;
    setTermAgreed: (name: boolean) => void;
}

const useGateringStore = create<gatheringStore>((set) => ({
    name: '',
    size: 0,
    location: '',
    date: '',
    description: '',
    coverImage: null,
    deposit: 30000,
    termAgreed: false,
    setName: (eventName) => set({ name: eventName }),
    setSize: (eventSize) => set({ size: eventSize }),
    setLocation: (eventLocation) => set({ location: eventLocation }),
    setDate: (eventDate) => set({ date: eventDate }),
    setDescription: (eventDescription) => set({ description: eventDescription }),
    setCoverImage: (eventCoverImage) => set({ coverImage: eventCoverImage }),
    setDeposit: (eventDeposit) => set({ deposit: eventDeposit }),
    setTermAgreed: (eventTermAgreed) => set({ termAgreed: eventTermAgreed }),
}));

export default useGateringStore;
