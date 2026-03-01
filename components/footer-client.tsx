"use client"

import Link from "next/link"
import { navLinks } from "@/lib/data"

export function FooterClient({ settings }: { settings?: any }) {
    const offices = settings?.offices || []

    return (
        <footer id="contact" className="bg-foreground text-background px-6 md:px-12 pt-20 pb-8">
            <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
                {/* Left: firm name */}
                <div className="lg:w-1/3">
                    <h2 className="font-serif text-4xl md:text-5xl leading-tight text-background whitespace-pre-line">
                        {settings?.firmName || "Collaborate\nDesign and Build"}
                    </h2>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/50 mt-6">
                        {settings?.tagline || "Architecture / Interiors / Strategy"}
                    </p>
                    {(settings?.contactEmail || settings?.contactPhone) && (
                        <div className="mt-8 font-mono text-xs text-background/80 flex flex-col gap-2">
                            {settings.contactEmail && (
                                <a href={`mailto:${settings.contactEmail}`} className="hover:text-background transition-colors">{settings.contactEmail}</a>
                            )}
                            {settings.contactPhone && (
                                <a href={`tel:${settings.contactPhone}`} className="hover:text-background transition-colors">{settings.contactPhone}</a>
                            )}
                        </div>
                    )}
                </div>

                {/* Right: offices */}
                <div className="lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {offices.map((office: any, index: number) => (
                        <div key={index}>
                            <p className="font-mono text-sm uppercase tracking-[0.15em] text-background mb-1">
                                {office.city}
                            </p>
                            <p className="font-mono text-xs text-background/60 whitespace-pre-line leading-relaxed">
                                {office.address}
                            </p>
                            {office.phone && (
                                <p className="font-mono text-xs text-background/60 mt-1">
                                    {office.phone}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom row */}
            <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="font-mono text-xs text-background/40">
                    {new Date().getFullYear()} {settings?.firmName?.split('\n').join(' ') || "Collaborate Design and Build"}. All rights reserved.
                </p>
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-mono text-xs uppercase tracking-[0.15em] text-background/50 hover:text-background transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    {settings?.linkedIn && (
                        <a href={settings.linkedIn} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.15em] text-background/50 hover:text-background transition-colors">LinkedIn</a>
                    )}
                    {settings?.instagram && (
                        <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.15em] text-background/50 hover:text-background transition-colors">Instagram</a>
                    )}
                </div>
            </div>
        </footer>
    )
}
