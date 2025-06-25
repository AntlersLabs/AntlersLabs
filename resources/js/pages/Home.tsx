import BorderSepartor from '@/components/border-separator';
import { Gallery4 } from '@/components/CaseStudy';
import { FeatureGuide } from '@/components/feature-guide';
import Hero from '@/components/Hero';
import { BackgroundBeams } from '@/components/ui/background-beam';
import { Input } from '@/components/ui/input';
import ScrollVelocity from '@/components/ui/Valocity';

import DefaultLayout from '@/layouts/DefaultLayout';
import { Head } from '@inertiajs/react';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <DefaultLayout>
                <div className="container border-x p-0">
                    <div className="md:mt-0">
                        <Hero />
                    </div>
                </div>

                <BorderSepartor />
                <div className="container border-x">
                    <FeatureGuide />
                </div>

                <BorderSepartor />
                <div className="container border-x">
                    <Gallery4 />
                </div>

                {/* <BorderSepartor />
                <div className="container border-x">
                    <ThreeDMarqueeDemo />
                </div> */}

                <BorderSepartor />
                <div className="container border-x">
                    <ScrollVelocity texts={['Antlers Labs', 'initiatives']} velocity={100} className="custom-scroll-text text-red-600" />
                </div>
                <BorderSepartor />

                <div className="container border-x">

                </div>

                <BorderSepartor />
                <div className="container border-x">
                    <div className="bg-background relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md p-0 antialiased">
                        <div className="max-w-2xl">
                            <h1 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-7xl">
                                Want to work with us?
                            </h1>
                            <p></p>
                            <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
                                Join the ever evolbing team of Antlers Labs
                            </p>
                            <Input
                                type="text"
                                placeholder="hi@antlerslabs.com"
                                className="relative z-10 mt-4 w-full rounded-lg focus:ring-2 focus:ring-teal-500"
                            />
                        </div>
                        <BackgroundBeams />
                    </div>
                </div>
            </DefaultLayout>
        </div>
    );
};

export default Home;
