// Kigali Cooker - Seed Data
const SEED_DATA = {
    workers: [
        { id: 'WK001', name: 'Jean Baptiste Mugisha', profession: 'Master Chef', email: 'jean@kigali.com', password: 'password123', skills: ['Catering', 'Cooking', 'Event Planning'], description: 'Professional chef with 10+ years of experience in catering for large events and ceremonies. Specializes in traditional Rwandan cuisine and international dishes.', location: 'Gasabo', rating: 4.9, reviews: 28, verified: true, featured: true, status: 'active', phone: '0789296912', photo: '', conduct: 'Punctual, respectful, and very professional.' },
        { id: 'WK002', name: 'Marie Claire Uwimana', profession: 'Hair Stylist & Beauty Expert', email: 'marie@kigali.com', password: 'password123', skills: ['Hair Styling', 'Beauty Services', 'Makeup'], description: 'Expert in professional hair styling, braiding, and beauty services. Known for transforming clients with modern and traditional styles.', location: 'Kicukiro', rating: 4.8, reviews: 35, verified: true, featured: true, status: 'active', phone: '0789296912', photo: '', conduct: 'Friendly, creative, and detail-oriented.' },
        { id: 'WK003', name: 'Patrick Nshimiyimana', profession: 'Soap & Tofu Maker', email: 'patrick@kigali.com', password: 'password123', skills: ['Soap Making', 'Tofu Making', 'Training'], description: 'Skilled artisan specializing in organic soap production and tofu making. Provides training sessions for aspiring entrepreneurs.', location: 'Nyarugenge', rating: 4.7, reviews: 19, verified: true, featured: true, status: 'active', phone: '0789296912', photo: '', conduct: 'Patient teacher and quality-focused.' },
        { id: 'WK004', name: 'Diane Iradukunda', profession: 'Event Planner & Caterer', email: 'diane@kigali.com', password: 'password123', skills: ['Event Planning', 'Catering', 'Decoration'], description: 'Full-service event planning and catering professional. Expert in weddings, corporate events, and celebrations of all sizes.', location: 'Gasabo', rating: 4.8, reviews: 42, verified: true, featured: true, status: 'active', phone: '0789296912', photo: '', conduct: 'Organized, reliable, and creative.' },
        { id: 'WK005', name: 'Emmanuel Habimana', profession: 'Shopping Assistant', email: 'emmanuel@kigali.com', password: 'password123', skills: ['Shopping Assistance', 'Delivery', 'Market Navigation'], description: 'Professional shopping assistant who helps clients find the best products at the best prices. Expert in navigating local markets.', location: 'Kicukiro', rating: 4.5, reviews: 15, verified: true, featured: false, status: 'active', phone: '0789296912', photo: '', conduct: 'Trustworthy, quick, and detail-oriented.' },
        { id: 'WK006', name: 'Grace Mukamana', profession: 'Professional Cook', email: 'grace@kigali.com', password: 'password123', skills: ['Cooking', 'Meal Prep', 'Nutrition'], description: 'Experienced cook specializing in healthy meal preparation and traditional Rwandan recipes. Available for daily or event cooking.', location: 'Nyarugenge', rating: 4.6, reviews: 22, verified: true, featured: false, status: 'active', phone: '0789296912', photo: '', conduct: 'Clean, efficient, and health-conscious.' },
        { id: 'WK007', name: 'Claude Ndayisaba', profession: 'Project Planner', email: 'claude@kigali.com', password: 'password123', skills: ['Project Planning', 'Consulting', 'Business Strategy'], description: 'Expert project planner helping businesses and individuals prepare, plan, and execute projects successfully.', location: 'Gasabo', rating: 4.4, reviews: 11, verified: true, featured: false, status: 'active', phone: '0789296912', photo: '', conduct: 'Analytical, strategic, and reliable.' },
        { id: 'WK008', name: 'Aline Niyonzima', profession: 'Beauty Specialist', email: 'aline@kigali.com', password: 'password123', skills: ['Beauty Services', 'Skincare', 'Makeup'], description: 'Professional beauty specialist offering skincare treatments, makeup services, and beauty consultations.', location: 'Kicukiro', rating: 4.3, reviews: 8, verified: true, featured: false, status: 'active', phone: '0789296912', photo: '', conduct: 'Gentle, professional, and passionate.' }
    ],

    services: [
        { id: 'SV001', name: 'Catering Services', icon: '🍽️', description: 'Professional catering for events, ceremonies, and parties.', price: 50000, unit: 'per event' },
        { id: 'SV002', name: 'Cooking Services', icon: '👨‍🍳', description: 'Personal cooking and meal preparation at your home.', price: 15000, unit: 'per day' },
        { id: 'SV003', name: 'Hair & Beauty', icon: '💇‍♀️', description: 'Professional hair styling, braiding, and beauty services.', price: 10000, unit: 'per session' },
        { id: 'SV004', name: 'Soap Making', icon: '🧼', description: 'Custom organic soap production and supply.', price: 20000, unit: 'per batch' },
        { id: 'SV005', name: 'Shopping Assistance', icon: '🛒', description: 'Expert shopping help for markets and stores.', price: 5000, unit: 'per trip' },
        { id: 'SV006', name: 'Project Planning', icon: '📋', description: 'Professional project preparation and planning.', price: 30000, unit: 'per project' }
    ],

    trainingCategories: [
        {
            id: 'TR001', name: 'Soap Making', icon: '🧼', videos: [
                { title: 'Introduction to Organic Soap Making', description: 'Learn basics of making natural organic soap from scratch.', duration: '15:30', videoId: 'dQw4w9WgXcQ' },
                { title: 'Advanced Soap Designs & Fragrances', description: 'Create beautiful designer soaps with custom scents.', duration: '22:10', videoId: 'dQw4w9WgXcQ' }
            ]
        },
        {
            id: 'TR002', name: 'Cooking', icon: '👨‍🍳', videos: [
                { title: 'Traditional Rwandan Cuisine', description: 'Master classic Rwandan dishes and cooking techniques.', duration: '28:00', videoId: 'dQw4w9WgXcQ' },
                { title: 'International Cooking Skills', description: 'Learn to cook popular international dishes.', duration: '25:45', videoId: 'dQw4w9WgXcQ' }
            ]
        },
        {
            id: 'TR003', name: 'Tofu Making', icon: '🫘', videos: [
                { title: 'Homemade Tofu from Scratch', description: 'Complete guide to making fresh tofu at home.', duration: '18:20', videoId: 'dQw4w9WgXcQ' }
            ]
        },
        {
            id: 'TR004', name: 'Hair & Beauty', icon: '💇‍♀️', videos: [
                { title: 'Professional Braiding Techniques', description: 'Learn popular braiding styles step by step.', duration: '35:00', videoId: 'dQw4w9WgXcQ' },
                { title: 'Makeup Artistry Basics', description: 'Essential makeup skills for professionals.', duration: '20:15', videoId: 'dQw4w9WgXcQ' }
            ]
        },
        {
            id: 'TR005', name: 'Project Planning', icon: '📋', videos: [
                { title: 'How to Write a Business Plan', description: 'Step-by-step business plan creation guide.', duration: '30:00', videoId: 'dQw4w9WgXcQ' }
            ]
        },
        {
            id: 'TR006', name: 'Catering', icon: '🍽️', videos: [
                { title: 'Event Catering Masterclass', description: 'How to cater for large events professionally.', duration: '40:00', videoId: 'dQw4w9WgXcQ' }
            ]
        },
        {
            id: 'TR007', name: 'Shopping Assistance', icon: '🛒', videos: [
                { title: 'Market Navigation Skills', description: 'How to find the best deals and products.', duration: '12:30', videoId: 'dQw4w9WgXcQ' }
            ]
        },
        {
            id: 'TR008', name: 'Professional Services', icon: '💼', videos: [
                { title: 'How to Offer Services Professionally', description: 'Build trust and deliver quality services.', duration: '16:00', videoId: 'dQw4w9WgXcQ' }
            ]
        },
        {
            id: 'TR009', name: 'Work Discipline', icon: '🏆', videos: [
                { title: 'Professional Behavior & Ethics', description: 'How to maintain discipline and earn respect.', duration: '14:45', videoId: 'dQw4w9WgXcQ' }
            ]
        }
    ],

    locations: ['Gasabo', 'Kicukiro', 'Nyarugenge'],

    admin: { email: 'admin@kigali.com', password: 'admin123', name: 'Admin' },

    sampleRequests: [
        { id: 'RQ001', userId: 'demo', userName: 'John Doe', workerId: 'WK001', workerName: 'Jean Baptiste Mugisha', serviceId: 'SV001', serviceName: 'Catering Services', date: '2026-03-01', time: '10:00', status: 'pending', price: 50000, createdAt: '2026-02-18T10:30:00', message: '' },
        { id: 'RQ002', userId: 'demo', userName: 'Jane Smith', workerId: 'WK002', workerName: 'Marie Claire Uwimana', serviceId: 'SV003', serviceName: 'Hair & Beauty', date: '2026-02-25', time: '14:00', status: 'completed', price: 10000, createdAt: '2026-02-15T09:00:00', rating: 5, review: 'Excellent service! Marie did a fantastic job.' }
    ]
};

