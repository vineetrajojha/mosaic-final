"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { User, Mail, Phone, School, ArrowRight, Upload, qrCode, CreditCard, Users, QrCode } from "lucide-react";
import Link from "next/link";
import eventsData from "../../events.json";
import { supabase } from "@/lib/supabaseClient";

// Helper to flatten events for the dropdown
const allEvents = eventsData.events.flatMap((category) =>
    category.items.map((item) => ({
        ...item,
        category: category.category,
    }))
);

export default function RegisterPage() {
    const [selectedEventId, setSelectedEventId] = useState<string>("");
    const [formData, setFormData] = useState({
        teamName: "",
        university: "",
        leaderName: "",
        leaderEmail: "",
        leaderPhone: "",
    });
    const [members, setMembers] = useState<{ name: string; phone: string }[]>([]);
    const [paymentFile, setPaymentFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const selectedEvent = allEvents.find((e) => e.id.toString() === selectedEventId);
    const isTeamEvent = selectedEvent?.participants && selectedEvent.participants !== "Solo";

    const handleEventChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedEventId(e.target.value);
        setMembers([]); // Reset members when event changes
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMemberChange = (index: number, field: "name" | "phone", value: string) => {
        const newMembers = [...members];
        newMembers[index][field] = value;
        setMembers(newMembers);
    };

    const addMember = () => {
        setMembers([...members, { name: "", phone: "" }]);
    };

    const removeMember = (index: number) => {
        const newMembers = [...members];
        newMembers.splice(index, 1);
        setMembers(newMembers);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPaymentFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        if (!selectedEvent || !paymentFile) {
            setMessage({ type: "error", text: "Please select an event and upload payment screenshot." });
            setLoading(false);
            return;
        }

        try {
            // 1. Upload Payment Screenshot
            const fileExt = paymentFile.name.split(".").pop();
            const fileName = `${Date.now()}_${formData.leaderPhone}.${fileExt}`;
            const { data: fileData, error: fileError } = await supabase.storage
                .from("payment-screenshots")
                .upload(fileName, paymentFile);

            if (fileError) throw fileError;

            // Get the public URL for the uploaded image
            const { data: { publicUrl } } = supabase.storage
                .from("payment-screenshots")
                .getPublicUrl(fileName);

            // 2. Insert Data into Supabase
            const { error: dbError } = await supabase.from("registrations").insert([
                {
                    event_id: selectedEvent.id,
                    event_name: selectedEvent.name,
                    category: selectedEvent.category,
                    team_name: isTeamEvent ? formData.teamName : null,
                    university: formData.university,
                    leader_name: formData.leaderName,
                    leader_email: formData.leaderEmail,
                    leader_phone: formData.leaderPhone,
                    members: members,
                    payment_screenshot_url: publicUrl,
                    amount: selectedEvent.fee,
                    status: "pending",
                },
            ]);

            if (dbError) throw dbError;

            setMessage({ type: "success", text: "Registration successful! We will contact you shortly." });
            // Reset form
            setFormData({
                teamName: "",
                university: "",
                leaderName: "",
                leaderEmail: "",
                leaderPhone: "",
            });
            setMembers([]);
            setPaymentFile(null);
            setSelectedEventId("");

        } catch (error: any) {
            console.error("Error submitting form:", error);
            setMessage({ type: "error", text: error.message || "Something went wrong. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[80vh]">
                <div className="w-full max-w-3xl">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Event Registration</h1>
                        <p className="text-secondary font-sans">
                            Secure your spot at Mosaic 2026. Fill out the details below.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">

                        {/* Event Selection */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-accent">1. Select Event</h3>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary">Choose Event</label>
                                <select
                                    value={selectedEventId}
                                    onChange={handleEventChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition appearance-none"
                                >
                                    <option value="">-- Select an Event --</option>
                                    {allEvents.map((event) => (
                                        <option key={event.id} value={event.id}>
                                            {event.name} ({event.category}) - {event.fee}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {selectedEvent && (
                                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent">
                                    <p><strong>Selected:</strong> {selectedEvent.name}</p>
                                    <p><strong>Fee:</strong> {selectedEvent.fee}</p>
                                    <p><strong>Participants:</strong> {selectedEvent.participants || "Solo"}</p>
                                </div>
                            )}
                        </div>

                        {/* Leader / Solo Details */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-accent">2. {isTeamEvent ? "Team Leader Details" : "Participant Details"}</h3>

                            {isTeamEvent && (
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                        <Users size={16} /> Team Name
                                    </label>
                                    <input
                                        type="text"
                                        name="teamName"
                                        value={formData.teamName}
                                        onChange={handleInputChange}
                                        required={isTeamEvent}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition"
                                        placeholder="Enter Team Name"
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                    <School size={16} /> College/University/Institute
                                </label>
                                <input
                                    type="text"
                                    name="university"
                                    value={formData.university}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition"
                                    placeholder="University Name"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                        <User size={16} /> Name
                                    </label>
                                    <input
                                        type="text"
                                        name="leaderName"
                                        value={formData.leaderName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                        <Phone size={16} /> Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="leaderPhone"
                                        value={formData.leaderPhone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                    <Mail size={16} /> Email Address
                                </label>
                                <input
                                    type="email"
                                    name="leaderEmail"
                                    value={formData.leaderEmail}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>

                        {/* Team Members */}
                        {isTeamEvent && (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-accent">3. Team Members</h3>
                                    <button
                                        type="button"
                                        onClick={addMember}
                                        className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg transition"
                                    >
                                        + Add Member
                                    </button>
                                </div>

                                {members.map((member, index) => (
                                    <div key={index} className="grid md:grid-cols-2 gap-4 p-4 border border-white/5 rounded-lg bg-black/10">
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                placeholder={`Member ${index + 1} Name`}
                                                value={member.name}
                                                onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                                                required
                                                className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-foreground focus:outline-none focus:border-accent transition"
                                            />
                                        </div>
                                        <div className="space-y-2 flex gap-2">
                                            <input
                                                type="tel"
                                                placeholder="Contact"
                                                value={member.phone}
                                                onChange={(e) => handleMemberChange(index, "phone", e.target.value)}
                                                required
                                                className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-foreground focus:outline-none focus:border-accent transition"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeMember(index)}
                                                className="text-red-400 hover:text-red-300 px-2"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                {members.length === 0 && <p className="text-sm text-gray-500 italic">No members added yet.</p>}
                            </div>
                        )}

                        {/* Payment */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-accent">
                                {isTeamEvent ? "4. Payment" : "3. Payment"}
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4 flex flex-col items-center justify-center p-6 bg-white py-8 rounded-xl">
                                    {/* Placeholder QR Code */}
                                    <QrCode size={150} className="text-black" />
                                    <p className="text-black font-bold text-center">Scan to Pay: {selectedEvent?.fee || "0/-"}</p>
                                    <p className="text-xs text-gray-600 text-center">UPI ID: mosaic@upi</p>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                        <Upload size={16} /> Upload Payment Screenshot
                                    </label>
                                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-accent/50 transition cursor-pointer relative">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            required
                                        />
                                        <Upload size={32} className="text-secondary mb-2" />
                                        <p className="text-sm text-secondary">
                                            {paymentFile ? paymentFile.name : "Click to upload or drag & drop"}
                                        </p>
                                        <p className="text-xs text-secondary/60 mt-1">JPG, PNG up to 5MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {message && (
                            <div className={`p-4 rounded-lg text-center font-bold ${message.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                {message.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold font-heading hover:opacity-90 transition flex items-center justify-center gap-2 mt-4 hover:shadow-[0_0_20px_rgba(238,183,2,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Submitting..." : "Complete Registration"} <ArrowRight size={18} />
                        </button>

                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
