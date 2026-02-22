"use server";

import { supabaseAdmin } from "@/lib/supabaseClient";

export async function submitContact(formData: { name: string; email: string; subject: string; message: string }) {
    try {
        const { error } = await supabaseAdmin.from("contacts").insert([formData]);

        if (error) {
            console.error("Supabase insert error:", error);
            return { success: false, error: "Database error occurred." };
        }

        return { success: true };
    } catch (e: any) {
        console.error("Server action error:", e);
        return { success: false, error: e.message || "An unexpected error occurred." };
    }
}
