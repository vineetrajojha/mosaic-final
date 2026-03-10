"use server";

import { supabaseAdmin } from "@/lib/supabaseClient";

export async function submitRegistration(formData: FormData) {
    try {
        // 1. Extract file and data
        const paymentFile = formData.get("paymentFile") as File;
        const registrationDataStr = formData.get("registrationData") as string;

        if (!paymentFile || !(paymentFile instanceof File) || !paymentFile.name || !registrationDataStr) {
            return { success: false, error: "Missing required form data or valid file." };
        }

        const registrationData = JSON.parse(registrationDataStr);
        const { event_id, event_name, category, team_name, university, leader_name, leader_email, leader_phone, members, amount } = registrationData;

        // 2. Upload file
        const fileExt = paymentFile.name.split(".").pop();
        const fileName = `${Date.now()}_${leader_phone}.${fileExt}`;

        const fileBuffer = Buffer.from(await paymentFile.arrayBuffer());

        const { data: fileData, error: fileError } = await supabaseAdmin.storage
            .from("payment-screenshots")
            .upload(fileName, fileBuffer, {
                contentType: paymentFile.type,
                upsert: false
            });

        if (fileError) {
            console.error("Supabase storage error:", fileError);
            return { success: false, error: "Failed to upload payment screenshot." };
        }

        // Get safe public URL
        const { data: { publicUrl } } = supabaseAdmin.storage
            .from("payment-screenshots")
            .getPublicUrl(fileName);

        // 3. Database Insert
        const { error: dbError } = await supabaseAdmin.from("registrations").insert([
            {
                event_id,
                event_name,
                category,
                team_name,
                university,
                leader_name,
                leader_email,
                leader_phone,
                members,
                payment_screenshot_url: publicUrl,
                amount,
                status: "pending",
            }
        ]);

        if (dbError) {
            console.error("Supabase DB error:", dbError);
            return { success: false, error: "Database error occurred." };
        }

        return { success: true };
    } catch (e: any) {
        console.error("Registration Server Action Exception:", e);
        return { success: false, error: e instanceof Error ? e.message : String(e) };
    }
}