function initializeData() {
    if (!localStorage.getItem('kc_initialized')) {
        localStorage.setItem('kc_workers', JSON.stringify(SEED_DATA.workers));
        localStorage.setItem('kc_services', JSON.stringify(SEED_DATA.services));
        localStorage.setItem('kc_training', JSON.stringify(SEED_DATA.trainingCategories));
        localStorage.setItem('kc_requests', JSON.stringify(SEED_DATA.sampleRequests));
        localStorage.setItem('kc_users', JSON.stringify([]));
        localStorage.setItem('kc_notifications', JSON.stringify([
            { id: 'N001', type: 'request', message: 'New service request from John Doe', read: false, createdAt: '2026-02-18T10:30:00' }
        ]));
        localStorage.setItem('kc_initialized', 'true');
    }
}

function getWorkers() { return JSON.parse(localStorage.getItem('kc_workers') || '[]'); }
function getServices() { return JSON.parse(localStorage.getItem('kc_services') || '[]'); }
function getTraining() { return JSON.parse(localStorage.getItem('kc_training') || '[]'); }
function getRequests() { return JSON.parse(localStorage.getItem('kc_requests') || '[]'); }
function getUsers() { return JSON.parse(localStorage.getItem('kc_users') || '[]'); }
function getNotifications() { return JSON.parse(localStorage.getItem('kc_notifications') || '[]'); }
function saveWorkers(w) { localStorage.setItem('kc_workers', JSON.stringify(w)); }
function saveServices(s) { localStorage.setItem('kc_services', JSON.stringify(s)); }
function saveRequests(r) { localStorage.setItem('kc_requests', JSON.stringify(r)); }
function saveUsers(u) { localStorage.setItem('kc_users', JSON.stringify(u)); }
function saveNotifications(n) { localStorage.setItem('kc_notifications', JSON.stringify(n)); }
function saveTraining(t) { localStorage.setItem('kc_training', JSON.stringify(t)); }

function updateWorkerPhoto(workerId, photoBase64) {
    const workers = getWorkers();
    const w = workers.find(w => w.id === workerId);
    if (w) {
        w.photo = photoBase64;
        saveWorkers(workers);
        return true;
    }
    return false;
}

initializeData();
