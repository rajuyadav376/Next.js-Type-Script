"use client";
import Link from "next/link";
import {use} from "react";

export default function NewsArticlePage({
    params, searchParams
}: {
    params:Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
    const {articleId} = use (params);
    const {lang="en"} = use (searchParams);
    return (
        <div>
            <h1> News Article Page {articleId}</h1>
            <p>Reading in {lang}.</p>

            <div>
                <Link href={`/arcticles/${articleId}?lang=en`}>English</Link>
                <br/>
                <Link href={`/arcticles/${articleId}?lang=es`}>Spanish</Link>
                <br/>
                <Link href={`/arcticles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>

    );
}