// app/api/products/route.js
import { NextResponse } from 'next/server';
import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET() {
    try {
        await initMongoose();
        const products = await Product.find().exec();
        return NextResponse.json(products);
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
