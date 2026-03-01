"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from "@/lib/data"
import Image from "next/image"
import { urlForImage } from "@/lib/imageUrl"

export function NavigationClient({ settings }: { settings?: any }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isMobileOpen])

    const isProjectPage = pathname.startsWith('/projects/')
    const isDarkNav = isProjectPage || isScrolled

    const selectedLogo = settings?.logos?.find((l: any) =>
        isDarkNav ? l.theme === 'dark' : l.theme === 'light'
    ) || settings?.logos?.[0]

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-background/95 backdrop-blur-sm border-b border-border py-4"
                    : "bg-transparent py-6"
                    }`}
            >
                <nav className={`flex items-center justify-between px-6 md:px-12 transition-colors duration-500 ${isDarkNav ? "text-foreground" : "text-background"
                    }`}>
                    <Link href="/" className="font-serif text-lg tracking-tight flex items-center gap-3">
                        {selectedLogo?.image ? (
                            <div className="relative h-10 w-40 md:h-12 md:w-56">
                                <Image
                                    src={urlForImage(selectedLogo.image, 240, 60)}
                                    alt={selectedLogo.image.alt || settings?.firmName || "Logo"}
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        ) : (
                            <span className={isDarkNav ? "text-foreground" : "text-background"}>
                                {settings?.firmName || "Collaborate"}
                            </span>
                        )}
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`underline-draw font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-500 ${isDarkNav ? "text-foreground/80 hover:text-foreground" : "text-background/80 hover:text-background"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            className={`font-mono text-xs uppercase tracking-[0.2em] px-5 py-2 border transition-all duration-500 ${isDarkNav
                                    ? "text-foreground border-foreground hover:bg-foreground hover:text-background"
                                    : "text-background border-background hover:bg-background hover:text-foreground"
                                }`}
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                            className={`block w-6 h-px origin-center transition-colors duration-500 ${isDarkNav || isMobileOpen ? "bg-foreground" : "bg-background"
                                }`}
                        />
                        <motion.span
                            animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className={`block w-6 h-px transition-colors duration-500 ${isDarkNav || isMobileOpen ? "bg-foreground" : "bg-background"
                                }`}
                        />
                        <motion.span
                            animate={isMobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                            className={`block w-6 h-px origin-center transition-colors duration-500 ${isDarkNav || isMobileOpen ? "bg-foreground" : "bg-background"
                                }`}
                        />
                    </button>
                </nav>
            </header>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-8"
                    >
                        <nav className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="font-serif text-4xl text-foreground hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.08, duration: 0.5 }}
                            >
                                <Link
                                    href="/#contact"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="font-serif text-4xl text-accent"
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
