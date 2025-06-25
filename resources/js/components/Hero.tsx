'use client';
import { Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';
import TrueFocus from './ui/TrueFocus';

export default function HeroSection() {
    return (
        <>
            <main className="relative overflow-hidden">
                <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"></div>

                <section>
                    <div className="relative pt-24">
                        <div className="">
                            <div className="max-w-3xl text-center sm:mx-auto lg:mt-0 lg:mr-auto lg:w-4/5">
                                <Link href="/" className="mx-auto flex w-fit items-center gap-2 rounded-(--radius) border p-1 pr-3">
                                    <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">New</span>
                                    <span className="text-sm">Introduction Antlers Labs</span>
                                    <span className="block h-4 w-px bg-(--color-border)"></span>

                                    <ArrowRight className="size-4" />
                                </Link>

                                <h1 className="mt-8 text-4xl font-semibold text-balance md:text-5xl xl:text-6xl xl:[line-height:1.125]">
                                    Modern Software{' '}
                                    <TrueFocus
                                        sentence="Development Reimagined"
                                        manualMode={true}
                                        blurAmount={5}
                                        borderColor="red"
                                        animationDuration={2}
                                        pauseBetweenAnimations={1}
                                    />{' '}

                                </h1>
                                <p className="mx-auto mt-8 hidden max-w-2xl text-lg text-wrap sm:block">Where dreams become reality.</p>

                                <div className="mt-8">
                                    <Button size="lg" asChild>
                                        <Link href="#">
                                            <Rocket className="relative size-4" />
                                            <span className="text-nowrap">Lets Talk</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-16">
                            <div aria-hidden className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent from-35%" />
                        </div>
                    </div>
                </section>
                <section className="relative z-10 pb-16">
                    <div className="m-auto max-w-5xl">
                        <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                alt="Nvidia Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/column.svg"
                                alt="Column Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/github.svg"
                                alt="GitHub Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/nike.svg"
                                alt="Nike Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/laravel.svg"
                                alt="Laravel Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-7 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lilly.svg"
                                alt="Lilly Logo"
                                height="28"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                alt="Lemon Squeezy Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-6 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/openai.svg"
                                alt="OpenAI Logo"
                                height="24"
                                width="auto"
                            />
                            <img
                                className="h-4 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
                                alt="Tailwind CSS Logo"
                                height="16"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/vercel.svg"
                                alt="Vercel Logo"
                                height="20"
                                width="auto"
                            />
                            <img
                                className="h-5 w-fit dark:invert"
                                src="https://html.tailus.io/blocks/customers/zapier.svg"
                                alt="Zapier Logo"
                                height="20"
                                width="auto"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
